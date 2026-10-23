// Solutions family routes (specs/solutions.md T1, T2, T3, T5, T6). All dark. Same shape as src/routes.jsx entries.
import { lazy } from 'react'

const SolutionsHub = lazy(() => import('../pages/solutions/SolutionsHub.jsx'))
const SolutionDetail = lazy(() => import('../pages/solutions/SolutionDetail.jsx'))
const Enterprise = lazy(() => import('../pages/solutions/Enterprise.jsx'))
const Compare = lazy(() => import('../pages/solutions/Compare.jsx'))
const Partners = lazy(() => import('../pages/solutions/Partners.jsx'))

const SOLUTION_SLUGS = ['data-leaders', 'customer-success', 'marketing', 'product-analytics', 'sales-analytics']

export default [
  { path: 'solutions', theme: 'dark', element: <SolutionsHub /> },
  ...SOLUTION_SLUGS.map((slug) => ({ path: `solutions/${slug}`, theme: 'dark', element: <SolutionDetail slug={slug} /> })),
  { path: 'enterprise', theme: 'dark', element: <Enterprise /> },
  { path: 'compare', theme: 'dark', element: <Compare /> },
  { path: 'partners', theme: 'dark', element: <Partners /> },
]
