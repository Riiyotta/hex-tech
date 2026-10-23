// Routes for one page family. Same shape as src/routes.jsx entries ({ path, theme, layout, element }).
// companyResources (specs/company.md §4.8–4.11): events, guides, templates, AI analytics guide, State of Data Teams.
import { lazy } from 'react'

const EventsPage = lazy(() => import('../pages/companyResources/EventsPage.jsx'))
const GuidesPage = lazy(() => import('../pages/companyResources/GuidesPage.jsx'))
const TemplatesPage = lazy(() => import('../pages/companyResources/TemplatesPage.jsx'))
const AiAnalyticsGuidePage = lazy(() => import('../pages/companyResources/AiAnalyticsGuidePage.jsx'))
const StateOfDataTeamsPage = lazy(() => import('../pages/companyResources/StateOfDataTeamsPage.jsx'))

export default [
  { path: 'resources/events', theme: 'dark', element: <EventsPage /> },
  { path: 'resources/guides', theme: 'dark', element: <GuidesPage /> },
  { path: 'resources/guides/ai-analytics', theme: 'light', element: <AiAnalyticsGuidePage /> },
  { path: 'templates', theme: 'dark', element: <TemplatesPage /> },
  { path: 'state-of-data-teams', theme: 'light', layout: 'standalone', element: <StateOfDataTeamsPage /> },
]
