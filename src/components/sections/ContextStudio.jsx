// CLONE_SPEC §4.7: See what people are asking, and whether the answers are right (884px tall at 1440).
// Row-reverse feature layout (copy right at x 1010, 840px window pile left) wrapped in the §6.2 reveal.
// Window pile (HomeContextStudio-module__windows, aspect 2/1.7): dashboard on top-left, Evals overlapping
// bottom-left via translate(-18.99%, 43.08%) so it spills past the section's left edge.
import { Reveal } from '../shared/index.js'
import FeatureSection from './ConversationalAnalytics/FeatureSection.jsx'
import { ContextStudioMark } from './ConversationalAnalytics/AbstractMarks.jsx'
import EvalsWindow from './ContextStudio/EvalsWindow.jsx'
import DashboardWindow from './ContextStudio/DashboardWindow.jsx'
import './ContextStudio/ContextStudio.css'

const QUOTE = {
  before:
    '"We have so many people and products that our context is never stagnant. Even when we launch a new data domain for the first time, it\'s already stale the next day. ',
  emphasis: 'Hex’s Context Studio and Evals give us the visibility needed',
  after: ' to manage our context at scale."',
  logo: { src: '/assets/logos/customers/chime.svg', alt: 'Chime', maxWidth: 56 },
  name: 'Jordan Farrer.',
  title: 'Director of Data Science & Analytics',
}

export default function ContextStudio() {
  return (
    <Reveal className="hex-feature">
      <div data-section="ContextStudio" className="context-studio">
        <FeatureSection
          direction="row-reverse"
          icon={<ContextStudioMark />}
          title="See what people are asking, and whether the answers are right"
          cta={{ label: 'Explore the Context Studio', href: '/product/context-studio/' }}
          quote={QUOTE}
        >
          <div
            aria-label="Example: monitoring agent answers and evaluating quality using fictional data"
            className="cs-windows"
            data-direction="row-reverse"
            data-nosnippet=""
            role="figure"
          >
            <div className="cs-windows__evals-window">
              <EvalsWindow className="cs-windows__evals" />
            </div>
            <div className="cs-windows__dashboard-window">
              <div className="cs-windows__dashboard">
                <DashboardWindow />
              </div>
            </div>
          </div>
        </FeatureSection>
      </div>
    </Reveal>
  )
}
