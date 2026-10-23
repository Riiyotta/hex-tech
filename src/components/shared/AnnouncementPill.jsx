// Usage: <AnnouncementPill icon="/assets/svg/icons/nav/hex-cli.svg" label="The Hex CLI" text="Read the announcement" href="/blog/introducing-the-hex-cli/" />
// product §2.2 N1 hero eyebrow link (bi, cli, context-studio, data-apps, notebooks, capability-ai).
// <a>: flex / items-center / gap 12 / padding 2 / 1px --grid500 border / radius 999 / bg color-mix(fg100 50%) /
// overflow clip / width fit-content / colour --fg1200 / transition background-color .1s linear (≈ 300–360×37).
// Inner pill: inline-flex / gap 8 / padding 8px 14px / radius 999 / bg --fg100 / blur(3px) / highlight 20%+40%
// hairline + 2 drop shadows; 15px product icon (nav icon SVG, MaskIcon, --fg1200) + label Cinetype 12px/1 700 (inherits --fg1200).
// Text: flex / gap 5 / pr 10 / 12px 300 / line-height 1 / --fg1200, then a 16px chevron-right.
// Hover: ::before shine (backdrop brightness 1.6 saturate 2 through a 70° stripe mask) runs
// announcement-pill-shine 1s cubic-bezier(.25,.1,.25,1) both.
// Props: href, icon (nav icon SVG URL → 15px MaskIcon in --fg1200, or an inline SVG node → AnnouncementPillLink__IconPill:
//   16×16, display block, currentColor = the pill's --fg1200; capability-ai), label, text, external, className.
import MaskIcon from './MaskIcon.jsx'

export default function AnnouncementPill({ href, icon, label, text, external = false, className = '' }) {
  return (
    <a
      href={href}
      className={`announcement-pill ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="announcement-pill__inner">
        {typeof icon === 'string' ? (
          <MaskIcon src={icon} size={15} className="text-fg-1200" />
        ) : (
          icon && <span className="announcement-pill__icon">{icon}</span>
        )}
        <span className="text-[12px] font-bold leading-none">{label}</span>
      </span>
      <span className="flex items-center gap-[5px] pr-[10px] text-[12px] font-light leading-none text-fg-1200">
        <span>{text}</span>
        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" aria-hidden="true">
          <path
            clipRule="evenodd"
            d="M9.11611 8.00001L5.46967 11.6465L6.17677 12.3536L10.5303 8.00001L6.17677 3.64645L5.46967 4.35356L9.11611 8.00001Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </span>
    </a>
  )
}
