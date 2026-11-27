import React, { useState, useEffect, useCallback } from 'react'
import {
  Monitor,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from 'lucide-react'

// Curated Web / Desktop Screenshots
import web01 from '../assets/web_screenshots/01-ai-insights.jpeg'
import web02 from '../assets/web_screenshots/02-receivables-aging.jpeg'
import web04 from '../assets/web_screenshots/04-daybook-register.jpeg'
import web05 from '../assets/web_screenshots/05-sales-register.jpeg'
import web08 from '../assets/web_screenshots/08-trial-balance.jpeg'
import web10 from '../assets/web_screenshots/10-balance-sheet.jpeg'
import web12 from '../assets/web_screenshots/12-gst-summary.jpeg'
import web13 from '../assets/web_screenshots/13-banking-cash.jpeg'

// Curated Mobile Screenshots
import mob03 from '../assets/screenshots/03-executive-dashboard.jpeg'
import mob05 from '../assets/screenshots/05-receivables-payables.jpeg'
import mob06 from '../assets/screenshots/06-party-receivables-aging.jpeg'
import mob07 from '../assets/screenshots/07-digital-daybook.jpeg'
import mob08 from '../assets/screenshots/08-balance-sheet.jpeg'
import mob09 from '../assets/screenshots/09-trial-balance.jpeg'
import mob12 from '../assets/screenshots/12-sales-invoice-voucher.jpeg'
import mob13 from '../assets/screenshots/13-contra-bank-transfer.jpeg'

// High-impact curated screens (no long descriptions, just title & clean tag)
const CURATED_WEB = [
  { id: 'web-ai', src: web01, title: 'AI Business Insights', tag: 'AI Assistant' },
  { id: 'web-trial-balance', src: web08, title: 'Trial Balance', tag: 'CA Audit' },
  { id: 'web-balance-sheet', src: web10, title: 'Balance Sheet', tag: 'Financials' },
  { id: 'web-sales', src: web05, title: 'Sales Register', tag: 'Revenue' },
  { id: 'web-receivables', src: web02, title: 'Debtor Aging', tag: 'Cash Flow' },
  { id: 'web-gst', src: web12, title: 'GST Summary & ITC', tag: 'Tax' },
  { id: 'web-daybook', src: web04, title: 'Digital Day Book', tag: 'Journal' },
  { id: 'web-banking', src: web13, title: 'Cash & Banking', tag: 'Treasury' },
]

const CURATED_MOBILE = [
  { id: 'mob-dashboard', src: mob03, title: 'Executive KPI Dashboard', tag: 'Live Trends' },
  { id: 'mob-sales', src: mob12, title: 'Tax Invoice Voucher', tag: 'Field Entry' },
  { id: 'mob-aging', src: mob06, title: 'Aging & WhatsApp Reminders', tag: 'Recovery' },
  { id: 'mob-receivables', src: mob05, title: 'Receivables & Payables', tag: 'Cash Flow' },
  { id: 'mob-daybook', src: mob07, title: 'Daily Transaction Feed', tag: 'Day Book' },
  { id: 'mob-balance-sheet', src: mob08, title: 'Mobile Balance Sheet', tag: 'Financials' },
  { id: 'mob-trial-balance', src: mob09, title: 'Group Trial Balance', tag: 'Audit' },
  { id: 'mob-contra', src: mob13, title: 'Contra / Bank Transfer', tag: 'Banking' },
]

export default function AppShowcase() {
  const [platform, setPlatform] = useState('web') // 'web' | 'mobile'
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const currentList = platform === 'web' ? CURATED_WEB : CURATED_MOBILE
  const currentScreen = currentList[selectedIndex] || currentList[0]

  const handlePlatformChange = (p) => {
    setPlatform(p)
    setSelectedIndex(0)
  }

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % currentList.length)
  }, [currentList.length])

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + currentList.length) % currentList.length)
  }, [currentList.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % currentList.length)
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + currentList.length) % currentList.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, currentList.length])

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-16 hairline-t" id="app-showcase">
      {/* Ultra-clean Header: Title & Switcher Only */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium flex items-center gap-1.5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"></span>
            PRODUCT SHOWCASE
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1E3329] font-normal tracking-tight">
            Live Interface.
          </h2>
        </div>

        {/* Minimal Platform Switcher */}
        <div className="inline-flex items-center gap-1 bg-[#D6E2D8] p-1 rounded-full hairline-border self-start sm:self-auto text-xs font-mono-fine">
          <button
            onClick={() => handlePlatformChange('web')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-2 ${
              platform === 'web'
                ? 'bg-[#1E3329] text-[#7CF2C2] font-medium shadow-xs'
                : 'text-[#5E6F66] hover:text-[#1E3329]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Web Desktop</span>
          </button>
          <button
            onClick={() => handlePlatformChange('mobile')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-2 ${
              platform === 'mobile'
                ? 'bg-[#1E3329] text-[#7CF2C2] font-medium shadow-xs'
                : 'text-[#5E6F66] hover:text-[#1E3329]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile App</span>
          </button>
        </div>
      </div>

      {/* Main Showcase Stage */}
      <div className="bg-[#D6E2D8] hairline-border rounded-xs p-4 sm:p-7">
        {platform === 'web' ? (
          /* DESKTOP BROWSER CHASSIS (1600:701 aspect ratio) */
          <div className="space-y-4">
            {/* Browser Chassis */}
            <div className="bg-[#0E1713] rounded-xs overflow-hidden shadow-2xl hairline-border ring-1 ring-white/10 group">
              {/* Browser Header Bar */}
              <div className="px-4 py-2 bg-[#12231C] hairline-b flex items-center justify-between font-mono-fine text-[11px] text-[#89A799]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E55353]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5B553]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#53E58D]/80"></span>
                </div>

                <div className="px-4 py-0.5 rounded-full bg-[#050B08] text-[#7CF2C2] text-[10px] font-mono-metric flex items-center gap-1.5 truncate">
                  <span className="text-[#5E6F66]">https://</span>
                  <span>app.finixbooks.in/{currentScreen.id}</span>
                </div>

                <button
                  onClick={() => setLightboxOpen(true)}
                  className="p-1 hover:text-[#7CF2C2] transition-colors cursor-pointer flex items-center gap-1 text-[10px]"
                  title="Full View"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Zoom</span>
                </button>
              </div>

              {/* Screenshot Frame (Exact 1600x701) */}
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative w-full aspect-[1600/701] bg-[#050B08] overflow-hidden cursor-zoom-in group"
              >
                <img
                  src={currentScreen.src}
                  alt={currentScreen.title}
                  className="w-full h-full object-contain object-top transition-transform duration-300 group-hover:scale-[1.008]"
                />
                <div className="absolute inset-0 bg-[#0B1612]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="px-3 py-1.5 rounded-full bg-[#0B1612]/90 text-[#7CF2C2] text-xs font-mono-fine flex items-center gap-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Size</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Title, Tag & Controls */}
            <div className="flex items-center justify-between font-mono-fine text-xs pt-1">
              <div className="flex items-center gap-3">
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#1E3329] text-[#7CF2C2] font-mono-metric">
                  {currentScreen.tag}
                </span>
                <h3 className="font-serif-display text-lg sm:text-xl text-[#1E3329] font-normal tracking-tight">
                  {currentScreen.title}
                </h3>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] transition-colors cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[#5E6F66] font-mono-metric text-[11px] px-1">
                  <strong className="text-[#1E3329]">{String(selectedIndex + 1).padStart(2, '0')}</strong> / {String(currentList.length).padStart(2, '0')}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] transition-colors cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Curated Thumbnails (Minimal Strip) */}
            <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 hairline-t no-scrollbar">
              {currentList.map((screen, idx) => {
                const isSelected = selectedIndex === idx
                return (
                  <button
                    key={screen.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative shrink-0 w-20 sm:w-24 aspect-[1600/701] rounded-xs overflow-hidden transition-all cursor-pointer ${
                      isSelected
                        ? 'ring-2 ring-[#1E3329] shadow-sm scale-105'
                        : 'opacity-50 hover:opacity-100 hairline-border'
                    }`}
                    title={screen.title}
                  >
                    <img
                      src={screen.src}
                      alt={screen.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        ) : (
          /* SMARTPHONE CHASSIS (720:1600 aspect ratio) */
          <div className="flex flex-col items-center space-y-4">
            {/* Phone Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[720/1600] bg-[#0E1713] rounded-[40px] p-2.5 shadow-2xl hairline-border ring-1 ring-white/10 group">
              <div className="relative w-full h-full bg-black rounded-[32px] overflow-hidden border border-[#1E3329]/40">
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="relative w-full h-full cursor-zoom-in"
                  title="Click to zoom"
                >
                  <img
                    src={currentScreen.src}
                    alt={currentScreen.title}
                    className="w-full h-full object-contain object-top"
                  />
                  <div className="absolute inset-0 bg-[#0B1612]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="px-2.5 py-1 rounded-full bg-[#0B1612]/90 text-[#7CF2C2] text-[11px] font-mono-fine flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Zoom</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Title, Tag & Controls */}
            <div className="w-full max-w-md flex items-center justify-between font-mono-fine text-xs pt-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#1E3329] text-[#7CF2C2] font-mono-metric">
                  {currentScreen.tag}
                </span>
                <h3 className="font-serif-display text-base sm:text-lg text-[#1E3329] font-normal tracking-tight">
                  {currentScreen.title}
                </h3>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] transition-colors cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[#5E6F66] font-mono-metric text-[11px] px-1">
                  <strong className="text-[#1E3329]">{String(selectedIndex + 1).padStart(2, '0')}</strong> / {String(currentList.length).padStart(2, '0')}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] transition-colors cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Curated Phone Thumbnails */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
              {currentList.map((screen, idx) => {
                const isSelected = selectedIndex === idx
                return (
                  <button
                    key={screen.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative shrink-0 w-11 sm:w-12 aspect-[720/1600] rounded-xs overflow-hidden transition-all cursor-pointer ${
                      isSelected
                        ? 'ring-2 ring-[#1E3329] shadow-sm scale-105'
                        : 'opacity-50 hover:opacity-100 hairline-border'
                    }`}
                    title={screen.title}
                  >
                    <img
                      src={screen.src}
                      alt={screen.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Clean Fullscreen Zoom Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-[#0B1612]/92 backdrop-blur-sm font-mono-fine text-xs">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className={`w-full flex flex-col items-center ${
            platform === 'web' ? 'max-w-5xl' : 'max-w-md'
          }`}>
            <div className={`w-full bg-black overflow-hidden p-1 shadow-2xl border border-white/20 ${
              platform === 'web' ? 'aspect-[1600/701] rounded-xs' : 'max-w-[320px] aspect-[720/1600] rounded-[36px]'
            }`}>
              <img
                src={currentList[selectedIndex].src}
                alt={currentList[selectedIndex].title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center mt-3 text-white">
              <span className="text-sm font-medium">{currentList[selectedIndex].title}</span>
              <span className="text-[11px] text-[#7CF2C2] ml-2">({currentList[selectedIndex].tag})</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
