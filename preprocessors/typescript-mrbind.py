#!/usr/bin/env python3
"""Doxygen input filter: rewrite a TypeScript declaration file of the MeshLib JS bindings into pseudo-C++.

Doxygen has no TypeScript parser, so the ``Js`` module (``../DoxyfileJs``) maps ``mts`` to C++ and pipes
every ``*.mts`` input through this filter (``FILTER_PATTERNS``).

The input tree is the generated ``source/MeshLibJS/js`` of MeshLib (the ``WasmBindingsDts`` CI artifact):

* ``lib/**/*.d.mts`` declare the wrappers under their C names: ``export declare class MR_Mesh``,
  ``export declare enum MR_Axis``, ``export declare function MR_MeshLoad_fromMrmesh_std_istream``.
* ``index.d.mts`` and ``ns/**/*.d.mts`` re-export them under their JS names
  (``export { MR_MeshLoad_NamedMesh as NamedMesh }`` in ``ns/MeshLoad.d.mts``) and declare the
  overload dispatchers (``export declare function fromMrmesh(...)``).
* ``ffi.d.mts`` declares the runtime support, including the base classes ``CppObject``, ``CppStruct``
  and ``ScalarOutput`` that ``index.d.mts`` re-exports.

Every symbol is emitted under its JS name, ``ns/A/B.d.mts`` becoming ``namespace A { namespace B {``:

* ``export declare class MR_Mesh extends ffi.CppObject { ... }`` -> ``class Mesh : public CppObject { ... };``
* ``export declare enum MR_Axis { X = 0, ... }``                 -> ``enum Axis { X = 0, ... };``
* ``m(a: L.MR_Mesh | null): number;`` / ``get p(): T;`` / ``p: T;`` -> ``number m(Mesh a);`` / ``T p;`` / ``T p;``
* ``constructor(a: T);`` / ``static f(a: T): R;``                  -> ``Mesh(T a);`` / ``static R f(T a);``

The ``ffi`` plumbing functions, the ``new X(ffi.RAW, pointer, owned, owner)`` constructors and
the ``Fn`` callback type namespaces are left out. ``/** ... */`` blocks stay on the following declaration.

The JS names come from the ``index.d.mts`` found in the nearest parent directory of the input file.

Usage (invoked by Doxygen): ``typescript-mrbind.py <file.d.mts>`` -> pseudo-C++ on stdout.
"""
import pathlib
import re
import sys


def _split_top(s):
    """Split on top-level commas, ignoring commas nested inside ``<...>`` / ``(...)`` / ``[...]``."""
    parts, depth, cur = [], 0, ""
    for ch in s:
        if ch in "<([":
            depth += 1
        elif ch in ">)]" and not cur.endswith("="):
            depth -= 1
        if ch == "," and depth == 0:
            parts.append(cur)
            cur = ""
        else:
            cur += ch
    if cur.strip():
        parts.append(cur)
    return parts


def _ns_scope(root, f):
    return list(f.relative_to(root / "ns").with_suffix("").with_suffix("").parts)


def public_names(root):
    """C name -> JS scope path, from the re-exports of ``index.d.mts`` and ``ns/**/*.d.mts``."""
    names = {}
    files = [(root / "index.d.mts", [])] + [(f, _ns_scope(root, f)) for f in sorted((root / "ns").rglob("*.d.mts"))]
    for f, scope in files:
        for line in f.read_text(encoding="utf-8").splitlines():
            m = re.fullmatch(r'export \{ (.+) \} from "[./]*(?:lib/_all|ffi)\.mjs";', line)
            if not m:
                continue
            for item in m.group(1).split(","):
                src, _, dst = item.strip().partition(" as ")
                names[src] = scope + [dst or src]
    return names


def _doc_end(lines, i):
    while "*/" not in lines[i]:
        i += 1
    return i


def _block_end(lines, i):
    while lines[i] != "}":
        i += 1
    return i


class Converter:
    def __init__(self, names):
        self.names = names

    def type(self, t, self_name):
        """Reduce a TS type expression to a single name Doxygen can display."""
        t = _split_top(t.replace("|", ","))[0].strip()
        if t.startswith("("):
            return "function"
        t = re.sub(r"<.*>", "", t).replace("[]", "").strip()
        m = re.fullmatch(r"(?:L|ffi)\.(\w+)(?:\.Fn)?", t)
        if m:
            return "::".join(self.names[m.group(1)])
        return self_name if t == "this" else t

    def params(self, arglist, self_name):
        out = []
        for p in _split_top(arglist):
            name, t = re.fullmatch(r"\s*(\w+)\??\s*:\s*(.+)", p).groups()
            out.append(f"{self.type(t, self_name)} {name}")
        return ", ".join(out)

    def member(self, line, cls):
        """One class body line -> a pseudo-C++ member declaration, or None."""
        m = re.fullmatch(r"constructor\((.*)\);", line)
        if m:
            if m.group(1).startswith("raw: typeof ffi.RAW"):
                return None
            return f"{cls}({self.params(m.group(1), cls)});"
        m = re.fullmatch(r"get (\w+)\(\):\s*(.+);", line)
        if m:
            name, t = m.groups()
            return f"{self.type(t, cls)} {name};"
        m = re.fullmatch(r"(static )?(\w+)\((.*)\):\s*(.+);", line)
        if m:
            static, name, args, ret = m.groups()
            return f"{static or ''}{self.type(ret, cls)} {name}({self.params(args, cls)});"
        m = re.fullmatch(r"(static )?(?:readonly )?(\w+):\s*(.+);", line)
        if m:
            static, name, t = m.groups()
            return f"{static or ''}{self.type(t, cls)} {name};"
        return None

    def class_body(self, lines, cls):
        members, doc, k = [], "", 0
        while k < len(lines):
            s = lines[k].strip()
            if s.startswith("/**"):
                j = _doc_end(lines, k)
                doc = "".join("    " + ln.strip() + "\n" for ln in lines[k:j + 1])
                k = j + 1
                continue
            decl = self.member(s, cls)
            if decl:
                members.append(f"{doc}    {decl}\n")
            doc = ""
            k += 1
        return "".join(members)

    @staticmethod
    def wrap(path, doc, body):
        """``body`` inside the namespaces of ``path``, whose last element is the declared name."""
        opening = "".join(f"namespace {ns} {{ " for ns in path[:-1])
        closing = " }" * (len(path) - 1)
        return f"{opening}\n{doc}{body}\n{closing}\n"

    def convert(self, text, scope):
        """``scope`` is the JS scope of the file's own functions, or None when they are reached by re-exports."""
        lines = [ln.rstrip() for ln in text.splitlines()]
        out, doc, i = [], "", 0
        while i < len(lines):
            s = lines[i]
            if s.lstrip().startswith("/**"):
                j = _doc_end(lines, i)
                doc = "".join(ln.strip() + "\n" for ln in lines[i:j + 1])
                i = j + 1
                continue

            m = re.fullmatch(r"export declare function (\w+)\((.*)\):\s*(.+);", s)
            if m:
                name, args, ret = m.groups()
                path = self.names[name] if scope is None else scope + [name]
                out.append(self.wrap(path, doc, f"{self.type(ret, name)} {path[-1]}({self.params(args, name)});"))

            m = re.fullmatch(r"export (?:declare )?class (\w+)(?:<[^>]*>)?(?: extends ([\w.]+)(?:<[^>]*>)?)?\s*(\{\})?", s)
            if m:
                name, base, empty = m.groups()
                end = i if empty else _block_end(lines, i + 1)
                path = self.names[name]
                cls = path[-1]
                head = f"class {cls}" + (f" : public {self.type(base, cls)}" if base else "")
                body = self.class_body(lines[i + 2:end], cls)
                out.append(self.wrap(path, doc, f"{head}\n{{\npublic:\n{body}}};"))
                i = end

            m = re.fullmatch(r"export declare enum (\w+)", s)
            if m:
                end = _block_end(lines, i + 1)
                path = self.names[m.group(1)]
                keys = "".join(f"    {ln.strip()}\n" for ln in lines[i + 2:end])
                out.append(self.wrap(path, doc, f"enum {path[-1]}\n{{\n{keys}}};"))
                i = end

            if re.fullmatch(r"export declare namespace \w+|declare global", s):
                i = _block_end(lines, i + 1)
            doc = ""
            i += 1
        return "".join(out)


def main():
    f = pathlib.Path(sys.argv[1]).resolve()
    root = next(d for d in f.parents if (d / "index.d.mts").is_file())
    top = f.relative_to(root).parts[0]
    scope = [] if top == "index.d.mts" else _ns_scope(root, f) if top == "ns" else None
    sys.stdout.write(Converter(public_names(root)).convert(f.read_text(encoding="utf-8"), scope))


if __name__ == "__main__":
    main()
