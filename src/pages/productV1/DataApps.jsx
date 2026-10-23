// /product/data-apps/ (specs/product.md §4.7, dark, V1 layout). Sections: AppBuilderHeroTout, CodeGenGallery,
// FeaturesTout (SnakedSections), SocialTout, FeedbackLoopTout (CollageCta), OutroTout.
import { Fragment, useState } from 'react'
import { AnnouncementPill, Button, GlassCard, InfoText, MaskIcon, OutroTout, Reveal, V1PageLayout } from '../../components/shared'
import CustomerBanner from '../../components/sections/CustomerBanner.jsx'
import promptsData from '../../../specs/product-data-apps-prompts.json'
import { Cell, DEMO, GradientHeading, ICONS, QuoteRow, SIGNUP } from './blocks.jsx'
import { useDocumentTitle } from './useDocumentTitle.js'
import './productV1.css'

const A = '/assets/pages/product/data-apps'
const S = '/assets/pages/product/_shared'

export const MINIMAL_LOGOS = [
  { slug: 'reddit', name: 'Reddit', w: 115, h: 50 },
  {
    slug: 'notion',
    name: 'Notion',
    w: 39,
    h: 50,
    story: {
      href: '/customers/notion/',
      align: 'left',
      quote:
        '"Our vision for Notion’s data team is that anyone, regardless of technical proficiency, is comfortable using data to answer their own questions – and Hex enables that."',
      author: 'Aks Nemana',
      title: 'Data Scientist & Abhishek Modi, AI Software Engineer',
    },
  },
  { slug: 'anthropic', name: 'Anthropic', w: 132, h: 50 },
  { src: `${S}/logo-seatgeek-b2ffbeef-51x50.svg`, name: 'SeatGeek', w: 51, h: 50 },
  {
    src: `${S}/logo-clickup-8ec37f23-119x50.svg`,
    name: 'ClickUp',
    w: 119,
    h: 50,
    story: {
      href: '/customers/clickup/',
      align: 'left',
      quote: '"Hex lets us go from an ad-hoc analysis to a published data app with just a few clicks."',
      author: 'Sai Srigiriaju',
      title: 'Head of Growth Strategy & Ops at ClickUp',
    },
  },
  {
    src: `${S}/logo-alltrails-22fd2415-151x50.svg`,
    name: 'AllTrails',
    w: 151,
    h: 50,
    story: {
      href: '/customers/alltrails/',
      align: 'left',
      quote:
        '"Since adopting Hex, the data team has churned out a steady stream of analysis, from internal benchmarking to evaluating the effectiveness of metrics."',
      author: 'Matt Palmer',
      title: 'Analytics Engineer',
    },
  },
]

const APP_STRIP = [`${S}/app-one@2x.png`, `${S}/app-two@2x.png`, `${S}/app-three@2x.png`, `${S}/app-four@2x.png`, `${A}/app-five@2x.png`]

const GALLERY_IMAGES = [
  'gen-app-revenue-command-center@2x.jpg',
  'gen-app-lifecycle-explorer@2x.jpg',
  'gen-app-forecast-vs-actuals@2x.jpg',
  'gen-app-what-if@2x.jpg',
  'gen-app-flow-viz@2x.jpg',
  'gen-app-sonify@2x.jpg',
]

// §4.7 #0 AppBuilderHeroTout
function AppBuilderHeroTout() {
  return (
    <div className="pv1-apphero relative z-[1] flex w-full flex-auto flex-col pt-[50px] stack:pt-0">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-[20px] px-[40px] pb-[60px] stack:pb-[40px] stack:pt-[30px]">
        <AnnouncementPill
          href="https://learn.hex.tech/docs/share-insights/apps/app-builder"
          external
          icon={`${ICONS}/app-builder-view.svg`}
          label="Data apps"
          text="Read the docs"
        />
        <GradientHeading as="h1" variant="h1" style={{ textWrap: 'balance' }}>
          Share your data in beautiful, governed data apps
        </GradientHeading>
        <p className="m-0 w-[85%] text-center text-[24px] font-light leading-[1.5] text-ink phone-sm:text-[20px]">
          For too long, data has been stuck in boring, static dashboards, and locked in complex, technical builders’ tools. Hex
          brings the speed and power of vibe-coding to your data, without sacrificing trust.
        </p>
        <div className="flex gap-[15px] pt-[15px] phone-sm:flex-col phone-sm:self-stretch phone-sm:gap-[10px]">
          <Button variant="primary" size="lg" href={SIGNUP} external>
            Get started for free
          </Button>
          <Button variant="secondary" size="lg" href={DEMO}>
            Request a demo
          </Button>
        </div>
      </div>
      <CustomerBanner variant="minimal" label="Trusted by leading data teams" logos={MINIMAL_LOGOS} logoHeight={40} />
      {/* Static strip: 5 × 450px cells centred so the 1st and 5th are cut by the viewport */}
      <div className="pv1-appgrid z-[2] flex translate-y-[40px] justify-center gap-[12px] stack:gap-[10px]">
        {APP_STRIP.map((src) => (
          <img key={src} src={src} alt="Chart cell" width="1200" height="872" />
        ))}
      </div>
    </div>
  )
}

// §4.7 #1 GalleryCard: click copies the prompt (specs/product-data-apps-prompts.json); cursor tooltip
// "Copy prompt" → "Copied!".
function GalleryCard({ card, image }) {
  const [tip, setTip] = useState(null)
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(card.prompt).catch(() => {})
    setCopied(true)
  }
  return (
    <div
      className="pv1-gallery-card relative flex w-full"
      onMouseMove={(e) => setTip({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => {
        setTip(null)
        setCopied(false)
      }}
    >
      <GlassCard
        as="button"
        type="button"
        interactive
        onClick={copy}
        aria-label={`Copy prompt: ${card.title}`}
        className="w-full items-center gap-[12px] border-0 p-[12px] font-sans text-ink"
      >
        <div className="pv1-gallery-frame">
          <img src={`${A}/${image}`} alt={card.title} width="350" height="320" loading="lazy" />
        </div>
        <div className="flex w-full flex-col gap-[4px] p-[12px] text-left">
          <div className="pv1-gallery-tag pv1-annotation">{card.tag}</div>
          <h4 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">{card.title}</h4>
          <p className="m-0 text-[14px] font-light leading-[1.571] text-ink">{card.useCase}</p>
        </div>
      </GlassCard>
      {tip && (
        <span className="pv1-copy-tip" style={{ left: tip.x, top: tip.y }} aria-hidden="true">
          <MaskIcon src={`${ICONS}/duplicate.svg`} size={15} />
          {copied ? 'Copied!' : 'Copy prompt'}
        </span>
      )}
    </div>
  )
}

// §4.7 #1 CodeGenGallery
function CodeGenGallery() {
  return (
    <Reveal className="relative z-[1] mx-auto flex w-full max-w-[1520px] flex-col gap-[clamp(50px,1.3672rem+6.25vw,100px)] px-[clamp(30px,1.5234rem+1.25vw,40px)] pb-[clamp(50px,1.3672rem+6.25vw,100px)] pt-[clamp(100px,4.4922rem+6.25vw,150px)]">
      <div className="flex w-full flex-col gap-[50px]">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-[10px] text-center">
          <GradientHeading>Prompt, build, share</GradientHeading>
          <p className="pv1-text-20 mb-[25px]">
            Hex's agent can build entirely custom generative apps (in beta), backed by your organization's context. Confidently
            share using Hex's built-in permissions.
          </p>
          <div className="flex items-center gap-[10px] phone:flex-col">
            <Button
              size="md"
              corners
              circles
              variant="primary"
              href="https://learn.hex.tech/docs/share-insights/apps/generative-apps"
              external
              icon={<MaskIcon src={`${ICONS}/ctx-Button__Icon.svg`} size={16} />}
              iconSize={16}
            >
              Read the docs
            </Button>
            <Button
              size="md"
              corners
              circles
              variant="secondary"
              href={SIGNUP}
              external
              icon={<MaskIcon src={`${ICONS}/arrow-right.svg`} size={15} />}
              iconPosition="end"
            >
              Get started with Hex
            </Button>
          </div>
        </div>
        <div className="pv1-cell relative w-full min-w-[600px] items-center justify-center tablet:self-end">
          <img src={`${A}/code-gen-app-builder@2x.jpg`} alt="Chart cell" width="1440" height="868" className="w-full" style={{ height: 'auto' }} />
        </div>
      </div>
      <div id="gallery" className="mx-auto flex w-full max-w-section scroll-mt-[100px] flex-col gap-[20px] px-[clamp(30px,1.5234rem+1.25vw,40px)]">
        <div className="flex w-full items-baseline gap-[20px] tablet:flex-col tablet:items-center tablet:gap-[10px] tablet:text-center">
          <h3 className="m-0 font-formula text-heading-3 font-extrabold text-ink-loud">Not sure what to build?</h3>
          <p className="m-0 text-[14px] font-light leading-[1.571] text-ink">
            Here are six copy-and-paste prompts to build stunning generative data apps in Hex.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 gap-[15px] tablet:grid-cols-2 phone:grid-cols-1 phone:gap-[16px]">
          {promptsData.cards.map((card, i) => (
            <GalleryCard key={card.title} card={card} image={GALLERY_IMAGES[i]} />
          ))}
        </div>
      </div>
    </Reveal>
  )
}

const LEARN = 'https://learn.hex.tech/docs'
const SNAKE = [
  {
    icon: 'interactive',
    title: (
      <>
        <span className="block phone:inline">Drag, drop,</span> data app
      </>
    ),
    text: 'Hex’s classic app builder and complete set of components make it easy to build interactive experiences.',
    href: `${LEARN}/share-insights/apps/app-builder`,
    box: 'w-[699px] h-[543px] stack:h-[360px]',
    cells: [
      { src: `${A}/add-to-row@2x.png`, alt: 'Hex app view where a chart cell is being dragged and dropped into place.', w: 699, cls: 'top-0 left-0 pv1-ill-dragdrop' },
      { src: `${A}/chart-drag@2x.png`, alt: 'Chart cell', w: 296, cls: 'bottom-0 right-[60px] stack:right-0 pv1-ill-chartdrag' },
    ],
  },
  {
    icon: 'chart',
    title: 'Beautiful visualizations',
    text: 'Interactive charts, tables, and maps bring your data to life— no coding required.',
    href: `${LEARN}/explore-data/cells/visualization-cells/chart-cells`,
    box: 'w-[720px] h-[485px] phone:h-[280px]',
    cells: [
      { src: `${A}/table-display-cell@2x.png`, alt: 'Table Display cell', w: 570, cls: 'bottom-0 left-0 z-[2] phone:left-auto phone:right-[-10px] pv1-ill-table' },
      { src: `${S}/map-cell@2x.png`, alt: 'Map Display cell', w: 573, cls: 'top-0 right-[20px] !z-[1] pv1-ill-map' },
    ],
  },
  {
    icon: 'magic',
    title: (
      <>
        Follow-up question? <span className="block phone:inline">Just ask.</span>
      </>
    ),
    text: "Hex's agent can explore, summarize, and interact with your apps, so you can get the details you need.",
    href: `${LEARN}/explore-data/chat-with-app`,
    box: 'w-[750px] h-[524px] phone:h-[295px]',
    cells: [{ src: `${A}/chat-with-app@2x.png`, alt: 'A chart view in Explore mode', w: 750, cls: 'top-0 right-0 h-full pv1-ill-chat', full: true }],
  },
  {
    icon: 'explore',
    title: (
      <>
        <span className="block phone:inline">Explore,</span> drill, filter
      </>
    ),
    text: 'Hex native charts and tables automatically come ready to be drilled down, filtered, or used as a starting point for a completely new exploration.',
    href: `${LEARN}/share-insights/explore`,
    box: 'w-[749px] h-[425px] phone:h-[295px]',
    cells: [
      { src: `${A}/explore-view@2x.png`, alt: 'A chart view in Explore mode', w: 749, cls: 'top-0 left-0 pv1-ill-explore' },
      { src: `${A}/explore-view-dropdown@2x.png`, alt: 'A dropdown menu showing units of time', w: 173, cls: 'top-[216px] left-[121px] phone:left-[91px] phone:top-[162px] pv1-ill-dropdown' },
    ],
  },
  {
    icon: 'data-refresh',
    title: 'Answers right where you need them',
    text: 'Reports are always up to date with automatic upstream data syncs and scheduled runs via Slack or email.',
    href: `${LEARN}/share-insights/scheduled-runs`,
    box: 'w-[692px] h-[540px] phone:h-[400px]',
    cells: [
      { src: `${A}/scheduled-run@2x.png`, alt: 'Scheduled run prompt', w: 347, cls: 'bottom-0 left-[80px] z-[2] !bg-transparent pv1-ill-sched' },
      { src: `${A}/scheduled-run-slack@2x.png`, alt: 'Slack app view with a scheduled run notification', w: 692, cls: 'top-0 right-0 !z-[1] !rounded-[7px] pv1-ill-slack' },
    ],
  },
]

// §4.7 #2 FeaturesTout → SnakedSections + ConnectingLines
function FeaturesTout() {
  return (
    <Reveal className="relative flex w-full border-t border-grid-500 phone:flex-col">
      <div className="mx-auto flex w-full max-w-section flex-col items-center px-[40px] pb-[120px] pt-[100px] phone:pb-[60px]">
        <div className="flex w-full flex-col gap-[20px] stack:gap-[80px]">
          {SNAKE.map((s, i) => (
            <Fragment key={s.href}>
              {i > 0 && (
                <div className="pv1-lines" data-dir={i % 2 ? 'a' : 'b'} aria-hidden="true">
                  <div />
                </div>
              )}
              <div className={`flex items-center justify-between gap-[80px] tablet:flex-col tablet:gap-[30px] ${i % 2 ? 'flex-row-reverse' : ''}`}>
                <InfoText
                  className="info-text min-w-0 break-words"
                  size="h2"
                  icon={<MaskIcon src={`${ICONS}/${s.icon}.svg`} size={15} className="pv1-snake-icon" />}
                  title={s.title}
                  description={<p className="pv1-text-20">{s.text}</p>}
                  cta={{ label: 'Learn more', href: s.href, external: true, variant: 'secondary', size: 'md', corners: true }}
                />
                <div className={`relative flex flex-none stack:!w-full ${s.box}`}>
                  {s.cells.map((c) => (
                    <Cell
                      key={c.src}
                      src={c.src}
                      alt={c.alt}
                      width={c.w}
                      className={`absolute z-[2] ${c.cls}`}
                      imgStyle={c.full ? { height: '100%', width: 'auto' } : undefined}
                    />
                  ))}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

const QUOTES = [
  {
    logo: { src: `${S}/infinite-lambda-63850388-110x50.svg`, alt: 'Infinite Lambda' },
    quote:
      '"Hex helped us provide a transparent and intuitive experience for the World Health Organization to make more informed decisions about how to reduce emissions.”',
    author: { name: 'Nina Anderson', title: 'Head of Pre-Sales Engineering at Infinite Lambda', avatar: { src: `${A}/nina-anderson-headshot.jpeg`, alt: 'Nina Anderson' } },
  },
  {
    logo: { src: `${S}/inventa-2b33cd7f-132x50.svg`, alt: 'Inventa' },
    quote: '"Hex enables us to deploy customer-facing analytics in days rather than weeks or months. Hex gives us super powers.”',
    author: { name: 'Daniel McAuley', title: 'Data Lead at Inventa', avatar: { src: `${A}/daniel-mcauley-headshot.jpg`, alt: 'Daniel McAuley' } },
  },
]

// §4.7 #4 FeedbackLoopTout (CollageCta)
function FeedbackLoopTout() {
  return (
    <Reveal className="relative z-[1] mx-auto flex w-full max-w-section flex-col gap-[60px] px-[40px] pt-[80px] phone:pb-[100px]">
      <div className="mx-auto flex w-full flex-col items-center">
        <GradientHeading className="mb-[20px] max-w-[500px]">Tighten the feedback loop</GradientHeading>
        <p className="pv1-text-20 mb-[30px] max-w-[645px] text-center">
          When it's time to share your masterpiece, one URL keeps everyone on the same page — literally. Edits, comments, and
          revisions are fast and easy with real-time multiplayer and live updates.
        </p>
        <Button size="md" corners circles variant="primary" href="/capability/hex-for-teams/">
          Explore collaboration
        </Button>
      </div>
      <div className="relative flex h-[600px] w-full items-end justify-center phone:h-[300px]">
        <Cell src={`${A}/app-builder-with-chart@2x.png`} alt="Hex app builder with a graph" width={919} className="pv1-collage-report absolute z-[2] !rounded-b-none" />
        <Cell src={`${A}/code-diff@2x.png`} alt="Diff cell" width={480} className="pv1-collage-diff absolute bottom-[-30px] right-[-20px] z-[2]" />
        <Cell src={`${A}/comment-popup@2x.png`} alt="Comments popup" width={280} className="pv1-collage-comments absolute bottom-[50px] left-[-20px] z-[2]" />
        <Cell src={`${A}/share-modal@2x.png`} alt="Share modal" width={416} className="pv1-collage-share absolute right-[120px] top-0 z-[2]" />
      </div>
    </Reveal>
  )
}

export default function DataApps() {
  useDocumentTitle('Generative Data Apps and Interactive Dashboards | Hex')
  return (
    <V1PageLayout footer>
      <AppBuilderHeroTout />
      <CodeGenGallery />
      <FeaturesTout />
      <QuoteRow quotes={QUOTES} />
      <FeedbackLoopTout />
      <OutroTout
        title="Questions? Talk to us"
        description="Get in touch with us to see a demo or find out which plan is right for you."
        actions={[{ label: 'Contact Sales', href: DEMO }]}
      />
    </V1PageLayout>
  )
}
