import CoeEffects from '../CoeEffects'
import '../coe-detail.css'

export default function DataAnalyticsCoePage() {
  return (
    <>
      <CoeEffects />

      <main className="coe-detail">
        <section id="hero" aria-label="Data Analytics CoE hero video">
          <video className="bg-video" autoPlay loop muted playsInline preload="auto">
            <source src="/Data%20AnalyticsHero.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </section>

        <section id="hero-copy" aria-label="Data Analytics CoE intro">
          <div className="container text-center hero-content hero-copy">
            <h1 className="hero-title text-gradient anim anim-up observe-me" style={{ ['--delay' as any]: '0s' }}>
              Data Analytics Center of Excellence
            </h1>
            <p className="hero-subtitle anim anim-up observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              From Insight to Innovation With AI and Tech Engineering. StradIT bridges the gap between complex technology and real-world results. From Cybersecurity to AI, our Centers of Excellence help Fortune 500 companies navigate the future with confidence.
            </p>
            <div className="anim anim-up observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <a className="btn" href="#">
                Begin Your Data Transformation
              </a>
            </div>
          </div>
        </section>

        {/* Removed: percentage/stats loop section */}

        <section>
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim anim-up observe-me" style={{ ['--delay' as any]: '0s' }}>
              Turn Data into a Power Move
            </h2>
            <p className="sub-heading anim anim-up observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              Data is everywhere. Value isn’t. Our end-to-end analytics services help you connect the dots across high-volume, multi-source data and convert it into strategy, performance, and measurable outcomes.
            </p>
          </div>
        </section>

        <section>
          <div className="container grid-2">
            <div>
              <h2 className="heading-main text-gradient anim anim-left observe-me" style={{ ['--delay' as any]: '0s' }}>
                Data Integration
              </h2>
              <p className="sub-heading anim anim-left observe-me" style={{ ['--delay' as any]: '0.1s', textAlign: 'left', margin: '0 0 18px 0' }}>
                We help organizations embed data at the core of their operations so that every move is backed by intelligence, not instinct.
              </p>
              <ul className="bullet-list anim anim-left observe-me" style={{ ['--delay' as any]: '0.2s' }}>
                <li>Integrate structured and unstructured data across your ecosystem</li>
                <li>Build a unified analytics foundation from ingestion to consumption</li>
                <li>Design scalable architectures that grow with your business</li>
              </ul>
            </div>
            <div className="media-box anim anim-down observe-me" style={{ ['--delay' as any]: '0.3s' }}>
              <video autoPlay loop muted playsInline preload="metadata">
                <source src="/Data%20integration.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section>
          <div className="container grid-2">
            <div className="media-box anim anim-down observe-me" style={{ ['--delay' as any]: '0.3s' }}>
              <video autoPlay loop muted playsInline preload="metadata">
                <source src="/Predictive%20Intelligence.mp4" type="video/mp4" />
                <source src="/Predictive%20Intelligence.mov" type="video/quicktime" />
              </video>
            </div>
            <div>
              <h2 className="heading-main text-gradient anim anim-right observe-me" style={{ ['--delay' as any]: '0s' }}>
                Predictive Intelligence
              </h2>
              <p className="sub-heading anim anim-right observe-me" style={{ ['--delay' as any]: '0.1s', textAlign: 'left', margin: '0 0 18px 0' }}>
                We go beyond simple transformation to re-engineer your core business processes, turning historical data into a strategic roadmap.
              </p>
              <ul className="bullet-list anim anim-right observe-me" style={{ ['--delay' as any]: '0.2s' }}>
                <li>Smarter resource allocation with ML-driven forecasts</li>
                <li>Lower downtime costs through predictive maintenance signals</li>
                <li>Stronger retention and revenue with churn risk prediction</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="container grid-2">
            <div>
              <h2 className="heading-main text-gradient anim anim-left observe-me" style={{ ['--delay' as any]: '0s' }}>
                Data Governance &amp; Security
              </h2>
              <p className="sub-heading anim anim-left observe-me" style={{ ['--delay' as any]: '0.1s', textAlign: 'left', margin: '0 0 18px 0' }}>
                We help ensure data in key workflows is responsible, compliant, and prepared for enterprise use through data quality &amp; governance services.
              </p>
              <ul className="bullet-list anim anim-left observe-me" style={{ ['--delay' as any]: '0.2s' }}>
                <li>Increase accuracy through cleansing, deduplication, and enrichment</li>
                <li>Improve audit readiness with metadata and lineage visibility</li>
                <li>Protect sensitive data with role-based access and encryption</li>
              </ul>
            </div>
            <div className="media-box anim anim-down observe-me" style={{ ['--delay' as any]: '0.3s' }}>
              <video autoPlay loop muted playsInline preload="metadata">
                <source src="/Data%20Governance%20%26%20Security.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section id="final-cta" className="data-final-cta">
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim anim-up observe-me" style={{ ['--delay' as any]: '0s' }}>
              Data Stories From the Field
            </h2>
            <p className="sub-heading anim anim-up observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              For our clients, data isn’t noise. It’s leverage. See how teams used StradIT&apos;s AI-powered analytics to turn data into momentum, and momentum into sustained results.
            </p>
            <div className="anim anim-up observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <a className="btn" href="#">
                Write Your Data Success Story With Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

