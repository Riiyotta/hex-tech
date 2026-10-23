// product §4.5 #0 PromptHero (DOM capability-ai/00-PromptHero.*): 156px top grid row (rules at content
// columns 3 / 9, 6px rose corner ticks) → hatched-checker Bg row → HeroGlass (glass-enter 673.93ms spring)
// holding the canvas backdrop + hover Perlin, N1 pill, prompt UI (enter 584.78ms, .1s) and the info row
// (hero-info-enter, .2s) → framed CustomerBanner attached under the glass.
import { AnnouncementPill, Button, ContentSection, PerlinNoise } from '../../../components/shared'
import CustomerBanner from '../../../components/sections/CustomerBanner.jsx'
import { CUSTOMERS } from '../../../components/sections/CustomerBanner/customers.js'
import AiCanvas from './AiCanvas.jsx'
import PromptUI from './PromptUI.jsx'
import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'

const bySlug = (slug) => CUSTOMERS.find((c) => c.slug === slug)
const LOGOS = [
  bySlug('anthropic'),
  bySlug('notion'),
  bySlug('ramp'),
  bySlug('lovable'),
  bySlug('reddit'),
  bySlug('brex'),
]

export default function PromptHero() {
  return (
    <div data-section="PromptHero">
      <ContentSection className="pm-ai-top">
        <div className="pm-ai-top__grid">
          <div className="pm-ai-top__accent" data-position="br" />
          <div className="pm-ai-top__accent" data-position="bl" />
          <div className="pm-ai-top__rule" style={{ gridColumn: 3 }} />
          <div className="pm-ai-top__rule" style={{ gridColumn: 9 }} />
        </div>
      </ContentSection>
      <div className="pm-ai-bg">
        <div className="pm-ai-glass">
          <div className="pm-ai-overlay">
            <div className="pm-ai-perlin-mask">
              <PerlinNoise texture="rose" size={512} active="hover" hoverDuration="500ms" />
            </div>
            <div className="pm-ai-illo-place">
              <AiCanvas />
            </div>
          </div>
          <AnnouncementPill
            className="pm-ai-pill"
            href="https://learn.hex.tech/docs/getting-started/ai-overview"
            icon={<SvgIcon svg={ICONS.aiPill} />}
            label="AI analytics platform"
            text="Explore AI in Hex"
          />
          <div className="pm-ai-prompt-pos">
            <PromptUI />
          </div>
          <div className="pm-ai-info">
            <div className="pm-ai-hgroup">
              <h1 className="pm-ai-h1 font-display text-heading-1 font-bold text-ink-loud">Anyone can analyze with Hex</h1>
              <p className="pm-ai-p text-lead-l text-ink">
                Ask questions in natural language. Analyze with or without code. Trusted answers grounded in your organization’s context.
              </p>
              <div className="pm-ai-actions">
                <Button variant="primary" size="md" corners circles href="https://app.hex.tech/signup" external data-tracking-label="Ai product page primary cta">
                  Get started for free
                </Button>
                <Button variant="secondary" size="md" href="/request-a-demo/" data-tracking-label="Ai product page secondary cta">
                  Request a demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <CustomerBanner label="How data teams at leading AI companies do their best work" logos={LOGOS} />
        </div>
      </div>
    </div>
  )
}
