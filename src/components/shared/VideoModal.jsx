// Usage: {open && <VideoModal src="https://www.youtube.com/embed/…?autoplay=1" title="Threads video" onClose={close} />}
// product §2.2 N8 video modal: portal into <body>, fixed overlay rgba(1,1,27,.8), z 2147483647, YouTube <iframe>
// (external player, not cloned; attrs width 1280 / height 721, allow list from the live DOM). Escape and a backdrop
// click close it.
// variant 'video' (default): Threads VideoModal — frame calc(100vw - 40px) × calc(100vh - 40px), max 1400 × 860;
//   40×40 round "Close video" button with a 15px × icon (placement not in the spec: top-right corner).
// variant 'fullscreen': Context Studio FullScreenVideo — padded flex overlay, frame min(1400px, 100%) at 1280/721,
//   max-height calc(100vh - 120px); the close is a secondary md Button (72×42); body scroll is locked while open.
// Props: src, title ('Video'), onClose, variant.
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button.jsx'

function CloseIcon() {
  return (
    <svg height="15" viewBox="0 0 15 15" width="15" aria-hidden="true">
      <path d="M3.5 3.5l8 8m0-8l-8 8" stroke="currentColor" />
    </svg>
  )
}

export default function VideoModal({ src, title = 'Video', onClose, variant = 'video' }) {
  const fullscreen = variant === 'fullscreen'
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    let prev
    if (fullscreen) {
      prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      if (fullscreen) document.body.style.overflow = prev
    }
  }, [onClose, fullscreen])

  return createPortal(
    <div className="video-modal" data-variant={fullscreen ? 'fullscreen' : 'video'} role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      {fullscreen ? (
        <Button variant="secondary" size="md" corners={false} className="video-modal__close" aria-label="Close video" onClick={onClose}>
          <CloseIcon />
        </Button>
      ) : (
        <button type="button" className="video-modal__close" aria-label="Close video" onClick={onClose}>
          <CloseIcon />
        </button>
      )}
      <iframe
        className="video-modal__frame"
        src={src}
        title={title}
        width="1280"
        height="721"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body,
  )
}
