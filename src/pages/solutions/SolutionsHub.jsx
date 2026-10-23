// /solutions/ (specs/solutions.md T1 §4.1): HeroGridBackdrop + SolutionsHero (glass-enter entrance, rotating word via the
// shared Rotator) → framed CustomerBanner (6 logos) → BasicPageRow content row with SolutionsFilterNav + SolutionsGrid
// (62 shared ResourceCards) → Footer.
import { useEffect, useMemo, useRef, useState } from 'react'
import { Button, ContentSection, LayoutGrid, ResourceCard, Rotator } from '../../components/shared'
import CustomerBanner from '../../components/sections/CustomerBanner.jsx'
import { CUSTOMERS } from '../../components/sections/CustomerBanner/customers.js'
import Footer from '../../components/sections/Footer.jsx'
import { FilterIcon } from './FilterIcons.jsx'
import { HUB_CARDS } from './hubData.js'
import './solutions.css'

const byslug = (slug) => CUSTOMERS.find((c) => c.slug === slug)

// §2.1: one row of 6, Notion / Ramp / Calendly / StubHub carry the story dot. Calendly copy from §3.2.
const HUB_LOGOS = [
  { slug: 'anthropic', name: 'Anthropic', w: 132, h: 50 },
  byslug('notion'),
  byslug('ramp'),
  { slug: 'reddit', name: 'Reddit', w: 115, h: 50 },
  {
    src: '/assets/pages/solutions/_shared/logo-calendly.svg',
    name: 'Calendly',
    w: 148,
    h: 50,
    story: {
      href: '/customers/calendly/',
      align: 'left',
      quote:
        '"We’re regarded as top performers because the work we are doing is deemed more credible and more widely surfaced than before Hex."',
      author: 'Kate Urquiola',
      title: 'Director, Go-to-Market Analytics',
    },
  },
  byslug('stubhub'),
]

// §4.1.1 word order
const WORDS = ['Product', 'Marketing', 'Sales', 'Customer success', 'Data teams', 'Data leaders']

// §4.1.2 labels and the counts exactly as displayed (they don't always match the cards shown)
const FILTERS = [
  { key: 'All', icon: 'All' },
  { key: 'Core data team', count: 9 },
  { key: 'Data leader', count: 28 },
  { key: 'Product', count: 10 },
  { key: 'Marketing', count: 13 },
  { key: 'Sales', count: 9 },
  { key: 'Customer success', count: 9 },
]

function useRotatorHeight() {
  const query = '(max-width: 600px)'
  const [small, setSmall] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setSmall(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return small ? 81 : 121
}

function HeroGridBackdrop({ children }) {
  return (
    <div className="relative z-[1]">
      {/* HeroAnimated__TopGridLines: 156px row (124 ≤450) under the fixed header, checkered margins, rules at x 374 / 1065 */}
      <LayoutGrid className="sol-top-row" aria-hidden="true">
        <div className="checkered-margin" data-side="left" style={{ gridRow: 1 }} />
        <div className="relative" style={{ gridColumn: '2 / -2', gridRow: 1 }}>
          <div className="sol-accent-l" data-position="bl" />
          <div className="sol-accent-l" data-position="br" />
        </div>
        <div className="v1-grid-rule" style={{ gridColumn: 4, gridRow: 1 }} />
        <div className="v1-grid-rule" style={{ gridColumn: 10, gridRow: 1 }} />
        <div className="checkered-margin" data-side="right" style={{ gridRow: 1 }} />
      </LayoutGrid>
      {/* HeroAnimated__Bg: #0C0C11 + 2px rose checker + paper texture, perspective 1000 */}
      <LayoutGrid className="sol-hero-bg">{children}</LayoutGrid>
    </div>
  )
}

function SolutionsHero() {
  const itemHeight = useRotatorHeight()
  const contentRef = useRef(null)
  return (
    <div className="sol-hero-glass" style={{ gridColumn: '2 / -2' }} data-section="SolutionsHero">
      <div className="sol-hero-inner">
        <div ref={contentRef} className="relative z-[2] flex w-full flex-col items-center justify-center text-center">
          <h1 className="m-0 font-editorial-heading text-[60px] font-[200] italic leading-[1.3] tracking-normal text-ink">Solutions for</h1>
          <div className="sol-rotator-wrap">
            {/* §4.1.1: the live Rotator window is 820px wide at 1440 (capped to the content column on small screens) */}
            <Rotator
              items={WORDS}
              itemHeight={itemHeight}
              measureRef={contentRef}
              maxWidth={820}
              fadeOutDuration="0.3636s"
              renderItem={(w) => (
                <h2 data-name={w} className="sol-rot-word gradient-heading">
                  {w}
                </h2>
              )}
            />
          </div>
          <p className="m-0 mb-[30px] w-full max-w-[600px] text-lead-xl font-light text-ink phone-sm:text-lead-l">
            One connected system - infinite data answers
          </p>
          <div className="flex gap-[16px]">
            <Button variant="primary" size="lg" href="https://app.hex.tech/signup" external>
              Get started for free
            </Button>
            <Button variant="secondary" size="lg" href="/request-a-demo/">
              Request a demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SolutionsFilterNav({ active, onChange }) {
  return (
    <nav className="sol-filter-nav" aria-label="Filter solutions">
      {FILTERS.map((f) => (
        <div key={f.key}>
          <Button
            variant="secondary"
            size="md"
            selected={active === f.key}
            icon={<FilterIcon name={f.icon ?? f.key} />}
            iconSize={24}
            onClick={() => onChange(f.key)}
          >
            <span className="flex items-center gap-[6px]">
              {f.key}
              {f.count != null && <span className="opacity-40">{f.count}</span>}
            </span>
          </Button>
        </div>
      ))}
    </nav>
  )
}

export default function SolutionsHub() {
  const [active, setActive] = useState('All')
  const cards = useMemo(() => (active === 'All' ? HUB_CARDS : HUB_CARDS.filter((c) => c.tags.includes(active))), [active])

  useEffect(() => {
    document.title = 'Analytics Solutions for Product, Sales, and Data Teams | Hex'
  }, [])

  return (
    <div className="sol-scope">
      <HeroGridBackdrop>
        <SolutionsHero />
      </HeroGridBackdrop>
      <ContentSection>
        <CustomerBanner logos={HUB_LOGOS} />
      </ContentSection>
      <ContentSection bordered>
        <div className="flex w-full flex-col items-center">
          <div className="relative z-[2] flex w-full min-w-0 max-w-section flex-col items-center gap-[30px] px-[40px] py-[80px]">
            <SolutionsFilterNav active={active} onChange={setActive} />
            <div className="grid w-full grid-cols-3 gap-[20px] tablet:grid-cols-2 stack:grid-cols-1">
              {cards.map((c, i) => (
                <ResourceCard key={`${c.href}-${i}`} {...c} />
              ))}
            </div>
          </div>
        </div>
      </ContentSection>
      <ContentSection>
        <Footer />
      </ContentSection>
    </div>
  )
}
