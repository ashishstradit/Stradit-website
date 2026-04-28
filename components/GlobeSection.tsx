'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './GlobeSection.module.css'

export default function GlobeSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.globeSection}>
      <video ref={videoRef} className={styles.globeVideo} autoPlay loop muted playsInline preload="none">
        {shouldLoadVideo ? <source src="/Globe.web.mp4" type="video/mp4" /> : null}
      </video>
      <div className={styles.content}>
        <h2 className="heading-main anim-hidden blur-zoom-out observe-me"><span className="text-gradient">Global Scale, Local Impact</span></h2>
        <p className="sub-heading anim-hidden fade-up observe-me" style={{ textAlign: 'left', margin: '0 0 40px 0' }}>
          We believe that the most powerful technologies should be accessible, scalable, and flawlessly engineered.
          From our team to your doorstep, we deliver the intelligence that moves the world.
        </p>
        <button className="cta-btn anim-hidden fade-up delay-1 observe-me">Learn More</button>
      </div>
    </section>
  )
}
