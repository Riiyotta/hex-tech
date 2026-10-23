// /state-of-data-teams/ (company §4.11, T11 report microsite; route layout 'standalone': no Header/Footer).
// dom/state-of-data-teams--{PageShell, SectionHero, SectionIntro, SectionTOC, sharedStyles__SectionWrapper,
// Section5, SectionFAQ}.* + measurements/state-of-data-teams@1440.tree.txt.
// Recorded copy (headings, key findings, TOC, survey questions, chart captions, quotes, stats, outro card, FAQ
// questions) is verbatim. Report prose was deliberately not recorded: paragraphs are neutral placeholders sized to
// the live line counts so the page rhythm matches.
import { Button, GlassCard, MaskIcon } from '../../components/shared'
import Faq from '../../components/sections/Faq.jsx'
import './companyResources.css'

const S = '/assets/pages/company/state-of-data-teams'

const FILLER = [
  'Placeholder copy for this part of the report.',
  'The finished text summarises the survey responses behind this finding.',
  'It explains what changed between the two survey rounds and why it matters for data teams.',
  'Supporting detail and context sit here in the same running-text style.',
  'A closing sentence connects the result to the chart alongside it.',
  'Respondent comments and follow-up notes would expand on the numbers here.',
]
// Neutral filler of roughly `lines` lines at `cpl` characters per line (word-trimmed to the target length).
function filler(lines, cpl, seed = 0) {
  const target = Math.round((lines - 0.35) * cpl)
  const words = []
  let len = 0
  for (let i = seed; len < target; i += 1) {
    for (const w of FILLER[i % FILLER.length].split(' ')) {
      if (len + w.length + 1 > target) break
      words.push(w)
      len += w.length + 1
    }
    if (len + 12 > target) break
  }
  const STOP = new Set(['to', 'the', 'a', 'and', 'of', 'for', 'on', 'in', 'why', 'it', 'this', 'here', 'with', 'between', 'what', 'same', 'behind', 'would'])
  while (words.length > 3 && STOP.has(words[words.length - 1].toLowerCase())) words.pop()
  return words.join(' ').replace(/[.,]?$/, '.')
}
const CPL = { col: 49, intro: 76, outro: 89, wide: 135 }

const KEY_FINDINGS = [
  'AI as a data team priority surged 575% in six months: only 4% of leaders cited it as a top goal in Spring 2025; 27% did by December 2025',
  '31% of data leaders cite trust and data accuracy as their #1 AI concern — nearly 2× the next most common barrier',
  '58% of data teams grew by late 2025, up from 52% in spring; only 4% reduced headcount (down from 9%)',
  'AI tooling jumped from 6th to 2nd in data team focus areas, a 24% increase in six months',
  "0% of data leaders predict they'll avoid AI entirely",
  'Semantic layers are now consensus: no respondent questioned their value in fall (vs. a minority of doubters in spring)',
]

const TOC = [
  ['01', 'AI is a top priority for data teams'],
  ['02', 'Trust and data accuracy are the biggest concerns for AI'],
  ['03', 'Leaders and practitioners want different AI tools'],
  ['04', 'Data teams are still growing as AI adoption accelerates'],
  ['05', 'What does this all mean for 2026?'],
]

const GOAL_Q = 'What is one big goal you have for your team in the next year?'

// Per section: lead paragraph lines, two-ups ({ reverse: chart first in DOM }), full quote.
const SECTIONS = [
  {
    lead: 2,
    twoUps: [
      { heading: 'AI is one of the top goals for data teams', paras: [7, 5, 3], chart: { src: 'sodt-chart-1.1n989j91h0mhs.png', w: 1446, h: 1264, max: 723, alt: 'Bubble chart: top data team goals for 2026' } },
      {
        reverse: true,
        heading: 'AI has gone from excitement to implementation',
        paras: [8, 3],
        chart: {
          src: 'sodt-chart-2.2sq2z760iot_j.png', w: 1490, h: 708, max: 745, alt: 'Dumbbell chart comparing data team focus area priorities 2025 vs. 2026',
          question: 'On a scale of 1-5, how big of a priority is the following for you and your data team?',
          summary: 'AI tooling focus surged while self-serve and data quality declined',
        },
      },
    ],
    quote: ['Move and build faster with AI.', 'CEO, 300-person Tech company'],
  },
  {
    lead: 2,
    twoUps: [
      { heading: 'The majority of people feel positively about AI, but data quality is the biggest barrier to adopting it.', paras: [6, 5, 3], chart: { src: 'sodt-chart-3.3e9964ynaftan.png', w: 1786, h: 1347, max: 893, alt: 'Treemap chart of AI adoption barriers', summary: 'Trust dominates AI adoption barriers' } },
      { reverse: true, heading: 'Teams are using a variety of methods to build context.', paras: [6, 3], chart: { src: 'sodt-chart-4.3g9j5-1-i1fes.png', w: 1465, h: 1344, max: 732, contentMax: 300, alt: 'Donut chart: how data teams are building trusted AI context', summary: 'Data cleaning leads trusted context strategies' } },
      { heading: 'In a change from Spring, no one is questioning the value of semantic models now.', paras: [4, 4], chart: { src: 'sodt-chart-5.2m28fk0y5vd00.png', w: 1688, h: 756, max: 844, alt: 'Dumbbell chart: semantic layer adoption spring vs. fall 2025', summary: 'More customers are building semantic layers, and fewer are doubting their value.' } },
    ],
    quote: ['Standing up our Intelligence product for AI/ML use cases internally and externally.', 'CTO, 80-person data company'],
  },
  {
    lead: 0,
    twoUps: [
      {
        heading: 'Data leaders envision more specialized AI-on-data tools',
        paras: [7, 5, 5],
        chart: {
          src: 'sodt-chart-6.0nmsmk__i7qj7.png', w: 984, h: 878, max: 492, contentMax: 350, alt: 'Radar chart: current vs. predicted future AI tool usage among data leaders',
          question: 'What is the relationship between current and future AI tools (among data leaders)?',
          summary: 'Shift from general LLMs toward specialized analytics AI tools',
        },
      },
    ],
    quote: ['Enhance our user interface with data via an LLM.', 'Marketing Director, 430-person data software company'],
  },
  {
    lead: 0,
    twoUps: [
      {
        paras: [3, 5],
        compare: [
          ['Spring', ['Growing: 34 (52%)', 'Flat/Steady state: 25 (38%)', 'Shrinking: 6 (9%)']],
          ['Fall', ['Growing: 41 (58%)', 'Flat/Steady state: 27 (38%)', 'Shrinking: 3 (4%)']],
        ],
        chart: { src: 'sodt-chart-7.29l3czotxuh15.png', w: 1804, h: 501, max: 902, alt: 'Stacked bar chart: data team size trends spring vs. fall 2025', question: 'What is the state of your data team?' },
      },
    ],
    quote: ['Scale agentic solutions for high volume work.', 'OD, 200-person web development agency'],
  },
]

const FAQ_ITEMS = [
  'How much has AI adoption changed for data teams in 2025?',
  'What challenges do data teams face when adopting AI?',
  'What is the biggest barrier to AI adoption for data teams?',
  'How are data teams building trusted AI context?',
  'What happened to semantic layer adoption in 2025?',
  'Are data teams growing or shrinking as AI adoption increases?',
  'What AI tools do data leaders expect to use more in the future?',
].map((question, i) => ({ question, answer: <p className="m-0">{filler(2, 60, i)}</p> }))

function SurveyQuestion({ children }) {
  return (
    <GlassCard className="sotd-question">
      <p>{children}</p>
    </GlassCard>
  )
}

function Hero() {
  return (
    <div className="sotd-rule flex w-full flex-col gap-[clamp(50px,2.0703rem+3.75vw,80px)]">
      <div className="flex">
        <MaskIcon src={`${S}/svg/SectionHero-HexLogoWrapper-a8e301cf.svg`} width={104} height={40} className="text-ink phone:!h-[20px] phone:!w-[52px]" />
      </div>
      <div className="sotd-hero__inner">
        <div className="sotd-hero__logo">
          <h1 className="m-0 text-ink-loud">
            <span className="sr-only">State of Data Teams 2026</span>
            <img src={`${S}/svg/SectionHero-LogoWrapper-fec7bdac.svg`} alt="" width="1038" height="599" className="inline h-auto w-full align-baseline" />
          </h1>
        </div>
        <div className="sotd-hero__context">
          <div className="sotd-eyebrow">
            <p>Issue 02</p>
          </div>
          <div className="sotd-text">
            <p className="sotd-p">
              About this survey: In December 2025, Hex re-surveyed 65+ data leaders — VPs of Data, directors, analytics engineers, and individual contributors — about their priorities, investments, and blockers. Respondents span company sizes from 80 to 1,000+ employees.
            </p>
            <p className="sotd-p">
              Just six months after our <a href="/state-of-data-teams/2025/">first State of Data Teams Report</a> , the shift was clear: attitudes toward AI moved fast.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Intro() {
  return (
    <div className="sotd-intro">
      <div className="sotd-text min-w-0 flex-[0_1_715px]">
        <h2 className="sotd-h2">Data teams are hitting the gas on AI – but trust remains a concern</h2>
        {[3, 4, 6, 4, 1].map((l, i) => (
          <p key={i} className="sotd-p">{filler(l, CPL.intro, i)}</p>
        ))}
      </div>
      <GlassCard className="sotd-findings">
        <h3 className="sotd-h3">Key findings</h3>
        <ul className="m-0 flex list-none flex-col gap-[30px] p-0">
          {KEY_FINDINGS.map((k) => (
            <li key={k} className="flex flex-col gap-[10px]">
              <p className="sotd-small">{k}</p>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  )
}

function Toc() {
  return (
    <div className="sotd-rule flex w-full flex-col items-start gap-[clamp(20px,0.5469rem+2.5vw,40px)]">
      <h2 className="sotd-h2">Table of contents</h2>
      <nav aria-label="Table of contents" className="w-full">
        <ol className="sotd-toc__list">
          {TOC.map(([n, t], i) => (
            <li key={n} className="sotd-toc__item">
              <a href={`#section_${i + 1}`} className="sotd-toc__link">
                <GlassCard interactive className="sotd-toc__card">
                  <span className="sotd-toc__num">{n}</span>
                  <p className="sotd-toc__title">{t}</p>
                </GlassCard>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

function SectionHeader({ n, title }) {
  return (
    <div className="sotd-section__header">
      <GlassCard className="sotd-number">
        <h3 className="sotd-h3">{n}</h3>
      </GlassCard>
      <h2 className="sotd-h2">
        <span className="sr-only">{n} — </span> {title}
      </h2>
    </div>
  )
}

function Chart({ chart }) {
  return (
    <div className="sotd-chart">
      <div className="sotd-chart__content" style={chart.contentMax ? { maxWidth: chart.contentMax } : undefined}>
        {chart.question && <SurveyQuestion>{chart.question}</SurveyQuestion>}
        {chart.summary && <p className="sotd-chart__summary">{chart.summary}</p>}
      </div>
      <img src={`${S}/${chart.src}`} alt={chart.alt} width={chart.w} height={chart.h} loading="lazy" style={{ maxWidth: chart.max }} />
    </div>
  )
}

function TwoUp({ data, seed }) {
  const text = (
    <div className="sotd-text sotd-twoup__text">
      {data.heading && <h3 className="sotd-h3">{data.heading}</h3>}
      {data.paras.map((l, i) => (
        <p key={i} className="sotd-p">{filler(l, CPL.col, seed + i)}</p>
      ))}
      {data.compare && (
        <div className="sotd-compare">
          {data.compare.map(([label, rows]) => (
            <div key={label} className="sotd-compare__item">
              <p className="sotd-compare__label">{label}</p>
              <ul>
                {rows.map((r) => (
                  <li key={r}>
                    <p className="sotd-p">{r}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
  const chart = <Chart chart={data.chart} />
  return (
    <div className="sotd-twoup" data-reverse={data.reverse ? '' : undefined}>
      {data.reverse ? (
        <>
          {chart}
          {text}
        </>
      ) : (
        <>
          {text}
          {chart}
        </>
      )}
    </div>
  )
}

function FullQuote({ quote, author }) {
  return (
    <div className="sotd-quote">
      <div className="sotd-quote__inner">
        <SurveyQuestion>{GOAL_Q}</SurveyQuestion>
        <p className="sotd-quote__answer">&quot;{quote}&quot;</p>
        <div className="sotd-quote__author">{author}</div>
      </div>
    </div>
  )
}

function ReportSection({ index, data }) {
  const [n, title] = TOC[index]
  return (
    <div id={`section_${index + 1}`} className="sotd-section sotd-rule">
      <SectionHeader n={n} title={title} />
      {data.lead > 0 && <p className="sotd-p">{filler(data.lead, CPL.wide, index)}</p>}
      {data.twoUps.map((t, i) => (
        <TwoUp key={i} data={t} seed={index + i} />
      ))}
      <FullQuote quote={data.quote[0]} author={data.quote[1]} />
    </div>
  )
}

function Outro() {
  const [n, title] = TOC[4]
  return (
    <div id="section_5" className="sotd-section sotd-rule">
      <SectionHeader n={n} title={title} />
      <div className="sotd-outro">
        <div className="sotd-text min-w-0 flex-[0_1_840px]">
          {[2, 3, 2, 1, 3, 3].map((l, i) => (
            <p key={i} className="sotd-p">{filler(l, CPL.outro, i + 2)}</p>
          ))}
        </div>
        <GlassCard className="sotd-outro__card">
          <h2 className="sotd-h2">Questions? Talk to us.</h2>
          <p className="sotd-p">Get in touch with us to see a demo or find out which plan is right for you.</p>
          <Button variant="primary" size="lg" href="https://app.hex.tech/signup" external>
            Get started for free
          </Button>
        </GlassCard>
      </div>
      <div className="sotd-faq sotd-rule">
        <Faq
          id="faqs"
          tron={false}
          dividerColor="var(--line-faint)"
          hoverColor="rgba(0, 0, 0, 0.02)"
          padding="clamp(40px, 1.0938rem + 5vw, 80px) 0"
          title={<h3 className="sotd-h3">FAQs</h3>}
          items={FAQ_ITEMS}
        />
      </div>
    </div>
  )
}

export default function StateOfDataTeamsPage() {
  return (
    <div className="cr-scope sotd-shell">
      <div className="sotd-lines" aria-hidden="true">
        <div className="sotd-lines__track">
          {['0%', '25%', '50%', '75%', '100%'].map((l) => (
            <span key={l} style={{ left: l }} />
          ))}
        </div>
      </div>
      <main className="sotd-page">
        <Hero />
        <Intro />
        <Toc />
        {SECTIONS.map((s, i) => (
          <ReportSection key={i} index={i} data={s} />
        ))}
        <Outro />
      </main>
    </div>
  )
}
