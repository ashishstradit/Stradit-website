import AboutUsEffects from './AboutUsEffects'
import './about-us.css'

export default function AboutUsPage() {
  const philosophyCards = [
    {
      title: 'Technology with Accountability',
      img: '/Technology%20with%20Accountability.png',
      alt: 'Technology with Accountability',
      desc: 'We ensure tech is explainable, supervised, and aligned. Our solutions include built-in guardrails for data, security, and compliance.',
    },
    {
      title: 'Engineering with Purpose',
      img: '/Engineering%20with%20Purpose.png',
      alt: 'Engineering with Purpose',
      desc: 'We are purpose-driven. Every solution, integration, and AI automation is meticulously designed to decode complexity, solve tangible business problems.',
    },
    {
      title: 'Domain‑First Thinking',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
      alt: 'Team collaboration',
      desc: 'Our teams speak your language. Deep domain expertise across LLMs, governance, and guardrails shapes every design, strategy, and AI model we build.',
    },
  ]
  const philosophyLoopCards = [...philosophyCards, ...philosophyCards]

  const prideCards = [
    {
      title: 'Integrated Center of Excellence',
      desc: 'Drives innovation across AI, Cybersecurity, Cloud, and Quality Engineering.',
    },
    {
      title: 'AI Readiness Training',
      desc: 'Prepares teams with the mindset, mastery, and mechanisms to harness AI with precision.',
    },
    { title: 'Continuous Assessment & Improvement', desc: 'Confirm sustained excellence.' },
    { title: 'Quality Assurance', desc: 'Built into every layer of solutions we deliver.' },
  ]
  const prideLoopCards = [...prideCards, ...prideCards]

  return (
    <>
      <AboutUsEffects />

      <svg style={{ display: 'none' }}>
        <symbol id="icon-arrow" viewBox="0 0 16 16">
          <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </symbol>
        <symbol
          id="icon-star"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </symbol>
      </svg>

      <main className="about-us-page">
        <section id="hero" aria-label="About StradIT hero">
          <video className="hero-video" autoPlay loop muted playsInline preload="auto">
            <source src="/Stradit.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </section>

        <section id="about" style={{ backgroundColor: '#161a26' }}>
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim anim-up observe-me" style={{ ['--delay' as any]: '0s' }}>
              About StradIT
            </h2>
            <p className="justify-text anim anim-up observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              StradIT is a trusted technology partner for enterprises that want AI to drive measurable business outcomes, not just make headlines. We deliver end-to-end transformation by aligning technology with strategic and operational priorities. Our capabilities include Global Capability Center (GCC) setup and optimization, AI automation, legacy modernization, analytics, and testing, helping organizations scale innovation with control, speed, and confidence, with AI as the engine behind every capability.
            </p>
            <p className="justify-text about-paragraph-2 anim anim-up observe-me" style={{ ['--delay' as any]: '0.25s' }}>
              At the core of StradIT is deep domain expertise across applied AI, data analytics, cybersecurity, cloud and infrastructure, testing, and quality engineering.
            </p>
            <div className="anim anim-up observe-me" style={{ ['--delay' as any]: '0.3s', marginTop: 30 }}>
              <a href="#" className="btn">
                Start Your Digital Transformation
              </a>
            </div>
          </div>
        </section>

        <section id="mission" style={{ backgroundColor: '#11141e' }}>
          <div className="container grid-2">
            <div>
              <h2 className="heading-main text-gradient anim anim-right observe-me" style={{ ['--delay' as any]: '0s' }}>
                Our Mission
              </h2>
              <p className="sub-heading anim anim-right observe-me" style={{ ['--delay' as any]: '0.1s', margin: '0 0 24px 0' }}>
                To Transform Technology Into Sustainable Advantage. StradIT aims to reshape AI and cybersecurity, data
                analytics, testing, & cloud engineering into sustainable competitive advantages for progressive
                corporations.
              </p>
              <ul className="bullet-list anim anim-right observe-me" style={{ ['--delay' as any]: '0.2s' }}>
                <li>Achieve 100% Dependability</li>
                <li>Ensure Absolute Security &amp; Compliance</li>
                <li>Empower Teams with Intelligent Tech</li>
              </ul>
              <div className="anim anim-right observe-me" style={{ ['--delay' as any]: '0.3s' }}>
                <a href="#" className="btn">
                  Learn How We Execute <svg>
                    <use href="#icon-arrow" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="anim anim-down observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              <img className="about-img" src="/Mission.png" alt="Mission Team Work" />
            </div>
          </div>
        </section>

        <section id="vision" style={{ backgroundColor: '#161a26' }}>
          <div className="container grid-2">
            <div className="anim anim-down observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              <img className="about-img" src="/Vision.png" alt="Vision Technology" />
            </div>
            <div>
              <h2 className="heading-main text-gradient anim anim-left observe-me" style={{ ['--delay' as any]: '0s' }}>
                Our Vision
              </h2>
              <p className="sub-heading anim anim-left observe-me" style={{ ['--delay' as any]: '0.1s', margin: '0 0 24px 0' }}>
                To be the Trustworthy Partner for AI-led Innovation, Integrity, and Impact.StradIT envisions a future
                where enterprises rely on us to transform advanced technologies into practical, secure, and scalable
                solutions.
              </p>
              <ul className="bullet-list anim anim-left observe-me" style={{ ['--delay' as any]: '0.2s' }}>
                <li>AI-Powered CoE’s Embedded at the Workflow Core</li>
                <li>Global Expertise &amp; Strong Operational Focus</li>
                <li>Results-Driven, Execution-First Solutions</li>
              </ul>
              <div className="anim anim-left observe-me" style={{ ['--delay' as any]: '0.3s' }}>
                <a href="#" className="btn">
                  Explore Our CoE <svg>
                    <use href="#icon-arrow" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy" style={{ backgroundColor: '#11141e' }}>
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim anim-fade observe-me" style={{ ['--delay' as any]: '0s' }}>
              Our Philosophy
            </h2>
            <p className="sub-heading anim anim-fade observe-me" style={{ ['--delay' as any]: '0.1s' }}>
              At StradIT, every innovation is guided by governance and accountability, ensuring AI and technology
              deliver real, responsible, and lasting impact.
            </p>
            <div className="anim anim-fade observe-me" style={{ ['--delay' as any]: '0.2s', marginBottom: 50 }}>
              <a href="#" className="btn">
                Explore Our CoE <svg>
                  <use href="#icon-arrow" />
                </svg>
              </a>
            </div>
          </div>

          <div className="slider-wrapper anim anim-fade observe-me" style={{ ['--delay' as any]: '0.3s' }}>
            <div className="slider-track right-to-left">
              {philosophyLoopCards.map((card, idx) => (
                <div className="phil-card" key={`${card.title}-${idx}`}>
                  <img src={card.img} alt={card.alt} loading="lazy" />
                  <div className="phil-content">
                    <div className="phil-line" />
                    <h4>{card.title}</h4>
                    <p style={{ fontSize: '0.9rem' }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery" style={{ backgroundColor: '#161a26' }}>
          <div className="container grid-2">
            <div>
              <h2 className="heading-main text-gradient anim anim-left observe-me" style={{ ['--delay' as any]: '0s' }}>
                Our Global Delivery Model
              </h2>
              <p className="sub-heading anim anim-left observe-me" style={{ ['--delay' as any]: '0.1s', textAlign: 'left', margin: '0 0 40px 0' }}>
                Built on the Sun Model, our AI-enhanced delivery model guarantees zero downtime and non-stop execution
                for our Fortune 500 partners. We blend global talent with local impact and continuous delivery, keeping
                your projects always optimized and truly non-stop.
              </p>

              <div className="delivery-list">
                {[
                  ['On-site Model', 'Direct collaboration at the client locations'],
                  ['Offsite Model', 'Dedicated delivery centers near client hubs'],
                  ['Offshore Model', 'Global talent pool across geographies'],
                  ['Hybrid Model', 'Blending onsite, offsite, and offshore models'],
                ].map(([title, desc], idx) => (
                  <div
                    key={title}
                    className="delivery-item anim anim-left observe-me"
                    style={{ ['--delay' as any]: `${0.2 + idx * 0.1}s` }}
                  >
                    <span className="icon">+</span>
                    <div>
                      <h4 style={{ color: '#fff', marginBottom: 4 }}>{title}</h4>
                      <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div className="anim anim-down observe-me" style={{ ['--delay' as any]: '0.2s' }}>
                <img className="about-img" src="/Global%20Delivery%20Model.png" alt="Global Delivery" />
              </div>
              <div className="anim anim-up observe-me" style={{ ['--delay' as any]: '0.4s', marginTop: 30 }}>
                <a href="#" className="btn">
                  Request Your Tailored Delivery <svg>
                    <use href="#icon-arrow" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="pride" style={{ backgroundColor: '#11141e' }}>
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim anim-up observe-me" style={{ ['--delay' as any]: '0s' }}>
              We Take Pride In
            </h2>
            <p className="sub-heading anim anim-up observe-me" style={{ ['--delay' as any]: '0.1s' }}>
              Designing AI and Tech Solutions, Engineered for the Future.
            </p>
            <p className="pride-subtext anim anim-up observe-me" style={{ ['--delay' as any]: '0.15s' }}>
              At StradIT, excellence isn’t a promise; it’s our North Star, and we make this possible through:
            </p>
            <div className="anim anim-up observe-me" style={{ ['--delay' as any]: '0.2s', marginBottom: 16 }}>
              <a href="#" className="btn">
                Experience Our Excellence <svg>
                  <use href="#icon-arrow" />
                </svg>
              </a>
            </div>
          </div>

          <div className="slider-wrapper anim anim-fade observe-me" style={{ ['--delay' as any]: '0.3s' }}>
            <div className="slider-track left-to-right">
              {prideLoopCards.map((card, idx) => (
                <div className="pride-card" key={`${card.title}-${idx}`}>
                  <div className="pride-icon-box">
                    <svg width="24" height="24">
                      <use href="#icon-star" />
                    </svg>
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>{card.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

