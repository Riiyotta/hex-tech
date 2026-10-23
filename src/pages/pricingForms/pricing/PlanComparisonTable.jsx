// PlanComparisonTable + StickyPlanHeader (specs/solutions.md §4.4.3). Hidden at ≤800 (PlansMobileView instead).
// Sticky: react-stickynode pattern. The 122px GridHeader keeps its height; once its top reaches the 82px nav
// bottom, its content becomes position:fixed (top 0, wrapper width) and the StickyTableWrapper is drawn at
// top:var(--top) (82px, 76px ≤1000) with bg, borders, shadow and paper texture; the Spacer's "Compare plan
// features:" H4 fades in (.25s). It releases when the table's bottom reaches the header's bottom edge.
import { useEffect, useRef, useState } from 'react'
import { PLANS, TABLE } from './data.js'
import { PlanButton } from './PlanParts.jsx'
import { Tip } from './FeatureTooltip.jsx'
import { Tick } from './icons.jsx'

const NAV_BOTTOM = 82
const NAV_BOTTOM_TABLET = 76

export function CellContent({ cell, onCompute }) {
  if (cell === null) return null
  if (cell === true) {
    return (
      <div className="pf-cell-item">
        <div className="pf-cell-item__tick">
          <Tick />
        </div>
      </div>
    )
  }
  let content
  if (typeof cell === 'string') content = cell
  else if (cell.compute)
    content = (
      <>
        <button type="button" className="pf-compute-toggle" onClick={onCompute}>
          {cell.compute}
        </button>
        {cell.suffix}
      </>
    )
  else if (cell.lines)
    content = cell.lines.map((l, i) => (
      <span key={i} className="pf-cell-item__line">
        {l}
      </span>
    ))
  else content = cell.text
  return (
    <>
      <div className="pf-cell-item">
        <div className="pf-cell-item__text">{content}</div>
      </div>
      {cell.footnote && <div className="pf-cell-item__footnote">{cell.footnote}</div>}
    </>
  )
}

function useSticky(placeholderRef, boundaryRef) {
  const [state, setState] = useState({ stuck: false, left: 0, width: 0, shift: 0 })
  useEffect(() => {
    let raf = 0
    const measure = () => {
      raf = 0
      const ph = placeholderRef.current
      const bd = boundaryRef.current
      if (!ph || !bd || ph.offsetParent === null) return
      const top = window.matchMedia('(max-width: 1000px)').matches ? NAV_BOTTOM_TABLET : NAV_BOTTOM
      const r = ph.getBoundingClientRect()
      const bottom = bd.getBoundingClientRect().bottom
      const stuck = r.top <= top && bottom > top + r.height
      setState((s) =>
        s.stuck === stuck && s.left === r.left && s.width === r.width ? s : { stuck, left: r.left, width: r.width },
      )
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [placeholderRef, boundaryRef])
  return state
}

function StickyPlanHeader({ boundaryRef }) {
  const placeholderRef = useRef(null)
  const { stuck, left, width } = useSticky(placeholderRef, boundaryRef)
  return (
    <div className="pf-grid-header" data-section="StickyPlanHeader">
      <div className="pf-sticky" ref={placeholderRef}>
        <div
          className={stuck ? 'isSticky' : undefined}
          style={stuck ? { position: 'fixed', top: 0, left, width, transform: 'translateZ(0)' } : undefined}
        >
          <div className="pf-sticky__wrapper" style={{ '--top': `${NAV_BOTTOM}px` }}>
            <div className="pf-sticky__inner">
              <div className="pf-sticky__spacer">
                <h4 className="pf-sticky__label" aria-hidden={!stuck}>
                  Compare
                  <br />
                  plan features:
                </h4>
              </div>
              {PLANS.map((plan) => (
                <div key={plan.id} className="pf-sticky__plan">
                  <h3 className="pf-sticky__plan-name">{plan.name}</h3>
                  <PlanButton cta={plan.cta} variant={plan.cta.circles ? 'primary' : 'secondary'} small />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PlanComparisonTable({ onCompute }) {
  const boundaryRef = useRef(null)
  return (
    <div className="pf-comparison" data-section="PlanComparisonTable">
      <div className="pf-inner">
        <h2 className="pf-comparison__h2">Compare plan features</h2>
      </div>
      <div className="pf-browser-grid" ref={boundaryRef}>
        <StickyPlanHeader boundaryRef={boundaryRef} />
        <div className="pf-inner">
          <div className="pf-grid-content">
            {TABLE.map((section) => (
              <div key={section.title || 'top'} className="pf-grid-section">
                <h4 className="pf-grid-section__title">{section.title}</h4>
                <div>
                  {section.rows.map((row) => (
                    <div key={row.label} className="pf-row">
                      <div className="pf-row__label">
                        {row.tip ? (
                          <Tip html={row.tip} place="right">
                            {row.label}
                          </Tip>
                        ) : (
                          <span>{row.label}</span>
                        )}
                      </div>
                      {row.cells.map((cell, i) => (
                        <div key={i} className="pf-cell">
                          <CellContent cell={cell} onCompute={onCompute} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
