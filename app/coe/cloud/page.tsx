import CoeEffects from '../CoeEffects'
import '../coe-detail.css'

export default function CloudCoePage() {
  return (
    <>
      <CoeEffects />

      <main className="coe-detail">
        <section id="hero" aria-label="Cloud & Infrastructure CoE hero video">
          <video className="bg-video" autoPlay loop muted playsInline preload="auto">
            <source src="/Cloud%20infrastructure.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </section>

        <section id="hero-copy" aria-label="Cloud & Infrastructure CoE intro">
          <div className="container text-center hero-content hero-copy">
            <h1 className="hero-title text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Cloud &amp; Infrastructure Centre of Excellence
            </h1>
            <p className="hero-subtitle anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              Strategic, Scalable, Future-Ready Cloud for All. StradIT helps enterprises move to the cloud with confidence, from multi-cloud strategy to legacy modernization and end-to-end migration. We design AI-enhanced cloud foundations that perform under load, stay secure, and scale with your business goals.
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <a className="btn" href="#">
                Start Your Cloud Transformation
              </a>
            </div>
          </div>
        </section>

        {/* Removed: percentage/stats marquee section */}

        <section>
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Shaping Cloud You Need With Conviction
            </h2>
            <p className="sub-heading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              From early discovery and planning to 24/7 operations, we partner with you to build resilient, AI-optimized cloud systems built for production.
            </p>
          </div>
        </section>

        <section>
          <div className="container grid-2">
            <div className="media-box anim slide-btt observe-me" style={{ ['--delay' as any]: '0s' }}>
              <video autoPlay loop muted playsInline preload="metadata">
                <source src="/Cloud%20infrastructure.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <h2 className="heading-main text-gradient anim slide-btt observe-me" style={{ ['--delay' as any]: '0.1s' }}>
                End-to-End Consulting &amp; Service Delivery
              </h2>
              <p className="sub-heading anim slide-btt observe-me" style={{ ['--delay' as any]: '0.2s', textAlign: 'left', margin: '0 0 18px 0' }}>
                Identify needs, understand the utility of different cloud infrastructures, and make informed decisions.
              </p>
              <ul className="bullet-list anim slide-btt observe-me" style={{ ['--delay' as any]: '0.3s' }}>
                <li>Cloud readiness assessment and a clear migration roadmap</li>
                <li>Architectures balancing performance, cost, and flexibility across platforms</li>
                <li>Legacy modernization planning to move from outdated systems to cloud</li>
              </ul>
              <div className="anim slide-btt observe-me" style={{ ['--delay' as any]: '0.4s', marginTop: 20 }}>
                <a className="btn" href="#">
                  Explore Migration Strategies
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container grid-2">
            <div>
              <h2 className="heading-main text-gradient anim slide-btt observe-me" style={{ ['--delay' as any]: '0s' }}>
                Managed Services &amp; Ongoing Support
              </h2>
              <p className="sub-heading anim slide-btt observe-me" style={{ ['--delay' as any]: '0.1s', textAlign: 'left', margin: '0 0 18px 0' }}>
                Keep your cloud reliable, optimized, and secure over the long term through AI-managed cloud services.
              </p>
              <ul className="bullet-list anim slide-btt observe-me" style={{ ['--delay' as any]: '0.2s' }}>
                <li>Proactive monitoring to spot issues before they escalate</li>
                <li>Continuous optimization across workloads, apps, and infrastructure</li>
                <li>24/7 support for mission-critical systems and business continuity</li>
              </ul>
              <div className="anim slide-btt observe-me" style={{ ['--delay' as any]: '0.3s', marginTop: 20 }}>
                <a className="btn" href="#">
                  Define Your Cloud Roadmap
                </a>
              </div>
            </div>
            <div className="media-box anim slide-btt observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <video autoPlay loop muted playsInline preload="metadata">
                <source src="/Cloud%20infrastructure.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section id="final-cta">
          <div className="container text-center">
            <h2 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Cloud Outcomes That Actually Hold Up In Production
            </h2>
            <p className="sub-heading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
              See how our cloud infrastructure work fixed performance bottlenecks, tamed costs, and laid foundations for fast, stable growth.
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.4s' }}>
              <a className="btn" href="#">
                Redefine Cloud With StradIT
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

