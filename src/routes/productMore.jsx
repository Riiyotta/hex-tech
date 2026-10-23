// Routes for the productMore family (specs/product.md §4.4–4.6). All dark, site layout.
import { lazy } from 'react'

const ThreadsPage = lazy(() => import('../pages/productMore/threads/ThreadsPage.jsx'))
const NotebooksPage = lazy(() => import('../pages/productMore/notebooks/NotebooksPage.jsx'))
const CapabilityAiPage = lazy(() => import('../pages/productMore/ai/CapabilityAiPage.jsx'))

export default [
  { path: 'product/threads', theme: 'dark', element: <ThreadsPage /> },
  { path: 'product/notebooks', theme: 'dark', element: <NotebooksPage /> },
  { path: 'capability/ai', theme: 'dark', element: <CapabilityAiPage /> },
]
