'use client'
import { useEffect, useRef, type CSSProperties } from 'react'
import '../case-study.css'

const img = (name: string) => `/case%20study%20ai/${encodeURIComponent(name)}`

const bullets1 = [
  'Slow and inconsistent manual processes',
  'Rigid legacy RPA tools',
  'Complex regulators were raising the bar',
  'Only being available during the business hours was a hurdle',
]

const bullets2 = [
  'Creating conversational AI agents trained on domain-specific knowledge',
  'Creating autonomous workflows that intelligently escalate exceptions to human reviewers',
  'Developing continuous learning loops to increase accuracy with each completed task',
  'Providing enterprise-level security, compliance, and audit trails',
]

const bullets3 = [
  'AltsIQ identified 95%+ of operational risks, without missing a beat',
  'Due diligence took from a 2-week slog to a 2-minute exercise',
  'Deal capacity increased from a few per year to 40+ at the same price point',
  'A human analyst can cost up to $200K per year. The AI agent costs $250 per month',
  'The company operates 24/7 across 50+ jurisdictions in 10+ languages, without any sick days or gaps in turnover',
  'Compliance analysis improved for speed, acuity, and explainability to human analysts',
  'Portfolio and fund analysis that took weeks to deliver are now available on demand',
  'The company ceased to be constrained by headcount and began to scale with intelligence',
]

export default function AICaseStudy() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = pageRef.current?.querySelectorAll('.cs-anim') ?? []
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target) } })
    }, { threshold: 0.05 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const d = (s: string): CSSProperties => ({ transitionDelay: s })

  return (
    <div ref={pageRef} className="cs-page">

      {/* Hero */}
      <section className="cs-hero" style={{ background: '#070707' }}>
        <img src={img('Ai.jpg')} className="cs-hero-bg" alt="AI Hero" style={{ opacity: 0.8 }} />
      </section>

      {/* Section 2: Center heading */}
      <section className="cs-section" style={{ background: '#111111' }}>
        <div className="cs-container cs-center">
          <h2 className="cs-h2 cs-anim cs-anim-rtl">
            Faster Due Diligence Delivered with Purpose-Built AI Agents
          </h2>
          <p className="cs-h3 cs-anim cs-anim-rtl" style={d('0.2s')}>
            Some companies hired more analysts. This company hired AI agents instead. StradIT created a digital workforce that reduced two weeks of work to minutes, yielding a 5,000% ROI on the investment.
          </p>
        </div>
      </section>

      {/* Section 3: Client Overview */}
      <section className="cs-section" style={{ background: '#070707' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">Client Overview</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
              A mid-to-large financial organization with alternative investments, AML/KYC, and fund operations for multiple asset classes and geographies. The company was losing out to complexity.
            </h3>
            <ul className="cs-bullets">
              {bullets1.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.3 + i * 0.15}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.9s')}>
              They had the ambition. What they needed was intelligence that could keep up with it.
            </p>
          </div>
          <div className="cs-anim cs-anim-rtl" style={d('0.5s')}>
            <img src={img('Client Overview.jpg')} className="cs-img" alt="Client Overview" />
          </div>
        </div>
      </section>

      {/* Section 4: StradIT AI Development */}
      <section className="cs-section" style={{ background: '#111111' }}>
        <div className="cs-container cs-grid">
          <div className="cs-anim cs-anim-rtl" style={d('0.5s')}>
            <img src={img('Ai Development.jpg')} className="cs-img" alt="AI Development" />
          </div>
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">StradIT: Enhanced AI Development for the Needs of Finance</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
              The expertise of StradIT in AI development is in developing intelligent agents for financial institutions. These are not chatbots that operate on a pre-set script.
            </h3>
            <ul className="cs-bullets">
              {bullets2.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.3 + i * 0.15}s`)}>{b}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: What Client Achieved */}
      <section className="cs-section" style={{ background: '#070707' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">What the Client Achieved</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
              The results demonstrated what purpose-built AI agents can do when they are built with the right expertise and deployed with the right governance.
            </h3>
            <ul className="cs-bullets">
              {bullets3.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.3 + i * 0.1}s`)}>{b}</li>)}
            </ul>
          </div>
          <div className="cs-anim cs-anim-rtl" style={d('0.5s')}>
            <img src={img('Client Achied.jpg')} className="cs-img" alt="Client Achieved" />
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="cs-bg-section" style={{ minHeight: '60vh' }}>
        <img src={img('Background 01.png')} className="cs-bg-img" alt="Background" />
        <div className="cs-bg-overlay" />
        <div className="cs-container cs-center">
          <p className="cs-h3 cs-anim cs-anim-rtl" style={{ fontSize: '1.2rem', fontWeight: 300, maxWidth: 900, marginBottom: '2.5rem' }}>
            Is your team spending too much time on work that AI could handle faster, more accurately, and at a fraction of the cost? StradIT builds AI agents tailored to the demands of financial operations, from design and training through deployment and ongoing optimization.
          </p>
          <a href="/contact-us/" className="cs-btn cs-anim cs-anim-rtl" style={d('0.3s')}>
            Request an AI Agent Assessment
          </a>
        </div>
      </section>

    </div>
  )
}
