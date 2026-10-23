// productCore family routes: /product/bi/ (light), /product/cli/ (dark), /product/context-studio/ (dark).
// Same shape as src/routes.jsx entries ({ path, theme, layout, element }).
import { lazy } from 'react'

const ProductBi = lazy(() => import('../pages/productCore/bi/ProductBi.jsx'))
const ProductContextStudio = lazy(() => import('../pages/productCore/contextStudio/ProductContextStudio.jsx'))
const ProductCli = lazy(() => import('../pages/productCore/cli/ProductCli.jsx'))

export default [
  { path: 'product/bi', theme: 'light', element: <ProductBi /> },
  { path: 'product/cli', theme: 'dark', element: <ProductCli /> },
  { path: 'product/context-studio', theme: 'dark', element: <ProductContextStudio /> },
]
