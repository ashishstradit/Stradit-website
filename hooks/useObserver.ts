'use client'
import { useEffect } from 'react'

export function useObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      {
        // Match when any pixel enters; 0.15 was hiding stacked hero lines (subtitle/paragraph/button)
        // until the user scrolled further, so copy looked "missing".
        threshold: 0,
        rootMargin: '0px 0px 25% 0px',
      }
    )
    document.querySelectorAll('.observe-me').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
