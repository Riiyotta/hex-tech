// Usage: <SocialTout><G2Card /><QuoteCard {...q} /></SocialTout>
//        <SocialTout><QuoteCard variant="bordered" {...q} /></SocialTout>             (solutions §4.2.4)
//        <SocialTout padding="none" inner="max-w-[816px]"><QuoteCard … /></SocialTout>  (product exploratory single quote)
// The quote-card row (solutions §4.2.4 sharedStyles__WrapperMotion / __Inner = product R-SocialTout):
// Reveal wrapper (relative, flex, grow, full width, margin 0 auto, padding 100px 40px; ≤800 60px 40px; ≤600 column,
// 60px 30px) → inner (flex row, items-center, gap 30, max-width 1240, margin 0 auto; ≤800 column).
// Cards inside size themselves (flex 1). The homepage LovedByTeams keeps its own wrapper (pt 40 inside the tout).
// Props: padding 'default' | 'none', inner (extra inner classes), className, children.
import Reveal from './Reveal.jsx'

export default function SocialTout({ padding = 'default', inner = '', className = '', children }) {
  const pad = padding === 'none' ? '' : 'px-[40px] py-[100px] stack:py-[60px] phone:px-[30px]'
  return (
    <Reveal className={`relative mx-auto flex w-full grow phone:flex-col ${pad} ${className}`}>
      <div className={`mx-auto flex max-w-section flex-row items-center gap-[30px] stack:flex-col ${inner}`}>{children}</div>
    </Reveal>
  )
}
