// Usage: <Ticker opacity={motionValue} y={motionValue} />  (header row 2, CLONE_SPEC §4.0.2 + §6.3)
// Announcement marquee: 4 items rendered 5× in a track that runs `ticker-scroll 56s linear infinite`
// (-20% = one copy) and pauses while any link inside is hovered/focused. Fades/slides out as the nav squishes.
import { motion } from 'framer-motion'
import MaskIcon from '../shared/MaskIcon.jsx'
import { TICKER_ITEMS } from './navData.js'

const COPIES = 5

function TickerItem({ item, hidden = false }) {
  return (
    <a
      href={item.href}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className="flex items-center whitespace-nowrap rounded-ticker px-2 font-mono text-ticker transition-[background-color] duration-link ease-linear hover:bg-fg-200"
    >
      <span className={hidden ? 'emoji-glyph' : undefined}>{item.emoji}</span>
      {' '}
      <span className="text-ink-loud">{item.title}</span>
      {' '}
      {item.text}
      <span className="ml-1 grid aspect-square w-[1.25em] place-items-center rounded-[9999px] text-fg-a-1100">
        <MaskIcon src="/assets/svg/icons/ticker-arrow.svg" width={10} height={7} />
      </span>
    </a>
  )
}

export default function Ticker({ opacity, y }) {
  return (
    <div className="paper-texture layout-subgrid grid-pile relative self-start bg-fg-100">
      <div className="margin-line-minor" data-side="left" />
      <motion.div
        role="group"
        aria-label="Announcements"
        className="relative grid overflow-hidden bg-fg-400 bg-ticker shadow-ticker-inset [isolation:isolate]"
        style={{ opacity, y }}
      >
        <div role="marquee" aria-label="announcements" className="relative z-[1] flex overflow-hidden">
          <div className="sr-only">
            {TICKER_ITEMS.map((item) => (
              <TickerItem key={item.href + item.title} item={item} />
            ))}
          </div>
          <div aria-hidden="true" tabIndex={-1} className="ticker-track">
            {Array.from({ length: COPIES }, (_, copy) => (
              <span key={copy} className="flex whitespace-nowrap">
                <span className="flex gap-4 py-1 pl-0 pr-4">
                  {TICKER_ITEMS.map((item) => (
                    <TickerItem key={item.href + item.title} item={item} hidden />
                  ))}
                </span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="margin-line-minor" data-side="right" />
    </div>
  )
}
