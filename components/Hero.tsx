'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { useObserver } from '@/hooks/useObserver'
import TypeWriter from './TypeWriter'

export default function Hero() {
  useObserver()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY
        videoRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.hero}>
      <video ref={videoRef} className={styles.videoBg} autoPlay loop muted playsInline>
        <source src="/Home Blue Section (2).mp4" type="video/mp4" />
      </video>
      <h1 className={`${styles.heroHeading} anim-hidden blur-zoom-out delay-2 observe-me`}>
        <TypeWriter text="Applied AI" /> and Engineering That Delivers Measurable Change
      </h1>
      <p className="sub-heading anim-hidden fade-up delay-3 observe-me">
        StradIT helps you turn technology into a lasting edge through applied AI and high-quality engineering delivery.
      </p>
      <div className={styles.heroButtons}>
        <button className="cta-btn anim-hidden fade-right delay-4 observe-me">
          Start Your Digital Transformation
        </button>
        <button className="cta-btn anim-hidden fade-left delay-4 observe-me">
          Explore Our Center of Excellence
        </button>
      </div>
    </section>
  )
}
