// ComputeProfilesModal (specs/solutions.md §4.4.5, dom/pricing-compute-modal.html). Open state lives in the URL
// (?modal=compute, owned by PricingPage). No enter/exit animation and no body scroll lock (both measured absent).
// Closes via the × button or a backdrop click.
import { createPortal } from 'react-dom'
import { COMPUTE_ROWS } from './data.js'
import { CloseIcon } from './icons.jsx'

export default function ComputeProfilesModal({ open, onClose }) {
  if (!open) return null
  return createPortal(
    <div className="pf-modal" data-theme="dark" role="dialog" aria-modal="true" aria-labelledby="pf-modal-title">
      <div className="pf-modal__inner">
        <div className="pf-modal__close">
          <button type="button" className="pf-modal__close-btn" aria-label="Close" onClick={onClose}>
            <span className="pf-modal__close-icon">
              <CloseIcon />
            </span>
          </button>
        </div>
        <div>
          <div className="pf-modal__header">
            <h2 id="pf-modal-title" className="pf-modal__h2">
              Compute profiles
            </h2>
            <p>
              Medium compute is included on all paid plans. Team and Enterprise can opt in to pay-as-you-go compute for
              advanced data science use cases.{' '}
              <a
                href="https://learn.hex.tech/docs/explore-data/projects/environment-configuration/environment-views#size"
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn more
              </a>
              .
            </p>
          </div>
          <table className="pf-compute-table">
            <thead>
              <tr>
                <th>Profile</th>
                <th>GB</th>
                <th>CPU</th>
                <th>Price / hr *</th>
              </tr>
            </thead>
            <tbody>
              {COMPUTE_ROWS.map((row) => (
                <tr key={row[0]}>
                  {row.map((v, i) => (
                    <td key={i}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="pf-modal__small">*Billed per minute of usage. Free trials are limited to Medium compute.</p>
        </div>
      </div>
      <div className="pf-modal__backdrop" onClick={onClose} />
    </div>,
    document.body,
  )
}
