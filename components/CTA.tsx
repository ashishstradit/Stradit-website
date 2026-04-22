import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <h2 className="heading-main anim-hidden blur-zoom-out observe-me"><span className="text-gradient">Ready To Turn Innovation Into Execution</span></h2>
      <p className="sub-heading anim-hidden fade-up observe-me" style={{ marginBottom: '40px' }}>
        Tell us what you're planning to build with AI and tech engineering. We'll map the fastest path from where you are to production outcomes.
      </p>
      <button className="cta-btn anim-hidden fade-up delay-1 observe-me">Contact StradIT</button>
    </section>
  )
}
