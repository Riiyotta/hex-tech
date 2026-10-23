// §4.7 "Agent observability" window, ported from the live InteractiveFeatureCSDashboard (+ CSSidebar,
// CSFilterBar/HexDropdown/HexPopover, Sparkline, chartSharedStyles Chart, BarSpace/HexTooltip, ThreadsTable).
// Interactions kept from the source: filter dropdowns open a popover on click (outside click / Escape /
// item click closes), chart bars show a cursor-following tooltip (offset 12/12, 150ms fade), table rows and
// menu items have hover fills.
import { createContext, memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ProductWindow } from '../../shared/index.js'
import Icon from './Icon.jsx'

const AGENT_NAMES = { PublishedApp: 'Published App', Notebook: 'Notebook', Threads: 'Threads', Modeling: 'Modeling' }
const TOPIC_NAMES = {
  Q3RevenueByProductLine: 'Revenue by Product Line',
  RegionalSalesBreakdown: 'Sales Breakdown',
  DefenseSectorAnalysis: 'Sector Analysis',
  QuarterlyGrowthTrends: 'Quarterly Trends',
  ProductLineComparisons: 'Product Comparisons',
  CommercialSectorRevenue: 'Sector Revenue',
}
const USER_NAMES = ['Kira Vance', 'Marcus Sol', 'Vega Chen', 'Orion Reyes', 'Nova Okafor', 'Cass Meridian']
const WARNING_NAMES = ['User doubt', 'Missing context']
const SOURCE_NAMES = ['Hex', 'Slack', 'MCP', 'CLI']

/* ---------------- HexTooltip (portal, follows the cursor) ---------------- */
const TooltipContext = createContext(null)

function TooltipProvider({ children }) {
  const [tooltip, setTooltip] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isPositioned, setIsPositioned] = useState(false)
  const [mounted, setMounted] = useState(false)
  const boxRef = useRef(null)
  const hideTimer = useRef(null)

  useEffect(() => setMounted(true), [])

  const updatePosition = useCallback((point) => {
    if (boxRef.current) boxRef.current.style.transform = `translate(calc(${point.x}px - 50%), ${point.y}px)`
    setIsPositioned(true)
  }, [])
  const show = useCallback(
    (content, point) => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current)
        hideTimer.current = null
      }
      updatePosition(point)
      setTooltip(content)
      setIsVisible(true)
    },
    [updatePosition],
  )
  const hide = useCallback(() => {
    setIsVisible(false)
    hideTimer.current = setTimeout(() => {
      setTooltip(null)
      setIsPositioned(false)
    }, 150)
  }, [])
  const api = useMemo(() => ({ show, hide, updatePosition }), [show, hide, updatePosition])

  return (
    <TooltipContext.Provider value={api}>
      {children}
      {mounted &&
        createPortal(
          <div ref={boxRef} className="hex-tooltip" data-visible={isVisible && tooltip !== null && isPositioned ? 'true' : 'false'}>
            {tooltip && (
              <div className="hex-tooltip__inner">
                <div>
                  {tooltip.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            )}
          </div>,
          document.body,
        )}
    </TooltipContext.Provider>
  )
}

const OFFSET = { x: 12, y: 12 }
// BarSpace: a bar segment that shows its tooltip at the cursor
const BarSpace = memo(function BarSpace({ width, height, color, tooltipContent }) {
  const tooltip = useContext(TooltipContext)
  const at = (e) => ({ x: e.clientX + OFFSET.x, y: e.clientY + OFFSET.y })
  return (
    <span
      className="hex-tooltip-trigger"
      style={{ width, height, background: color }}
      onMouseEnter={(e) => tooltip?.show(tooltipContent, at(e))}
      onMouseLeave={() => tooltip?.hide()}
      onMouseMove={(e) => tooltip?.updatePosition(at(e))}
    />
  )
})

/* ---------------- HexDropdown / HexPopover ---------------- */
function HexDropdown({ icon, text, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined
    const onClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setIsOpen(false)
    }
    const id = setTimeout(() => document.addEventListener('click', onClick), 0)
    return () => {
      clearTimeout(id)
      document.removeEventListener('click', onClick)
    }
  }, [isOpen])
  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <div ref={wrapperRef} className="hex-popover">
      <div className="hex-popover__trigger" onClick={() => setIsOpen((o) => !o)}>
        <div className="hex-dropdown" data-active={isOpen ? 'true' : 'false'}>
          <div className="hex-dropdown__inner">
            {icon ? <Icon name={icon} /> : null}
            <span>{text}</span>
          </div>
          <Icon name="chevron-down" />
        </div>
      </div>
      <div className="hex-popover__container" data-open={isOpen ? 'true' : 'false'} onClick={() => setIsOpen(false)}>
        <div className="hex-popover__content">
          {items.map((title, i) => (
            <div key={title} className="hex-popover__item" data-selected={i === 0 ? 'true' : 'false'}>
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FilterBar() {
  return (
    <div className="cs-filter-bar">
      <div className="cs-filter-bar__list">
        <HexDropdown icon="groups" text="All roles" items={['All roles', 'Admin', 'Editor', 'Explorer']} />
        <HexDropdown icon="user" text="All users" items={['All users', ...USER_NAMES]} />
        <HexDropdown icon="library" text="All topics" items={['All topics', ...Object.values(TOPIC_NAMES)]} />
        <HexDropdown icon="success" text="All warnings" items={['All warnings', ...WARNING_NAMES]} />
        <HexDropdown icon="globe" text="All sources" items={['All sources', ...SOURCE_NAMES]} />
      </div>
      <div className="cs-filter-bar__list">
        <HexDropdown text="Last 7 days" items={['Last 7 days', 'Last 30 days', 'Last 60 days', 'Custom range']} />
      </div>
    </div>
  )
}

/* ---------------- Sidebar ---------------- */
function HexLogo() {
  return (
    <svg fill="none" viewBox="0 0 52 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        clipRule="evenodd"
        d="M9 0V6.97333H7V0H0V5.65333V5.67333V12.3267V20H7V10H9V20H16V0H9ZM18 20H34V12H27V17H25V10H34V0H18V20ZM25 7V3H27V7H25ZM45 7V0H52V5L49 8.5L52 12V20H45V9.97333H43V20H36V12L39 8.5L36 5V0H43V7H45Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

function MenuItem({ icon, text, active = false }) {
  return (
    <div className="cs-sidebar__item" data-active={active ? 'true' : 'false'}>
      <Icon name={icon} />
      <span>{text}</span>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="cs-sidebar">
      <div className="cs-navbar">
        <div className="cs-navbar__logo">
          <HexLogo />
          <div className="cs-navbar__title">
            <span className="cs-navbar__title-text">Context Studio</span>
          </div>
        </div>
      </div>
      <div className="cs-sidebar__list">
        <div className="cs-sidebar__group">
          <div className="cs-sidebar__section-header">Observability</div>
          <MenuItem active icon="trending" text="Overview" />
        </div>
        <div className="cs-sidebar__group">
          <div className="cs-sidebar__section-header">Management</div>
          <MenuItem icon="lightbulb" text="Suggestions" />
          <MenuItem icon="endorsed" text="Endorsements" />
          <MenuItem icon="library" text="Guides" />
          <MenuItem icon="semantic-models" text="Models" />
          <MenuItem icon="sharing" text="Connections" />
        </div>
      </div>
    </div>
  )
}

/* ---------------- Sparklines ---------------- */
function SparkGradient({ id, y1, y2 }) {
  return (
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id={id} x1="64.8878" x2="64.8878" y1={y1} y2={y2}>
        <stop className="cs-spark__stop-top" />
        <stop className="cs-spark__stop-bottom" offset="1" />
      </linearGradient>
    </defs>
  )
}

const SPARK_CONVERSATIONS = (
  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 131 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.0057 29.1429L0 49.7143V60H130V24V15L92.6989 29.1429L73.125 20.7857L59.0909 28.5L45.4261 35.5714L24.0057 29.1429Z" fill="url(#sparkline-agent-conversations-gradient)" />
    <path className="cs-spark__line" d="M0 49.5C9.39632 42.4706 24.0608 29 24.0608 29L45.2486 35.5L59.2647 28L73.2597 20.8L92.9118 29.5C92.9118 29.5 106.22 23.5859 114.917 20.8C120.806 18.9136 130 15 130 15" strokeLinecap="round" />
    <SparkGradient id="sparkline-agent-conversations-gradient" y1="27.236" y2="53.8507" />
  </svg>
)
const SPARK_USERS = (
  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 130 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.0691 40.0518L0 54.6293V60.3335H130V15.3335L112.028 25.4743L98.8479 55.8969L85.3687 59.6997L73.9862 31.8124H56.0138L36.8433 40.0518H20.0691Z" fill="url(#sparkline-unique-users-gradient)" />
    <path className="cs-spark__line" d="M0 53.6073L20.6682 40.2382H37.1429L56.6129 31.7476H74.2857L85.6682 59.3335L99.1475 55.6383L112.327 26.0715L130 16.3332" strokeLinecap="round" />
    <SparkGradient id="sparkline-unique-users-gradient" y1="28.031" y2="54.2709" />
  </svg>
)
const SPARK_WARNINGS = (
  <svg fill="none" preserveAspectRatio="none" viewBox="0 0 130 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.9631 27L0 43V59H130V27L112.028 58H85.3687L73.3871 27L59.9078 58H44.6313L23.9631 27Z" fill="url(#sparkline-negative-interactions-gradient)" />
    <path className="cs-spark__line" d="M0 43.5161L23.908 27L44.5287 59H59.7701L73.2184 27L85.1724 59H111.77L130 27" strokeLinecap="round" />
    <SparkGradient id="sparkline-negative-interactions-gradient" y1="8.03383" y2="49.4345" />
  </svg>
)

function Sparkline({ title, value, chart }) {
  return (
    <div className="cs-sparkline">
      <div className="cs-sparkline__title">{title}</div>
      <div className="cs-sparkline__value">{value}</div>
      <div className="cs-sparkline__chart">{chart}</div>
    </div>
  )
}

/* ---------------- Charts (chartSharedStyles) ---------------- */
function Chart({ type, xAxis, yAxis, contents }) {
  return (
    <div className="cs-chart">
      <div className="cs-chart__y-axis">
        <div className="cs-chart__y-ticks">
          {yAxis.items.map((item, i) => (
            <div key={i} className="cs-chart__tick">
              {yAxis.showTickLines && <div className="cs-chart__tick-line" data-direction="horizontal" />}
              <div className="cs-chart__tick-text">{item}</div>
            </div>
          ))}
        </div>
        <div className="cs-chart__tick-spacing" />
      </div>
      <div className="cs-chart__contents">
        <div className="cs-chart__bars" data-type={type}>
          {contents}
        </div>
        <div className="cs-chart__x-axis" data-type={type}>
          {xAxis.items.map((item, i) => (
            <div key={i} className="cs-chart__tick">
              {xAxis.showTickLines && <div className="cs-chart__tick-line" data-direction="vertical" />}
              <div className="cs-chart__tick-text">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Stacked columns, top → bottom: Modeling, Notebook, Published App, Threads (heights as % of 500)
const VOLUME = [
  [['2%', 12], ['8%', 40], ['22%', 110], ['27%', 135]],
  [['2%', 10], ['14%', 70], ['23%', 115], ['38%', 190]],
  [['3%', 17], ['9%', 45], ['20%', 100], ['36%', 180]],
  [['4%', 18], ['11%', 55], ['26%', 130], ['47%', 235]],
  [['5%', 25], ['13%', 65], ['31%', 155], ['53%', 265]],
  [['7%', 35], ['14%', 70], ['29%', 145], ['55%', 275]],
]
const VOLUME_AGENTS = [AGENT_NAMES.Modeling, AGENT_NAMES.Notebook, AGENT_NAMES.PublishedApp, AGENT_NAMES.Threads]

function ChartConversationVolume() {
  return (
    <Chart
      type="stacked-vertical"
      contents={VOLUME.map((column, c) => (
        <div key={c}>
          {column.map(([height, count], i) => (
            <BarSpace key={i} height={height} tooltipContent={[VOLUME_AGENTS[i], `${count}`]} />
          ))}
        </div>
      ))}
      xAxis={{ items: ['9/19', '9/20', '9/21', '9/22', '9/23', '9/24'] }}
      yAxis={{ items: ['500', '400', '300', '200', '100', '0'], showTickLines: true }}
    />
  )
}

// [with warning, without warning] counts out of 35
const TOPICS = {
  [TOPIC_NAMES.Q3RevenueByProductLine]: [3, 31],
  [TOPIC_NAMES.RegionalSalesBreakdown]: [2, 22],
  [TOPIC_NAMES.DefenseSectorAnalysis]: [0, 15],
  [TOPIC_NAMES.QuarterlyGrowthTrends]: [1, 11],
  [TOPIC_NAMES.ProductLineComparisons]: [0, 11],
  [TOPIC_NAMES.CommercialSectorRevenue]: [0, 10],
}

function ChartConversationTopics() {
  return (
    <Chart
      type="bar"
      contents={Object.values(TOPIC_NAMES).map((topic) => {
        const [warn, clean] = TOPICS[topic] || [0, 0]
        return (
          <div key={topic}>
            {warn > 0 && (
              <BarSpace color="var(--cs-chart-warning)" tooltipContent={['Contains warning', `${warn}`]} width={`${(warn / 35) * 100}%`} />
            )}
            <BarSpace color="var(--cs-chart-clean)" tooltipContent={['No warnings', `${clean}`]} width={`${(clean / 35) * 100}%`} />
          </div>
        )
      })}
      xAxis={{ items: ['0', '5', '10', '15', '20', '25', '30', '35'], showTickLines: true }}
      yAxis={{ items: Object.values(TOPIC_NAMES) }}
    />
  )
}

/* ---------------- ThreadsTable ---------------- */
const ROWS = [
  { agent: 'Notebook', date: '44 min ago', prompt: 'How did revenue change across the Outer Rim compared to last quarter?', role: 'Admin', user: 'Luc Patton', topic: TOPIC_NAMES.Q3RevenueByProductLine, warnings: null, source: 'Hex' },
  { agent: 'Threads', date: '1 hr ago', prompt: 'Which product lines saw the strongest Research-sector demand?', role: 'Editor', user: 'Eels Gulsen', topic: TOPIC_NAMES.RegionalSalesBreakdown, warnings: 'User doubt', source: 'Slack' },
  { agent: 'Modeling', date: '2 hrs ago', prompt: 'Help me define measures and dimensions for the Core Worlds semantic model.', role: 'Explorer', user: 'Andrei Leesom', topic: TOPIC_NAMES.DefenseSectorAnalysis, warnings: null, source: 'MCP' },
  { agent: 'Threads', date: '3 hrs ago', prompt: 'Give me a breakdown of negative customer feedback in the Outer Rim this month.', role: 'Explorer', user: 'Andrei Leesom', topic: TOPIC_NAMES.CommercialSectorRevenue, warnings: 'Missing context', source: 'CLI' },
  { agent: 'Threads', date: '3 hrs ago', prompt: "What are this quarter's top customer pain points in the Outer Rim?", role: 'Explorer', user: 'Andrei Leesom', topic: TOPIC_NAMES.QuarterlyGrowthTrends, warnings: null, source: 'Hex' },
]

function ThreadsTable() {
  return (
    <table className="cs-threads">
      <thead>
        <tr>
          <th>DATE</th>
          <th>AGENT</th>
          <th>PROMPT</th>
          <th data-topic="">TOPIC</th>
          <th>WARNINGS</th>
          <th>SOURCE</th>
          <th>USER</th>
          <th>ROLE</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row, i) => (
          <tr key={i}>
            <td>{row.date}</td>
            <td>{row.agent}</td>
            <td data-prompt="">{row.prompt}</td>
            <td data-topic="">{row.topic}</td>
            <td>{row.warnings ? <span className="cs-threads__warning">{row.warnings}</span> : null}</td>
            <td>{row.source}</td>
            <td>{row.user}</td>
            <td>{row.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// Props: title (tab label, default 'Agent observability'), titleAlign ('left' | 'right').
export default function DashboardWindow({ title = 'Agent observability', titleAlign = 'left' }) {
  return (
    <ProductWindow
      title={title}
      titleAlign={titleAlign}
      className="feature-window cs-dashboard"
      role="group"
      aria-label="Product demonstration of Hex Context Studio observability"
    >
      <TooltipProvider>
        <Sidebar />
        <div className="cs-dashboard__main">
          <FilterBar />
          <div className="cs-dashboard__content">
            <div className="cs-dashboard__top-line">
              <div className="cs-dashboard__sparklines">
                <Sparkline chart={SPARK_CONVERSATIONS} title="Agent conversations" value={461} />
                <Sparkline chart={SPARK_USERS} title="Unique users" value={55} />
                <Sparkline chart={SPARK_WARNINGS} title="Warnings" value={12} />
              </div>
              <div className="cs-dashboard__charts">
                <div className="cs-dashboard__chart">
                  <div className="cs-dashboard__chart-title">Conversation volume</div>
                  <ChartConversationVolume />
                </div>
                <div className="cs-dashboard__chart">
                  <div className="cs-dashboard__chart-title">Top conversation topics</div>
                  <ChartConversationTopics />
                </div>
              </div>
            </div>
            <ThreadsTable />
          </div>
        </div>
      </TooltipProvider>
    </ProductWindow>
  )
}
