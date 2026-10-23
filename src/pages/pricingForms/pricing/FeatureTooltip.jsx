// FeatureTooltip (specs/solutions.md §4.4.4): dotted-underline terms that open one shared dark bubble
// (react-tooltip v5 `#tooltip` + Hex `.toolTip` overrides from dom/pricing.css; the arrow is display:none there).
// Hover shows (opacity → .9, .15s ease-out) and hides (.15s ease-in). The bubble is clickable: moving the pointer
// into it keeps it open so its links can be clicked. `#compute-modal` links open the compute modal;
// `#faq-credits` is a normal in-page anchor.
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const TooltipContext = createContext(null)
const OFFSET = 10 // react-tooltip default offset
const HIDE_GRACE = 100 // ms to travel from the trigger into the clickable bubble

export function TooltipProvider({ onComputeLink, children }) {
  const [tip, setTip] = useState(null) // { html, place, rect }
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ left: -9999, top: -9999 })
  const bubbleRef = useRef(null)
  const hideTimer = useRef(0)

  const cancelHide = () => window.clearTimeout(hideTimer.current)
  const show = useCallback((el, html, place) => {
    cancelHide()
    setTip({ html, place, rect: el.getBoundingClientRect() })
    setOpen(true)
  }, [])
  const scheduleHide = useCallback(() => {
    cancelHide()
    hideTimer.current = window.setTimeout(() => setOpen(false), HIDE_GRACE)
  }, [])

  // Position next to the trigger; flip when the preferred side has no room.
  useLayoutEffect(() => {
    if (!tip || !bubbleRef.current) return
    const { width: w, height: h } = bubbleRef.current.getBoundingClientRect()
    const r = tip.rect
    const vw = document.documentElement.clientWidth
    let left
    let top
    if (tip.place === 'right') {
      left = r.right + OFFSET
      if (left + w > vw) left = r.left - OFFSET - w
      top = r.top + r.height / 2 - h / 2
    } else {
      left = r.left + r.width / 2 - w / 2
      top = r.top - OFFSET - h
      if (top < 0) top = r.bottom + OFFSET
    }
    left = Math.max(0, Math.min(left, vw - w))
    setPos({ left, top })
  }, [tip])

  useEffect(() => {
    if (!open) return undefined
    const close = () => setOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [open])

  useEffect(() => () => cancelHide(), [])

  const onBubbleClick = (e) => {
    const a = e.target.closest('a')
    if (a && a.getAttribute('href') === '#compute-modal') {
      e.preventDefault()
      setOpen(false)
      onComputeLink?.()
    } else if (a) {
      setOpen(false)
    }
  }

  return (
    <TooltipContext.Provider value={{ show, scheduleHide }}>
      {children}
      {createPortal(
        <div
          ref={bubbleRef}
          id="tooltip"
          role="tooltip"
          data-open={open ? '' : undefined}
          className="pf-tooltip"
          style={{ left: pos.left, top: pos.top }}
          onMouseEnter={cancelHide}
          onMouseLeave={scheduleHide}
          onClick={onBubbleClick}
          dangerouslySetInnerHTML={{ __html: tip?.html ?? '' }}
        />,
        document.body,
      )}
    </TooltipContext.Provider>
  )
}

// <Tip html="…" place="top|right">term</Tip>: the FeatureLabel span
export function Tip({ html, place = 'top', children }) {
  const ctx = useContext(TooltipContext)
  return (
    <span
      className="pf-tip"
      data-tooltip-place={place}
      tabIndex={0}
      onMouseEnter={(e) => ctx.show(e.currentTarget, html, place)}
      onMouseLeave={ctx.scheduleHide}
      onFocus={(e) => ctx.show(e.currentTarget, html, place)}
      onBlur={ctx.scheduleHide}
    >
      {children}
    </span>
  )
}
