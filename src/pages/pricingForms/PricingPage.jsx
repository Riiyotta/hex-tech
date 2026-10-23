// /pricing/ (dark), specs/solutions.md §4.4 (T4). No billing toggle exists on the live page.
// Frame: plain margin lines → PricingHeader → PlanSummaryGroups → minimal banner → TronDivider →
// PlanComparisonTable (sticky header, tooltips) → flipped TronDivider → Faq → Footer.
// ≤800: PlansMobileView replaces the summary groups, and the comparison block is not rendered.
import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Reveal, TronDivider, V1PageLayout } from '../../components/shared'
import CustomerBanner from '../../components/sections/CustomerBanner.jsx'
import Faq from '../../components/sections/Faq.jsx'
import { BANNER_LABEL, BANNER_LOGOS, BANNER_LOGO_HEIGHT } from './bannerLogos.js'
import { PRICING_FAQ } from './pricing/data.js'
import { TooltipProvider } from './pricing/FeatureTooltip.jsx'
import PlanSummaryGroups from './pricing/PlanSummaryGroups.jsx'
import PlanComparisonTable from './pricing/PlanComparisonTable.jsx'
import PlansMobileView from './pricing/PlansMobileView.jsx'
import ComputeProfilesModal from './pricing/ComputeProfilesModal.jsx'
import './pricing/pricing.css'

const MOBILE = '(max-width: 800px)'

function useMedia(query) {
  const [match, setMatch] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const on = () => setMatch(mql.matches)
    on()
    mql.addEventListener('change', on)
    return () => mql.removeEventListener('change', on)
  }, [query])
  return match
}

function PricingHeader() {
  return (
    <div className="pf-pricing-header" data-section="PricingHeader">
      <h1 className="pf-pricing-header__h1">Pricing</h1>
      <p>
        Choose the right plan for you and your team. Don't know what you need?{' '}
        <a className="pf-link" href="/request-a-demo/">
          Get in touch.
        </a>
      </p>
    </div>
  )
}

export default function PricingPage() {
  const mobile = useMedia(MOBILE)
  const [params, setParams] = useSearchParams()
  const modalOpen = params.get('modal') === 'compute'

  useEffect(() => {
    document.title = 'Hex Pricing: Plans for Every Data Team | Hex'
  }, [])

  const openModal = useCallback(() => {
    setParams(
      (p) => {
        const next = new URLSearchParams(p)
        next.set('modal', 'compute')
        return next
      },
      { preventScrollReset: true },
    )
  }, [setParams])
  const closeModal = useCallback(() => {
    setParams(
      (p) => {
        const next = new URLSearchParams(p)
        next.delete('modal')
        return next
      },
      { preventScrollReset: true },
    )
  }, [setParams])

  return (
    <TooltipProvider onComputeLink={openModal}>
      <V1PageLayout rules={false} grid={false} footer>
        <div className="pf-pricing">
        <Reveal>
          <PricingHeader />
        </Reveal>
        {mobile ? (
          <Reveal>
            <PlansMobileView onCompute={openModal} />
          </Reveal>
        ) : (
          <Reveal>
            <PlanSummaryGroups />
          </Reveal>
        )}
        {!mobile && (
          <>
            <CustomerBanner variant="minimal" label={BANNER_LABEL} logos={BANNER_LOGOS} logoHeight={BANNER_LOGO_HEIGHT} />
            <TronDivider className="mb-0" />
            <PlanComparisonTable onCompute={openModal} />
            <TronDivider flipped className="mb-0" />
          </>
        )}
        <Faq items={PRICING_FAQ} answerStyle="page" tron={false} />
        </div>
      </V1PageLayout>
      <ComputeProfilesModal open={modalOpen} onClose={closeModal} />
    </TooltipProvider>
  )
}
