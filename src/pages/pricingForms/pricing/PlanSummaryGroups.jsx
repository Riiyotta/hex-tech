// PlanSummaryGroups (specs/solutions.md §4.4.2): "Individual plans" / "Team plans" frames, two plan cards each.
// Replaced by PlansMobileView at ≤800 (§4.4.7).
import { GROUPS, PLANS } from './data.js'
import { FeatureText, GroupFrame, PlanHeader, RoseNoise } from './PlanParts.jsx'
import { PlanIcon, Tick } from './icons.jsx'

function PlanSummaryCard({ plan, team }) {
  const [before, name, after] = plan.intro
  return (
    <div className="pf-card">
      {team && <RoseNoise />}
      <div className="pf-card__illustration">
        <PlanIcon name={plan.icon} />
      </div>
      <div className="pf-card__header-wrap">
        <PlanHeader plan={plan} />
      </div>
      <div className="pf-card__features">
        <div className="pf-card__intro">
          {before}
          {name && <strong>{name}</strong>}
          {after}
        </div>
        {plan.features.map((f, i) => (
          <div key={i} className="pf-card__item">
            <div className="pf-card__tick">
              <Tick />
            </div>
            <div className="pf-card__text">
              <FeatureText value={f} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PlanSummaryGroups() {
  return (
    <div className="pf-summary-row" data-section="PlanSummaryGroups">
      <div className="pf-summary-row__inner">
        {GROUPS.map((group) => (
          <GroupFrame key={group.id} group={group}>
            {PLANS.filter((p) => p.group === group.id).map((plan) => (
              <PlanSummaryCard key={plan.id} plan={plan} team={group.team} />
            ))}
          </GroupFrame>
        ))}
      </div>
    </div>
  )
}
