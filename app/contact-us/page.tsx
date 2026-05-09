'use client'
import { useEffect, useRef, type FormEvent } from 'react'
import type { Metadata } from 'next'
import './contact.css'

export default function ContactUsPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = pageRef.current?.querySelectorAll('.c-anim') ?? []
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); o.unobserve(e.target) }
      })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // form submission logic here
  }

  return (
    <div ref={pageRef} className="contact-page">

      {/* Hero — image only */}
      <section className="contact-hero">
        <img src="/contact-hero.png" alt="Contact Hero" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 1 }} />
        <div className="contact-hero-overlay" />
      </section>

      {/* Hero heading section below */}
      <section className="contact-hero-copy">
        <div className="contact-hero-copy-content">
          <h1 className="c-anim c-anim-rtl text-gradient">Let&apos;s Build the Future Together.</h1>
          <p className="c-anim c-anim-rtl" style={{ transitionDelay: '0.2s' }}>
            Connect with our experts today and embark on a digital transformation journey tailored to your enterprise.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-info" style={{ paddingTop: 20 }}>
            <h2 className="c-anim c-anim-up text-gradient">Get in Touch</h2>
            <h3 className="c-anim c-anim-up" style={{ transitionDelay: '0.1s' }}>
              We are ready to align technology with your business vision.
            </h3>
            <p className="c-anim c-anim-up" style={{ transitionDelay: '0.2s' }}>
              Whether you have a fully fleshed-out RFP or just a visionary idea, our Center of Excellence is equipped to guide you from concept to deployment. Drop us a line, and a strategic consultant will reach out shortly.
            </p>
          </div>

          <div className="contact-form-wrapper c-anim c-anim-up" style={{ transitionDelay: '0.3s' }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Work Email" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Company / Subject" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="How can we help you?" required />
              </div>
              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
            <div className="disclaimer">
              <strong>Your information stays with us. No spam. Ever.</strong><br />
              No matter where you are and what your concerns are, we&apos;re just a message away.
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
