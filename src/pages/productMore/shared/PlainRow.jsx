// Full-bleed LayoutGrid row without checkered margins (product pages: V1-subgrid OutroTout, capability-ai
// sections placed directly in grid-column 2 / -2, footer row). `marginLines` draws the 1px --grid500 margin
// rules measured at x 28 / 1411 next to the footer (sampled rgb(63,54,61) on the reference screenshots).
import { LayoutGrid } from '../../../components/shared'

export default function PlainRow({ as = 'div', marginLines = false, className = '', contentClassName = '', children, ...rest }) {
  return (
    <LayoutGrid as={as} className={`relative ${className}`} {...rest}>
      {marginLines && <div className="border-r border-grid-500" style={{ gridColumn: 1, gridRow: '1 / -1' }} aria-hidden="true" />}
      <div className={`relative min-w-0 ${contentClassName}`} style={{ gridColumn: '2 / -2', gridRow: 1 }}>
        {children}
      </div>
      {marginLines && <div className="border-l border-grid-500" style={{ gridColumn: '-2 / span 1', gridRow: '1 / -1' }} aria-hidden="true" />}
    </LayoutGrid>
  )
}
