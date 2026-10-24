#!/usr/bin/env python3
"""Proves verify_all.py actually CATCHES drift in the brand-safety contract.

Copies this design-repo alone to a scratch folder (no siblings: citation and component checks downgrade to WARN there),
injects ONE defect at a time and requires verify_all.py to exit 1 with the expected message. The unmodified copy must
pass first (a check that rejects everything is as broken as one that accepts everything).

Every pin case flips a value to a different-but-still-valid one, so enum membership alone would not catch it.

Usage: python3 extraction/prove_drift.py       (exit 1 if any case is not caught)
"""
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
PKG = os.path.dirname(REPO)


def jload(r, rel):
    with open(os.path.join(r, rel), encoding="utf-8") as f:
        return json.load(f)


def jsave(r, rel, d):
    with open(os.path.join(r, rel), "w", encoding="utf-8") as f:
        json.dump(d, f, indent=2, ensure_ascii=False)
        f.write("\n")


AR = "assets/asset-roles.json"


def edit_roles(fn):
    def inj(r):
        d = jload(r, AR)
        fn(d)
        jsave(r, AR, d)
    return inj


def flip(role, key, value):
    return edit_roles(lambda d: d["roles"][role].__setitem__(key, value))


def edit(rel, fn):
    def inj(r):
        d = jload(r, rel)
        fn(d)
        jsave(r, rel, d)
    return inj


def inj_pinned_registry_too(r):   # the registry's own pinnedPolicies edited in step with the role: only the pin in code catches it
    d = jload(r, AR)
    d["roles"]["brand.wordmark"]["generationPolicy"] = "may-generate-new"
    d["pinnedPolicies"]["brand.wordmark"] = "may-generate-new"
    jsave(r, AR, d)


def inj_example_reference(r):
    d = jload(r, "schema/example.pagespec.json")
    d["mode"] = "reference"
    jsave(r, "schema/example.pagespec.json", d)


def inj_example_real_brand(r):
    d = jload(r, "schema/example.pagespec.json")
    d["nodes"][0]["content"]["brand"] = {"assetRole": "brand.wordmark", "alt": "Logo", "src": "/assets/svg/logo/hex-logo-nav.svg"}
    jsave(r, "schema/example.pagespec.json", d)


def inj_example_no_brand(r):
    d = jload(r, "schema/example.pagespec.json")
    d["nodes"][0]["content"] = {}
    jsave(r, "schema/example.pagespec.json", d)


def inj_header_brand_dropped(r):
    d = jload(r, "sections/shell.header.json")
    del d["content"]["brand"]
    jsave(r, "sections/shell.header.json", d)


def inj_schema_brand_dropped(r):
    d = jload(r, "schema/pagespec.schema.json")
    d["definitions"]["content__shell.footer"]["properties"] = {}
    jsave(r, "schema/pagespec.schema.json", d)


def inj_mode_optional(r):
    d = jload(r, "schema/pagespec.schema.json")
    d["required"].remove("mode")
    jsave(r, "schema/pagespec.schema.json", d)


def inj_mode_enum(r):
    d = jload(r, "schema/pagespec.schema.json")
    d["properties"]["mode"]["enum"].append("production")
    jsave(r, "schema/pagespec.schema.json", d)


def inj_wordmark_field_no_substitute(r):
    d = jload(r, "sections/hero.report.json")
    d["content"]["wordmark"]["roles"] = ["brand.wordmark"]
    jsave(r, "sections/hero.report.json", d)


def inj_brand_pattern_empty(r):
    d = jload(r, AR)
    d["sourceBrand"]["patterns"] = [r"\bhex\s+technologies\b"]
    jsave(r, AR, d)


def inj_brand_pattern_overbroad(r):
    d = jload(r, AR)
    d["sourceBrand"]["patterns"] = [r"hex"]
    jsave(r, AR, d)


def inj_count(r):
    d = jload(r, "registry.manifest.json")
    d["counts"]["assetRoles"] += 1
    jsave(r, "registry.manifest.json", d)


def inj_rule_unimplemented(r):
    d = jload(r, "compatibility/graph.json")
    d["rules"] = [x for x in d["rules"] if x["id"] != "GENERATED_MODE_SOURCE_BRAND"]
    jsave(r, "compatibility/graph.json", d)


def inj_validator_rule_removed(r):
    p = os.path.join(r, "schema", "semantic_validate.py")
    s = open(p, encoding="utf-8").read()
    s = s.replace('add("GENERATED_MODE_BRAND_REQUIRED"', 'add("SCHEMA_VALID"')
    open(p, "w", encoding="utf-8").write(s)


def inj_used_by(r):
    d = jload(r, AR)
    d["roles"]["brand.wordmark"]["usedBySections"] = ["hero.report"]
    jsave(r, AR, d)


def inj_abs(r):
    with open(os.path.join(r, "README.md"), "a", encoding="utf-8") as f:
        f.write("\nSource: /" + "Users/someone/project\n")


# ---- section contracts, retrieval pin, provenance, wrapper gate (R7 / R8 / R9)
def edit_section(sid, fn):
    return edit("sections/%s.json" % sid, fn)


def edit_mv(fn):
    return edit("extraction/measured-values.json", fn)


def edit_text(rel, old, new):
    def inj(r):
        p = os.path.join(r, rel)
        t = open(p, encoding="utf-8").read()
        assert old in t, (rel, old)
        open(p, "w", encoding="utf-8").write(t.replace(old, new, 1))
    return inj


def set_hero_height(d, h):
    rt = next(x for x in d["sectionHeights"]["routes"] if x["route"] == "/product/bi/")
    inst = next(x for x in rt["sections"] if x["section"] == "hero.product")
    rt["pageHeightPx"] += h - inst["heightPx"]
    inst["heightPx"] = h
    d["sectionHeights"]["sections"]["hero.product"]["maxHeightPx"] = max(h, d["sectionHeights"]["sections"]["hero.product"]["maxHeightPx"])


def inj_retrieval_all_true(r):
    d = jload(r, "sections/divider.tron.json")
    d.pop("retrievalEligible"); d.pop("retrievalIneligibleReason")
    jsave(r, "sections/divider.tron.json", d)
    a = jload(r, "tokens/llm/component-allowlist.json")
    next(e for e in a["entries"] if e["id"] == "divider.tron")["retrievalEligible"] = True
    jsave(r, "tokens/llm/component-allowlist.json", a)


def inj_pm_cat(r):
    d = jload(r, "extraction/provenance-map.json")
    d["sections"]["hero.home"]["semantic"]["category"] = "FEATURE"
    jsave(r, "extraction/provenance-map.json", d)


def inj_closed_schema_open(r):
    d = jload(r, "schema/section-contract.schema.json")
    d["additionalProperties"] = True
    jsave(r, "schema/section-contract.schema.json", d)


def inj_gate_whitelist_stale(r):
    d = jload(r, "extraction/wrapper-whitelist.json")
    d["entries"].append({"kind": "hero-height", "route": "/", "section": "hero.home", "maxHeightPx": 9000, "reviewedBy": "x (not a human sign-off)", "attestation": "agent",
                         "reviewedOn": "2026-10-24", "justification": "A stale entry that must be rejected by the gate."})
    jsave(r, "extraction/wrapper-whitelist.json", d)


def inj_recipe_route_dropped(r):
    d = jload(r, "extraction/measure-recipes.json")
    d["routes"].pop("/pricing/")
    jsave(r, "extraction/measure-recipes.json", d)


# (name, injector, substring that must appear in verify_all's output[, needs src])
CASES = [
    ("PIN: real wordmark/logo flipped to generation-safe (valid enum value)", flip("brand.wordmark", "availability", "generation-safe"), "pinned availability: brand.wordmark must be 'reference-only'"),
    ("PIN: saved Hex capture flipped to generation-safe", flip("image.capture-fallback", "availability", "generation-safe"), "pinned availability: image.capture-fallback"),
    ("PIN: placeholder brand flipped to reference-only", flip("brand.placeholder", "availability", "reference-only"), "pinned availability: brand.placeholder"),
    ("PIN: user-supplied brand flipped to reference-only", flip("brand.user-supplied", "availability", "reference-only"), "pinned availability: brand.user-supplied"),
    ("PIN: a third-party logo role flipped to reference-only", flip("logo.customer", "availability", "reference-only"), "pinned availability: logo.customer"),
    ("PIN: availability outside the closed enum ('blocked')", flip("brand.wordmark", "availability", "blocked"), "is not one of"),
    ("PIN: availability enum widened in the registry", edit_roles(lambda d: d["availabilityValues"].append("blocked")), "availabilityValues must be"),
    ("PIN: wordmark policy changed to another valid policy, pinnedPolicies edited in step", inj_pinned_registry_too, "brand.wordmark: policy 'may-generate-new' != 'must-reuse-exact' (pinned in verify_all.py)"),
    ("PIN: placeholder brand policy loosened", flip("brand.placeholder", "generationPolicy", "may-generate-new"), "brand.placeholder: policy"),
    ("PIN: user-supplied policy turned into must-reuse-exact", flip("brand.user-supplied", "generationPolicy", "must-reuse-exact"), "brand.user-supplied: policy"),
    ("PIN: a new role added to the registry without a pin", edit_roles(lambda d: d["roles"].__setitem__("brand.extra", dict(d["roles"]["brand.placeholder"]))), "availability is not pinned in verify_all.py"),
    ("wordmark loses its generation-safe substitutes", edit_roles(lambda d: d["roles"]["brand.wordmark"].pop("generationSafeSubstitutes")), "names no generation-safe substitute"),
    ("wordmark substitute points at a reference-only role", flip("brand.wordmark", "generationSafeSubstitutes", ["image.capture-fallback"]), "is not a generation-safe role"),
    ("a role loses its generatedModeGuidance", edit_roles(lambda d: d["roles"]["brand.wordmark"].pop("generatedModeGuidance")), "missing generatedModeGuidance"),
    ("hero.report wordmark field drops the substitutes", inj_wordmark_field_no_substitute, "none of its substitutes"),
    ("shell.header contract loses the brand field", inj_header_brand_dropped, "contract has no brand media field"),
    ("schema loses the footer brand field", inj_schema_brand_dropped, "schema has no brand field"),
    ("schema makes mode optional", inj_mode_optional, "schema must require 'mode'"),
    ("schema mode enum gains a value", inj_mode_enum, "schema mode enum must be exactly"),
    ("example declared as reference mode", inj_example_reference, "must be mode 'generated'"),
    ("example carries the real Hex wordmark on the header", inj_example_real_brand, "example passes the semantic validator"),
    ("example header has no brand mark", inj_example_no_brand, "must carry a placeholder or user-supplied brand mark"),
    ("sourceBrand patterns no longer match the name 'Hex'", inj_brand_pattern_empty, "sourceBrand does not match 'Hex'"),
    ("sourceBrand pattern over-broad (matches 'hex color')", inj_brand_pattern_overbroad, "sourceBrand wrongly matches"),
    ("registry usedBySections drifts from the contracts", inj_used_by, "usedBySections drifts"),
    ("manifest assetRoles count drifts", inj_count, "assetRoles: manifest"),
    ("a graph rule is listed but its validator branch is gone", inj_validator_rule_removed, "GENERATED_MODE_BRAND_REQUIRED in graph.json but not implemented"),
    ("a graph rule is implemented but missing from graph.json", inj_rule_unimplemented, "GENERATED_MODE_SOURCE_BRAND implemented but not in graph.json"),
    ("absolute machine path in the README", inj_abs, "no absolute paths anywhere in the repo"),
    # ---- R7 source / semantic split, R8 retrieval pin, R9 wrapper gate
    ("R8 PIN: shell.header contract made retrievable", edit_section("shell.header", lambda d: (d.__setitem__("retrievalEligible", True), d.pop("retrievalIneligibleReason"))), "shell.header is pinned retrieval-ineligible in verify_all.py"),
    ("R8 PIN: divider.tron made retrievable in the contract AND the allowlist mirror", inj_retrieval_all_true, "divider.tron is pinned retrieval-ineligible in verify_all.py"),
    ("R8 PIN: allowlist mirror of retrievalEligible drifts", edit("tokens/llm/component-allowlist.json", lambda d: next(e for e in d["entries"] if e["id"] == "shell.header").__setitem__("retrievalEligible", True)), "allowlist shell.header: retrievalEligible"),
    ("R8 PIN: allowlist pinned list emptied", edit("tokens/llm/component-allowlist.json", lambda d: d.__setitem__("retrievalIneligibleSections", [])), "allowlist retrievalIneligibleSections"),
    ("R8 PIN: provenance-map retrieval list emptied", edit("extraction/provenance-map.json", lambda d: d.__setitem__("retrievalIneligible", {})), "provenance-map.json retrievalIneligible differs"),
    ("R8 PIN: the pin in semantic_validate.py emptied (independent copy)", edit_text("schema/semantic_validate.py", 'RETRIEVAL_INELIGIBLE_PINNED = ("divider.tron", "hero.placeholder", "shell.header")', "RETRIEVAL_INELIGIBLE_PINNED = ()"), "schema/semantic_validate.py pins"),
    ("R8: retrievalEligible false on an unpinned section", edit_section("hero.home", lambda d: d.update({"retrievalEligible": False, "retrievalIneligibleReason": "Not a real reason but long enough to pass the length rule."})), "hero.home is retrievalEligible false but not pinned"),
    ("R8: retrievalEligible as a string", edit_section("divider.tron", lambda d: d.__setitem__("retrievalEligible", "false")), "divider.tron: retrievalEligible must be a closed boolean"),
    ("R8: reason under 30 characters", edit_section("divider.tron", lambda d: d.__setitem__("retrievalIneligibleReason", "layout only")), "divider.tron: retrievalEligible false needs a reason of 30+ characters"),
    ("R8: a cookie-consent section that is not pinned", lambda r: jsave(r, "sections/shell.cookie-consent.json", dict(jload(r, "sections/divider.tron.json"), id="shell.cookie-consent", retrievalEligible=True)), "looks like runtime UI"),
    ("R8: the closed contract schema opened up", inj_closed_schema_open, "must stay closed at the top level"),
    ("R8: contract schema category enum widened", edit("schema/section-contract.schema.json", lambda d: d["properties"]["semantic"]["properties"]["category"]["enum"].append("LANDING")), "category enum differs from the list pinned in verify_all.py"),
    ("R7: a contract with an invented key", edit_section("hero.home", lambda d: d.__setitem__("category", "hero")), "sections/hero.home.json"),
    ("R7: a contract without a source object", edit_section("hero.home", lambda d: d.pop("source")), "sections/hero.home.json"),
    ("R7: semantic.id differs from the contract id", edit_section("hero.home", lambda d: d["semantic"].__setitem__("id", "hero.other")), "hero.home: semantic.id"),
    ("R7: source.id equals semantic.id", edit_section("hero.home", lambda d: d["source"].__setitem__("id", "hero.home")), "source.id and semantic.id must be different"),
    ("R7: category outside the closed enum", edit_section("hero.home", lambda d: d["semantic"].__setitem__("category", "LANDING")), "sections/hero.home.json"),
    ("R6: a conversion block classed FEATURE", edit_section("conversion.bottom-cta", lambda d: d["semantic"].__setitem__("category", "FEATURE")), "a conversion block must be CONVERSION"),
    ("R6: editorial podcast content classed FEATURE", edit_section("feature.podcast-episodes", lambda d: d["semantic"].__setitem__("category", "FEATURE")), "editorial/story content must not be classed FEATURE"),
    ("R6: a submitting form classed FEATURE", edit_section("conversion.form-shell", lambda d: d["semantic"].__setitem__("category", "FEATURE")), "submission/download behaviour but classed FEATURE"),
    ("R7: source range past the end of the real file (needs src)", edit_section("hero.home", lambda d: d["source"].__setitem__("lines", "5000-5100")), "is not a valid range", True),
    ("R7: source anchor no longer in the cited range (needs src)", edit_section("hero.home", lambda d: d["source"].__setitem__("anchor", "function NotThere")), "is not inside", True),
    ("R7: source file does not exist (needs src)", edit_section("hero.home", lambda d: d["source"].__setitem__("file", "src/components/Nope.jsx")), "source file src/components/Nope.jsx missing", True),
    ("R7: source.tag differs from the measured rendered tag", edit_section("hero.home", lambda d: d["source"].__setitem__("tag", "section")), "differs from the measured rendered root tag", True),
    ("R7: contract semantics edited without regenerating (needs src)", edit_section("feature.split", lambda d: d["semantic"].__setitem__("category", "PROOF")), "differ from what extraction/generate_provenance.py builds", True),
    ("R7: provenance-map category changed without regenerating (needs src)", inj_pm_cat, "differ from what extraction/generate_provenance.py builds", True),
    ("R9 PIN: HERO fail threshold weakened in wrapper_gate.py", edit_text("extraction/wrapper_gate.py", "HERO_FAIL_PX = 3000", "HERO_FAIL_PX = 9000"), "wrapper_gate.HERO_FAIL_PX is 9000 but verify_all.py pins 3000"),
    ("R9 PIN: page-share fail threshold weakened in wrapper_gate.py", edit_text("extraction/wrapper_gate.py", "SHARE_FAIL_PCT = 60.0", "SHARE_FAIL_PCT = 95.0"), "wrapper_gate.SHARE_FAIL_PCT is 95.0 but verify_all.py pins 60.0"),
    ("R9 PIN: minimum-sections skip raised in wrapper_gate.py", edit_text("extraction/wrapper_gate.py", "MIN_SECTIONS = 3", "MIN_SECTIONS = 50"), "wrapper_gate.MIN_SECTIONS is 50 but verify_all.py pins 3"),
    ("R9: viewport pin in wrapper_gate.py changed", edit_text("extraction/wrapper_gate.py", "VIEWPORT_WIDTH = 1440", "VIEWPORT_WIDTH = 1920"), "wrapper_gate.VIEWPORT_WIDTH is 1920 but verify_all.py pins 1440"),
    ("R9: sectionHeights measured at 1920px", edit_mv(lambda d: d["sectionHeights"]["viewport"].__setitem__("width", 1920)), "measured at the pinned 1440px viewport"),
    ("R9: a HERO over 3000px without a whitelist entry", edit_mv(lambda d: set_hero_height(d, 3500)), "a whole-page wrapper, not a hero"),
    ("R9: a section over 60% of its page without a whitelist entry", edit("extraction/wrapper-whitelist.json", lambda d: d.__setitem__("entries", d["entries"][1:])), "a whole-page wrapper. Decompose it"),
    ("R9: missing section measurement", edit_mv(lambda d: d["sectionHeights"]["sections"].pop("hero.home")), "no measurement for section hero.home"),
    ("R9: missing template measurement", edit_mv(lambda d: d["sectionHeights"].__setitem__("routes", [x for x in d["sectionHeights"]["routes"] if x["template"] != "template.compare"])), "no measured route for template template.compare"),
    ("R9: sectionHeights removed", edit_mv(lambda d: d.pop("sectionHeights")), "no sectionHeights"),
    ("R9: whitelist justification under 30 characters", edit("extraction/wrapper-whitelist.json", lambda d: d["entries"][0].__setitem__("justification", "one page only")), "justification must be at least 30"),
    ("R9: whitelist entry without reviewedBy", edit("extraction/wrapper-whitelist.json", lambda d: d["entries"][0].pop("reviewedBy")), "reviewedBy"),
    ("R9: whitelist ceiling below the measured height", edit("extraction/wrapper-whitelist.json", lambda d: d["entries"][0].__setitem__("maxHeightPx", 100)), "over the whitelisted ceiling"),
    ("R9: stale whitelist entry", inj_gate_whitelist_stale, "stale whitelist entry"),
    ("R9: manifest wrapperWhitelistEntries count drifts", edit("registry.manifest.json", lambda d: d["counts"].__setitem__("wrapperWhitelistEntries", 99)), "wrapperWhitelistEntries: manifest"),
    ("R9: manifest measuredRoutes count drifts", edit("registry.manifest.json", lambda d: d["counts"].__setitem__("measuredRoutes", 99)), "measuredRoutes: manifest"),
    ("R14: an entry point to the wrapper gate removed from the manifest path", edit("registry.manifest.json", lambda d: d["entryPoints"].__setitem__("wrapperGate", "extraction/gone.py")), "entryPoint wrapperGate"),
]


def run(r):
    p = subprocess.run([sys.executable, os.path.join(r, "extraction", "verify_all.py")], capture_output=True, text=True, cwd=r)
    return p.returncode, p.stdout + p.stderr


def main():
    tmp = tempfile.mkdtemp(prefix="hex-drift-")
    try:
        results = []
        base = os.path.join(tmp, "base", "design-repo")
        shutil.copytree(REPO, base, ignore=shutil.ignore_patterns("__pycache__", "*.pyc"))
        code, out = run(base)
        ok = code == 0
        results.append((ok, "unmodified copy passes verify_all.py", "" if ok else out[-400:]))
        have_src = os.path.isfile(os.path.join(PKG, "CLONE_SPEC.md"))
        skipped = 0
        for i, case in enumerate(CASES):
            name, inj, want = case[:3]
            if len(case) > 3 and case[3] and not have_src:
                skipped += 1
                continue
            r = os.path.join(tmp, "c%d" % i, "design-repo")
            shutil.copytree(REPO, r, ignore=shutil.ignore_patterns("__pycache__", "*.pyc"))
            if len(case) > 3 and case[3]:
                for entry in os.listdir(PKG):
                    if entry in ("design-repo", "node_modules", ".git", "dist"):
                        continue
                    os.symlink(os.path.join(PKG, entry), os.path.join(tmp, "c%d" % i, entry))
            inj(r)
            code, out = run(r)
            ok = code == 1 and want in out
            results.append((ok, name, "" if ok else "exit %d, expected message %r not found" % (code, want)))
        if skipped:
            print("note: %d case(s) marked needs src were skipped (no sibling source tree here)" % skipped)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    for ok, name, msg in results:
        print("%-4s %s %s" % ("PASS" if ok else "FAIL", name, msg))
    bad = [x for x in results if not x[0]]
    print("RESULT: %d/%d caught%s" % (len(results) - len(bad), len(results), "" if not bad else " -- %d NOT CAUGHT" % len(bad)))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
