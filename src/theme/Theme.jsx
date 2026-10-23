// Theme layer (specs/product.md §1.1, solutions.md §1, company.md §3.1). Dark is a CSS-variable swap on
// identical markup: [data-theme="dark"] re-declares every token in src/index.css, and the Tailwind colour
// tokens read those vars, so existing classes (bg-fg-100, text-ink, border-grid-500, …) flip on their own.
//
// - Route level: set `theme: 'dark'` on the route in src/routes.jsx (SiteShell applies it to the page
//   wrapper and <html>, so portals such as the mobile menu follow).
// - Sub-region: <ThemeScope theme="light">…</ThemeScope> re-scopes a subtree (e.g. the light article slab
//   inside the dark blog-post page, company §4.5).
// - Read it: const theme = useTheme()  ('light' | 'dark').
import { createContext, useContext } from 'react'

export const ThemeContext = createContext('light')

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeScope({ theme, as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <ThemeContext.Provider value={theme}>
      <Tag data-theme={theme} className={className} {...rest}>
        {children}
      </Tag>
    </ThemeContext.Provider>
  )
}
