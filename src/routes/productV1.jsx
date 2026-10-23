// productV1 family (specs/product.md T2 §4.7–4.9, T3 §4.10, T4 §4.11, T5 §5). All dark.
// /product/integrations/athena/ and /redshift/ 301 to /product/integrations/aws/ on the live site → Navigate replace.
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const DataApps = lazy(() => import('../pages/productV1/DataApps.jsx'))
const EmbeddedAnalytics = lazy(() => import('../pages/productV1/EmbeddedAnalytics.jsx'))
const ExploratoryAnalysis = lazy(() => import('../pages/productV1/ExploratoryAnalysis.jsx'))
const SwitchingToHex = lazy(() => import('../pages/productV1/SwitchingToHex.jsx'))
const IntegrationsIndex = lazy(() => import('../pages/productV1/IntegrationsIndex.jsx'))
const IntegrationDetail = lazy(() => import('../pages/productV1/IntegrationDetail.jsx'))

export default [
  { path: 'product/data-apps', theme: 'dark', element: <DataApps /> },
  { path: 'product/embedded-analytics', theme: 'dark', element: <EmbeddedAnalytics /> },
  { path: 'capability/exploratory-analysis', theme: 'dark', element: <ExploratoryAnalysis /> },
  { path: 'product/integrations', theme: 'dark', element: <IntegrationsIndex /> },
  { path: 'product/switching-to-hex', theme: 'dark', element: <SwitchingToHex /> },
  { path: 'product/integrations/athena', theme: 'dark', element: <Navigate to="/product/integrations/aws/" replace /> },
  { path: 'product/integrations/redshift', theme: 'dark', element: <Navigate to="/product/integrations/aws/" replace /> },
  // One T5 template (airflow … trino + aws); other slugs render PagePending from inside the page.
  { path: 'product/integrations/:slug', theme: 'dark', element: <IntegrationDetail /> },
]
