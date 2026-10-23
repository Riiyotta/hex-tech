// Shared pricing parts: PlanButton (shared Button with md corner circles), group frame (rails, label, accents),
// rose Perlin layer, feature text with tooltip terms. specs/solutions.md §4.4.2.
import { Button, PerlinNoise } from '../../../components/shared'
import { CARD_TIPS } from './data.js'
import { Tip } from './FeatureTooltip.jsx'

// PlanHeader__PlanButton (gpKBZx): full-width md Button with corner lines, label in the body colour; the Team CTA
// is an md primary *with* CornerCircles. Header buttons are border-box (40 tall); the comparison-table copies are
// 36px content-box with a 12px label.
export function PlanButton({ cta, variant = 'primary', small = false, className = '' }) {
  return (
    <div className={`pf-plan-btn ${className}`} data-variant={variant}>
      <Button
        variant={variant}
        size={small ? 'sm' : 'md'}
        href={cta.href}
        external={cta.external}
        corners
        circles={!!cta.circles}
        block
        boxSizing={small ? undefined : 'border'}
        labelColor="body"
        labelSize={small ? 'small' : undefined}
      >
        {cta.label}
      </Button>
    </div>
  )
}

export function GroupFrame({ group, className = '', children }) {
  return (
    <div className={`pf-group ${className}`} data-team={group.team ? 'true' : undefined}>
      <div className="pf-group__rail" aria-hidden="true" />
      <div className="pf-group__rail" data-right="" aria-hidden="true" />
      <div className="pf-group__label font-mono text-annotation">{group.label}</div>
      {['tl', 'tr', 'bl', 'br'].map((p) => (
        <div key={p} className="pf-group__accent" data-position={p} aria-hidden="true" />
      ))}
      {children}
    </div>
  )
}

// PricingGroup__LinearGradientMask → DotGridMask → PricingGroup__PerlinNoise (rose 128 tile @512px, 16s)
export function RoseNoise() {
  return (
    <div className="pf-noise-mask" aria-hidden="true">
      <PerlinNoise texture="rose" size={512} duration="16s" opacity={1} />
    </div>
  )
}

export function FeatureText({ value }) {
  if (typeof value === 'string') return value
  return value.map((seg, i) =>
    typeof seg === 'string' ? (
      seg
    ) : (
      <Tip key={i} html={CARD_TIPS[seg.tip]} place="top">
        {seg.tip}
      </Tip>
    ),
  )
}

export function PlanHeader({ plan, headingAs: H = 'h3' }) {
  return (
    <div className="pf-plan-header">
      <H className="pf-plan-header__title">{plan.name}</H>
      <p className="pf-plan-header__desc">{plan.description}</p>
      <div className="pf-plan-header__price-row">
        <span className="pf-plan-header__price">{plan.price}</span>
        {plan.priceDetail && <span className="pf-plan-header__price-detail">{plan.priceDetail}</span>}
      </div>
      <PlanButton cta={plan.cta} />
    </div>
  )
}
