// CLONE_SPEC §4.8: Product ethos — two glass cards (measured 1240 wide, 2 × 610 cols, 795 tall cards, section 855 @1440).
// Markup ported from reference/dom/p1-07--HomeProductEthos.html. Reveal = §6.2 SimpleFadeIn.
import { Button, PerlinNoise, Reveal } from '../shared'
import './ProductEthos/ProductEthos.css'

const CARDS = [
  {
    image: '/assets/images/product-ethos/product-ethos-token-spend@2x.png',
    eyebrow: 'Flexible by design',
    eyebrowClass: 'text-accent-ethos-flexible',
    title: 'Work with any data, any AI model, and any context, so you aren’t locked in',
    paragraphs: [
      'Your AI bill is getting big – but you don’t know who is spending how much on what things, and whether they’re actually valuable.',
      'Hex helps you get control of this:',
    ],
    bullets: [
      'Model choice, including open source models',
      'Thread-level observability into token spend, so you can see who is spending what on which projects',
      'Eval sweeps that let you dial in the price / quality frontier across models',
    ],
    cta: {
      label: 'Explore how Hex keeps you flexible',
      href: 'https://learn.hex.tech/tutorials/quickstart/working-with-hex-from-anywhere',
    },
  },
  {
    image: '/assets/images/product-ethos/product-ethos-trust@2x.png',
    eyebrow: 'Control without compromise',
    eyebrowClass: 'text-accent-ethos-control',
    title: 'Secure your data, with enterprise-grade permissions and trust',
    paragraphs: [
      'Hex is built so organizations can open up access without giving up control.',
      'Bring AI and data work onto a platform backed by enterprise-grade security, governance, organization controls, and visibility into how your data is being used.',
      'The infrastructure stays rigorous so the people using it don’t have to think about it.',
    ],
    cta: { label: 'Explore Trust Center', href: 'https://trust.hex.tech' },
  },
]

// Text__TextWrapper (.kirBIP): 16/24 300 eggplant, margin-bottom 20 except the last child
const BODY_TEXT = 'm-0 mb-[20px] text-body font-light text-ink last:mb-0'

function EthosCard({ image, eyebrow, eyebrowClass, title, paragraphs, bullets, cta }) {
  return (
    <article className="product-ethos__card flex min-w-0 flex-col overflow-hidden rounded-window bg-[color:var(--home-glass-background-color)] shadow-glass-card [backdrop-filter:var(--home-glass-backdrop-filter)]">
      <div className="product-ethos__frame relative isolate aspect-[588/256] overflow-hidden rounded-window bg-[color:var(--home-glass-background-color)]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-80">
          <PerlinNoise />
        </div>
        <img
          src={image}
          alt=""
          width="588"
          height="256"
          loading="lazy"
          decoding="async"
          className="relative block h-full w-full object-cover"
        />
      </div>
      <div className="product-ethos__content relative z-[1] flex min-w-0 flex-auto flex-col items-start gap-[25px]">
        <div className="flex min-w-0 flex-col gap-[15px]">
          <div
            className={`product-ethos__eyebrow m-0 self-start rounded-eyebrow px-[6px] py-[4px] font-mono text-eyebrow font-normal ${eyebrowClass}`}
          >
            {eyebrow}
          </div>
          <h2 className="gradient-heading text-left font-formula text-heading-3 font-[800] text-ink-loud">{title}</h2>
          <div className="min-w-0">
            {paragraphs.map((text) => (
              <p key={text} className={BODY_TEXT}>
                {text}
              </p>
            ))}
            {bullets && (
              <ul className="product-ethos__bullets m-0 list-outside list-disc pl-[24px] text-ink">
                {bullets.map((text) => (
                  <li key={text}>
                    <p className={BODY_TEXT}>{text}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <Button
          variant="primary"
          size="md"
          href={cta.href}
          external
          target="_blank"
          className="product-ethos__cta"
        >
          {cta.label}
        </Button>
      </div>
    </article>
  )
}

export default function ProductEthos() {
  return (
    <Reveal>
      <section
        data-section="ProductEthos"
        className="product-ethos relative mx-auto grid w-[calc(100%_-_var(--home-section-gutter)_-_var(--home-section-gutter))] max-w-section grid-cols-[repeat(2,minmax(0,1fr))] gap-[20px] pb-[var(--home-section-padding-block)] stack:grid-cols-[minmax(0,1fr)]"
      >
        {CARDS.map((card) => (
          <EthosCard key={card.eyebrow} {...card} />
        ))}
      </section>
    </Reveal>
  )
}
