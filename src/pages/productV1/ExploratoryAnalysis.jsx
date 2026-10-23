// /capability/exploratory-analysis/ (specs/product.md §4.9, dark, V1 layout).
import { OutroTout, V1PageLayout } from '../../components/shared'
import { DEMO, QuoteRow, TemplateGrid, V1H2Panel, V1Hero, V1TwoUp } from './blocks.jsx'
import { useDocumentTitle } from './useDocumentTitle.js'
import './productV1.css'

const A = '/assets/pages/product/capability-exploratory-analysis'
const S = '/assets/pages/product/_shared'

const CELLS = [
  ['cell-pivot@2x.png', 'Pivot cell', 804],
  ['cell-chart-1@2x.png', 'Chart cell', 918],
  ['cell-filter@2x.png', 'Filter cell', 382],
  ['cell-sql@2x.png', 'SQL cell', 938],
  ['cell-python@2x.png', 'Python cell', 384],
  ['cell-chart-2@2x.png', 'Chart cell 2', 960],
]

// §4.9 #3 ScrollingCells (DataExplorationVisual): 60vh window, column of 6 cells auto-scrolling (animateDataExp 45s).
function ScrollingCells() {
  return (
    <div className="pv1-scrollcells">
      <div className="pv1-scrollcells__inner">
        {CELLS.map(([f, alt, h]) => (
          <img key={f} src={`${A}/${f}`} alt={alt} width="1680" height={h} loading="lazy" />
        ))}
      </div>
    </div>
  )
}

// §4.9 #7 ActionableAppsIllustration: main + floating drag image (animateDragImg 7s).
function ActionableApps() {
  return (
    <div className="pb-[48px]">
      <div className="pv1-actionable">
        <img className="main" src={`${A}/actionable-apps-main@2x.png`} alt="Actionable apps" width="1538" height="1328" style={{ maxWidth: '100%', height: 'auto' }} />
        <img className="drag-img" src={`${A}/actionable-apps-drag@2x.png`} alt="Actionable apps" width="799" height="724" />
      </div>
    </div>
  )
}

const full = { width: '100%', height: 'auto' }

const ROWS = [
  {
    title: 'Explore on your terms',
    text: 'Hex combines SQL, Python, pivots, spreadsheet formulas, and no-code viz together. Use the best tool for the job or the best tool for you.',
    href: '/product/notebooks/',
    media: <ScrollingCells />,
  },
  {
    title: 'Data on-demand',
    text: 'The data you need is never out of reach. Easily find trusted data for your project or instantly connect to new sources wherever they live.',
    href: '/product/integrations/',
    media: <img src={`${A}/integrations_graphic.png`} alt="Integrations" width="1232" height="1158" style={full} loading="lazy" />,
  },
  {
    title: 'Fast feedback loops',
    text: 'Rapid iteration has a new standard. Comments, alerts, and snapshots meet multiplayer collaboration, so nothing’s lost to a screenshot or deck.',
    href: '/capability/hex-for-teams/',
    media: <img src={`${A}/team-work@2x.png`} alt="Teamwork" width="1954" height="1650" style={{ ...full, transformOrigin: "center center", transform: "scale(1.1)" }} loading="lazy" />,
  },
  {
    title: 'Get an AI assist',
    text: 'Not a pythonista? Need to fix a bug? Want to shortcut a query? AI in Hex can help with that AND help you answer questions faster.',
    href: '/capability/ai/',
    media: (
      <div className="pv1-magic">
        <img className="main" src={`${A}/magic_illustration@2x.png`} alt="AI assist illustration" width="1680" height="1598" style={full} loading="lazy" />
      </div>
    ),
  },
  {
    title: 'Go from analysis to data app in minutes',
    text: 'Toggle the drag-and-drop builder to unleash your analysis to stakeholders. No crazy workarounds. No clunky dashboards. Just insights to drive business decisions.',
    href: '/product/data-apps/',
    media: <ActionableApps />,
  },
]

const TEMPLATES = [
  {
    href: '/templates/exploratory-analysis/ad-hoc-exploration/',
    tag: 'TEMPLATE',
    title: 'Ad-hoc exploration',
    author: 'Izzy Miller, Dev Advocate at Hex',
    description: 'Ad-hoc or deep-dive, Hex is the fastest path from question to insight.',
    image: `${S}/ad-hoc-exploration-5855c5e3-1680x1020.png`,
  },
  {
    href: '/templates/exploratory-analysis/interactive-data-stories/',
    tag: 'TEMPLATE',
    title: 'Interactive Data stories',
    author: 'Izzy Miller',
    description:
      'Build narrative data stories that combine charts, text, and live data in one Hex document. Covers effective data storytelling with interactive examples.',
    image: `${S}/interactive-data-stories-64aa53c3-1680x1020.png`,
  },
  {
    href: '/templates/exploratory-analysis/no-code-notebooks/',
    tag: 'TEMPLATE',
    title: 'No-code Notebooks',
    description: 'Powerful data exploration without writing a line of code',
    image: `${S}/no-code-notebooks-469fd722-1680x1020.png`,
  },
  {
    href: '/templates/exploratory-analysis/polyglot-notebooks/',
    tag: 'TEMPLATE',
    title: 'Polyglot Notebooks',
    description: 'Polyglot notebooks for data science',
    image: `${S}/polyglot-notebooks-cdd8b6df-1680x1020.png`,
  },
  {
    href: '/templates/exploratory-analysis/sql-notebooks/',
    tag: 'TEMPLATE',
    title: 'SQL Notebooks',
    author: 'Izzy Miller',
    description:
      'Write SQL alongside Python, charts, and narrative in a Hex notebook. See why SQL notebooks beat standalone query editors for complex analysis. Try it free.',
    image: `${S}/sql-notebooks-c492b4ae-1680x1020.png`,
  },
  {
    href: '/blog/sql-notebooks/',
    tag: 'BLOG',
    title: 'SQL Notebooks > SQL Runners',
    author: 'Izzy Miller · April 13, 2022',
    description: 'SQL finally gets literate programming',
    image: `${A}/sql-notebooks-sql-runners-79c7859e-1680x1020.jpg`,
  },
]

export default function ExploratoryAnalysis() {
  useDocumentTitle('Exploratory Data Analysis Tool for Data Teams | Hex')
  return (
    <V1PageLayout footer>
      <div className="pv1-usecase-grid">
        <V1Hero
          title="The fastest way to why"
          description="Go from quick question to deep dive to data app all in one place, all in the most complete workspace for exploratory analysis."
        />
        <div className="full-width">
          <div className="mx-auto max-w-[816px]">
            <QuoteRow
              quotes={[
                {
                  quote:
                    '"Hex is a fantastic tool for data exploration. We use it for everything from early exploration and experimentation to powering apps I feel good about sharing externally.”',
                  author: { name: 'Katie R.', title: 'Head of Data' },
                },
              ]}
            />
          </div>
        </div>
        <V1H2Panel
          pt="medium"
          title="Goodbye fragmentation, hello insights"
          subheader="Hex has everything you need to keep pace with your organizationʼs toughest questions. Thereʼs no tool switching, no extra tabs, and no copying and pasting."
        />
        {ROWS.map((r, i) => (
          <V1TwoUp
            key={r.title}
            reverse={i % 2 === 0}
            media={r.media}
            title={r.title}
            description={r.text}
            cta={{ label: 'Learn More', href: r.href }}
          />
        ))}
        <V1H2Panel
          pt="large"
          title="Get started fast with components and templates"
          subheader="Start from commonly used query logic unique to your organization or use one of Hexʼs pre-built templates."
        />
        <TemplateGrid items={TEMPLATES} />
        <OutroTout
          className="full-width"
          title="Questions? Talk to us"
          description="Get in touch with us to see a demo or find out which plan is right for you."
          actions={[{ label: 'Contact Sales', href: DEMO }]}
        />
      </div>
    </V1PageLayout>
  )
}
