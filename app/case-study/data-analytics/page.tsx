'use client'
import { useEffect, useRef, type CSSProperties } from 'react'
import '../case-study.css'
import './da.css'

const img = (name: string) => `/Data-Analytics-case%20study%20/${encodeURIComponent(name)}`

const bullets1 = [
  'Data lived in silos across the system.',
  'Reporting ran on batch processes.',
  'Analysts spent countless hours on manual reporting.',
  'Complex risk models are required for FRTB, Basel III, and MiFID II compliance.',
]

const bullets2 = [
  'Fully tailored data intelligence',
  'AI/ML-driven data analytics',
  'Lean, high-impact squad for every client',
  'Expertise to handle structured and unstructured data',
]

const bullets3 = [
  'Building a cloud-native enterprise data lake',
  'Enabling real-time data ingestion',
  'Creating a unified data model',
  'Delivering high-performance analytics',
  'Empowering business users with self-service reporting tools',
  'Embedding governance, lineage, and audit controls from day one',
]

const bullets4 = [
  'Intraday risk visibility improved from hours to minutes.',
  'Manual reporting efforts dropped by 80%.',
  'Accurate and consistent trade and market data.',
  'Sharper insights into data to make faster, smarter decisions.',
]

const steps = [
  { num: '01', title: 'Step 1: Laying the Foundation with a Scalable Data Lake', body: 'We designed and implemented an Enterprise Data Lake on Microsoft Azure. This helped the client to have a centralized repository with elastic storage and compute.' },
  { num: '02', title: 'Step 2: Bringing Data to Life in Real Time', body: 'As Batch processing was killing the agility of our client, our data squad introduced real-time data ingestion using Kafka and Spark Streaming. This resulted in the low-latency processing of trade executions and market data.' },
  { num: '03', title: 'Step 3: Creating One Version of the Truth', body: 'We built a Unified Data Model and implemented Master Data Management to deal with the inconsistent data, plaguing the bank. This standardized the trade data, counterparty information, and reference data, resulting in confusion-free data processing across the teams.' },
  { num: '04', title: 'Step 4: Powering Advanced Analytics at Speed', body: 'We then deployed a high-performance layer using Databricks and Snowflake for heavy-duty analytics. This worked best for portfolio risk calculations, scenario modeling, and stress testing at speeds that simply were not possible before. Our client was now able to run complex models without waiting overnight for results.' },
  { num: '05', title: 'Step 5: Putting Insights in the Hands of Business Users', body: 'We rolled out self-service business intelligence through Power BI and Tableau. This gave traders, risk analysts, and compliance officers of the bank the ability to explore data and generate reports on their own terms and pace.' },
  { num: '06', title: 'Step 6: Building Governance Into the DNA', body: 'We deployed Apache Atlas and Collibra so that the bank can experience automated data lineage, governance controls, and audit trails. Result? The bank now has full visibility into the origin of data, its transformation, and its intended use.' },
]

export default function DataAnalyticsCaseStudy() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = pageRef.current?.querySelectorAll('.cs-anim, .da-anim') ?? []
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target) } })
    }, { threshold: 0.05 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const d = (s: string): CSSProperties => ({ transitionDelay: s })

  return (
    <div ref={pageRef} className="cs-page da-page">

      {/* Hero */}
      <section className="da-hero">
        <div className="da-hero-img">
          <img src={img('Data Analytics Case Studies hero.jpg')} alt="Hero" className="da-hero-bg-zoom" />
        </div>
        <div className="da-hero-overlay" />
      </section>

      {/* Section 2: Center heading */}
      <section className="cs-section" style={{ background: '#111111' }}>
        <div className="cs-container cs-center">
          <h2 className="cs-h2 cs-anim cs-anim-rtl">
            Reduction in Manual Reporting and Scalability Delivered With Strategic Data Analytics
          </h2>
          <p className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
            From hours to minutes, StradIT delivered a leading investment bank by modernizing its data infrastructure 360°.
          </p>
        </div>
      </section>

      {/* Section 3: Client Overview */}
      <section className="cs-section" style={{ background: '#050505' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">Client Overview</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.1s')}>
              A global investment bank running multi-asset trading operations spanning equities, fixed income, foreign exchange, and derivatives. The bank was wrestling with:
            </h3>
            <ul className="cs-bullets">
              {bullets1.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.2 + i * 0.1}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.6s')}>
              For them, patching the old system wasn&apos;t the answer. They required a complete data and analytics transformation, and StradIT was their best bet.
            </p>
          </div>
          <div className="da-img-wrapper cs-anim cs-anim-rtl" style={d('0.3s')}>
            <img src={img('Client Overview.jpg')} alt="Client Overview" />
          </div>
        </div>
      </section>

      {/* Section 4: StradIT Leader */}
      <section className="cs-section" style={{ background: '#111111' }}>
        <div className="cs-container cs-grid">
          <div className="da-img-wrapper cs-anim cs-anim-rtl" style={d('0.3s')}>
            <img src={img('Data Analytics Modernization.jpg')} alt="Data Analytics Modernization" />
          </div>
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">StradIT: The Leader in Data and Analytics Modernization</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.1s')}>
              StradIT&apos;s Data Analytics CoE combines deep technical expertise with a practical understanding of how trading floors, risk functions, and compliance teams actually work.
            </h3>
            <ul className="cs-bullets">
              {bullets2.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.2 + i * 0.1}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.6s')}>
              We partnered with the bank deploying a focused team of four Data Engineers, one Data Scientist, and one Data Architect — a lean, high-impact squad that worked side by side with client teams.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: What We Offered */}
      <section className="cs-section" style={{ background: '#050505' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">What We Offered</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.1s')}>
              The bank needed more than a technology upgrade. They needed a platform that could unify scattered data sources, deliver real-time insights, and scale gracefully as trading volumes grow.
            </h3>
            <ul className="cs-bullets">
              {bullets3.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.2 + i * 0.1}s`)}>{b}</li>)}
            </ul>
          </div>
          <div className="da-img-wrapper cs-anim cs-anim-rtl" style={d('0.3s')}>
            <img src={img('What We provide.jpg')} alt="What We Provide" />
          </div>
        </div>
      </section>

      {/* Section 6: How We Delivered */}
      <section className="cs-section" style={{ background: '#111111' }}>
        <div className="cs-container cs-center" style={{ marginBottom: 60 }}>
          <h2 className="cs-h2 cs-anim cs-anim-rtl">How We Delivered it</h2>
          <p className="cs-h3 cs-anim cs-anim-rtl" style={d('0.15s')}>
            StradIT assembled a data squad featuring the best minds in analytics and AI, bringing clarity to chaos and confidence to the client through a structured approach.
          </p>
        </div>
        <div className="cs-container da-grid-3x2">
          {steps.map((s, i) => (
            <div key={i} className="da-hover-card cs-anim cs-anim-rtl" style={d(`${0.2 + i * 0.1}s`)}>
              <div className="da-card-header">
                <span className="da-stroke-num">{s.num}</span>
                <h4>{s.title}</h4>
              </div>
              <div className="da-card-body">
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: What Client Achieved */}
      <section className="cs-section" style={{ background: '#050505' }}>
        <div className="cs-container cs-grid">
          <div>
            <h2 className="cs-h2 cs-anim cs-anim-rtl">What the Client Achieved</h2>
            <h3 className="cs-h3 cs-anim cs-anim-rtl" style={d('0.1s')}>As we wrapped up the project, the results spoke for themselves:</h3>
            <ul className="cs-bullets">
              {bullets4.map((b, i) => <li key={i} className="cs-anim cs-anim-rtl" style={d(`${0.2 + i * 0.1}s`)}>{b}</li>)}
            </ul>
            <p className="cs-p cs-anim cs-anim-rtl" style={d('0.5s')}>
              The bank moved from firefighting data issues to confidently leveraging AI-powered analytics as a competitive advantage. Do you also feel like you&apos;re drowning in data complexity? StradIT can help you build a modern analytics foundation that scales with your ambitions.
            </p>
            <a href="/contact-us/" className="cs-btn cs-anim cs-anim-rtl" style={d('0.6s')}>
              Request a Data and Analytics Assessment
            </a>
          </div>
          <div className="da-img-wrapper cs-anim cs-anim-rtl" style={d('0.3s')}>
            <img src={img('Client Achied.jpg')} alt="Client Achieved" />
          </div>
        </div>
      </section>

    </div>
  )
}
