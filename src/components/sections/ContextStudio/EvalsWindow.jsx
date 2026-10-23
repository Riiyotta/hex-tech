// §4.7 Evals window ("Evals" tab, title on the right), ported from the live InteractiveFeatureEvals component.
// Interaction (as in the source): only the first row ("How much ARR…") has an expand button; it starts
// expanded and toggles its rubric details row. The other rows show a static collapsed caret.
// The table is wider than the window (min-width 982px) and scrolls horizontally inside the panel.
import { useId, useState } from 'react'
import { ProductWindow } from '../../shared/index.js'
import Icon from './Icon.jsx'

const PROMPTS = [
  { prompt: 'Which features are included in the NexaCorp Enterprise launch?', attempts: [true, true, true], rubrics: 3, averageTime: '41.8s', credits: '9.2' },
  { prompt: 'What migration discounts are available for existing NexaCorp customers?', attempts: [true, false, false], rubrics: 2, averageTime: '38.6s', credits: '7.4' },
  { prompt: 'Which connectors are generally available on launch day?', attempts: [true, true, false], rubrics: 2, averageTime: '33.2s', credits: '7.0' },
  { prompt: 'Summarize the Q3 Enterprise messaging for Sales', attempts: [true, true, true], rubrics: 3, averageTime: '47.9s', credits: '9.5' },
]

function Status({ iconOnly = false, passed = true }) {
  const label = passed ? 'Passed' : 'Failed'
  return (
    <span className={`evals__status ${passed ? 'evals__passed' : 'evals__failed'}`}>
      <img alt={iconOnly ? label : ''} height="16" width="16" src={`/assets/icons/evals/${passed ? 'passed' : 'failed'}.svg`} />
      {iconOnly ? null : label}
    </span>
  )
}

function RubricTable() {
  return (
    <table aria-label="ARR evaluation rubric results" className="evals__rubrics">
      <thead>
        <tr>
          <th className="evals__rubric-heading" scope="col">Rubric</th>
          <th className="evals__rubric-heading" scope="col">
            <span className="evals__attempt-heading">
              Attempt 1 <Status />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="evals__rubric-cell">
            <p className="evals__rubric-text">Numeric target: SQL ground truth</p>
            <span className="evals__rubric-tag">Numeric value</span>
          </td>
          <td className="evals__rubric-cell">
            <div className="evals__result">
              <Status iconOnly />
              <div>
                <div>
                  <span className="evals__muted">Reported:</span> 26683729
                </div>
                <div>
                  <span className="evals__muted">Expected:</span> 26683729 (SQL result)
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="evals__rubric-cell">
            <p className="evals__rubric-text">
              Did the agent source ARR from dim_customers.total_arr (the canonical point-in-time ARR source) joined to dim_accounts for the account status - rather than deriving ARR from opportunity amounts, targets, or any other table?
            </p>
            <span className="evals__rubric-tag">Thread judge</span>
          </td>
          <td className="evals__rubric-cell">
            <div className="evals__result">
              <Status iconOnly />
              <p className="evals__result-text">
                The agent returned $26,683,729 using dim_customers.total_arr joined to dim_accounts and filtered on account_status = &#39;Active&#39;.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td className="evals__rubric-cell">
            <p className="evals__rubric-text">
              Did the agent apply the correct definition of &quot;active&quot; - the account lifecycle status flag (dim_accounts.account_status = &#39;Active&#39;) - rather than a product-usage, login-based, or invented definition?
            </p>
            <span className="evals__rubric-tag">Thread judge</span>
          </td>
          <td className="evals__rubric-cell">
            <div className="evals__result">
              <Status iconOnly />
              <p className="evals__result-text">
                The agent summed dim_customers.total_arr for records joined to accounts where dim_accounts.account_status = &#39;Active&#39;, returning $26,683,729.
              </p>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="evals__rubric-footer" />
          <td className="evals__rubric-footer">
            <span className="evals__timing">
              52s agent <span>4.6s judge</span> 8.6 credits
            </span>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default function EvalsWindow({ className = '' }) {
  const [expanded, setExpanded] = useState(true)
  const detailsId = `evals-details-${useId().replace(/:/g, '')}`
  const passed = PROMPTS.filter(({ attempts }) => attempts.every(Boolean)).length + 1
  const failed = PROMPTS.length + 1 - passed

  return (
    <ProductWindow title="Evals" titleAlign="right" className={`feature-window evals__window ${className}`} role="group" aria-label="Product demonstration of Hex Evals">
      <div className="evals__panel" data-theme="light">
        <header className="evals__header">
          <div>
            <h3 className="evals__title">Q3 Enterprise Launch Readiness</h3>
            <div aria-hidden="true" className="evals__progress">
              <span className="evals__passed-progress" style={{ flex: passed }} />
              <span className="evals__failed-progress" style={{ flex: failed }} />
            </div>
            <div className="evals__summary">
              <span className="evals__passed-count">
                <img alt="" height="14" width="14" src="/assets/icons/evals/passed.svg" />
                {passed} passed
              </span>
              <span className="evals__failed-count">
                <img alt="" height="14" width="14" src="/assets/icons/evals/failed.svg" />
                {failed} failed
              </span>
            </div>
          </div>
          <div className="evals__metadata">
            <span>Completed 19 min ago, Maya Patel</span>
            <span className="evals__timing">
              10m 39s total <span>141.2 credits</span>
            </span>
          </div>
        </header>
        <div aria-label="Q3 Enterprise Launch Readiness evaluation results, scroll to explore" className="evals__scroll-area" role="region">
          <div className="evals__scroll-wrapper">
            <div className="evals__scroll-container">
              <div className="evals__content">
                <table aria-label="Evaluation prompts" className="evals__prompts">
                  <colgroup>
                    <col className="evals__grade-column" />
                    <col className="evals__prompt-column" />
                    <col className="evals__attempts-column" />
                    <col className="evals__rubrics-column" />
                    <col className="evals__time-column" />
                    <col className="evals__credits-column" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="evals__column-heading" scope="col">Grade</th>
                      <th className="evals__column-heading" scope="col">Prompt</th>
                      <th className="evals__column-heading" scope="col">Attempts</th>
                      <th className="evals__column-heading" scope="col">Rubrics</th>
                      <th className="evals__column-heading" scope="col">Average time</th>
                      <th className="evals__column-heading" scope="col">Total credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={expanded ? 'evals__expanded-row' : undefined}>
                      <td className="evals__grade-cell">
                        <button
                          aria-controls={detailsId}
                          aria-expanded={expanded}
                          aria-label="ARR evaluation rubric details"
                          className={`evals__expand-button${expanded ? '' : ' evals__collapsed'}`}
                          type="button"
                          onClick={() => setExpanded((e) => !e)}
                        >
                          <Icon name="chevron-down" className="evals__chevron" />
                        </button>
                        <Status />
                      </td>
                      <th className="evals__prompt-cell" scope="row">How much ARR do we have from currently active customers?</th>
                      <td className="evals__cell">
                        <span className="evals__attempts">
                          <Status iconOnly />
                          <span>1/1</span>
                        </span>
                      </td>
                      <td className="evals__cell">3</td>
                      <td className="evals__cell">56s</td>
                      <td className="evals__cell">8.6</td>
                    </tr>
                    <tr hidden={!expanded} id={detailsId}>
                      <td className="evals__details-cell" colSpan={6}>
                        <RubricTable />
                      </td>
                    </tr>
                    {PROMPTS.map(({ prompt, attempts, rubrics, averageTime, credits }) => (
                      <tr key={prompt}>
                        <td className="evals__grade-cell">
                          <span aria-hidden="true" className="evals__row-caret evals__collapsed">
                            <Icon name="chevron-down" className="evals__chevron" />
                          </span>
                          <Status passed={attempts.every(Boolean)} />
                        </td>
                        <th className="evals__prompt-cell" scope="row">{prompt}</th>
                        <td className="evals__cell">
                          <span className="evals__attempts">
                            <span className="evals__attempt-icons">
                              {attempts.map((ok, i) => (
                                <Status key={i} iconOnly passed={ok} />
                              ))}
                            </span>
                            <span>
                              {attempts.filter(Boolean).length}/{attempts.length}
                            </span>
                          </span>
                        </td>
                        <td className="evals__cell">{rubrics}</td>
                        <td className="evals__cell">{averageTime}</td>
                        <td className="evals__cell">{credits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductWindow>
  )
}
