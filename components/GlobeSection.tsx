'use client'
import styles from './GlobeSection.module.css'

export default function GlobeSection() {
  return (
    <section className={styles.globeSection}>
      <video className={styles.globeVideo} autoPlay loop muted playsInline>
        <source src="/Globe.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h2 className="heading-main anim-hidden blur-zoom-out observe-me">Global Scale, Local Impact</h2>
        <p className="sub-heading anim-hidden fade-up observe-me" style={{ textAlign: 'left', margin: '0 0 40px 0' }}>
          We believe that the most powerful technologies should be accessible, scalable, and flawlessly engineered.
          From our team to your doorstep, we deliver the intelligence that moves the world.
        </p>
        <button className="cta-btn anim-hidden fade-up delay-1 observe-me">Learn More</button>
      </div>
    </section>
  )
}
