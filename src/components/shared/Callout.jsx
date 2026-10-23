// Usage: <Callout icon="/assets/svg/icons/nav/docs.svg">Don't see what you're looking for? Drop us a line at <a href="mailto:partnerships@hex.tech">partnerships@hex.tech</a>.</Callout>
// Left-ruled tinted note with a 35px round icon badge straddling the rule. One component for:
//   company §3.3 P2 (careers scam notice, newsroom media kit, blog post body) and product §4.11 HeadingWithCallout.
// Box: padding 25px 35px, background color-mix(highlight 5%) (= rgba(49,38,59,.05) light), border-left 1px
// --callout-rule (#DBD7DA light / #F5C0C0 dark), Cinetype 300, body colour. size 'body' = 16/24 (newsroom, product),
// 'small' = 14/22 (careers). Badge: 35×35, absolute left -18 / top 21, round, bg --callout-badge-bg (#FFF / #01011B),
// border --callout-badge-border (#DBD7DA / #F5C0C0), 15px icon in --callout-icon (#473982 / #F5C0C0).
// Links inside: --callout-link (#473982 / #E3B2B3) with a 1px --fg1200 underline border.
// Props: icon (SVG URL, drawn with MaskIcon so it takes the icon colour) or iconNode (any node), size,
//   className (wrapper; e.g. 'max-w-[370px]' product, 'mb-[40px]' careers), children.
import MaskIcon from './MaskIcon.jsx'

export default function Callout({ icon, iconNode, size = 'body', className = '', children }) {
  return (
    <div className={`relative flex ${className}`}>
      <div
        className={`callout__box w-full px-[35px] py-[25px] font-light text-ink ${size === 'small' ? 'text-[14px] leading-[22px]' : 'text-body'}`}
      >
        {children}
      </div>
      {(icon || iconNode) && (
        <div className="callout__badge absolute left-[-18px] top-[21px] grid h-[35px] w-[35px] place-items-center rounded-round" aria-hidden="true">
          {iconNode ?? <MaskIcon src={icon} size={15} />}
        </div>
      )}
    </div>
  )
}
