// Desktop mega-menu pieces (CLONE_SPEC §4.0 "Mega-menus", §6.10). Replaces Radix NavigationMenu with a
// small controller: open on hover (0ms delay) / click / keyboard, close 150ms after the pointer leaves,
// one shared white viewport that springs (0.32s, bounce 0) to the active panel's size and x-offset.
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { MotionConfig, motion } from 'framer-motion'
import MaskIcon from '../shared/MaskIcon.jsx'
import AiLinesCanvas from './AiLinesCanvas.jsx'
import { MENUS } from './navData.js'

const MenuContext = createContext(null)
export const useMegaMenu = () => useContext(MenuContext)

const CLOSE_DELAY = 150 // Radix NavigationMenu close timer

// Exact port of the site's n6(): position the flyout relative to its trigger.
function flyoutOffset(trigger, content) {
  const mid = 0.5 * window.innerWidth
  const center = trigger.left + 0.5 * trigger.width
  const s = 0.3 * content.width
  let d
  if (center > mid) d = trigger.left + trigger.width - content.width + 1.4 * s
  else if (center < mid) d = trigger.left - 0.25 * s
  else d = center - 0.5 * content.width
  return Math.min(Math.max(d, 16), window.innerWidth - 16)
}

export function MegaMenuProvider({ children }) {
  const [state, setState] = useState({ value: null, boxes: null, offsets: {}, animateSize: false, reset: true })
  const triggers = useRef({})
  const panels = useRef({})
  const closeTimer = useRef(0)

  const measure = useCallback((value, prev) => {
    const t = triggers.current[value]
    const c = panels.current[value]
    if (!t || !c) return
    const all = {}
    for (const key of Object.keys(MENUS)) {
      const tk = triggers.current[key]
      const ck = panels.current[key]
      if (tk && ck) all[key] = flyoutOffset(tk.getBoundingClientRect(), ck.getBoundingClientRect())
    }
    const relative = Object.fromEntries(Object.entries(all).map(([k, v]) => [k, v - all[value]]))
    setState({
      value,
      boxes: { offset: all[value], width: c.getBoundingClientRect().width, height: c.getBoundingClientRect().height },
      offsets: relative,
      animateSize: !prev.reset && !!prev.boxes,
      reset: false,
    })
  }, [])

  const stateRef = useRef(state)
  stateRef.current = state

  const open = useCallback(
    (value) => {
      window.clearTimeout(closeTimer.current)
      if (stateRef.current.value === value) return
      // measure on the next frame so refs/layout are current
      requestAnimationFrame(() => measure(value, stateRef.current))
    },
    [measure],
  )
  const remeasure = useCallback(() => {
    const current = stateRef.current
    if (current.value) measure(current.value, { ...current, reset: true })
  }, [measure])
  const close = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    setState((prev) => ({ ...prev, value: null, animateSize: false, reset: true }))
  }, [])
  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(close, CLOSE_DELAY)
  }, [close])
  const cancelClose = useCallback(() => window.clearTimeout(closeTimer.current), [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  return (
    <MotionConfig transition={{ type: 'spring', duration: 0.32, bounce: 0 }}>
      <MenuContext.Provider value={{ ...state, triggers, panels, open, close, remeasure, scheduleClose, cancelClose }}>
        {children}
      </MenuContext.Provider>
    </MotionConfig>
  )
}

/* ---------- trigger ---------- */
export function MenuTrigger({ menu }) {
  const ctx = useMegaMenu()
  const isOpen = ctx.value === menu
  return (
    <motion.button
      ref={(el) => (ctx.triggers.current[menu] = el)}
      type="button"
      data-dropdown="true"
      data-state={isOpen ? 'open' : 'closed'}
      aria-expanded={isOpen}
      aria-controls={`nav-content-${menu}`}
      id={`nav-trigger-${menu}`}
      whileTap={{ scale: 0.96 }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && ctx.open(menu)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && ctx.scheduleClose()}
      onClick={() => (isOpen ? ctx.close() : ctx.open(menu))}
      className={`relative flex items-center whitespace-nowrap rounded-nav-item py-[0.6rem] pl-[0.85rem] pr-[0.6rem] font-sans text-nav font-normal text-ink-loud transition-none hover:bg-fg-a-500 focus-visible:bg-fg-a-500 ${
        isOpen ? 'bg-fg-a-500' : ''
      }`}
    >
      {MENUS[menu].title}
      <motion.div
        className="ml-[0.35rem] block text-fg-1200"
        animate={isOpen ? 'open' : 'closed'}
        variants={{ open: { rotate: -180 }, closed: { rotate: 0 } }}
      >
        <MaskIcon src="/assets/svg/icons/nav-chevron-down.svg" size={15} />
      </motion.div>
    </motion.button>
  )
}

/* ---------- dropdown item ---------- */
function ExternalArrow() {
  const icon = <MaskIcon src="/assets/svg/icons/nav/external-arrow.svg" size={17} />
  return (
    <MotionConfig transition={{ type: 'spring', duration: 0.4, bounce: 0.32 }}>
      <div className="ml-auto grid aspect-square w-8 place-content-center self-center rounded-[99px] text-fg-1200 [grid-area:arrow] [&>*]:[grid-area:1/-1]" style={{ overflow: 'clip' }}>
        <motion.div
          variants={{
            hovered: { x: 20, y: -20, scale: 0.8, opacity: 0, filter: 'blur(2px)' },
            base: { x: 0, y: 0, scale: 1, opacity: 1, filter: 'blur(0px)' },
          }}
        >
          {icon}
        </motion.div>
        <motion.div
          data-reveal=""
          variants={{
            hovered: { x: 0, y: 0, scale: 1, opacity: 1, filter: 'blur(0px)' },
            base: { x: -20, y: 20, scale: 0.8, opacity: 0, filter: 'blur(2px)' },
          }}
        >
          {icon}
        </motion.div>
      </div>
    </MotionConfig>
  )
}

function DropdownItem({ item, focusable }) {
  return (
    <li>
      <a
        href={item.href}
        tabIndex={focusable ? undefined : -1}
        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="relative block rounded-nav-item transition-[background-color] duration-link ease-linear hover:bg-fg-a-500"
      >
        <motion.div
          initial="base"
          whileHover="hovered"
          className="grid w-[42ch] select-none content-start items-center gap-x-[0.68rem] gap-y-[0.05rem] p-2"
          style={{ gridTemplateColumns: 'max-content 1fr max-content', gridTemplateAreas: '"icon title arrow" "icon description arrow"' }}
        >
          <div className="ml-auto box-border grid aspect-square w-4 place-content-center self-center pl-[18px] pr-[14px] text-fg-1200 [grid-area:icon]">
            <MaskIcon src={item.icon} size={item.iconSize} />
          </div>
          <div className="text-small font-normal text-ink-loud [grid-area:title]">{item.title}</div>
          <div className="text-dropdown-desc font-normal text-fg-a-1200 [grid-area:description]">{item.description}</div>
          {item.external ? <ExternalArrow /> : null}
        </motion.div>
      </a>
    </li>
  )
}

/* ---------- callout ---------- */
function Callout({ callout, menuOpen, focusable }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="nav-callout flex w-full rounded-eyebrow border border-grid-500 bg-fg-100">
        <a href={callout.href} tabIndex={focusable ? undefined : -1} className="relative block w-full p-[0.8rem]">
          <div className="nav-callout__feather">
            <div className="dot-grid-mask">
              <div className="absolute inset-0 bg-fg-a-700" />
              <div className="nav-callout__noise" />
            </div>
          </div>
          <div className="relative z-[2] flex flex-col">
            <div className="flex items-center gap-[10px] pb-[0.6rem] text-fg-1200">
              <MaskIcon src={callout.icon} size={15} />
              {callout.eyebrow && (
                <span className="font-mono text-[11px] font-normal leading-[1.571] tracking-[0.0833em] text-ink-loud opacity-50">
                  {callout.eyebrow}
                </span>
              )}
            </div>
            <div className="text-small font-normal text-ink-loud">{callout.title}</div>
            <div className="text-dropdown-desc font-normal text-fg-a-1200">{callout.description}</div>
          </div>
          <div className="pointer-events-none absolute inset-0">
            {callout.illustration === 'ai-canvas' && <AiLinesCanvas visible={menuOpen} />}
            {callout.illustration === 'ai-analytics-guide' && (
              <div className="relative z-[1] flex h-full items-center justify-end">
                <span
                  aria-hidden="true"
                  className="block h-[230%] text-highlight opacity-20 [mask-image:linear-gradient(to_top,transparent,white_100%)]"
                  style={{ aspectRatio: '396 / 223' }}
                >
                  <span
                    className="mask-icon h-full w-full"
                    style={{ '--icon': 'url(/assets/svg/illustrations/nav-ai-analytics-guide.svg)' }}
                  />
                </span>
              </div>
            )}
          </div>
        </a>
      </div>
    </div>
  )
}

/* ---------- one panel ---------- */
function Panel({ menu }) {
  const ctx = useMegaMenu()
  const data = MENUS[menu]
  const active = ctx.value === menu
  const x = 0.8 * (ctx.offsets[menu] ?? 0)
  const instant = ctx.animateSize ? {} : { transition: { duration: 0 } }
  const callout = <Callout callout={data.callout} menuOpen={active} focusable={active} />

  return (
    <div
      ref={(el) => (ctx.panels.current[menu] = el)}
      id={`nav-content-${menu}`}
      aria-labelledby={`nav-trigger-${menu}`}
      className="absolute left-0 top-0 w-auto"
      style={{ pointerEvents: active ? 'auto' : 'none' }}
    >
      <motion.div animate={{ x }} {...instant}>
        <motion.div
          className="flex flex-col gap-2 p-2"
          initial="hidden"
          animate={active ? 'visible' : 'hidden'}
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          {data.calloutFirst && callout}
          <div className="grid" style={{ gridTemplateColumns: `repeat(${data.columns.length}, 1fr)` }}>
            {data.columns.map((col) => (
              <div key={col.title}>
                <div className="pb-[6px] pl-4 pt-[10px] font-mono text-[11px] font-normal leading-[1.571] tracking-[0.0833em] text-ink-loud opacity-50">
                  {col.title}
                </div>
                <ul className="list-none">
                  {col.items.map((item) => (
                    <DropdownItem key={item.title} item={item} focusable={active} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {!data.calloutFirst && callout}
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ---------- shared viewport (rendered under the nav, moves with it) ---------- */
export function MegaMenuViewport() {
  const ctx = useMegaMenu()
  const { boxes } = ctx
  const instant = ctx.animateSize ? {} : { transition: { duration: 0 } }
  const isOpen = !!ctx.value

  // re-measure on resize while open
  const { remeasure } = ctx
  useEffect(() => {
    if (!isOpen) return
    window.addEventListener('resize', remeasure)
    return () => window.removeEventListener('resize', remeasure)
  }, [isOpen, remeasure])

  return (
    <motion.div
      className="absolute left-0 top-[calc(100%-0.375rem)] z-10 w-full tablet:hidden"
      initial="hidden"
      animate={isOpen && boxes ? 'visible' : 'hidden'}
      variants={{
        visible: { opacity: 1, transform: 'translateY(0rem)' },
        hidden: { opacity: 0, transform: 'translateY(-0.5rem)' },
      }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && ctx.cancelClose()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && ctx.scheduleClose()}
    >
      <motion.div
        className="absolute rounded-dropdown border border-grid-500 bg-surface-dropdown shadow-dropdown will-change-[transform,height,width]"
        style={{ overflow: 'clip', pointerEvents: isOpen ? 'auto' : 'none' }}
        animate={{
          transform: boxes ? `translateX(${boxes.offset}px)` : 'none',
          height: boxes?.height || 0,
          width: boxes?.width || 0,
        }}
        {...instant}
      >
        <div className="absolute inset-0">
          {Object.keys(MENUS).map((menu) => (
            <Panel key={menu} menu={menu} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
