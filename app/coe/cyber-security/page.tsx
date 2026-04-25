import CoeEffects from '../CoeEffects'
import '../coe-detail.css'

export default function CyberSecurityCoePage() {
  return (
    <>
      <CoeEffects />

      <main className="coe-detail">
        <section id="hero" aria-label="Cyber Security CoE hero">
          <video className="bg-video" autoPlay loop muted playsInline preload="auto">
            <source src="/Cybersecurity.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />

          <div className="container text-center hero-content">
            <h1 className="hero-title text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Cyber Security Center of Excellence
            </h1>
            <p className="hero-subtitle anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              Securing Today for Quick Scalability Tomorrow. At StradIT, we deliver proactive, AI-enhanced, enterprise-grade resilience that grows with you. Our managed cybersecurity services cut risk, develop future-proof policies, and protect your most critical systems to drive business continuity and confidence.
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <a className="btn" href="#">
                Strengthen Your Security Posture
              </a>
            </div>
          </div>
        </section>

        {/* Removed: percentage/stats marquee section */}

        <section style={{ backgroundColor: '#161a26' }}>
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Core Capabilities
            </h2>
            <p className="sub-heading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.15s' }}>
              Practical, enterprise-ready security—built for modern perimeters and real-world threats.
            </p>
          </div>

          <div className="container grid-2" style={{ marginTop: 40 }}>
            <div>
              <h3 className="heading-main text-gradient anim slide-btt observe-me" style={{ ['--delay' as any]: '0s', fontSize: '1.8rem' }}>
                Endpoint Security
              </h3>
              <ul className="bullet-list anim slide-btt observe-me" style={{ ['--delay' as any]: '0.15s' }}>
                <li>Behavioral analysis detection</li>
                <li>Automated isolation protocols</li>
                <li>Device compliance checking</li>
              </ul>
            </div>
            <div className="media-box anim slide-btt observe-me" style={{ ['--delay' as any]: '0.25s' }}>
              <video autoPlay loop muted playsInline preload="metadata">
                <source src="/Cybersecurity.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="container grid-2" style={{ marginTop: 60 }}>
            <div className="media-box anim slide-btt observe-me" style={{ ['--delay' as any]: '0.25s' }}>
              <video autoPlay loop muted playsInline preload="metadata">
                <source src="/Cybersecurity.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <h3 className="heading-main text-gradient anim slide-btt observe-me" style={{ ['--delay' as any]: '0s', fontSize: '1.8rem' }}>
                Cloud Hardening
              </h3>
              <ul className="bullet-list anim slide-btt observe-me" style={{ ['--delay' as any]: '0.15s' }}>
                <li>Multi-cloud posture management</li>
                <li>Container vulnerability scanning</li>
                <li>Identity and access governance</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="final-cta" style={{ backgroundColor: '#11141e' }}>
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Don&apos;t Wait for a Breach.
            </h2>
            <p className="sub-heading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              Proactively defend your intellectual property and customer data with resilient security protocols.
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <a className="btn" href="#">
                Strengthen Your Security Posture
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

