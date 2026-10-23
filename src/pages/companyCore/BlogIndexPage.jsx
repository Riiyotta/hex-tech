// /blog/ (company §4.4, T4, dark). Blog-specific full-bleed rows on the 14-column layout grid:
// masthead (checkered margins + cross accents) · featured (1 primary + 2 secondary) · recent strip · 16px checkered gap ·
// feed (category filter + 15 rows) · dark footer row. Search and category filtering run client-side over the
// captured first page only (spec §9.2); "View more" has no further data.
import { useMemo, useState } from 'react'
import { FooterRow, LayoutGrid, MaskIcon } from '../../components/shared'
import { ICON, asset } from './common.jsx'
import blog from './data/blog.js'

export const CATEGORY_COLORS = {
  Product: '#A477B2',
  Company: '#FFFFFF',
  Data: '#F5C0C0',
  Security: '#B55E60',
  'Data teams': '#CDA849',
  Design: '#859850',
  Engineering: '#67B69E',
  'Friends of data': '#8E7CD8',
  Research: '#6BA8D4',
  'Further reading': '#717A94',
}

const tagsOf = (post) => (post.tags ? post.tags.split(/\s*,\s*/) : [])
const minutes = (post) => parseInt(post.readTime, 10) || 0
const hexA = (hex, a) => {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`
}

function DateRow({ post, className = '' }) {
  return (
    <div className={`flex gap-[12px] ${className}`}>
      <div className="cc-post-date">
        <MaskIcon src={ICON.merge} size={16} className="cc-flip-y" />
        <p className="cc-annotation">{post.date}</p>
      </div>
      <div className="cc-post-date">
        <MaskIcon src={ICON.stopwatch} size={16} />
        <p className="cc-annotation">{post.readTime}</p>
      </div>
    </div>
  )
}

function PostMeta({ post }) {
  const tags = tagsOf(post)
  return (
    <div className="cc-post-meta">
      <div className="cc-post-cta" aria-hidden="true">
        <MaskIcon src={ICON.arrowRightMedium} size={14} />
      </div>
      <span className="cc-meta-line" style={{ transitionDelay: '0.016s' }}>
        Author/ <span className="text-white">{post.author}</span>
      </span>
      {tags.length > 0 && (
        <span className="cc-meta-line" style={{ transitionDelay: '0.032s' }}>
          Tags/{' '}
          {tags.map((t, i) => (
            <span key={t} style={{ color: CATEGORY_COLORS[t] }}>
              {t}
              {i < tags.length - 1 ? ', ' : ''}
            </span>
          ))}
        </span>
      )}
    </div>
  )
}

function Masthead({ query, setQuery }) {
  const [open, setOpen] = useState(false)
  return (
    <LayoutGrid className="relative z-[2]" data-section="BlogMasthead">
      <div className="cc-blog-checker relative" style={{ gridColumn: 1 }}>
        <span className="cc-cross" data-side="left" aria-hidden="true" />
      </div>
      <div className="cc-masthead">
        <div className="cc-masthead__command">
          <div className="cc-masthead__headline-wrap">
            <h1 className="cc-masthead__headline">{blog.masthead.title}</h1>
          </div>
          <div className="cc-section-label cc-masthead__label">{blog.masthead.divider}</div>
          <div className="cc-masthead__divider" />
          <div className="cc-search">
            <div className="cc-search__toggle" onClick={() => setOpen(true)}>
              <div className="cc-search__bg">
                <div className="cc-search__icon">
                  <MaskIcon src={ICON.search} size={15} />
                </div>
                {open ? (
                  <input
                    autoFocus
                    className="cc-search__input"
                    value={query}
                    placeholder={blog.masthead.search}
                    aria-label="Search posts"
                    onChange={(e) => setQuery(e.target.value)}
                    onBlur={() => !query && setOpen(false)}
                    onKeyDown={(e) => e.key === 'Escape' && (setQuery(''), setOpen(false))}
                  />
                ) : (
                  <button type="button" className="cc-search__placeholder" aria-label="open blog search menu">
                    {blog.masthead.search}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="cc-masthead__graph">
          {/* runtime canvas on the live site; the saved element capture stands in (spec §9.1) */}
          <img src="/assets/pages/company/blog/commit-graph-fallback@2x.png" alt="" width={1286} height={54} className="cc-masthead__graph-img" />
        </div>
        <div className="cc-section-label cc-masthead__bottom-label">{blog.masthead.stats}</div>
      </div>
      <div className="cc-blog-checker relative" style={{ gridColumn: '-2 / span 1' }}>
        <span className="cc-cross" data-side="right" aria-hidden="true" />
      </div>
    </LayoutGrid>
  )
}

function FeaturedImage({ post }) {
  return (
    <div className="cc-featured-image">
      <span data-blog-image="">
        <img src={asset(post.image)} alt={post.title} loading="lazy" />
      </span>
    </div>
  )
}

function Featured() {
  const [primary, ...secondary] = blog.featured
  return (
    <LayoutGrid data-section="BlogFeatured">
      <div className="cc-margin-line" data-side="left" data-top="" />
      <div className="cc-featured">
        <div className="cc-section-label cc-featured__label">← FEATURED →</div>
        <div className="cc-featured__grid">
          <div className="cc-post-card cc-primary">
            <div className="cc-primary__radial" aria-hidden="true">
              <div className="cc-primary__dots">
                <div className="cc-primary__perlin" />
              </div>
            </div>
            <div className="cc-primary__grid">
              <div className="cc-pile">
                <div className="cc-primary__accents" aria-hidden="true" />
                <div className="cc-primary__info">
                  <div>
                    <DateRow post={primary} />
                    <h2 className="cc-primary__title">
                      <a href={primary.href} className="cc-post-link">
                        {primary.title}
                      </a>
                    </h2>
                    <p className="cc-primary__desc">{primary.excerpt}</p>
                  </div>
                  <div className="cc-primary__metacta">
                    <PostMeta post={primary} />
                  </div>
                </div>
              </div>
              <FeaturedImage post={primary} />
            </div>
          </div>
          {secondary.map((post) => (
            <div key={post.href} className="cc-post-card cc-secondary">
              <FeaturedImage post={post} />
              <div className="cc-pile flex-grow">
                <div className="cc-secondary__accents" aria-hidden="true" />
                <div className="cc-secondary__info">
                  <div>
                    <DateRow post={post} />
                    <h2 className="m-0 font-formula text-[28px] font-extrabold leading-[36.4px] tracking-[-0.7px] text-white">
                      <a href={post.href} className="cc-post-link">
                        {post.title}
                      </a>
                    </h2>
                    <p className="mt-[4px] text-body">{post.excerpt}</p>
                  </div>
                  <div className="cc-secondary__metacta">
                    <PostMeta post={post} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cc-margin-line" data-side="right" data-top="" />
    </LayoutGrid>
  )
}

function Recent() {
  return (
    <LayoutGrid className="cc-recent" data-section="BlogRecent">
      <div className="cc-recent__margin" data-side="left" aria-hidden="true" />
      <div className="cc-recent__margin" data-side="right" aria-hidden="true" />
      <div className="cc-section-label cc-recent__label">← RECENT →</div>
      <ul className="cc-recent__grid">
        {blog.recent.map((post) => (
          <li key={post.href} className="cc-recent__item">
            <div className="cc-tertiary">
              <div>
                <DateRow post={post} />
                <h2 className="cc-tertiary__h2">
                  <a href={post.href} className="cc-post-link">
                    {post.title}
                  </a>
                </h2>
                <p className="text-small">{post.excerpt}</p>
              </div>
              <div className="cc-tertiary__metacta">
                <PostMeta post={post} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </LayoutGrid>
  )
}

function FeedRow({ post }) {
  const tags = tagsOf(post)
  const op = Math.min(1, minutes(post) / 15)
  return (
    <div className="cc-feed-row">
      <div className="cc-feed-row__summary">
        <div className="cc-feed-row__info">
          <div className="cc-feed-row__datetime">
            <div className="cc-feed-row__date">
              <MaskIcon src={ICON.merge} size={16} className="cc-flip-y" />
              <p className="m-0">{post.date}</p>
            </div>
            <div className="flex items-center gap-[6px]">
              {tags.length > 0 && (
                <span className="flex gap-[2px]">
                  {tags.map((t) => (
                    <span key={t} className="cc-minitag" style={{ backgroundColor: CATEGORY_COLORS[t], opacity: op }} />
                  ))}
                </span>
              )}
              <div className="cc-feed-row__readtime">
                <MaskIcon src={ICON.stopwatch} size={16} />
                {post.readTime}
              </div>
            </div>
          </div>
          <p className="cc-feed-row__title">
            <a href={post.href} className="cc-post-link">
              {post.title}
            </a>
          </p>
          <p className="cc-feed-row__synopsis">{post.excerpt}</p>
        </div>
        <div className="cc-feed-row__right">
          <div className="cc-feed-row__author">{post.author}</div>
          <div className="flex gap-[4px] text-[10px]">
            {tags.length > 0 && (
              <span className="cc-meta-line cc-feed-row__tags" style={{ transitionDelay: '0.032s' }}>
                {tags.map((t, i) => (
                  <span key={t} style={{ color: CATEGORY_COLORS[t] }}>
                    {t}
                    {i < tags.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            )}
          </div>
          <div className="cc-post-cta cc-feaux-cta" aria-hidden="true">
            <MaskIcon src={ICON.arrowRightMedium} size={14} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Feed({ query }) {
  const [active, setActive] = useState(null)
  const categories = blog.categories.map((c) => {
    const [, name, count] = c.name.match(/^(.*) \[(\d+)\]$/)
    return { name, count, href: c.href }
  })
  const posts = useMemo(() => {
    const q = query.trim().toLowerCase()
    return blog.feed.filter(
      (p) => (!active || tagsOf(p).includes(active)) && (!q || `${p.title} ${p.excerpt} ${p.author}`.toLowerCase().includes(q)),
    )
  }, [active, query])
  const total = blog.feedTitle.match(/\[(\d+)\]/)[1]

  return (
    <LayoutGrid className="cc-feed-grid" data-section="BlogFeed">
      <div className="cc-feed-margin" data-side="left" aria-hidden="true" />
      {[4, 7, 10].map((c) => (
        <div key={c} className="cc-feed-rule" style={{ gridColumn: c }} aria-hidden="true" />
      ))}
      <div className="cc-feed-margin" data-side="right" aria-hidden="true" />
      <div className="cc-feed">
        <div className="cc-feed__filter">
          <div className="sticky top-[98px]">
            <div className="cc-filter__grid">
              <h2 className="cc-filter__headline">
                Feed{' '}
                <span className="cc-filter__count">
                  {`[${total}]`.split('').map((ch, i) => (
                    <span key={i} className="inline-block">
                      {ch}
                    </span>
                  ))}
                </span>
              </h2>
              <label className="cc-filter__mobile">
                <span className="cc-filter__mobile-toggle">
                  <span>{active ?? 'All'}</span>
                  <MaskIcon src={ICON.chevronRightMedium} size={16} className="cc-filter__mobile-chevron" />
                </span>
                <select aria-label="Filter posts by category" value={active ?? ''} onChange={(e) => setActive(e.target.value || null)}>
                  <option value="">All [{total}]</option>
                  {categories.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name} [{c.count}]
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="cc-filter__categories">
              {categories.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  data-active={active === c.name ? 'true' : 'false'}
                  className="cc-filter__category"
                  style={{ color: CATEGORY_COLORS[c.name], '--category-active-bg-color': hexA(CATEGORY_COLORS[c.name], 0.1) }}
                  onClick={(e) => {
                    e.preventDefault()
                    setActive(active === c.name ? null : c.name)
                  }}
                >
                  <span className="cc-filter__indicator" aria-hidden="true" />
                  {c.name} [{c.count}]
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="cc-feed__posts">
          {posts.map((p) => (
            <FeedRow key={p.href} post={p} />
          ))}
          {posts.length === 0 && <p className="cc-feed__empty">No posts on this page match.</p>}
          <button type="button" className="cc-show-more">
            <span className="relative z-[2] text-small">
              View more ( <span className="cc-annotation-12">15</span> )
            </span>
          </button>
        </div>
      </div>
    </LayoutGrid>
  )
}

export default function BlogIndexPage() {
  const [query, setQuery] = useState('')
  return (
    <div className="cc-blog">
      <Masthead query={query} setQuery={setQuery} />
      <Featured />
      <Recent />
      <LayoutGrid aria-hidden="true">
        <div className="cc-margin-line" data-side="left" />
        <div className="h-[16px] bg-checker" />
        <div className="cc-margin-line" data-side="right" />
      </LayoutGrid>
      <Feed query={query} />
      <FooterRow />
    </div>
  )
}
