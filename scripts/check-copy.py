"""Copy provenance check for the Chambers site port.

Every visible string in a ported file must already exist in the site as it
stood before the port (git ref, default `main`): the old page files, shared
components and config. Reports any sentence-like string that does not appear
there, so new or reworded copy cannot slip in.

usage: python scripts/check-copy.py [--ref main] <file> [<file> ...]
"""

import html
import re
import subprocess
import sys

REF = "main"
args = sys.argv[1:]
if args[:1] == ["--ref"]:
    REF, args = args[1], args[2:]

CORPUS_ROOTS = ["app", "components", "config", "content", "lib"]


def norm(s: str) -> str:
    s = s.replace("{\" \"}", " ").replace("{' '}", " ")
    s = html.unescape(s)
    s = s.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    s = s.replace("\\'", "'").replace('\\"', '"')
    return re.sub(r"\s+", " ", s).strip()


def corpus() -> str:
    files = subprocess.run(
        ["git", "ls-tree", "-r", "--name-only", REF, "--", *CORPUS_ROOTS],
        capture_output=True, text=True, check=True,
    ).stdout.split()
    parts = []
    for f in files:
        if not f.endswith((".ts", ".tsx", ".mdx", ".json", ".md")):
            continue
        out = subprocess.run(["git", "show", f"{REF}:{f}"], capture_output=True, check=False)
        parts.append(out.stdout.decode("utf-8", "replace"))
    return norm("\n".join(parts))


TAILWINDISH = re.compile(r"[\[\]:/]|^-|-\d|^(?:[a-z]+-)+[a-z0-9.]+$")


def looks_like_classes(s: str) -> bool:
    toks = s.split()
    if not toks:
        return True
    hits = sum(1 for t in toks if TAILWINDISH.search(t) or t in {"flex", "grid", "block", "hidden", "relative", "absolute", "uppercase", "italic", "group", "border", "rounded", "shrink-0", "truncate", "underline"})
    return hits / len(toks) > 0.4


def candidates(src: str):
    # strip comments
    src = re.sub(r"/\*.*?\*/", " ", src, flags=re.S)
    src = re.sub(r"(^|[^:])//[^\n]*", r"\1", src)
    src = re.sub(r"\{/\*.*?\*/\}", " ", src, flags=re.S)
    found = []
    for m in re.finditer(r">([^<>{}]+)<", src):
        found.append(m.group(1))
    for m in re.finditer(r'"((?:[^"\\\n]|\\.)*)"', src):
        found.append(m.group(1))
    for m in re.finditer(r"`([^`$]*)`", src):
        found.append(m.group(1))
    for raw in found:
        s = norm(raw)
        if len(s) < 18 or len(s.split()) < 3:
            continue
        if s.startswith(("@/", "./", "../", "/", "http", "#", "data:")):
            continue
        if looks_like_classes(s):
            continue
        if any(code in s for code in ("=>", "===", "{", "}", "&&", "||", "</", "/>", "?.", ") : (", "className=")):
            continue
        yield s


def main() -> int:
    if not args:
        print(__doc__)
        return 2
    text = corpus()
    bad = 0
    for path in args:
        src = open(path, encoding="utf-8").read()
        misses = [c for c in dict.fromkeys(candidates(src)) if c not in text]
        if misses:
            bad += len(misses)
            print(f"\n{path}: {len(misses)} string(s) not on the site before the port")
            for m in misses:
                print("  -", m[:160])
        else:
            print(f"{path}: ok")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
