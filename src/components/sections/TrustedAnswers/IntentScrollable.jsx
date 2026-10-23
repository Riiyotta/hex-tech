// Port of the live IntentScrollable2 (scroll panes inside the product mockups, §6.9 "chat pulse overlays").
// While the pointer is over a pane, wheel events keep scrolling the PAGE until the pointer, page and
// wheel have all been still (< 15px/s) for 800ms; an "ENABLE SCROLL" progress gauge follows the cursor
// meanwhile. Once unlocked the pane scrolls itself (overflow hands back to the page) and the pulse
// overlay flashes for 400ms. `intentScroll={false}` renders a plain scroll container (Hex CLI).
import { forwardRef, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const UNLOCK_TIME_MS = 800
const MAX_VELOCITY = 15

function useIntentScroll(ref, enabled) {
  const [isHovering, setHovering] = useState(false)
  const [isPulsing, setPulsing] = useState(false)
  const [isUnlocked, setUnlocked] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return undefined
    const st = {
      hovering: false,
      unlocked: false,
      settled: false,
      programmatic: false,
      interval: null,
      acc: 0,
      mouse: { x: 0, y: 0, time: 0 },
      mouseSpeeds: [],
      page: { y: 0, time: 0 },
      pageSpeeds: [],
      lastWheel: 0,
      wheelSpeeds: [],
    }
    let pulseTimer = null
    const avg = (a) => a.reduce((s, v) => s + v, 0) / a.length
    const mouseVelocity = () =>
      Date.now() - st.mouse.time > 100 ? 0 : st.mouseSpeeds.length === 0 ? 999 : avg(st.mouseSpeeds)
    const pageVelocity = () =>
      Date.now() - st.page.time > 150 || st.pageSpeeds.length === 0 ? 0 : avg(st.pageSpeeds)
    const wheelVelocity = () =>
      Date.now() - st.lastWheel > 150 || st.wheelSpeeds.length === 0 ? 0 : avg(st.wheelSpeeds)
    const scrollPage = (dy) => {
      st.programmatic = true
      window.scrollBy({ top: dy, behavior: 'instant' })
      requestAnimationFrame(() => {
        st.programmatic = false
      })
    }
    const stopTimer = () => {
      if (st.interval) {
        clearInterval(st.interval)
        st.interval = null
      }
    }
    const onEnter = () => {
      st.hovering = true
      setHovering(true)
      const now = Date.now()
      st.mouse = { x: 0, y: 0, time: now }
      st.page = { y: window.scrollY, time: now }
      st.lastWheel = 0
      st.mouseSpeeds = []
      st.pageSpeeds = []
      st.wheelSpeeds = []
      st.settled = false
      if (st.interval) return
      st.acc = 0
      let last = Date.now()
      st.interval = window.setInterval(() => {
        const t = Date.now()
        const dt = t - last
        last = t
        const still = Math.max(mouseVelocity(), pageVelocity(), wheelVelocity()) < MAX_VELOCITY
        if (still && !st.settled) st.settled = true
        if (still && st.settled) st.acc += dt / UNLOCK_TIME_MS
        const p = Math.min(1, st.acc)
        setProgress(p)
        if (p >= 1) {
          stopTimer()
          setUnlocked(true)
          st.unlocked = true
          setPulsing(true)
          pulseTimer = setTimeout(() => setPulsing(false), 400)
        }
      }, 16)
    }
    const onLeave = () => {
      st.hovering = false
      stopTimer()
      setUnlocked(false)
      setProgress(0)
      setHovering(false)
      st.unlocked = false
      st.acc = 0
      st.mouseSpeeds = []
      st.pageSpeeds = []
      st.wheelSpeeds = []
      st.settled = false
    }
    const onMove = (e) => {
      if (!st.hovering) return
      const t = Date.now()
      const dt = t - st.mouse.time
      if (dt > 16) {
        const dx = e.clientX - st.mouse.x
        const dy = e.clientY - st.mouse.y
        st.mouseSpeeds.push((Math.sqrt(dx * dx + dy * dy) / dt) * 1000)
        if (st.mouseSpeeds.length > 5) st.mouseSpeeds.shift()
        st.mouse = { x: e.clientX, y: e.clientY, time: t }
      }
    }
    const onWheel = (e) => {
      if (!st.hovering) return
      e.preventDefault()
      e.stopPropagation()
      const dy = e.deltaY
      const t = Date.now()
      const dt = t - st.lastWheel
      if (dt > 0) {
        st.wheelSpeeds.push((Math.abs(dy) / Math.max(dt, 16)) * 1000)
        if (st.wheelSpeeds.length > 5) st.wheelSpeeds.shift()
      }
      st.lastWheel = t
      if (!st.unlocked) {
        scrollPage(dy)
        return
      }
      const { clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth } = el
      const dx = e.deltaX
      if ((dx > 0 && scrollLeft < scrollWidth - clientWidth - 1) || (dx < 0 && scrollLeft > 0)) el.scrollLeft += dx
      if ((dy > 0 && scrollTop < scrollHeight - clientHeight - 1) || (dy < 0 && scrollTop > 0)) el.scrollTop += dy
      else if (dy !== 0) scrollPage(dy)
    }
    const onPageScroll = () => {
      if (st.programmatic) return
      const t = Date.now()
      const y = window.scrollY
      const dt = t - st.page.time
      if (dt > 0) {
        st.pageSpeeds.push((Math.abs(y - st.page.y) / dt) * 1000)
        if (st.pageSpeeds.length > 5) st.pageSpeeds.shift()
      }
      st.page = { y, time: t }
    }
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onPageScroll, { passive: true })
    return () => {
      stopTimer()
      clearTimeout(pulseTimer)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onPageScroll)
    }
  }, [ref, enabled])

  return { isHovering, isPulsing, isUnlocked, progress }
}

// Shared by the gauge and the 8-bit cursor: follow the pointer, fade in/out over 150ms.
export function useCursorPortalState(visible) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (visible) {
      setMounted(true)
      let raf2
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setShown(true))
      })
      return () => {
        cancelAnimationFrame(raf1)
        cancelAnimationFrame(raf2)
      }
    }
    setShown(false)
    const t = setTimeout(() => setMounted(false), 150)
    return () => clearTimeout(t)
  }, [visible])
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return { pos, mounted, shown }
}

function UnlockIndicator({ visible, progress }) {
  const { pos, mounted, shown } = useCursorPortalState(visible)
  if (!mounted || typeof document === 'undefined') return null
  const filled = Math.floor(progress * 10)
  return createPortal(
    <div
      className="ta-cursor-portal"
      style={{ left: pos.x, top: pos.y, zIndex: 100000, opacity: shown ? 1 : 0 }}
      aria-hidden="true"
    >
      <svg height={20} width={50} viewBox="0 0 50 20" style={{ position: 'absolute', left: 14, top: 2 }}>
        <rect className="ta-gauge-unfilled" height={20} rx={1} width={6} x={0} y={0} />
        {filled > 0 && <rect className="ta-gauge-filled" height={filled * 2} rx={1} width={6} x={0} y={(10 - filled) * 2} />}
        <text className="ta-gauge-filled ta-gauge-text" x={10} y={9}>
          ENABLE
        </text>
        <text className="ta-gauge-filled ta-gauge-text" x={10} y={17}>
          SCROLL
        </text>
      </svg>
    </div>,
    document.body,
  )
}

const IntentScrollable = forwardRef(function IntentScrollable(
  { className = '', intentScroll = true, children },
  forwardedRef,
) {
  const localRef = useRef(null)
  const ref = forwardedRef ?? localRef
  const { isHovering, isPulsing, isUnlocked, progress } = useIntentScroll(ref, intentScroll)

  return (
    <div className="IntentScrollable2__Wrapper-sc-7516eae0-0 jRKfXQ">
      <div ref={ref} className={`IntentScrollable2__ScrollContainer-sc-7516eae0-2 dPikPU ${className}`}>
        {children}
      </div>
      {intentScroll && (
        <>
          <div className="IntentScrollable2__PulseOverlay-sc-7516eae0-1 jDWlpk" style={{ opacity: isPulsing ? 1 : 0 }} />
          <UnlockIndicator visible={isHovering && !isUnlocked} progress={progress} />
        </>
      )}
    </div>
  )
})

export default IntentScrollable
