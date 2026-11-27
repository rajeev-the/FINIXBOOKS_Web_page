import React, { useState, useEffect, useCallback } from 'react'
import {
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Grid,
} from 'lucide-react'

// 16 real screenshots
import screen01 from '../assets/screenshots/01-loading-workspace.jpeg'
import screen02 from '../assets/screenshots/02-tenant-selection.jpeg'
import screen03 from '../assets/screenshots/03-executive-dashboard.jpeg'
import screen04 from '../assets/screenshots/04-modules-navigation.jpeg'
import screen05 from '../assets/screenshots/05-receivables-payables.jpeg'
import screen06 from '../assets/screenshots/06-party-receivables-aging.jpeg'
import screen07 from '../assets/screenshots/07-digital-daybook.jpeg'
import screen08 from '../assets/screenshots/08-balance-sheet.jpeg'
import screen09 from '../assets/screenshots/09-trial-balance.jpeg'
import screen10 from '../assets/screenshots/10-ledger-statement.jpeg'
import screen11 from '../assets/screenshots/11-debit-note-voucher.jpeg'
import screen12 from '../assets/screenshots/12-sales-invoice-voucher.jpeg'
import screen13 from '../assets/screenshots/13-contra-bank-transfer.jpeg'
import screen14 from '../assets/screenshots/14-journal-adjustment.jpeg'
import screen15 from '../assets/screenshots/15-customer-master.jpeg'
import screen16 from '../assets/screenshots/16-expense-master.jpeg'

const SCREENS = [
  {
    id: 'dashboard-kpis',
    number: '01',
    src: screen03,
    title: 'KPI Dashboard',
    topic: 'Dashboard',
    tag: 'Live Trends',
    desc: 'Live revenue, expense curves, and liquid cash balances with period filters.',
  },
  {
    id: 'modules-nav',
    number: '02',
    src: screen04,
    title: 'Modules Hub',
    topic: 'Dashboard',
    tag: 'Navigation',
    desc: 'Fast one-tap access across vouchers, party ledgers, and audit reports.',
  },
  {
    id: 'sales-invoice',
    number: '03',
    src: screen12,
    title: 'Sales Invoice',
    topic: 'Vouchers',
    tag: 'Field Invoicing',
    desc: 'Create GST sales invoices in the field with instant PDF sharing and Tally injection.',
  },
  {
    id: 'debit-note',
    number: '04',
    src: screen11,
    title: 'Debit Note',
    topic: 'Vouchers',
    tag: 'Purchase Return',
    desc: 'Record purchase returns and supplier adjustments with bill-by-bill references.',
  },
  {
    id: 'contra-transfer',
    number: '05',
    src: screen13,
    title: 'Contra & Bank Transfer',
    topic: 'Vouchers',
    tag: 'Banking',
    desc: 'Post inter-bank transfers and cash deposits with real-time balance checks.',
  },
  {
    id: 'journal-entry',
    number: '06',
    src: screen14,
    title: 'Journal Adjustment',
    topic: 'Vouchers',
    tag: 'Double Entry',
    desc: 'Book multi-line double-entry adjustments with automated debit-credit balance.',
  },
  {
    id: 'receivables-payables',
    number: '07',
    src: screen05,
    title: 'Receivables & Payables',
    topic: 'Receivables',
    tag: 'Cash Flow',
    desc: 'Holistic debtor totals ranked against upcoming vendor liabilities.',
  },
  {
    id: 'party-aging',
    number: '08',
    src: screen06,
    title: 'Aging Analysis (0-90+ Days)',
    topic: 'Receivables',
    tag: 'Recovery',
    desc: 'Debtor aging buckets with 1-tap WhatsApp payment reminders and PDF statements.',
  },
  {
    id: 'balance-sheet',
    number: '09',
    src: screen08,
    title: 'Balance Sheet',
    topic: 'Reports',
    tag: 'Statutory',
    desc: 'CA-grade capital, liabilities, and working capital schedules on demand.',
  },
  {
    id: 'trial-balance',
    number: '10',
    src: screen09,
    title: 'Trial Balance',
    topic: 'Reports',
    tag: 'Audit',
    desc: 'Drilldown verification of debit and credit equality across all accounting groups.',
  },
  {
    id: 'digital-daybook',
    number: '11',
    src: screen07,
    title: 'Digital Day Book',
    topic: 'Reports',
    tag: 'Journal',
    desc: 'Chronological transaction feed filterable by voucher type, party, or date.',
  },
  {
    id: 'ledger-statement',
    number: '12',
    src: screen10,
    title: 'Ledger Statement',
    topic: 'Reports',
    tag: 'Itemized',
    desc: 'Detailed transaction history for any party account with running balances.',
  },
  {
    id: 'customer-master',
    number: '13',
    src: screen15,
    title: 'Customer Master',
    topic: 'Masters',
    tag: 'Debtor Setup',
    desc: 'Add new client ledgers with 15-digit GSTIN lookup and credit limits.',
  },
  {
    id: 'expense-master',
    number: '14',
    src: screen16,
    title: 'Expense Master',
    topic: 'Masters',
    tag: 'Ledger Setup',
    desc: 'Create indirect expense accounts mapped directly to Tally parent groups.',
  },
  {
    id: 'tenant-switcher',
    number: '15',
    src: screen02,
    title: 'Company Switcher',
    topic: 'Setup',
    tag: 'Multi-Tenant',
    desc: 'Switch effortlessly between multiple branches, subsidiaries, or CA client firms.',
  },
  {
    id: 'workspace-loader',
    number: '16',
    src: screen01,
    title: 'Workspace Initializer',
    topic: 'Setup',
    tag: 'Sync Handshake',
    desc: 'Boot sequence establishing real-time Port 9000 replication with TallyPrime.',
  },
]

const TOPICS = [
  'All',
  'Dashboard',
  'Vouchers',
  'Receivables',
  'Reports',
  'Masters',
  'Setup',
]

export default function AppShowcase() {
  const [activeTopic, setActiveTopic] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [viewMode, setViewMode] = useState('device') // 'device' | 'grid'
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Filtered screens based on active topic
  const filteredScreens = activeTopic === 'All'
    ? SCREENS
    : SCREENS.filter((s) => s.topic === activeTopic)

  // Current screen
  const currentScreen = SCREENS[selectedIndex] || SCREENS[0]

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % SCREENS.length)
  }, [])

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + SCREENS.length) % SCREENS.length)
  }, [])

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % SCREENS.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + SCREENS.length) % SCREENS.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen])

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="app-showcase">
      {/* Minimal Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"></span>
            OUR PRODUCT
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
            FinixBooks in Action.
          </h2>
          <p className="font-mono-fine text-xs text-[#5E6F66] mt-1.5">
            16 real application screens — on-the-go voucher booking, debtor aging, and instant Tally sync.
          </p>
        </div>

        {/* View Toggle */}
        <div className="bg-[#D6E2D8] p-1 rounded-full hairline-border flex items-center gap-1 text-[11px] font-mono-fine self-start sm:self-auto">
          <button
            onClick={() => setViewMode('device')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'device'
                ? 'bg-[#1E3329] text-[#7CF2C2]'
                : 'text-[#5E6F66] hover:text-[#1E3329]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Device</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'grid'
                ? 'bg-[#1E3329] text-[#7CF2C2]'
                : 'text-[#5E6F66] hover:text-[#1E3329]'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Grid ({SCREENS.length})</span>
          </button>
        </div>
      </div>

      {/* Clean Topic Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 font-mono-fine text-xs no-scrollbar">
        {TOPICS.map((topic) => {
          const isActive = activeTopic === topic
          const count = topic === 'All' ? SCREENS.length : SCREENS.filter((s) => s.topic === topic).length
          return (
            <button
              key={topic}
              onClick={() => {
                setActiveTopic(topic)
                if (topic !== 'All') {
                  const firstMatch = SCREENS.findIndex((s) => s.topic === topic)
                  if (firstMatch !== -1) setSelectedIndex(firstMatch)
                }
              }}
              className={`px-3 py-1 rounded-full shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#1E3329] text-[#7CF2C2] font-medium'
                  : 'bg-[#D6E2D8] text-[#5E6F66] hover:text-[#1E3329]'
              }`}
            >
              <span>{topic}</span>
              <span className={`text-[10px] px-1.5 rounded-full ${
                isActive ? 'bg-[#2B4B3D] text-[#7CF2C2]' : 'bg-[#E4EAE4] text-[#5E6F66]'
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* VIEW 1: Clean Phone Frame Showcase */}
      {viewMode === 'device' && (
        <div className="bg-[#D6E2D8] hairline-border rounded-xs p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Phone Display Column */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[270px] aspect-[9/19] bg-[#0E1713] rounded-[36px] p-2.5 shadow-xl hairline-border ring-1 ring-white/10 group">
                
                {/* Screen Container */}
                <div className="relative w-full h-full bg-black rounded-[28px] overflow-hidden border border-[#1E3329]/40">
                  <div
                    onClick={() => openLightbox(selectedIndex)}
                    className="relative w-full h-full cursor-zoom-in"
                    title="Click to view full screen"
                  >
                    <img
                      src={currentScreen.src}
                      alt={currentScreen.title}
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Hover Zoom Hint */}
                    <div className="absolute inset-0 bg-[#0B1612]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-2.5 py-1 rounded-full bg-[#0B1612]/90 text-[#7CF2C2] text-[11px] font-mono-fine flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Zoom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-4 mt-5 font-mono-fine text-xs">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] transition-colors cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[#5E6F66] font-mono-metric text-[11px]">
                  <strong className="text-[#1E3329]">{String(selectedIndex + 1).padStart(2, '0')}</strong> / {String(SCREENS.length).padStart(2, '0')}
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

            {/* Context & Thumbnails Column */}
            <div className="md:col-span-7 flex flex-col justify-between font-mono-fine space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#5E6F66]">
                    {currentScreen.topic}
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-[#1E3329] text-[#7CF2C2] font-mono-metric">
                    {currentScreen.tag}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1E3329] font-normal tracking-tight">
                  {currentScreen.title}
                </h3>

                {/* Short 1-line context */}
                <p className="text-xs sm:text-sm text-[#5E6F66] mt-2 leading-relaxed max-w-lg">
                  {currentScreen.desc}
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => openLightbox(selectedIndex)}
                    className="text-[11px] text-[#1E3329] hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#5E6F66]" />
                    <span>View Full Size Image</span>
                  </button>
                </div>
              </div>

              {/* Clean Thumbnail Strip */}
              <div className="pt-4 hairline-t">
                <div className="text-[10px] uppercase text-[#5E6F66] tracking-wider mb-2">
                  SCREENS:
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {SCREENS.map((screen, idx) => {
                    const isSelected = selectedIndex === idx
                    return (
                      <button
                        key={screen.id}
                        onClick={() => setSelectedIndex(idx)}
                        className={`relative shrink-0 w-11 sm:w-12 aspect-[9/18] rounded-xs overflow-hidden transition-all cursor-pointer ${
                          isSelected
                            ? 'ring-2 ring-[#1E3329] shadow-sm'
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
            </div>

          </div>
        </div>
      )}

      {/* VIEW 2: Clean 16-Screen Gallery Grid */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-mono-fine">
          {filteredScreens.map((screen) => {
            const originalIndex = SCREENS.findIndex((s) => s.id === screen.id)
            return (
              <div
                key={screen.id}
                onClick={() => openLightbox(originalIndex)}
                className="bg-[#D6E2D8] hairline-border rounded-xs p-2.5 hover:bg-[#DCE7DE] transition-colors cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[9/18] bg-black rounded-xs overflow-hidden mb-2">
                    <img
                      src={screen.src}
                      alt={screen.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0B1612]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-[#7CF2C2]" />
                    </div>
                  </div>

                  <div className="text-xs font-medium text-[#1E3329] truncate">
                    {screen.title}
                  </div>
                  <div className="text-[10px] text-[#5E6F66] truncate mt-0.5">
                    {screen.desc}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Minimal Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-[#0B1612]/92 backdrop-blur-sm font-mono-fine text-xs">
          
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + SCREENS.length) % SCREENS.length)}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % SCREENS.length)}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Centered Image with Clean Minimal Caption */}
          <div className="max-w-md w-full flex flex-col items-center">
            <div className="w-full max-w-[300px] aspect-[9/19] bg-black rounded-[32px] overflow-hidden p-2 shadow-2xl border border-white/20">
              <img
                src={SCREENS[lightboxIndex].src}
                alt={SCREENS[lightboxIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center mt-3 text-white max-w-sm">
              <div className="text-sm font-medium">
                {SCREENS[lightboxIndex].title}
              </div>
              <div className="text-[11px] text-[#89A799] mt-0.5">
                {SCREENS[lightboxIndex].desc}
              </div>
              <div className="text-[10px] text-[#5E6F66] mt-1 font-mono-metric">
                {lightboxIndex + 1} of {SCREENS.length}
              </div>
            </div>
          </div>

        </div>
      )}
    </section>
  )
}
