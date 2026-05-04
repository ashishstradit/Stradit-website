'use client'

import { useEffect, useRef, type CSSProperties } from 'react'
import CoeEffects from '../coe/CoeEffects'
import '../coe/coe-detail.css'
import './startit.css'

const img = (name: string) => `/StartIT/${encodeURIComponent(name)}`

const delay = (s: string): CSSProperties => ({ ['--delay' as string]: s } as CSSProperties)

export default function StartItView() {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const rootEl = rootRef.current
    if (!rootEl) return
    const scopeRoot: HTMLElement = rootEl
    const ac = new AbortController()
    const { signal } = ac

    function splitTextForAnimation(selector: string) {
      scopeRoot.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        const text = el.innerText
        const words = text.split(/\s+/).filter(Boolean)
        el.innerHTML = ''
        words.forEach((word, index) => {
          const span = document.createElement('span')
          span.textContent = word
          span.className = 'split-word'
          span.style.setProperty('--word-index', String(index))
          el.appendChild(span)
          el.appendChild(document.createTextNode(' '))
        })
      })
    }

    splitTextForAnimation('.split-text-rtl')
    splitTextForAnimation('.split-text-zoom')

    const animElements = scopeRoot.querySelectorAll<HTMLElement>('.anim, .anim-words-rtl, .anim-words-zoom')
    animElements.forEach((el) => {
      if (el.classList.contains('anim')) {
        const delayStr = el.style.getPropertyValue('--delay')
        if (delayStr) el.style.transitionDelay = delayStr
      }
    })

    const scrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    animElements.forEach((el) => scrollObserver.observe(el))

    const track = scopeRoot.querySelector<HTMLElement>('#c-track')
    const slides = scopeRoot.querySelectorAll<HTMLElement>('.carousel-slide')
    const btnPrev = scopeRoot.querySelector<HTMLElement>('#c-prev')
    const btnNext = scopeRoot.querySelector<HTMLElement>('#c-next')
    let currentIndex = 0

    function updateCarousel() {
      if (!track) return
      track.style.transform = `translateX(-${currentIndex * 100}%)`
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex)
      })
    }

    const onNext = () => {
      currentIndex = (currentIndex + 1) % slides.length
      updateCarousel()
    }
    const onPrev = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length
      updateCarousel()
    }
    btnNext?.addEventListener('click', onNext, { signal })
    btnPrev?.addEventListener('click', onPrev, { signal })

    const accordionHeaders = scopeRoot.querySelectorAll<HTMLElement>('.accordion-header')
    const onAccordionClick = (header: HTMLElement) => {
      const item = header.parentElement
      const content = header.nextElementSibling as HTMLElement | null
      if (!item || !content) return
      const isActive = item.classList.contains('active')
      scopeRoot.querySelectorAll<HTMLElement>('.accordion-item').forEach((accItem) => {
        accItem.classList.remove('active')
        const c = accItem.querySelector<HTMLElement>('.accordion-content')
        if (c) c.style.maxHeight = ''
      })
      if (!isActive) {
        item.classList.add('active')
        content.style.maxHeight = `${content.scrollHeight}px`
      }
    }
    accordionHeaders.forEach((h) => h.addEventListener('click', () => onAccordionClick(h), { signal }))

    const onResize = () => {
      scopeRoot.querySelectorAll<HTMLElement>('.accordion-item.active .accordion-content').forEach((content) => {
        content.style.maxHeight = `${content.scrollHeight}px`
      })
    }
    window.addEventListener('resize', onResize, { signal })

    return () => {
      ac.abort()
      scrollObserver.disconnect()
    }
  }, [])

  return (
    <>
      <CoeEffects />
      <main ref={rootRef} className="coe-detail startit-page">
        <section id="hero">
          <div className="bg-animated-gradient" />
          <div className="bg-overlay" style={{ background: 'rgba(8,11,35,0.8)' }} />
          <div className="container content-center">
            <h1 className="hero-title text-gradient split-text-rtl anim-words-rtl">Turning Your Teams Into AI Powerhouses</h1>
            <p className="subheading anim slide-ltr" style={{ color: '#fff', ...delay('0.2s') }}>
              From &lsquo;AI Curious&rsquo; to &lsquo;AI Certified&rsquo; in Only 8 Weeks with StartIT.
            </p>
            <div className="anim slide-ltr" style={{ marginTop: 10, ...delay('0.4s') }}>
              <a href="#section-two" className="btn-primary">
                Join Our AI Training
              </a>
            </div>
          </div>
        </section>

        <section id="section-two">
          <div className="container grid-2">
            <div>
              <h2 className="heading-main text-gradient split-text-rtl anim-words-rtl">Lead AI and Technology With Confidence</h2>
              <h3 className="subheading anim slide-ltr" style={{ color: '#fff', textAlign: 'left', ...delay('0.1s') }}>
                StradIT turns learning AI and tech engineering from an uphill battle to a strategic leap forward through guided learning, hands-on
                labs, mentorship, and a clear path from concepts to outcomes.
              </h3>
              <ul className="bullet-list">
                <li className="anim slide-rtl" style={delay('0.2s')}>
                  8-week cohort model
                </li>
                <li className="anim slide-rtl" style={delay('0.3s')}>
                  5 role-based tracks
                </li>
                <li className="anim slide-rtl" style={delay('0.4s')}>
                  Capstone outputs
                </li>
              </ul>
            </div>
            <div>
              <h2 className="heading-main text-gradient split-text-rtl anim-words-rtl">Fuel Your Career with StartIT</h2>
              <h3 className="subheading anim slide-ltr" style={{ color: '#fff', textAlign: 'left', ...delay('0.1s') }}>
                StartIT, our AI training and returnship program, helps leaders and tech professionals to make AI concepts their second nature, with
                training mapped to enterprise roles and grounded in domain realities.
              </h3>
              <ul className="bullet-list">
                <li className="anim slide-rtl" style={delay('0.2s')}>
                  Guided learning paths
                </li>
                <li className="anim slide-rtl" style={delay('0.3s')}>
                  Mentored projects based on realistic scenarios
                </li>
                <li className="anim slide-rtl" style={delay('0.4s')}>
                  Exposure to StradIT&apos;s AI Centers of Excellence
                </li>
                <li className="anim slide-rtl" style={delay('0.5s')}>
                  Support to build confidence, portfolios, and interview-ready stories
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="container content-center">
            <h2 className="heading-main text-gradient split-text-zoom anim-words-zoom">Build Rock-solid Confidence</h2>
            <h3 className="subheading anim slide-ltr" style={{ color: '#fff', ...delay('0.2s') }}>
              StartIT is organized into four tracks, so every participant learns what they need, at the right depth, with a shared language across
              business and technology.
            </h3>
          </div>

          <div className="container">
            <div className="carousel-box anim slide-ttb" style={delay('0.4s')}>
              <button type="button" className="carousel-btn prev" id="c-prev" aria-label="Previous slide">
                <svg>
                  <use href="#icon-chevron-left" />
                </svg>
              </button>
              <button type="button" className="carousel-btn next" id="c-next" aria-label="Next slide">
                <svg>
                  <use href="#icon-chevron-right" />
                </svg>
              </button>
              <div className="carousel-track" id="c-track">
                <div className="carousel-slide active">
                  <div className="carousel-content">
                    <h3 className="heading-md text-gradient">AI Literacy</h3>
                    <h4 style={{ color: 'var(--brand-color)', fontWeight: 400, marginBottom: 25, whiteSpace: 'pre-line' }}>
                      {`Nail the AI Basics\nLearn what AI is, what it can do, and how to use it responsibly in daily workflows.`}
                    </h4>
                    <ul className="bullet-list">
                      <li>Foundations of AI, ML, and generative models</li>
                      <li>Responsible use and governance in daily workflows</li>
                      <li>Hands-on practice with tools your teams already use</li>
                      <li>Shared vocabulary across business and technology</li>
                    </ul>
                  </div>
                  <div>
                    <img src={img('Ai Literacy.jpg')} className="carousel-image" alt="AI Literacy track" />
                  </div>
                </div>
                <div className="carousel-slide">
                  <div className="carousel-content">
                    <h3 className="heading-md text-gradient">AI Strategy</h3>
                    <h4 style={{ color: 'var(--brand-color)', fontWeight: 400, marginBottom: 25, whiteSpace: 'pre-line' }}>
                      {`From Hype to ROI\nBuilt for senior leaders and business heads who need to connect AI to business value.`}
                    </h4>
                    <ul className="bullet-list">
                      <li>Translate business goals into AI portfolios</li>
                      <li>Identify invest vs pause decisions</li>
                      <li>Design adoption roadmaps</li>
                      <li>Align stakeholders around measurable AI outcomes</li>
                    </ul>
                  </div>
                  <div>
                    <img src={img('AI Strategy.jpg')} className="carousel-image" alt="AI Strategy track" />
                  </div>
                </div>
                <div className="carousel-slide">
                  <div className="carousel-content">
                    <h3 className="heading-md text-gradient">AI Technical</h3>
                    <h4 style={{ color: 'var(--brand-color)', fontWeight: 500, marginBottom: 25, whiteSpace: 'pre-line' }}>
                      {`Production-Ready AI\nA hands-on track for data scientists, engineers, and technical teams, grounded in production realities.`}
                    </h4>
                    <ul className="bullet-list">
                      <li>ML pipelines and model lifecycle</li>
                      <li>Deep learning and NLP fundamentals</li>
                      <li>Combining traditional ML with LLMs</li>
                      <li>Integrating AI into existing architectures</li>
                    </ul>
                  </div>
                  <div>
                    <img src={img('AI Technical.jpg')} className="carousel-image" alt="AI Technical track" />
                  </div>
                </div>
                <div className="carousel-slide">
                  <div className="carousel-content">
                    <h3 className="heading-md text-gradient">AI Applied</h3>
                    <h4 style={{ color: 'var(--brand-color)', fontWeight: 500, marginBottom: 25, whiteSpace: 'pre-line' }}>
                      {`Build the Breakthrough\nAI Applied brings everything into real workflows. Hands-on creation and domain-specific prototyping.`}
                    </h4>
                    <ul className="bullet-list">
                      <li>Asset management research</li>
                      <li>Intelligent document processing</li>
                      <li>Wealth engagement and personalization</li>
                      <li>AI agents, copilots, and customer interaction flows</li>
                    </ul>
                  </div>
                  <div>
                    <img src={img('AI Applied.jpg')} className="carousel-image" alt="AI Applied track" />
                  </div>
                </div>
                <div className="carousel-slide">
                  <div className="carousel-content">
                    <h3 className="heading-md text-gradient">Quantum AI Training</h3>
                    <h4 style={{ color: 'var(--brand-color)', fontWeight: 500, marginBottom: 25, whiteSpace: 'pre-line' }}>
                      {`Prepare for the Next Frontier\nStartIT helps your teams explore quantum computing and AI through a practical, business-first approach.`}
                    </h4>
                    <ul className="bullet-list">
                      <li>Fundamentals of quantum computing</li>
                      <li>Quantum-inspired optimization techniques</li>
                      <li>Hybrid quantum-AI model prototyping</li>
                      <li>Organization-wide quantum readiness</li>
                    </ul>
                  </div>
                  <div>
                    <img src={img('Quantum AI Training.jpg')} className="carousel-image" alt="Quantum AI Training track" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-center anim slide-ttb" style={delay('0.6s')}>
              <a href="mailto:reachout@stradit.com?subject=StartIT%20inquiry" className="btn-primary">
                Upskill Your Teams With StartIT
              </a>
            </div>
          </div>
        </section>

        <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <img src={img('Background 01.png')} className="bg-img" alt="" />
          <div className="bg-overlay-center" />
          <div className="container content-center">
            <h2 className="heading-main text-gradient anim slide-ttb" style={delay('0s')}>
              The StartIT Transformation
            </h2>
            <p
              className="subheading text-justify anim slide-ttb"
              style={{ color: '#fff', ...delay('0.15s') }}
            >
              Move your organization away from scattered pilots and toward a unified, AI-driven future. After completing StartIT, your organization
              will achieve critical pillars of maturity.
            </p>
            <div className="grid-3x2" style={{ width: '100%' }}>
              {[
                'A Unified AI Vocabulary',
                'Strategic Decision-Making',
                'Actionable Product Roadmaps',
                'Responsible Technical Excellence',
                'Re-entry with AI Confidence',
                'A Culture of AI-First Thinking',
              ].map((title, i) => (
                <div
                  key={title}
                  className="icon-box-card anim zoom-out"
                  style={delay(`${0.2 + i * 0.1}s`)}
                >
                  <div className="icon-wrapper">
                    <svg>
                      <use href={i % 3 === 0 ? '#icon-layer' : i % 3 === 1 ? '#icon-code' : '#icon-shield'} />
                    </svg>
                  </div>
                  <h4>{title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="final-cta" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <img src={img('Background 01.png')} className="bg-img" alt="" />
          <div className="bg-overlay" style={{ background: 'linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.7) 100%)' }} />
          <div className="container content-center">
            <h2 className="heading-main text-gradient anim slide-rtl" style={delay('0s')}>
              Ready to make your organization truly AI-ready?
            </h2>
            <p className="subheading text-justify anim slide-rtl" style={{ color: '#fff', ...delay('0.2s') }}>
              Book a strategy call and see how StartIT can turn your people into confident builders, decision-makers, and leaders in the age of AI.
            </p>
            <div className="anim slide-rtl" style={{ marginTop: 15, ...delay('0.4s') }}>
              <a href="mailto:reachout@stradit.com?subject=StartIT%20strategy%20call" className="btn-primary">
                Talk to Our AI Training Team
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="heading-main text-gradient anim slide-ttb" style={{ textAlign: 'center', ...delay('0s') }}>
              Frequently Asked Questions
            </h2>
            <div className="accordion-wrapper anim slide-ttb" style={delay('0.2s')}>
              {[
                ['How long does the StartIT program run?', 'Many clients start with a 6-12 week plan. StartIT is designed to adapt to your calendar, intensity, and cohort size.'],
                ['Can the training focus on financial services use cases only?', 'Yes. We can tailor tracks for banking, asset management, treasury, and risk, including regulatory and governance needs.'],
                ['Do you offer in-person, remote, or hybrid training?', 'All three. We align delivery to your locations and time zones.'],
                ['Is this suitable if we are just starting our AI journey?', 'Yes. StartIT meets teams where they are, from first pilots to scaling across functions.'],
                ['Can we integrate StartIT with internal L&D programs?', 'Yes. We align with existing curriculum, certification plans, and learning platforms.'],
                ['How do we measure impact?', 'We define success metrics upfront, such as skill assessments, validated use cases, roadmap progress, and stakeholder feedback.'],
              ].map(([q, a]) => (
                <div className="accordion-item" key={q}>
                  <button type="button" className="accordion-header">
                    <span className="accordion-icon">+</span>
                    {q}
                  </button>
                  <div className="accordion-content">
                    <div className="accordion-inner text-justify">{a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <svg style={{ display: 'none' }} aria-hidden>
          <symbol id="icon-chevron-left" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </symbol>
          <symbol id="icon-chevron-right" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </symbol>
          <symbol id="icon-layer" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="currentColor" />
          </symbol>
          <symbol id="icon-shield" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="currentColor" />
          </symbol>
          <symbol id="icon-code" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor" />
          </symbol>
        </svg>
      </main>
    </>
  )
}
