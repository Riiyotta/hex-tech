// CLONE_SPEC §4.15 hit counter: 7 seven-segment digits built from 1px lines (lit #31263B, unlit 30%).
// The live value is fetched dynamically; the clone renders the captured value (§7.3).
const SEGMENTS = {
  0: 'abcdef',
  1: 'bc',
  2: 'abdeg',
  3: 'abcdg',
  4: 'bcfg',
  5: 'acdfg',
  6: 'cdefg', // the site's 6 has no top bar (from the captured DOM)
  7: 'abc',
  8: 'abcdefg',
  9: 'abcdfg',
}

function VLine({ on }) {
  return <div className={`h-full w-px ${on ? 'bg-highlight' : 'bg-highlight/30'}`} />
}
function HLine({ on }) {
  return <div className={`h-px w-full ${on ? 'bg-highlight' : 'bg-highlight/30'}`} />
}

function Digit({ value }) {
  const lit = SEGMENTS[value] ?? ''
  const on = (s) => lit.includes(s)
  return (
    <div className="relative flex h-full w-3 gap-px">
      <div className="flex flex-none flex-col items-center justify-between">
        <VLine on={on('f')} />
        <VLine on={on('e')} />
      </div>
      <div className="flex flex-auto flex-col items-center justify-between">
        <HLine on={on('a')} />
        <HLine on={on('g')} />
        <HLine on={on('d')} />
      </div>
      <div className="flex flex-none flex-col items-center justify-between">
        <VLine on={on('b')} />
        <VLine on={on('c')} />
      </div>
    </div>
  )
}

export default function HitCounter({ count = 6530352 }) {
  const digits = String(count).padStart(7, '0').split('')
  return (
    <div title={`You are visitor: ${count.toLocaleString('en-US')}`} className="cursor-pointer py-[5px]">
      <div className="relative flex h-8 flex-none gap-[5px] border border-grid-500 p-[5px] transition-colors duration-hex ease-hex hover:bg-highlight/10">
        {digits.map((d, i) => (
          <Digit key={i} value={d} />
        ))}
      </div>
    </div>
  )
}
