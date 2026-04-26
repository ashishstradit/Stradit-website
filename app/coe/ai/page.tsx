import CoeEffects from '../CoeEffects'
import '../coe-detail.css'
import AiCarousel from './AiCarousel'

export default function AiCoePage() {
  return (
    <>
      <CoeEffects />

      <main className="coe-detail">
        {/* Hero video (same layout style as Cloud/Cyber pages) */}
        <section id="hero" aria-label="AI Solutions CoE hero video">
          <video className="bg-video" autoPlay loop muted playsInline preload="metadata">
            <source src="/Ai%20Coe/AI%20solution.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </section>

        {/* Hero copy below the video */}
        <section id="hero-copy" aria-label="AI Solutions CoE intro">
          <div className="container text-center hero-content hero-copy">
            <h1 className="hero-title text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              AI Solutions Center of Excellence
            </h1>
            <p className="hero-subtitle anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              Intelligent AI for a Smarter Future. AI should not live in slides and pilots. It should run inside real workflows. StradIT builds
              secured, governed, and ready-to-scale enterprise-grade AI solutions across ML, generative AI, LLMs, guardrails, assurance AI, and
              maturity models.
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <a className="btn" href="#carousel-section">
                Start Your AI Transformation
              </a>
            </div>
          </div>
        </section>

        <AiCarousel />

        <section id="final-cta" className="ai-final">
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              AI That&apos;s More Than A Buzzword
            </h2>
            <p className="sub-heading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              Our Core of Excellence around AI Solutions has helped global enterprises move from “let’s try AI” to “we can’t imagine running this
              operation without it.”
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.4s', marginTop: 20 }}>
              <a className="btn" href="#">
                Validate AI With Confidence
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

