'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './gcc-page.module.css'

const MESSAGE_TYPE = 'stradit-gcc-frame-height'
const MIN_H = 400
const MAX_H = 12000
const FALLBACK = 720
const HEIGHT_BUFFER = 24
/** Debounce inner doc resize → fewer reflows that yank parent scroll position */
const RESIZE_DEBOUNCE_MS = 140

export default function GccFrame() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const [height, setHeight] = useState(FALLBACK)

  /**
   * Never shrink iframe height once grown — shrinking is what makes the parent page
   * “snap” upward / feel like auto-scroll. Extra blank at bottom is better than jump.
   */
  const commitHeight = useCallback((raw: number) => {
    if (!Number.isFinite(raw) || raw < MIN_H) return
    const next = Math.min(MAX_H, Math.max(MIN_H, Math.ceil(raw + HEIGHT_BUFFER)))
    setHeight((prev) => Math.max(prev, next))
  }, [])

  const measureFromDoc = useCallback(() => {
    const doc = iframeRef.current?.contentDocument
    if (!doc?.body) return
    try {
      const h = Math.max(
        doc.documentElement?.scrollHeight ?? 0,
        doc.body.scrollHeight ?? 0,
        doc.documentElement?.offsetHeight ?? 0
      )
      commitHeight(h)
    } catch {
      /* cross-origin */
    }
  }, [commitHeight])

  const scheduleMeasureFromDoc = useCallback(() => {
    if (debounceTimer.current) window.clearTimeout(debounceTimer.current)
    debounceTimer.current = window.setTimeout(() => {
      debounceTimer.current = undefined
      measureFromDoc()
    }, RESIZE_DEBOUNCE_MS)
  }, [measureFromDoc])

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

    const timers: ReturnType<typeof setTimeout>[] = []
    let ro: ResizeObserver | undefined

    const attach = () => {
      measureFromDoc()
      ;[80, 250, 700, 1800, 3200].forEach((ms) => {
        timers.push(window.setTimeout(() => measureFromDoc(), ms))
      })
      try {
        const doc = el.contentDocument
        if (!doc?.body) return
        ro = new ResizeObserver(() => {
          scheduleMeasureFromDoc()
        })
        ro.observe(doc.body)
        ro.observe(doc.documentElement)
      } catch {
        /* */
      }
    }

    el.addEventListener('load', attach)
    if (el.contentDocument?.readyState === 'complete') attach()

    return () => {
      el.removeEventListener('load', attach)
      timers.forEach(clearTimeout)
      if (debounceTimer.current) window.clearTimeout(debounceTimer.current)
      ro?.disconnect()
    }
  }, [measureFromDoc, scheduleMeasureFromDoc])

  return (
    <iframe
      ref={iframeRef}
      className={styles.gccIframe}
      title="Global Capability Center"
      src="/GCC/GCC.html"
      style={{
        width: '100%',
        height,
        maxWidth: '100%',
        border: 0,
        display: 'block',
        marginBottom: 0,
        overflow: 'hidden',
      }}
    />
  )
}
