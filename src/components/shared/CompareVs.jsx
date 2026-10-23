// Usage: <CompareVs />  (vertical "HEX vs." panel, solutions §4.5.1 CompareHero)
//        <CompareVs layout="horizontal" />  (product §4.1 #5 BIResources)
// The live CompareVs CSS module, used by both families: flex col / items-center / gap 24 / padding 32,
// 1px dashed --borderColorSTRONG (#AFA9B1 light, #6A565B dark) over --texture-hatch-img (45° 1px hatch every 6px).
// Logo row (gap 10): Hex wordmark 20px tall in --fg1200 + "vs." PP Editorial New 200 italic 31px / 20px, loud,
// height 20 / padding-bottom 2 / items-end. Grid of competitor cards: each a link (aria-label "Compare Hex to X")
// → interactive GlassCard (padding 30, centred) with the competitor wordmark (32px tall, theme logo filter)
// and a 15px arrow-top-right in --fg1200 at top/right 10.
//   layout 'vertical' (default): wrapper flex 1 1 auto / height 100%; cards stacked (gap 16); ≤1250 wrapper
//     full width + cards in a row; ≤800 stacked again.
//   layout 'horizontal': wrapper width 100%; grid repeat(4, minmax(0,1fr)) gap 16; ≤1000 2 cols; ≤600 1 col.
// Props: layout, items (default COMPARE_ITEMS), className.
import GlassCard from './GlassCard.jsx'
import MaskIcon from './MaskIcon.jsx'
import { ArrowTopRightIcon } from './Icons.jsx'
import { LOGO_GRAYSCALE_CLASS } from './LogoFilter.jsx'

export const COMPARE_ITEMS = [
  { name: 'Looker', href: '/compare/looker-vs-hex/', logo: '/assets/pages/compare/looker.svg', ratio: '715 / 190' },
  { name: 'Omni', href: '/compare/omni-vs-hex/', logo: '/assets/pages/compare/omni.svg', ratio: '268 / 106' },
  { name: 'Sigma', href: '/compare/sigma-vs-hex/', logo: '/assets/pages/compare/sigma.svg', ratio: '69 / 22' },
  { name: 'Tableau', href: '/compare/tableau-vs-hex/', logo: '/assets/pages/compare/tableau.svg', ratio: '482 / 98' },
]

export default function CompareVs({ layout = 'vertical', items = COMPARE_ITEMS, className = '' }) {
  const horizontal = layout === 'horizontal'
  return (
    <div
      className={`flex flex-col items-center gap-[24px] border border-dashed border-line-strong bg-hatch p-[32px] ${
        horizontal ? 'h-auto w-full' : 'h-full flex-auto laptop:h-auto laptop:w-full'
      } ${className}`}
    >
      <div className="flex items-center gap-[10px]">
        <MaskIcon src="/assets/svg/logo/hex-logo-nav.svg" width={52} height={20} className="text-fg-1200" />
        <span className="flex h-[20px] items-end pb-[2px] font-editorial-heading text-[31px] font-[200] italic leading-[20px] text-ink-loud">
          vs.
        </span>
      </div>
      <div
        className={
          horizontal
            ? 'grid w-full flex-auto grid-cols-4 gap-[16px] tablet:grid-cols-2 phone:grid-cols-1'
            : 'flex w-full flex-auto flex-col gap-[16px] laptop:flex-row stack:flex-col'
        }
      >
        {items.map((item) => (
          <a key={item.href} href={item.href} aria-label={`Compare Hex to ${item.name}`} className="block w-full flex-auto">
            <GlassCard interactive className="w-full flex-auto items-center justify-center p-[30px]">
              <img src={item.logo} alt="" className={`h-[32px] w-auto ${LOGO_GRAYSCALE_CLASS}`} style={{ aspectRatio: item.ratio }} />
              <span className="absolute right-[10px] top-[10px] text-fg-1200">
                <ArrowTopRightIcon />
              </span>
            </GlassCard>
          </a>
        ))}
      </div>
    </div>
  )
}
