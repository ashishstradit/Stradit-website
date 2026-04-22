'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import GlobeSection from '@/components/GlobeSection'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { useObserver } from '@/hooks/useObserver'

export default function Home() {
  useObserver()
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <GlobeSection />
      <CTA />
      <Footer />
    </>
  )
}
