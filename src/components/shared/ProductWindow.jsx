// Usage: <ProductWindow title="Chat with the Hex Agent" guides={['top', 'left']} interactive className="max-w-[590px]">…mock UI…</ProductWindow>
// CLONE_SPEC §3.4 (InteractiveFeatureWrapper): white, radius 6px, window shadow + hover shadow (.2s ease-in-out),
// IBM Plex Sans 12px #01011B. Optional tab label above (`title`), dashed guide lines (`guides`: any of
// 'top' | 'bottom' | 'left' | 'right'; vertical ones extend 50px, horizontal ones 200px), and `interactive`
// hides the cursor on hover like the original. Window chrome (traffic lights, Slack/CLI title) is section content.
// `titleAlign` 'left' (default, tab at left 12) | 'right' (windowTitlePosition "right": Evals, BI threads window).

export default function ProductWindow({ title, titleAlign = 'left', guides = [], interactive = false, as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag
      className={`product-window ${className}`}
      data-interactive={interactive ? 'true' : undefined}
      data-title-align={titleAlign === 'right' ? 'right' : undefined}
      {...rest}
    >
      {title && (
        <div className="product-window__title">
          <span>{title}</span>
        </div>
      )}
      {guides.length > 0 && (
        <div className="product-window__guides" aria-hidden="true">
          {guides.map((edge) => (
            <div key={edge} className="product-window__guide" data-edge={edge} />
          ))}
        </div>
      )}
      {children}
    </Tag>
  )
}
