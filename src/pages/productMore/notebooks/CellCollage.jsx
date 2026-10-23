// product §4.6 #3–5 CellCollage (DOM notebooks/03–05-sharedStyles.*): a floating InfoText plus absolutely
// positioned notebook-cell screenshots (ProductIllustration: CellHeader label + 25×24 outlined action buttons at
// .4 → white 4px-radius frame with the double drop shadow → img at its natural size; optional dataframe CellFooter).
// Positions are the live CSS offsets (px, relative to the 1160-wide section).
import { InfoText, Reveal } from '../../../components/shared'
import SvgIcon from '../shared/SvgIcon.jsx'
import { ICONS } from '../icons.js'

const NB = '/assets/pages/product/notebooks/'

function Actions({ comments }) {
  return (
    <div className="pm-cell__actions">
      <div className="pm-cell__action">
        <SvgIcon svg={ICONS.comment} />
        {comments}
      </div>
      <div className="pm-cell__action">
        <SvgIcon svg={ICONS.appBuilderView} />
      </div>
      <div className="pm-cell__action" data-active="">
        <SvgIcon svg={ICONS.autoRun} />
      </div>
    </div>
  )
}

export function Cell({ id, label, actions, comments, img, alt, w, h, style, footer }) {
  if (!label) {
    return (
      <Reveal className="pm-cell-plain" data-cell={id} style={style}>
        <img src={img} alt={alt} width={w} height={h} loading="lazy" decoding="async" />
      </Reveal>
    )
  }
  return (
    <Reveal className="pm-cell" data-cell={id} style={style}>
      <div className="pm-cell__header">
        <div className="pm-cell__label">{label}</div>
        {actions && <Actions comments={comments} />}
      </div>
      <div className="pm-cell__inner">
        <img src={img} alt={alt} width={w} height={h} loading="lazy" decoding="async" />
      </div>
      {footer && (
        <div className="pm-cell__footer">
          <SvgIcon svg={ICONS.outputArrow} />
          <div className="pm-cell__pill">{footer}</div>
        </div>
      )}
    </Reveal>
  )
}

function Floating({ icon, title, description, cta }) {
  return (
    <div className="pm-cells__float">
      <InfoText
        className="pm-cells__info [word-break:break-word]"
        size="h2"
        icon={<SvgIcon svg={icon} className="h-[15px] w-[15px] text-fg-1200" />}
        title={title}
        description={description}
        cta={{ ...cta, variant: 'secondary', size: 'md' }}
      />
    </div>
  )
}

export function SqlPython() {
  return (
    <div className="pm-cells" data-variant="sql">
      <Floating
        icon={ICONS.code}
        title="SQL and Python, together in harmony"
        description="With Hex, you don't have to choose. Use SQL for what it's great at, and then layer in Python for extra flexibility and power."
        cta={{ label: 'Learn more', href: 'https://learn.hex.tech/docs/getting-started/develop-your-notebook', external: true }}
      />
      <div className="pm-cell-group">
        <div className="pm-cell-sub" style={{ top: 380, left: 0, maxWidth: 220 }}>
          <h4 className="m-0 mb-[10px] font-formula text-heading-4 font-semibold text-ink-loud">SQL superpowers</h4>
          <p className="m-0 mb-[8px] text-body font-light text-ink">A first-class query editor, right in your notebook, including:</p>
          <div className="text-body font-light text-ink">
            <ul>
              <li>Jinja support</li>
              <li>dbt integration</li>
              <li>Schema browser</li>
              <li>Typeahead</li>
              <li>Syntax highlighting</li>
            </ul>
          </div>
        </div>
        <Cell id="sql" label="SQL cell" actions img={NB + 'sql-cell@2x.png'} alt="SQL cell" w={544} h={365} style={{ top: 280, left: 240, flex: '0 0 auto' }} footer="dataframe" />
        <Reveal className="pm-cell-plain" data-cell="typeahead" style={{ top: 484, left: 672 }}>
          <img src={NB + 'sql-typeahead@2x.png'} alt="SQL typeahead" width={143} height={67} loading="lazy" decoding="async" />
        </Reveal>
        <SvgIcon svg={ICONS.annotationLineSql} className="pm-annotation-line" style={{ top: 387, left: 200 }} />
      </div>
      <div className="pm-cell-group">
        <div className="pm-cell-sub" style={{ top: 390, right: -50, maxWidth: 260 }}>
          <h4 className="m-0 mb-[10px] font-formula text-heading-4 font-semibold text-ink-loud">IDE-class Python and R</h4>
          <p className="m-0 text-body font-light text-ink">Integrated package management, formatting, and AI typeahead and code fixes make editing a breeze.</p>
        </div>
        <Cell id="python" label="Python cell" actions comments=" 2" img={NB + 'python-cell@2x.png'} alt="Python cell" w={540} h={278} style={{ top: 30, right: 60, flex: '0 0 auto' }} />
        <SvgIcon svg={ICONS.annotationLinePython} className="pm-annotation-line" style={{ top: 349, right: 169, transform: 'rotate(-90deg)' }} />
      </div>
    </div>
  )
}

export function NoCode() {
  return (
    <div className="pm-cells" data-variant="nocode">
      <Floating
        icon={ICONS.interactive}
        title="No-code tools for everyone"
        description="Browse for data, explore it, and visualize it. Hex supports end-to-end data exploration without queries, code, or any technical requirements."
        cta={{ label: 'Learn more', href: 'https://learn.hex.tech/docs/explore-data/cells/calculations', external: true }}
      />
      <div className="pm-cells__illos">
        <Cell id="table" label="Table cell" actions img={NB + 'table-cell@2x.png'} alt="Table cell" w={792} h={518} style={{ top: 0, right: -160 }} />
        <Cell id="pivot" label="Pivot cell" img={NB + 'pivot-cell@2x.png'} alt="Pivot cell" w={680} h={392} style={{ top: 358, left: 0 }} />
        <Cell id="filter" img={NB + 'filter-cell@2x.png'} alt="Filter cell" w={484} h={137} style={{ top: 584, left: 600 }} />
      </div>
    </div>
  )
}

export function Viz() {
  return (
    <div className="pm-cells" data-variant="viz">
      <Floating
        icon={ICONS.chart}
        title="Beautiful, built-in viz"
        description="Powerful cells to create interactive charts, maps, and conditionally-formatted tables."
        cta={{ label: 'Learn more', href: '/product/data-apps/' }}
      />
      <div className="pm-cells__illos">
        <Cell id="tabledisplay" label="Table Display cell" actions img={NB + 'table-display-cell@2x.png'} alt="Table Display cell" w={610} h={315} style={{ top: 327, right: 220 }} />
        <Cell id="map" label="Map cell" actions img="/assets/pages/product/_shared/map-cell@2x.png" alt="Map cell" w={573} h={380} style={{ top: 0, right: 20 }} />
        <Cell id="chart" label="Chart cell" img={NB + 'chart-cell@2x.png'} alt="Chart cell" w={742} h={375} style={{ top: 116, left: -40 }} />
        <Cell id="single" img={NB + 'single-value-cell@2x.png'} alt="Single Value cell" w={288} h={197} style={{ top: 311, right: -10 }} />
      </div>
    </div>
  )
}
