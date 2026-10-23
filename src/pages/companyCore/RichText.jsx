// P6 RichText (RunningText__Wrapper + BlogRichText / PortableText rules, company §3.3 P6; CSS in companyCore.css .cc-rt).
// Covers p, h1–h3, ul/ol/li, strong/b, a (highlight underline + 30% hover tint), blockquote, pre/code (+ token
// colours), img, figure/figcaption (InlineImage), video blocks (VideoFile), table/th/td, hr, sup/sub, ::selection.
// variant 'blog' (IBM Plex Sans body, h2 28 / h3 20, PP Formula 800 headings) | 'story' (PortableText: same values,
// h3 PP Formula 800 20/26 with <strong>).
export default function RichText({ as: Tag = 'div', variant = 'blog', className = '', style, children }) {
  return (
    <Tag className={`cc-rt ${className}`} data-variant={variant} style={style}>
      {children}
    </Tag>
  )
}

// VideoFile__Wrapper: <figure> with an autoplaying, muted, looping inline video (object-fit contain).
export function RtVideo({ src, caption }) {
  return (
    <div className="cc-rt__video">
      <figure>
        <div className="cc-rt__vid">
          <video src={src} autoPlay muted loop playsInline preload="metadata" />
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  )
}

// InlineImage__Figure
export function RtImage({ src, alt = '', width, height, caption }) {
  return (
    <figure className="cc-rt__figure">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

// Neutral placeholder prose sized to a target line count (cpl = characters per line; 70 calibrated on the 740px blog
// column, 84 on the 758px story column).
// The live copy is deliberately not reproduced (spec §9.5).
const SENTENCES = [
  'This placeholder sentence stands in for the original article copy.',
  'It keeps the measured paragraph rhythm without reproducing the source text.',
  'Real prose for this section lives on the original page.',
  'The running text styles, spacing and links match the recorded values.',
  'Each paragraph is sized to roughly the same number of lines as the live one.',
]
export function placeholderText(lines = 2, seed = 0, cpl = 70, exact = false) {
  const target = Math.max(1, lines) * cpl - 20
  let out = ''
  let i = seed
  while (out.length < target) {
    out += (out ? ' ' : '') + SENTENCES[i % SENTENCES.length]
    i++
  }
  if (exact && out.length > target) out = `${out.slice(0, out.lastIndexOf(' ', target)).replace(/[.,]$/, '')}.`
  return out
}
