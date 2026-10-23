#!/usr/bin/env python3
"""Repo-wide consistency checks for the hex design-repo.

Checks (each prints PASS / WARN / FAIL):
  * the example PageSpec is schema-valid (Draft-07) and passes the semantic validator,
  * the semantic validator accepts every route's observed node sequence,
  * allowlist parity: allowlist <-> contract files <-> schema (ids, props, content fields, variants, asset roles),
  * citation validity: every measuredFrom ref is in the ledger, every ledger 'path:line' resolves and its anchors
    are on that line (downgraded to WARN when the sibling source tree is absent),
  * component links: every section's implementedBy / alsoImplementedBy names a definition that exists in that source
    file, and matches the sibling ../ia.json (downgraded to WARN when the source tree is absent),
  * token-reference resolution (catalog, contract token lists, {ref} strings incl. responsive breakpoints),
  * theme closure (every semantic role resolved in both themes),
  * pinned asset-role policies,
  * graph-rule <-> validator parity,
  * manifest count recompute, version parity, and a repo-wide absolute-path scan.

Usage: python3 extraction/verify_all.py     (exit 1 on any FAIL)
"""
import glob
import json
import os
import re
import sys

sys.dont_write_bytecode = True
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(REPO, "schema"))
sys.path.insert(0, os.path.join(REPO, "schema", "tests"))
import semantic_validate as sv  # noqa: E402
import jsonschema  # noqa: E402

RESULTS = []


def load(rel):
    with open(os.path.join(REPO, rel), encoding="utf-8") as f:
        return json.load(f)


def report(name, problems, warn_only=False):
    status = "PASS" if not problems else ("WARN" if warn_only else "FAIL")
    RESULTS.append(status)
    print("%-4s %s" % (status, name))
    for p in problems[:15]:
        print("       - %s" % p)
    if len(problems) > 15:
        print("       ... %d more" % (len(problems) - 15))


def walk(obj, key=None):
    """Yield (key, value) for every value in a JSON tree."""
    if isinstance(obj, dict):
        for k, v in obj.items():
            yield k, v
            yield from walk(v, k)
    elif isinstance(obj, list):
        for v in obj:
            yield from walk(v, key)


def strings(obj):
    if isinstance(obj, str):
        yield obj
    elif isinstance(obj, dict):
        for v in obj.values():
            yield from strings(v)
    elif isinstance(obj, list):
        for v in obj:
            yield from strings(v)


def token_leaves(obj, prefix=""):
    if isinstance(obj, dict):
        if "$value" in obj:
            yield prefix, obj
            return
        for k, v in obj.items():
            if not k.startswith("$"):
                yield from token_leaves(v, prefix + "." + k if prefix else k)


def repo_json_files():
    return sorted(p for p in glob.glob(os.path.join(REPO, "**", "*.json"), recursive=True))


# --------------------------------------------------------------------------- checks
def check_example(repo):
    ex = load("schema/example.pagespec.json")
    probs = ["schema: %s" % e.message[:200] for e in jsonschema.Draft7Validator(repo["schema"]).iter_errors(ex)]
    report("example is schema-valid (Draft-07)", probs)
    report("example passes the semantic validator", [f for f in sv.check(ex, repo) if f["severity"] == "error"])


def check_routes(repo):
    import adversarial_test as at
    probs = []
    for r in repo["routes"]["routes"]:
        route = r["path"] if r["path"] != "*" else "/page-not-built-yet/"
        spec = at.spec_for(r["template"], [tuple(x) for x in r["observedSequence"]], route, r["theme"])
        errs = at.errors(spec)
        if errs:
            probs.append("%s: %s" % (r["path"], errs))
    report("semantic validator accepts all %d observed route sequences" % len(repo["routes"]["routes"]), probs)


def check_allowlist(repo):
    al = load("tokens/llm/component-allowlist.json")
    entries = {e["id"]: e for e in al["entries"]}
    probs = []
    files = {}
    for layer, d in (("primitive", "primitives"), ("component", "components"), ("section", "sections")):
        for p in sorted(glob.glob(os.path.join(REPO, d, "*.json"))):
            c = load(os.path.relpath(p, REPO))
            files[c["id"]] = (layer, os.path.relpath(p, REPO), c)
    for i in sorted(set(entries) - set(files)):
        probs.append("allowlist entry %s has no contract file" % i)
    for i in sorted(set(files) - set(entries)):
        probs.append("contract %s missing from allowlist" % i)
    schema_sections = set(repo["schema"]["definitions"]["node"]["properties"]["section"]["enum"])
    schema_defs = {k[len("content__"):] for k in repo["schema"]["definitions"] if k.startswith("content__")}
    for i in sorted(set(entries) & set(files)):
        e, (layer, rel, c) = entries[i], files[i]
        if e["layer"] != layer:
            probs.append("%s: layer %s != %s" % (i, e["layer"], layer))
        if e["file"] != rel:
            probs.append("%s: file %s != %s" % (i, e["file"], rel))
        if layer in ("primitive", "component"):
            if sorted(e["settableProps"]) != sorted(c.get("props", {})):
                probs.append("%s: settableProps drift" % i)
        else:
            if sorted(e["contentFields"]) != sorted(c["content"]):
                probs.append("%s: contentFields drift" % i)
            if list(e["variants"]) != list(c["variants"]):
                probs.append("%s: variants drift" % i)
            if sorted(e["assetRoles"]) != sorted(c.get("assetRoles", [])):
                probs.append("%s: assetRoles drift" % i)
            if c.get("schemaRef") != "schema/pagespec.schema.json#/definitions/content__%s" % i:
                probs.append("%s: schemaRef %r" % (i, c.get("schemaRef")))
            for r in c.get("assetRoles", []):
                if r not in repo["assets"]:
                    probs.append("%s: unknown assetRole %s" % (i, r))
    sec_ids = {i for i, v in files.items() if v[0] == "section"}
    for i in sorted(sec_ids ^ schema_sections):
        probs.append("section %s: contract/schema enum mismatch" % i)
    for i in sorted(sec_ids ^ schema_defs):
        probs.append("section %s: contract/schema content definition mismatch" % i)
    report("allowlist parity (allowlist <-> contracts <-> schema, %d entries)" % len(entries), probs)
    return files


# Anchors are stored as plain text: markdown emphasis/code marks dropped, typographic punctuation folded to ASCII.
FOLD = str.maketrans({"’": "'", "‘": "'", "“": '"', "”": '"', "–": "-", "—": "-",
                      "…": "...", " ": " "})


def norm(s):
    return re.sub(r"\s+", " ", re.sub(r"[`*]", "", s.replace("\\|", "|").translate(FOLD))).strip()


def check_citations():
    ledger = load("extraction/measured-values.json")
    src_root = os.path.normpath(os.path.join(REPO, ledger["sourceRoot"]))
    known = {c["ref"] for c in ledger["citations"]} | {f["ref"] for f in ledger["files"]}
    used = set()
    for p in repo_json_files():
        for k, v in walk(json.load(open(p, encoding="utf-8"))):
            if k == "measuredFrom" and isinstance(v, list):
                used.update(x for x in v if isinstance(x, str))
    report("every measuredFrom ref is in the citation ledger (%d refs)" % len(used),
           ["%s not in ledger" % r for r in sorted(used - known)])

    present = os.path.isfile(os.path.join(src_root, "CLONE_SPEC.md"))
    probs, cache = [], {}
    for c in ledger["citations"]:
        path, _, line = c["ref"].rpartition(":")
        full = os.path.join(src_root, path)
        if not os.path.isfile(full):
            probs.append("%s: file missing" % c["ref"])
            continue
        if full not in cache:
            with open(full, encoding="utf-8", errors="replace") as f:
                cache[full] = f.read().split("\n")
        lines = cache[full]
        n = int(line)
        if not 1 <= n <= len(lines):
            probs.append("%s: line out of range (%d lines)" % (c["ref"], len(lines)))
            continue
        text = norm(lines[n - 1])
        for a in c.get("anchors", []):
            if norm(a) not in text:
                probs.append("%s: anchor %r not on line" % (c["ref"], a))
    for f in ledger["files"]:
        if not os.path.exists(os.path.join(src_root, f["ref"])):
            probs.append("%s: file missing" % f["ref"])
    name = "citation ledger resolves (%d line citations, %d files)" % (len(ledger["citations"]), len(ledger["files"]))
    if not present:
        name += " -- source tree absent, downgraded"
    report(name, probs, warn_only=not present)


def check_components(files):
    """implementedBy is 'path > Name' (or a bare 'path'), relative to the source project root like citations."""
    src_root = os.path.normpath(os.path.join(REPO, load("extraction/measured-values.json")["sourceRoot"]))
    present = os.path.isfile(os.path.join(src_root, "CLONE_SPEC.md"))
    sections = {i: c for i, (layer, rel, c) in files.items() if layer == "section"}
    shape, probs = [], []
    for i, c in sorted(sections.items()):
        refs = [c.get("implementedBy")] + list(c.get("alsoImplementedBy", []))
        if not isinstance(refs[0], str) or not refs[0]:
            shape.append("%s: implementedBy missing" % i)
            continue
        for ref in refs:
            path, _, name = ref.partition(" > ")
            if not path.startswith("src/"):
                shape.append("%s: %r must be a src/ path" % (i, ref))
                continue
            full = os.path.join(src_root, path)
            if not os.path.isfile(full):
                probs.append("%s: %s missing" % (i, path))
            elif name:
                with open(full, encoding="utf-8") as f:
                    if not re.search(r"\b(function|const|let|class)\s+%s\b" % re.escape(name), f.read()):
                        probs.append("%s: %s is not defined in %s" % (i, name, path))
    ia_path = os.path.join(src_root, "ia.json")
    if os.path.isfile(ia_path):
        with open(ia_path, encoding="utf-8") as f:
            ia = json.load(f)["sections"]
        for i in sorted(set(sections) | set(ia)):
            a, b = sections.get(i, {}), ia.get(i, {})
            for k in ("implementedBy", "alsoImplementedBy"):
                if a.get(k) != b.get(k):
                    probs.append("%s: %s differs between the contract and ia.json" % (i, k))
    elif present:
        probs.append("ia.json missing from the source project root")
    report("every section names its component (%d sections)" % len(sections), shape)
    name = "component links resolve in the source and match ia.json"
    if not present:
        name += " -- source tree absent, downgraded"
    report(name, probs, warn_only=not present)


def check_tokens(files):
    leaves = {}
    for p in sorted(glob.glob(os.path.join(REPO, "tokens", "[0-9][0-9]-*", "*.json"))):
        if os.sep + "10-semantic" + os.sep in p:
            continue
        for name, t in token_leaves(json.load(open(p, encoding="utf-8"))):
            leaves[name] = t
    semantic = load("tokens/10-semantic/semantic.json")["tokens"]
    names = set(leaves) | set(semantic)
    catalog = load("tokens/llm/token-catalog.json")["tokens"]
    probs = ["catalog token %s does not resolve" % t for t in catalog if t not in names]
    for i, (layer, rel, c) in sorted(files.items()):
        for t in c.get("tokens", []):
            if t not in catalog:
                probs.append("%s: token %s not in token-catalog.json" % (rel, t))
    ref_re = re.compile(r"\{([A-Za-z][\w.\-]*)\}")
    scan = glob.glob(os.path.join(REPO, "tokens", "**", "*.json"), recursive=True)
    for d in ("primitives", "components", "sections"):
        scan += glob.glob(os.path.join(REPO, d, "*.json"))
    n_refs = 0
    for p in sorted(scan):
        for s in strings(json.load(open(p, encoding="utf-8"))):
            for r in ref_re.findall(s):
                n_refs += 1
                if r not in names:
                    probs.append("%s: {%s} does not resolve" % (os.path.relpath(p, REPO), r))
    report("token references resolve (%d catalog names, %d {ref} strings)" % (len(catalog), n_refs), probs)

    probs = []
    for th in ("light", "dark"):
        res = load("tokens/themes/%s.json" % th)["resolve"]
        for k in sorted(set(semantic) - set(res)):
            probs.append("%s: %s unresolved" % (th, k))
        for k in sorted(set(res) - set(semantic)):
            probs.append("%s: %s is not a semantic token" % (th, k))
    report("theme closure (%d semantic roles x 2 themes)" % len(semantic), probs)
    return leaves, semantic


def check_assets(repo):
    a = load("assets/asset-roles.json")
    probs = []
    for role, pol in sorted(a["pinnedPolicies"].items()):
        got = a["roles"].get(role, {}).get("generationPolicy")
        if got != pol:
            probs.append("%s: policy %r != pinned %r" % (role, got, pol))
    for role, r in sorted(a["roles"].items()):
        if r["generationPolicy"] not in a["generationPolicies"]:
            probs.append("%s: unknown policy %r" % (role, r["generationPolicy"]))
    report("pinned asset-role policies (%d pinned)" % len(a["pinnedPolicies"]), probs)


def check_graph(repo):
    rule_ids = {r["id"] for r in repo["graph"]["rules"]}
    with open(os.path.join(REPO, "schema", "semantic_validate.py"), encoding="utf-8") as f:
        src = f.read()
    impl = set(re.findall(r'add\("([A-Z_]+)"', src))
    probs = ["%s in graph.json but not implemented" % r for r in sorted(rule_ids - impl)]
    probs += ["%s implemented but not in graph.json" % r for r in sorted(impl - rule_ids)]
    report("graph rules <-> validator parity (%d rules)" % len(rule_ids), probs)


def check_manifest(repo, files, leaves, semantic):
    m = load("registry.manifest.json")
    routes = repo["routes"]
    actual = {
        "foundationAndScopedTokens": len(leaves),
        "semanticTokens": len(semantic),
        "themes": len(glob.glob(os.path.join(REPO, "tokens", "themes", "*.json"))),
        "primitives": sum(1 for v in files.values() if v[0] == "primitive"),
        "components": sum(1 for v in files.values() if v[0] == "component"),
        "sections": sum(1 for v in files.values() if v[0] == "section"),
        "templates": len(repo["templates"]),
        "routes": len(routes["routes"]),
        "concreteRoutes": sum(1 for r in routes["routes"] if r["path"] != "*"),
        "redirects": len(routes["redirects"]),
        "nonRoutes": len(routes["nonRoutes"]),
        "assetRoles": len(repo["assets"]),
        "motionPatterns": len(repo["motion"]),
        "graphRules": len(repo["graph"]["rules"]),
    }
    probs = ["%s: manifest %s, actual %s" % (k, m["counts"].get(k), v) for k, v in actual.items() if m["counts"].get(k) != v]
    probs += ["%s: manifest count with no recompute" % k for k in sorted(set(m["counts"]) - set(actual))]
    report("manifest counts recompute (%d counts)" % len(actual), probs)

    probs = []
    if m["allowlistVersion"] != load("tokens/llm/component-allowlist.json")["version"]:
        probs.append("allowlistVersion != component-allowlist.json version")
    if m["pageSpecVersion"] != repo["schema"]["properties"]["pageSpecVersion"]["const"]:
        probs.append("pageSpecVersion != schema const")
    if load("schema/example.pagespec.json").get("pageSpecVersion") != m["pageSpecVersion"]:
        probs.append("example pageSpecVersion != manifest")
    for k, rel in sorted(m["entryPoints"].items()):
        if not os.path.isfile(os.path.join(REPO, rel)):
            probs.append("entryPoint %s -> %s missing" % (k, rel))
    report("version parity and entry points", probs)


def check_abs_paths():
    # assembled from parts so this line does not match itself
    pat = re.compile("(" + "|".join(["/" + "Users/", "/" + "home/[a-z]", "/" + "private/tmp", "/" + "var/folders/",
                                     "[A-Za-z]:" + r"\\\\"]) + ")")
    probs = []
    for p in sorted(glob.glob(os.path.join(REPO, "**", "*"), recursive=True)):
        if not os.path.isfile(p) or p.endswith((".pyc", ".png", ".jpg", ".svg", ".woff2")):
            continue
        with open(p, encoding="utf-8", errors="replace") as f:
            for n, line in enumerate(f, 1):
                if pat.search(line):
                    probs.append("%s:%d" % (os.path.relpath(p, REPO), n))
    report("no absolute paths anywhere in the repo", probs)


def main():
    repo = sv.load_repo()
    check_example(repo)
    check_routes(repo)
    files = check_allowlist(repo)
    check_citations()
    check_components(files)
    leaves, semantic = check_tokens(files)
    check_assets(repo)
    check_graph(repo)
    check_manifest(repo, files, leaves, semantic)
    check_abs_paths()
    fails, warns = RESULTS.count("FAIL"), RESULTS.count("WARN")
    print("RESULT: %s (%d checks, %d warn)" % ("ALL PASS" if not fails else "%d FAILURE(S)" % fails, len(RESULTS), warns))
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
