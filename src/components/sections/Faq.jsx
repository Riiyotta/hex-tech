// CLONE_SPEC §4.14: Tron divider (9 gradient rules) + FAQ accordion (reference/dom/p2-04-HomeFAQ__FAQWrapper.html).
// Items toggle independently (the DOM does not enforce one-open-at-a-time).
//
// Props (defaults = the homepage FAQ, unchanged):
//   title         'FAQ' (default) | any string (rendered in the heading-2 H2) | a node (rendered as-is in place of
//                 the H2, e.g. the SOTD Editorial-italic "FAQs") | null (no heading block).
//   items         [{ question, answer }] (answer: string | node) or the specs/product-faq.json shape
//                 [{ q, answerHtml }] (HTML string: links, <ul>, <ol>). Optional `id` per item (anchor, pricing).
//   answerStyle   'home' (default: 16/24 300, HomeFAQ) | 'page' (FAQ__Answer on product/solutions pages: inherits
//                 Cinetype 400 14/21.994 body text; ul circle / ol decimal, padding-left 18, gap 5; strong 500;
//                 links in the site <a> style: --fg1200 + 1px underline, hover --fgA500, active --fgA700; CSS
//                 .faq-answer--page in index.css).
//   dividerColor  CSS colour for the heading + item rules (default var(--grid500); SOTD: 'var(--line-faint)').
//   showFooter    the "Can't find your answer here? Get in touch." line (default true); contactHref (default /request-a-demo/).
//   tron          render the TronDivider above (default true).
//   id            anchor id on the FAQ wrapper (default 'faq').
//   hoverColor    item hover background (default var(--grid300); SOTD 'rgba(0, 0, 0, 0.02)').
//   padding       CSS padding of the FAQ__Wrapper (default 80px 0, 60px top ≤800; switching-to-hex objections '0',
//                 SOTD 'clamp(40px, 1.0938rem + 5vw, 80px) 0').
//   background    FAQ__Wrapper background (default transparent; switching-to-hex 'var(--fg100)').
//   maxWidth      inner column max-width (default 604px; switching-to-hex 'none').
import { useId, useState } from 'react'
import { Reveal, TronDivider } from '../shared'
import { FAQ_ITEMS } from './Faq/faqItems.js'

export { default as TronDivider } from '../shared/TronDivider.jsx'

function ChevronDownIcon() {
  return (
    <svg data-icon="chevron-down" height="15" viewBox="0 0 15 15" width="15">
      <g strokeWidth="1">
        <path
          clipRule="evenodd"
          d="M4.50001 5.79289L7.50001 8.79289L10.5 5.79289L11.2071 6.5L7.50001 10.2071L3.79291 6.5L4.50001 5.79289Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

function FaqItem({ question, answer, answerHtml, anchorId, answerStyle, divided, customHover }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const questionId = `${id}-question`
  const answerId = `${id}-answer`

  return (
    <div
      data-name="faq-item"
      id={anchorId}
      className={`flex scroll-mt-[240px] flex-col border-b ${divided ? 'border-[color:var(--faq-divider)]' : 'border-grid-500'} transition-colors duration-hex ease-hex ${customHover ? 'hover:bg-[color:var(--faq-hover)]' : 'hover:bg-grid-300'}`}
    >
      <h3 className="m-0">
        <button
          type="button"
          id={questionId}
          aria-controls={answerId}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent p-5 text-left"
        >
          <span className="text-faq font-normal text-ink-loud">{question}</span>
          <span aria-hidden="true">
            <span
              data-icon="true"
              className="flex h-[15px] w-[15px] text-fg-1200"
              style={{ transform: open ? 'none' : 'rotate(-90deg)' }}
            >
              <ChevronDownIcon />
            </span>
          </span>
        </button>
      </h3>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`${open ? 'flex' : 'hidden'} flex-col gap-3 px-5 pb-5 pt-2.5 ${answerStyle === 'page' ? 'faq-answer--page text-small font-normal' : 'text-body font-light'} text-ink`}
        {...(answerHtml != null ? { dangerouslySetInnerHTML: { __html: answerHtml } } : {})}
      >
        {answerHtml == null ? answer : undefined}
      </div>
    </div>
  )
}

export default function Faq({
  title = 'FAQ',
  items = FAQ_ITEMS,
  answerStyle = 'home',
  dividerColor,
  showFooter = true,
  contactHref = '/request-a-demo/',
  tron = true,
  id = 'faq',
  hoverColor,
  padding,
  background,
  maxWidth,
}) {
  const divided = dividerColor != null
  const wrapperStyle = {
    ...(divided ? { '--faq-divider': dividerColor } : {}),
    ...(hoverColor != null ? { '--faq-hover': hoverColor } : {}),
    ...(padding != null ? { padding } : {}),
    ...(background != null ? { background } : {}),
  }
  return (
    <section data-section="Faq" className="relative z-[1] w-full bg-transparent">
      {tron && <TronDivider />}
      <Reveal
        id={id}
        className="relative z-[1] w-full scroll-mt-[120px] bg-transparent py-20 stack:pt-[60px]"
        style={Object.keys(wrapperStyle).length ? wrapperStyle : undefined}
      >
        <div className="mx-auto flex max-w-faq flex-col" style={maxWidth != null ? { maxWidth } : undefined}>
          {title != null && (
            <div className={`flex flex-col items-center border-b ${divided ? 'border-[color:var(--faq-divider)]' : 'border-grid-500'} pb-5`}>
              {typeof title === 'string' ? (
                <h2 className="my-[15px] font-formula text-heading-2 font-extrabold text-ink-loud">{title}</h2>
              ) : (
                title
              )}
            </div>
          )}
          <div className="flex flex-col">
            {items.map((item) => (
              <FaqItem
                key={item.question ?? item.q}
                question={item.question ?? item.q}
                answer={item.answer}
                answerHtml={item.answerHtml}
                anchorId={item.id}
                answerStyle={answerStyle}
                divided={divided}
                customHover={hoverColor != null}
              />
            ))}
          </div>
          {showFooter && (
          <p className="mt-[35px] text-center text-body font-light text-ink">
            Can't find your answer here?{' '}
            <a
              href={contactHref}
              data-tracking-label="Home page faq contact link"
              className="border-b border-fg-1200 text-fg-1200 transition-colors duration-link ease-linear hover:bg-fg-a-500 active:bg-fg-a-700"
            >
              Get in touch
            </a>
            .
          </p>
          )}
        </div>
      </Reveal>
    </section>
  )
}
