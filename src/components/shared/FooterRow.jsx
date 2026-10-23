// Usage: <FooterRow />  ·  <FooterRow variant="checkered" />  ·  <V1PageLayout footer>…</V1PageLayout> (renders a FooterRow)
// The row that holds the site Footer at the bottom of a page (the Footer draws its own top rule + Reveal).
// variant 'lines' (default): live GridLines__ContentMarginLine footer row on every V1 / dark page and pricing
//   (measured threads, data-apps, blog, pricing, events @1440): its own LayoutGrid after the page grid, so V1 column
//   rules stop above it; margin cells with a 1px --grid300 top + bottom rule and the 1px --grid500 inner rule.
// variant 'checkered': ContentSection (checkered margins), as on the homepage and the light company pages.
// Props: variant, children (defaults to <Footer />).
import Footer from '../sections/Footer.jsx'
import { ContentSection, LayoutGrid } from './LayoutGrid.jsx'

export default function FooterRow({ variant = 'lines', children }) {
  const footer = children ?? <Footer />
  if (variant === 'checkered') return <ContentSection>{footer}</ContentSection>
  return (
    <LayoutGrid className="relative">
      <div className="footer-margin" data-side="left" aria-hidden="true" />
      <div className="min-w-0" style={{ gridColumn: '2 / -2', gridRow: 1 }}>
        {footer}
      </div>
      <div className="footer-margin" data-side="right" aria-hidden="true" />
    </LayoutGrid>
  )
}
