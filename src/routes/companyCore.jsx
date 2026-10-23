// companyCore family routes (specs/company.md T1–T7). Pages live in src/pages/companyCore/.
// Routes are registered as each page renders; unbuilt paths fall through to PagePending.
import { lazy } from 'react'

const AboutPage = lazy(() => import('../pages/companyCore/AboutPage.jsx'))
const CareersPage = lazy(() => import('../pages/companyCore/CareersPage.jsx'))
const NewsroomPage = lazy(() => import('../pages/companyCore/NewsroomPage.jsx'))
const BlogIndexPage = lazy(() => import('../pages/companyCore/BlogIndexPage.jsx'))
const BlogPostPage = lazy(() => import('../pages/companyCore/BlogPostPage.jsx'))
const CustomersPage = lazy(() => import('../pages/companyCore/CustomersPage.jsx'))
const CustomerStoryPage = lazy(() => import('../pages/companyCore/CustomerStoryPage.jsx'))

export default [
  { path: 'blog', theme: 'dark', element: <BlogIndexPage /> },
  { path: 'blog/introducing-generative-data-apps', theme: 'dark', element: <BlogPostPage /> },
  { path: 'customers', element: <CustomersPage /> },
  // One template for chime, figma, langchain, mercor, neo-financial, notion, ramp, stubhub; other slugs render PagePending.
  { path: 'customers/:slug', element: <CustomerStoryPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'careers', element: <CareersPage /> },
  { path: 'newsroom', element: <NewsroomPage /> },
]
