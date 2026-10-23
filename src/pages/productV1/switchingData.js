// /product/switching-to-hex/ structure (specs/product.md §4.10). Headings, anchors, quote cards, link labels and the
// FAQ objections are the recorded copy; article prose is deliberately NOT reproduced: each paragraph / list item is
// neutral placeholder text sized to the measured line count at 1440 (772px column, 16/24).
import faq from '../../../specs/product-faq.json'

const SENTENCE = 'Placeholder text for this part of the guide, standing in for the original article copy.'
// ≈110 characters per line in the 772px content column.
export function ph(lines, perLine = 110) {
  const target = Math.max(1, lines) * perLine - 20
  let s = ''
  while (s.length < target) s += (s ? ' ' : '') + SENTENCE
  return s.slice(0, target).replace(/\s+\S*$/, '') + '.'
}

const S = '/assets/pages/product/_shared'

export const ARTICLE_QUOTES = [
  {
    logo: { src: '/assets/logos/customers/lovable.svg', alt: 'customer logo' },
    quote:
      '"Hex\'s notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. It\'s made us 10x faster at turning questions into insights.”',
  },
  {
    logo: { src: `${S}/customer-logo-fc46557c-170x40.svg`, alt: 'customer logo' },
    quote:
      '"Hex is bridging the gap between self-service data access and self-service data analytics. Threads allows my users to discover data, create charts, and even perform analysis — all via natural language.”',
  },
  {
    logo: { src: '/assets/pages/product/switching-to-hex/uken-games-logo.svg', alt: 'customer logo' },
    quote:
      '"Hex\'s authoring tool made it easy to develop, document, and test these out with minimal setup needed. This accelerates our journey to improve self-serve capabilities while lowering maintenance costs for the team.”',
  },
  {
    logo: { src: `${S}/customer-logo-728e1e88-120x50.svg`, alt: 'customer logo' },
    quote:
      '"Because everything is inside Hex, when we\'re called on to validate results, it\'s really easy to grab whatever is in there, run it ourselves, inspect the SQL, and confirm Thread is using the right tables.”',
  },
]

const QUESTIONS = [
  '“Our stakeholders are used to pixel-perfect dashboards.”',
  '“We don’t need one more tool in our data stack”',
  '“To support self-serve, we need extensive spreadsheet functionality.”',
  '“For now, we’re experimenting with our own AI setup and seeing how that goes.”',
  '“Our current data tools aren’t perfect, but for now they work fine.”',
  '“Our data is too messy to use Hex’s AI capabilities right now”',
]
// specs/product-faq.json → switching-to-hex has the answers with empty questions; the questions come from the DOM.
export const OBJECTIONS = (faq['switching-to-hex']?.[0]?.items ?? []).map((it, i) => ({ q: QUESTIONS[i] ?? '', answerHtml: it.answerHtml }))

// Block types: ['p', lines] · ['ul'|'ol', [lines…]] · ['h4', text] · ['quote', i] · ['faq'] · ['links', …] · ['guides', …]
export const CHAPTERS = [
  {
    id: 'why-data-teams-switch',
    title: 'Why data teams switch to Hex',
    toc: 'Why data teams switch to Hex',
    sections: [
      { id: 'what-is-hex', title: 'What is Hex?', blocks: [['p', 4], ['p', 2]] },
      {
        id: 'why-data-teams-are-looking-for-a-change',
        title: 'Why data teams are looking for a change',
        blocks: [['p', 4], ['p', 3], ['ul', [2, 3, 2]], ['p', 1], ['p', 2]],
      },
      {
        id: 'why-data-teams-love-hex',
        title: 'Why data teams love Hex',
        blocks: [
          ['p', 2],
          ['p', 2],
          ['h4', 'Deeper insights, 10x faster'],
          ['p', 3],
          ['quote', 0],
          ['h4', 'Self-serve in plain, natural language'],
          ['p', 4],
          ['quote', 1],
          ['h4', 'Observe agent responses and improve context over time'],
          ['p', 3],
          ['quote', 2],
          ['h4', 'The power of an integrated platform'],
          ['p', 5],
          ['quote', 3],
        ],
      },
      { id: 'common-objections', title: 'Common objections (and why teams switch anyway)', blocks: [['faq']] },
    ],
  },
  {
    id: 'how-to-poc-hex',
    title: 'How to POC Hex',
    toc: 'How to POC Hex',
    sections: [
      { id: 'what-is-a-poc', title: 'What is a POC with Hex?', blocks: [['p', 2], ['p', 2], ['p', 2], ['ol', [2, 2, 1]]] },
      { id: 'how-it-works', title: 'How it works', blocks: [['p', 3], ['p', 1], ['ol', [1, 2, 1, 2, 1]]] },
      { id: 'what-success-looks-like', title: 'What success looks like', blocks: [['p', 3], ['p', 2], ['ul', [2, 2, 2, 2]]] },
      {
        id: 'why-teams-love-pilots',
        title: 'Why teams love running pilots with Hex',
        blocks: [['h4', 'Fast to start. Structured for success. An immersive experience.'], ['p', 4], ['p', 2]],
      },
      {
        id: 'getting-started-today',
        title: 'Getting started today',
        blocks: [
          ['p', 1],
          [
            'links',
            [
              { title: 'Start a trial', href: 'https://app.hex.tech/signup', lines: 2 },
              { title: 'Contact Sales', href: '/request-a-demo/', lines: 4 },
            ],
          ],
        ],
      },
    ],
  },
  {
    id: 'migrate-to-hex',
    title: 'Migrate to Hex',
    toc: 'Migrate to Hex',
    sections: [
      {
        id: 'set-up-for-ai-analytics',
        title: 'Set up for AI analytics',
        blocks: [['h4', 'Migrating to Hex isn’t about rebuilding dashboards, it’s about preparing your data and team for a new way of working.'], ['p', 1], ['ul', [5, 4]]],
      },
      { id: 'what-migration-looks-like', title: 'What migration looks like', blocks: [['ul', [2, 3, 3, 4]]] },
      {
        id: 'think-through-your-migration',
        title: 'Think through your migration',
        blocks: [
          ['h4', 'Want to get an early sense of what migration looks like?'],
          ['p', 1],
          [
            'guides',
            [
              { label: 'Security and compliance overview', href: 'https://trust.hex.tech' },
              { label: 'Admin quickstart', href: 'https://learn.hex.tech/tutorials/quickstart/admin-101' },
              { label: 'Set up for AI Agents', href: 'https://learn.hex.tech/tutorials/connect-to-data/setup-for-ai-agents' },
              { label: 'Notebook Agent best practices', href: 'https://learn.hex.tech/tutorials/develop-notebooks/notebook-agent-best-practices' },
              { label: 'Threads quickstart', href: 'https://learn.hex.tech/docs/explore-data/threads#threads-quickstart-guide' },
            ],
          ],
        ],
      },
    ],
  },
]

const N = '/assets/logos/customers'
// N6 marquee after the article: logo + quote only, pairings as rendered live (CMS quirk, spec §8.6).
export const MARQUEE = [
  { logo: `${N}/notion.svg`, quote: '"Our vision for Notion\'s data team is that anyone, regardless of technical proficiency, is comfortable using data to answer their own questions — and Hex enables that.”' },
  { logo: `${S}/inventa-2b33cd7f-132x50.svg`, quote: '"Hex\'s notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. It\'s made us 10x faster at turning questions into insights.”' },
  { logo: `${N}/brex.svg`, quote: '"Hex enables us to deploy customer-facing analytics in days rather than weeks or months. Hex gives us super powers.”' },
  { logo: `${N}/ramp.svg`, quote: '"Hex is bridging the gap between self-service data access and self-service data analytics. Threads allows my users to discover data, create charts, and even perform analysis — all via natural language.”' },
  { logo: `${S}/product-hunt-0334d358-126x50.svg`, quote: '"The Hex agent really sped up exploratory analysis for me, especially when juggling multiple datasets. I love being able to make edits across the notebook without bouncing between tools.”' },
  { logo: `${N}/algolia.svg`, quote: '"The Notebook Agent feels like the future. As a former data scientist, it feels like a junior version of myself, requiring a little guidance, but an immediate accelerant to my data work.”' },
]
