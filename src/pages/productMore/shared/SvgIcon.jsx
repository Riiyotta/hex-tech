// Renders one of the verbatim DOM SVG strings from ../icons.js inside a span (currentColor icons).
export default function SvgIcon({ svg, className = '', style, ...rest }) {
  return <span aria-hidden="true" className={`pm-svg-icon ${className}`} style={style} dangerouslySetInnerHTML={{ __html: svg }} {...rest} />
}
