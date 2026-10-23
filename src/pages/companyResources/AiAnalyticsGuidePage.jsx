// /resources/guides/ai-analytics/ (company §4.10, T10 light guide landing).
// dom/resources_guides_ai-analytics--{AIAnalyticsHero__Wrapper, SectionPodcasts__Wrapper,
// SectionBlogPosts__ResourcesGrid, SectionCustomerStories__CustomersGrid, OutroTout__Wrapper}.*
// Rows: GuideHero + GuideDownloadCard (checkered row, no top rule) → Podcasts → Resource cards over CartesianGrid →
// Customer quote tiles → OutroTout (TronDivider + card) → Footer.
// The "Download the guide" button opens a gated HubSpot form on the live site; here it is a closed, visual-only
// <button> (spec §9.3).
// Inline copy of public/assets/pages/company/guides-ai-analytics/svg/AbstractMark10-Wrapper-812b5ace.svg (data-color fills need inline SVG)
import abstractMark10 from './assets/abstract-mark-10.svg?raw'
import {
  BasicPageRow,
  Button,
  CartesianGrid,
  GlassCard,
  InfoText,
  MaskIcon,
  OutroTout,
  Reveal,
  ResourceCard,
  ThemeScope,
} from '../../components/shared'
import { ContentSection } from '../../components/shared/LayoutGrid.jsx'
import Footer from '../../components/sections/Footer.jsx'
import './companyResources.css'

const A = '/assets/pages/company/guides-ai-analytics'
const ICON_SAVE = `${A}/svg/icons/createIcon-Wrapper-b391c5ad.svg`
const ICON_PLAY = `${A}/svg/icons/createIcon-Wrapper-8ab986be.svg`
const ICON_QUOTE = '/assets/pages/company/_shared/svg/icons/createIcon-Wrapper-91516630.svg'

const EPISODES = [
  {
    title: 'Episode 1: Why conversational analytics is different',
    copy: 'Understanding the fundamental shift from traditional BI — with Katie Bauer, Head of Data at Hex.',
    image: `${A}/ai-analytics-episode-1.2fgue6ctxqsmm.jpg`,
  },
  {
    title: 'Episode 2: What it takes to deploy AI analytics in the real world',
    copy: 'Practical lessons from helping data teams navigate AI-powered workflows — with Tahlia, Customer Engineer at Hex.',
    image: `${A}/ai-analytics-episode-2.109m7jsl41fqp.jpg`,
  },
]

const POSTS = [
  { title: "You're probably evaluating AI analytics tools wrong", href: '/blog/evaluating-ai-wrong/', tags: ['Data leader'], readTime: '6 min', image: `${A}/you-re-probably-evaluating-ai-analytics-tools-wr-0722bc63.png` },
  { title: 'Dashboards were never the destination', href: '/blog/dashboards-were-never-the-destination/', tags: ['Data leader'], readTime: '4 min', image: `${A}/dashboards-were-never-the-destination-fbaa3c83.png` },
  { title: "Your data team is too slow (and accuracy won't save you)", href: '/blog/your-data-team-is-too-slow/', tags: ['Data leader'], readTime: '7 min', image: `${A}/your-data-team-is-too-slow-and-accuracy-won-t-sa-633dec3d.png` },
  { title: "Self-serve analytics is finally real (and that's terrifying)", href: '/blog/self-serve-is-finally-real/', tags: ['Data leader'], readTime: '5 min', image: `${A}/self-serve-analytics-is-finally-real-and-that-s--1e964af7.png` },
  { title: 'How I used Hex’s AI to get fully up to speed on our sales data', href: '/blog/using-threads-to-get-sales-team-data/', tags: ['Data leader', 'Product', 'Sales'], readTime: '6 min', image: `${A}/how-i-used-hex-s-ai-to-get-fully-up-to-speed-on--d8e04122.png` },
]

const TILES = [
  { href: '/customers/figma/', logo: { src: '/assets/logos/customers/figma.svg', alt: 'Figma', w: 97 }, quote: '"With Hex’s Notebook Agent, I never have to build another chart again? What a dream come true. - Molly Jane Nicholas, Senior Researcher"' },
  { href: '/customers/pandadoc/', logo: { src: `${A}/pandadoc-728e1e88.svg`, alt: 'PandaDoc', w: 120 }, quote: '"My favorite thing about Threads is that it writes out formulas for metrics and identifies any issues with the data."' },
  { href: '/customers/project0/', logo: { src: `${A}/project-0-88c816a0.svg`, alt: 'Project 0', w: 98 }, quote: '"The Notebook Agent has been intelligent about writing the query and analyzing the outputs"' },
]

// sharedStyles__SectionHeadingWrapper: flex col, centred, gap 10; H2 heading-2 + P 20/30 balance (max 771.6)
function SectionHeading({ title, copy }) {
  return (
    <div className="flex flex-col items-center gap-[10px] text-center">
      <h2 className="m-0 font-formula text-heading-2 font-[800] text-ink-loud">{title}</h2>
      <p className="m-0 max-w-[771.6px] text-lead-l font-light text-ink [text-wrap:balance]">{copy}</p>
    </div>
  )
}

function GuideDownloadCard() {
  return (
    <Reveal className="relative flex w-[calc(100%-30px)] max-w-[1000px] p-[5px]">
      <div className="cr-dl__lines pointer-events-none absolute inset-0" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <GlassCard className="w-full overflow-hidden p-0">
        <ThemeScope theme="dark" className="relative w-full bg-fg-100 p-[20px] text-ink">
          <div className="cr-dl__ticks pointer-events-none absolute inset-0" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="cr-dl__grid">
            <div className="cr-dl__box border-b border-r border-grid-500">
              <h2 className="gradient-heading mt-0 text-left font-formula text-heading-2 font-[800] text-ink-loud">The Data Leader&apos;s Guide to AI Analytics</h2>
            </div>
            <div className="cr-dl__box items-end border-b border-grid-500" data-hide-stack="">
              <MaskIcon src={ICON_SAVE} size={15} className="flex text-fg-1200" />
            </div>
            <div className="cr-dl__box border-r border-grid-500">
              <p className="m-0 mb-[20px] text-body font-light text-ink">
                A practical roadmap for understanding and implementing AI to accelerate your data team and enable true self-service.
              </p>
              <div className="cr-dl__actions">
                <Button variant="primary" size="lg">
                  Download the guide
                </Button>
                <Button variant="secondary" size="lg" href="/request-a-demo/">
                  Request a demo
                </Button>
              </div>
            </div>
            <div className="grid place-items-center p-[10px]" data-hide-stack="">
              <MaskIcon
                src={`${A}/svg/SectionGuideDownload-BottomRight-8376aec9.svg`}
                width="100%"
                height="auto"
                className="block max-h-full text-highlight"
                style={{ aspectRatio: '16 / 9', WebkitMaskSize: 'contain', maskSize: 'contain' }}
              />
            </div>
          </div>
        </ThemeScope>
      </GlassCard>
    </Reveal>
  )
}

function GuideHero() {
  return (
    <ContentSection>
      <div className="relative flex flex-col items-center gap-[50px] pb-[80px] pt-[224px]">
        <Reveal className="mx-auto flex flex-col items-center justify-center gap-[10px] text-center stack:gap-[20px]">
          <h1 className="cr-guide-h1 gradient-heading mt-0 text-center font-display text-heading-1 font-bold leading-[1.3]">
            Stop fielding questions.<span data-style="italic">Start enabling answers.</span>
          </h1>
          <p className="m-0 mx-auto max-w-[640px] text-center text-lead-l font-light text-ink stack:px-[20px]">
            Conversational analytics is the next evolution of BI, but requires a different approach. Hex has created comprehensive resources to help your organization adopt and scale self-service.
          </p>
        </Reveal>
        <GuideDownloadCard />
      </div>
    </ContentSection>
  )
}

function Podcasts() {
  return (
    <BasicPageRow bordered>
      <div className="cr-podcasts">
        <InfoText
          className="info-text"
          icon={<span className="abstract-mark" dangerouslySetInnerHTML={{ __html: abstractMark10 }} />}
          title="Beyond the guide: A companion podcast"
          description="Rachel Herrera sits down with the Hex team members who built these frameworks in production. Honest conversations about what worked, what didn't, and the trade-offs nobody talks about. Think HBO companion podcast, but for AI analytics."
        />
        <div className="cr-podcasts__divider" aria-hidden="true" />
        <div className="cr-podcasts__episodes">
          {EPISODES.map((ep) => (
            <GlassCard key={ep.title} interactive className="cursor-pointer overflow-hidden p-0">
              <div className="relative w-full">
                <div className="absolute inset-0 z-[4] flex cursor-pointer items-center justify-center">
                  <ThemeScope theme="dark" className="cr-floaty">
                    <MaskIcon src={ICON_PLAY} size={15} className="flex text-fg-1200" />
                    Watch podcast
                  </ThemeScope>
                </div>
                <img src={ep.image} alt={ep.title} width="1920" height="1080" loading="lazy" className="block h-auto w-full" />
              </div>
              <div className="flex w-full flex-col items-start gap-[4px] p-[30px]">
                <h4 className="m-0 font-formula text-heading-4 font-semibold text-ink-loud">{ep.title}</h4>
                <p className="m-0 text-body font-light text-ink">{ep.copy}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </BasicPageRow>
  )
}

function Resources() {
  return (
    <BasicPageRow bordered inner="none">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <CartesianGrid />
        </div>
        <Reveal className="relative mx-auto flex w-full max-w-section flex-col items-center justify-center px-[40px] py-[80px] stack:px-[12px] stack:py-[60px] phone:py-[40px]">
          <div className="flex w-full flex-col items-center gap-[40px]">
            <SectionHeading
              title="We're obsessed with this stuff"
              copy="More thinking on why self-service is finally real, how to evaluate AI tools, and why dashboards were never the destination."
            />
            <div className="cr-resources flex w-full flex-wrap justify-center gap-[20px]">
              {POSTS.map((p) => (
                <ResourceCard key={p.href} href={p.href} type="Blog post" title={p.title} tags={p.tags} readTime={p.readTime} image={{ src: p.image, alt: p.title }} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </BasicPageRow>
  )
}

function CustomerTiles() {
  return (
    <BasicPageRow bordered>
      <div className="flex w-full flex-col items-center gap-[40px]">
        <SectionHeading
          title="See it in action"
          copy="Leading data teams at Figma, PandaDoc, and Project0 share what changes when everyone can work alongside agents using natural language."
        />
        <div className="cr-tiles w-full">
          {TILES.map((t) => (
            <div key={t.href} className="relative m-0 flex min-h-0 flex-[1_1_0px] flex-col items-start">
              <Button variant="primary" size="md" corners href={t.href} className="cr-tile">
                <div className="flex h-full w-full flex-col items-center justify-center p-[30px]">
                  <div className="flex flex-col items-center justify-center">
                    <img src={t.logo.src} alt={t.logo.alt} width={t.logo.w} height="50" className="cr-tile__logo" />
                    <div className="cr-tile__divider">
                      <MaskIcon src={ICON_QUOTE} size={15} className="flex text-fg-1200" />
                    </div>
                    <q className="block text-center font-sans text-body font-normal normal-case [quotes:none]">{t.quote}</q>
                  </div>
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </BasicPageRow>
  )
}

export default function AiAnalyticsGuidePage() {
  return (
    <div className="cr-scope">
      <GuideHero />
      <Podcasts />
      <Resources />
      <CustomerTiles />
      <BasicPageRow inner="none">
        <OutroTout
          title="Questions? Talk to us"
          description="Get in touch with us to see a demo or find out which plan is right for you."
          actions={[{ label: 'Contact Sales', href: '/request-a-demo/' }]}
        />
      </BasicPageRow>
      <ContentSection bordered>
        <Footer />
      </ContentSection>
    </div>
  )
}
