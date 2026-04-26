import CoeEffects from '../CoeEffects'
import '../coe-detail.css'

export default function CyberSecurityCoePage() {
  return (
    <>
      <CoeEffects />

      <main className="coe-detail">
        <section id="hero" aria-label="Cyber Security CoE hero video">
          <video className="bg-video" autoPlay loop muted playsInline preload="metadata">
            <source src="/Cyber/Cyber%20COE01.mp4" type="video/mp4" />
            <source src="/Cyber/Cyber%20COE01.mov" type="video/quicktime" />
          </video>
          <div className="hero-overlay" />
        </section>

        <section id="hero-copy" aria-label="Cyber Security CoE intro">
          <div className="container text-center hero-content hero-copy">
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

        <section>
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim anim-up observe-me" style={{ ['--delay' as any]: '0s' }}>
              Cybersecurity Engineered for Business Resilience
            </h2>
            <p className="sub-heading anim anim-up observe-me" style={{ ['--delay' as any]: '0.15s' }}>
              StradIT unites AI-driven threat modeling, precise engineering, and relentless managed defense to safeguard mission-critical assets, reduce business risk, and empower readiness for rapid change.
            </p>
          </div>

          <div className="container cyber-cards">
            {[
              {
                title: 'Cybersecurity Advisory',
                img: '/Cyber/Cyber%20Advisory.png',
                desc: 'Construct a resilient cybersecurity ecosystem tailored to unique risk profile with AI-informed prioritization at every step.',
                bullets: [
                  'Identify high-risk assets and prioritize defense by business impact.',
                  'Build security frameworks aligned with industry and organizational objectives.',
                  'Strengthen compliance and audit readiness for GDPR, HIPAA, ISO 27001, and more.',
                ],
              },
              {
                title: 'Cybersecurity Engineering',
                img: '/Cyber/Cyber%20Engineering.png',
                desc: 'Protect digital assets from day one using AI-powered, scalable, and compliant security frameworks.',
                bullets: [
                  'Deploy security controls that reduce risk from day one.',
                  'Apply tailored protection across apps, data, networks, and identities.',
                  'Build cloud-native and hybrid architectures with zero-trust enforcement.',
                ],
              },
              {
                title: 'Managed Cybersecurity',
                img: '/Cyber/Managed%20Cyber.png',
                desc: 'Monitor, manage, and mitigate threats using AI-driven managed cybersecurity services.',
                bullets: [
                  'Centralize operations to reduce tool sprawl and eliminate blind spots.',
                  'Run 24/7 monitoring and incident response driven by real-time intelligence.',
                  'Scale managed security to match your business size, industry, and regulations.',
                ],
              },
            ].map((c, idx) => (
              <div className="flip-card anim anim-fade observe-me" style={{ ['--delay' as any]: `${0.2 + idx * 0.1}s` }} key={c.title}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={c.img} alt={c.title} loading="lazy" />
                    <div className="card-front-overlay">
                      <h3>{c.title}</h3>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <ul className="bullet-list">
                      {c.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="container text-center anim anim-up observe-me" style={{ ['--delay' as any]: '0.65s', marginTop: 20 }}>
            <a className="btn" href="#">
              Deploy 24/7 Managed Defense
            </a>
          </div>
        </section>

        <section id="final-cta" className="cyber-final">
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

