// Usage: <BasicPageRow bordered>…section…</BasicPageRow>   ·   <BasicPageRow inner="full" reveal={false}>…hero…</BasicPageRow>
// BasicPageRow (product §1.4, company §3.2): a ContentSection row (checkered margins, overflow-x clip) with an
// optional 1px --grid500 top border, wrapping one of the live inner variants:
//   inner 'padded' (default, BasicPageRow__Inner xEjAC): flex col / items-center / justify-center, max-width 1240,
//     width 100%, padding 80px 40px, centred; ≤800 padding 60px 12px; ≤600 40px 12px. The 12px inline inset is the
//     live LayoutGridCondensed content column (grid-column 2/-2 of a 12px-padded grid) that the inner sits in; it
//     only shows once the inner's own 40px padding drops at ≤800 (live compare @390: inner x 20 / 350 wide).
//   inner 'full' (gNGsjY / fbJCiD): same flex, no max-width, no padding.
//   inner 'none': children placed directly in the content column.
// reveal (default true): the inner is a SimpleFadeIn Reveal (opacity 0, y 5 → 1, 0; spring .2s delay / .45s).
//   Pass reveal={false} for first rows (BasicPageRow__InnerStatic).
// Props: bordered, inner, reveal, className (inner), rowClassName (ContentSection), as (inner tag for Reveal), children.
import { ContentSection } from './LayoutGrid.jsx'
import Reveal from './Reveal.jsx'

const INNER = {
  padded: 'flex w-full max-w-section flex-col items-center justify-center self-center justify-self-center mx-auto px-[40px] py-[80px] stack:px-[12px] stack:py-[60px] phone:py-[40px]',
  full: 'flex w-full flex-col items-center justify-center',
}

export default function BasicPageRow({ bordered = false, inner = 'padded', reveal = true, as = 'div', className = '', rowClassName = '', children }) {
  if (inner === 'none') {
    return (
      <ContentSection bordered={bordered} className={rowClassName}>
        {children}
      </ContentSection>
    )
  }
  const cls = `${INNER[inner]} ${className}`
  return (
    <ContentSection bordered={bordered} className={rowClassName}>
      {reveal ? (
        <Reveal as={as} className={cls}>
          {children}
        </Reveal>
      ) : (
        <div className={cls}>{children}</div>
      )}
    </ContentSection>
  )
}
