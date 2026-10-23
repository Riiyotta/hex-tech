// HubSpotFormShell + FormFields (specs/solutions.md §4.7.2; dom/form-hubspot.css, dom/request-a-demo-form.html).
// Visual-only rebuild of the HubSpot "developer embed" form as a plain React form: no HubSpot script, no
// endpoint, no network request and nothing stored. States: rest, focus, error, submitting.
// Validation follows the live client behaviour: on submit, only the FIRST invalid required field is marked
// (aria-invalid, input margin-bottom 10px) and focused, with "Please complete this required field." below it.
// When everything is valid the Submit button shows the submitting state, then a neutral local notice.
import { useEffect, useRef, useState } from 'react'

const FIELDS = [
  [
    { name: '0-1/firstname', label: 'First Name', type: 'text', required: true, autoComplete: 'given-name' },
    { name: '0-1/lastname', label: 'Last Name', type: 'text', required: true, autoComplete: 'family-name' },
  ],
  [
    { name: '0-1/email', label: 'Work Email', type: 'email', required: true, autoComplete: 'email', inputMode: 'email' },
    { name: '0-1/form_fill_company__c', label: 'Company Name', type: 'text', required: true },
  ],
  [
    {
      name: '0-1/person_notes__c',
      label: 'What do you want to talk about?',
      type: 'textarea',
      placeholder: 'Business Intelligence, Conversational Analytics, Context for Agents, etc.',
    },
  ],
]
const ALL = FIELDS.flat()
const REQUIRED_MSG = 'Please complete this required field.'
// Not captured on the live page (only the empty-submit case was exercised, spec §7.2). HubSpot's standard copy.
const EMAIL_MSG = 'Email must be formatted correctly.'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SUBMIT_MS = 900 // local-only stand-in for the request round trip

function validate(values) {
  for (const f of ALL) {
    const v = (values[f.name] ?? '').trim()
    if (f.required && !v) return { name: f.name, message: REQUIRED_MSG }
    if (f.type === 'email' && v && !EMAIL_RE.test(v)) return { name: f.name, message: EMAIL_MSG }
  }
  return null
}

function Field({ field, formId, value, error, onChange, inputRef }) {
  const id = `${formId}-${field.name.replace(/\W/g, '-')}`
  const common = {
    id,
    name: field.name,
    ref: inputRef,
    value,
    onChange: (e) => onChange(field.name, e.target.value),
    'aria-invalid': error ? 'true' : 'false',
    'aria-required': field.required ? 'true' : 'false',
    'aria-labelledby': `${id}-label`,
    'aria-describedby': error ? `${id}-error` : undefined,
    placeholder: field.placeholder ?? '',
    className: field.type === 'textarea' ? 'hf-textarea' : 'hf-input',
  }
  return (
    <div className="hf-field">
      <label id={`${id}-label`} htmlFor={id} className="hf-label">
        <span>
          <span>{field.label}</span>
          {field.required && <span className="hf-required">*</span>}
        </span>
      </label>
      {field.type === 'textarea' ? (
        <textarea {...common} inputMode="text" />
      ) : (
        <input {...common} type={field.type} inputMode={field.inputMode} autoComplete={field.autoComplete} required={field.required} />
      )}
      {error && (
        <div id={`${id}-error`} className="hf-error" aria-live="polite">
          <span className="hf-sr-only">Error: </span>
          {error}
        </div>
      )}
    </div>
  )
}

export default function HubSpotFormShell({ formId }) {
  const [values, setValues] = useState({})
  const [error, setError] = useState(null) // { name, message }
  const [status, setStatus] = useState('idle') // idle | submitting | done
  const refs = useRef({})
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onChange = (name, v) => {
    setValues((s) => ({ ...s, [name]: v }))
    if (status === 'done') setStatus('idle')
    if (error?.name === name) setError(null)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (status === 'submitting') return
    const invalid = validate(values)
    setError(invalid)
    if (invalid) {
      setStatus('idle')
      refs.current[invalid.name]?.focus()
      return
    }
    setStatus('submitting')
    timer.current = window.setTimeout(() => setStatus('done'), SUBMIT_MS)
  }

  return (
    <div className="hf-box">
      <form id={formId} className="hf-form" noValidate aria-label="Contact form" onSubmit={onSubmit}>
        <div className="hf-step">
          {FIELDS.map((row, i) => (
            <div key={i} className="hf-row" data-cols={row.length}>
              {row.map((field) => (
                <Field
                  key={field.name}
                  field={field}
                  formId={formId}
                  value={values[field.name] ?? ''}
                  error={error?.name === field.name ? error.message : null}
                  onChange={onChange}
                  inputRef={(el) => {
                    refs.current[field.name] = el
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </form>
      <div className="hf-submit-wrap">
        <button
          type="submit"
          form={formId}
          className="hf-submit"
          data-submitting={status === 'submitting' ? '' : undefined}
          aria-busy={status === 'submitting'}
        >
          Submit
        </button>
        {status === 'done' && (
          <p className="hf-local-note" role="status">
            This is a local clone; the form isn't sent anywhere.
          </p>
        )}
      </div>
      <p className="hf-disclaimer">
        By submitting this form you agree to the processing of your personal data as described in our{' '}
        <a href="https://learn.hex.tech/docs/legal/terms-and-conditions" target="_blank" rel="noopener noreferrer">
          Terms
        </a>{' '}
        and our{' '}
        <a href="https://learn.hex.tech/docs/trust/privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy policy
        </a>
        .
      </p>
    </div>
  )
}
