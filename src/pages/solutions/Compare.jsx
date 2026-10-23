// /compare/ (specs/solutions.md T5 §4.5): CompareHero (74px gradient H1 + CTAs + the shared vertical CompareVs panel)
// → framed CustomerBanner "Trusted by leading data teams" → Footer.
import { useEffect } from 'react'
import { BasicPageRow, Button, CompareVs, ContentSection } from '../../components/shared'
import CustomerBanner from '../../components/sections/CustomerBanner.jsx'
import { CUSTOMERS } from '../../components/sections/CustomerBanner/customers.js'
import Footer from '../../components/sections/Footer.jsx'
import './solutions.css'

const S = '/assets/pages/solutions/_shared'
const bySlug = (slug) => CUSTOMERS.find((c) => c.slug === slug)

// §2.1 T5 logo list (the spec names 11 of the "13"; only those 11 are rendered). Story copy from §3.2.
const COMPARE_LOGOS = [
  { slug: 'reddit', name: 'Reddit', w: 115, h: 50 },
  bySlug('notion'),
  { slug: 'anthropic', name: 'Anthropic', w: 132, h: 50 },
  { src: `${S}/logo-seatgeek.svg`, name: 'SeatGeek', w: 51, h: 50 },
  {
    src: `${S}/logo-clickup.svg`,
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
    src: `${S}/logo-alltrails.svg`,
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
  {
    src: `${S}/logo-modern-treasury.svg`,
    name: 'Modern Treasury',
    w: 181,
    h: 50,
    story: {
      href: '/customers/modern-treasury/',
      align: 'left',
      quote:
        '"With our engineers being able to self-serve in Hex, the data team is able to focus on long term, strategic projects. It minimizes the amount of time spent on things that don’t fundamentally move the needle and lets us focus on what matters."',
      author: 'Chang Sun',
      title: 'Analytics Engineer',
    },
  },
  bySlug('ramp'),
  { slug: 'sedgwick', name: 'Sedgwick', w: 150, h: 50 },
  {
    src: `${S}/logo-calendly.svg`,
    name: 'Calendly',
    w: 148,
    h: 50,
    story: {
      href: '/customers/calendly/',
      align: 'right',
      quote:
        '"We’re regarded as top performers because the work we are doing is deemed more credible and more widely surfaced than before Hex."',
      author: 'Kate Urquiola',
      title: 'Director, Go-to-Market Analytics',
    },
  },
  { ...bySlug('stubhub'), story: { ...bySlug('stubhub').story, align: 'right' } },
]

export default function Compare() {
  useEffect(() => {
    document.title = 'Compare Hex Analytics Tools and BI Platforms | Hex'
  }, [])
  return (
    <div className="sol-scope">
      <BasicPageRow>
        <div className="flex w-full items-center gap-[clamp(60px,3.0469rem_+_2.5vw,80px)] pt-[150px] laptop:flex-col laptop:gap-[clamp(40px,1.0938rem_+_5vw,80px)]">
          <div className="flex max-w-[640px] flex-col gap-[10px] laptop:max-w-full">
            <h1 className="gradient-heading mt-0 text-left font-display text-hero-relaxed font-bold">
              Hex compared to traditional analytic tools
            </h1>
            <p className="m-0 text-lead-xl font-light text-ink phone-sm:text-lead-l">
              Compare Hex and see why leading companies are choosing a new path to answer questions with data and AI.
            </p>
            <div className="flex gap-[15px] pt-[20px]">
              <Button variant="primary" size="lg" href="https://app.hex.tech/signup" external>
                Get started for free
              </Button>
              <Button variant="secondary" size="lg" href="/request-a-demo/">
                Request a demo
              </Button>
            </div>
          </div>
          <CompareVs />
        </div>
      </BasicPageRow>
      <ContentSection>
        <CustomerBanner label="Trusted by leading data teams" logos={COMPARE_LOGOS} />
      </ContentSection>
      <ContentSection>
        <Footer />
      </ContentSection>
    </div>
  )
}
