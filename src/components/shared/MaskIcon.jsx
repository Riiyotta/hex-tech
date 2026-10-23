// Usage: <MaskIcon src="/assets/svg/icons/nav/blog.svg" size={16} className="text-fg-1200" />
// Renders a single-colour SVG file as a CSS mask filled with currentColor, so asset SVGs that use
// currentColor (nav icons, chevrons, logo) inherit the parent's text color like the inline originals.

export default function MaskIcon({ src, size = 15, width, height, className = '', style, ...rest }) {
  return (
    <span
      aria-hidden="true"
      className={`mask-icon ${className}`}
      style={{ '--icon': `url(${src})`, width: width ?? size, height: height ?? size, ...style }}
      {...rest}
    />
  )
}
