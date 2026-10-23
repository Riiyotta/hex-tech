// Shared building blocks for the companyCore family (about, careers, newsroom, blog, customers, stories).
// Everything here composes the shared layer (src/components/shared); nothing duplicates it.
import { GlassCard, MaskIcon } from '../../components/shared'
import './companyCore.css'

export const ICON = {
  ctaArrow: '/assets/pages/company/_shared/svg/icons/Cta-PrimaryCtaIconWrapper-2fe842f2.svg',
  arrowRight: '/assets/pages/company/_shared/svg/icons/createIcon-Wrapper-176d95e3.svg',
  chevronDown: '/assets/pages/company/_shared/svg/icons/createIcon-Wrapper-507f4fd9.svg',
  knowledge: '/assets/pages/company/_shared/svg/icons/createIcon-Wrapper-e509e54c.svg',
  quote: '/assets/pages/company/_shared/svg/icons/createIcon-Wrapper-91516630.svg',
  headphones: '/assets/pages/company/_shared/svg/icons/createIcon-Wrapper-ca479cce.svg',
  library: '/assets/pages/company/_shared/svg/icons/createIcon-Wrapper-a80fa128.svg',
  linkedin: '/assets/pages/company/blog-post/svg/icons/createIcon-Wrapper-de1edeec.svg',
  twitter: '/assets/pages/company/blog-post/svg/icons/createIcon-Wrapper-10388bae.svg',
  stopwatch: '/assets/pages/company/blog/svg/icons/createIcon-Wrapper-cf0cd924.svg',
  arrowRightMedium: '/assets/pages/company/blog/svg/icons/createIcon-Wrapper-2806bed5.svg',
  chevronRightMedium: '/assets/pages/company/blog/svg/icons/createIcon-Wrapper-e7db7840.svg',
  merge: '/assets/pages/company/blog/svg/icons/createIcon-Wrapper-1aec8607.svg',
  search: '/assets/pages/company/blog/svg/icons/createIcon-Wrapper-61ded9a3.svg',
  outputArrow: '/assets/pages/company/careers/svg/icons/createIcon-Wrapper-f2db9520.svg',
  location: '/assets/pages/company/careers/svg/icons/createIcon-Wrapper-c8e5336a.svg',
  remoteWork: '/assets/pages/company/careers/svg/icons/createIcon-Wrapper-421e46d9.svg',
}

export const HANDBOOK_URL = 'https://www.notion.so/hexhq/Hex-Handbook-9fff0d42860e4f70815c599e0d1664d6'

export const asset = (p) => (p ? (p.startsWith('/') || p.startsWith('http') ? p : `/assets/${p}`) : null)

// GradientHeader (company §4): heading-1 (PP Formula SemiExtended 700, clamp 38→60, lh 1.3, ls -0.0308em)
// with the PP Editorial italic first line (1.3em). size 'h1' | 'h2' (heading-2) | 'hero' (74px customers).
export function GradientHeading({ as: Tag = 'h2', italic, children, size = 'h1', align = 'center', className = '', italicClassName = '', italicStyle }) {
  const sizeCls = size === 'h2' ? 'font-formula font-extrabold text-heading-2' : size === 'hero' ? 'font-display font-bold text-hero' : 'font-display font-bold text-heading-1'
  return (
    <Tag className={`gradient-heading mt-0 ${sizeCls} ${className}`} style={{ textAlign: align }}>
      {italic && (
        <span data-style="italic" className={italicClassName} style={italicStyle}>
          {italic}
        </span>
      )}
      {children}
    </Tag>
  )
}

// P4 NewsroomPostCard: GlassCard padding 10, interactive hover. Not an anchor on the live site: the whole card is
// clickable (JS) and opens the external article; items without a URL are inert.
export function NewsroomPostCard({ item, className = '' }) {
  const open = () => item.href && window.open(item.href, '_blank', 'noopener,noreferrer')
  const clickable = !!item.href
  return (
    <GlassCard
      interactive
      className={`cc-news-card h-full w-full p-[10px] ${clickable ? 'cursor-pointer' : 'cursor-default'} ${className}`}
      {...(clickable
        ? { role: 'link', tabIndex: 0, onClick: open, onKeyDown: (e) => e.key === 'Enter' && open(), 'aria-label': item.title }
        : {})}
    >
      <div className="cc-news-card__image">
        {item.image && <img src={asset(item.image)} alt={item.title} width={350} height={180} loading="lazy" />}
      </div>
      <div className="flex w-full flex-auto flex-col p-[15px]">
        <h4 className="m-0 mb-[15px] flex-auto font-formula text-[20px] font-semibold leading-[1.3] tracking-[-0.025em] text-ink-loud">{item.title}</h4>
        <p className="m-0 mt-auto flex flex-col text-[14px] font-light leading-[1.571] text-ink">
          <strong className="font-light">{item.outlet}</strong>
          <span>{item.date}</span>
        </p>
      </div>
    </GlassCard>
  )
}

// P12 SocialShare: "SHARE:" + X / LinkedIn 15px icons.
export function SocialShare({ title, url, gap = 12, className = '' }) {
  const t = encodeURIComponent(title)
  const u = encodeURIComponent(url)
  return (
    <div className={`cc-share flex items-center text-[14px] font-semibold leading-[22px] ${className}`} style={{ gap }}>
      <span className="uppercase">Share:</span>
      <a href={`https://twitter.com/share?text=${t}&url=${u}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="cc-share__link">
        <MaskIcon src={ICON.twitter} size={15} />
      </a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${u}&title=${t}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="cc-share__link">
        <MaskIcon src={ICON.linkedin} size={15} />
      </a>
    </div>
  )
}

// Short neutral placeholder copy for long-form bodies the spec deliberately didn't record.
const PLACEHOLDER = [
  'Placeholder paragraph. The original article copy is intentionally not reproduced here; this text only stands in for the length and rhythm of a typical paragraph in the running text.',
  'Placeholder paragraph. This block keeps the measured typographic styles of the body column while the real prose lives on the original page.',
  'Placeholder paragraph. A short neutral sentence or two fills the space a real paragraph would occupy, so headings, quotes and figures keep their recorded positions.',
]
export const placeholder = (i) => PLACEHOLDER[i % PLACEHOLDER.length]
