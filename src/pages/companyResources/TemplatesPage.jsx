// /templates/ (company §4.9, T9 dark V1). dom/templates--TemplatesIndexContent__HeroWrapper.*
// Reveal → Wrapper (max 1240, px 40, mb 100, flex col) → centred heading (60%, mb 80; H1 heading-1 white mb 16 +
// P 20/30 300) → content (flex, gap 60; column ≤800): TemplatesNavigation (20% = 232; All + 13 category links,
// 16/30, opacity .6 → 1 hover, active row = rose gradient; ≤800 wrapping inline list) + grid column (80% = 868,
// flex col gap 50): per category a header row (SectionHeader with 16px icon img + description, and a dark primary
// lg "View all") and a 2-col grid (1 col ≤600) of TemplatesCards. Footer row below.
// Live CSS (fqmhQL) sets the TemplatesNavigation ProgressBar to `border-left: unset` and the wrapper is
// position:relative (not sticky); both are reproduced as measured.
import { Button, DarkResourceCard, Reveal, V1PageLayout } from '../../components/shared'
import { DarkSectionHeader } from './parts.jsx'
import { CATEGORIES, SIDEBAR } from './data/templates.js'

function TemplatesNavigation({ active = '/templates/' }) {
  return (
    <div className="cr-tpl-nav">
      <div className="pointer-events-none absolute h-full w-full" aria-hidden="true" />
      {/* ≥801: text list (16/30, .6 → 1 on hover, active row gradient) */}
      {SIDEBAR.map((item) => (
        <a key={item.href} href={item.href} className="cr-tpl-nav__link stack:hidden">
          <div className="cr-tpl-nav__wrap" data-active={item.href === active ? '' : undefined}>
            <div className="cr-tpl-nav__option">{item.name}</div>
          </div>
        </a>
      ))}
      {/* ≤800 (measurements/templates@390): wrapping Button chips, 36px tall, padding 0 15, 12/18.852;
          the active chip keeps the 1px --grid500 border and corner lines, the rest have a transparent border. */}
      {SIDEBAR.map((item) => (
        <Button
          key={`m-${item.href}`}
          variant="secondary"
          size="nav"
          href={item.href}
          corners={item.href === active}
          labelSize="small"
          className={`hidden stack:flex ${item.href === active ? '' : 'cr-tpl-chip--idle'}`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  )
}

function CategorySection({ category }) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex w-full items-center justify-between phone:flex-col phone:items-start">
        <DarkSectionHeader icon={<img src={category.icon} alt={category.category} />} title={category.category} description={category.description} />
        <Button variant="primary" size="lg" href={category.viewAll} className="phone:w-full">
          View all
        </Button>
      </div>
      <div className="grid w-full grid-cols-2 gap-[20px] phone:mt-[20px] phone:grid-cols-1">
        {category.cards.map((c) => (
          <DarkResourceCard
            key={c.href}
            variant="template"
            className="h-full"
            href={c.href}
            title={c.title}
            author={c.author ?? undefined}
            authorStyle="text"
            description={c.description}
            image={{ src: c.image, alt: c.title }}
          />
        ))}
      </div>
    </div>
  )
}

export default function TemplatesPage() {
  return (
    <div className="cr-scope">
      <V1PageLayout footer>
        <Reveal className="w-full">
          <div className="mx-auto mb-[100px] flex w-full max-w-section flex-col px-[40px]">
            <div className="mx-auto mb-[80px] w-[60%] text-center stack:mb-[20px] stack:w-full stack:text-left">
              <h1 className="m-0 mb-[16px] font-display text-heading-1 font-bold text-ink-loud">Templates</h1>
              <p className="m-0 text-lead-l font-light text-ink">
                From complex ML forecasting to critical business dashboards, Hex lets data teams work together in Python, SQL, and no-code to do more with data, together.
              </p>
            </div>
            <div className="flex flex-row gap-[60px] stack:flex-col stack:gap-0">
              <div className="w-[20%] stack:w-full">
                <TemplatesNavigation />
              </div>
              <div className="w-[80%] stack:w-full">
                <div className="flex w-full flex-col gap-[50px]">
                  {CATEGORIES.map((cat) => (
                    <CategorySection key={cat.category} category={cat} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </V1PageLayout>
    </div>
  )
}
