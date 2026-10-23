// Mobile nav (≤1000px, CLONE_SPEC §4.0 "Mobile nav"): 40px glass hamburger that morphs into ×, plus a
// fixed full-height panel portalled to <body> (bg #F9F1F1 + paper texture) that fades in
// (spring, bounce 0, 0.1s) under MotionConfig {spring, bounce 0, 0.3s}. Body scroll is locked while open.
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import MaskIcon from '../shared/MaskIcon.jsx'
import { MOBILE_LINKS, MOBILE_SECTIONS } from './navData.js'

export function HamburgerButton({ open, onToggle }) {
  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <motion.button
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={onToggle}
        className="hamburger relative my-auto ml-auto mr-2 hidden aspect-square w-10 place-items-center rounded-round border-none bg-transparent p-0 tablet:grid"
        style={{ gridColumn: '3 / span 1', gridRow: 1, justifySelf: 'end' }}
        animate={open ? 'open' : 'base'}
        whileTap="tapped"
        variants={{
          base: { '--y': '0.175rem', '--r': '0deg' },
          tapped: { scale: 0.9, '--y': '0rem', '--r': '0deg' },
          open: { '--y': '0rem', '--r': '40deg' },
        }}
      >
        <motion.div
          className="absolute inset-0 z-[-1] rounded-[inherit] bg-glass shadow-glass-popover"
          variants={{ tapped: { scale: 0.92, opacity: 0.94 } }}
        />
        <div className="hamburger__bg absolute inset-0 z-[-1] rounded-[inherit] bg-fg-100" />
      </motion.button>
    </MotionConfig>
  )
}

function MobileRow({ item, onNavigate }) {
  return (
    <li>
      <a
        href={item.href}
        onClick={onNavigate}
        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex items-center justify-between pb-[12px] pl-[6.4px] pr-[11.2px] pt-[12px]"
      >
        <div className="flex items-center gap-2 text-fg-1200">
          {item.icon && <MaskIcon src={item.icon} size={item.iconSize} />}
          <span className="text-small text-ink-loud">{item.title}</span>
        </div>
        <MaskIcon src="/assets/svg/icons/nav/mobile-chevron.svg" size={16} className="-rotate-90 text-fg-1200" />
      </a>
    </li>
  )
}

export function MobileMenuPanel({ open, top, onClose }) {
  // body scroll lock (removeScrollBar in the original)
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // close if the viewport grows past the hamburger breakpoint
  useEffect(() => {
    if (!open) return
    const mq = window.matchMedia('(max-width: 1000px)')
    const onChange = (e) => !e.matches && onClose()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [open, onClose])

  return createPortal(
    <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="paper-texture layout-grid fixed inset-x-0 bottom-0 z-[2] overflow-y-auto bg-surface-400"
            style={{ top }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { type: 'spring', bounce: 0, duration: 0.1 } }}
            exit={{ opacity: 0 }}
          >
            <div className="margin-line-minor" data-side="left" style={{ gridRow: 1 }} />
            <nav aria-label="Main" className="relative" style={{ gridColumn: '2 / -2', gridRow: 1 }}>
              <ul className="list-none px-[9.6px] pb-[64px] pt-[32px]">
                {MOBILE_SECTIONS.map((section) => (
                  <li key={section.title}>
                    <div className="mb-1 pl-[6.4px] font-mono text-mobile-section-title uppercase text-ink-muted">
                      {section.title}
                    </div>
                    <ul className="mb-2 list-none border-b border-dashed border-grid-500 pb-2">
                      {section.items.map((item) => (
                        <MobileRow key={item.title} item={item} onNavigate={onClose} />
                      ))}
                    </ul>
                  </li>
                ))}
                {MOBILE_LINKS.map((item) => (
                  <MobileRow key={item.title} item={item} onNavigate={onClose} />
                ))}
              </ul>
            </nav>
            <div className="margin-line-minor" data-side="right" style={{ gridRow: 1 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>,
    document.body,
  )
}
