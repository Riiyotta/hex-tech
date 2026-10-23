// /product/notebooks/ (specs/product.md §4.6, dark, T1). Rows: NotebooksHero → MagicFeature (bordered) →
// FullWidthQuote (Lovable) → 3 CellCollage features → ExecutionDag → WallpaperCta → SocialTout → UseCasesTout
// → footer. No FAQ or OutroTout on this page.
import { BasicPageRow, Button, DarkResourceCard, FooterRow, FullWidthQuote, G2Card, InfoText, QuoteCard, SocialTout } from '../../../components/shared'
import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'
import NotebooksHero from './NotebooksHero.jsx'
import { NoCode, SqlPython, Viz } from './CellCollage.jsx'
import ExecutionDag from './ExecutionDag.jsx'
import magicBkg from '../assets/magic-bkg.svg'
import collabIcon from '../assets/collab-icon.svg'
import wallpaper from '../assets/for-teams-wallpaper.svg'
import '../productMore.css'

const NB = '/assets/pages/product/notebooks/'
const SHARED = '/assets/pages/product/_shared/'

// MagicButton: 30px AI glyph scaled 1.5 (two circle pairs rotating 3s / 2s), circles inset 1px #AD8EB6.
function MagicButton() {
  return (
    <div className="pm-magic-btn" aria-hidden="true">
      <div className="pm-magic-btn__wrap">
        <div className="pm-magic-btn__icon">
          <div className="pm-magic-btn__v">
            <div className="pm-magic-btn__c" style={{ top: 0 }} />
            <div className="pm-magic-btn__c" style={{ bottom: 0 }} />
          </div>
          <div className="pm-magic-btn__h">
            <div className="pm-magic-btn__c" style={{ left: 0 }} />
            <div className="pm-magic-btn__c" style={{ right: 0 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MagicFeature() {
  return (
    <div className="pm-magic">
      <InfoText
        size="h2"
        className="pm-magic__info [word-break:break-word]"
        icon={<MagicButton />}
        title="Agentic capabilities built right in"
        description="The most intelligent AI agent ever made for data analytics — now deeply integrated into your workflows. Hex uses top-tier LLMs to help with every step, from generating SQL to charts to entire analyses."
        cta={{ label: 'Learn more about AI', href: '/capability/ai/', variant: 'secondary' }}
      />
      <div className="pm-magic__illo">
        <img src={NB + 'notebook-agent.png'} alt="Notebook agent illustration" loading="lazy" decoding="async" />
      </div>
      <div className="pm-magic__bkg" aria-hidden="true">
        <div>
          <img src={magicBkg} alt="" width="2000" height="2000" />
        </div>
      </div>
    </div>
  )
}

function WallpaperCta() {
  return (
    <>
      <div className="pm-teams__info">
        <div className="pm-teams__icon">
          <img src={collabIcon} alt="Collaboration illustration" width="40" height="30" />
        </div>
        <h2 className="pm-teams__h2 gradient-heading font-display text-heading-1 font-bold text-ink-loud">Built for teams</h2>
        <p className="m-0 mb-[25px] text-center text-lead-l font-light text-ink">
          Hex is collaborative by default, and makes it easy to share your work as a beautiful report or data app anyone can use.
        </p>
        <Button variant="primary" size="md" corners circles href="/capability/hex-for-teams/">
          Learn more
        </Button>
      </div>
      <div className="pm-teams__wallpaper" aria-hidden="true">
        <img src={wallpaper} alt="" width="2004" height="1268" loading="lazy" />
      </div>
    </>
  )
}

const TEMPLATES = [
  { title: 'Ad-hoc exploration', slug: 'ad-hoc-exploration', author: 'Izzy Miller, Dev Advocate at Hex', description: 'Ad-hoc or deep-dive, Hex is the fastest path from question to insight.', img: SHARED + 'ad-hoc-exploration-5855c5e3-1680x1020.png' },
  { title: 'Exploratory Data Analysis', slug: 'exploratory-data-analysis', author: 'Izzy Miller', description: 'Understand your data before you model it. This Hex EDA template covers distributions, correlations, and outliers with Python examples. Explore it free.', img: NB + 'exploratory-data-analysis-1b75379a-1680x1020.png' },
  { title: 'Interactive Data stories', slug: 'interactive-data-stories', author: 'Izzy Miller', description: 'Build narrative data stories that combine charts, text, and live data in one Hex document. Covers effective data storytelling with interactive examples.', img: SHARED + 'interactive-data-stories-64aa53c3-1680x1020.png' },
  { title: 'No-code Notebooks', slug: 'no-code-notebooks', description: 'Powerful data exploration without writing a line of code', img: SHARED + 'no-code-notebooks-469fd722-1680x1020.png' },
  { title: 'Polyglot Notebooks', slug: 'polyglot-notebooks', description: 'Polyglot notebooks for data science', img: SHARED + 'polyglot-notebooks-cdd8b6df-1680x1020.png' },
  { title: 'SQL Notebooks', slug: 'sql-notebooks', author: 'Izzy Miller', description: 'Write SQL alongside Python, charts, and narrative in a Hex notebook. See why SQL notebooks beat standalone query editors for complex analysis. Try it free.', img: SHARED + 'sql-notebooks-c492b4ae-1680x1020.png' },
]

function UseCasesTout() {
  return (
    <div className="pm-usecases">
      <div className="mx-auto flex w-full max-w-section flex-col items-center">
        <div className="pm-usecases__top">
          <h2 className="pm-usecases__h2 gradient-heading font-display text-heading-1 font-bold text-ink-loud">Build anything with data</h2>
          <p className="m-0 max-w-[730px] text-center text-lead-xl font-light text-ink phone-sm:text-lead-l">Get started with examples of our most powerful notebooks.</p>
          <div className="mt-[15px]">
            <a className="pm-link-btn" href="/templates/">
              <span className="pm-link-btn__inner">
                <SvgIcon svg={ICONS.arrowRight} />
                <span className="pm-link-btn__label">Explore all templates</span>
              </span>
            </a>
          </div>
        </div>
        <div className="pm-usecases__grid">
          {TEMPLATES.map((t) => (
            <DarkResourceCard
              key={t.slug}
              variant="template"
              className="p-[10px]"
              href={`/templates/exploratory-analysis/${t.slug}/`}
              title={t.title}
              image={{ src: t.img, alt: t.title }}
              tag="TEMPLATE"
              author={t.author}
              description={t.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function NotebooksPage() {
  return (
    <div className="pm-root">
      <NotebooksHero />
      <BasicPageRow bordered>
        <MagicFeature />
      </BasicPageRow>
      <FullWidthQuote
        logo={{ src: NB + 'lovable-logo.svg', alt: 'Kristian K. quote' }}
        name="Kristian K."
        title="Product, Lovable"
        quote={
          <>
            “Hex's notebook agent just works. I describe what I want and get working SQL back, without having to juggle between tools. <strong>It's made us 10x faster at turning questions into insights.</strong>”
          </>
        }
      />
      <BasicPageRow bordered>
        <SqlPython />
      </BasicPageRow>
      <BasicPageRow>
        <NoCode />
      </BasicPageRow>
      <BasicPageRow>
        <Viz />
      </BasicPageRow>
      <BasicPageRow>
        <ExecutionDag />
      </BasicPageRow>
      <BasicPageRow className="relative">
        <WallpaperCta />
      </BasicPageRow>
      <BasicPageRow>
        <SocialTout>
          <G2Card />
          <QuoteCard
            logo={{ src: NB + 'doximity-17b8982d-125x50.svg', alt: 'Doximity' }}
            quote={"\"With Hex and Snowflake, Doximity was able to completely transition off of Jupyter Notebooks.”"}
            author={{ name: 'Erik Selin', title: 'Engineering Director, Data Platform at Doximity', avatar: { src: NB + 'erik-selin-headshot.jpeg', alt: 'Erik Selin' } }}
          />
        </SocialTout>
      </BasicPageRow>
      <BasicPageRow inner="full">
        <UseCasesTout />
      </BasicPageRow>
      <FooterRow />
    </div>
  )
}
