// T2 solution detail template (specs/solutions.md §4.2), data-driven from ./solutionPages.js (§4.2.8):
// V1PageLayout → SolutionHero → minimal CustomerBanner (not on sales-analytics) → blocks (SolutionFeatureRow /
// bordered QuoteCard / LiveAppEmbed row / SectionHeading) → ResourceCards → SolutionOutroCta (OutroTout band) → Footer.
// Live structure note: each block sits in a `margin: 0 auto` grid item, so rows shrink-wrap and centre
// (feature rows 1126 wide at 1440, the live-app row 720).
import { useEffect, useState } from 'react'
import { Button, OutroTout, QuoteCard, Reveal, SectionHeading, SocialTout, V1PageLayout } from '../../components/shared'
import CustomerBanner from '../../components/sections/CustomerBanner.jsx'
import { SOLUTION_DEMO, SOLUTION_PAGES, SOLUTION_SIGNUP } from './solutionPages.js'
import './solutions.css'

const S = '/assets/pages/solutions/_shared'
// §4.2.8 banner: natural 50px logos, no story popovers on T2
const T2_LOGOS = [
  { slug: 'reddit', name: 'Reddit', w: 115, h: 50 },
  { slug: 'notion', name: 'Notion', w: 39, h: 50 },
  { slug: 'anthropic', name: 'Anthropic', w: 132, h: 50 },
  { src: `${S}/logo-seatgeek.svg`, name: 'SeatGeek', w: 51, h: 50 },
  { src: `${S}/logo-clickup.svg`, name: 'ClickUp', w: 119, h: 50 },
  { src: `${S}/logo-alltrails.svg`, name: 'AllTrails', w: 151, h: 50 },
]

const H2 = 'm-0 font-formula text-heading-2 font-[800] text-ink-loud'

function SolutionHero({ title, description, demoHref = SOLUTION_DEMO }) {
  return (
    <div className="relative z-[1] mx-auto flex w-full max-w-section items-stretch justify-center gap-[70px] px-[40px] stack:flex-col stack:gap-[40px] stack:px-[30px]">
      <Reveal className="flex max-w-[1000px] flex-none flex-col items-center justify-center gap-[20px] pb-[120px] pt-[48px] text-center">
        {/* flex wrapper so the GradientHeader -6px bottom margin is absorbed (live box 156 for 2 lines) */}
        <Reveal className="flex flex-col">
          <h1 className="gradient-heading mt-0 text-center font-display text-heading-1 font-bold [text-wrap:balance]">{title}</h1>
        </Reveal>
        <Reveal className="flex max-w-[90ch] flex-col gap-[15px] [text-wrap:balance]">
          <p className="m-0 text-lead-l font-light text-ink">{description}</p>
        </Reveal>
        <Reveal className="flex w-fit flex-col items-center gap-[20px] pt-[10px] phone-sm:gap-[15px]">
          <div className="flex gap-[20px] phone-sm:flex-col phone-sm:gap-[10px] phone-sm:self-stretch">
            <Button variant="primary" size="lg" href={demoHref}>
              Request a demo
            </Button>
            <Button variant="secondary" size="lg" href={SOLUTION_SIGNUP} external>
              Get started now
            </Button>
          </div>
        </Reveal>
      </Reveal>
    </div>
  )
}

// sharedStyles__StyledComponentWrapper → Features → StyledWrapper (§4.2.2)
function FeatureShell({ children }) {
  return (
    <div className="mx-auto min-w-0 max-w-full">
      <Reveal className="mb-[40px] flex w-full max-w-section flex-col px-[40px] pt-[40px] stack:mb-0 stack:p-[30px]">
        <div className="relative z-[1] flex w-full min-w-0 flex-col gap-[80px] stack:gap-[40px] stack:py-[20px] phone:p-0">
          <div className="flex w-full max-w-section flex-col">{children}</div>
        </div>
      </Reveal>
    </div>
  )
}

function FeatureRow({ media, title, subline, body, leadingBreak, cta, image }) {
  return (
    <FeatureShell>
      <div className="sol-feature" data-media={media}>
        <div className="sol-feature-media">
          <div className="sol-feature-illus">
            <div>
              <img src={image.src} alt={image.alt} width={image.w} height={image.h} loading="lazy" decoding="async" className="h-auto w-full" />
            </div>
          </div>
        </div>
        <div className="sol-feature-info">
          <h2 className={`${H2} relative mb-[15px]`}>{title}</h2>
          {subline && (
            <p>
              <strong>{subline}</strong>
            </p>
          )}
          <p>
            {leadingBreak && <br />}
            {body}
          </p>
          {cta && (
            <Button variant="secondary" size="md" block href={cta.href}>
              {cta.label}
            </Button>
          )}
        </div>
      </div>
    </FeatureShell>
  )
}

function LiveAppEmbed({ description, explore, app, logic }) {
  const [tab, setTab] = useState('app')
  return (
    <FeatureShell>
      <div className="sol-feature" data-media="bottom">
        <div className="sol-feature-info" data-centered="">
          <h2 className={`${H2} relative mb-[15px]`}>Explore a live data app</h2>
          <p>
            {description.map((part, i) =>
              typeof part === 'string' ? (
                part
              ) : (
                <a key={i} href={part.href} className="sol-inline-link">
                  {part.text}
                </a>
              ),
            )}
          </p>
        </div>
      </div>
      <div className="sol-live-wrap">
        <div className="sol-live">
          <div role="tablist" className="sol-live-tabs">
            <button role="tab" type="button" aria-selected={tab === 'app'} className="sol-live-tab" onClick={() => setTab('app')}>
              What you can build (app)
            </button>
            <button role="tab" type="button" aria-selected={tab === 'logic'} className="sol-live-tab" onClick={() => setTab('logic')}>
              How it's built (logic)
            </button>
          </div>
          <div className="sol-live-frame">
            <div className="sol-live-slot" data-active={tab === 'app' ? '' : undefined}>
              <iframe allowFullScreen loading="lazy" src={app} title="Hex published app embed" />
            </div>
            <div className="sol-live-slot" data-active={tab === 'logic' ? '' : undefined}>
              <iframe allowFullScreen loading="lazy" src={logic} title="Hex logic embed" />
            </div>
            <a href={explore} rel="noopener noreferrer" target="_blank" className="sol-live-explore">
              Explore this app
            </a>
          </div>
        </div>
      </div>
    </FeatureShell>
  )
}

function ResourceCards({ size, items }) {
  const four = size === 'four'
  return (
    <Reveal className="sol-cards" data-size={four ? 'four' : undefined}>
      {items.map((c) => (
        <div key={c.title} className="flex flex-col justify-between py-[40px]">
          <div>
            <div className="mb-[24px]">
              <img src={c.image.src} alt={c.image.alt} width={c.image.w} height={c.image.h} loading="lazy" decoding="async" className="h-auto w-full" />
            </div>
            <h3
              className={`m-0 mb-[16px] text-left font-formula text-ink-loud ${
                four ? 'text-heading-4 font-semibold' : 'text-heading-3 font-[800]'
              }`}
            >
              {c.title}
            </h3>
            {c.text && <p className="m-0 text-[16px] font-normal leading-[1.571] text-ink">{c.text}</p>}
          </div>
          <Button variant="secondary" size="md" href={c.href} className="mt-[16px] w-fit self-start">
            Read more
          </Button>
        </div>
      ))}
    </Reveal>
  )
}

function Block({ block }) {
  switch (block.kind) {
    case 'feature':
      return <FeatureRow {...block} />
    case 'quote':
      return (
        <div className="mx-auto min-w-0 max-w-full">
          <SocialTout>
            <QuoteCard variant="bordered" logo={block.logo} quote={block.quote} author={block.author} />
          </SocialTout>
        </div>
      )
    case 'live':
      return <LiveAppEmbed {...block} />
    case 'heading':
      return (
        <div className="mx-auto min-w-0 max-w-full stack:mx-0">
          <Reveal>
            <SectionHeading variant="solution" title={block.title} />
          </Reveal>
        </div>
      )
    default:
      return null
  }
}

export default function SolutionDetail({ slug }) {
  const page = SOLUTION_PAGES[slug]
  useEffect(() => {
    document.title = page.title
  }, [page.title])

  return (
    <div className="sol-scope">
      <V1PageLayout footer>
        <SolutionHero {...page.hero} />
        {page.banner && <CustomerBanner variant="minimal" logos={T2_LOGOS} />}
        {page.blocks.map((b, i) => (
          <Block key={`${slug}-${i}`} block={b} />
        ))}
        <ResourceCards {...page.cards} />
        <OutroTout
          variant="band"
          title={page.outro.title}
          description={page.outro.description}
          actions={[page.outro.action]}
        />
      </V1PageLayout>
    </div>
  )
}
