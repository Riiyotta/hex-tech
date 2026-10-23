// Routes for one page family. Same shape as src/routes.jsx entries ({ path, theme, layout, element }).
// pricingForms: /pricing/ (T4, dark), /request-a-demo/ (T7, light), /contact-us/ (T7, dark). specs/solutions.md §4.4, §4.7.
import { lazy } from 'react'

const PricingPage = lazy(() => import('../pages/pricingForms/PricingPage.jsx'))
const FormPage = lazy(() => import('../pages/pricingForms/forms/FormPage.jsx'))

export default [
  { path: 'pricing', theme: 'dark', element: <PricingPage /> },
  {
    path: 'request-a-demo',
    theme: 'light',
    element: (
      <FormPage
        title="Get a demo | Hex"
        heading="Get a demo"
        lead="We'll chat about how Hex fits into your stack and delivers trusted answers, grounded in your company's context."
        formId="request-a-demo-form"
      />
    ),
  },
  {
    path: 'contact-us',
    theme: 'dark',
    element: (
      <FormPage
        title="Get in touch | Hex"
        heading="Get in touch"
        lead="Thanks for your interest in Hex. Fill out this form and our team will reach out to you as soon as we can."
        formId="contact-us-form"
      />
    ),
  },
]
