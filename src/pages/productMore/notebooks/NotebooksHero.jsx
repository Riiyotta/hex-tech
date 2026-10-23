// product §4.6 #0 NotebooksHero (DOM notebooks/00-NotebooksHero.*): radial row bg + paper ::after, Voronoi
// line-cell SVG backdrop (2240×929, opacity .3, static), N1 pill, dark GradientHeader H1, 21.64/32.46 P,
// lg primary + secondary buttons, CustomerBanner minimal (50px logos, no popovers).
import { AnnouncementPill, Button, ContentSection } from '../../../components/shared'
import CustomerBanner from '../../../components/sections/CustomerBanner.jsx'
import voronoi from '../assets/voronoi.svg'

const SHARED = '/assets/pages/product/_shared/'
const LOGOS = [
  { slug: 'reddit', name: 'Reddit', w: 115, h: 50 },
  { slug: 'notion', name: 'Notion', w: 39, h: 50 },
  { slug: 'anthropic', name: 'Anthropic', w: 132, h: 50 },
  { src: SHARED + 'logo-seatgeek-b2ffbeef-51x50.svg', name: 'SeatGeek', w: 51, h: 50 },
  { src: SHARED + 'logo-clickup-8ec37f23-119x50.svg', name: 'ClickUp', w: 119, h: 50 },
  { src: SHARED + 'logo-alltrails-22fd2415-151x50.svg', name: 'AllTrails', w: 151, h: 50 },
]

export default function NotebooksHero() {
  return (
    <ContentSection className="pm-nb-hero" data-section="NotebooksHero">
      <div className="relative">
        <div className="pm-voronoi" aria-hidden="true">
          <img src={voronoi} alt="" width="2240" height="929" />
        </div>
        <div className="relative px-[12px]">
          <div className="pm-nb-hero__inner">
            <div className="flex flex-col items-center">
              <div className="pm-nb-hero__text">
                <AnnouncementPill
                  href="https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent"
                  icon="/assets/svg/icons/nav/agentic-notebooks.svg"
                  label="Agentic notebooks"
                  text="Read the docs"
                />
                <h1 className="gradient-heading text-center font-display text-heading-1 font-bold text-ink-loud">
                  The agentic notebook for the next era of data work
                </h1>
                <p className="pm-nb-hero__p pm-text-xl-fluid text-ink">
                  Hex lets the data team focus on data work. Combine code, no-code, queries, and visuals in a flexible notebook.
                </p>
              </div>
              <div className="pm-nb-hero__actions">
                <Button variant="primary" size="lg" href="https://app.hex.tech/signup" external>
                  Get started for free
                </Button>
                <Button variant="secondary" size="lg" href="/request-a-demo/">
                  Request a demo
                </Button>
              </div>
            </div>
          </div>
          <CustomerBanner variant="minimal" logos={LOGOS} logoHeight={50} />
        </div>
      </div>
    </ContentSection>
  )
}
