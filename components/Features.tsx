'use client'
import { useRef } from 'react'
import styles from './Features.module.css'

const portraits = [
  {
    img: '/Bule1.png',
    title: 'Applied Artificial Intelligence',
    sub: 'Production-grade AI workflows with guardrails, human oversight, and clear ROI paths.',
    bullets: ['Intelligent process automation', 'LLM governance and guardrails', 'AI readiness training for teams', 'Responsible AI playbooks'],
    link: '#'
  },
  {
    img: '/Blue4.png',
    title: 'Data Analytics - Applied AI',
    sub: 'Decode, Decide, and Dominate with Data — clear insights and confident action through our AI-powered data analytics CoE.',
    bullets: ['Unified data across systems', 'Analytics teams actually use', 'AI-driven intelligence in workflows', 'Governed, defendable metrics'],
    link: '/coe/data-analytics'
  },
  {
    img: '/Blue3.png',
    title: 'Cyber Security - Applied AI',
    sub: 'Strengthen security posture with AI-driven threat intelligence.',
    bullets: ['Security architecture and controls', 'AI-enhanced threat and risk visibility', 'Compliance alignment and audit readiness', 'Secure AI and data protection'],
    link: '#'
  },
  {
    img: '/Blue2.png',
    title: 'Cloud & Infrastructure - Applied AI',
    sub: 'AI-optimized cloud & infrastructure that\'s resilient, scalable, and cost-aware.',
    bullets: ['AI-assisted cloud migration', 'Infrastructure modernization', 'Reliability engineering', 'Platform standardization'],
    link: '#'
  },
  {
    img: '/Blue6.png',
    title: 'Automated AI Testing',
    sub: 'Ship faster with AI-powered testing woven into every release.',
    bullets: ['Automation-first QA', 'Performance and resilience testing', 'Test strategy and tooling', 'Continuous quality systems'],
    link: '#'
  },
  {
    img: '/Blue5.png',
    title: 'Global Capability Centers (GCC)',
    sub: 'AI-enabled centers that operate as a true extension of your business.',
    bullets: ['GCC setup and operating model', 'Talent, tooling, and delivery governance', 'CoE design and scaling', 'Continuous performance improvement'],
    link: '#'
  },
]

export default function Features() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const scrollByOneCard = (dir: 1 | -1) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    const card = wrapper.querySelector<HTMLElement>(`[data-feature-card]`)
    if (!card) return
    const gap = parseInt(getComputedStyle(wrapper).gap || '30', 10) || 30
    const amount = card.offsetWidth + gap
    wrapper.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  // No duplicates: on mobile we stack vertically
  const cards = portraits
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.sectionHeader}>
        <h2 className="heading-main text-gradient anim-hidden blur-zoom-out observe-me">Automate. Elevate. Accelerate</h2>
        <p className="sub-heading anim-hidden fade-up observe-me">AI built into every layer so your enterprise doesn't just keep up, it pulls ahead.</p>
      </div>
      <div className={styles.carouselShell}>
        <button className={styles.navBtn} type="button" aria-label="Previous cards" onClick={() => scrollByOneCard(-1)}>
          ‹
        </button>

        <div className={styles.scrollingWrapper} ref={wrapperRef}>
          <div className={styles.scrollingTrack}>
          {cards.map((p, i) => (
            <div key={i} data-feature-card className={`${styles.card} anim-hidden zoom-out-element observe-me delay-${(i % 6) + 1}`}>
              <div className={styles.cardImgWrapper}>
                <img src={p.img} alt={p.title} />
              </div>
              <div className={styles.cardContent}>
                <a href={p.link} className={styles.cardTitle}>{p.title}</a>
                <p className={styles.cardSub}>{p.sub}</p>
                <ul className={styles.cardBullets}>
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

        <button className={styles.navBtn} type="button" aria-label="Next cards" onClick={() => scrollByOneCard(1)}>
          ›
        </button>
      </div>
    </section>
  )
}
