// Route table. Each page family adds its pages in src/routes/<family>.jsx; anything unlisted falls through to PagePending.
// Per-route options read by SiteShell (src/layouts/SiteShell.jsx):
//   theme:  'light' (default) | 'dark'   → data-theme on the page wrapper + <html> (specs/product.md §1.1)
//   layout: 'site' (default: fixed Header + 32px bottom grid row) | 'standalone' (no global header,
//           ticker, footer or bottom row: /state-of-data-teams/, company §4.11)
// Example: { path: 'product/cli', theme: 'dark', element: <ProductCli /> }
import { lazy } from 'react'
import Home from './pages/Home.jsx'
import PagePending from './pages/PagePending.jsx'
import productCoreRoutes from './routes/productCore.jsx'
import productMoreRoutes from './routes/productMore.jsx'
import productV1Routes from './routes/productV1.jsx'
import solutionsRoutes from './routes/solutions.jsx'
import pricingFormsRoutes from './routes/pricingForms.jsx'
import companyCoreRoutes from './routes/companyCore.jsx'
import companyResourcesRoutes from './routes/companyResources.jsx'

// DEV ONLY: theme test bench (/__theme-test). Not bundled in production builds.
const ThemeTest = import.meta.env.DEV ? lazy(() => import('./pages/__dev/ThemeTest.jsx')) : null

export const routes = [
  { index: true, element: <Home /> },
  ...(import.meta.env.DEV
    ? [
        { path: '__theme-test', theme: 'dark', element: <ThemeTest /> }, // DEV ONLY
        { path: '__theme-test/light', theme: 'light', element: <ThemeTest /> }, // DEV ONLY
      ]
    : []),
  ...productCoreRoutes,
  ...productMoreRoutes,
  ...productV1Routes,
  ...solutionsRoutes,
  ...pricingFormsRoutes,
  ...companyCoreRoutes,
  ...companyResourcesRoutes,
  { path: '*', element: <PagePending /> },
]
