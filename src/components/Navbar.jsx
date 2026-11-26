import React, { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#E4EAE4]/95 backdrop-blur-sm hairline-b animate-nav-enter">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-serif-display text-2xl tracking-tight text-[#1E3329] flex items-center gap-1.5 font-normal"
          >
            FINIXBOOKS
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <a
            className="font-mono-fine text-[11px] uppercase tracking-[0.12em] text-[#5E6F66] hover:text-[#1E3329] transition-colors"
            href="#impact"
          >
            Impact
          </a>
          <a
            className="font-mono-fine text-[11px] uppercase tracking-[0.12em] text-[#5E6F66] hover:text-[#1E3329] transition-colors"
            href="#features"
          >
            Modules
          </a>
          <a
            className="font-mono-fine text-[11px] uppercase tracking-[0.12em] text-[#1E3329] font-medium bg-[#D6E2D8] px-2.5 py-1 rounded-full transition-colors flex items-center gap-1"
            href="#app-showcase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>App UI</span>
          </a>
          <a
            className="font-mono-fine text-[11px] uppercase tracking-[0.12em] text-[#5E6F66] hover:text-[#1E3329] transition-colors"
            href="#technical-highlights"
          >
            Architecture
          </a>
          <a
            className="font-mono-fine text-[11px] uppercase tracking-[0.12em] text-[#5E6F66] hover:text-[#1E3329] transition-colors"
            href="#repositories"
          >
            Repositories
          </a>
          <a
            className="font-mono-fine text-[11px] uppercase tracking-[0.12em] text-[#5E6F66] hover:text-[#1E3329] transition-colors"
            href="#platforms"
          >
            Surfaces
          </a>
          <a
            className="font-mono-fine text-[11px] uppercase tracking-[0.12em] text-[#5E6F66] hover:text-[#1E3329] transition-colors"
            href="#security"
          >
            Security
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenDemo}
            className="font-mono-fine text-[11px] uppercase tracking-[0.1em] px-4 py-2 rounded-full hairline-border bg-[#D6E2D8] text-[#1E3329] hover:bg-[#E4EAE4] hover:border-[#1E3329] transition-all flex items-center gap-1.5 group cursor-pointer shadow-xs"
          >
            <span>Request Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#5E6F66]" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E3329] hover:bg-[#D6E2D8] rounded transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#E4EAE4] hairline-b px-6 py-4 space-y-3 font-mono-fine text-xs tracking-wider uppercase">
          <a
            href="#impact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#5E6F66] hover:text-[#1E3329] border-b border-[#1E3329]/10"
          >
            Impact
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#5E6F66] hover:text-[#1E3329] border-b border-[#1E3329]/10"
          >
            Key Modules (10 Features)
          </a>
          <a
            href="#app-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#1E3329] font-medium border-b border-[#1E3329]/10 flex items-center justify-between"
          >
            <span>Live App UI (16 Screens)</span>
            <span className="text-[9px] bg-[#1E3329] text-[#7CF2C2] px-2 py-0.5 rounded-full font-mono-metric">LIVE</span>
          </a>
          <a
            href="#technical-highlights"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#5E6F66] hover:text-[#1E3329] border-b border-[#1E3329]/10"
          >
            Architecture
          </a>
          <a
            href="#repositories"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#5E6F66] hover:text-[#1E3329] border-b border-[#1E3329]/10"
          >
            Repositories
          </a>
          <a
            href="#platforms"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#5E6F66] hover:text-[#1E3329] border-b border-[#1E3329]/10"
          >
            Surfaces
          </a>
          <a
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#5E6F66] hover:text-[#1E3329]"
          >
            Security
          </a>
        </div>
      )}
    </header>
  )
}
