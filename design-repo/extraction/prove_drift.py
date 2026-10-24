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


# (name, injector, substring that must appear in verify_all's output)
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
        for i, (name, inj, want) in enumerate(CASES):
            r = os.path.join(tmp, "c%d" % i, "design-repo")
            shutil.copytree(REPO, r, ignore=shutil.ignore_patterns("__pycache__", "*.pyc"))
            inj(r)
            code, out = run(r)
            ok = code == 1 and want in out
            results.append((ok, name, "" if ok else "exit %d, expected message %r not found" % (code, want)))
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    for ok, name, msg in results:
        print("%-4s %s %s" % ("PASS" if ok else "FAIL", name, msg))
    bad = [x for x in results if not x[0]]
    print("RESULT: %d/%d caught%s" % (len(results) - len(bad), len(results), "" if not bad else " -- %d NOT CAUGHT" % len(bad)))
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
