// CLONE_SPEC §4.6: Share insights with generative dashboards and data apps (735px tall at 1440).
// Row feature layout (copy left 330, 2×2 project windows right, gap 70) wrapped in the §6.2 reveal.
// Window cycling + typing (§6.6): ConversationalAnalytics/ProjectWindows.jsx.
import { Reveal } from '../shared/index.js'
import FeatureSection from './ConversationalAnalytics/FeatureSection.jsx'
import { ConversationalAnalyticsMark } from './ConversationalAnalytics/AbstractMarks.jsx'
import ProjectWindows from './ConversationalAnalytics/ProjectWindows.jsx'
import { PROJECT_WINDOWS } from './ConversationalAnalytics/projectWindows.js'
import './ConversationalAnalytics/ConversationalAnalytics.css'

const QUOTE = {
  before: '"With Hex\'s Notebook Agent, ',
  emphasis: 'I never have to build another chart again?',
  after: ' What a dream come true."',
  logo: { src: '/assets/logos/customers/figma.svg', alt: 'Figma', maxWidth: 67 },
  name: 'Molly Jane Nicholas.',
  title: 'Senior Researcher',
}

export default function ConversationalAnalytics() {
  return (
    <Reveal className="hex-feature">
      <div data-section="ConversationalAnalytics" className="conv-analytics">
        <FeatureSection
          icon={<ConversationalAnalyticsMark />}
          title="Share insights with generative dashboards and data apps"
          cta={{ label: 'Explore AI app building', href: '/product/data-apps/' }}
          quote={QUOTE}
        >
          <div
            aria-label="Example: data apps and dashboards built from prompts using illustrative data"
            className="conv-analytics__windows"
            data-nosnippet=""
            role="figure"
          >
            <ProjectWindows projectWindows={PROJECT_WINDOWS} />
          </div>
        </FeatureSection>
      </div>
    </Reveal>
  )
}
