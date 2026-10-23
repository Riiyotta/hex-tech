// PlansMobileView (specs/solutions.md §4.4.7, dom/pricing-390-mobile-plans.html): ≤800 replaces the plan
// summary and the comparison table. Groups stack Team-first; each plan block has a "See all {Plan} features"
// toggle that instantly expands the UniquePlanItems list: every comparison row whose value differs from the
// previous plan's, grouped by section (empty sections dropped). As on the live page, rich cells (text with a
// footnote) render as empty value cells here.
import { useState } from 'react'
import { GROUPS, PLANS, TABLE } from './data.js'
import { GroupFrame, PlanHeader, RoseNoise } from './PlanParts.jsx'
import { CellContent } from './PlanComparisonTable.jsx'
import { ChevronRight, PlanIcon } from './icons.jsx'

const same = (a, b) => JSON.stringify(a) === JSON.stringify(b)

function uniqueItems(planIndex) {
  return TABLE.map((section) => ({
    title: section.title,
    rows: section.rows.filter((row) => row.cells[planIndex] !== null && (planIndex === 0 || !same(row.cells[planIndex], row.cells[planIndex - 1]))),
  })).filter((s) => s.rows.length)
}

function MobilePlan({ plan, team, first, onCompute }) {
  const [open, setOpen] = useState(false)
  const index = PLANS.indexOf(plan)
  const prev = PLANS[index - 1]
  return (
    <div className="pf-mobile-plan">
      {!first && (
        <div className="pf-mobile-plan__divider" aria-hidden="true">
          <div className="pf-mobile-plan__accent" />
          <div className="pf-mobile-plan__accent" data-right="" />
        </div>
      )}
      {team && <RoseNoise />}
      <div className="pf-mobile-plan__illustration">
        <PlanIcon name={plan.icon} />
      </div>
      <PlanHeader plan={plan} headingAs="h4" />
      <button
        type="button"
        className="pf-mobile-plan__toggle"
        data-open={open ? '' : undefined}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="pf-mobile-plan__toggle-label">{open ? `Hide all ${plan.name} features` : `See all ${plan.name} features`}</span>
        <ChevronRight />
      </button>
      {open && (
        <div className="pf-mobile-plan__details">
          {/* Live copy for plans after Community: "Everything in <strong>Prev</strong>, plus...". The live
              Community expanded intro was not captured; it reuses the card intro "Features include:". */}
          <p>
            {prev ? (
              <>
                Everything in <strong>{prev.name}</strong>, plus...
              </>
            ) : (
              'Features include:'
            )}
          </p>
          <div>
            {uniqueItems(index).map((section) => (
              <div key={section.title || 'top'} className="pf-unique-section">
                <h4 className="pf-unique-section__title">{section.title}</h4>
                <div className="pf-unique-section__rows">
                  {section.rows.map((row) => (
                    <div key={row.label} className="pf-unique-row">
                      <div className="pf-unique-row__title">{row.label}</div>
                      <div className="pf-cell">
                        {row.cells[index]?.footnote ? null : <CellContent cell={row.cells[index]} onCompute={onCompute} />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function PlansMobileView({ onCompute }) {
  return (
    <div className="pf-mobile" data-section="PlansMobileView">
      {[...GROUPS].reverse().map((group) => (
        <GroupFrame key={group.id} group={group}>
          {PLANS.filter((p) => p.group === group.id).map((plan, i) => (
            <MobilePlan key={plan.id} plan={plan} team={group.team} first={i === 0} onCompute={onCompute} />
          ))}
        </GroupFrame>
      ))}
    </div>
  )
}
