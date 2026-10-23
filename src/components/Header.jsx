// Usage: <Header />  (render once, outside the page content; it is position:fixed)
// CLONE_SPEC §4.0 + §6.1. Three stacked rows on the 14-col grid: 20px top grid row, announcement ticker,
// and the nav. When scrollY ≥ 40 (or the mobile menu is open) a spring (bounce 0, 400ms) "squishes" the nav
// up over the ticker and fades in the shadow, bottom border, margin borders and corner accents.
import { useCallback, useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import Button from './shared/Button.jsx'
import MaskIcon from './shared/MaskIcon.jsx'
import Ticker from './header/Ticker.jsx'
import { MegaMenuProvider, MegaMenuViewport, MenuTrigger } from './header/MegaMenu.jsx'
import { HamburgerButton, MobileMenuPanel } from './header/MobileNav.jsx'
import { LEFT_NAV, LOGIN_HREF, RIGHT_NAV, SIGNUP_HREF } from './header/navData.js'

const SQUISH_SCROLL_Y = 40
const TICKER_HEIGHT = 26.85 // px, Header__TickerWrapper
const MOBILE_NAV_ROW = 56
const ACCENTS = ['tl', 'tr', 'br', 'bl']

function useIsNarrow(query) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])
  return matches
}

function NavLinkItem({ item }) {
  return (
    <li className="relative font-normal leading-none text-ink-loud">
      {item.menu ? (
        <MenuTrigger menu={item.menu} />
      ) : (
        <a
          href={item.href}
          className="relative flex items-center whitespace-nowrap rounded-nav-item px-[0.85rem] py-[0.6rem] font-sans text-nav font-normal text-ink-loud transition-none hover:bg-fg-a-500 focus-visible:bg-fg-a-500"
        >
          {item.title}
        </a>
      )}
    </li>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const smallTopRow = useIsNarrow('(max-width: 450px)')

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v >= SQUISH_SCROLL_Y))
  useEffect(() => setScrolled(window.scrollY >= SQUISH_SCROLL_Y), [])

  const squished = scrolled || mobileOpen
  const progress = useSpring(squished ? 1 : 0, { bounce: 0, duration: 400 })
  useEffect(() => {
    progress.set(squished ? 1 : 0)
  }, [squished, progress])

  // §6.1 driven values
  const wrapperY = useTransform(progress, [0, 1], [TICKER_HEIGHT, 0])
  const innerY = useTransform(progress, [0, 1], ['1.25rem', '0rem'])
  const viewportTransform = useTransform(progress, () => `translateY(calc(${innerY.get()} + ${wrapperY.get()}px))`)
  const tickerOpacity = useTransform(progress, [0, 1], [1, 0])
  const tickerY = useTransform(progress, [0, 1], ['0rem', '0.5rem'])
  const stop1 = useTransform(progress, [0, 1], ['rgba(0, 0, 0, 0.48)', 'rgba(0, 0, 0, 1)'])
  const stop2 = useTransform(progress, [0, 1], ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)'])
  const accentProgress = useTransform(progress, [0, 1], [-1, 0.5])

  const closeMobile = useCallback(() => setMobileOpen(false), [])
  // panel sits under the squished nav: top row + 56px nav row − 2px (MobileNav inset `${t + n - 2}px 0 0 0`)
  const mobilePanelTop = (smallTopRow ? 12 : 20) + MOBILE_NAV_ROW - 2

  return (
    <div className="layout-grid fixed inset-x-0 top-0 z-[3]">
      {/* Row 1: top grid row (Header__TopGridLines) */}
      <div className="paper-texture layout-subgrid relative h-header-row bg-fg-100 phone-sm:h-header-row-mobile" aria-hidden="true">
        <div className="margin-line-minor" data-side="left" style={{ gridRow: 1 }} />
        <div className="border-l border-grid-300" style={{ gridColumn: '5 / span 1', gridRow: 1 }} />
        <div className="border-l border-grid-300" style={{ gridColumn: '11 / span 1', gridRow: 1 }} />
        <div className="margin-line-minor" data-side="right" style={{ gridRow: 1 }} />
      </div>

      <header className="layout-subgrid font-sans text-small text-ink">
        {/* Row 2: ticker */}
        <Ticker opacity={tickerOpacity} y={tickerY} />

        {/* Row 3: nav (piled over the ticker row, pushed down by the ticker height at rest) */}
        <div className="layout-subgrid grid-pile">
          <MegaMenuProvider>
            <nav aria-label="Main" className="layout-subgrid">
              <motion.div className="layout-subgrid relative [isolation:isolate]" style={{ y: wrapperY }}>
                {/* Nav__NavWrapper::after: 1px rule across the content column */}
                <div className="h-px self-start bg-grid-500" style={{ gridRow: 1 }} />

                {/* Nav__Background */}
                <div className="layout-subgrid grid-pile relative z-[-1] self-stretch">
                  <div className="z-[1] self-stretch border-r border-t border-r-grid-500 border-t-grid-300" style={{ gridColumn: 1, gridRow: 1 }} />
                  <motion.div className="nav-bg" style={{ gridColumn: '1 / -1', '--stop-1': stop1, '--stop-2': stop2 }} />
                  <div className="z-[1] self-stretch border-l border-t border-l-grid-500 border-t-grid-300" style={{ gridColumn: '-2 / span 1', gridRow: 1 }} />
                </div>

                <motion.div className="layout-subgrid grid-pile" style={{ y: innerY }}>
                  <motion.div
                    className="nav-shadow pointer-events-none relative z-[3] h-full w-full overflow-x-clip"
                    style={{ gridColumn: '1 / -1', gridRow: 1, opacity: progress }}
                  />
                  <div className="layout-subgrid grid-pile">
                    <motion.div className="h-px self-end bg-grid-300" style={{ gridColumn: 1, gridRow: 1, opacity: progress }} />

                    {/* Nav__NavigationRootEl */}
                    <div
                      className="relative grid items-center py-3 tablet:py-2"
                      style={{ gridTemplateColumns: '1fr max-content 1fr', gridRow: 1 }}
                    >
                      <div className="relative tablet:hidden" style={{ gridColumn: 1, gridRow: 1 }}>
                        <ul className="flex list-none justify-end gap-0 pr-[2.25rem]">
                          {LEFT_NAV.map((item) => (
                            <NavLinkItem key={item.menu ?? item.title} item={item} />
                          ))}
                        </ul>
                      </div>

                      <a
                        href="/"
                        aria-label="Hex home"
                        className="w-16 text-fg-1200 transition-[background-color] duration-link ease-linear [grid-column:2/span_1] tablet:ml-[0.9rem] tablet:[grid-column:1/span_1]"
                        style={{ gridRow: 1 }}
                      >
                        <MaskIcon src="/assets/svg/logo/hex-logo-nav.svg" width="100%" height="auto" className="aspect-[52/20] will-change-transform" />
                      </a>

                      <div className="relative tablet:hidden" style={{ gridColumn: 3, gridRow: 1 }}>
                        <ul className="flex list-none items-center justify-start gap-0 pl-[1.75rem]">
                          {RIGHT_NAV.map((item) => (
                            <NavLinkItem key={item.menu ?? item.title} item={item} />
                          ))}
                          <li>
                            <a
                              href={LOGIN_HREF}
                              rel="noopener noreferrer"
                              className="relative whitespace-nowrap rounded-nav-item px-[0.75rem] py-[0.6rem] text-nav font-normal text-fg-1200 transition-[background-color] duration-200 ease-[ease] hover:bg-fg-a-500 focus-visible:bg-fg-a-500"
                            >
                              Log In
                            </a>
                          </li>
                          <li>
                            <Button variant="primary" size="nav" href={SIGNUP_HREF} external className="ml-3">
                              Get started
                            </Button>
                          </li>
                        </ul>
                      </div>

                      <HamburgerButton open={mobileOpen} onToggle={() => setMobileOpen((o) => !o)} />

                      {/* Nav__NavRootBorder */}
                      <motion.div
                        className="absolute inset-x-0 bottom-0 h-px bg-grid-500"
                        style={{ scaleX: progress, opacity: progress }}
                      />
                    </div>

                    <motion.div className="h-px self-end bg-grid-300" style={{ gridColumn: -2, gridRow: 1, opacity: progress }} />
                  </div>
                </motion.div>

                {/* Accent__LContainer ×4 at the nav row corners */}
                {ACCENTS.map((pos) => (
                  <motion.div
                    key={pos}
                    className="nav-accent"
                    data-position={pos}
                    style={{ '--progress': accentProgress }}
                    aria-hidden="true"
                  >
                    <motion.div className="nav-accent__v" style={{ opacity: progress }} />
                    <motion.div className="nav-accent__h" style={{ opacity: progress }} />
                  </motion.div>
                ))}
              </motion.div>

              {/* mega-menu viewport follows the nav's vertical offset */}
              <motion.div className="relative" style={{ transform: viewportTransform, gridColumn: '1 / -1' }}>
                <MegaMenuViewport />
              </motion.div>
            </nav>
          </MegaMenuProvider>
        </div>
      </header>

      <MobileMenuPanel open={mobileOpen} top={mobilePanelTop} onClose={closeMobile} />
    </div>
  )
}
