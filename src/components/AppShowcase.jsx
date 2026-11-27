import React, { useState, useEffect, useCallback } from 'react'
import {
  Monitor,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Grid,
} from 'lucide-react'

// 16 Mobile Screenshots
import mob01 from '../assets/screenshots/01-loading-workspace.jpeg'
import mob02 from '../assets/screenshots/02-tenant-selection.jpeg'
import mob03 from '../assets/screenshots/03-executive-dashboard.jpeg'
import mob04 from '../assets/screenshots/04-modules-navigation.jpeg'
import mob05 from '../assets/screenshots/05-receivables-payables.jpeg'
import mob06 from '../assets/screenshots/06-party-receivables-aging.jpeg'
import mob07 from '../assets/screenshots/07-digital-daybook.jpeg'
import mob08 from '../assets/screenshots/08-balance-sheet.jpeg'
import mob09 from '../assets/screenshots/09-trial-balance.jpeg'
import mob10 from '../assets/screenshots/10-ledger-statement.jpeg'
import mob11 from '../assets/screenshots/11-debit-note-voucher.jpeg'
import mob12 from '../assets/screenshots/12-sales-invoice-voucher.jpeg'
import mob13 from '../assets/screenshots/13-contra-bank-transfer.jpeg'
import mob14 from '../assets/screenshots/14-journal-adjustment.jpeg'
import mob15 from '../assets/screenshots/15-customer-master.jpeg'
import mob16 from '../assets/screenshots/16-expense-master.jpeg'

// 20 Web / Desktop Screenshots
import web01 from '../assets/web_screenshots/01-ai-insights.jpeg'
import web02 from '../assets/web_screenshots/02-receivables-aging.jpeg'
import web03 from '../assets/web_screenshots/03-payables-overview.jpeg'
import web04 from '../assets/web_screenshots/04-daybook-register.jpeg'
import web05 from '../assets/web_screenshots/05-sales-register.jpeg'
import web06 from '../assets/web_screenshots/06-purchase-register.jpeg'
import web07 from '../assets/web_screenshots/07-voucher-entry-ocr.jpeg'
import web08 from '../assets/web_screenshots/08-trial-balance.jpeg'
import web09 from '../assets/web_screenshots/09-profit-and-loss.jpeg'
import web10 from '../assets/web_screenshots/10-balance-sheet.jpeg'
import web11 from '../assets/web_screenshots/11-financial-ratios.jpeg'
import web12 from '../assets/web_screenshots/12-gst-summary.jpeg'
import web13 from '../assets/web_screenshots/13-banking-cash.jpeg'
import web14 from '../assets/web_screenshots/14-inventory-stock.jpeg'
import web15 from '../assets/web_screenshots/15-chart-of-accounts.jpeg'
import web16 from '../assets/web_screenshots/16-top-revenue-parties.jpeg'
import web17 from '../assets/web_screenshots/17-top-expense-parties.jpeg'
import web18 from '../assets/web_screenshots/18-sync-diagnostics.jpeg'
import web19 from '../assets/web_screenshots/19-rbac-users.jpeg'
import web20 from '../assets/web_screenshots/20-settings-backfill.jpeg'

const WEB_SCREENS = [
  {
    id: 'web-ai',
    number: '01',
    src: web01,
    title: 'AI Business Insights',
    topic: 'Overview & AI',
    tag: 'AI Assistant',
    desc: 'Natural language queries to instantly extract revenues, expenses, and ledger anomalies.',
  },
  {
    id: 'web-trial-balance',
    number: '02',
    src: web08,
    title: 'Group Trial Balance',
    topic: 'Statements',
    tag: 'CA Audit',
    desc: 'Opening, period transactions Dr/Cr, and closing balances across all account groups.',
  },
  {
    id: 'web-balance-sheet',
    number: '03',
    src: web10,
    title: 'Statutory Balance Sheet',
    topic: 'Statements',
    tag: 'Net Worth',
    desc: 'CA-grade capital, liabilities, fixed assets, and working capital schedules.',
  },
  {
    id: 'web-pl',
    number: '04',
    src: web09,
    title: 'Profit & Loss Statement',
    topic: 'Statements',
    tag: 'Performance',
    desc: 'Dynamic income statement detailing revenue, direct/indirect expenses, and net profit.',
  },
  {
    id: 'web-receivables',
    number: '05',
    src: web02,
    title: 'Receivables & Debtors Aging',
    topic: 'Receivables',
    tag: 'Cash Flow',
    desc: 'Sundry debtors aging analysis with overdue buckets and direct customer payment reminders.',
  },
  {
    id: 'web-payables',
    number: '06',
    src: web03,
    title: 'Payables & Creditors Overview',
    topic: 'Receivables',
    tag: 'Outflows',
    desc: 'Sundry creditors schedule and pending vendor bill tracking to optimize working capital.',
  },
  {
    id: 'web-voucher-ocr',
    number: '07',
    src: web07,
    title: 'Voucher Entry & Bill OCR',
    topic: 'Vouchers',
    tag: 'Fast Booking',
    desc: 'Post Sales, Purchase, Receipt, Payment, Contra, and Journal entries, or scan bills via OCR.',
  },
  {
    id: 'web-daybook',
    number: '08',
    src: web04,
    title: 'Digital Day Book',
    topic: 'Vouchers',
    tag: 'Chronological',
    desc: 'Complete daily chronological register of all posted ERP transactions and Tally vouchers.',
  },
  {
    id: 'web-sales',
    number: '09',
    src: web05,
    title: 'Sales Register',
    topic: 'Vouchers',
    tag: 'Revenue',
    desc: 'Monthly sales breakdown with instant drilldown into individual tax invoices.',
  },
  {
    id: 'web-purchase',
    number: '10',
    src: web06,
    title: 'Purchase Register',
    topic: 'Vouchers',
    tag: 'Procurement',
    desc: 'Monthly inward purchase summary with supplier invoice cross-checking.',
  },
  {
    id: 'web-gst',
    number: '11',
    src: web12,
    title: 'GST Tax Summary & ITC',
    topic: 'Statements',
    tag: 'Compliance',
    desc: 'Output GST, eligible Input Tax Credit (ITC), and net payable tax liability for reconciliation.',
  },
  {
    id: 'web-ratios',
    number: '12',
    src: web11,
    title: 'Financial Position & Ratios',
    topic: 'Overview & AI',
    tag: 'KPIs',
    desc: 'Automated calculation of liquidity, working capital, solvency, and profitability ratios.',
  },
  {
    id: 'web-banking',
    number: '13',
    src: web13,
    title: 'Banking & Cash Liquidity',
    topic: 'Banking & Stock',
    tag: 'Treasury',
    desc: 'Real-time aggregated liquid balances across cash-in-hand and corporate bank accounts.',
  },
  {
    id: 'web-inventory',
    number: '14',
    src: web14,
    title: 'Inventory & Stock Valuation',
    topic: 'Banking & Stock',
    tag: 'Stock',
    desc: 'Closing stock quantities, godown valuation, and inventory holding value updated live.',
  },
  {
    id: 'web-accounts',
    number: '15',
    src: web15,
    title: 'Chart of Accounts & Masters',
    topic: 'Masters & Audit',
    tag: 'Directory',
    desc: 'Manage ledgers, account groups, godowns, and cost centers synchronized to Tally Prime.',
  },
  {
    id: 'web-rev-parties',
    number: '16',
    src: web16,
    title: 'Top Revenue Parties',
    topic: 'Masters & Audit',
    tag: 'Rankings',
    desc: 'Ranked client turnover volume identifying highest-margin accounts and contribution.',
  },
  {
    id: 'web-exp-parties',
    number: '17',
    src: web17,
    title: 'Top Expense Parties',
    topic: 'Masters & Audit',
    tag: 'Vendor Spend',
    desc: 'Party-wise supplier outflow rankings to monitor vendor concentration and costs.',
  },
  {
    id: 'web-sync',
    number: '18',
    src: web18,
    title: 'Sync Diagnostics & AlterID',
    topic: 'Masters & Audit',
    tag: 'Diagnostics',
    desc: 'Tally bridge connection checkpoints, AlterID watermark log, and audit discrepancy monitor.',
  },
  {
    id: 'web-rbac',
    number: '19',
    src: web19,
    title: 'Roles & Access Control (RBAC)',
    topic: 'Masters & Audit',
    tag: 'Security',
    desc: 'Team member administration with route-level permissions for Admins, Accountants, and Auditors.',
  },
  {
    id: 'web-settings',
    number: '20',
    src: web20,
    title: 'Settings & Data Migration',
    topic: 'Overview & AI',
    tag: 'Backfill',
    desc: 'Active workspace configuration and historical Tally voucher backfilling pipeline.',
  },
]

const MOB_SCREENS = [
  {
    id: 'mob-dashboard',
    number: '01',
    src: mob03,
    title: 'KPI Dashboard',
    topic: 'Dashboard',
    tag: 'Trends',
    desc: 'Live revenue, expense curves, and liquid cash balances with period filters.',
  },
  {
    id: 'mob-modules',
    number: '02',
    src: mob04,
    title: 'Modules Hub',
    topic: 'Dashboard',
    tag: 'Navigation',
    desc: 'Fast one-tap access across vouchers, party ledgers, and audit reports.',
  },
  {
    id: 'mob-sales',
    number: '03',
    src: mob12,
    title: 'Sales Invoice',
    topic: 'Vouchers',
    tag: 'Field Entry',
    desc: 'Create GST sales invoices in the field with instant PDF sharing and Tally injection.',
  },
  {
    id: 'mob-debit-note',
    number: '04',
    src: mob11,
    title: 'Debit Note',
    topic: 'Vouchers',
    tag: 'Purchase Return',
    desc: 'Record purchase returns and supplier adjustments with bill-by-bill references.',
  },
  {
    id: 'mob-contra',
    number: '05',
    src: mob13,
    title: 'Contra & Bank Transfer',
    topic: 'Vouchers',
    tag: 'Banking',
    desc: 'Post inter-bank transfers and cash deposits with real-time balance checks.',
  },
  {
    id: 'mob-journal',
    number: '06',
    src: mob14,
    title: 'Journal Adjustment',
    topic: 'Vouchers',
    tag: 'Double Entry',
    desc: 'Book multi-line double-entry adjustments with automated debit-credit balance.',
  },
  {
    id: 'mob-receivables',
    number: '07',
    src: mob05,
    title: 'Receivables & Payables',
    topic: 'Receivables',
    tag: 'Cash Flow',
    desc: 'Holistic debtor totals ranked against upcoming vendor liabilities.',
  },
  {
    id: 'mob-aging',
    number: '08',
    src: mob06,
    title: 'Aging Analysis (0-90+ Days)',
    topic: 'Receivables',
    tag: 'Recovery',
    desc: 'Debtor aging buckets with 1-tap WhatsApp payment reminders and PDF statements.',
  },
  {
    id: 'mob-balance-sheet',
    number: '09',
    src: mob08,
    title: 'Balance Sheet',
    topic: 'Reports',
    tag: 'Statutory',
    desc: 'CA-grade capital, liabilities, and working capital schedules on demand.',
  },
  {
    id: 'mob-trial-balance',
    number: '10',
    src: mob09,
    title: 'Trial Balance',
    topic: 'Reports',
    tag: 'Audit',
    desc: 'Drilldown verification of debit and credit equality across all accounting groups.',
  },
  {
    id: 'mob-daybook',
    number: '11',
    src: mob07,
    title: 'Digital Day Book',
    topic: 'Reports',
    tag: 'Journal',
    desc: 'Chronological transaction feed filterable by voucher type, party, or date.',
  },
  {
    id: 'mob-statement',
    number: '12',
    src: mob10,
    title: 'Ledger Statement',
    topic: 'Reports',
    tag: 'Itemized',
    desc: 'Detailed transaction history for any party account with running balances.',
  },
  {
    id: 'mob-customer',
    number: '13',
    src: mob15,
    title: 'Customer Master',
    topic: 'Masters',
    tag: 'Debtor Setup',
    desc: 'Add new client ledgers with 15-digit GSTIN lookup and credit limits.',
  },
  {
    id: 'mob-expense',
    number: '14',
    src: mob16,
    title: 'Expense Master',
    topic: 'Masters',
    tag: 'Ledger Setup',
    desc: 'Create indirect expense accounts mapped directly to Tally parent groups.',
  },
  {
    id: 'mob-tenant',
    number: '15',
    src: mob02,
    title: 'Company Switcher',
    topic: 'Setup',
    tag: 'Multi-Tenant',
    desc: 'Switch effortlessly between multiple branches, subsidiaries, or CA client firms.',
  },
  {
    id: 'mob-loader',
    number: '16',
    src: mob01,
    title: 'Workspace Initializer',
    topic: 'Setup',
    tag: 'Sync Handshake',
    desc: 'Boot sequence establishing real-time Port 9000 replication with TallyPrime.',
  },
]

const WEB_TOPICS = ['All', 'Statements', 'Vouchers', 'Receivables', 'Overview & AI', 'Banking & Stock', 'Masters & Audit']
const MOB_TOPICS = ['All', 'Dashboard', 'Vouchers', 'Receivables', 'Reports', 'Masters', 'Setup']

export default function AppShowcase() {
  const [platform, setPlatform] = useState('web') // 'web' | 'mobile'
  const [activeTopic, setActiveTopic] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [viewMode, setViewMode] = useState('device') // 'device' | 'grid'
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Current dataset based on platform
  const currentDataset = platform === 'web' ? WEB_SCREENS : MOB_SCREENS
  const currentTopics = platform === 'web' ? WEB_TOPICS : MOB_TOPICS

  // Filtered screens based on active topic
  const filteredScreens = activeTopic === 'All'
    ? currentDataset
    : currentDataset.filter((s) => s.topic === activeTopic)

  // Current screen
  const currentScreen = currentDataset[selectedIndex] || currentDataset[0]

  // Reset indices when switching platform
  const handlePlatformChange = (newPlatform) => {
    setPlatform(newPlatform)
    setActiveTopic('All')
    setSelectedIndex(0)
  }

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % currentDataset.length)
  }, [currentDataset.length])

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + currentDataset.length) % currentDataset.length)
  }, [currentDataset.length])

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % currentDataset.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + currentDataset.length) % currentDataset.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, currentDataset.length])

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="app-showcase">
      {/* Header with Platform Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"></span>
            OUR PRODUCT
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
            FinixBooks in Action.
          </h2>
          <p className="font-mono-fine text-xs text-[#5E6F66] mt-1.5">
            {platform === 'web'
              ? '20 high-res desktop views — registers, balance sheets, GST summary & OCR entry.'
              : '16 Flutter mobile views — field vouchers, WhatsApp debtor reminders & Tally sync.'}
          </p>
        </div>

        {/* Dual Switcher: Platform (Web / Mobile) & View (Device / Grid) */}
        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {/* Platform Switcher */}
          <div className="bg-[#D6E2D8] p-1 rounded-full hairline-border flex items-center gap-1 text-[11px] font-mono-fine">
            <button
              onClick={() => handlePlatformChange('web')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                platform === 'web'
                  ? 'bg-[#1E3329] text-[#7CF2C2] font-medium'
                  : 'text-[#5E6F66] hover:text-[#1E3329]'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Web Portal ({WEB_SCREENS.length})</span>
            </button>
            <button
              onClick={() => handlePlatformChange('mobile')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                platform === 'mobile'
                  ? 'bg-[#1E3329] text-[#7CF2C2] font-medium'
                  : 'text-[#5E6F66] hover:text-[#1E3329]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile App ({MOB_SCREENS.length})</span>
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="bg-[#D6E2D8] p-1 rounded-full hairline-border flex items-center gap-1 text-[11px] font-mono-fine">
            <button
              onClick={() => setViewMode('device')}
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === 'device' ? 'bg-[#1E3329] text-[#7CF2C2]' : 'text-[#5E6F66] hover:text-[#1E3329]'
              }`}
              title="Device View"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#1E3329] text-[#7CF2C2]' : 'text-[#5E6F66] hover:text-[#1E3329]'
              }`}
              title="Grid View"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Clean Topic Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 font-mono-fine text-xs no-scrollbar">
        {currentTopics.map((topic) => {
          const isActive = activeTopic === topic
          const count = topic === 'All' ? currentDataset.length : currentDataset.filter((s) => s.topic === topic).length
          return (
            <button
              key={topic}
              onClick={() => {
                setActiveTopic(topic)
                if (topic !== 'All') {
                  const firstMatch = currentDataset.findIndex((s) => s.topic === topic)
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

      {/* VIEW 1: DEVICE VIEW (Browser Mockup for Web, Phone Mockup for Mobile) */}
      {viewMode === 'device' && (
        <div className="bg-[#D6E2D8] hairline-border rounded-xs p-6 sm:p-8">
          {platform === 'web' ? (
            /* DESKTOP BROWSER CHASSIS */
            <div className="space-y-6">
              {/* Browser Window Frame */}
              <div className="bg-[#0E1713] rounded-xs overflow-hidden shadow-2xl hairline-border ring-1 ring-white/10 group">
                {/* Browser Top Bar */}
                <div className="px-4 py-2.5 bg-[#12231C] hairline-b flex items-center justify-between font-mono-fine text-[11px] text-[#89A799]">
                  {/* Window Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E55353]/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5B553]/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#53E58D]/70"></span>
                  </div>

                  {/* Browser URL Pill */}
                  <div className="px-4 py-0.5 rounded-full bg-[#050B08] text-[#7CF2C2] text-[10px] font-mono-metric flex items-center gap-2 max-w-sm w-full justify-center truncate">
                    <span className="text-[#5E6F66]">https://</span>
                    <span>app.finixbooks.in/{currentScreen.id}</span>
                  </div>

                  {/* Controls */}
                  <button
                    onClick={() => openLightbox(selectedIndex)}
                    className="p-1 hover:text-[#7CF2C2] transition-colors cursor-pointer flex items-center gap-1 text-[10px]"
                    title="Zoom Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Zoom</span>
                  </button>
                </div>

                {/* Screenshot in 1600x701 Aspect Ratio */}
                <div
                  onClick={() => openLightbox(selectedIndex)}
                  className="relative aspect-[16/7] bg-[#050B08] overflow-hidden cursor-zoom-in group"
                >
                  <img
                    src={currentScreen.src}
                    alt={currentScreen.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  
                  {/* Subtle hover zoom pill */}
                  <div className="absolute inset-0 bg-[#0B1612]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="px-3 py-1.5 rounded-full bg-[#0B1612]/90 text-[#7CF2C2] text-xs font-mono-fine flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect 100% Full Resolution</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption & Controls Strip below Browser */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-fine text-xs pt-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#5E6F66]">
                      {currentScreen.topic}
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-[#1E3329] text-[#7CF2C2] font-mono-metric">
                      {currentScreen.tag}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl sm:text-2xl text-[#1E3329] font-normal tracking-tight">
                    {currentScreen.title}
                  </h3>
                  <p className="text-xs text-[#5E6F66] mt-1 max-w-2xl">
                    {currentScreen.desc}
                  </p>
                </div>

                {/* Prev / Next controls */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] transition-colors cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[#5E6F66] font-mono-metric text-[11px]">
                    <strong className="text-[#1E3329]">{String(selectedIndex + 1).padStart(2, '0')}</strong> / {String(currentDataset.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] transition-colors cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Clean Thumbnail Strip for Web */}
              <div className="pt-3 hairline-t">
                <div className="text-[10px] uppercase text-[#5E6F66] tracking-wider mb-2 font-mono-fine">
                  DESKTOP SCREENS ({currentDataset.length}):
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {currentDataset.map((screen, idx) => {
                    const isSelected = selectedIndex === idx
                    return (
                      <button
                        key={screen.id}
                        onClick={() => setSelectedIndex(idx)}
                        className={`relative shrink-0 w-24 aspect-[16/7] rounded-xs overflow-hidden transition-all cursor-pointer ${
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
          ) : (
            /* SMARTPHONE CHASSIS FOR MOBILE */
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[270px] aspect-[9/19] bg-[#0E1713] rounded-[36px] p-2.5 shadow-xl hairline-border ring-1 ring-white/10 group">
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
                      <div className="absolute inset-0 bg-[#0B1612]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="px-2.5 py-1 rounded-full bg-[#0B1612]/90 text-[#7CF2C2] text-[11px] font-mono-fine flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Zoom</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-5 font-mono-fine text-xs">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] transition-colors cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[#5E6F66] font-mono-metric text-[11px]">
                    <strong className="text-[#1E3329]">{String(selectedIndex + 1).padStart(2, '0')}</strong> / {String(currentDataset.length).padStart(2, '0')}
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

                <div className="pt-4 hairline-t">
                  <div className="text-[10px] uppercase text-[#5E6F66] tracking-wider mb-2">
                    MOBILE SCREENS ({currentDataset.length}):
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {currentDataset.map((screen, idx) => {
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
          )}
        </div>
      )}

      {/* VIEW 2: Clean Gallery Grid */}
      {viewMode === 'grid' && (
        <div className={`grid gap-4 font-mono-fine ${
          platform === 'web'
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
            : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
        }`}>
          {filteredScreens.map((screen) => {
            const originalIndex = currentDataset.findIndex((s) => s.id === screen.id)
            return (
              <div
                key={screen.id}
                onClick={() => openLightbox(originalIndex)}
                className="bg-[#D6E2D8] hairline-border rounded-xs p-2.5 hover:bg-[#DCE7DE] transition-colors cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className={`relative bg-black rounded-xs overflow-hidden mb-2 ${
                    platform === 'web' ? 'aspect-[16/7]' : 'aspect-[9/18]'
                  }`}>
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
            onClick={() => setLightboxIndex((prev) => (prev - 1 + currentDataset.length) % currentDataset.length)}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % currentDataset.length)}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Centered Image with Clean Minimal Caption */}
          <div className={`w-full flex flex-col items-center ${
            platform === 'web' ? 'max-w-4xl' : 'max-w-md'
          }`}>
            <div className={`w-full bg-black rounded-xs overflow-hidden p-1 shadow-2xl border border-white/20 ${
              platform === 'web' ? 'aspect-[16/7]' : 'max-w-[300px] aspect-[9/19] rounded-[32px]'
            }`}>
              <img
                src={currentDataset[lightboxIndex].src}
                alt={currentDataset[lightboxIndex].title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center mt-3 text-white max-w-lg">
              <div className="text-sm font-medium">
                {currentDataset[lightboxIndex].title}
              </div>
              <div className="text-[11px] text-[#89A799] mt-0.5">
                {currentDataset[lightboxIndex].desc}
              </div>
              <div className="text-[10px] text-[#5E6F66] mt-1 font-mono-metric">
                {lightboxIndex + 1} of {currentDataset.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
