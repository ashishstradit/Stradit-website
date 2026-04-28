import CoeEffects from '../CoeEffects'
import '../coe-detail.css'
import AiCarousel from './AiCarousel'

const CONTACT_HREF = 'mailto:reachout@stradit.com?subject=AI%20Solutions%20inquiry'

export default function AiCoePage() {
  return (
    <>
      <CoeEffects />

      <main className="coe-detail coe-page-tall-hero">
        {/* Hero video (same layout style as Cloud/Cyber pages) */}
        <section id="hero" aria-label="Artificial Intelligence hero video">
          <video className="bg-video" autoPlay loop muted playsInline preload="metadata">
            <source src="/Ai%20Coe/AI%20solution.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </section>

        {/* Hero copy below the video */}
        <section id="hero-copy" aria-label="AI Solutions intro">
          <div className="container text-center hero-content hero-copy">
            <h1 className="hero-title text-gradient anim slide-rtl" style={{ ['--delay' as any]: '0s' }}>
              Applied Artificial Intelligence
            </h1>
            <h2 className="hero-subtitle hero-subtitle-centered anim slide-rtl" style={{ ['--delay' as any]: '0.2s' }}>
              Intelligent AI for a Smarter Future
            </h2>
            <p className="hero-body anim slide-rtl" style={{ ['--delay' as any]: '0.3s' }}>
              AI should not live in slides and pilots. It should run inside real workflows. StradIT builds secured, governed, and ready to scale enterprise-grade AI solutions across ML, generative AI, LLMs, guardrails, assurance AI, and maturity models.
            </p>
            <div className="anim slide-rtl" style={{ ['--delay' as any]: '0.5s' }}>
              <a className="btn" href="#carousel-section">
                Start Your AI Transformation
              </a>
            </div>
          </div>
        </section>

        <AiCarousel />

        <section id="deploy-cta" className="ai-deploy-cta" aria-label="Deploy AI call to action">
          <div className="container text-center">
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.1s' }}>
              <a className="btn" href={CONTACT_HREF}>
                Deploy Smart AI
              </a>
            </div>
          </div>
        </section>

        <section id="final-cta" className="ai-final">
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              AI That&apos;s More Than A Buzzword
            </h2>
            <p
              className="sub-heading anim slide-rtl observe-me"
              style={{ ['--delay' as any]: '0.2s', textAlign: 'left', textAlignLast: 'left' }}
            >
              Our Core of Excellence around AI Solutions has helped global enterprises move from “let’s try AI” to “we can’t imagine running this
              operation without it.”
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.4s', marginTop: 20 }}>
              <a className="btn" href={CONTACT_HREF}>
                Validate AI With Confidence
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

