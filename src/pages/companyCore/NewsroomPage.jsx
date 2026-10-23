// /newsroom/ (company §4.3, T3): one padded BasicPageRow → header (H1 + media-kit Callout) · featured press card
// (real <a>) · 33 NewsroomPostCards (JS-clickable; the 3 without a URL are inert) · Footer.
import { Fragment } from 'react'
import { BasicPageRow, Callout, FooterRow, GlassCard } from '../../components/shared'
import { GradientHeading, ICON, NewsroomPostCard, asset } from './common.jsx'
import newsroom from './data/newsroom.js'

// 390: the live page drops the featured card and lists the item as a regular card in date order (after card 8).
const FEATURED_INDEX = newsroom.cards.findIndex((c) => new Date(c.date) < new Date(newsroom.featured.date))
const MEDIA_KIT = 'https://hexhq.notion.site/a091e1bb7bb34019bc4ccf2e3da8645f?v=bb640f9e0ef4499198673561e42a93f0'

export default function NewsroomPage() {
  const f = newsroom.featured
  return (
    <>
      <BasicPageRow reveal={false}>
        <div className="flex w-full flex-col px-[5px]" data-section="NewsroomContent">
          <div className="cc-news-header" data-section="NewsroomHeader">
            <div className="cc-news-header__left">
              <GradientHeading as="h1" align="left">Newsroom</GradientHeading>
              <p className="m-0 text-lead-l font-light text-ink">
                For any media inquiries please reach out to{' '}
                <a href="mailto:press@hex.tech?subject=Media inquiry" target="_blank" rel="noopener noreferrer" className="cc-link">
                  press@hex.tech
                </a>
                .
              </p>
            </div>
            <div className="cc-news-header__right">
              <Callout icon={ICON.knowledge} className="cc-news-callout">
                Looking for our media kit?{' '}
                <a href={MEDIA_KIT} target="_blank" rel="noopener noreferrer">
                  Find it here.
                </a>
              </Callout>
            </div>
          </div>
          <GlassCard interactive className="cc-news-featured" data-section="FeaturedNewsroomCard">
            <a href={f.href} target="_blank" rel="noopener noreferrer" className="cc-news-featured__inner">
              <div className="cc-news-featured__image">
                <img src={asset(f.image)} alt={f.title} width={600} height={400} />
              </div>
              <div className="cc-news-featured__copy">
                <h2 className="m-0 mb-[30px] font-formula text-heading-2 font-extrabold text-ink-loud">{f.title}</h2>
                <p className="m-0 flex flex-col text-[14px] font-light leading-[1.571] text-ink">
                  <strong className="font-light">{f.outlet}</strong>
                  <span>{f.date}</span>
                </p>
              </div>
            </a>
          </GlassCard>
          <div className="cc-news-grid" data-section="NewsroomGrid">
            {newsroom.cards.map((item, i) => (
              <Fragment key={item.title}>
                {i === FEATURED_INDEX && <NewsroomPostCard item={f} className="cc-news-card--mobile-featured" />}
                <NewsroomPostCard item={item} />
              </Fragment>
            ))}
          </div>
        </div>
      </BasicPageRow>
      <FooterRow variant="checkered" />
    </>
  )
}
