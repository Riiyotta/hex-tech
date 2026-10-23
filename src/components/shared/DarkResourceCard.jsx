// Usage:
//   <DarkResourceCard href="https://hex.tech/prompt/" external title="Prompt" cta="Register" image={{ src, alt, ratio: '2400 / 1260' }} />
//   <DarkResourceCard variant="template" href="/templates/…/" title="SQL Notebooks" tag="TEMPLATE" author="Izzy Miller · April 13, 2022" description="…" image={{ src, alt }} />
// The outline Card__Wrapper card (OutlineCard with corner accent, padding 10) used by:
//   company §3.3 P8 EventAndGuideCard (events, guides) + TemplatesCard (templates index),
//   product §2.2 N10 TemplateCard grid (data-apps / embedded / exploratory "Recommendations__Grid", notebooks
//   UseCasePreviewGrid). Theme-driven border/hover (15% → 30% + 10% fill).
// variant 'event' (default): figure (bg highlight 5%, overflow hidden, aspect-ratio = image.ratio, centred) with the
//   image cover → copy (padding 15, flex col, flex 1 1 0%): H4 PP Formula 700 28/36.4 -0.7px loud (mb 20) → footer row
//   (flex, space-between, items-center, full width, margin-top auto so it sits at the bottom; 20px / 31.42px): optional
//   `footer` node (nothing is rendered without one, so the CTA sits bottom-left) + CTA span (1px underline, hover .8).
// variant 'template': preview box (relative, overflow hidden, height 220) with the image absolutely covering it and
//   an optional tag bottom-right (IBM Plex Mono 700 12/18.852 ls 1px, padding 6px 10px, bg --fg100) → info
//   (padding 15px 5px 5px, flex col filling the card): H4 heading-4 loud (mb 6) → optional author → description 16/24 300.
//   authorStyle 'muted' (default: product TemplateCard sharedStyles__Author, 16/25.136 400 --fontColorMUTED, mb 10) |
//   'text' (company /templates/ TemplatesCard Text: 14/21.994 300 --fontColorDEFAULT at .8, mb 6).
// Props: variant, href, external, title, image { src, alt, ratio }, cta, footer, tag, author, authorStyle, description,
//   className.
import OutlineCard from './OutlineCard.jsx'

export default function DarkResourceCard({
  variant = 'event',
  href,
  external = false,
  title,
  image,
  cta,
  footer,
  tag,
  author,
  authorStyle = 'muted',
  description,
  className = '',
}) {
  const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <div className={`flex ${className}`}>
      <a href={href} className="block flex-1" {...linkProps}>
        <OutlineCard accent className="flex h-full cursor-default flex-col items-start p-[10px] text-left">
          {variant === 'template' ? (
            <>
              <div className="relative h-[220px] w-full overflow-hidden">
                {image && <img src={image.src} alt={image.alt ?? ''} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />}
                {tag && (
                  <span className="absolute bottom-0 right-0 bg-fg-100 px-[10px] py-[6px] font-plex-mono text-[12px] font-bold leading-[18.852px] tracking-[1px]">
                    {tag}
                  </span>
                )}
              </div>
              <div className="flex w-full flex-auto flex-col px-[5px] pb-[5px] pt-[15px]">
                <h4 className="m-0 mb-[6px] font-formula text-heading-4 font-semibold text-ink-loud">{title}</h4>
                {author && (
                  <p
                    className={
                      authorStyle === 'text'
                        ? 'm-0 mb-[6px] text-small font-light text-ink opacity-80'
                        : 'm-0 mb-[10px] text-[16px] leading-[25.136px] text-ink-muted'
                    }
                  >
                    {author}
                  </p>
                )}
                {description && <p className="m-0 text-body font-light text-ink">{description}</p>}
              </div>
            </>
          ) : (
            <>
              <figure
                className="m-0 flex w-full items-center justify-center overflow-hidden bg-highlight/5"
                style={image?.ratio ? { aspectRatio: image.ratio } : undefined}
              >
                {image && <img src={image.src} alt={image.alt ?? ''} loading="lazy" className="h-full w-full object-cover" />}
              </figure>
              <div className="flex w-full flex-[1_1_0%] flex-col p-[15px]">
                <h4 className="m-0 mb-[20px] font-formula text-[28px] font-bold leading-[36.4px] tracking-[-0.7px] text-ink-loud">{title}</h4>
                <div className="mt-auto flex w-full items-center justify-between text-[20px] leading-[31.42px]">
                  {footer || null}
                  {cta && <span className="resource-tile__cta">{cta}</span>}
                </div>
              </div>
            </>
          )}
        </OutlineCard>
      </a>
    </div>
  )
}
