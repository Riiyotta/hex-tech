// Port of the live EightBitCursor + use8BitCursor (§6.10 "custom cursor (cursor:none) inside interactive
// windows"). The product windows hide the native cursor on hover; this pixel-art arrow / pointer follows
// the mouse instead (outline = app intent primary, shadow = the same at 40%, fill white). The pointer
// variant is used over anything clickable, detected the same way as the original: a clickable selector
// list plus every stylesheet rule that sets `cursor: pointer`.
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useCursorPortalState } from './IntentScrollable.jsx'

// 0 = transparent, 1 = outline, 2 = fill, 3 = shadow
const ARROW = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 2, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 2, 2, 2, 1, 3, 0, 0, 0, 0, 0, 0],
  [1, 2, 2, 2, 2, 2, 1, 3, 0, 0, 0, 0, 0],
  [1, 2, 2, 2, 2, 2, 2, 1, 3, 0, 0, 0, 0],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 0, 0, 0],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 0, 0],
  [1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 3, 0],
  [1, 2, 2, 1, 2, 2, 1, 3, 3, 3, 3, 3, 0],
  [1, 2, 1, 3, 1, 2, 2, 1, 3, 0, 0, 0, 0],
  [1, 1, 3, 0, 1, 2, 2, 1, 3, 0, 0, 0, 0],
  [1, 3, 0, 0, 3, 1, 2, 2, 1, 3, 0, 0, 0],
  [3, 0, 0, 0, 0, 1, 2, 2, 1, 3, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 1, 1, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0],
]
const POINTER = [
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 1, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 1, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 1, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 1, 2, 2, 1, 3, 0, 0],
  [0, 1, 1, 0, 1, 2, 2, 1, 2, 2, 1, 1, 3, 0],
  [1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 3],
  [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3],
  [3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3],
  [0, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3],
  [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 0],
  [0, 0, 3, 1, 2, 2, 2, 2, 2, 2, 2, 1, 3, 0],
  [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 3, 0, 0],
  [0, 0, 0, 3, 1, 2, 2, 2, 2, 2, 1, 3, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 3, 0, 0, 0],
  [0, 0, 0, 0, 3, 1, 1, 1, 1, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0],
]
const PIXEL_CLASS = { 1: 'ta-cursor-outline', 2: 'ta-cursor-fill', 3: 'ta-cursor-shadow' }

function PixelSprite({ grid }) {
  const w = grid[0].length
  const h = grid.length
  return (
    <svg height={h} width={w} viewBox={`0 0 ${w} ${h}`} style={{ imageRendering: 'pixelated' }}>
      {grid.map((row, y) =>
        row.map((v, x) => (v === 0 ? null : <rect key={`${x}-${y}`} className={PIXEL_CLASS[v]} height={1} width={1} x={x} y={y} />)),
      )}
    </svg>
  )
}

const CLICKABLE =
  'a[href],a,button,select,label[for],[role="button"],[role="link"],[role="tab"],[role="menuitem"],[role="option"],[data-clickable],[tabindex="0"],input[type="button"],input[type="submit"],input[type="reset"],input[type="checkbox"],input[type="radio"]'
let pointerSelectors = null
function getPointerSelectors() {
  if (pointerSelectors) return pointerSelectors
  const found = []
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules ?? []) {
        if (rule instanceof CSSStyleRule && rule.style.cursor === 'pointer') found.push(rule.selectorText)
      }
    } catch {
      /* cross-origin sheet */
    }
  }
  pointerSelectors = found
  return found
}
function isClickable(target) {
  if (!(target instanceof Element)) return false
  if (target.closest(CLICKABLE)) return true
  for (const sel of getPointerSelectors()) {
    try {
      if (target.closest(sel)) return true
    } catch {
      /* selector with pseudo-classes the matcher rejects */
    }
  }
  return false
}

// Track hover on a window element (use8BitCursor). `parent: true` listens on the ref'd node's parent,
// for windows rendered by the shared ProductWindow (a function component that doesn't forward refs).
export function useHover(ref, { parent = false } = {}) {
  const [hovering, setHovering] = useState(false)
  useEffect(() => {
    const el = parent ? ref.current?.parentElement : ref.current
    if (!el) return undefined
    const enter = () => setHovering(true)
    const leave = () => setHovering(false)
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mouseenter', enter)
      el.removeEventListener('mouseleave', leave)
    }
  }, [ref, parent])
  return hovering
}

export default function EightBitCursor({ isHovering }) {
  const { pos, mounted, shown } = useCursorPortalState(isHovering)
  const [variant, setVariant] = useState('default')
  useEffect(() => {
    const onMove = (e) => setVariant(isClickable(e.target) ? 'pointer' : 'default')
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  if (!mounted || typeof document === 'undefined') return null
  return createPortal(
    <div className="ta-cursor-portal" style={{ left: pos.x, top: pos.y, zIndex: 99999, opacity: shown ? 1 : 0 }} aria-hidden="true">
      <PixelSprite grid={variant === 'pointer' ? POINTER : ARROW} />
    </div>,
    document.body,
  )
}
