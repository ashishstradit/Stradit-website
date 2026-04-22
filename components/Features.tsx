'use client'
import styles from './Features.module.css'

const portraits = [
  {
    img: '/Bule1.png',
    title: 'Applied AI',
    sub: 'Production-grade AI workflows with guardrails, human oversight, and clear ROI paths.',
    bullets: ['Intelligent process automation', 'LLM governance and guardrails', 'AI readiness training for teams', 'Responsible AI playbooks'],
    link: '#'
  },
  {
    img: '/Blue4.png',
    title: 'Data Analytics',
    sub: 'Turn fragmented data into trusted insights; built for speed, accuracy, and action.',
    bullets: ['Modern analytics foundations', 'AI-powered data quality and observability', 'Executive dashboards', 'Predictive and prescriptive models'],
    link: '#'
  },
  {
    img: '/Blue3.png',
    title: 'Cybersecurity',
    sub: 'Strengthen security posture with AI-driven threat intelligence.',
    bullets: ['Security architecture and controls', 'AI-enhanced threat and risk visibility', 'Compliance alignment and audit readiness', 'Secure AI and data protection'],
    link: '#'
  },
  {
    img: '/Blue2.png',
    title: 'Cloud & Infrastructure',
    sub: 'AI-optimized cloud & infrastructure that\'s resilient, scalable, and cost-aware.',
    bullets: ['AI-assisted cloud migration', 'Infrastructure modernization', 'Reliability engineering', 'Platform standardization'],
    link: '#'
  },
  {
    img: '/Blue6.png',
    title: 'Testing & Quality Engineering',
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
  const cards = [...portraits, ...portraits]
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.sectionHeader}>
        <h2 className="heading-main text-gradient anim-hidden blur-zoom-out observe-me">One partner. Every capability.</h2>
        <p className="sub-heading anim-hidden fade-up observe-me">AI built into every layer so your enterprise doesn't just keep up, it pulls ahead.</p>
      </div>
      <div className={styles.scrollingWrapper}>
        <div className={styles.scrollingTrack}>
          {cards.map((p, i) => (
            <div key={i} className={`${styles.card} anim-hidden zoom-out-element observe-me delay-${(i % 6) + 1}`}>
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
    </section>
  )
}
