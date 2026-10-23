// Usage: <OutroTout title="Questions? Talk to us" description="Get in touch with us…" actions={[{ label: 'Contact Sales', href: '/request-a-demo/' }]} />
// One component for the closing CTA card that recurs across all three families:
//   product §2.2 N5 OutroTout (bi, cli, context-studio, data-apps, embedded, threads, capability-ai, exploratory),
//   company §4.10 OutroCard (/resources/guides/ai-analytics/), solutions §4.2.7 SolutionOutroCta (5 solution pages).
// Structure: Reveal wrapper (flex col, w-full) → TronDivider (61 tall, mb 30) → Inner (flex col centred,
// padding 40 40 100; ≤800 20 30 80; ≤600 0 30 80) → OutlineCard with corner accent (max-w 565, flex 1 1 0,
// padding 68 60, ≤800 40 28, gap 30, centred text) → text (gap 10: H2 heading-2 PP Formula 800 balance loud +
// P 20/30 300 balance) → actions (gap 15; lg Buttons).
// variant 'band' = SolutionOutroCta: wrapper margin-top 132, everything inside a rgba(173,142,182,.08) band,
//   card background --fg100 (#14141C); H2 → P → button sit at one 20px gap (card gap and text gap), paragraph
//   margin-bottom 5.
// Props: title (node), description (node), actions [{ label, href, variant: 'primary' (default) | 'secondary',
//   external }], variant 'default' | 'band', className (wrapper).
import Button from './Button.jsx'
import OutlineCard from './OutlineCard.jsx'
import Reveal from './Reveal.jsx'
import TronDivider from './TronDivider.jsx'

export default function OutroTout({ title, description, actions = [], variant = 'default', className = '' }) {
  const band = variant === 'band'
  const body = (
    <>
      <TronDivider />
      <div className="flex flex-col items-center px-[40px] pb-[100px] pt-[40px] stack:px-[30px] stack:pb-[80px] stack:pt-[20px] phone:pt-0">
        <OutlineCard
          accent
          className={`flex w-full max-w-[565px] flex-[1_1_0] cursor-default flex-col items-center px-[60px] py-[68px] text-center stack:px-[28px] stack:py-[40px] ${band ? 'gap-[20px]' : 'gap-[30px]'}`}
          style={band ? { '--outline-card-bg': 'var(--fg100)' } : undefined}
        >
          <div className={`flex flex-col ${band ? 'gap-[20px]' : 'gap-[10px]'}`}>
            <h2 className="m-0 font-formula text-heading-2 font-[800] text-ink-loud [text-wrap:balance]">{title}</h2>
            {description && (
              <p className={`m-0 text-lead-l font-light text-ink [text-wrap:balance] ${band ? 'mb-[5px]' : ''}`}>{description}</p>
            )}
          </div>
          {actions.length > 0 && (
            <div className="flex flex-wrap justify-center gap-[15px]">
              {actions.map((a) => (
                <Button key={a.label} variant={a.variant ?? 'primary'} size="lg" href={a.href} external={a.external}>
                  {a.label}
                </Button>
              ))}
            </div>
          )}
        </OutlineCard>
      </div>
    </>
  )
  return (
    <Reveal data-block="OutroTout" className={`flex w-full flex-col ${band ? 'mt-[132px]' : ''} ${className}`}>
      {band ? <div className="outro-band flex flex-col items-center">{body}</div> : body}
    </Reveal>
  )
}
