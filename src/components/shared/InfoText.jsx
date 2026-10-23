// Usage: <InfoText icon={<img src="/assets/svg/marks/infotext-icon-2.svg" alt="" />} title="Ground every answer…" cta={{ label: 'Explore the Context Engine', href: '/product/context-studio/' }} />
// CLONE_SPEC §3.2: flex column, gap 20px, items start → icon (60×60 mark or 160×50 logo stack) → H3 (heading-3, loud) → primary button (40px).
//
// Extension props (defaults render exactly as before):
//   description  string | node. InfoText__Description: P 16/24 300 between the heading and the CTA (gap 20 kept);
//                20/30 at size="h2" (product §2.1 R-InfoText, V1TwoUp N10). Strings are wrapped in a <p>; nodes
//                (several paragraphs, links) are rendered inside a flex column with the same type.
//   size         'h3' (default: heading-3 28/36.4 PP Formula 800) | 'h2' (heading-2 40/52, ls -1px: V1 TwoUp pages).
//   cta          { label, href, external, variant: 'primary' (default) | 'secondary', size: 'md' (default), icon, corners }.
//                Most product pages use variant 'secondary' (product §2.1). Omit for no CTA (company §4.10 podcasts).
//   eyebrow      node rendered above the icon (V1TwoUp "BUILD"/"CUSTOMIZE" H6 eyebrows; the caller styles it).
//   headingClassName  extra classes on the heading (e.g. '[text-wrap:balance]' on the BI feature headings).
//   cta.external also opens in a new tab (Button external).
import Button from './Button.jsx'

const HEADING = {
  h3: 'm-0 font-formula text-heading-3 font-[800] text-ink-loud',
  h2: 'm-0 font-formula text-heading-2 font-[800] text-ink-loud',
}
const DESCRIPTION = {
  h3: 'text-body font-light text-ink',
  h2: 'text-lead-l font-light text-ink',
}

export default function InfoText({
  icon,
  eyebrow,
  title,
  description,
  cta,
  size = 'h3',
  headingAs: Heading = size === 'h2' ? 'h2' : 'h3',
  className = '',
  headingClassName = '',
}) {
  return (
    <div className={`flex flex-col items-start gap-[20px] ${className}`}>
      {eyebrow}
      {icon}
      <Heading className={headingClassName ? `${HEADING[size]} ${headingClassName}` : HEADING[size]}>{title}</Heading>
      {description != null &&
        (typeof description === 'string' ? (
          <p className={`m-0 ${DESCRIPTION[size]}`}>{description}</p>
        ) : (
          <div className={`flex flex-col gap-[20px] ${DESCRIPTION[size]} [&_p]:m-0`}>{description}</div>
        ))}
      {cta && (
        <Button
          variant={cta.variant ?? 'primary'}
          size={cta.size ?? 'md'}
          href={cta.href}
          external={cta.external}
          icon={cta.icon}
          corners={cta.corners}
        >
          {cta.label}
        </Button>
      )}
    </div>
  )
}
