// CLONE_SPEC §4.5: Ground every answer in your organization’s context (575px tall at 1440).
// Row-reverse feature layout (copy right at x 840, 560px cycle left, gap 10) inside a 900px container,
// wrapped in the §6.2 SimpleFadeIn reveal. Cycle + motion (§6.7): OrganizationContext/OrgCycle.jsx.
import { Reveal } from '../shared/index.js'
import FeatureSection from './ConversationalAnalytics/FeatureSection.jsx'
import { OrganizationContextMark } from './ConversationalAnalytics/AbstractMarks.jsx'
import OrgCycle from './OrganizationContext/OrgCycle.jsx'
import './OrganizationContext/OrganizationContext.css'

const QUOTE = {
  before: '"It\'s something I check every day — ',
  emphasis: 'seeing context gaps and suggested improvements surfaced automatically',
  after: ' provides a practical way for us to bring trusted AI self-service to the business."',
  logo: { src: '/assets/logos/customers/zoe.svg', alt: 'Zoe', maxWidth: 50 },
  name: 'Craig W.',
  title: 'Staff Data Engineer',
}

export default function OrganizationContext() {
  return (
    <Reveal className="hex-feature">
      <section data-section="OrganizationContext" className="org-context">
        <FeatureSection
          direction="row-reverse"
          className="org-context__layout"
          icon={<OrganizationContextMark />}
          title="Ground every answer in your organization’s context"
          cta={{ label: 'Explore the Context Engine', href: '/product/context-studio/' }}
          quote={QUOTE}
        >
          <div
            aria-label="Illustration: the compounding context cycle of building apps and asking questions, auto-detecting gaps, and sharpening the context"
            className="org-context__cycle-figure"
            data-nosnippet=""
            role="figure"
          >
            <OrgCycle />
          </div>
        </FeatureSection>
      </section>
    </Reveal>
  )
}
