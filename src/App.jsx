import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MeasurableImpact from './components/MeasurableImpact'
import ProductSection from './components/ProductSection'
import FeatureModules from './components/FeatureModules'
import TechnicalHighlights from './components/TechnicalHighlights'
import SourceRepositories from './components/SourceRepositories'
import Stakeholders from './components/Stakeholders'
import Surfaces from './components/Surfaces'
import AiSection from './components/AiSection'
import SecurityMatrix from './components/SecurityMatrix'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import ScrollReveal from './components/ScrollReveal'
import AppLoader from './components/AppLoader'

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  const handleOpenDemo = () => setIsDemoModalOpen(true)
  const handleCloseDemo = () => setIsDemoModalOpen(false)

  return (
    <div className="bg-[#E4EAE4] text-[#1E3329] min-h-screen relative font-mono-fine antialiased selection:bg-[#7CF2C2] selection:text-[#1E3329]">
      {/* Initial Application Loading Handshake */}
      {showLoader && <AppLoader onFinish={() => setShowLoader(false)} />}

      <Navbar onOpenDemo={handleOpenDemo} />
      
      <main className="relative z-10 w-full pt-4">
        <Hero onOpenDemo={handleOpenDemo} />

        <ScrollReveal direction="up" delay={60}>
          <MeasurableImpact />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60}>
          <ProductSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60}>
          <FeatureModules />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60}>
          <TechnicalHighlights />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60}>
          <SourceRepositories />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60}>
          <Stakeholders />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60}>
          <Surfaces />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60}>
          <AiSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60}>
          <SecurityMatrix />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={60}>
          <CtaSection onOpenDemo={handleOpenDemo} />
        </ScrollReveal>
      </main>

      <Footer />

      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  )
}
