#!/usr/bin/env python3
"""Doxygen input filter: rewrite the generated Rust bindings (the ``meshlib`` crate) into pseudo-C++.

Doxygen has no Rust parser, so the ``Rust`` module (see ``../DoxyfileRust``) maps ``rs`` to C++
(``EXTENSION_MAPPING = rs=c++``) and pipes every ``*.rs`` input through this filter
(``FILTER_PATTERNS``). The mrbind-generated crate is very regular, so a small parser is enough:

* the definitions live in modules named after the C files (``MRCMesh::MRMesh``) and ``lib.rs``
  re-exports them under the C++ namespaces (``meshlib::Mesh``, ``meshlib::mesh_builder::BuildSettings``).
  Every item is placed at its re-exported path, which is also how the signatures name the types,
  so Doxygen links them;
* ``pub struct`` / ``pub trait`` -> ``struct``, the traits it implements or derives -> base classes;
  the plain structs and the enums (``pub use crate::ffi::MR_X as X``) take their fields and
  constants from their ``#[repr(C)]`` definition in ``ffi``;
* ``pub fn f(a: A) -> R`` -> ``auto f(A a) -> R;`` (``static`` without ``self``, ``const`` with ``&self``),
  the generic bounds, ``unsafe`` and ``#[deprecated]`` go to the description;
* ``pub type`` -> ``using``, ``pub const`` -> ``static const``, ``pub mod`` -> ``namespace``.

Types keep the Rust spelling (``&mut meshlib::Mesh``, ``Option<&meshlib::VertCoords>``) with ``crate::``
shown as ``meshlib::`` and the lifetimes dropped. ``///`` comments pass through verbatim. The ``ffi``
module itself (the raw C declarations) is excluded in the Doxyfile.

The re-export table is built once per crate from all the files and cached in the temp directory.

Usage (invoked by Doxygen): ``rust.py <file.rs>`` -> pseudo-C++ on stdout.
"""
import hashlib
import json
import os
import re
import sys
import tempfile

_TOKEN = re.compile(r"""
    (?P<doc>//[/!](?!/)[^\n]*)
  | (?P<comment>//[^\n]*|/\*.*?\*/)
  | (?P<str>b?r(?P<hashes>\#*)".*?"(?P=hashes)|b?"(?:\\.|[^"\\])*")
  | (?P<char>b?'(?:\\.|[^'\\])')
  | (?P<life>'[A-Za-z_]\w*)
  | (?P<ident>[A-Za-z_]\w*)
  | (?P<num>\d[\w.]*)
  | (?P<punct>::|->|=>|[^\s\w])
  | (?P<ws>\s+)
""", re.S | re.X)

_WORDS = ("ident", "num", "life", "str", "char")
_SPACED = {"->", "=", "+", "=>"}


def tokenize(src):
    toks = []
    for m in _TOKEN.finditer(src):
        kind = "str" if m.lastgroup == "hashes" else m.lastgroup
        if kind not in ("ws", "comment"):
            toks.append((kind, m.group()))
    return toks


class Parser:
    def __init__(self, toks):
        self.t = toks
        self.i = 0

    def kind(self, k=0):
        j = self.i + k
        return self.t[j][0] if j < len(self.t) else None

    def text(self, k=0):
        j = self.i + k
        return self.t[j][1] if j < len(self.t) else None

    def take(self):
        self.i += 1
        return self.t[self.i - 1][1]

    def accept(self, s):
        if self.text() == s:
            self.i += 1
            return True
        return False

    def group(self, open_, close):
        """At ``open_``: consume the balanced group, return the tokens inside."""
        start, depth = self.i, 0
        while self.i < len(self.t):
            kind, s = self.t[self.i]
            self.i += 1
            if kind == "punct":
                if s == open_:
                    depth += 1
                elif s == close:
                    depth -= 1
                    if depth == 0:
                        return self.t[start + 1:self.i - 1]
        return self.t[start + 1:]

    def until(self, stops):
        """Tokens of a type up to a top-level stop token (not consumed)."""
        out, depth = [], 0
        while self.i < len(self.t):
            kind, s = self.t[self.i]
            if depth <= 0 and s in stops and kind in ("punct", "ident"):
                break
            if kind == "punct":
                if s in "([<":
                    depth += 1
                elif s in ")]>":
                    depth -= 1
            out.append(self.t[self.i])
            self.i += 1
        return out

    def skip_expr(self):
        """Skip an expression up to the top-level ``;`` (consumed)."""
        depth = 0
        while self.i < len(self.t):
            kind, s = self.t[self.i]
            self.i += 1
            if kind == "punct":
                if s in "([{":
                    depth += 1
                elif s in ")]}":
                    depth -= 1
                elif s == ";" and depth <= 0:
                    return

    def items(self, closing):
        """Items up to the closing ``}`` (consumed) or the end. Returns (items, inner docs)."""
        res, inner, docs, attrs = [], [], [], []
        while self.i < len(self.t):
            kind, s = self.t[self.i]
            if s == "}" and kind == "punct" and closing:
                self.i += 1
                break
            if kind == "doc":
                self.i += 1
                (inner if s.startswith("//!") else docs).append(s[3:])
                continue
            if s == "#":
                self.i += 1
                self.accept("!")
                attrs.append(self.group("[", "]") if self.text() == "[" else [])
                continue
            start = self.i
            item = self.item()
            if self.i == start:
                self.i += 1
            if item is not None:
                item["docs"], item["attrs"] = docs, attrs
                res.append(item)
            docs, attrs = [], []
        return res, inner

    def item(self):
        pub = unsafe = False
        if self.accept("pub"):
            pub = True
            if self.text() == "(":
                pub = False  # pub(crate) and the like
                self.group("(", ")")
        while True:
            s = self.text()
            if s in ("unsafe", "async"):
                unsafe = unsafe or s == "unsafe"
                self.i += 1
            elif s == "const" and self.text(1) in ("fn", "unsafe", "async"):
                self.i += 1
            elif s == "extern":
                self.i += 1
                if self.kind() == "str":
                    self.i += 1
                if self.text() == "{":
                    self.group("{", "}")
                    return None
                if self.text() == "crate":
                    self.skip_expr()
                    return None
            else:
                break
        kw = self.text()
        if kw == "fn":
            return self.fn(pub, unsafe)
        if kw in ("struct", "union", "enum"):
            return self.struct(pub, kw)
        if kw == "trait":
            return self.trait(pub)
        if kw == "impl":
            return self.impl()
        if kw == "mod":
            self.i += 1
            name = self.take()
            if self.accept(";"):
                return {"kind": "moddecl", "name": name, "pub": pub}
            self.i += 1
            body, inner = self.items(True)
            return {"kind": "mod", "name": name, "pub": pub, "body": body, "inner": inner}
        if kw == "use":
            self.i += 1
            path = self.until({";"})
            self.accept(";")
            return {"kind": "use", "pub": pub, "path": path}
        if kw == "type":
            self.i += 1
            name = self.take()
            gen = self.group("<", ">") if self.text() == "<" else None
            ty = []
            if self.accept("="):
                ty = self.until({";"})
            self.accept(";")
            return {"kind": "type", "pub": pub, "name": name, "gen": gen, "ty": ty}
        if kw in ("const", "static"):
            self.i += 1
            self.accept("mut")
            name = self.take()
            ty = self.until({"=", ";"}) if self.accept(":") else []
            self.skip_expr()
            return {"kind": "const", "pub": pub, "name": name, "ty": ty}
        # macro_rules! and anything else: skip it
        while self.i < len(self.t):
            s = self.text()
            if s == ";":
                self.i += 1
                return None
            if s == "{":
                self.group("{", "}")
                self.accept(";")
                return None
            self.i += 1
        return None

    def fn(self, pub, unsafe):
        self.i += 1
        name = self.take()
        gen = self.group("<", ">") if self.text() == "<" else None
        params = self.group("(", ")")
        ret = self.until({"{", ";", "where"}) if self.accept("->") else None
        if self.accept("where"):
            self.until({"{", ";"})
        if self.text() == "{":
            self.group("{", "}")
        else:
            self.accept(";")
        return {"kind": "fn", "pub": pub, "unsafe": unsafe, "name": name, "gen": gen, "params": params, "ret": ret}

    def struct(self, pub, kw):
        self.i += 1
        name = self.take()
        gen = self.group("<", ">") if self.text() == "<" else None
        fields = []
        if self.text() == "(":
            self.group("(", ")")
        if self.accept("where"):
            self.until({"{", ";"})
        if self.text() == "{":
            fields = fields_of(self.group("{", "}"), kw == "enum")
        else:
            self.accept(";")
        return {"kind": "enum" if kw == "enum" else "struct", "pub": pub, "name": name, "gen": gen, "fields": fields}

    def trait(self, pub):
        self.i += 1
        name = self.take()
        gen = self.group("<", ">") if self.text() == "<" else None
        supers = self.until({"{", "where"}) if self.accept(":") else []
        if self.accept("where"):
            self.until({"{"})
        self.i += 1
        body, _ = self.items(True)
        return {"kind": "trait", "pub": pub, "name": name, "gen": gen, "supers": supers, "body": body}

    def impl(self):
        self.i += 1
        gen = self.group("<", ">") if self.text() == "<" else None
        self.accept("!")
        head = self.until({"{", "where"})
        if self.accept("where"):
            self.until({"{"})
        self.i += 1
        body, _ = self.items(True)
        trait, target = None, head
        depth = 0
        for j, (kind, s) in enumerate(head):
            if s == "<":
                depth += 1
            elif s == ">":
                depth -= 1
            elif s == "for" and depth == 0 and kind == "ident":
                trait, target = head[:j], head[j + 1:]
                break
        return {"kind": "impl", "gen": gen, "trait": trait, "target": target, "body": body}


def fields_of(toks, is_enum):
    p, out, docs = Parser(toks), [], []
    while p.i < len(p.t):
        kind, s = p.t[p.i]
        if kind == "doc":
            docs.append(s[3:])
            p.i += 1
            continue
        if s == "#":
            p.i += 1
            p.group("[", "]")
            continue
        pub = p.accept("pub")
        if pub and p.text() == "(":
            pub = False
            p.group("(", ")")
        name = p.take()
        ty = []
        if p.accept(":"):
            ty = p.until({","})
        elif p.text() in ("(", "{"):
            p.group(p.text(), ")" if p.text() == "(" else "}")
        if p.accept("="):
            p.until({","})
        p.accept(",")
        out.append({"name": name, "pub": pub or is_enum, "ty": ty, "docs": docs})
        docs = []
    return out


def split_top(toks, sep=","):
    parts, cur, depth = [], [], 0
    for tok in toks:
        s = tok[1]
        if tok[0] == "punct":
            if s in "([<":
                depth += 1
            elif s in ")]>":
                depth -= 1
            elif s == sep and depth == 0:
                parts.append(cur)
                cur = []
                continue
        cur.append(tok)
    if cur:
        parts.append(cur)
    return parts


def join(toks):
    out, prev = [], None
    for kind, s in toks:
        if prev is not None:
            pk, ps = prev
            if (s in _SPACED or ps in _SPACED or ps in (",", ";", ":")
                    or (kind in _WORDS and pk in _WORDS)):
                out.append(" ")
        out.append(s)
        prev = (kind, s)
    return "".join(out)


# ---------------------------------------------------------------------------------------------
# The crate index: definition path -> re-exported path, ffi struct name -> re-exported path

def crate_root(path):
    d = os.path.dirname(os.path.abspath(path))
    while True:
        if os.path.isfile(os.path.join(d, "lib.rs")) and os.path.isdir(os.path.join(d, "ffi")):
            return d
        parent = os.path.dirname(d)
        if parent == d:
            return None
        d = parent


def module_of(root, path):
    rel = os.path.relpath(os.path.abspath(path), root).replace("\\", "/")[:-3].split("/")
    return rel[:-1] if rel[-1] in ("lib", "mod") else rel


def use_paths(toks):
    """``crate::A::B`` [``as C``] -> (["A", "B"], "C" or "B"), or None."""
    segs = [s for kind, s in toks if kind == "ident"]
    if "as" in segs:
        k = segs.index("as")
        segs, alias = segs[:k], segs[k + 1]
    else:
        alias = segs[-1] if segs else None
    if len(segs) < 2 or segs[0] != "crate":
        return None
    return segs[1:], alias


def build_index(root):
    reexport = {}

    def walk(items, prefix):
        for it in items:
            if it["kind"] == "use" and it["pub"]:
                u = use_paths(it["path"])
                if u:
                    src, dst = "::".join(u[0]), "::".join(prefix + [u[1]])
                    if src not in reexport or dst.count("::") < reexport[src].count("::"):
                        reexport[src] = dst
            elif it["kind"] == "mod" and it["pub"]:
                walk(it["body"], prefix + [it["name"]])

    with open(os.path.join(root, "lib.rs"), encoding="utf-8") as f:
        walk(Parser(tokenize(f.read())).items(False)[0], [])

    ffi = {}
    alias_re = re.compile(r"^pub use crate::ffi::(\w+) as (\w+);", re.M)
    for d, dirs, files in os.walk(root):
        if os.path.abspath(d) == os.path.abspath(root):
            dirs[:] = [x for x in dirs if x != "ffi"]
        for name in files:
            if not name.endswith(".rs") or name == "lib.rs":
                continue
            path = os.path.join(d, name)
            with open(path, encoding="utf-8") as f:
                src = f.read()
            mod = module_of(root, path)
            for m in alias_re.finditer(src):
                definition = "::".join(mod + [m.group(2)])
                ffi[m.group(1)] = reexport.get(definition, definition)
    return {"reexport": reexport, "ffi": ffi}


def load_index(root):
    lib = os.path.join(root, "lib.rs")
    st = os.stat(lib)
    stamp = [os.path.abspath(root), st.st_size, st.st_mtime_ns]
    key = hashlib.sha1(stamp[0].encode()).hexdigest()[:12]
    cache = os.path.join(tempfile.gettempdir(), f"meshlib-rust-doxygen-{key}.json")
    try:
        with open(cache, encoding="utf-8") as f:
            data = json.load(f)
        if data.get("stamp") == stamp:
            return data
    except (OSError, ValueError):
        pass
    data = build_index(root)
    data["stamp"] = stamp
    tmp = f"{cache}.{os.getpid()}"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f)
    os.replace(tmp, cache)
    return data


# ---------------------------------------------------------------------------------------------

class Emitter:
    def __init__(self, index, ffi_names=False):
        self.index = index
        self.ffi_names = ffi_names  # bare MR_X names refer to ffi structs (inside an ffi file)

    def public(self, segs):
        if segs[0] == "ffi" and len(segs) == 2:
            p = self.index["ffi"].get(segs[1])
            return "meshlib::" + (p if p else "ffi::" + segs[1])
        d = "::".join(segs)
        return "meshlib::" + self.index["reexport"].get(d, d)

    def type(self, toks, keep_lifetimes=False):
        out, i, n = [], 0, len(toks)
        while i < n:
            kind, s = toks[i]
            if kind == "life" and not keep_lifetimes:
                i += 1
                if i < n and toks[i][1] == ",":
                    i += 1
                continue
            if kind == "ident" and s == "crate" and i + 2 < n and toks[i + 1][1] == "::":
                segs, j = [], i + 2
                while j < n and toks[j][0] == "ident":
                    segs.append(toks[j][1])
                    if j + 2 < n and toks[j + 1][1] == "::" and toks[j + 2][0] == "ident":
                        j += 2
                    else:
                        j += 1
                        break
                out.append(("ident", self.public(segs)))
                i = j
                continue
            if kind == "ident" and self.ffi_names and s in self.index["ffi"]:
                out.append(("ident", "meshlib::" + self.index["ffi"][s]))
                i += 1
                continue
            out.append((kind, s))
            i += 1
        text = join(out)
        if not keep_lifetimes:
            text = re.sub(r"<\s*>", "", text).replace("<, ", "<").replace(", >", ">")
        return text

    def generics(self, gen):
        """-> (template line, notes on the bounds)."""
        if not gen:
            return "", []
        names, notes = [], []
        for part in split_top(gen):
            if not part or part[0][0] == "life":
                continue
            if part[0][1] == "const":
                names.append(f"{self.type(part[3:])} {part[1][1]}")
                continue
            names.append(f"typename {part[0][1]}")
            if len(part) > 1:
                notes.append(f"`{self.type(part, keep_lifetimes=True)}`")
        return (f"template<{', '.join(names)}> " if names else ""), notes

    @staticmethod
    def docs(lines, notes=(), attrs=(), indent=""):
        lines = list(lines)
        for a in attrs:
            if a and a[0][1] == "deprecated":
                msg = " ".join(s.strip('"') for kind, s in a if kind == "str")
                lines += [""] * bool(lines) + [f" \\deprecated {msg}".rstrip()]
        if notes:
            lines += [""] * bool(lines) + [f" {x}" for x in notes]
        return "".join(f"{indent}///{ln}\n" for ln in lines)

    def fn(self, f, member, indent):
        template, notes = self.generics(f["gen"])
        params, static, const = [], member, ""
        for k, p in enumerate(split_top(f["params"])):
            core = [s for kind, s in p if s not in ("&", "mut") and kind != "life"]
            if k == 0 and core and core[0] == "self":
                static = False
                if p[0][1] == "&" and not any(s == "mut" for kind, s in p):
                    const = " const"
                continue
            colon = next((j for j, (kind, s) in enumerate(p) if s == ":"), None)
            if colon is None:
                params.append(self.type(p))
                continue
            name = [s for kind, s in p[:colon] if kind == "ident" and s != "mut"]
            params.append(f"{self.type(p[colon + 1:])} {name[-1] if name else '_'}")
        if f["unsafe"]:
            notes.append("\\note This function is `unsafe`.")
        head = f"{template}{'static ' if static else ''}"
        args = ", ".join(params)
        if f["ret"]:
            decl = f"{head}auto {f['name']}({args}){const} -> {self.type(f['ret'])};"
        else:
            decl = f"{head}void {f['name']}({args}){const};"
        return self.docs(f["docs"], notes, f["attrs"], indent) + f"{indent}{decl}\n"

    def const(self, c, member, indent):
        decl = f"{'static ' if member else ''}const {self.type(c['ty'])} {c['name']};"
        return self.docs(c["docs"], (), c["attrs"], indent) + f"{indent}{decl}\n"


def derives(attrs):
    out = []
    for a in attrs:
        if a and a[0][1] == "derive":
            out += [s for kind, s in a[1:] if kind == "ident"]
    return out


class Unit:
    """Everything one file defines, keyed by the public path."""

    def __init__(self, emitter, module, ffi_items):
        self.e = emitter
        self.module = module
        self.types = {}      # public path -> record
        self.order = []
        self.free = []       # (namespace, text)
        self.ffi_items = ffi_items

    def path(self, mod, name):
        d = "::".join(mod + [name])
        return self.e.index["reexport"].get(d, d)

    def record(self, public, name=None):
        if public not in self.types:
            self.types[public] = {"docs": [], "attrs": [], "bases": [], "fields": [], "members": [],
                                  "gen": None, "trait": False, "name": name or public.split("::")[-1]}
            self.order.append(public)
        return self.types[public]

    def add_struct(self, rec, it, emitter):
        rec["docs"], rec["attrs"], rec["gen"] = it["docs"], it["attrs"], it["gen"]
        rec["bases"] += derives(it["attrs"])
        rec["fields"] = [(f, emitter) for f in it["fields"] if f["pub"]]

    def add_impl(self, rec, it, emitter):
        if it["trait"] is not None:
            rec["bases"].append(emitter.type(it["trait"]))
            return
        for m in it["body"]:
            if m["kind"] == "fn" and m["pub"]:
                rec["members"].append(emitter.fn(m, True, "    "))
            elif m["kind"] == "const" and m["pub"]:
                rec["members"].append(emitter.const(m, True, "    "))

    def walk(self, items, mod):
        for it in items:
            k = it["kind"]
            if k in ("struct", "enum") and it["pub"]:
                self.add_struct(self.record(self.path(mod, it["name"])), it, self.e)
            elif k == "trait" and it["pub"]:
                rec = self.record(self.path(mod, it["name"]))
                rec["docs"], rec["attrs"], rec["gen"], rec["trait"] = it["docs"], it["attrs"], it["gen"], True
                rec["bases"] += [self.e.type(b) for b in split_top(it["supers"], "+") if b and b[0][0] != "life"]
                for m in it["body"]:
                    if m["kind"] == "fn":
                        rec["members"].append(self.e.fn(m, True, "    "))
            elif k == "impl":
                names = [s for kind, s in it["target"] if kind == "ident"]
                if names and names[0] != "crate":
                    self.add_impl(self.record(self.path(mod, names[0])), it, self.e)
            elif k == "use" and it["pub"]:
                u = use_paths(it["path"])
                if u and u[0][0] == "ffi" and len(u[0]) == 2:
                    rec = self.record(self.path(mod, u[1]))
                    rec["docs"], rec["attrs"] = it["docs"], it["attrs"]
                    self.add_ffi(rec, u[0][1])
            elif k == "fn" and it["pub"]:
                public = self.path(mod, it["name"])
                ns, _, leaf = public.rpartition("::")
                it = dict(it, name=leaf)
                self.free.append((ns, self.e.fn(it, False, "")))
            elif k == "const" and it["pub"] and it["name"] != "_":
                ns, _, leaf = self.path(mod, it["name"]).rpartition("::")
                self.free.append((ns, self.e.const(dict(it, name=leaf), False, "")))
            elif k == "type" and it["pub"]:
                ns, _, leaf = self.path(mod, it["name"]).rpartition("::")
                template, notes = self.e.generics(it["gen"])
                text = self.e.docs(it["docs"], notes, it["attrs"]) + f"{template}using {leaf} = {self.e.type(it['ty'])};\n"
                self.free.append((ns, text))
            elif k == "mod":
                self.walk(it["body"], mod + [it["name"]])

    def add_ffi(self, rec, name):
        ffi_e = Emitter(self.e.index, ffi_names=True)
        for it in self.ffi_items:
            if it["kind"] in ("struct", "enum") and it["name"] == name:
                self.add_struct(rec, dict(it, docs=rec["docs"], attrs=rec["attrs"] + it["attrs"]), ffi_e)
            elif it["kind"] == "impl" and [s for kind, s in it["target"] if kind == "ident"][:1] == [name]:
                self.add_impl(rec, it, ffi_e)

    def emit(self, inner_docs):
        by_ns = {}
        for public in self.order:
            rec = self.types[public]
            ns, _, leaf = public.rpartition("::")
            template, notes = self.e.generics(rec["gen"])
            if rec["trait"]:
                notes = ["This is a trait."] + notes
            bases = list(dict.fromkeys(b for b in rec["bases"] if b))
            head = f"{template}struct {leaf}" + (" : " + ", ".join(f"public {b}" for b in bases) if bases else "")
            body = []
            for f, emitter in rec["fields"]:
                body.append(Emitter.docs(f["docs"], indent="    ")
                            + f"    {emitter.type(f['ty']) if f['ty'] else 'int'} {f['name']};\n")
            body += rec["members"]
            text = Emitter.docs(rec["docs"], notes, rec["attrs"]) + head + "\n{\n" + "".join(body) + "};\n"
            by_ns.setdefault(ns, []).append(text)
        for ns, text in self.free:
            by_ns.setdefault(ns, []).append(text)

        out = []
        if inner_docs:
            out.append(Emitter.docs(inner_docs))
            if not by_ns:
                out.append("namespace meshlib {}\n")
        for ns, texts in by_ns.items():
            segs = ["meshlib"] + (ns.split("::") if ns else [])
            out.append(" ".join(f"namespace {s} {{" for s in segs) + "\n\n")
            out.append("\n".join(texts))
            out.append("\n" + "}" * len(segs) + "\n\n")
        return "".join(out)


def convert(path):
    root = crate_root(path)
    with open(path, encoding="utf-8") as f:
        src = f.read()
    if root is None:
        return ""
    index = load_index(root)
    module = module_of(root, path)
    items, inner = Parser(tokenize(src)).items(False)
    ffi_items = []
    if module and re.search(r"^pub use crate::ffi::", src, re.M):
        ffi_path = os.path.join(root, "ffi", *module) + ".rs"
        if os.path.isfile(ffi_path):
            with open(ffi_path, encoding="utf-8") as f:
                ffi_items = Parser(tokenize(f.read())).items(False)[0]
    unit = Unit(Emitter(index), module, ffi_items)
    unit.walk(items, module)
    return unit.emit(inner if not module else [])


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8", newline="\n")
    sys.stdout.write(convert(sys.argv[1]))
