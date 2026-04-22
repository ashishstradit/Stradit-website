'use client'
import { useEffect, useState } from 'react'
import styles from './TypeWriter.module.css'

export default function TypeWriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => setDone(true), 600)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span className="text-gradient">
      {displayed}
    </span>
  )
}
