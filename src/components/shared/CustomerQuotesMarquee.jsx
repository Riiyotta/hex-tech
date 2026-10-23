// Usage: <CustomerQuotesMarquee quotes={[{ logo: { src, alt }, quote, author: { name, title } }, …]} />
// product §2.2 N6 CustomerQuotesMarquee (threads, capability-ai, switching-to-hex). react-fast-marquee markup rebuilt
// in CSS: the card row is rendered twice; each copy runs `quotes-marquee-scroll` (translateX 0 → -100%) linear
// infinite. Duration = quotes × 432px (30vw item @1440) / `speed` px/s: 72s for 5 cards, 86.4s for 6 at the live
// 30 px/s (live rfm durations, threads / switching-to-hex @1440). `duration` (CSS time) overrides the computed value.
// Does not pause on hover; pauses while pressed (:active) and under reduced motion.
// Items: 30vw / min 370 / pr 20, cards = shared QuoteCard (glass), stretched to the tallest card.
// ≤600 the live page renders a different tree: the first `mobileCount` cards stacked (gap 30, padding 60 30).
// Wrapper (CustomerQuotesScrollingTout__Wrapper): flex, padding 100 0; ≤800 60 40 gap 30; ≤600 column, 60 30.
// Props: quotes, speed (30), duration, mobileCount (2), className.
import QuoteCard from './QuoteCard.jsx'

const ITEM_WIDTH_1440 = 432

function Row({ quotes, hidden }) {
  return (
    <div className="quotes-marquee__row" aria-hidden={hidden || undefined}>
      {quotes.map((q, i) => (
        <div key={i} className="quotes-marquee__item">
          <QuoteCard logo={q.logo} quote={q.quote} author={q.author} />
        </div>
      ))}
    </div>
  )
}

export default function CustomerQuotesMarquee({ quotes, speed = 30, duration, mobileCount = 2, className = '' }) {
  const time = duration ?? `${Math.round(((quotes.length * ITEM_WIDTH_1440) / speed) * 1000) / 1000}s`
  return (
    <div className={`quotes-marquee ${className}`} data-block="CustomerQuotesMarquee">
      <div className="quotes-marquee__container" style={{ '--quotes-marquee-duration': time }}>
        <Row quotes={quotes} />
        <Row quotes={quotes} hidden />
      </div>
      {quotes.slice(0, mobileCount).map((q, i) => (
        <div key={i} className="quotes-marquee__stacked">
          <QuoteCard logo={q.logo} quote={q.quote} author={q.author} />
        </div>
      ))}
    </div>
  )
}
