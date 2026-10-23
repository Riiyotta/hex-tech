// Placeholder for internal routes that haven't been built yet (and the 404 fallback).
import { useLocation } from 'react-router-dom'
import { ContentSection } from '../components/shared/LayoutGrid.jsx'
import Footer from '../components/sections/Footer.jsx'
import Button from '../components/shared/Button.jsx'

export default function PagePending() {
  const { pathname } = useLocation()
  return (
    <ContentSection bordered>
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-[160px] text-center">
        <p className="font-mono text-label uppercase text-ink-muted">{pathname}</p>
        <h1 className="gradient-heading font-display text-heading-2">This page is still being built.</h1>
        <Button variant="secondary" size="md" href="/">Back to home</Button>
      </section>
      <Footer />
    </ContentSection>
  )
}
