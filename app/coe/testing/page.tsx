import CoeEffects from '../CoeEffects'
import '../coe-detail.css'

export default function TestingCoePage() {
  return (
    <>
      <CoeEffects />

      <main className="coe-detail coe-page-tall-hero">
        {/* Hero video (same layout style as other CoE detail pages) */}
        <section id="hero" aria-label="Testing & Quality hero video">
          <video className="bg-video" autoPlay loop muted playsInline preload="metadata">
            <source src="/Testing%20and%20Quality.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </section>

        {/* Hero copy below the video */}
        <section id="hero-copy" aria-label="Testing & Quality Engineering intro">
          <div className="container text-center hero-content hero-copy">
            <h1 className="hero-title text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Testing &amp; Quality Engineering
            </h1>
            <h2 className="hero-subtitle hero-subtitle-centered anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              Engineering trust in every line of code
            </h2>
            <p className="hero-body anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.32s' }}>
              StradIT provides bespoke and AI-powered Testing &amp; Quality Engineering that enables faster time-to-market without compromising on quality,
              reduces defect leakage, and lowers TCO while enhancing customer satisfaction.
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <a className="btn" href="#capabilities">
                Strengthen Your Quality Engineering
              </a>
            </div>
          </div>
        </section>

        <section id="capabilities">
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Precision-Driven Testing for Confident Delivery
            </h2>
            <p className="sub-heading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              We bring quality into the full product lifecycle, from early validation to release readiness. Our approach combines proven QA
              practices with AI-assisted test optimization and business-aligned strategies, so teams can move fast without adding risk.
            </p>
          </div>

          <div className="container testing-grid-3">
            <article className="testing-card anim zoom-out-reveal observe-me" style={{ ['--delay' as any]: '0s' }}>
              <div className="image-holder">
                <img src="/Testing%20Coe/End%20To%20End.jpg" alt="End-to-End QA Lifecycle Support" loading="lazy" />
              </div>
              <div className="card-content">
                <h4>End-to-End QA Lifecycle Support</h4>
                <h5>
                  StradIT is committed to equipping enterprises with state-of-the-art quality engineering through targeted testing engagements and
                  fully managed QA programs—helping teams release more often with fewer surprises.
                </h5>
                <ul className="bullet-list">
                  <li>Framing and deploying tailored test strategies</li>
                  <li>End-to-end automation scripting and maintenance</li>
                  <li>Structured defect tracking and resolution</li>
                </ul>
              </div>
            </article>

            <article className="testing-card anim zoom-out-reveal observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              <div className="image-holder">
                <img src="/Testing%20Coe/Testing%20Framework.jpg" alt="Testing & Quality Engineering Frameworks" loading="lazy" />
              </div>
              <div className="card-content">
                <h4>Testing &amp; Quality Engineering Frameworks</h4>
                <h5>
                  StradIT is a strategic partner that understands both tech and business. We deliver inventive frameworks designed to lower QA
                  overheads and reduce operational risks.
                </h5>
                <ul className="bullet-list">
                  <li>Tailored frameworks</li>
                  <li>Streamlined automated practices</li>
                  <li>Reusable components</li>
                </ul>
              </div>
            </article>

            <article className="testing-card anim zoom-out-reveal observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <div className="image-holder">
                <img src="/Testing%20Coe/Ai%20Domain.jpg" alt="Domain-Specific Testing Expertise" loading="lazy" />
              </div>
              <div className="card-content">
                <h4>Domain-Specific Testing Expertise</h4>
                <h5>
                  StradIT combines domain expertise with advanced QA frameworks and empowers enterprises to release technology that is secure,
                  compliant, and trusted by end-users.
                </h5>
                <ul className="bullet-list">
                  <li>Context-aware testing</li>
                  <li>Rigorous validation</li>
                  <li>Business-centric outcomes</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="final-cta" className="testing-final">
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Releases That Feel Calm, From <br />
              Development to the Launch Day
            </h2>
            <p className="sub-heading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              Fortune 500 enterprises trust StradIT to embed AI-enhanced quality into every stage of design, development, and deployment. The
              outcome? Fewer noisy faults, cleaner launches, and quality that holds strong as you scale.
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.4s', marginTop: 20 }}>
              <a className="btn" href="#">
                Validate Your Product With Precision
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

