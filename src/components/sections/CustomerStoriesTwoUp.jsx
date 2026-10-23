// CLONE_SPEC §4.9: full-bleed customer stories two-up (Mercor / Algolia), 300 tall @1440.
// Ported from reference/dom/p1b-customer-stories-two-up.html (CustomerStoriesTwoUp__*): a full-width
// LayoutGrid row (#FCF8F8 + paper texture, 1px #DBD7DA top border) with two piled subgrids — a 1px
// #E9E5E8 rule at the right edge of content column 6 (x 720 @1440), and the 2-column quote grid.
// Not listed in §6.2's reveal set, so no Reveal.
//
// Props (defaults = the homepage Mercor / Algolia band, unchanged):
//   stories        [{ logo: { src, alt }, before, emphasis, after, quote?, name, title }]. `emphasis` renders as the
//                  bold loud <em>; pass `quote` (string | node) instead for plain quotes (integration QuotesMultiple).
//   columns        1 | 2 (default: stories.length capped at 2). 1 = single centred column without the centre rule.
//   borderBottom   add the 1px grid-500 bottom border (integration QuotesMultiple, product §5 #2).
//   nameSize       'small' (default 14px) | 'body' (16px `.text-base`, product context-studio §4.3 #7).
//   logoClassName  override the logo sizing (default 'mx-auto h-[52px]'; QuotesMultiple: 'mx-auto max-w-[200px] object-contain').
//   section        data-section value (default 'CustomerStoriesTwoUp').
//   storyPadding   'default' (CustomerStory 12px block padding) | 'none' (QuotesMultiple__CustomerStory).
//   companySize    'default' (title line 12/18.852 Cinetype Mono) | 'small' (10px / 1.571 / .0833em: QuotesMultiple
//                  company line, .annotation at 10px).
//   nested         true when placed inside a V1PageLayout content column: the band's LayoutGrid spans that column
//                  (--content-width 100%, like the live subgrid) instead of re-applying the 96% content width.
//   Dark: bg --bg300 (#0F0F15), rule --grid300 (#2B252C), white logos via the theme logo filter.
import { LayoutGrid } from '../shared'

const STORIES = [
  {
    logo: { src: '/assets/logos/customers/mercor.svg', alt: 'Mercor' },
    before: '"If we didn’t have Hex, ',
    emphasis: 'we might’ve left more than $100M on the table.',
    after: ' That might even be an underestimate."',
    name: 'Dhaval P.',
    title: 'Account Lead',
  },
  {
    logo: { src: '/assets/logos/customers/algolia.svg', alt: 'Algolia' },
    before: '"AI can do almost everything for you in Hex. I use it to scaffold entire apps and help me debug SQL queries. ',
    emphasis: 'It makes me 10x faster.',
    after: '"',
    name: 'Tom C.',
    title: 'Principal Engineer',
  },
]

function Story({ logo, before, emphasis, after, quote, name, title, nameSize = 'small', logoClassName = 'mx-auto h-[52px]', storyPadding = 'default', companySize = 'default' }) {
  return (
    // CustomerStory: ≤1000 stacked, all but the last get a 1px #DBD7DA bottom border
    <div className={`flex flex-col ${storyPadding === 'none' ? '' : 'py-[12px] '}tablet:border-b tablet:border-grid-500 tablet:last:border-b-0`}>
      <div className="flex grow flex-col place-content-center place-items-center px-[clamp(12px,0.0469rem_+_2.5vw,32px)] pb-[40px] pt-[24px]">
        <img src={logo.src} alt={logo.alt} className={`logo-grayscale ${logoClassName}`} />
        <q className="mt-[12px] max-w-[36rem] text-center text-lead-l font-light text-ink [quotes:none] [text-wrap:balance]">
          {quote ?? (
            <>
              {before}
              <em className="font-bold not-italic text-ink-loud">{emphasis}</em>
              {after}
            </>
          )}
        </q>
        <div className="flex justify-center px-[32px]">
          <div className="flex items-center gap-[12px]">
            <div className="mt-[16px] flex flex-col items-center">
              <p className={`m-0 text-center ${nameSize === 'body' ? 'text-body' : 'text-small'} text-ink-loud`}>{name}</p>
              <p
                className={`m-0 text-center font-mono text-ink-muted ${
                  companySize === 'small' ? 'text-[10px] leading-[1.571] tracking-[0.0833em]' : 'text-quote-author'
                }`}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CustomerStoriesTwoUp({
  stories = STORIES,
  columns = Math.min(stories.length, 2),
  borderBottom = false,
  nameSize,
  logoClassName,
  section = 'CustomerStoriesTwoUp',
  storyPadding,
  companySize,
  nested = false,
}) {
  return (
    <LayoutGrid
      as="section"
      data-section={section}
      className={`paper-texture relative border-t border-grid-500 bg-surface-300${borderBottom ? ' border-b' : ''}`}
      style={nested ? { '--content-width': '100%' } : undefined}
    >
      {/* vertical centre rule (hidden ≤1000 once the quotes stack) */}
      {columns === 2 && (
        <div className="grid grid-cols-12" style={{ gridColumn: '2 / -2', gridRow: '1 / -1' }} aria-hidden="true">
          <div
            className="w-px translate-x-1/2 self-stretch justify-self-end bg-grid-300 tablet:hidden"
            style={{ gridColumn: 6, gridRow: '1 / -1' }}
          />
        </div>
      )}
      <div
        className={columns === 2 ? 'grid grid-cols-2 tablet:grid-cols-1' : 'grid grid-cols-1'}
        style={{ gridColumn: '2 / -2', gridRow: '1 / -1' }}
      >
        {stories.map((story) => (
          <Story key={story.name} nameSize={nameSize} logoClassName={logoClassName} storyPadding={storyPadding} companySize={companySize} {...story} />
        ))}
      </div>
    </LayoutGrid>
  )
}
