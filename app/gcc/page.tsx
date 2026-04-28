import CoeEffects from '../coe/CoeEffects'
import './gcc.css'

export default function GccPage() {
  return (
    <>
      <CoeEffects />

      <main className="gcc-page">
        <section id="hero" aria-label="Global Capability Center hero">
          <img className="bg-media" src="/GCC/Hero%20Section.jpg" alt="" aria-hidden="true" />
          <div className="bg-overlay-gradient" />

          <div className="container align-center gcc-hero-content">
            <h1 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Your Global Capability Center
            </h1>
            <h2 className="sub-heading gcc-hero-subheading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.15s', color: '#fff' }}>
              Built by StradIT. Owned by you.
            </h2>
            <p className="sub-heading gcc-hero-body anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.24s', color: '#fff', margin: '0 0 28px 0' }}>
              Your dedicated tech team, finance hub, or innovation center will be fully operational in weeks, not months. We set it up. We run the
              backend. You call the shots.
            </p>
            <div className="anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.3s' }}>
              <a href="#infrastructure" className="cta-btn">
                Build What&apos;s Yours
              </a>
            </div>
          </div>
        </section>

        <section id="infrastructure" className="band band-dark">
          <div className="container align-center">
            <h2 className="heading-section text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              The StradIT Difference
            </h2>
            <p className="subheading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.15s', maxWidth: 900 }}>
              With StradIT’s GCC, you hire top-tier talent with zero headaches and with full control. This isn&apos;t outsourcing. This is ownership.
            </p>
          </div>

          <div className="container layout-grid-2 mt-50">
            {[
              'First hires in 2–4 weeks. Not quarters.',
              'Cut costs up to 50% without cutting corners.',
              'Go from 5 to 50 to 500. We grow when you grow.',
              'One partner. Full stack. No juggling vendors.',
            ].map((t, i) => (
              <div className="content-holder anim slide-rtl observe-me" style={{ ['--delay' as any]: `${0.2 + i * 0.15}s` }} key={t}>
                <div className="content-text">
                  <h4>{t}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="collage" className="band">
          <div className="container align-center">
            <h2 className="heading-section text-gradient anim zoom-out observe-me" style={{ ['--delay' as any]: '0s' }}>
              What You Unlock
            </h2>
            <p className="subheading text-justify anim zoom-out observe-me" style={{ ['--delay' as any]: '0.15s', maxWidth: 900 }}>
              StradIT helps you establish and run a captive center that functions as a seamless extension of your headquarters. From IT and finance
              to R&amp;D and customer operations, we help you centralize, scale, and innovate.
            </p>
          </div>

          <div className="container collage-grid">
            {[
              {
                cls: 'item-1',
                img: '/GCC/Globe%20Talent.jpg',
                title: 'Global Talent, Local Expertise',
                desc: 'Access world-class professionals in tech, analytics, finance, and beyond in locations that make strategic sense.',
              },
              {
                cls: 'item-2',
                img: '/GCC/Low%20Cost.png',
                title: 'Cost Without Compromise',
                desc: 'Reduce operational costs by up to 50% while elevating quality and output.',
              },
              {
                cls: 'item-3',
                img: '/GCC/Speed%20to%20scale.png',
                title: 'Speed to Scale',
                desc: 'Ramp up (or down) with agility. Your GCC grows with your ambitions.',
              },
              {
                cls: 'item-4',
                img: '/GCC/innovation.jpg',
                title: 'Innovation at the Core',
                desc: 'Transform your center into a hub for R&D, digital transformation, and next-gen capabilities.',
              },
              {
                cls: 'item-5',
                img: '/GCC/Total%20Transparency.png',
                title: 'Total Visibility',
                desc: 'Track payroll, team performance, costs, and compliance.',
              },
            ].map((c, idx) => (
              <div className={`collage-item ${c.cls} anim zoom-out observe-me`} style={{ ['--delay' as any]: `${0.2 + idx * 0.15}s` }} key={c.title}>
                <div className="collage-image-wrapper">
                  <img src={c.img} alt={c.title} loading="lazy" />
                </div>
                <div className="collage-text">
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="advanced-systems" className="band band-dark">
          <div className="container align-center">
            <h2 className="heading-section text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
              Built for Builders
            </h2>
            <p className="subheading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.15s', maxWidth: 900 }}>
              StradIT GCCs power:
            </p>
          </div>

          <div className="container layout-grid-2 mt-50">
            {['AI & Machine Learning teams', 'Cloud & DevOps operations', 'Data Analytics hubs', 'Cybersecurity centers'].map((t, i) => (
              <div className="content-holder anim slide-rtl observe-me" style={{ ['--delay' as any]: `${0.2 + i * 0.15}s` }} key={t}>
                <div className="content-text">
                  <h4>{t}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="final-cta" className="gcc-final" aria-label="GCC final call to action">
          <img className="bg-media" src="/GCC/Background%2001.png" alt="" aria-hidden="true" />
          <div className="bg-overlay-dark" />

          <div className="container align-center">
            <h2 className="heading-section text-gradient anim slide-ttb observe-me" style={{ ['--delay' as any]: '0s' }}>
              Ready to Build Your Global Powerhouse?
            </h2>
            <p className="subheading text-justify anim slide-ttb observe-me" style={{ ['--delay' as any]: '0.2s', maxWidth: 900, color: '#fff' }}>
              Let&apos;s talk about what your GCC could look like and how fast we can get you there.
            </p>
            <div className="anim slide-ttb observe-me" style={{ ['--delay' as any]: '0.4s', marginTop: 20 }}>
              <a className="cta-btn" href="#">
                Book a Free Strategy Call
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

