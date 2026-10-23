// T5 How-it-works right column mock (specs/product.md §5 #4 DataConnectionIlly): 3 stacked white connection cards
// (dbt adds the schema table), rose highlight frames, a 500-wide SQL cell and the dataframe output pill.
import { MaskIcon } from '../../components/shared'
import { ICONS } from './blocks.jsx'

const KW_BLUE = new Set(['select', 'as', 'from', 'group by', '{{timeframe}}'])
const KW_PINK = new Set(['cast', 'month', 'sum'])

// Tokenise the default SQL the same way the live markup does (Blue / Pink / Teal spans).
function SqlLine({ text }) {
  const parts = text.split(/(\{\{timeframe\}\}|\bgroup by\b|\bselect\b|\bfrom\b|\bas\b|\bcast\b|\bsum\b|\bmonth\b|\b\d\b)/)
  return parts.map((p, i) => {
    if (!p) return null
    if (KW_BLUE.has(p)) return <span key={i} className="b">{p}</span>
    if (KW_PINK.has(p)) return <span key={i} className="p">{p}</span>
    if (/^\d$/.test(p)) return <span key={i} className="t">{p}</span>
    return p
  })
}

function ConnectionName({ name, icon }) {
  return (
    <div className="pv1-conn-name">
      {icon && <img src={`${ICONS}/${icon}.svg`} alt="" width="14" height="14" />}
      {name}
    </div>
  )
}

function ConnectionCard({ name, icon, dbt }) {
  return (
    <div className="pv1-cell-card">
      <div className="flex items-center">
        <ConnectionName name={name} icon={icon} />
        <div className="pv1-inuse">
          <MaskIcon src={`${ICONS}/in-use.svg`} size={15} />2 cells
        </div>
      </div>
      <div className="pv1-conn-meta">
        <div>Atriedes, Inc.</div>
        <i />
        <div>Last updated: 3 min ago</div>
      </div>
      {dbt && (
        <div className="pv1-table-info">
          <div className="pv1-table-name">
            vehicle_destinations<span>16 cols, 192 rows</span>
          </div>
          <div className="pv1-dbt">
            <span>
              <img src={`${ICONS}/dbt.svg`} alt="" width="16" height="16" />
              Model
            </span>
            <span>2 min ago</span>
            <span>
              <img src={`${ICONS}/green-tick.svg`} alt="" width="15" height="15" />
              Tests
            </span>
          </div>
          <div className="pv1-cols">
            {[
              ['VEHICLE_ID', 'string'],
              ['MODEL', 'string'],
              ['SPEED', 'number'],
              ['BUILD_DATE', 'datetime'],
            ].map(([c, t]) => (
              <div key={c}>
                <div>{c}</div>
                <div>{t}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function DataConnectionIlly({ name, icon, sql, dbt = false }) {
  const lines = (sql ?? '').split('\n')
  return (
    <div className="flex w-full flex-col items-center gap-[60px]">
      <div className="pv1-conn-cards">
        <ConnectionCard name={name} icon={icon} dbt={dbt} />
        <div className="pv1-cell-card" aria-hidden="true" />
        <div className="pv1-cell-card" aria-hidden="true" />
        <div className="pv1-hl" data-at="bottom" aria-hidden="true" />
      </div>
      <div className="pv1-query">
        <div className="pv1-hl" data-at="top" aria-hidden="true" />
        <div className="relative flex h-full w-full flex-auto flex-col gap-[6px]">
          <div className="pv1-cell-card relative z-[3] flex w-full flex-auto !p-0">
            <div className="pv1-cell-card relative z-[3] w-full !p-0 !shadow-none">
              <div className="pv1-sql-source">
                <ConnectionName name={name} icon={icon} />
              </div>
              <div className="relative flex flex-col">
                <div className="pv1-code">
                  {lines.map((l, i) => (
                    <div key={i} data-indent={i > 0 && i < 4 ? '' : undefined}>
                      <SqlLine text={l} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[6px]">
            <MaskIcon src={`${ICONS}/output-arrow.svg`} size={15} className="text-highlight/50" />
            <div className="pv1-pill">dataframe</div>
          </div>
        </div>
      </div>
    </div>
  )
}
