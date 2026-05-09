'use client'
import { useEffect, useRef, type CSSProperties } from 'react'
import './case-study.css'

const img = (name: string) => `/Main-case%20study%20/${encodeURIComponent(name)}`

const bullets1 = [
  'Fragmented application portfolios',
  'Deep dependencies on proprietary middleware',
  'Limited observability across environments',
  'Multiple regulators enforcing stringent compliance requirements',
]

const bullets2 = [
  'End-to-end IT service assessment',
  'Detailed cloud readiness assessment',
  '100% personalized cloud deployment',
  'Extensive technology evaluation',
  'Multi-year cloud roadmap',
]

const accordionItems = [
  {
    title: 'Step 1: IT Service Catalogue',
    body: 'Our team from Cloud & Infrastructure CoE first collected and rationalized the complete IT service catalogue across lines of business. It then mapped each service to underlying applications, infrastructure components, and data domains. We helped the client identify services with redundant or overlapping functionality.',
  },
  {
    title: 'Step 2: Cloud Readiness Assessment',
    body: 'We then performed functional, financial, and technical feasibility analysis for each service so that the client is able to easily evaluate application architecture patterns, integration style, and data flows. We also applied a scoring model for cloud suitability. By now, the client has a priority list of cloud-ready services.',
  },
  {
    title: 'Step 3: Cloud Deployment Strategy',
    body: 'To achieve result-driven cloud deployment, the team classified workloads into public, private, and hybrid cloud candidates and defined isolation requirements for regulated data, customer PII, and payment workload. Additionally, we mapped non-functional requirements to avoid resource wastage. This allowed the client to pick deployment models based on evidence instead of generic best practices.',
  },
  {
    title: 'Step 4: Technology Selection',
    body: "Based on the assessment and client's requirement, the team constructs a detailed and viable evaluation framework around IaaS, PaaS, and managed services while comparing hyperscaler offerings. We carefully identified preferred vendors and implementation partners offering solutions aligned with the client's objectives.",
  },
  {
    title: 'Step 5: Cloud Roadmap And Governance',
    body: 'We create the cloud roadmap that defines migration waves, covering quick wins, and establish a cloud governance, and help our client to realize early benefits while preparing for deeper modernization.',
  },
]

const stats = [
  { num: '30%', label: 'reduction in operations cost' },
  { num: '70%', label: 'reduction in software license cost' },
  { num: '50%', label: 'faster application deployment' },
]

export default function CaseStudyPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = pageRef.current?.querySelectorAll('.cs-anim') ?? []
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target) }
      })
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

      {/* Hero — image only */}
      <section className="cs-hero">
        <img src={img('Hero.jpg')} className="cs-hero-bg" alt="Hero" />
        <div className="cs-hero-overlay" />
      </section>

      {/* Hero heading below */}
      <section className="cs-section" style={{ background: '#0a0a0c', textAlign: 'center' }}>
        <div className="cs-container cs-center">
          <h1 className="cs-h2 cs-anim cs-anim-rtl" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
            Our Expert Cloud Advisory Resulted in 30% Less Operations Cost
          </h1>
          <p className="cs-h3 cs-anim cs-anim-rtl" style={{ transitionDelay: '0.15s' }}>
            Learn how StradIT helped a US-based financial institution move from a fragmented legacy data-center landscape to a cloud-ready, cost-optimized portfolio, without compromising regulatory, security, or data-residency requirements.
          </p>
        </div>
      </section>

      {/* Client Overview */}
      <section id="overview" className="cs-section cs-dark">
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-ttb">Client Overview</h2>
            <h3 className="cs-h3 cs-anim cs-anim-ttb" style={d('0.1s')}>
              A leading US-based financial institution, operating under strict regulatory, audit, and data residency requirements, with a heterogeneous landscape of mainframe, mid-tier, and distributed systems. The client faced several structural challenges:
            </h3>
            <ul className="cs-bullets">
              {bullets1.map((b, i) => (
                <li key={i} className="cs-anim cs-anim-ttb" style={d(`${0.2 + i * 0.1}s`)}>{b}</li>
              ))}
            </ul>
            <p className="cs-p cs-anim cs-anim-ttb" style={d('0.6s')}>
              The absence of a common framework to assess cloud readiness resulted in higher operational costs and eroding margins. A simple lift-and-shift approach would have only moved costs, not optimized them.
            </p>
            <p className="cs-p cs-anim cs-anim-ttb" style={d('0.7s')}>
              A structured, evidence-based cloud advisory approach was required.
            </p>
          </div>
          <div className="cs-anim cs-anim-ttb" style={d('0.3s')}>
            <img src={img('Client Overview.jpg')} className="cs-img" alt="Client Overview" />
          </div>
        </div>
      </section>

      {/* Scale & Experience */}
      <section className="cs-bg-section">
        <img src={img('Background 01.png')} className="cs-bg-img" alt="Background" />
        <div className="cs-bg-overlay" />
        <div className="cs-container cs-center">
          <h2 className="cs-h2 cs-anim cs-anim-ttb">Our Proven Scale and Experience in Cloud Advisory</h2>
          <p className="cs-h3 cs-anim cs-anim-ttb" style={d('0.15s')}>
            StradIT brings a mature, execution focused cloud practice to engagements. With 5+ years of dedicated experience in cloud solutions and a core group of 30+ cloud and infrastructure specialists, our CoE in Cloud & Infrastructure has successfully managed 7+ data centers and 5,000+ cloud instances for clients across regulated industries. These accelerators allow StradIT to move from assessment to repeatable, codified implementation without relying on one-off scripts.
          </p>
        </div>
      </section>

      {/* Scope */}
      <section className="cs-section cs-dark">
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-ttb">Scope Of StradIT Cloud Advisory</h2>
            <h3 className="cs-h3 cs-anim cs-anim-ttb" style={d('0.1s')}>
              When the client reached StradIT for our Cloud Advisory Services, we played at the front foot and came up with a fully-optimized cloud advisory covering:
            </h3>
            <ul className="cs-bullets">
              {bullets2.map((b, i) => (
                <li key={i} className="cs-anim cs-anim-ttb" style={d(`${0.2 + i * 0.1}s`)}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="cs-anim cs-anim-ttb" style={d('0.3s')}>
            <img src={img('Cloud Advisory.jpg')} className="cs-img" alt="Cloud Advisory" />
          </div>
        </div>
      </section>

      {/* Solutions Offered */}
      <section className="cs-bg-section">
        <img src={img('Background 01.png')} className="cs-bg-img" alt="Background" />
        <div className="cs-bg-overlay" />
        <div className="cs-container cs-center">
          <h2 className="cs-h2 cs-anim cs-anim-rtl">Solutions Offered</h2>
          <p className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
            We bring our hands-on mastery over cloud & infrastructure and created a multi-step cloud strategy.
          </p>
          <a href="/coe/cloud/" className="cs-btn cs-anim cs-anim-rtl" style={d('0.3s')}>Explore our CoE</a>
        </div>
      </section>

      {/* Accordion Steps */}
      <section className="cs-section cs-darker">
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

      {/* Outcomes */}
      <section className="cs-bg-section" style={{ minHeight: '80vh' }}>
        <img src={img('Background 01.png')} className="cs-bg-img" alt="Background" />
        <div className="cs-bg-overlay" />
        <div className="cs-container cs-center">
          <h2 className="cs-h2 cs-anim cs-anim-ttb">Outcomes And Benefits Delivered</h2>
          <p className="cs-h3 cs-anim cs-anim-ttb" style={d('0.15s')}>
            Within the first phases of execution of our cloud advisory, the client realized tangible benefits driven by the advisory outputs.
          </p>
          <p className="cs-p cs-anim cs-anim-ttb" style={d('0.3s')}>
            Peace of mind and hassle-free migration, backed by a clear, executable roadmap and an agreed operating model, come built in with every engagement. If you are finding it hard to navigate complex cloud decisions, talk to StradIT&apos;s Cloud Advisory team today and get a structured plan your teams can execute with confidence.
          </p>
          <a href="/contact-us/" className="cs-btn cs-anim cs-anim-ttb" style={d('0.6s')}>
            Request a Cloud Readiness Assessment
          </a>
        </div>
      </section>

    </div>
  )
}
