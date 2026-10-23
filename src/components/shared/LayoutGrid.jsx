// Usage: <ContentSection>…sections 1–8…</ContentSection>  /  <ContentSection bordered>…sections 10–14…</ContentSection>
// CLONE_SPEC §1.1: 14-column outer grid (1fr + 12 × min(96%,1840px)/12 + 1fr). ContentSection adds the
// checkered side margins (2px #E8E4E6 checkerboard, 1px #DBD7DA inner border). `bordered` = the
// afterCustomerStories top border (1px #DBD7DA).

export function LayoutGrid({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`layout-grid ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export function ContentSection({ bordered = false, className = '', children, ...rest }) {
  return (
    <LayoutGrid className={`relative overflow-x-clip ${bordered ? 'border-t border-grid-500' : ''} ${className}`} {...rest}>
      <div className="checkered-margin" data-side="left" style={{ gridRow: '1 / -1' }} aria-hidden="true" />
      <div className="relative z-[1] min-w-0" style={{ gridColumn: '2 / -2', gridRow: 1 }}>
        {children}
      </div>
      <div className="checkered-margin" data-side="right" style={{ gridRow: '1 / -1' }} aria-hidden="true" />
    </LayoutGrid>
  )
}

export default LayoutGrid
