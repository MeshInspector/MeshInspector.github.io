#!/usr/bin/env python3
"""Doxygen input filter: rewrite an emscripten ``--emit-tsd`` ``.d.mts`` into pseudo-C++.

Doxygen has no TypeScript parser, so the ``Js`` module (see ``../DoxyfileJs``) maps
``mts`` to C++ (``EXTENSION_MAPPING = mts=c++``) and pipes every ``*.mts`` input through
this filter (``FILTER_PATTERNS``). The embind-generated declaration file is very regular,
so a small structural transform is enough:

* ``export interface Name extends Base { ... }``            -> ``class Name : public Base { ... };``
* instance ``m(a: T): R;`` / ``get p(): T;`` / ``p: T;``    -> ``R m(T a);`` / ``T p;`` / ``T p;``
* the ``EmbindModule`` interface: ``Name: { statics }``     -> merged as ``static`` members / constructors
  of ``class Name``; bare ``f(a: T): R;`` entries           -> global ``R f(T a);``
* enum objects ``Name: {Key: XxxValue<0>, ...}``            -> ``enum Name { Key, ... };``

``/** ... */`` blocks are copied through verbatim and re-attached to the following
declaration, so the C++ documentation injected upstream renders on the JS symbols. TS type
names (``number``, ``string``, ``boolean``, ``any``, class names) are kept as-is; Doxygen
displays them literally, which is what a JS reader expects.

This transforms the *generated* ``bindings.d.mts`` (the ``--emit-tsd`` output), not the
hand-written ``index.d.mts`` overlay, whose ``Omit<>`` / mapped types are for ``tsc`` only.

Usage (invoked by Doxygen): ``typescript.py <file.d.mts>`` -> pseudo-C++ on stdout.
"""
import re
import sys

# Embind-plumbing interfaces that are not part of the public API.
_SKIP_TYPES = {"WasmModule", "ClassHandle", "EmbindModule", "RuntimeExports"}


def _split_top(s):
    """Split on top-level commas, ignoring commas nested inside ``<...>`` / ``(...)``."""
    parts, depth, cur = [], 0, ""
    for ch in s:
        if ch in "<([":
            depth += 1
        elif ch in ">)]":
            depth -= 1
        if ch == "," and depth == 0:
            parts.append(cur)
            cur = ""
        else:
            cur += ch
    if cur.strip():
        parts.append(cur)
    return parts


def _clean_type(t):
    """Reduce a TS type expression to a single bare name Doxygen can display."""
    t = t.strip()
    t = re.sub(r"<[^<>]*>", "", t)      # drop generic arguments
    t = t.split("|")[0].strip()          # collapse a union to its first arm
    t = t.replace("[]", "").strip()      # arrays: shown via the name, drop brackets
    return {"EmbindString": "string", "this": "void"}.get(t, t) or "any"


def _params(arglist):
    out = []
    for i, p in enumerate(x.strip() for x in _split_top(arglist)):
        if not p:
            continue
        m = re.match(r"(\w+)\??\s*:\s*(.+)", p)
        out.append(f"{_clean_type(m.group(2))} {m.group(1)}" if m else f"any _{i}")
    return ", ".join(out)


class Member:
    def __init__(self, decl, doc):
        self.decl = decl
        self.doc = doc


def _read_doc(lines, i):
    """If ``lines[i]`` opens a ``/** */`` block, return (block_lines, next_index)."""
    s = lines[i].strip()
    if not s.startswith("/**"):
        return None, i
    block = [s]
    while "*/" not in s and i + 1 < len(lines):
        i += 1
        s = lines[i].strip()
        block.append(s)
    return block, i + 1


def _emit_doc(doc, indent=""):
    return "".join(f"{indent}{ln}\n" for ln in doc) if doc else ""


def parse(src):
    lines = src.splitlines()
    classes = {}   # name -> {"base", "doc":[lines], "inst":[Member], "stat":[Member]}
    enums = {}     # name -> {"keys":[...], "doc":[lines]}
    frees = []     # [Member]

    def cls(name):
        return classes.setdefault(name, {"base": None, "doc": [], "inst": [], "stat": []})

    def enum_from(name, body, doc):
        keys = [k.split(":")[0].strip() for k in _split_top(body)]
        enums[name] = {"keys": [k for k in keys if re.match(r"\w+$", k)], "doc": doc}

    i, n, doc = 0, len(lines), []
    while i < n:
        block, ni = _read_doc(lines, i)
        if block is not None:
            doc, i = block, ni
            continue
        s = lines[i].strip()

        m = re.match(r"(\w+):\s*\{(.+Value<\d+>.*)\};?", s)          # enum object
        if m:
            enum_from(m.group(1), m.group(2), doc)
            doc, i = [], i + 1
            continue

        m = re.match(r"export interface (\w+)(?:<[^>]*>)?(?:\s+extends\s+([\w, ]+))?\s*\{", s)
        if m and m.group(1) not in _SKIP_TYPES and not m.group(1).endswith("Value"):
            c = cls(m.group(1))
            c["doc"] = doc          # the pending block documents the class itself
            if m.group(2):
                b = m.group(2).split(",")[0].strip()
                c["base"] = b if b not in _SKIP_TYPES else None
            i += 1
            mdoc = []               # a member is documented only by its own preceding block
            doc = []
            while i < n and lines[i].strip() != "}":
                block, ni = _read_doc(lines, i)
                if block is not None:
                    mdoc, i = block, ni
                    continue
                ms = lines[i].strip()
                g = re.match(r"get (\w+)\(\):\s*(.+);", ms)
                mth = re.match(r"(\w+)\((.*)\):\s*(.+);", ms)
                prop = re.match(r"(?:readonly )?(\w+)\??:\s*(.+);", ms)
                if g:
                    c["inst"].append(Member(f"{_clean_type(g.group(2))} {g.group(1)};", mdoc))
                elif mth:
                    c["inst"].append(Member(f"{_clean_type(mth.group(3))} {mth.group(1)}({_params(mth.group(2))});", mdoc))
                elif prop:
                    c["inst"].append(Member(f"{_clean_type(prop.group(2))} {prop.group(1)};", mdoc))
                mdoc = []
                i += 1
            doc, i = [], i + 1
            continue

        if re.match(r"(?:export )?interface EmbindModule\s*\{", s):
            i += 1
            fdoc = doc
            doc = []
            while i < n and lines[i].strip() != "}":
                block, ni = _read_doc(lines, i)
                if block is not None:
                    fdoc, i = block, ni
                    continue
                es = lines[i].strip()
                en = re.match(r"(\w+):\s*\{(.+Value<\d+>.*)\};?", es)
                stat = re.match(r"(\w+):\s*\{$", es)
                free = re.match(r"(\w+)\((.*)\):\s*(.+);", es)
                if en:
                    enum_from(en.group(1), en.group(2), fdoc)
                    fdoc, i = [], i + 1
                elif stat:
                    cname = stat.group(1)
                    c = cls(cname)
                    i += 1
                    sdoc = []
                    while i < n and lines[i].strip() not in ("};", "}"):
                        block, ni = _read_doc(lines, i)
                        if block is not None:
                            sdoc, i = block, ni
                            continue
                        ss = lines[i].strip()
                        ctor = re.match(r"new\((.*)\):\s*(.+);", ss)
                        sm = re.match(r"(\w+)\((.*)\):\s*(.+);", ss)
                        if ctor:
                            c["stat"].append(Member(f"{cname}({_params(ctor.group(1))});", sdoc))
                        elif sm:
                            c["stat"].append(Member(f"static {_clean_type(sm.group(3))} {sm.group(1)}({_params(sm.group(2))});", sdoc))
                        sdoc = []
                        i += 1
                    fdoc, i = [], i + 1
                elif free:
                    frees.append(Member(f"{_clean_type(free.group(3))} {free.group(1)}({_params(free.group(2))});", fdoc))
                    fdoc, i = [], i + 1
                else:
                    i += 1
            doc, i = [], i + 1
            continue

        doc, i = [], i + 1
    return classes, enums, frees


def render(classes, enums, frees):
    out = []
    for name, e in enums.items():
        doc = (_emit_doc(e["doc"]) if e["doc"] else "")
        out.append(f"{doc}enum {name} {{ {', '.join(e['keys'])} }};\n")
    for name, c in classes.items():
        if not c["inst"] and not c["stat"]:
            continue
        base = f" : public {c['base']}" if c["base"] else ""
        doc = (_emit_doc(c["doc"]) if c["doc"] else "")
        out.append(f"{doc}class {name}{base} {{\npublic:")
        for mem in c["stat"] + c["inst"]:
            out.append(_emit_doc(mem.doc, "  ") + f"  {mem.decl}")
        out.append("};\n")
    for mem in frees:
        out.append(_emit_doc(mem.doc) + mem.decl)
    return "\n".join(out) + "\n"


def main():
    src = open(sys.argv[1], encoding="utf-8", errors="replace").read()
    sys.stdout.write(render(*parse(src)))


if __name__ == "__main__":
    main()
