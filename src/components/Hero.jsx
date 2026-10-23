// Usage: <Hero />  (first block inside the first ContentSection)
// CLONE_SPEC §4.1: 700px stage (padding-top 102px, overflow hidden) with a backdrop of drifting Perlin
// noise (opacity .8, masked top→bottom) and a 32px cartesian grid; centered hero with the gradient H1
// (PP Formula SemiExtended + PP Editorial italic line), pill sub-headline and two CTAs.
import Button from './shared/Button.jsx'
import MaskIcon from './shared/MaskIcon.jsx'
import PerlinNoise from './shared/PerlinNoise.jsx'
import Reveal from './shared/Reveal.jsx'
import CartesianGrid from './shared/CartesianGrid.jsx'

const PILLS = {
  bi: { label: 'BI', href: '/product/bi/', icon: '/assets/svg/hero/icon-bi.svg', color: 'text-jade' },
  conversational: {
    label: 'Conversational analytics',
    href: '/product/threads/',
    icon: '/assets/svg/hero/icon-conversational-analytics.svg',
    color: 'text-amethyst',
  },
  context: {
    label: 'Context management',
    href: '/product/context-studio/',
    icon: '/assets/svg/hero/icon-context-management.svg',
    color: 'text-accent-context-management',
  },
}

const SUBHEADING = 'm-0 min-w-0 text-balance text-lead-xl font-light text-ink phone-sm:text-lead-l'

function Pill({ pill }) {
  return (
    <a
      href={pill.href}
      aria-label={pill.label}
      className="inline-flex max-w-full items-center gap-2 rounded-pill border border-grid-500 bg-[color-mix(in_srgb,theme(colors.fg.100)_70%,transparent)] py-[6px] pl-[6px] pr-[12px] text-fg-1200 no-underline shadow-pill transition-[border-color] duration-hex ease-hex hover:border-grid-700 hover:bg-fg-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-fg-1200"
    >
      <span
        aria-hidden="true"
        className={`flex h-[28px] w-[28px] flex-none items-center justify-center rounded-full border border-[color-mix(in_srgb,currentColor_49%,transparent_51%)] bg-[color-mix(in_srgb,currentColor_13%,theme(colors.white))] shadow-pill ${pill.color}`}
      >
        <img src={pill.icon} alt="" width={16} height={16} className="block" />
      </span>
      <p className={`${SUBHEADING} !leading-[normal]`}>{pill.label}</p>
    </a>
  )
}

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-stage-top" data-section="Hero">
      {/* HomeHeroBackdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[-1]">
        <div className="absolute inset-0 opacity-80 [mask-image:linear-gradient(#000,transparent)]">
          <PerlinNoise texture="eggplant" size={1024} opacity={0.24} active="always" />
        </div>
        <CartesianGrid />
      </div>

      <Reveal animateOnMount>
        <section className="relative mx-auto flex w-full max-w-hero flex-col items-center gap-10 px-8 pb-[clamp(80px,80px+2dvw,100px)] pt-[clamp(100px,80px+2dvw,140px)] text-center">
          <div className="hero-heading-container flex w-full flex-col items-center gap-5 text-center">
            <header className="w-full min-w-0 flex-none">
              <h1 className="gradient-heading hero-heading relative mx-[-6px] mb-[-6px] mt-0 px-[6px] text-center font-display text-hero font-bold">
                <div aria-hidden="true" className="hero-sparkle">
                  <MaskIcon src="/assets/svg/hero/hero-sparkle.svg" width={51} height={52} />
                </div>
                The Analytics platform <span data-style="italic">for humans and agents</span>
              </h1>
            </header>
            <div className="flex w-full max-w-hero-sub flex-wrap items-center justify-center gap-[1ch]">
              <p className={SUBHEADING}>Rethinking</p>
              <Pill pill={PILLS.bi} />
              <Pill pill={PILLS.conversational} />
              <p className={SUBHEADING}>and</p>
              <Pill pill={PILLS.context} />
              <p className={SUBHEADING}>for the agentic era.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <Button variant="primary" size="lg" href="https://app.hex.tech/signup?source=home-hero" external>
              Get started for free
            </Button>
            <Button variant="secondary" size="lg" href="/request-a-demo/?source=homepage">
              Request a demo
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
