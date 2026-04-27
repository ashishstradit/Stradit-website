import CoeEffects from './CoeEffects'
import './coe.css'

export default function CoePage() {
  const portraitCards = [
    {
      title: 'Artificial Intelligence - Applied AI',
      desc: 'Converting intricate AI into a simplified solution that enterprises use to stay ahead of the curve.',
      img: '/AI%20readiness.svg',
      video: '/AI%20solution.mp4',
      href: '/coe/ai',
    },
    {
      title: 'Data Analytics - Applied AI',
      desc: 'Transform raw data into actionable understandings through our AI-enabled data analytics.',
      img: '/Graph.svg',
      video: '/Data%20Analytics.mp4',
      href: '/coe/data-analytics',
    },
    {
      title: 'Cyber Security - Applied AI',
      desc: 'Guard digital assets across applications, data, and identities while downsizing risks with AI-driven threat intelligence.',
      img: '/CoE.svg',
      video: '/Cyber%20Security.mp4',
      href: '/coe/cyber-security',
    },
    {
      title: 'Cloud & Infrastructure - Applied AI',
      desc: 'End-to-end consulting and service delivery to support cloud migration and modernization.',
      img: '/Limit.svg',
      video: '/Cloud%20cards.mp4',
      href: '/coe/cloud',
    },
    {
      title: 'Automated AI Testing',
      desc: 'Supply scalable, reusable AI-powered QA frameworks to meet the highest quality standards.',
      img: '/Qulaity.svg',
      video: '/Testing%20and%20Quality.mp4',
      href: '/coe/testing',
    },
  ]

  const gains = [
    { title: '100% Tailored Solutions', icon: '/100%25%20Solution.svg', iconKey: 'tailored' },
    { title: 'Start-to-Finish Confidence', icon: '/Satrt%20to%20finish.svg' },
    { title: 'Built-in Trust & Authority', icon: '/Build.svg' },
    { title: 'Scale Without Limits', icon: '/Limit.svg' },
    { title: 'Smarter Teams, Bigger Wins', icon: '/Team.svg' },
  ]

  return (
    <>
      <CoeEffects />

      <svg style={{ display: 'none' }}>
        <symbol id="icon-arrow" viewBox="0 0 16 16">
          <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </symbol>
        <symbol id="icon-layer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 12 12 17 22 12" />
          <polyline points="2 17 12 22 22 17" />
        </symbol>
      </svg>

      <main className="coe-page">
        <section id="hero" aria-label="Center of Excellence hero">
          <video className="hero-video" autoPlay loop muted playsInline preload="metadata">
            <source src="/Main%20COE%20hero.mp4" type="video/mp4" />
            <source src="/Main%20COE%20hero.mov" type="video/quicktime" />
          </video>
          <div className="hero-overlay" />
        </section>

        <section id="hero-copy" aria-label="Center of Excellence intro">
          <div className="container">
            <div className="hero-content hero-copy">
              <h1 className="heading-main text-gradient anim anim-from-right observe-me" style={{ ['--delay' as any]: '0.1s' }}>
                Center of Excellence
              </h1>
              <p className="sub-heading anim anim-from-right observe-me" style={{ ['--delay' as any]: '0.3s', color: '#fff', margin: '0 0 28px 0' }}>
                From Insight to Innovation With AI and Tech Engineering. StradIT bridges the gap between complex technology and real-world results. From Cybersecurity to AI, our Centers of Excellence help Fortune 500 companies navigate the future with confidence.
              </p>
              <div className="anim anim-from-right observe-me" style={{ ['--delay' as any]: '0.5s' }}>
                <a href="#" className="btn">
                  Build With Our CoE <svg><use href="#icon-arrow" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="portrait-section">
          <div className="slider-wrapper">
            <div className="slider-track no-motion">
              {portraitCards.map((c, idx) => (
                <div
                  className="portrait-card anim anim-fade observe-me"
                  style={{ ['--delay' as any]: `${0.1 + idx * 0.08}s` }}
                  key={c.title}
                >
                  <div className="portrait-img-wrapper">
                    {c.video ? (
                      <video className="card-video" autoPlay loop muted playsInline preload="metadata">
                        <source src={c.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={c.img} alt={c.title} loading="lazy" />
                    )}
                  </div>
                  <div className="portrait-content">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                    <a href={c.href ?? '#'} className="btn-link">
                      Know more <svg><use href="#icon-arrow" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="rectangle-section">
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim anim-up observe-me" style={{ ['--delay' as any]: '0.1s' }}>
              What You Gain with StradIT
            </h2>
            <p className="sub-heading anim anim-up observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              Don’t Just Adopt Technology; Lead With it. When you choose StradIT, you gain more than a vendor; you gain a velocity partner. We position you at the forefront of AI-led innovation, ensuring you aren't just running the race, but leading it.
            </p>
          </div>

          <div className="slider-wrapper">
            <div className="slider-track no-motion">
              {gains.map((t, idx) => (
                <div
                  className="rect-card anim anim-fade observe-me"
                  style={{ ['--delay' as any]: `${0.2 + (idx % 6) * 0.1}s` }}
                  key={`${t.title}-${idx}`}
                >
                  <div className="rect-icon">
                    <img src={t.icon} alt="" aria-hidden="true" data-icon={t.iconKey ?? ''} />
                  </div>
                  <div className="rect-content">
                    <h4>{t.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-wrapper anim anim-up observe-me" style={{ ['--delay' as any]: '0.3s' }}>
            <a href="#" className="btn">
              Transform With StradIT <svg><use href="#icon-arrow" /></svg>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

