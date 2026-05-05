'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const MESSAGE_TYPE = 'stradit-contact-frame-height'
const MIN_H = 400
const MAX_H = 12000
const FALLBACK = 820
const HEIGHT_BUFFER = 24

export default function ContactFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(FALLBACK)

  const commitHeight = useCallback((raw: number) => {
    if (!Number.isFinite(raw) || raw < MIN_H) return
    const next = Math.min(MAX_H, Math.max(MIN_H, Math.ceil(raw + HEIGHT_BUFFER)))
    setHeight((prev) => Math.max(prev, next))
  }, [])

  useEffect(() => {
    const onMsg = (ev: MessageEvent) => {
      const d = ev.data
      if (!d || typeof d !== 'object' || d.type !== MESSAGE_TYPE) return
      commitHeight(Number(d.height))
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [commitHeight])

  useEffect(() => {
    const el = iframeRef.current
    if (!el) return

    const timers: number[] = []

    const measure = () => {
      const doc = el.contentDocument
      if (!doc?.body) return
      try {
        const h = Math.max(
          doc.documentElement?.scrollHeight ?? 0,
          doc.body.scrollHeight ?? 0,
          doc.documentElement?.offsetHeight ?? 0
        )
        commitHeight(h)
      } catch {
        /* ignore */
      }
    }

    const attach = () => {
      measure()
      ;[80, 250, 700, 1800, 3200].forEach((ms) => timers.push(window.setTimeout(measure, ms)))
    }

    el.addEventListener('load', attach)
    if (el.contentDocument?.readyState === 'complete') attach()

    return () => {
      el.removeEventListener('load', attach)
      timers.forEach(clearTimeout)
    }
  }, [commitHeight])

  return (
    <iframe
      ref={iframeRef}
      title="Contact us"
      src="/contact-us/index.html"
      style={{
        width: '100%',
        height,
        border: 0,
        display: 'block',
        overflow: 'hidden',
      }}
    />
  )
}

