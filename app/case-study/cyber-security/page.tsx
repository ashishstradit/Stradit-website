'use client'
import { useEffect, useRef, type CSSProperties } from 'react'
import '../case-study.css'

const img = (name: string) => `/Case%20Study%20Cyber/${encodeURIComponent(name)}`

const bullets1 = [
  'No visibility into how applications would perform during a malware attack',
  'Blind spots in tracking data entry points',
  'Absence of standard operating procedures',
  'Critical gaps in backup processes',
]

const bullets2 = [
  '100% tailored cybersecurity advisory',
  'Recovery frameworks from the ground up',
  '24*7 threat monitoring and management',
]

const bullets3 = [
  '300+ applications assessed, tested, and documented',
  'Automated data comparison tools for faster recovery validation',
  'Clear, actionable playbooks ready for any incident',
  'Reduced risk exposure across critical infrastructure',
  'Confidence in zero data loss recovery',
]

const accordionItems = [
  {
    title: 'Step 1: Getting Under the Hood of Every Application',
    body: 'We began by understanding everything and carefully mapping each application\'s architecture, identifying its data sources, and tracing downstream dependencies.',
  },
  {
    title: 'Step 2: Measuring Recovery Readiness',
    body: 'Next, we evaluated the Recovery Point Capability of every application in scope. This included looking at existing backup mechanisms, replay capabilities, and calculating exactly how much data could be lost in different scenarios.',
  },
  {
    title: 'Step 3: Building Custom Test Plans',
    body: 'We then designed 100% tailored test plans for each application. Every plan was accounted for in the database type, application criticality, integration complexity, and business function.',
  },
  {
    title: 'Step 4: Running the Tests and Keeping Governance Tight',
    body: 'Our experts performed tests along with the client teams, ensuring governance standards were met. All evidence, reports, and sign-offs were securely stored for audit readiness.',
  },
  {
    title: 'Step 5: Closing the Gaps and Arming Teams with Playbooks',
    body: 'After testing, we compiled a clear list of gaps and remediation recommendations. For every application, we created or updated playbooks and runbooks with step-by-step instructions for bringing systems back to normal operations with minimal data loss. These documents became the go-to resource for teams facing an incident.',
  },
]

export default function CyberCaseStudy() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = pageRef.current?.querySelectorAll('.cs-anim') ?? []
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target) } })
    }, { threshold: 0.05 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const toggleAccordion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const item = e.currentTarget.parentElement!
    const body = e.currentTarget.nextElementSibling as HTMLElement
    const isOpen = item.classList.contains('open')
    pageRef.current?.querySelectorAll('.cs-acc-item').forEach(i => {
      i.classList.remove('open');
      (i.querySelector('.cs-acc-body') as HTMLElement).style.maxHeight = ''
    })
    if (!isOpen) {
      item.classList.add('open')
      body.style.maxHeight = body.scrollHeight + 'px'
    }
  }

  const d = (s: string): CSSProperties => ({ transitionDelay: s })

  return (
    <div ref={pageRef} className="cs-page">

      {/* Hero — full image, no overlay */}
      <section className="cs-hero" style={{ background: '#080808' }}>
        <img src={img('Cyber case Study hero.jpg')} className="cs-hero-bg" alt="Cyber Hero" style={{ opacity: 0.85 }} />
        <div className="cs-hero-content" style={{ opacity: 0 }} />
      </section>

      {/* Section 2: Center heading */}
      <section className="cs-section" style={{ background: '#080808' }}>
        <div className="cs-container cs-center">
          <h2 className="cs-h2 cs-anim cs-anim-rtl">
            Zero Data Loss Readiness Across 300+ Applications With Our Cybersecurity Service
          </h2>
          <p className="cs-h3 cs-anim cs-anim-rtl" style={d('0.2s')}>
            When a malware attack hits, every second counts. Discover how StradIT collaborated with a major financial institution to develop bulletproof, AI-fortified cyber resiliency, so that their mission-critical applications could recover with little disruption and no loss of data.
          </p>
        </div>
      </section>

      {/* Section 3: Client Overview */}
      <section className="cs-section" style={{ background: '#121212' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">Client Overview</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.1s')}>
              Our client is a prominent global financial institution specializing in asset management, serving clients across the world. Their technology landscape is vast and complex, spanning 300+ applications powered by Oracle, SQL Server, and DB2 databases.
            </h3>
            <ul className="cs-bullets">
              {bullets1.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.2 + i * 0.1}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.6s')}>
              Leadership understood the gravity of the situation: just one cyber attack could lead to extended downtime, significant data loss, hefty regulatory fines, and long-term damage to their reputation. They realized they needed a reliable partner to evaluate their entire application portfolio and create a solid plan for building resilience.
            </p>
          </div>
          <div className="cs-anim cs-anim-rtl" style={d('0.3s')}>
            <img src={img('Case-Client overview.jpg')} className="cs-img" alt="Client Overview" />
          </div>
        </div>
      </section>

      {/* Section 4: Why StradIT */}
      <section className="cs-section" style={{ background: '#080808' }}>
        <div className="cs-container cs-grid">
          <div className="cs-anim cs-anim-rtl" style={d('0.3s')}>
            <img src={img('Why Stradit Cyber.jpg')} className="cs-img" alt="Why StradIT" />
          </div>
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">Why StradIT for Cyber Resiliency</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.1s')}>
              StradIT offers a proven Cyber Resiliency practice, refined over years of safeguarding critical infrastructure for clients in banking, insurance, and asset management.
            </h3>
            <ul className="cs-bullets">
              {bullets2.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.2 + i * 0.1}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.5s')}>
              We don&apos;t do cookie-cutter solutions. Every engagement is rooted in deep technical analysis, tailored to each client&apos;s unique risk profile.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: How We Made It Happen + Accordion */}
      <section className="cs-section" style={{ background: '#121212' }}>
        <div className="cs-container cs-center" style={{ marginBottom: 20 }}>
          <h2 className="cs-h2 cs-anim cs-anim-rtl">How We Made It Happen</h2>
          <p className="cs-h3 cs-anim cs-anim-rtl" style={d('0.2s')}>
            Cybersecurity at StradIT is proactive, precise, and battle-tested. This is why we took a multi-step approach to help this client to overcome their cybersecurity challenges.
          </p>
          <a href="/coe/cyber-security/" className="cs-btn cs-anim cs-anim-rtl" style={d('0.4s')}>
            Explore our CoE
          </a>
        </div>
        <div className="cs-container">
          <div className="cs-accordion">
            {accordionItems.map((item, i) => (
              <div key={i} className="cs-acc-item">
                <button className="cs-acc-btn" onClick={toggleAccordion}>
                  <span className="cs-acc-icon">+</span>
                  {item.title}
                </button>
                <div className="cs-acc-body">
                  <div className="cs-acc-inner">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: What Client Walked Away With */}
      <section className="cs-section" style={{ background: '#080808' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">What the Client Walked Away With</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.1s')}>
              The client had transformed their cyber resiliency posture:
            </h3>
            <ul className="cs-bullets">
              {bullets3.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.2 + i * 0.1}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.7s')}>
              Two years into our partnership, this institution still chooses StradIT. The reason is simple: a tailored cybersecurity strategy that makes threats a thing of the past. Unsure how your organization would survive a cyber incident? StradIT can help you uncover vulnerabilities and close the gaps before attackers find them first.
            </p>
            <a href="/contact-us/" className="cs-btn cs-anim cs-anim-rtl" style={d('0.8s')}>
              Request a Cyber Resiliency Assessment
            </a>
          </div>
          <div className="cs-anim cs-anim-rtl" style={d('0.3s')}>
            <img src={img('Client walk.jpg')} className="cs-img" alt="Client Results" />
          </div>
        </div>
      </section>

    </div>
  )
}
