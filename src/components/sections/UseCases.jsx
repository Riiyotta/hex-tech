// CLONE_SPEC §4.10: Use cases (657 tall @1440). Ported from reference/dom/p2-00-HomeUseCases.html.
// Perlin-noise backdrop (opacity .8, masked to fade downward) → 1240 content row: copy column (240) +
// list of 3 HomeUseCaseCard links (hover: ::before tint .05, border hides, arrow opacity 1). Reveal = §6.2.
import { MaskIcon, PerlinNoise, Reveal } from '../shared'
import { USE_CASE_MARK_1, USE_CASE_MARK_2, USE_CASE_MARK_3 } from './UseCases/marks.js'
import './UseCases/UseCases.css'

const USE_CASES = [
  {
    href: '/product/bi/',
    mark: USE_CASE_MARK_1,
    title: 'Migrate from traditional BI to modern AI-powered self-serve',
    description:
      'Move beyond static dashboards and give teams trusted, AI-powered access to the data they need while keeping your data team in control of the foundation.',
  },
  {
    href: '/product/context-studio/',
    mark: USE_CASE_MARK_2,
    title: 'Build a Context Layer for AI on data',
    description:
      'Bring business logic, definitions, models, and institutional knowledge together so agents can reason from shared, trusted context and improve as that context grows.',
  },
  {
    href: 'https://learn.hex.tech/tutorials/quickstart/working-with-hex-from-anywhere',
    external: true,
    mark: USE_CASE_MARK_3,
    title: 'Make chat apps work with data',
    description:
      'Let teams work from Claude, Codex, Cursor, or wherever they’re most productive while Hex provides a consistent layer of trusted data and organizational context underneath.',
  },
]

function UseCaseCard({ href, external, mark, title, description }) {
  return (
    <a
      href={href}
      className="use-case-card"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {/* Card__Wrapper tile: 100×100, radius 12, padding 10, glass bg + shadow */}
      <div className="relative flex h-[100px] w-[100px] flex-none cursor-default flex-col items-center justify-center overflow-hidden rounded-card bg-[color:var(--home-glass-background-color)] bg-card p-[10px] text-left shadow-glass-card [backdrop-filter:var(--home-glass-backdrop-filter)]">
        <div className="use-case-card__mark flex" dangerouslySetInnerHTML={{ __html: mark }} />
      </div>
      <div className="flex min-w-0 flex-col gap-[8px]">
        <div className="flex flex-auto justify-between gap-[5px] [text-wrap:balance]">
          <h3 className="m-0 font-formula text-heading-4 font-[600] text-ink-loud">{title}</h3>
          <span className="use-case-card__arrow flex flex-none opacity-50">
            <MaskIcon src="/assets/svg/icons/arrow-up-right.svg" size={15} className="text-fg-1200" />
          </span>
        </div>
        <p className="m-0 min-w-0 text-body font-light text-ink">{description}</p>
      </div>
    </a>
  )
}

export default function UseCases() {
  return (
    <Reveal>
      <section data-section="UseCases" className="use-cases relative w-full">
        <div aria-hidden="true" className="use-cases__noise pointer-events-none absolute inset-0 opacity-80">
          <PerlinNoise />
        </div>
        <div className="relative mx-auto flex w-full max-w-section items-center gap-[var(--use-cases-column-gap)] px-[var(--home-section-gutter)] tablet:flex-col tablet:items-start">
          <div className="flex min-w-0 max-w-[240px] flex-none flex-col items-start gap-[20px] tablet:max-w-full">
            <img
              src="/assets/svg/illustrations/use-cases-mark.svg"
              alt=""
              aria-hidden="true"
              width="60"
              height="60"
              className="flex-none"
            />
            <h2 className="gradient-heading text-left font-formula text-heading-2 font-[800] text-ink-loud">
              Use cases
              <span className="use-cases__subheading" data-style="italic">
                Get the most out of Hex
              </span>
            </h2>
          </div>
          <div className="flex min-w-0 flex-col">
            {USE_CASES.map((useCase) => (
              <UseCaseCard key={useCase.title} {...useCase} />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
