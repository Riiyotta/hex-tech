// Usage: <DashedLineQuote before={'"'} emphasis="The ability to use Hex in any way we choose" after={' is valuable…"'} logo={{ src: '/assets/logos/customers/langchain.svg', alt: 'LangChain', maxWidth: 86 }} name="Nithin Bose." title="VP of Customer Engineering" />
// CLONE_SPEC §3.3. InlineQuote = figure (gap 20) → blockquote (icon column 15px + text 16/24 300 #14141C)
// → figcaption (grayscale logo + Cinetype Mono 12px author). DashedLineQuote adds the 1px dashed top
// border with padding 30px 70px / margin 0 -70px used in the feature sections.
import { LOGO_GRAYSCALE_CLASS } from './LogoFilter.jsx'

export function InlineQuote({ before = '', emphasis, after = '', children, logo, name, title, className = '' }) {
  return (
    <figure className={`m-0 flex flex-col gap-[20px] ${className}`}>
      <blockquote className="m-0 flex gap-[12px]">
        <div className="inline-quote__icon flex flex-col items-center gap-[5px] pt-[5px]">
          <span
            className="mask-icon h-[15px] w-[15px] text-ink-muted"
            style={{ '--icon': 'url(/assets/svg/icons/quote-mark.svg)' }}
            aria-hidden="true"
          />
        </div>
        <p className="m-0 text-body font-light text-ink-loud">
          {children ?? (
            <>
              {before}
              {emphasis && <span>{emphasis}</span>}
              {after}
            </>
          )}
        </p>
      </blockquote>
      {(logo || name || title) && (
        <figcaption className="flex items-center gap-[20px]">
          {logo && (
            <img
              src={logo.src}
              alt={logo.alt ?? ''}
              className={`w-full ${LOGO_GRAYSCALE_CLASS}`}
              style={{ maxWidth: logo.maxWidth }}
            />
          )}
          <p className="m-0 font-mono text-quote-author text-ink">
            {name && <span>{name}</span>} {title && <span className="text-ink-muted">{title}</span>}
          </p>
        </figcaption>
      )}
    </figure>
  )
}

export function DashedLineQuote({ className = '', ...props }) {
  return (
    <InlineQuote
      className={`mx-[-70px] border-t border-dashed border-grid-500 px-[70px] py-[30px] ${className}`}
      {...props}
    />
  )
}

export default InlineQuote
