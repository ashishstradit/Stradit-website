'use client'

import { useMemo, useRef } from 'react'

type Card = {
  title: string
  subtitle: string
  bullets: string[]
  img: string
}

export default function AiCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const cards: Card[] = useMemo(
    () => [
      {
        title: 'AI Engineering',
        subtitle: 'From model designing to deployment, StradIT delivers meticulously formulated frameworks for AI solutions.',
        bullets: ['Tailored ML and generative AI models', 'Accelerators and integration toolkits', 'LLMOps and MLOps foundations'],
        img: '/Ai%20Coe/AI%20Engineering.jpg',
      },
      {
        title: 'Testing & Validation Frameworks',
        subtitle: 'Enterprise-ready AI solutions delivered through stringent testing and validation.',
        bullets: [
          'LLM evaluation frameworks for accuracy, reliability, and scalability',
          'Risk scoring models to surface vulnerabilities and guide mitigation',
          'Guardrails and assurance controls for responsible, policy-aligned AI',
        ],
        img: '/Ai%20Coe/Testing%20Framework.jpg',
      },
      {
        title: 'Business Copilots & Knowledge Systems',
        subtitle: 'Domain-specific AI copilots and intelligent knowledge systems to embed AI into how teams work.',
        bullets: [
          'Tailored AI copilots to address industry-specific challenges',
          'Enterprise knowledge systems powered by fine-tuned LLMs',
          'Knowledge graphs that connect data for smarter decisions',
        ],
        img: '/Ai%20Coe/Business%20Copilots.jpg',
      },
      {
        title: 'Strategic AI Frameworks',
        subtitle: 'Adopt AI with confidence by aligning every solution to business goals, readiness, and long-term strategy.',
        bullets: [
          'Domain value assessment to define where AI will move the needle',
          'AI maturity models to guide adoption from pilot to scale',
          'Use case scoring to prioritize what delivers ROI fastest',
        ],
        img: '/Ai%20Coe/Strategic%20AI%20Frameworks.jpg',
      },
      {
        title: 'AI Literacy & Enablement',
        subtitle: 'AI is as good as the person using it. We provide extensive AI literacy and upskilling programs.',
        bullets: [
          'AI literacy programs for shared understanding and alignment',
          'Expert-led training across ML, LLMs, generative AI, and governance',
          'Ongoing masterclasses to keep skills sharp as the ecosystem evolves',
        ],
        img: '/Ai%20Coe/Ai%20Literecy.jpg',
      },
    ],
    []
  )

  const scrollByOneCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-carousel-card]')
    if (!card) return
    const gap = parseInt(getComputedStyle(track).gap || '30', 10) || 30
    const amount = card.offsetWidth + gap
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="carousel-section" className="ai-carousel">
      <div className="container text-center carousel-header">
        <h2 className="heading-main text-gradient anim slide-rtl observe-me" style={{ ['--delay' as any]: '0s' }}>
          AI Engineered for Real-World Impact
        </h2>
        <p className="sub-heading anim slide-rtl observe-me" style={{ ['--delay' as any]: '0.2s' }}>
          StradIT delivers measurable AI outcomes, not experiments. We pair deep engineering with strategic planning so every solution is designed
          to deploy, adopt, and perform—aligned to your business, risk posture, and operating model.
        </p>
      </div>

      <div className="carousel-container">
        <button className="nav-btn prev" type="button" aria-label="Previous slide" onClick={() => scrollByOneCard(-1)}>
          ‹
        </button>

        <div className="carousel-track-wrapper">
          <div className="carousel-track" ref={trackRef}>
            {cards.map((c, idx) => (
              <div className="carousel-card anim zoom-out-reveal observe-me" style={{ ['--delay' as any]: `${idx * 0.15}s` }} key={c.title} data-carousel-card>
                <div className="image-holder">
                  <img src={c.img} alt={c.title} loading="lazy" />
                </div>
                <div className="card-content">
                  <h4>{c.title}</h4>
                  <h5>{c.subtitle}</h5>
                  <ul className="bullet-list">
                    {c.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn next" type="button" aria-label="Next slide" onClick={() => scrollByOneCard(1)}>
          ›
        </button>
      </div>
    </section>
  )
}

