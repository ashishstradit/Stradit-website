'use client'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import GlobeSection from '@/components/GlobeSection'
import CTA from '@/components/CTA'
import { useObserver } from '@/hooks/useObserver'

export default function Home() {
  useObserver()
  return (
    <>
      <Hero />
      <Features />
      <GlobeSection />
      <CTA />
    </>
  )
}
