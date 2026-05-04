'use client'
import { useEffect } from 'react'
import type { Metadata } from 'next'
import './gcc.css'

const differenceCards = [
  { icon: 'cloud', title: 'First hires in 2–4 weeks. Not quarters.' },
  { icon: 'shield', title: 'Cut costs up to 50% without cutting corners.' },
  { icon: 'server', title: 'Go from 5 to 50 to 500. We grow when you grow.' },
  { icon: 'code', title: 'One partner. Full stack. No juggling vendors.' },
]

const builderCards = [
  { icon: 'brain', title: 'AI & Machine Learning teams' },
  { icon: 'chart', title: 'Cloud & DevOps operations' },
  { icon: 'code', title: 'Data Analytics hubs' },
  { icon: 'server', title: 'Cybersecurity centers' },
  { icon: 'code', title: 'AI Automated Testing' },
]

const collageItems = [
  { img: '/GCC/Globe%20Talent.jpg', title: 'Global Talent, Local Expertise', desc: 'Access world-class professionals in tech, analytics, finance, and beyond in locations that make strategic sense.', cls: 'ci-1' },
  { img: '/GCC/Low%20Cost.png', title: 'Cost Without Compromise', desc: 'Reduce operational costs by up to 50% while elevating quality and output.', cls: 'ci-2' },
  { img: '/GCC/Speed%20to%20scale.png', title: 'Speed to Scale', desc: 'Ramp up (or down) with agility. Your GCC grows with your ambitions.', cls: 'ci-3' },
  { img: '/GCC/innovation.jpg', title: 'Innovation at the Core', desc: 'Transform your center into a hub for R&D, digital transformation, and next-gen capabilities.', cls: 'ci-4' },
  { img: '/GCC/Total%20Transparency.png', title: 'Total Visibility', desc: 'Track payroll, team performance, costs, and compliance.', cls: 'ci-5' },
]

const icons: Record<string, JSX.Element> = {
  cloud: <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />,
  shield: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />,
  server: <path d="M22 12H2v-2h20v2zm0-6H2V4h20v2zm0 12H2v-2h20v2z" />,
  code: <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />,
  brain: <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />,
  chart: <path d="M3 3v18h18v-2H5V3H3zm6 14h2v-6H9v6zm4 0h2V7h-2v10zm4 0h2v-4h-2v4z" />,
}

export default function GccPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.gcc-anim, .gcc-anim-up, .gcc-anim-zoom')
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target) }
      })
    }, { threshold: 0.08 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="gcc-page">

      {/* Hero */}
      <section className="gcc-hero">
        <img src="/GCC/Hero%20Section.jpg" className="gcc-hero-bg" alt="GCC Hero" />
        <div className="gcc-hero-overlay" />
        <div className="gcc-hero-content">
          <h1 className="gcc-anim">Your Global Capability Center</h1>
          <p className="gcc-anim" style={{ transitionDelay: '0.15s' }}>
            Built by StradIT. Owned by you.<br />
            Your dedicated tech team, finance hub, or innovation center will be fully operational in weeks, not months. We set it up. We run the backend. You call the shots.
          </p>
          <a href="#difference" className="gcc-btn gcc-anim" style={{ transitionDelay: '0.3s' }}>
            Build What&apos;s Yours
          </a>
        </div>
      </section>

      {/* The StradIT Difference */}
      <section id="difference" className="gcc-section gcc-section-dark">
        <div className="gcc-container">
          <div className="gcc-section-header">
            <h2 className="gcc-anim">The StradIT Difference</h2>
            <p className="gcc-anim" style={{ transitionDelay: '0.15s' }}>
              With StradIT&apos;s GCC, you hire top-tier talent with zero headaches and with full control. This isn&apos;t outsourcing. This is ownership.
            </p>
          </div>
          <div className="gcc-grid">
            {differenceCards.map((c, i) => (
              <div key={i} className="gcc-card gcc-anim" style={{ transitionDelay: `${0.1 * i + 0.2}s` }}>
                <div className="gcc-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">{icons[c.icon]}</svg>
                </div>
                <div className="gcc-card-body"><h4>{c.title}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Unlock */}
      <section className="gcc-section gcc-section-base">
        <div className="gcc-container">
          <div className="gcc-section-header">
            <h2 className="gcc-anim-zoom">What You Unlock</h2>
            <p className="gcc-anim-zoom" style={{ transitionDelay: '0.15s' }}>
              StradIT helps you establish and run a captive center that functions as a seamless extension of your headquarters. From IT and finance to R&amp;D and customer operations, we help you centralize, scale, and innovate.
            </p>
          </div>
          <div className="gcc-collage">
            {collageItems.map((item, i) => (
              <div key={i} className={`gcc-collage-item ${item.cls} gcc-anim-zoom`} style={{ transitionDelay: `${0.15 * i + 0.2}s` }}>
                <div className="gcc-collage-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="gcc-collage-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Builders */}
      <section className="gcc-section gcc-section-dark">
        <div className="gcc-container">
          <div className="gcc-section-header">
            <h2 className="gcc-anim">Built for Builders</h2>
          </div>
          <div className="gcc-grid gcc-grid-5">
            {builderCards.map((c, i) => (
              <div key={i} className="gcc-card gcc-anim" style={{ transitionDelay: `${0.1 * i + 0.2}s` }}>
                <div className="gcc-card-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">{icons[c.icon]}</svg>
                </div>
                <div className="gcc-card-body"><h4>{c.title}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gcc-cta">
        <img src="/Background%20Data22.png" className="gcc-cta-bg" alt="CTA Background" />
        <div className="gcc-cta-overlay" />
        <div className="gcc-cta-content">
          <h2 className="gcc-anim-up">Ready to Build Your Global Powerhouse?</h2>
          <p className="gcc-anim-up" style={{ transitionDelay: '0.2s' }}>
            Let&apos;s talk about what your GCC could look like and how fast we can get you there.
          </p>
          <a href="#" className="gcc-btn gcc-anim-up" style={{ transitionDelay: '0.4s' }}>
            Book a Free Strategy Call
          </a>
        </div>
      </section>

    </div>
  )
}
