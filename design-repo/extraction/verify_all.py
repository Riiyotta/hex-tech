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
  * section contracts: closed schema/section-contract.schema.json, distinct source + semantic objects, closed category enum and honest
    classing, retrievalEligible pinned here AND in semantic_validate.py, allowlist mirror, source ranges re-read from the real files,
    generate_provenance.py sync (warns when the source tree is absent),
  * the whole-page-wrapper gate (extraction/wrapper_gate.py) over the measured 1440px section heights, with its thresholds pinned here,
  * pinned asset-role policies and pinned asset availability by mode (both kept in this file, independent of the registry),
  * reference / generated mode: closed availability enum, substitutes, brand-mark fields, sourceBrand patterns, example mode,
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
sys.path.insert(0, os.path.join(REPO, "extraction"))
import semantic_validate as sv  # noqa: E402
import jsonschema  # noqa: E402

RESULTS = []

# Pinned generation policies. Kept HERE, independent of assets/asset-roles.json, so that editing a role (or the registry's own
# `pinnedPolicies`) to a different-but-still-valid policy is caught; membership in the closed set alone is not enough.
PINNED_POLICY = {
    "brand.wordmark": "must-reuse-exact", "brand.placeholder": "placeholder-only", "brand.user-supplied": "user-supplied-only",
    "logo.customer": "placeholder-only", "logo.investor": "placeholder-only", "logo.partner": "placeholder-only",
    "logo.integration": "placeholder-only", "logo.competitor": "placeholder-only", "logo.certification": "placeholder-only",
    "icon.agent-logos": "placeholder-only", "image.award-badge": "placeholder-only", "photo.person": "placeholder-only",
    "image.data-chart": "placeholder-only", "embed.external": "external-reference-only", "image.capture-fallback": "must-reuse-exact",
}
# Pinned ASSET AVAILABILITY by mode. Also kept HERE: flipping the real Hex wordmark/logo (or the saved capture) to generation-safe,
# or a placeholder/user-supplied brand role to reference-only, must be caught even though both values are valid members of the enum.
PINNED_AVAILABILITY = {"brand.wordmark": "reference-only", "image.capture-fallback": "reference-only",
                       "brand.placeholder": "generation-safe", "brand.user-supplied": "generation-safe"}
for _r in ("logo.customer", "logo.investor", "logo.partner", "logo.integration", "logo.competitor", "logo.certification",
           "icon.agent-logos", "image.award-badge", "photo.person", "image.data-chart", "embed.external", "image.product-screenshot",
           "image.product-ui", "image.editorial-thumbnail", "illustration.decorative", "icon.ui", "icon.abstract-mark", "video.loop",
           "canvas.runtime"):
    PINNED_AVAILABILITY[_r] = "generation-safe"
AVAILABILITY = ["reference-only", "generation-safe"]
# Contract pins, kept HERE independent of semantic_validate.py and of the closed schema (each layer pins them on its own).
SEMANTIC_CATEGORIES = ["COLLECTION", "CONTENT", "CONVERSION", "DIVIDER", "FAQ", "FEATURE", "HERO", "NAVIGATION", "PROOF", "SHELL"]
RETRIEVAL_PINNED = ["divider.tron", "hero.placeholder", "shell.header"]   # layout-only utility / runtime UI / fallback stand-in
RUNTIME_UI_RE = re.compile(r"cookie|consent|modal|dialog|overlay|lightbox|toast|popover|drawer|preloader|cursor|ticker", re.I)
EDITORIAL_RE = re.compile(r"blog|news|post|article|editorial|stor(?:y|ies)|related|podcast", re.I)
TAG_ENUM = ["div", "section", "header", "footer", "nav", "main", "aside", "article", "ul", "form", "h1", "h2", "img"]
# Wrapper-gate thresholds, pinned HERE: the gate module and the measured data must agree with these and may not weaken them.
GATE_PINS = {"HERO_WARN_PX": 1800, "HERO_FAIL_PX": 3000, "SHARE_WARN_PCT": 50.0, "SHARE_FAIL_PCT": 60.0, "MIN_SECTIONS": 3, "VIEWPORT_WIDTH": 1440}
BRAND_SHELL = ("shell.header", "shell.footer")


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
    for role, want in sorted(PINNED_POLICY.items()):
        got = a["roles"].get(role, {}).get("generationPolicy")
        if got != want:
            probs.append("%s: policy %r != %r (pinned in verify_all.py)" % (role, got, want))
        if a["pinnedPolicies"].get(role) != want:
            probs.append("%s: registry pinnedPolicies entry %r != %r (pinned in verify_all.py)" % (role, a["pinnedPolicies"].get(role), want))
    report("pinned asset-role policies (%d pinned in the registry, %d pinned in code)" % (len(a["pinnedPolicies"]), len(PINNED_POLICY)), probs)


def check_modes(repo, files):
    a = load("assets/asset-roles.json")
    roles, schema = a["roles"], repo["schema"]
    probs = []
    if a.get("availabilityValues") != AVAILABILITY:
        probs.append("availabilityValues must be %s, found %s" % (AVAILABILITY, a.get("availabilityValues")))
    for r, v in sorted(roles.items()):
        if v.get("availability") not in AVAILABILITY:
            probs.append("%s: availability %r is not one of %s" % (r, v.get("availability"), AVAILABILITY))
        if not v.get("generatedModeGuidance"):
            probs.append("%s: missing generatedModeGuidance" % r)
        if v.get("availability") == "reference-only":
            subs = v.get("generationSafeSubstitutes", [])
            if not subs:
                probs.append("%s: reference-only but names no generation-safe substitute" % r)
            for x in subs:
                if x not in roles or roles[x].get("availability") != "generation-safe":
                    probs.append("%s: substitute %r is not a generation-safe role" % (r, x))
        elif v.get("generationSafeSubstitutes"):
            probs.append("%s: generation-safe but lists substitutes" % r)
        if r not in PINNED_AVAILABILITY:
            probs.append("%s: availability is not pinned in verify_all.py (add it to PINNED_AVAILABILITY)" % r)
    for r, want in sorted(PINNED_AVAILABILITY.items()):
        if r not in roles:
            probs.append("pinned availability: role %r missing from the registry" % r)
        elif roles[r].get("availability") != want:
            probs.append("pinned availability: %s must be %r, found %r" % (r, want, roles[r].get("availability")))
    # every reference-only role is reachable only through fields that also accept one of its substitutes
    sections = {i: c for i, (layer, rel, c) in files.items() if layer == "section"}
    for sid, c in sorted(sections.items()):
        for fname, f in c["content"].items():
            if f.get("kind") != "media":
                continue
            fr = f.get("roles", [])
            for r in fr:
                if roles.get(r, {}).get("availability") == "reference-only" and not any(x in fr for x in roles[r].get("generationSafeSubstitutes", [])):
                    probs.append("%s.%s: lists reference-only %s but none of its substitutes, so a generated page could not fill it" % (sid, fname, r))
    # registry usedBySections <-> contracts
    used = {}
    for sid, c in sections.items():
        for r in c.get("assetRoles", []):
            used.setdefault(r, set()).add(sid)
    for r, v in sorted(roles.items()):
        if sorted(v.get("usedBySections", [])) != sorted(used.get(r, ())):
            probs.append("%s: usedBySections drifts from the section contracts" % r)
    # brand mark fields: the shell chrome must be able to carry a generated brand
    for sid in BRAND_SHELL:
        f = sections[sid]["content"].get("brand")
        if not f or f.get("kind") != "media":
            probs.append("%s: contract has no brand media field" % sid)
        elif not {"brand.placeholder", "brand.user-supplied"} <= set(f.get("roles", [])):
            probs.append("%s: brand field must allow brand.placeholder and brand.user-supplied" % sid)
        sd = schema["definitions"].get("content__" + sid, {}).get("properties", {}).get("brand")
        if not sd or not {"brand.placeholder", "brand.user-supplied"} <= set(sd["properties"]["assetRole"]["enum"]):
            probs.append("%s: schema has no brand field accepting the generation-safe brand roles" % sid)
    # mode in the schema and the registry
    if schema["properties"].get("mode", {}).get("enum") != ["reference", "generated"]:
        probs.append("schema mode enum must be exactly ['reference', 'generated']")
    if "mode" not in schema.get("required", []):
        probs.append("schema must require 'mode'")
    if sorted(k for k in a.get("modes", {}) if k != "field") != ["generated", "reference"]:
        probs.append("asset-roles modes must describe exactly reference and generated")
    # source brand patterns must actually match the real brand, and not a plain technical use of the word
    pats = a.get("sourceBrand", {}).get("patterns", [])
    try:
        rx = sv.source_brand_re(repo)
    except re.error as e:
        rx = None
        probs.append("sourceBrand pattern does not compile: %s" % e)
    if not pats:
        probs.append("sourceBrand.patterns is empty")
    if rx:
        for must in ("Hex", "HEX", "Hex Technologies", "app.hex.tech", "hex-logo-nav.svg", "SectionHero-HexLogoWrapper", "Try hex now"):
            if not rx.search(must):
                probs.append("sourceBrand does not match %r" % must)
        for ok in ("Pick a hex color", "hex codes", "Quarry Lake", "Example workspace"):
            if rx.search(ok):
                probs.append("sourceBrand wrongly matches %r" % ok)
        for src in roles["brand.wordmark"].get("allowedSources", []):
            if not rx.search(src):
                probs.append("sourceBrand does not match the real wordmark file %s" % src)
    # the example is the generation-safe example: it must declare generated mode and carry a placeholder brand
    ex = load("schema/example.pagespec.json")
    if ex.get("mode") != "generated":
        probs.append("example.pagespec.json must be mode 'generated' (it is the generation-safe example), found %r" % ex.get("mode"))
    for n in ex.get("nodes", []):
        if n["section"] in BRAND_SHELL and (n.get("content", {}).get("brand", {}).get("assetRole") not in ("brand.placeholder", "brand.user-supplied")):
            probs.append("example %s must carry a placeholder or user-supplied brand mark" % n["section"])
    report("reference/generated mode: brand availability pinned, substitutes, shell brand fields, sourceBrand, example (%d roles)" % len(roles), probs)


def check_section_contracts(repo, files):
    sections = {i: c for i, (layer, rel, c) in files.items() if layer == "section"}
    probs = []
    sch = load("schema/section-contract.schema.json")
    try:
        jsonschema.Draft7Validator.check_schema(sch)
    except jsonschema.SchemaError as e:
        probs.append("section-contract.schema.json is not a valid Draft-07 schema: %s" % e.message[:150])
    if sch.get("additionalProperties") is not False:
        probs.append("section-contract.schema.json must stay closed at the top level")
    for k in ("semantic", "source"):
        if sch["properties"][k].get("additionalProperties") is not False:
            probs.append("section-contract.schema.json must stay closed on %s" % k)
    if sch["properties"]["semantic"]["properties"]["category"].get("enum") != SEMANTIC_CATEGORIES:
        probs.append("section-contract.schema.json category enum differs from the list pinned in verify_all.py")
    if sch["properties"]["source"]["properties"]["tag"].get("enum") != TAG_ENUM:
        probs.append("section-contract.schema.json source.tag enum differs from the list pinned in verify_all.py")
    if sch["properties"]["retrievalEligible"].get("type") != "boolean" or sch["properties"]["retrievalIneligibleReason"].get("minLength") != 30:
        probs.append("section-contract.schema.json must keep retrievalEligible a boolean and the reason at 30+ characters")
    validator = jsonschema.Draft7Validator(sch)
    for sid, c in sorted(sections.items()):
        for e in validator.iter_errors(c):
            probs.append("sections/%s.json: %s: %s" % (sid, "/".join(str(x) for x in e.absolute_path) or "(root)", e.message[:120]))
        sem, src = c.get("semantic", {}), c.get("source", {})
        if sem.get("id") != sid:
            probs.append("%s: semantic.id %r must equal the contract id" % (sid, sem.get("id")))
        if src.get("id") == sem.get("id"):
            probs.append("%s: source.id and semantic.id must be different identifiers" % sid)
        if "category" in c:
            probs.append("%s: the old free-form category field must be gone (semantic.category is the single taxonomy)" % sid)
        cat = sem.get("category")
        prefix = sid.split(".")[0]
        if prefix == "conversion" and cat != "CONVERSION":
            probs.append("%s: a conversion block must be CONVERSION, found %s" % (sid, cat))
        if prefix == "hero" and cat != "HERO":
            probs.append("%s: a page-opening block must be HERO, found %s" % (sid, cat))
        if cat == "HERO" and prefix != "hero":
            probs.append("%s: classed HERO but not a hero.* section" % sid)
        beh = c.get("behavior") or {}
        if ("submission" in beh or "download" in beh) and cat not in ("CONVERSION", "HERO"):
            probs.append("%s: submission/download behaviour but classed %s (must be CONVERSION or HERO)" % (sid, cat))
        if cat == "FEATURE" and EDITORIAL_RE.search(sid):
            probs.append("%s: editorial/story content must not be classed FEATURE" % sid)
        elig, reason = c.get("retrievalEligible", True), c.get("retrievalIneligibleReason")
        pinned, runtime_ui = sid in RETRIEVAL_PINNED, bool(RUNTIME_UI_RE.search(sid))
        if not isinstance(elig, bool):
            probs.append("%s: retrievalEligible must be a closed boolean" % sid)
            continue
        if pinned and elig is not False:
            probs.append("%s is pinned retrieval-ineligible in verify_all.py but its contract says %r" % (sid, elig))
        if runtime_ui and not pinned:
            probs.append("%s looks like runtime UI and must be in the pinned retrieval-ineligible list of verify_all.py" % sid)
        if elig is False and not pinned:
            probs.append("%s is retrievalEligible false but not pinned: false is reserved for layout-only and runtime UI" % sid)
        if elig is False and (not isinstance(reason, str) or len(reason.strip()) < 30):
            probs.append("%s: retrievalEligible false needs a reason of 30+ characters" % sid)
        if elig is True and reason is not None:
            probs.append("%s: a retrievalIneligibleReason is only allowed when retrievalEligible is false" % sid)
    for sid in RETRIEVAL_PINNED:
        if sid not in sections:
            probs.append("pinned retrieval-ineligible section %s has no contract" % sid)
    # allowlist mirror
    al = load("tokens/llm/component-allowlist.json")
    ent = {e["id"]: e for e in al["entries"]}
    for sid, c in sections.items():
        a = ent.get(sid, {})
        if a.get("retrievalEligible") != c.get("retrievalEligible", True):
            probs.append("allowlist %s: retrievalEligible %r != contract %r" % (sid, a.get("retrievalEligible"), c.get("retrievalEligible", True)))
        if a.get("semanticCategory") != c.get("semantic", {}).get("category"):
            probs.append("allowlist %s: semanticCategory %r != contract %r" % (sid, a.get("semanticCategory"), c.get("semantic", {}).get("category")))
    if sorted(al.get("retrievalIneligibleSections", [])) != sorted(RETRIEVAL_PINNED):
        probs.append("allowlist retrievalIneligibleSections %s != the pinned list %s" % (al.get("retrievalIneligibleSections"), RETRIEVAL_PINNED))
    if al.get("semanticCategories") != SEMANTIC_CATEGORIES:
        probs.append("allowlist semanticCategories differs from the list pinned in verify_all.py")
    pm = load("extraction/provenance-map.json")
    if sorted(pm["retrievalIneligible"]) != sorted(RETRIEVAL_PINNED):
        probs.append("provenance-map.json retrievalIneligible differs from the list pinned in verify_all.py")
    if pm["semanticCategories"] != SEMANTIC_CATEGORIES:
        probs.append("provenance-map.json semanticCategories differs from the list pinned in verify_all.py")
    # the validator carries the same pins independently
    if list(sv.RETRIEVAL_INELIGIBLE_PINNED) != RETRIEVAL_PINNED or list(sv.SEMANTIC_CATEGORIES) != SEMANTIC_CATEGORIES:
        probs.append("schema/semantic_validate.py pins (RETRIEVAL_INELIGIBLE_PINNED / SEMANTIC_CATEGORIES) differ from verify_all.py")
    # taxonomy agrees with the sibling IA when it is present
    src_root = os.path.normpath(os.path.join(REPO, load("extraction/measured-values.json")["sourceRoot"]))
    ia_path = os.path.join(src_root, "ia.json")
    if os.path.isfile(ia_path):
        ia = json.load(open(ia_path, encoding="utf-8"))["sections"]
        for sid, c in sections.items():
            if ia.get(sid, {}).get("category") != c["semantic"]["category"]:
                probs.append("%s: semantic.category %s differs from ia.json category %s" % (sid, c["semantic"]["category"], ia.get(sid, {}).get("category")))
    report("section contracts: closed schema, source/semantic split, honest classing, retrieval pin (%d contracts)" % len(sections), probs)

    # source provenance: re-read every range from the real files
    present = os.path.isfile(os.path.join(src_root, "CLONE_SPEC.md"))
    probs, cache = [], {}
    measured_sections = load("extraction/measured-values.json").get("sectionHeights", {}).get("sections", {})
    for sid, c in sorted(sections.items()):
        s = c["source"]
        full = os.path.join(src_root, s["file"])
        if not os.path.isfile(full):
            probs.append("%s: source file %s missing" % (sid, s["file"]))
            continue
        if full not in cache:
            with open(full, encoding="utf-8", errors="replace") as f:
                cache[full] = f.read().split("\n")
        L = cache[full]
        a, _, b = s["lines"].partition("-")
        a, b = int(a), int(b)
        if not 1 <= a <= b <= len(L):
            probs.append("%s: source.lines %s is not a valid range of %s (%d lines)" % (sid, s["lines"], s["file"], len(L)))
            continue
        body = "\n".join(L[a - 1:b])
        if s["anchor"] not in body:
            probs.append("%s: source anchor %r is not inside %s:%s" % (sid, s["anchor"], s["file"], s["lines"]))
        if not (re.search(r"<%s\b" % s["tag"], body) or re.search(r"\bas=[\"']%s[\"']" % s["tag"], body) or re.search(r"motion\.%s\b" % s["tag"], body)
                or re.search(r"<[A-Z][A-Za-z0-9.]*\b", body)):
            probs.append("%s: tag <%s> is not opened inside %s:%s and the range does not root in a wrapper component" % (sid, s["tag"], s["file"], s["lines"]))
        mt = measured_sections.get(sid, {}).get("tag")
        if mt != s["tag"]:
            probs.append("%s: source.tag %s differs from the measured rendered root tag %s" % (sid, s["tag"], mt))
        if not s["file"] == c["implementedBy"].partition(" > ")[0] or s["id"] != c["implementedBy"].partition(" > ")[2]:
            probs.append("%s: source.file/id differ from implementedBy %r" % (sid, c["implementedBy"]))
    name = "source ranges resolve in the real files (%d contracts)" % len(sections)
    if not present:
        name += " -- source tree absent, downgraded"
    report(name, probs, warn_only=not present)
    # the generated objects equal what generate_provenance.py builds
    if present:
        import generate_provenance as gp
        try:
            contracts, new, al_old, al_new, _fb = gp.generate()
            drift = [sid for sid in new if new[sid][1] != contracts[sid][1]]
            probs = ["%s: source/semantic/retrieval differ from what extraction/generate_provenance.py builds" % sid for sid in drift]
            if al_old != al_new:
                probs.append("tokens/llm/component-allowlist.json differs from what generate_provenance.py builds")
        except (ValueError, OSError) as e:
            probs = ["generate_provenance.py failed: %s" % e]
        report("provenance in sync with extraction/generate_provenance.py", probs)
    else:
        report("provenance in sync with extraction/generate_provenance.py -- source tree absent, downgraded", ["not compared"], warn_only=True)


def check_wrapper(repo):
    import wrapper_gate as wg
    probs = []
    for k, want in GATE_PINS.items():
        if getattr(wg, k, None) != want:
            probs.append("wrapper_gate.%s is %r but verify_all.py pins %r (thresholds may not be weakened)" % (k, getattr(wg, k, None), want))
    mv = load("extraction/measured-values.json")
    sh = mv.get("sectionHeights", {})
    if (sh.get("viewport") or {}).get("width") != GATE_PINS["VIEWPORT_WIDTH"]:
        probs.append("sectionHeights was not measured at the pinned %dpx viewport" % GATE_PINS["VIEWPORT_WIDTH"])
    F, W = wg.check_wrapper_gate(REPO)
    report("whole-page-wrapper gate (%d routes measured, %d warnings, %d reviewed exceptions)" % (len(sh.get("routes", [])), len(W), len(load("extraction/wrapper-whitelist.json")["entries"])), probs + F)
    for w in W[:6]:
        print("       ~ %s" % w)


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
        "retrievalIneligibleSections": sum(1 for v in files.values() if v[0] == "section" and v[2].get("retrievalEligible", True) is False),
        "semanticCategories": len(SEMANTIC_CATEGORIES),
        "measuredRoutes": len(load("extraction/measured-values.json").get("sectionHeights", {}).get("routes", [])),
        "wrapperWhitelistEntries": len(load("extraction/wrapper-whitelist.json")["entries"]),
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
    check_modes(repo, files)
    check_section_contracts(repo, files)
    check_wrapper(repo)
    check_graph(repo)
    check_manifest(repo, files, leaves, semantic)
    check_abs_paths()
    fails, warns = RESULTS.count("FAIL"), RESULTS.count("WARN")
    print("RESULT: %s (%d checks, %d warn)" % ("ALL PASS" if not fails else "%d FAILURE(S)" % fails, len(RESULTS), warns))
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
