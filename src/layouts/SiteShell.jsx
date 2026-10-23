// Shared frame for every route: page wrapper, fixed Header, routed page, 2rem bottom grid row (CLONE_SPEC §1.1).
// Same-origin <a href="/..."> clicks are routed client-side, so components keep plain hrefs.
// Route options (src/routes.jsx): `theme` ('light' | 'dark') is set as data-theme on the page wrapper and on
// <html> (so portalled UI follows); `layout: 'standalone'` drops the Header and bottom grid row (the page
// supplies its own shell, e.g. /state-of-data-teams/).
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { Outlet, matchRoutes, useLocation, useNavigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Header from '../components/Header.jsx'
import { LayoutGrid } from '../components/shared/LayoutGrid.jsx'
import { ThemeContext } from '../theme/Theme.jsx'
import { routes } from '../routes.jsx'

// §1.1: 2rem row under the footer with minor margin lines and rules at grid lines 5 and 11 (x≈374 / 1065 @1440)
function BottomGridRow() {
  return (
    <LayoutGrid className="h-8" aria-hidden="true">
      <div className="margin-line-minor" data-side="left" style={{ gridRow: 1 }} />
      <div className="border-l border-grid-300" style={{ gridColumn: '5 / span 1', gridRow: 1 }} />
      <div className="border-l border-grid-300" style={{ gridColumn: '11 / span 1', gridRow: 1 }} />
      <div className="margin-line-minor" data-side="right" style={{ gridRow: 1 }} />
    </LayoutGrid>
  )
}

function useInternalLinkRouting() {
  const navigate = useNavigate()
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest?.('a[href]')
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return
      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (/\.(pdf|png|jpe?g|svg|zip)$/i.test(url.pathname)) return
      if (url.pathname === window.location.pathname && url.hash) return
      e.preventDefault()
      navigate(url.pathname + url.search + url.hash)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])
}

function ScrollToTopOnRoute() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function useRouteOptions() {
  const location = useLocation()
  const matches = matchRoutes(routes, location) ?? []
  const route = matches[matches.length - 1]?.route ?? {}
  return { theme: route.theme ?? 'light', layout: route.layout ?? 'site' }
}

export default function SiteShell() {
  useInternalLinkRouting()
  const { theme, layout } = useRouteOptions()

  // <html> carries the theme too, so portals (mobile menu, cursors) and the body read the same vars
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <MotionConfig reducedMotion="user">
      <ThemeContext.Provider value={theme}>
        <ScrollToTopOnRoute />
        {layout === 'standalone' ? (
          <div data-theme={theme} data-layout="standalone" className="relative min-h-screen">
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        ) : (
          <div data-theme={theme} className="paper-texture relative min-h-screen bg-fg-100 text-ink">
            <Header />
            <main>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
              <BottomGridRow />
            </main>
          </div>
        )}
      </ThemeContext.Provider>
    </MotionConfig>
  )
}
