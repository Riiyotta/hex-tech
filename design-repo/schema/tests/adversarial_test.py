#!/usr/bin/env python3
"""Adversarial suite for the hex design-repo PageSpec contract.

Controls (must produce ZERO errors):
  * the bundled example,
  * one synthesized minimal PageSpec per template (generic: built from each template's own node list, so a new or
    split template is covered automatically),
  * one synthesized PageSpec per real route, using the node sequence observed on that route.
Mutations (each must be REJECTED with the expected rule): schema-layer, structural, runtime word budgets, asset
policies, links, visual-only forms, reference/generated-mode brand safety (Hex wordmark and logo leakage), plus
contract pins (retrievalEligible, semantic category, source/semantic split) and the whole-page-wrapper gate
(HERO height, page share, missing measurement, whitelist hygiene), plus warn-level rules proven to fire as warnings.

Usage: python3 schema/tests/adversarial_test.py     (exit 1 on any failure)
"""
import copy
import json
import os
import shutil
import sys
import tempfile

sys.dont_write_bytecode = True
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(HERE)), "extraction"))
import semantic_validate as sv  # noqa: E402
import wrapper_gate as wg  # noqa: E402

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
    return {"pageSpecVersion": SCHEMA["properties"]["pageSpecVersion"]["const"], "mode": "reference", "template": tid, "route": route, "theme": theme,
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

    # ---------------- reference / generated mode: the real Hex wordmark / logo must never reach a generated page
    ROLES = repo["assets"]

    def to_generated(spec):
        """Flip a reference spec to generated: reference-only roles -> their first generation-safe substitute (src dropped),
        and a placeholder brand mark on the shell chrome."""
        g = copy.deepcopy(spec); g["mode"] = "generated"
        for nd in g["nodes"]:
            for _t, m in sv._media(nd["content"]):
                r = ROLES[m["assetRole"]]
                if r["availability"] != "generation-safe":
                    m["assetRole"] = r["generationSafeSubstitutes"][0]; m.pop("src", None)
            if nd["section"] in ("shell.header", "shell.footer"):
                nd["content"]["brand"] = {"assetRole": "brand.placeholder", "alt": "Placeholder brand mark", "src": "placeholder:brand-mark"}
        return g

    def gen_route(tid):   # a generated page has its own routes: never reuse one of the source's (some name the brand)
        return {"template.home": "/", "template.placeholder": "/page-not-built-yet/"}.get(tid, "/example-page/")

    gen_example = E()
    gen_rep = to_generated(rep)          # standalone report page: hero.report carries the wordmark field
    gen_home = to_generated(home)
    control("generated example (placeholder brand on header and footer)", gen_example)
    control("generated report page (hero.report wordmark = brand.placeholder)", gen_rep)
    control("generated home page (placeholder brand on the shell)", gen_home)
    for tid, t in sorted(TEMPLATES.items()):
        control("generated template control %s" % tid, to_generated(spec_for(tid, canonical_sequence(t), gen_route(tid), t["allowedThemes"][0])), allowed_warn=("PLACEHOLDER_TEMPLATE",))
    s = copy.deepcopy(gen_rep); [n for n in s["nodes"] if n["section"] == "hero.report"][0]["content"]["wordmark"] = {"assetRole": "brand.user-supplied", "alt": "Customer logo", "src": "user:brand-logo"}
    control("generated report page with a user-supplied brand mark", s)
    s = copy.deepcopy(gen_home); s["nodes"][0]["content"]["brand"] = {"assetRole": "brand.user-supplied", "alt": "Acme mark"}
    control("generated shell with a user-supplied brand mark and no src", s)
    s = E(); nodes_of(s, "hero.integration")[0]["content"]["headline"] = "Pick a hex color for every chart series"; control("generated copy with 'hex color' (technical word, not the brand)", s)
    ref_rep = copy.deepcopy(rep); [n for n in ref_rep["nodes"] if n["section"] == "hero.report"][0]["content"]["wordmark"]["src"] = "/assets/svg/logo/hex-logo-nav.svg"
    control("reference mode: report page still carries the real Hex wordmark file", ref_rep)
    for src in repo["assets"]["brand.wordmark"]["allowedSources"]:
        s = copy.deepcopy(rep); [n for n in s["nodes"] if n["section"] == "hero.report"][0]["content"]["wordmark"]["src"] = src
        control("reference mode: real wordmark file %s" % os.path.basename(src), s)
    s = copy.deepcopy(home); s["nodes"][0]["content"]["brand"] = {"assetRole": "brand.wordmark", "alt": "Hex wordmark", "src": "/assets/svg/logo/hex-logo-nav.svg"}
    control("reference mode: shell.header may state the real wordmark", s)
    control("reference mode: shell with no brand field (clone renders its own)", home)

    # wordmark leakage
    gw = lambda: copy.deepcopy(gen_rep)
    def wm_of(spec): return [n for n in spec["nodes"] if n["section"] == "hero.report"][0]["content"]["wordmark"]
    s = gw(); wm_of(s).update({"assetRole": "brand.wordmark", "src": "/assets/svg/logo/hex-logo-nav.svg", "alt": "A logo"})
    mutation("Hex wordmark leakage: real role + real file in a generated report hero", s, ["GENERATED_MODE_REFERENCE_ASSET"])
    s = gw(); wm_of(s).update({"assetRole": "brand.wordmark", "alt": "A logo"}); wm_of(s).pop("src", None)
    mutation("Hex wordmark leakage: the real role alone, no src", s, ["GENERATED_MODE_REFERENCE_ASSET"])
    s = gw(); wm_of(s).update({"assetRole": "brand.wordmark", "src": "placeholder:brand-mark", "alt": "A logo"})
    mutation("Hex wordmark leakage: the real role dressed with a placeholder src", s, ["GENERATED_MODE_REFERENCE_ASSET"])
    s = gw(); wm_of(s).update({"assetRole": "brand.placeholder", "src": "/assets/svg/logo/hex-logo-footer.svg", "alt": "A logo"})
    mutation("Hex wordmark leakage: real footer file smuggled under brand.placeholder", s, ["ASSET_ROLE_POLICY", "GENERATED_MODE_REFERENCE_ASSET", "GENERATED_MODE_SOURCE_BRAND"])
    s = gw(); wm_of(s).update({"assetRole": "brand.user-supplied", "src": "/assets/pages/company/state-of-data-teams/svg/SectionHero-HexLogoWrapper-a8e301cf.svg", "alt": "A logo"})
    mutation("Hex wordmark leakage: report-hero wordmark file under brand.user-supplied", s, ["ASSET_ROLE_POLICY", "GENERATED_MODE_REFERENCE_ASSET", "GENERATED_MODE_SOURCE_BRAND"])
    s = gw(); wm_of(s).update({"assetRole": "brand.placeholder", "src": "https://hex.tech/logo.svg", "alt": "A logo"})
    mutation("Hex wordmark leakage: hotlinked Hex URL", s, ["ASSET_ROLE_POLICY", "GENERATED_MODE_SOURCE_BRAND"])
    s = gw(); wm_of(s)["alt"] = "Hex wordmark"
    mutation("Hex wordmark leakage: alt text names the wordmark", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = gw(); wm_of(s)["alt"] = "HEX"
    mutation("Hex wordmark leakage: alt text 'HEX' (case-insensitive)", s, ["GENERATED_MODE_SOURCE_BRAND"])
    mutation("a reference page flipped to generated is rejected (real wordmark file)", dict(copy.deepcopy(ref_rep), mode="generated"), ["GENERATED_MODE_REFERENCE_ASSET"])

    # logo leakage (shell chrome and any other media field)
    s = copy.deepcopy(gen_home); s["nodes"][0]["content"]["brand"] = {"assetRole": "brand.wordmark", "alt": "Logo", "src": "/assets/svg/logo/hex-logo-nav.svg"}
    mutation("Hex logo leakage: real wordmark role on the generated header", s, ["GENERATED_MODE_REFERENCE_ASSET"])
    s = copy.deepcopy(gen_home); s["nodes"][-1]["content"]["brand"] = {"assetRole": "brand.wordmark", "alt": "Logo"}
    mutation("Hex logo leakage: real wordmark role on the generated footer", s, ["GENERATED_MODE_REFERENCE_ASSET"])
    s = copy.deepcopy(gen_home); s["nodes"][-1]["content"]["brand"] = {"assetRole": "brand.placeholder", "alt": "Hex logo", "src": "placeholder:brand-mark"}
    mutation("Hex logo leakage: footer alt text 'Hex logo'", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = copy.deepcopy(gen_home); s["nodes"][0]["content"]["brand"] = {"assetRole": "brand.placeholder", "alt": "Logo", "src": "placeholder:hex-logo"}
    mutation("Hex logo leakage: placeholder slug 'hex-logo'", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = copy.deepcopy(gen_home); s["nodes"][0]["content"]["brand"] = {"assetRole": "brand.user-supplied", "alt": "Logo", "src": "/assets/svg/logo/hex-logo-nav.svg"}
    mutation("Hex logo leakage: real nav file under brand.user-supplied", s, ["ASSET_ROLE_POLICY", "GENERATED_MODE_REFERENCE_ASSET", "GENERATED_MODE_SOURCE_BRAND"])
    s = copy.deepcopy(gen_example); nodes_of(s, "hero.integration")[0]["content"]["logo"] = {"assetRole": "logo.integration", "alt": "Hex logo"}
    mutation("Hex logo leakage: Hex named as the integration logo", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = copy.deepcopy(gen_example); nodes_of(s, "feature.how-it-works")[0]["content"]["illustration"]["src"] = "/assets/svg/logo/hex-logo-footer.svg"
    mutation("Hex logo leakage: real logo file used as an illustration", s, ["GENERATED_MODE_REFERENCE_ASSET", "GENERATED_MODE_SOURCE_BRAND"])
    s = copy.deepcopy(gen_example); s["nodes"][0]["content"].pop("brand")
    mutation("generated header without a brand mark (chrome would render the real logo)", s, ["GENERATED_MODE_BRAND_REQUIRED"])
    s = copy.deepcopy(gen_example); s["nodes"][-1]["content"].pop("brand")
    mutation("generated footer without a brand mark", s, ["GENERATED_MODE_BRAND_REQUIRED"])
    s = copy.deepcopy(gen_example); s["nodes"][0]["content"]["brand"]["assetRole"] = "logo.customer"
    mutation("brand field with a non-brand role", s, ["SCHEMA_VALID"])
    s = copy.deepcopy(gen_example); s["nodes"][0]["content"]["brand"]["src"] = "https://example.com/mark.svg"
    mutation("brand field hotlinking an external file", s, ["SCHEMA_VALID", "ASSET_ROLE_POLICY"])
    s = copy.deepcopy(gen_home); s["nodes"][0]["content"]["brand"] = {"assetRole": "brand.placeholder", "alt": "Logo", "src": "user:logo"}
    mutation("brand.placeholder with a user file reference", s, ["ASSET_ROLE_POLICY"])

    # name leakage (derived from the real source: company name, domain)
    def hero_of(spec): return nodes_of(spec, "hero.integration")[0]["content"]
    s = E(); hero_of(s)["headline"] = "Connect Quarry Lake to Hex"; mutation("source name in a heading", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = E(); hero_of(s)["description"] = "Built by Hex Technologies, Inc."; mutation("source company name in body copy", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = E(); hero_of(s)["actions"][0]["href"] = "https://app.hex.tech/signup"; mutation("source app domain in a CTA href", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = E(); hero_of(s)["actions"][0]["label"] = "Try hex"; mutation("source name in a CTA label (lowercase)", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = E(); s["meta"]["title"] = "Quarry Lake | Hex"; mutation("source name in the page title", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = E(); s["route"] = "/hex-tech/"; mutation("source name in the route", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = E(); s["nodes"][0]["content"]["brand"]["alt"] = "Hex Technologies logo"; mutation("source company name in the brand alt", s, ["GENERATED_MODE_SOURCE_BRAND"])
    s = E(); del s["mode"]; mutation("mode missing", s, ["SCHEMA_VALID"])
    s = E(); s["mode"] = "production"; mutation("invalid mode value", s, ["SCHEMA_VALID"])
    s = E(); s["mode"] = "Generated"; mutation("wrong-case mode value", s, ["SCHEMA_VALID"])
    s = E(); s["mode"] = "reference"; control("example flipped to reference passes (placeholder brand is allowed there too)", s)

    # ---------------- section contracts: retrieval pin, semantic/source split, honest classing (repo-level rules)
    def mutation_repo(name, mutate, expect_rules, spec=None):
        r2 = dict(repo)
        r2["sections"] = copy.deepcopy(repo["sections"])
        r2["allowlist"] = copy.deepcopy(repo["allowlist"])
        r2["allowlistFile"] = copy.deepcopy(repo["allowlistFile"])
        mutate(r2)
        errs = [f for f in sv.check(spec or example, r2) if f["severity"] == "error"]
        hit = sorted(set(f["rule"] for f in errs) & set(expect_rules))
        RESULTS.append(("mutation", name, bool(hit), ("rejected by %s" % ",".join(hit)) if hit else "NOT rejected (errors: %s)" % sorted(set(f["rule"] for f in errs))))

    def sec(sid, fn):
        return lambda r: fn(r["sections"][sid])

    RET, SEM = ["RETRIEVAL_ELIGIBILITY_PINNED"], ["SEMANTIC_CATEGORY_CLOSED"]
    LONG = "Not a real reason but long enough to pass the length rule."
    mutation_repo("retrievalEligible: a pinned utility (divider.tron) made retrievable", sec("divider.tron", lambda d: (d.pop("retrievalEligible"), d.pop("retrievalIneligibleReason"))), RET)
    mutation_repo("retrievalEligible: the pinned shell.header made retrievable", sec("shell.header", lambda d: (d.__setitem__("retrievalEligible", True), d.pop("retrievalIneligibleReason"))), RET)
    mutation_repo("retrievalEligible: a string 'false' instead of a closed boolean", sec("divider.tron", lambda d: d.__setitem__("retrievalEligible", "false")), RET)
    mutation_repo("retrievalEligible: reason shorter than 30 characters", sec("divider.tron", lambda d: d.__setitem__("retrievalIneligibleReason", "layout only")), RET)
    mutation_repo("retrievalEligible: false on a section that is not pinned", sec("hero.home", lambda d: d.update({"retrievalEligible": False, "retrievalIneligibleReason": LONG})), RET)
    mutation_repo("retrievalEligible: a reason on a retrievable section", sec("hero.home", lambda d: d.__setitem__("retrievalIneligibleReason", LONG)), RET)

    def add_cookie(r):
        c = copy.deepcopy(r["sections"]["divider.tron"])
        c["id"] = "shell.cookie-consent-banner"
        c.pop("retrievalEligible", None); c.pop("retrievalIneligibleReason", None)
        r["sections"]["shell.cookie-consent-banner"] = c
    mutation_repo("retrievalEligible: a cookie consent banner section that is not pinned", add_cookie, RET)
    mutation_repo("retrievalEligible: allowlist mirror says divider.tron is retrievable", lambda r: r["allowlist"]["divider.tron"].__setitem__("retrievalEligible", True), RET)
    mutation_repo("retrievalEligible: allowlist pinned list emptied", lambda r: r["allowlistFile"].__setitem__("retrievalIneligibleSections", []), RET)
    mutation_repo("retrievalEligible: allowlist pinned list gains a section", lambda r: r["allowlistFile"]["retrievalIneligibleSections"].append("hero.home"), RET)
    s_ = E(); nodes_of(s_, "hero.integration")[0]["retrievalEligible"] = True
    mutation("retrievalEligible at node level (a PageSpec node cannot carry it)", s_, ["SCHEMA_VALID"])
    s_ = E(); s_["retrievalEligible"] = True
    mutation("retrievalEligible at PageSpec level", s_, ["SCHEMA_VALID"])
    control("pinned retrieval list is exactly the three layout-only/runtime sections", E())
    RESULTS.append(("control", "retrieval pins match the contracts", sorted(sv.RETRIEVAL_INELIGIBLE_PINNED) == sorted(k for k, c in SECTIONS.items() if c.get("retrievalEligible", True) is False), ""))

    mutation_repo("semantic: a conversion block classed FEATURE", sec("conversion.bottom-cta", lambda d: d["semantic"].__setitem__("category", "FEATURE")), SEM)
    mutation_repo("semantic: a page-opening block classed FEATURE", sec("hero.home", lambda d: d["semantic"].__setitem__("category", "FEATURE")), SEM)
    mutation_repo("semantic: a category outside the closed enum", sec("hero.home", lambda d: d["semantic"].__setitem__("category", "LANDING")), SEM)
    mutation_repo("semantic: semantic.id differs from the contract id", sec("hero.home", lambda d: d["semantic"].__setitem__("id", "hero.other")), SEM)
    mutation_repo("semantic: source.id equals semantic.id", sec("hero.home", lambda d: d["source"].__setitem__("id", "hero.home")), SEM)
    mutation_repo("semantic: a contract without a source object", sec("hero.home", lambda d: d.pop("source")), SEM)
    mutation_repo("semantic: a contract without a semantic object", sec("hero.home", lambda d: d.pop("semantic")), SEM)
    mutation_repo("semantic: a submitting form classed FEATURE", sec("conversion.form-shell", lambda d: d["semantic"].__setitem__("category", "FEATURE")), SEM)
    mutation_repo("semantic: editorial podcast content classed FEATURE", sec("feature.podcast-episodes", lambda d: d["semantic"].__setitem__("category", "FEATURE")), SEM)
    mutation_repo("semantic: customer-story facts classed FEATURE", sec("feature.story-details", lambda d: d["semantic"].__setitem__("category", "FEATURE")), SEM)
    mutation_repo("semantic: allowlist semanticCategory drifts from the contract", lambda r: r["allowlist"]["hero.home"].__setitem__("semanticCategory", "FEATURE"), SEM)

    # closed section-contract schema (a contract with an invented key or a bad source is a schema error)
    from jsonschema import Draft7Validator
    csch = Draft7Validator(json.load(open(os.path.join(REPO, "schema", "section-contract.schema.json"), encoding="utf-8")))

    def contract_case(name, fn, accept=False):
        d = copy.deepcopy(SECTIONS["hero.home"]); fn(d)
        bad = list(csch.iter_errors(d))
        RESULTS.append(("control" if accept else "mutation", name, (not bad) if accept else bool(bad), "" if (bool(bad) != accept) else ("rejected by the closed schema" if not accept else "schema rejected a valid contract")))
    contract_case("every shipped contract validates against the closed contract schema", lambda d: None, accept=True)
    contract_case("contract schema: an invented top-level key", lambda d: d.__setitem__("category", "hero"))
    contract_case("contract schema: an invented key inside source", lambda d: d["source"].__setitem__("selector", ".x"))
    contract_case("contract schema: an invented key inside semantic", lambda d: d["semantic"].__setitem__("tags", []))
    contract_case("contract schema: source without its range", lambda d: d["source"].pop("lines"))
    contract_case("contract schema: source tag outside the closed enum", lambda d: d["source"].__setitem__("tag", "marquee"))
    contract_case("contract schema: source.file outside src/", lambda d: d["source"].__setitem__("file", "docs/Hero.jsx"))
    contract_case("contract schema: retrievalEligible as a string", lambda d: d.__setitem__("retrievalEligible", "true"))
    contract_case("contract schema: reason under 30 characters", lambda d: d.update({"retrievalEligible": False, "retrievalIneligibleReason": "too short"}))
    contract_case("contract schema: an invented content-field key", lambda d: d["content"]["headline"].__setitem__("cssClass", "x"))

    # ---------------- whole-page-wrapper gate (extraction/wrapper_gate.py over extraction/measured-values.json)
    def gate_copy():
        tmp = tempfile.mkdtemp(prefix="hex-gate-")
        shutil.copytree(os.path.join(REPO, "templates"), os.path.join(tmp, "templates"))
        shutil.copytree(os.path.join(REPO, "sections"), os.path.join(tmp, "sections"))
        os.makedirs(os.path.join(tmp, "extraction"))
        for f in ("measured-values.json", "wrapper-whitelist.json"):
            shutil.copy(os.path.join(REPO, "extraction", f), os.path.join(tmp, "extraction", f))
        return tmp

    def jedit(tmp, rel, fn):
        p = os.path.join(tmp, rel)
        d = json.load(open(p, encoding="utf-8")); fn(d)
        json.dump(d, open(p, "w", encoding="utf-8"), indent=2)

    def route_rec(d, route):
        return next(r for r in d["sectionHeights"]["routes"] if r["route"] == route)

    def set_height(d, route, section, h):
        """Set one instance to h and absorb the difference in the page height so the accounting stays valid."""
        rt = route_rec(d, route)
        inst = next(x for x in rt["sections"] if x["section"] == section)
        rt["pageHeightPx"] += h - inst["heightPx"]
        inst["heightPx"] = h
        sec_ = d["sectionHeights"]["sections"][section]
        sec_["maxHeightPx"] = max(h, max(x["heightPx"] for r in d["sectionHeights"]["routes"] for x in r["sections"] if x["section"] == section))

    def gate_case(name, mutate, expect, want="error"):
        tmp = gate_copy()
        try:
            mutate(tmp)
            F, W = wg.check_wrapper_gate(tmp)
        finally:
            shutil.rmtree(tmp, ignore_errors=True)
        if want == "error":
            ok = any(expect in f for f in F)
            msg = ("rejected: %s" % next(f for f in F if expect in f)[:90]) if ok else "NOT rejected (failures: %s)" % [f[:70] for f in F[:2]]
            RESULTS.append(("mutation", name, ok, msg))
        elif want == "warn":
            ok = not F and any(expect in w for w in W)
            RESULTS.append(("warn", name, ok, ("warned: %s" % next(w for w in W if expect in w)[:80]) if ok else "expected only a warning containing %r; failures %s, warnings %s" % (expect, [f[:70] for f in F[:2]], len(W))))
        else:   # pass
            ok = not F
            RESULTS.append(("control", name, ok, "" if ok else "; ".join(f[:100] for f in F[:2])))

    ME = lambda f: (lambda tmp: jedit(tmp, "extraction/measured-values.json", f))
    WE = lambda f: (lambda tmp: jedit(tmp, "extraction/wrapper-whitelist.json", f))
    gate_case("gate control: the shipped measurements and whitelist pass", lambda tmp: None, "", want="pass")
    gate_case("gate: HERO of 1900px warns", ME(lambda d: set_height(d, "/product/bi/", "hero.product", 1900)), "HERO hero.product is 1900px", want="warn")
    gate_case("gate: HERO of 3100px without a whitelist entry is rejected", ME(lambda d: set_height(d, "/product/bi/", "hero.product", 3100)), "a whole-page wrapper, not a hero")

    def wl_hero(tmp):
        jedit(tmp, "extraction/measured-values.json", lambda d: set_height(d, "/product/bi/", "hero.product", 3100))
        jedit(tmp, "extraction/wrapper-whitelist.json", lambda d: d["entries"].append({"kind": "hero-height", "route": "/product/bi/", "section": "hero.product", "maxHeightPx": 3400,
              "reviewedBy": "claude-agent (automated reviewer; not a human sign-off)", "attestation": "agent", "reviewedOn": "2026-10-24", "justification": "A reviewed exception that is long enough to satisfy the rule."}))
    gate_case("gate: a reviewed HERO whitelist entry lets 3100px pass (still warns)", wl_hero, "whitelisted up to 3400px", want="warn")
    gate_case("gate: section at 55% of its page warns", ME(lambda d: set_height(d, "/product/bi/", "feature.approach-cards", 9600)), "feature.approach-cards is 9600px", want="warn")
    gate_case("gate: a section over 60% of its page without a whitelist entry is rejected", ME(lambda d: set_height(d, "/product/bi/", "feature.approach-cards", 24000)), "a whole-page wrapper. Decompose it")
    gate_case("gate: a whitelisted share above its ceiling is rejected", WE(lambda d: d["entries"][0].__setitem__("maxSharePct", 80)), "over the whitelisted ceiling")
    gate_case("gate: whitelist entry without a justification of 30 characters", WE(lambda d: d["entries"][0].__setitem__("justification", "one page only")), "justification must be at least 30")
    gate_case("gate: whitelist entry without reviewedBy", WE(lambda d: d["entries"][0].pop("reviewedBy")), "reviewedBy")
    gate_case("gate: an agent attestation that claims to be a human review", WE(lambda d: d["entries"][0].__setitem__("reviewedBy", "R. Reviewer")), "must say \"not a human sign-off\"")
    gate_case("gate: whitelist ceiling below the measured height", WE(lambda d: d["entries"][0].__setitem__("maxHeightPx", 100)), "over the whitelisted ceiling")
    gate_case("gate: stale whitelist entry", WE(lambda d: d["entries"].append({"kind": "hero-height", "route": "/", "section": "hero.home", "maxHeightPx": 9000, "reviewedBy": "x (not a human sign-off)", "attestation": "agent",
              "reviewedOn": "2026-10-24", "justification": "A stale entry that must be rejected by the gate."})), "stale whitelist entry")
    gate_case("gate: missing section measurement", ME(lambda d: d["sectionHeights"]["sections"].pop("hero.home")), "no measurement for section hero.home")
    gate_case("gate: missing template measurement", ME(lambda d: d["sectionHeights"].__setitem__("routes", [r for r in d["sectionHeights"]["routes"] if r["template"] != "template.compare"])), "no measured route for template template.compare")
    gate_case("gate: sectionHeights removed", ME(lambda d: d.pop("sectionHeights")), "no sectionHeights")
    gate_case("gate: measured at the wrong viewport (1920px)", ME(lambda d: d["sectionHeights"]["viewport"].__setitem__("width", 1920)), "must be measured at a 1440px viewport")
    gate_case("gate: a node without a measured height", ME(lambda d: route_rec(d, "/pricing/")["sections"][1].__setitem__("heightPx", 0)), "has no height")
    gate_case("gate: a route whose measured sections differ from the observed sequence", ME(lambda d: route_rec(d, "/pricing/")["sections"].pop(2)), "differ from the route's observed sequence")
    gate_case("gate: heights that do not add up to the page height", ME(lambda d: route_rec(d, "/pricing/").__setitem__("pageHeightPx", 9999)), "add up to")
    gate_case("gate: whitelist emptied while pages exceed 60%", WE(lambda d: d.__setitem__("entries", [])), "a whole-page wrapper. Decompose it")
    gate_case("gate: a whitelist kind outside the closed set", WE(lambda d: d["entries"][0].__setitem__("kind", "anything-goes")), "kind must be")
    gate_case("gate: an invented whitelist key", WE(lambda d: d["entries"][0].__setitem__("note", "x")), "unknown keys")

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
