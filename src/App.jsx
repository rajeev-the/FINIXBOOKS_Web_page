import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductVideo from './components/ProductVideo';
import AppShowcase from './components/AppShowcase';
import CapabilitiesBento from './components/CapabilitiesBento';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F7F4] text-[#112019] antialiased">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />
      <main>
        <Hero onOpenDemo={() => setIsDemoModalOpen(true)} />
        <ProductVideo />
        <AppShowcase />
        <CapabilitiesBento />
        <CtaSection onOpenDemo={() => setIsDemoModalOpen(true)} />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
