// Usage: <GrayscaleLogo src="/assets/logos/customers/chime.svg" alt="Chime" style={{ maxWidth: 56 }} />  or add className={LOGO_GRAYSCALE_CLASS} to any <img>.
// CLONE_SPEC §3.6: customer logos are white-on-transparent SVGs rendered through
// filter: invert(1) sepia(0) saturate(0.01) hue-rotate(339deg) brightness(1) contrast(1.01) (.logo-grayscale in index.css).

export const LOGO_GRAYSCALE_CLASS = 'logo-grayscale'

export default function GrayscaleLogo({ className = '', alt = '', ...rest }) {
  return <img alt={alt} className={`${LOGO_GRAYSCALE_CLASS} ${className}`} {...rest} />
}
