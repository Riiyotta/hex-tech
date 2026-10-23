// T7 HubSpot form page (specs/solutions.md §4.7): /request-a-demo/ (light) and /contact-us/ (dark) share
// the layout; only the theme (route option), copy and form id differ.
// HubSpotForm__Wrapper (padding 0 40 100) → Inner (max 680: Top (H1 + P) → form box) → full-width minimal banner.
import { useEffect } from 'react'
import { Reveal, V1PageLayout } from '../../../components/shared'
import CustomerBanner from '../../../components/sections/CustomerBanner.jsx'
import { BANNER_LABEL, BANNER_LOGOS, BANNER_LOGO_HEIGHT } from '../bannerLogos.js'
import HubSpotFormShell from './HubSpotFormShell.jsx'
import './forms.css'

export default function FormPage({ title, heading, lead, formId }) {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <V1PageLayout rules={false} grid={false} footer>
      <div className="hf-page" data-section="HubSpotFormShell">
        <div className="hf-page__inner">
          <Reveal className="hf-top">
            <h1 className="hf-top__h1">{heading}</h1>
            <p className="hf-top__lead">{lead}</p>
          </Reveal>
          <Reveal className="hf-form-wrap">
            <HubSpotFormShell formId={formId} />
          </Reveal>
        </div>
        {/* Live: the banner is a full-width sibling of the 680px inner (1302px wide @1440), not inside it */}
        <CustomerBanner variant="minimal" label={BANNER_LABEL} logos={BANNER_LOGOS} logoHeight={BANNER_LOGO_HEIGHT} />
      </div>
    </V1PageLayout>
  )
}
