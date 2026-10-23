// product §4.4 #0 Threads hero (DOM threads/00-Hero.*): HeadlineTag + heading-0 H1 + text-xl P + N8 Cta pair,
// and the PegBoard video thumbnail (N8 Thumbnail) that opens the YouTube modal (Pwxsa2atlB8, external player).
import { useCallback, useState } from 'react'
import { AnimatedCta, ContentSection, VideoModal } from '../../../components/shared'
import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'

const VIDEO = 'https://www.youtube.com/embed/Pwxsa2atlB8?autoplay=1&rel=0&enablejsapi=1'

export function VideoPegBoard({ src, onOpen }) {
  return (
    <button type="button" className="pm-pegboard" onClick={onOpen} aria-label="Play video">
      <div className="pm-pegboard__feather" aria-hidden="true">
        <div className="dot-grid-mask">
          <div className="pm-pegboard__dots" />
          <div className="pm-pegboard__perlin" />
        </div>
      </div>
      <div className="pm-thumb-shadow">
        <video className="pm-thumb-video" autoPlay loop muted playsInline src={src} />
        <span className="pm-play-glass">
          <span className="pm-play-btn">
            <span className="pm-play-disc">
              <SvgIcon svg={ICONS.play} />
            </span>
          </span>
        </span>
      </div>
    </button>
  )
}

export default function ThreadsHero() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  return (
    <ContentSection data-section="ThreadsHero">
      <div className="px-[12px]">
        <div className="pm-th-hero">
          <div className="pm-th-hero__content">
            <div className="pm-th-hero__text">
              <span className="pm-th-tag text-ink">
                <SvgIcon svg={ICONS.threads16} className="pm-th-tag__icon" />
                <span className="text-[12px]">Threads: Conversational analytics for everyone</span>
              </span>
              <h1 className="pm-th-h1 pm-text-gradient font-display text-hero-relaxed font-bold text-ink-loud">
                Conversational <br />
                analytics for <br />
                everyone
              </h1>
              <p className="pm-th-hero__p pm-text-xl-fluid text-ink">
                Threads is a new way to do self-serve analytics. Anyone can ask questions in plain language and get detailed, trustworthy answers
              </p>
            </div>
            <div className="pm-th-hero__actions">
              <AnimatedCta href="/request-a-demo/" color="default">Request a demo</AnimatedCta>
              <AnimatedCta variant="secondary" href="https://learn.hex.tech/docs/explore-data/threads" external>
                Learn more
              </AnimatedCta>
            </div>
          </div>
          <div className="pm-th-thumb-area">
            <VideoPegBoard src="/assets/pages/product/threads/thumbnail-e09e0616.mp4" onOpen={() => setOpen(true)} />
          </div>
        </div>
      </div>
      {open && <VideoModal src={VIDEO} title="Threads video" onClose={close} />}
    </ContentSection>
  )
}
