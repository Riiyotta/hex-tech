#!/usr/bin/env python3
"""Semantic validator for hex design-repo PageSpecs.

Enforces everything JSON Schema (Draft-07) cannot express: the declared template's real node list,
route/theme/layout consistency, rhythm rules from compatibility/graph.json (with their declared
severity), motion fallbacks, per-field word budgets, asset-role policies and link hygiene.

Usage:
    python3 schema/semantic_validate.py path/to/page.pagespec.json [more.json ...]
Exit status 1 if any error-severity finding is reported. Warnings never fail the run.

Dependency-light: Python 3.8+ standard library + `jsonschema` (Draft7Validator).
The repo root is derived from this file's location; no absolute paths.
"""
import json
import os
import re
import sys
from functools import lru_cache

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _load(rel):
    with open(os.path.join(REPO, rel), encoding="utf-8") as f:
        return json.load(f)


def load_repo():
    sections = {}
    sdir = os.path.join(REPO, "sections")
    for name in sorted(os.listdir(sdir)):
        if name.endswith(".json"):
            d = _load(os.path.join("sections", name))
            sections[d["id"]] = d
    return {
        "schema": _load("schema/pagespec.schema.json"),
        "templates": _load("templates/templates.json")["templates"],
        "routes": _load("templates/routes.json"),
        "graph": _load("compatibility/graph.json"),
        "motion": _load("compatibility/motion-patterns.json")["patterns"],
        "assets": _load("assets/asset-roles.json")["roles"],
        "sections": sections,
    }


def count_words(s):
    return len(re.findall(r"\S+", s or ""))


# --------------------------------------------------------------------------- template matching
def match_template(entries, nodes):
    """Match a node sequence [(section, variant), ...] against a template's node entries.

    Entry kinds: {"section", "required", "repeatable", "variants"?} or {"slot", "allowedSections",
    "minItems", "maxItems"}. Returns the per-node list of matched entry indexes, or None.
    """
    entries = tuple(json.dumps(e, sort_keys=True) for e in entries)
    parsed = [json.loads(e) for e in entries]
    nodes = tuple(tuple(n) for n in nodes)

    def ok(e, n):
        return n[0] == e["section"] and (not e.get("variants") or n[1] in e["variants"])

    @lru_cache(maxsize=None)
    def go(i, j):
        if i == len(parsed):
            return () if j == len(nodes) else None
        e = parsed[i]
        if "slot" in e:
            for k in range(0, e["maxItems"] + 1):
                if k >= e["minItems"]:
                    rest = go(i + 1, j + k)
                    if rest is not None:
                        return (i,) * k + rest
                if j + k >= len(nodes) or nodes[j + k][0] not in e["allowedSections"]:
                    break
            return None
        if e.get("repeatable"):
            k = 0
            while j + k < len(nodes) and ok(e, nodes[j + k]):
                k += 1
                rest = go(i + 1, j + k)
                if rest is not None:
                    return (i,) * k + rest
            if not e.get("required"):
                return go(i + 1, j)
            return None
        if j < len(nodes) and ok(e, nodes[j]):
            rest = go(i + 1, j + 1)
            if rest is not None:
                return (i,) + rest
        if not e.get("required"):
            return go(i + 1, j)
        return None

    r = go(0, 0)
    return list(r) if r is not None else None


def route_matches(path, pattern_path):
    """pattern_path uses the live URL form; ':slug' style segments are not used here (routes are concrete)."""
    return path == pattern_path


# --------------------------------------------------------------------------- word budgets
def iter_path(obj, path):
    """Yield values at a dotted path where 'x[]' iterates a list."""
    if not path:
        yield obj
        return
    head, _, rest = path.partition(".")
    if head.endswith("[]"):
        key = head[:-2]
        seq = obj.get(key) if isinstance(obj, dict) else None
        if isinstance(seq, list):
            for item in seq:
                for v in iter_path(item, rest):
                    yield v
    else:
        if isinstance(obj, dict) and head in obj:
            for v in iter_path(obj[head], rest):
                yield v


def iter_list_items(obj, path):
    """For a path ending in '[]' over a list of strings."""
    for v in iter_path(obj, path[:-2] if path.endswith("[]") else path):
        if isinstance(v, list):
            for x in v:
                yield x


# --------------------------------------------------------------------------- rules
def _hrefs(obj, trail=""):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "href" and isinstance(v, str):
                yield trail + "." + k, v, obj.get("external")
            else:
                for x in _hrefs(v, trail + "." + k):
                    yield x
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            for x in _hrefs(v, "%s[%d]" % (trail, i)):
                yield x


def _media(obj, trail=""):
    if isinstance(obj, dict):
        if "assetRole" in obj:
            yield trail, obj
        for k, v in obj.items():
            for x in _media(v, trail + "." + k):
                yield x
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            for x in _media(v, "%s[%d]" % (trail, i)):
                yield x


def known_paths(repo):
    out = set()
    for r in repo["routes"]["routes"]:
        out.add(r["path"])
    for r in repo["routes"]["redirects"]:
        out.add(r["path"])
    return out


def check(spec, repo):
    """Return list of findings: dicts {rule, severity, message}."""
    findings = []
    rules = {r["id"]: r for r in repo["graph"]["rules"]}

    def add(rule, msg):
        findings.append({"rule": rule, "severity": rules[rule]["severity"], "message": msg})

    # 1. schema layer
    try:
        from jsonschema import Draft7Validator
    except ImportError:  # pragma: no cover
        sys.exit("jsonschema is required: pip install jsonschema")
    v = Draft7Validator(repo["schema"])
    schema_errors = sorted(v.iter_errors(spec), key=lambda e: list(e.absolute_path))
    for e in schema_errors:
        add("SCHEMA_VALID", "%s: %s" % ("/".join(str(p) for p in e.absolute_path) or "(root)", e.message[:300]))
    if not isinstance(spec, dict) or not isinstance(spec.get("nodes"), list):
        return findings
    tid = spec.get("template")
    tpl = repo["templates"].get(tid)
    if tpl is None:
        add("TEMPLATE_KNOWN", "unknown template %r" % tid)
        return findings
    nodes = [n for n in spec["nodes"] if isinstance(n, dict)]
    seq = [(n.get("section"), n.get("variant")) for n in nodes]
    sections = repo["sections"]

    # 2. declared template <-> real node list (the cross-reference, not nodes[] in isolation)
    if match_template(tpl["nodes"], seq) is None:
        required = [e["section"] for e in tpl["nodes"] if e.get("required") and "section" in e]
        present = set(s for s, _ in seq)
        allowed = set(e.get("section") for e in tpl["nodes"]) | set(x for e in tpl["nodes"] for x in e.get("allowedSections", []))
        missing = [s for s in required if s not in present]
        extra = sorted(set(s for s in present if s not in allowed))
        detail = []
        if missing:
            detail.append("missing required: %s" % ", ".join(missing))
        if extra:
            detail.append("sections not in template: %s" % ", ".join(extra))
        if not detail:
            detail.append("order, variant, repetition or slot bounds differ from the template node list")
        add("TEMPLATE_SEQUENCE", "nodes do not match %s (%s)" % (tid, "; ".join(detail)))

    # 3. route / theme / layout
    route = spec.get("route", "")
    if not re.match(r"^/([a-z0-9-]+/)*$", route or ""):
        add("ROUTE_FORMAT", "route %r must be a lowercase path with leading and trailing slash" % route)
    for r in repo["routes"]["routes"]:
        if r["path"] == route and r["template"] != tid:
            add("ROUTE_TEMPLATE_CONSISTENCY", "route %s is mapped to %s in routes.json, not %s" % (route, r["template"], tid))
    if tid == "template.home" and route != "/":
        add("HOME_ROUTE_ONLY", "template.home is only valid on route '/'")
    for s, _ in seq:
        sd = sections.get(s)
        if sd and sd["constraints"].get("homeRouteOnly") and route != "/":
            add("HOME_ROUTE_ONLY", "%s is homeRouteOnly but route is %s" % (s, route))
    if spec.get("theme") not in tpl["allowedThemes"]:
        add("THEME_ALLOWED", "theme %r not in %s allowedThemes %s" % (spec.get("theme"), tid, tpl["allowedThemes"]))
    if spec.get("layout") != tpl["layout"]:
        add("LAYOUT_MATCH", "layout %r but %s is %r" % (spec.get("layout"), tid, tpl["layout"]))
    if tpl.get("generationEligible") is False:
        add("PLACEHOLDER_TEMPLATE", "%s is a fallback placeholder, not a generation target" % tid)

    # 4. chrome position
    shell = [i for i, (s, _) in enumerate(seq) if s and s.startswith("shell.")]
    if spec.get("layout") == "standalone":
        if shell:
            add("CHROME_POSITION", "standalone layout must not contain shell.* nodes (no global header, ticker or footer)")
    else:
        if not seq or seq[0][0] != "shell.header":
            add("CHROME_POSITION", "site layout must start with shell.header")
        if not seq or seq[-1][0] != "shell.footer":
            add("CHROME_POSITION", "site layout must end with shell.footer")
        if [s for s, _ in seq].count("shell.header") > 1 or [s for s, _ in seq].count("shell.footer") > 1:
            add("CHROME_POSITION", "shell.header / shell.footer may appear only once")

    # 5. hero rules
    heroes = [i for i, (s, _) in enumerate(seq) if s and s.startswith("hero.")]
    hero_exceptions = rules["ONE_HERO"].get("exceptions", [])
    if len(heroes) != 1 and tid not in hero_exceptions:
        add("ONE_HERO", "expected exactly one hero.* node, found %d" % len(heroes))
    if heroes:
        first_content = 1 if spec.get("layout") != "standalone" else 0
        if heroes[0] != first_content:
            add("HERO_FIRST", "hero must be the first content node (index %d), found at %d" % (first_content, heroes[0]))

    # 6. per-page counts
    counts = {}
    for s, _ in seq:
        counts[s] = counts.get(s, 0) + 1
    for s, n in counts.items():
        sd = sections.get(s)
        if not sd:
            continue
        c = sd["constraints"]
        if c.get("onePerPage") and n > 1:
            add("ONE_PER_PAGE", "%s is onePerPage but appears %d times" % (s, n))
        if c.get("maxPerPage") and n > c["maxPerPage"]:
            add("ONE_PER_PAGE", "%s maxPerPage %d exceeded (%d)" % (s, c["maxPerPage"], n))

    # 7. adjacency (keyed on (section, variant), with named exceptions from the graph)
    adj_exc = set(rules["NO_ADJACENT_SAME_SECTION"].get("exceptions", []))
    for a, b in zip(seq, seq[1:]):
        if a == b and a[0] not in adj_exc:
            add("NO_ADJACENT_SAME_SECTION", "%s/%s repeated consecutively" % a)

    # 8. motion
    budget = rules["MOTION_BUDGET"]["max"]
    continuous = 0
    for i, n in enumerate(nodes):
        m = n.get("motion") or {}
        sd = sections.get(n.get("section"))
        pat = repo["motion"].get(m.get("pattern"))
        if sd and m.get("pattern") not in sd["motion"]["allowedPatterns"]:
            add("MOTION_PATTERN_ALLOWED", "node %d %s: motion %r not allowed (%s)" % (i, n.get("section"), m.get("pattern"), sd["motion"]["allowedPatterns"]))
        if not m.get("reducedMotionFallback"):
            add("REDUCED_MOTION_FALLBACK", "node %d %s: reducedMotionFallback missing" % (i, n.get("section")))
        elif pat and m.get("reducedMotionFallback") != pat["reducedMotionFallback"]:
            add("REDUCED_MOTION_FALLBACK", "node %d: fallback %r != locked %r for %s" % (i, m.get("reducedMotionFallback"), pat["reducedMotionFallback"], m.get("pattern")))
        if pat and pat.get("continuous"):
            continuous += 1
    if continuous > budget:
        add("MOTION_BUDGET", "%d continuous-motion sections exceed the observed budget %d" % (continuous, budget))

    # 9. word budgets + rich text budgets (per instance, not just the bundled example)
    meta_schema = repo["schema"]["definitions"]["meta"]["properties"]
    for k in ("title", "description"):
        val = (spec.get("meta") or {}).get(k)
        if isinstance(val, str) and count_words(val) > meta_schema[k]["x-maxWords"]:
            add("MAX_WORDS", "meta.%s: %d words > maxWords %d" % (k, count_words(val), meta_schema[k]["x-maxWords"]))
    for i, n in enumerate(nodes):
        sd = sections.get(n.get("section"))
        content = n.get("content") if isinstance(n.get("content"), dict) else {}
        if not sd:
            continue
        for path, mx in sd.get("wordBudgets", {}).items():
            if path.endswith("[]"):
                vals = list(iter_list_items(content, path))
            else:
                vals = list(iter_path(content, path))
            for val in vals:
                if isinstance(val, str) and count_words(val) > mx:
                    add("MAX_WORDS", "node %d %s.%s: %d words > maxWords %d" % (i, n["section"], path, count_words(val), mx))
        for path, rb in sd.get("richTextBudgets", {}).items():
            for blocks in iter_path(content, path):
                if not isinstance(blocks, list):
                    continue
                if len(blocks) > rb["maxBlocks"]:
                    add("MAX_WORDS", "node %d %s.%s: %d blocks > %d" % (i, n["section"], path, len(blocks), rb["maxBlocks"]))
                for b in blocks:
                    if not isinstance(b, dict):
                        continue
                    texts = [b.get("text", "")] + list(b.get("items", []) or [])
                    for t in texts:
                        if isinstance(t, str) and count_words(t) > rb["maxWordsPerBlock"]:
                            add("MAX_WORDS", "node %d %s.%s: block of %d words > %d" % (i, n["section"], path, count_words(t), rb["maxWordsPerBlock"]))

    # 10. asset roles
    roles = repo["assets"]
    for i, n in enumerate(nodes):
        for trail, m in _media(n.get("content", {})):
            role = roles.get(m.get("assetRole"))
            if role is None:
                add("ASSET_ROLE_POLICY", "node %d%s: unknown assetRole %r" % (i, trail, m.get("assetRole")))
                continue
            src = m.get("src")
            pol = role["generationPolicy"]
            if pol == "placeholder-only" and src is not None and not src.startswith("placeholder:"):
                add("ASSET_ROLE_POLICY", "node %d%s: %s is placeholder-only (real logos/people/trademarks must not be reproduced); src must be omitted or 'placeholder:'" % (i, trail, m["assetRole"]))
            if pol == "must-reuse-exact" and src is not None and src not in role.get("allowedSources", []):
                add("ASSET_ROLE_POLICY", "node %d%s: %s must reuse an exact allowed source, got %r" % (i, trail, m["assetRole"], src))
            if pol == "external-reference-only" and src is not None and not (src.startswith("https://") or src.startswith("placeholder:")):
                add("ASSET_ROLE_POLICY", "node %d%s: %s must be an external https URL or placeholder" % (i, trail, m["assetRole"]))
            if pol != "external-reference-only" and src is not None and src.startswith("https://"):
                add("ASSET_ROLE_POLICY", "node %d%s: %s may not hotlink an external URL" % (i, trail, m["assetRole"]))

    # 11. links
    paths = known_paths(repo)
    for i, n in enumerate(nodes):
        for trail, href, external in _hrefs(n.get("content", {})):
            is_ext = href.startswith("https://") or href.startswith("http://")
            if href.startswith("http://"):
                add("LINK_FORMAT", "node %d%s: insecure external href %s" % (i, trail, href))
            if external is not None and bool(external) != is_ext:
                add("LINK_FORMAT", "node %d%s: external=%s disagrees with href %s" % (i, trail, external, href))
            if not is_ext and not re.match(r"^(/|#|mailto:)", href):
                add("LINK_FORMAT", "node %d%s: href %r must be a relative /path, #anchor, mailto: or https:// URL" % (i, trail, href))
            if href.startswith("/") and not href.startswith("//"):
                p = href.split("?")[0].split("#")[0]
                if p != "/" and not p.endswith("/"):
                    add("LINK_FORMAT", "node %d%s: internal href %s must end with '/'" % (i, trail, href))
                if p not in paths:
                    add("INTERNAL_LINK_ROUTED", "node %d%s: internal href %s is not a known route (renders the placeholder)" % (i, trail, p))

    # 12. behaviour constraints
    for i, n in enumerate(nodes):
        if n.get("section") == "conversion.form-shell":
            c = n.get("content", {})
            if c.get("submission") != "none":
                add("FORM_NO_SUBMISSION", "node %d: forms are visual-only; submission must be 'none'" % i)
    return findings


def validate_file(path, repo=None):
    repo = repo or load_repo()
    with open(path, encoding="utf-8") as f:
        spec = json.load(f)
    return check(spec, repo)


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 2
    repo = load_repo()
    status = 0
    for p in argv[1:]:
        fs = validate_file(p, repo)
        errs = [f for f in fs if f["severity"] == "error"]
        warns = [f for f in fs if f["severity"] == "warn"]
        print("%s: %d error(s), %d warning(s)" % (p if not os.path.isabs(p) else os.path.basename(p), len(errs), len(warns)))
        for f in errs + warns:
            print("  [%s] %s: %s" % (f["severity"], f["rule"], f["message"]))
        if errs:
            status = 1
    return status


if __name__ == "__main__":
    sys.exit(main(sys.argv))
