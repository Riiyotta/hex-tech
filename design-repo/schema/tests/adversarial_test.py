#!/usr/bin/env python3
"""Adversarial suite for the hex design-repo PageSpec contract.

Controls (must produce ZERO errors):
  * the bundled example,
  * one synthesized minimal PageSpec per template (generic: built from each template's own node list, so a new or
    split template is covered automatically),
  * one synthesized PageSpec per real route, using the node sequence observed on that route.
Mutations (each must be REJECTED with the expected rule): schema-layer, structural, runtime word budgets, asset
policies, links, visual-only forms, plus warn-level rules proven to fire as warnings.

Usage: python3 schema/tests/adversarial_test.py     (exit 1 on any failure)
"""
import copy
import json
import os
import sys

sys.dont_write_bytecode = True
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))
import semantic_validate as sv  # noqa: E402

REPO = sv.REPO
repo = sv.load_repo()
SCHEMA = repo["schema"]
DEFS = SCHEMA["definitions"]
MOTION = repo["motion"]
SECTIONS = repo["sections"]
TEMPLATES = repo["templates"]


# --------------------------------------------------------------------------- synthesizer
def resolve(s):
    while "$ref" in s:
        s = DEFS[s["$ref"].split("/")[-1]]
    return s


def synth(s):
    s = resolve(s)
    if "const" in s:
        return s["const"]
    if "enum" in s:
        return s["enum"][0]
    t = s.get("type")
    if t == "string":
        if "pattern" in s:
            return "/"
        return "Sample"
    if t == "boolean":
        return False
    if t == "array":
        return [synth(s["items"]) for _ in range(s.get("minItems", 0))]
    if t == "object":
        out = {}
        for k in s.get("required", []):
            out[k] = synth(s["properties"][k])
        if "anyOf" in s:  # rich-text block: needs text or items
            first = s["anyOf"][0]["required"][0]
            if first not in out:
                out[first] = synth(s["properties"][first])
        return out
    raise ValueError(s)


def node(section, variant=None):
    sd = SECTIONS[section]
    pat = sd["motion"]["default"]
    n = {"section": section, "content": synth(DEFS["content__" + section]),
         "motion": {"pattern": pat, "trigger": MOTION[pat]["trigger"], "reducedMotionFallback": MOTION[pat]["reducedMotionFallback"]}}
    if sd["variants"]:
        n["variant"] = variant or sd["variants"][0]
    return n


def spec_for(tid, seq, route, theme):
    t = TEMPLATES[tid]
    return {"pageSpecVersion": SCHEMA["properties"]["pageSpecVersion"]["const"], "template": tid, "route": route, "theme": theme,
            "layout": t["layout"], "meta": {"title": "Sample page", "description": "Sample description"},
            "nodes": [node(s, v) for s, v in seq]}


def canonical_sequence(t):
    seq = []
    for e in t["nodes"]:
        if "slot" in e:
            pool = list(e["allowedSections"])
            k = 0
            while len([x for x in seq if x[2] == id(e)]) < e["minItems"]:
                s = pool[k % len(pool)]
                k += 1
                sd = SECTIONS[s]
                if (sd["constraints"].get("onePerPage") or sd["constraints"].get("maxPerPage")) and any(x[0] == s for x in seq):
                    continue
                seq.append((s, sd["variants"][0] if sd["variants"] else None, id(e)))
        elif e["required"]:
            v = (e.get("variants") or SECTIONS[e["section"]]["variants"] or [None])[0]
            seq.append((e["section"], v, None))
    return [(s, v) for s, v, _ in seq]


def route_for(tid):
    if tid == "template.placeholder":
        return "/page-not-built-yet/"
    return TEMPLATES[tid]["routes"][0]


def errors(spec):
    return [f for f in sv.check(spec, repo) if f["severity"] == "error"]


def warns(spec):
    return [f for f in sv.check(spec, repo) if f["severity"] == "warn"]


RESULTS = []


def control(name, spec, allowed_warn=()):
    fs = sv.check(spec, repo)
    errs = [f for f in fs if f["severity"] == "error"]
    bad_w = [f for f in fs if f["severity"] == "warn" and f["rule"] not in allowed_warn]
    ok = not errs and not bad_w
    RESULTS.append(("control", name, ok, "" if ok else "; ".join("%s: %s" % (f["rule"], f["message"]) for f in (errs + bad_w)[:3])))


def mutation(name, spec, expect_rules):
    errs = errors(spec)
    hit = sorted(set(f["rule"] for f in errs) & set(expect_rules))
    ok = bool(hit)
    RESULTS.append(("mutation", name, ok, ("rejected by %s" % ",".join(hit)) if ok else "NOT rejected (errors: %s)" % sorted(set(f["rule"] for f in errs))))


def warn_case(name, spec, rule):
    ws = warns(spec)
    es = errors(spec)
    ok = any(f["rule"] == rule for f in ws) and not es
    RESULTS.append(("warn", name, ok, ("warned by %s" % rule) if ok else "expected warn %s, got warns %s errors %s" % (rule, [f["rule"] for f in ws], [f["rule"] for f in es])))


def main():
    with open(os.path.join(REPO, "schema", "example.pagespec.json"), encoding="utf-8") as f:
        example = json.load(f)
    control("example.pagespec.json", example)
    for tid, t in sorted(TEMPLATES.items()):
        control("template control %s" % tid, spec_for(tid, canonical_sequence(t), route_for(tid), t["allowedThemes"][0]),
                allowed_warn=("PLACEHOLDER_TEMPLATE",))
    for r in repo["routes"]["routes"]:
        route = "/page-not-built-yet/" if r["path"] == "*" else r["path"]
        control("route control %s" % r["path"], spec_for(r["template"], [tuple(x) for x in r["observedSequence"]], route, r["theme"]),
                allowed_warn=("PLACEHOLDER_TEMPLATE",))

    E = lambda: copy.deepcopy(example)

    def nodes_of(spec, section):
        return [n for n in spec["nodes"] if n["section"] == section]

    # ---------------- schema layer
    s = E(); s["template"] = "template.landing"; mutation("unknown template enum", s, ["SCHEMA_VALID", "TEMPLATE_KNOWN"])
    s = E(); del nodes_of(s, "hero.integration")[0]["content"]["headline"]; mutation("missing required content field", s, ["SCHEMA_VALID"])
    s = E(); nodes_of(s, "hero.integration")[0]["section"] = "hero.integrations"; mutation("invented section type alias", s, ["SCHEMA_VALID"])
    s = E(); del s["nodes"][1]["motion"]["reducedMotionFallback"]; mutation("missing reducedMotionFallback", s, ["SCHEMA_VALID", "REDUCED_MOTION_FALLBACK"])
    s = E(); s["nodes"][2]["motion"]["inventedAnimation"] = "spin"; mutation("invented motion field", s, ["SCHEMA_VALID"])
    s = E(); s["nodes"][2]["motion"]["reducedMotionFallback"] = "static-first-frame"; mutation("fallback not locked to pattern", s, ["SCHEMA_VALID", "REDUCED_MOTION_FALLBACK"])
    s = E(); nodes_of(s, "hero.integration")[0]["motion"] = {"pattern": "marquee-scroll", "trigger": "continuous", "reducedMotionFallback": "static-first-frame"}
    mutation("motion pattern not allowed for section", s, ["SCHEMA_VALID", "MOTION_PATTERN_ALLOWED"])
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["endpoint"] = "https://example.com/x"; mutation("extra content property", s, ["SCHEMA_VALID"])
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["logo"]["assetRole"] = "image.stock"; mutation("invented assetRole", s, ["SCHEMA_VALID", "ASSET_ROLE_POLICY"])
    s = E(); nodes_of(s, "hero.integration")[0]["variant"] = "wide"; mutation("variant on a variant-less section", s, ["SCHEMA_VALID"])
    s = E(); nodes_of(s, "divider.tron")[0]["variant"] = "dotted"; mutation("unknown variant", s, ["SCHEMA_VALID"])
    s = E(); s["pageSpecVersion"] = "0.9.0"; mutation("wrong pageSpecVersion", s, ["SCHEMA_VALID"])
    s = E(); s["styleOverrides"] = {"color": "#FF0000"}; mutation("smuggled top-level style override", s, ["SCHEMA_VALID"])

    # ---------------- structural
    s = E(); s["nodes"].insert(2, copy.deepcopy(nodes_of(s, "hero.integration")[0])); mutation("duplicate hero / one-per-page", s, ["ONE_HERO", "ONE_PER_PAGE", "TEMPLATE_SEQUENCE"])
    s = E(); s["nodes"] = [n for n in s["nodes"] if n["section"] != "feature.how-it-works"]; mutation("removed mandatory section", s, ["TEMPLATE_SEQUENCE"])
    s = E(); f = s["nodes"].pop(); s["nodes"].insert(5, f); mutation("footer moved off last position", s, ["TEMPLATE_SEQUENCE", "CHROME_POSITION"])
    s = E(); s["nodes"][1], s["nodes"][2] = s["nodes"][2], s["nodes"][1]; mutation("hero not first", s, ["TEMPLATE_SEQUENCE", "HERO_FIRST"])
    s = E(); s["template"] = "template.compare"; mutation("declared template contradicts node list", s, ["TEMPLATE_SEQUENCE"])
    s = E(); s["nodes"].insert(4, node("feature.built-different")); mutation("section not in template (+home-only)", s, ["TEMPLATE_SEQUENCE", "HOME_ROUTE_ONLY"])
    s = E(); s["nodes"] = s["nodes"][1:]; mutation("site layout without header", s, ["CHROME_POSITION", "TEMPLATE_SEQUENCE"])
    rep = spec_for("template.report", canonical_sequence(TEMPLATES["template.report"]), "/state-of-data-teams/", "light")
    s = copy.deepcopy(rep); s["layout"] = "site"; mutation("standalone template declared as site layout", s, ["LAYOUT_MATCH"])
    s = copy.deepcopy(rep); s["nodes"].insert(0, node("shell.header")); mutation("standalone page with global header", s, ["CHROME_POSITION", "TEMPLATE_SEQUENCE"])
    home = spec_for("template.home", canonical_sequence(TEMPLATES["template.home"]), "/", "light")
    s = copy.deepcopy(home); s["theme"] = "dark"; mutation("theme not allowed for template", s, ["THEME_ALLOWED"])
    s = copy.deepcopy(home); s["route"] = "/about-us/"; mutation("home template off the home route", s, ["HOME_ROUTE_ONLY"])
    s = copy.deepcopy(home); [n for n in s["nodes"] if n["section"] == "proof.customer-banner"][0]["variant"] = "minimal"
    mutation("variant not allowed by template entry", s, ["TEMPLATE_SEQUENCE"])
    s = E(); s["route"] = "product/integrations/quarry-lake"; mutation("route format", s, ["ROUTE_FORMAT"])
    s = E(); s["route"] = "/pricing/"; mutation("existing route mapped to another template", s, ["ROUTE_TEMPLATE_CONSISTENCY"])
    bi = [r for r in repo["routes"]["routes"] if r["path"] == "/product/bi/"][0]
    seq = [tuple(x) for x in bi["observedSequence"]]
    over = seq[:-1] + [("feature.split", "image")] * 3 + seq[-1:]
    mutation("slot over its observed maximum", spec_for("template.product-feature", over, "/product/bi/", "light"), ["TEMPLATE_SEQUENCE"])
    guides = [r for r in repo["routes"]["routes"] if r["path"] == "/resources/guides/"][0]
    g = spec_for("template.v1-resource-index", [tuple(x) for x in guides["observedSequence"]], "/resources/guides/", "dark")
    gn = [n for n in g["nodes"] if n["section"] == "collection.guides"][0]
    control("corrected rule, accepted side: 20 guide cards", g)
    gn["content"]["cards"].append(copy.deepcopy(gn["content"]["cards"][0]))
    mutation("corrected rule, rejected side: 21 guide cards (old spec claim)", g, ["SCHEMA_VALID"])

    # ---------------- runtime word budgets
    s = E(); h = nodes_of(s, "hero.integration")[0]; h["content"]["headline"] = " ".join(["word"] * (SECTIONS["hero.integration"]["wordBudgets"]["headline"] + 1))
    mutation("maxWords overflow on hero headline", s, ["MAX_WORDS"])
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["actions"][0]["label"] = " ".join(["go"] * 30); mutation("maxWords overflow on CTA label", s, ["MAX_WORDS"])
    s = E(); hw = nodes_of(s, "feature.how-it-works")[0]; rb = SECTIONS["feature.how-it-works"]["richTextBudgets"]["body"]
    hw["content"]["body"][0]["text"] = " ".join(["data"] * (rb["maxWordsPerBlock"] + 1)); mutation("rich-text block over maxWordsPerBlock", s, ["MAX_WORDS"])
    s = E(); hw = nodes_of(s, "feature.how-it-works")[0]; hw["content"]["body"] = [{"type": "paragraph", "text": "x"}] * (rb["maxBlocks"] + 1)
    mutation("rich-text over maxBlocks", s, ["SCHEMA_VALID", "MAX_WORDS"])
    s = E(); s["meta"]["title"] = " ".join(["title"] * (SCHEMA["definitions"]["meta"]["properties"]["title"]["x-maxWords"] + 1)); mutation("meta title over budget", s, ["MAX_WORDS"])

    # ---------------- assets
    s = E(); nodes_of(s, "proof.stories-two-up")[0]["content"]["stories"][0]["logo"]["src"] = "/assets/logos/customers/notion.svg"
    mutation("real customer logo on a placeholder-only role", s, ["ASSET_ROLE_POLICY"])
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["logo"]["src"] = "/assets/pages/product/integrations-bigquery/logo.svg"
    mutation("real vendor logo on logo.integration", s, ["ASSET_ROLE_POLICY"])
    s = copy.deepcopy(rep); hr = [n for n in s["nodes"] if n["section"] == "hero.report"][0]; hr["content"]["wordmark"]["src"] = "/assets/svg/logo/redrawn-logo.svg"
    mutation("brand wordmark not an exact allowed source", s, ["ASSET_ROLE_POLICY"])
    s = E(); nodes_of(s, "feature.how-it-works")[0]["content"]["illustration"]["src"] = "https://cdn.example.com/x.png"
    mutation("may-generate-new role hotlinking an external URL", s, ["ASSET_ROLE_POLICY"])
    vid = spec_for("template.integration-detail", [("shell.header", None), ("hero.integration", None), ("divider.tron", "default"), ("feature.how-it-works", None),
                                                    ("feature.video-embed", None), ("shell.footer", None)], "/product/integrations/quarry-lake/", "dark")
    control("integration detail with external video embed", vid)
    s = copy.deepcopy(vid); [n for n in s["nodes"] if n["section"] == "feature.video-embed"][0]["content"]["embed"]["src"] = "/assets/video.mp4"
    mutation("external embed pointing at a local file", s, ["ASSET_ROLE_POLICY"])

    # ---------------- links
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["actions"][1]["external"] = True; mutation("external flag disagrees with href", s, ["LINK_FORMAT"])
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["actions"][0]["href"] = "http://example.com/"; mutation("insecure http href", s, ["LINK_FORMAT"])
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["actions"][1]["href"] = "/request-a-demo"; mutation("internal href without trailing slash", s, ["LINK_FORMAT"])
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["actions"][1]["href"] = "javascript:alert(1)"; mutation("javascript: href", s, ["SCHEMA_VALID", "LINK_FORMAT"])

    # ---------------- visual-only forms
    form = spec_for("template.form-page", canonical_sequence(TEMPLATES["template.form-page"]), "/request-a-demo/", "light")
    control("form page control", form)
    s = copy.deepcopy(form); [n for n in s["nodes"] if n["section"] == "conversion.form-shell"][0]["content"]["submission"] = "https://forms.example.com/submit"
    mutation("form with a submission endpoint", s, ["SCHEMA_VALID", "FORM_NO_SUBMISSION"])
    s = copy.deepcopy(form); [n for n in s["nodes"] if n["section"] == "conversion.form-shell"][0]["content"]["action"] = "/api/submit"
    mutation("form with an action field", s, ["SCHEMA_VALID"])

    # ---------------- warn-level rules fire as warnings (not errors)
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["actions"][1]["href"] = "/not-a-real-page/"; warn_case("unknown internal link warns", s, "INTERNAL_LINK_ROUTED")
    seq2 = [tuple(x) for x in bi["observedSequence"]]
    i = seq2.index(("feature.approach-cards", None))
    # count-neutral (replaces two body nodes): /product/bi/ already sits at the body slot's observed maximum
    adj = seq2[:i] + [("feature.section-heading", "display"), ("feature.section-heading", "display")] + seq2[i + 2:]
    warn_case("same (section, variant) back-to-back warns", spec_for("template.product-feature", adj, "/product/bi/", "light"), "NO_ADJACENT_SAME_SECTION")
    warn_case("placeholder template warns", spec_for("template.placeholder", canonical_sequence(TEMPLATES["template.placeholder"]), "/page-not-built-yet/", "light"), "PLACEHOLDER_TEMPLATE")

    # ---------------- report
    n_ctrl = sum(1 for r in RESULTS if r[0] == "control")
    n_mut = sum(1 for r in RESULTS if r[0] == "mutation")
    n_warn = sum(1 for r in RESULTS if r[0] == "warn")
    failed = [r for r in RESULTS if not r[2]]
    for kind, name, ok, msg in RESULTS:
        if kind != "control" or not ok:
            print("%-4s %-8s %-62s %s" % ("PASS" if ok else "FAIL", kind, name[:62], msg))
    print("controls: %d/%d passed (example + %d template controls + %d route controls + targeted controls)"
          % (sum(1 for r in RESULTS if r[0] == "control" and r[2]), n_ctrl, len(TEMPLATES), len(repo["routes"]["routes"])))
    print("mutations: %d/%d rejected" % (sum(1 for r in RESULTS if r[0] == "mutation" and r[2]), n_mut))
    print("warn-level checks: %d/%d fired as warnings" % (sum(1 for r in RESULTS if r[0] == "warn" and r[2]), n_warn))
    print("RESULT: %s" % ("ALL PASS" if not failed else "%d FAILURE(S)" % len(failed)))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
