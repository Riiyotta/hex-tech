#!/usr/bin/env python3
"""Generates the distinct `source` and `semantic` objects (and the retrieval flag) of every section contract, and mirrors them
into tokens/llm/component-allowlist.json. The contracts are the data; this script is how they were produced and how they are refreshed.

  semantic = taxonomy     {id, category}                    from extraction/provenance-map.json (category is a closed enum)
  source   = provenance   {id, tag, file, lines, anchor}    id: the implementing component (the name in implementedBy); file: its source file;
                          lines: the range of that component's definition in the real file (brace/paren matched);
                          anchor: the definition text, which must occur inside the range; tag: the rendered root element, taken from
                          extraction/measured-values.json (sectionHeights.sections[*].tag); the range must open that tag or root in a wrapper component.
  retrievalEligible       false only for the pinned layout/runtime utilities listed in the map, each with a reason of 30+ characters.

The old free-form `category` field is removed: semantic.category is the single taxonomy.
This script needs the clone's src/ tree next to design-repo/ (it reads the real files); verify_all.py re-checks the result
without rewriting anything and degrades to a warning when src/ is absent.

Usage:  python3 extraction/generate_provenance.py            rewrite contracts and allowlist in place
        python3 extraction/generate_provenance.py --check    exit 1 when anything on disk differs from what would be generated
"""
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC_ROOT = os.path.dirname(ROOT)
LEAD = ['id', 'purpose', 'semantic', 'source', 'retrievalEligible', 'retrievalIneligibleReason']
DROP = ('category', 'semantic', 'source', 'retrievalEligible', 'retrievalIneligibleReason')
JSX_TAG = re.compile(r'<([a-z][a-z0-9]*)\b')
COMPONENT_ROOT = re.compile(r'<[A-Z][A-Za-z0-9.]*\b')
TAG_ENUM = ('div', 'section', 'header', 'footer', 'nav', 'main', 'aside', 'article', 'ul', 'img', 'form', 'h1', 'h2', 'span', 'a', 'p')


def jload(rel):
    with open(os.path.join(ROOT, rel), encoding='utf-8') as f:
        return json.load(f)


def dump(rel, d):
    with open(os.path.join(ROOT, rel), 'w', encoding='utf-8') as f:
        json.dump(d, f, indent=2, ensure_ascii=False)
        f.write('\n')


def find_definition(lines, name):
    """Return (start, end, anchor) 1-based for the top-level definition of `name`, or None."""
    pat = re.compile(r'^(?:export\s+(?:default\s+)?)?(?:async\s+)?(function|const|let|var|class)\s+%s\b' % re.escape(name))
    for i, line in enumerate(lines):
        m = pat.match(line)
        if not m:
            continue
        anchor = '%s %s' % (m.group(1), name)
        end = i
        j = i + 1
        while j < len(lines):
            if re.match(r'^[})\]]+[;,)]*\s*$', lines[j]):
                end = j
                break
            if re.match(r'^(?:export\s|function\s|const\s|let\s|class\s)', lines[j]) and j > i:
                end = j - 1
                break
            j += 1
        else:
            end = len(lines) - 1
        # a one-liner definition ends on its own line
        if end == i and not lines[i].rstrip().endswith(('{', '(', '=>')):
            return i + 1, i + 1, anchor
        return i + 1, end + 1, anchor
    return None


def tag_in_range(text, tag):
    return bool(re.search(r'<%s\b' % re.escape(tag), text) or re.search(r'\bas=["\']%s["\']' % re.escape(tag), text) or re.search(r'motion\.%s\b' % re.escape(tag), text))


def build_source(sid, c, measured_tag, src_root=SRC_ROOT, override=None):
    ref = c['implementedBy']
    file, _, name = ref.partition(' > ')
    if override:
        file, rng, anchor = override['file'], '%d-%d' % tuple(override['lines']), override['anchor']
        text = open(os.path.join(src_root, file), encoding='utf-8').read().split('\n')
        a, b = override['lines']
    else:
        path = os.path.join(src_root, file)
        text = open(path, encoding='utf-8').read().split('\n')
        found = find_definition(text, name)
        if not found:
            raise ValueError('%s: no definition of %s in %s' % (sid, name, file))
        a, b, anchor = found
        rng = '%d-%d' % (a, b)
    body = '\n'.join(text[a - 1:b])
    # the rendered root tag is the measured one; it must be opened in the range directly, or the range must root in a wrapper
    # component (<LayoutGrid ...>) that renders it
    if measured_tag:
        tag, direct = measured_tag, tag_in_range(body, measured_tag) or bool(COMPONENT_ROOT.search(body))
    else:
        m = JSX_TAG.search(body)
        tag, direct = (m.group(1) if m else 'div'), bool(m)
    return {'id': name, 'tag': tag, 'file': file, 'lines': rng, 'anchor': anchor}, direct


def allowlist_entry(d, al_old):
    e = dict(al_old)
    e['semanticCategory'] = d['semantic']['category']
    e['retrievalEligible'] = d.get('retrievalEligible', True)
    return e


def generate():
    pm = jload('extraction/provenance-map.json')
    mv = jload('extraction/measured-values.json')
    tags = mv['sectionHeights']['sections']
    ret = pm['retrievalIneligible']
    contracts = {}
    for p in sorted(glob.glob(os.path.join(ROOT, 'sections', '*.json'))):
        c = json.load(open(p, encoding='utf-8'))
        contracts[c['id']] = (os.path.relpath(p, ROOT), c)
    missing = sorted(set(contracts) - set(pm['sections']))
    extra = sorted(set(pm['sections']) - set(contracts))
    if missing or extra:
        raise ValueError('provenance-map.json does not match sections/: missing %s, extra %s' % (missing, extra))
    for sid in ret:
        if sid not in contracts:
            raise ValueError('retrievalIneligible names unknown section %s' % sid)
    new, fallback = {}, []
    for sid, (rel, c) in contracts.items():
        entry = pm['sections'][sid]
        src, matched = build_source(sid, c, tags.get(sid, {}).get('tag'), override=entry.get('sourceOverride'))
        if not matched:
            fallback.append((sid, tags.get(sid, {}).get('tag'), src['tag']))
        out = {k: v for k, v in c.items() if k not in DROP}
        out['semantic'] = dict(entry['semantic'])
        out['source'] = src
        if sid in ret:
            out['retrievalEligible'] = False
            out['retrievalIneligibleReason'] = ret[sid]
        ordered = {k: out[k] for k in LEAD if k in out}
        ordered.update({k: v for k, v in out.items() if k not in ordered})
        new[sid] = (rel, ordered)
    al = jload('tokens/llm/component-allowlist.json')
    al_new = json.loads(json.dumps(al))
    for e in al_new['entries']:
        if e['id'] in new:
            e.update(allowlist_entry(new[e['id']][1], e))
    al_new['semanticCategories'] = pm['semanticCategories']
    al_new['retrievalIneligibleSections'] = sorted(ret)
    return contracts, new, al, al_new, fallback


def main(argv):
    try:
        contracts, new, al, al_new, fallback = generate()
    except (ValueError, OSError) as e:
        print('ERROR %s' % e)
        return 1
    drift = [sid for sid in new if new[sid][1] != contracts[sid][1]]
    al_drift = al != al_new
    if '--check' in argv:
        for sid in drift:
            print('DRIFT contract', sid)
        if al_drift:
            print('DRIFT tokens/llm/component-allowlist.json')
        print('provenance is in sync' if not drift and not al_drift else '%d contract(s) out of date' % len(drift))
        return 1 if drift or al_drift else 0
    for sid in drift:
        dump(new[sid][0], new[sid][1])
    if al_drift:
        dump('tokens/llm/component-allowlist.json', al_new)
    print('rewrote %d contract(s); allowlist %s' % (len(drift), 'updated' if al_drift else 'unchanged'))
    if fallback:
        print('%d section(s) whose range neither opens the measured tag nor roots in a wrapper component:' % len(fallback))
        for sid, m, t in fallback:
            print('  %-40s measured %-8s -> %s' % (sid, m, t))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
