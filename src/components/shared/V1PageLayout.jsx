// Usage (as the page root, inside SiteShell's <main>):
//   <V1PageLayout footer> <V1Hero …/> … </V1PageLayout>
//   <V1PageLayout rules={false} grid={false} footer> … </V1PageLayout>      (pricing / request-a-demo / contact-us frame)
// V1PageWrapper (product §1.5, solutions §1.3, company §3.2): used by product data-apps / embedded-analytics /
// exploratory-analysis / integrations index + 17 integration details, the 5 /solutions/<slug>/ pages, and company
// events / guides / templates. A LayoutGrid with three piled full-height layers:
//   1. GridLines__GridRule: 1px rules in --grid300 (#E9E5E8 / #2B252C) at the right edge of outer grid columns
//      4, 7 and 10 (x = 374 / 720 / 1065 @1440), translateX(.5px). Rules at 4 and 10 are
//      V1PageWrapper__ResponsiveGridRule: hidden ≤450 (solutions CSS; see SHARED_BUILT.md conflicts).
//      `rules={false}` drops them (pricing / form pages: plain margin-line frame).
//   2. GridLines__ContentMarginLine in both margins: 1px inner rule in --grid500 + a 1px --grid300 tick every 160px
//      (no checkered margins on these pages).
//   3. V1Subgrid content column (grid-column 2/-2): padding-top 200px (144px ≤800), overflow-x clip, relative,
//      isolation isolate; a 12-col grid whose children span all columns (LayoutGrid__LayoutSubgrid[data-content-grid]).
//      `grid={false}` makes it a plain block column (pricing / forms).
// `footer` (true or a node): renders the page Footer in its own FooterRow after the V1 grid, as on live (the column
// rules and margin ticks stop above the footer row: live data-apps @1440 rules 0→9270, footer row 9270→9825).
// Props: className (content column), rules (true), grid (true), footer (false | true | node), children.
import { LayoutGrid } from './LayoutGrid.jsx'
import FooterRow from './FooterRow.jsx'

export default function V1PageLayout({ className = '', rules = true, grid = true, footer = false, children }) {
  const column = grid
    ? 'relative isolate grid min-w-0 grid-cols-12 overflow-x-clip pt-[200px] stack:pt-[144px] [&>*]:col-span-full'
    : 'relative isolate min-w-0 overflow-x-clip pt-[200px] stack:pt-[144px]'
  const layout = (
    <LayoutGrid className="relative" data-layout="v1">
      {rules && <div className="v1-grid-rule" data-responsive="" style={{ gridColumn: 4 }} aria-hidden="true" />}
      {rules && <div className="v1-grid-rule" style={{ gridColumn: 7 }} aria-hidden="true" />}
      {rules && <div className="v1-grid-rule" data-responsive="" style={{ gridColumn: 10 }} aria-hidden="true" />}
      <div className="v1-margin-line" data-side="left" aria-hidden="true" />
      <div className={`${column} ${className}`} style={{ gridColumn: '2 / -2', gridRow: 1 }}>
        {children}
      </div>
      <div className="v1-margin-line" data-side="right" aria-hidden="true" />
    </LayoutGrid>
  )
  if (!footer) return layout
  return (
    <>
      {layout}
      {footer === true ? <FooterRow /> : <FooterRow>{footer}</FooterRow>}
    </>
  )
}
