'use client'
import { useEffect, useRef, type CSSProperties } from 'react'
import '../case-study.css'

const img = (name: string) => `/Testing%20Case%20Studies/${encodeURIComponent(name)}`

const bullets1 = [
  'The legacy framework wasn\'t adapting to new requirements.',
  'Only developers with deep Java knowledge could write or maintain test scripts.',
  'High licensing costs for proprietary tools.',
  'Longer test cycles slowing down releases.',
]

const bullets2 = [
  '70+ Experts',
  'Fully-managed QAs',
  'Enterprise-grade Result',
]

const bullets3 = [
  'End-to-end development of a test automation framework',
  'Test execution across APIs, user interfaces, and databases',
  'A keyword-driven approach',
  'Seamless integration with modern technology stacks',
  'Agile practices for speed and transparency',
]

const bullets4 = [
  'Zero licensing costs',
  'Faster test development',
  'Fewer errors in test scripts',
  'Broader adoption across teams',
  'Smooth integration with cloud, AI, and data analytics',
]

const accordionItems = [
  {
    title: 'Step 1: Choosing the Right Foundation',
    body: 'We selected Robot Framework as the backbone of the new solution as it\'s an open-source automation that supports a keyword-driven approach. We paired with Python. The result? The client reduced the licensing cost while having a testing solution that everyone was able to use seamlessly.',
  },
  {
    title: 'Step 2: Designing for Flexibility and Scale',
    body: 'Our Testing & Automation team designed the framework using the Page Object Model that separates test logic from page-specific code. We powered it with built-in support for multiple environments, allowing the client to run the same tests against development, staging, and production without rewrites. This leads to easy and hassle-free testing.',
  },
  {
    title: 'Step 3: Enabling End-to-End Coverage',
    body: 'We built the framework to handle API testing, UI testing, and database validation in a unified flow so that the bank is not testing in isolation. Due to this, the client was able to catch the issues at their infant stage, whether they originate in backend services, frontend interfaces, or data layers.',
  },
  {
    title: 'Step 4: Making It Easy for Everyone',
    body: 'As the Robot Framework is based on keyword-driven, the in-house testers of this client were able to write and understand tests using plain language keywords. They didn\'t have to wrestle with complex code.',
  },
  {
    title: 'Step 5: Delivering with Agile Discipline',
    body: 'We followed Agile methodology throughout the engagement, delivering working increments on a regular cadence. Our governance framework kept the project on track, with clear visibility into progress, risks, and outcomes. The client always knew where things stood and had input at every stage.',
  },
]

export default function TestingCaseStudy() {
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

      {/* Hero with zoom animation */}
      <section className="cs-hero" style={{ background: '#0a0d16', padding: 0 }}>
        <img src={img('Testing case studies hero.jpg')} className="cs-hero-bg" alt="Testing Hero"
          style={{ opacity: 0.6, transform: 'scale(1.3)', animation: 'testHeroZoom 2.5s cubic-bezier(0.21,1.11,0.81,0.99) forwards' }} />
        <style>{`@keyframes testHeroZoom { to { transform: scale(1); } }`}</style>
      </section>

      {/* Section 2: Center heading */}
      <section className="cs-section" style={{ background: '#080a11' }}>
        <div className="cs-container cs-center">
          <h2 className="cs-h2 cs-anim cs-anim-rtl">
            Zero Licensing & Unmatched Results: The StradIT Difference for a Global Investment Bank
          </h2>
          <p className="cs-h3 cs-anim cs-anim-rtl" style={d('0.2s')}>
            Breaking free from expensive, complex testing frameworks is not a dream anymore. It&apos;s a reality for many with StradIT&apos;s Testing & Automation services. Discover how a global investment bank is now living this reality with a modern automation solution that anyone on the team can use.
          </p>
        </div>
      </section>

      {/* Section 3: Client Overview */}
      <section className="cs-section" style={{ background: '#0a0d16' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">Client Overview</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
              One of the world&apos;s major investment banks, offering investment management and financial services across the globe. The bank was using outdated test automation setup, causing a heap of hurdles.
            </h3>
            <ul className="cs-bullets">
              {bullets1.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.3 + i * 0.1}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.7s')}>
              As the bank planned to adopt cloud, AI integration, and advanced data analytics, it needed a testing approach that could keep pace without draining budgets. This is when StradIT decided to step in.
            </p>
          </div>
          <div className="cs-anim cs-anim-rtl" style={d('0.4s')}>
            <img src={img('Client Overview.jpg')} className="cs-img" alt="Client Overview" />
          </div>
        </div>
      </section>

      {/* Section 4: StradIT Game Changer */}
      <section className="cs-section" style={{ background: '#080a11' }}>
        <div className="cs-container cs-grid">
          <div className="cs-anim cs-anim-rtl" style={d('0.4s')}>
            <img src={img('Testing.jpg')} className="cs-img" alt="Testing" />
          </div>
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">StradIT&apos;s Test Automation: A Game-Changer</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
              StradIT brings practical, hands-on experience in building test automation frameworks that actually work for real teams.
            </h3>
            <ul className="cs-bullets">
              {bullets2.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.3 + i * 0.1}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.7s')}>
              We understand that having the best framework is the one that anyone can use without feeling like inventing the wheel. We partnered closely with the client to understand their testing needs, application landscape, and long-term goals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: What We Set Out To Do */}
      <section className="cs-section" style={{ background: '#0a0d16' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">What We Set Out To Do</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
              This client needed a complete transformation of how testing was done across their application portfolio. To achieve this goal, we delivered:
            </h3>
            <ul className="cs-bullets">
              {bullets3.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.3 + i * 0.1}s`)}>{b}</li>)}
            </ul>
          </div>
          <div className="cs-anim cs-anim-rtl" style={d('0.4s')}>
            <img src={img('what we do.jpg')} className="cs-img" alt="What We Do" />
          </div>
        </div>
      </section>

      {/* Section 6: How We Built the Solution + Accordion */}
      <section className="cs-section" style={{ background: '#080a11' }}>
        <div className="cs-container cs-center" style={{ marginBottom: 20 }}>
          <h2 className="cs-h2 cs-anim cs-anim-rtl">How We Built the Solution</h2>
          <p className="cs-h3 cs-anim cs-anim-rtl" style={d('0.2s')}>
            The testing and automation strategy we adopted for this client was lean, agile, and laser-focused.
          </p>
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

      {/* Section 7: What Client Achieved */}
      <section className="cs-section" style={{ background: '#0a0d16' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">What the Client Achieved</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
              Since launching the new framework in February 2024, the bank has experienced a genuine shift in how testing supports its delivery pipeline:
            </h3>
            <ul className="cs-bullets">
              {bullets4.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.3 + i * 0.1}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.7s')}>
              The bank now has a testing foundation that scales with its ambitions, costs nothing to license, and puts quality in the hands of the people who understand the business best.
            </p>
          </div>
          <div className="cs-anim cs-anim-rtl" style={d('0.4s')}>
            <img src={img('Client Achied.jpg')} className="cs-img" alt="Client Achieved" />
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="cs-bg-section" style={{ minHeight: '60vh' }}>
        <img src={img('Background 01.png')} className="cs-bg-img" alt="Background" />
        <div className="cs-bg-overlay" />
        <div className="cs-container cs-center">
          <h3 className="cs-h3 cs-anim cs-anim-rtl" style={{ fontSize: '1.5rem', fontWeight: 400, maxWidth: 800, marginBottom: '2.5rem' }}>
            Stuck with expensive, complicated testing tools that slow you down? StradIT can help you build something better.
          </h3>
          <a href="/contact-us/" className="cs-btn cs-anim cs-anim-rtl" style={d('0.2s')}>
            Request a Test Automation Assessment
          </a>
        </div>
      </section>

    </div>
  )
}
