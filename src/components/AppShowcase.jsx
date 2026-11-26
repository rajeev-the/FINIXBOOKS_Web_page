import React, { useState, useEffect, useCallback } from 'react'
import {
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  CheckCircle2,
  RefreshCw,
  Grid,
  ArrowUpRight,
} from 'lucide-react'

// Import all 16 high-resolution mobile screenshots
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
    id: 'workspace-loader',
    number: '01',
    src: screen01,
    title: 'Workspace Initializer & Tally Bridge',
    category: 'Executive & Workspace',
    badge: 'PORT 9000 ONLINE',
    subtitle: 'High-speed boot sequence negotiating real-time bi-directional connection to local Tally runtime.',
    bullets: [
      'Probes local TDL XML HTTP Port 9000 handshake within 280ms',
      'Secures session with RSA-256 JWT & multi-tenant organization tokens',
      'Initializes delta synchronization queue tracking AlterID increments',
    ],
    tallySync: 'Localhost:9000 XML Socket Handshake Verified',
    hotspot: 'Loading workspace...',
  },
  {
    id: 'tenant-switcher',
    number: '02',
    src: screen02,
    title: 'Multi-Tenant & Company Switcher',
    category: 'Executive & Workspace',
    badge: 'MULTI-COMPANY',
    subtitle: 'Seamlessly jump between multiple corporate entities, branches, and CA client books.',
    bullets: [
      'Support for multiple Tally companies under a single authenticated mobile session',
      'Isolated ledger caches and tenant-scoped database partitions',
      'Fine-grained Role-Based Access Control (RBAC) per company',
    ],
    tallySync: 'Direct Tally Company GUID & License Mapping',
    hotspot: 'Choose an organization to continue',
  },
  {
    id: 'executive-kpis',
    number: '03',
    src: screen03,
    title: 'Executive KPI Dashboard & Trends',
    category: 'Executive & Workspace',
    badge: 'FINANCIAL PULSE',
    subtitle: 'High-density visual pulse of Gross Revenue, Expense curves, and Working Capital positions.',
    bullets: [
      'Interactive FlChart visualizers charting sales vs. expense trajectories',
      'Period-over-period toggles across Monthly, Quarterly, and Fiscal YTD',
      'Real-time cash and bank liquid float aggregation',
    ],
    tallySync: 'Sub-second Delta Bumps on Every Entry',
    hotspot: 'Revenue & Expense Trends',
  },
  {
    id: 'modules-hub',
    number: '04',
    src: screen04,
    title: 'Core Financial Modules Hub',
    category: 'Executive & Workspace',
    badge: 'MODULAR RUNTIME',
    subtitle: 'Central hub for Vouchers, Receivables, Statutory Books, and Inventory management.',
    bullets: [
      'Quick-launch navigation to all core financial modules',
      'Role-tailored interfaces for Directors, Sales Executives, and Accountants',
      'Persistent live sync status badge with offline queue counter',
    ],
    tallySync: 'Centralized Event-Driven Architecture',
    hotspot: 'Modules Overview',
  },
  {
    id: 'receivables-payables',
    number: '05',
    src: screen05,
    title: 'Receivables & Payables Overview',
    category: 'Receivables & Cash Flow',
    badge: 'DSO OPTIMIZER',
    subtitle: 'Holistic liquid cash flow tracking with automated debtor and creditor totals.',
    bullets: [
      'Net receivables balance versus upcoming vendor payment obligations',
      'Ranked list of highest-value overdue accounts for prioritized recovery',
      'Instant toggle between customer debtor lists and supplier payment schedules',
    ],
    tallySync: 'Real-Time Bill-by-Bill Allocation Sync',
    hotspot: 'Receivables & Payables',
  },
  {
    id: 'party-aging',
    number: '06',
    src: screen06,
    title: 'Party-Wise Receivables Aging',
    category: 'Receivables & Cash Flow',
    badge: '0–90+ DAYS AGING',
    subtitle: 'Debtor aging breakdown with bill-by-bill references and WhatsApp reminder triggers.',
    bullets: [
      'Automated aging buckets (0–30, 31–60, 61–90, and 90+ days)',
      '1-Tap WhatsApp & PDF payment reminders dispatched directly to clients',
      'Granular bill reference numbers, due dates, and pending sums',
    ],
    tallySync: 'Tally Outstanding Bill References',
    hotspot: 'Debtor Accounts & Aging',
  },
  {
    id: 'digital-daybook',
    number: '07',
    src: screen07,
    title: 'Digital Day Book Journal',
    category: 'Statutory Reports & Audit',
    badge: 'MCA AUDIT TRAIL',
    subtitle: 'Chronological double-entry transaction feed with multi-filter search and audit integrity.',
    bullets: [
      'Filter across Sales, Purchases, Receipts, Payments, Contra, and Journals',
      'Instant party name search with exact debit/credit amounts',
      'MCA-compliant tamper-proof AlterID audit logging for every entry',
    ],
    tallySync: 'Live Inward XML Spooling from Tally',
    hotspot: 'Day Book Feed',
  },
  {
    id: 'balance-sheet',
    number: '08',
    src: screen08,
    title: 'Statutory Balance Sheet',
    category: 'Statutory Reports & Audit',
    badge: 'CA-GRADE AUDIT',
    subtitle: 'Complete capital, liabilities, fixed assets, and working capital schedules on demand.',
    bullets: [
      'Drill down into Net Worth (Equity), Current Liabilities, and Working Capital',
      'Real-time reconciliation of Debit and Credit equality across accounts',
      'Exportable audit-grade PDF & Excel schedules',
    ],
    tallySync: 'Strict Adherence to Tally Grouping Hierarchy',
    hotspot: 'Net Worth & Equity',
  },
  {
    id: 'trial-balance',
    number: '09',
    src: screen09,
    title: 'Group Trial Balance Verification',
    category: 'Statutory Reports & Audit',
    badge: 'GROUP DRILL-DOWN',
    subtitle: 'Drillable multi-level accounting hierarchy verifying absolute debit/credit equilibrium.',
    bullets: [
      'Instant verification of Debit and Credit equality across all account groups',
      'Interactive drill-down from primary group to nested sub-ledgers',
      'Zero balance discrepancy indicator against desktop Tally books',
    ],
    tallySync: 'Deterministic Hash Equivalence to Local Tally',
    hotspot: 'Trial Balance Drilldown',
  },
  {
    id: 'ledger-statement',
    number: '10',
    src: screen10,
    title: 'Ledger Statement & Account History',
    category: 'Statutory Reports & Audit',
    badge: 'ITEMIZED AUDIT',
    subtitle: 'Itemized chronological party ledger detailing opening, vouchers, and closing balance.',
    bullets: [
      'Complete fiscal year voucher history for any customer, vendor, or bank',
      'Running cumulative balance column with explicit Dr/Cr indicators',
      'Instant 1-tap statement sharing via WhatsApp or Email before leaving meetings',
    ],
    tallySync: 'Full Voucher Master Cross-Referencing',
    hotspot: 'FY 2026-27 Statement',
  },
  {
    id: 'debit-note',
    number: '11',
    src: screen11,
    title: 'Issue Debit Note Voucher',
    category: 'Vouchers & Tally Sync',
    badge: 'INSTANT TALLY INJECTION',
    subtitle: 'On-the-go purchase return & debit note entry pushed straight to desktop TallyPrime.',
    bullets: [
      'Supplier selection with original bill reference and invoice tracking',
      'Automatic statutory GST reverse split (CGST, SGST, IGST)',
      'Spools securely into local SQLite when offline and syncs on connection',
    ],
    tallySync: 'XML <ENVELOPE> Injected Directly to Port 9000',
    hotspot: 'Issue Debit Note Entry',
  },
  {
    id: 'sales-invoice',
    number: '12',
    src: screen12,
    title: 'Field Sales Invoice Creation',
    category: 'Vouchers & Tally Sync',
    badge: 'ZERO DOUBLE-ENTRY',
    subtitle: 'Generate GST-compliant tax invoices in the field before leaving client premises.',
    bullets: [
      'Multi-item inventory picker with live godown stock visibility',
      'Automatic GST calculation with statutory HSN/SAC rate tables',
      'Instant branded PDF invoice generation & WhatsApp delivery',
    ],
    tallySync: 'Injected into Tally in Under 300 Milliseconds',
    hotspot: 'Create Sales Invoice',
  },
  {
    id: 'contra-transfer',
    number: '13',
    src: screen13,
    title: 'Internal Contra & Bank Transfer',
    category: 'Vouchers & Tally Sync',
    badge: 'LIQUID CASH FLOAT',
    subtitle: 'Book inter-bank transfers and cash-to-bank deposits with instant ledger reflection.',
    bullets: [
      'Transfer funds between Current, Savings, and Overdraft accounts',
      'Transaction reference tagging (Cheque, NEFT, RTGS, IMPS)',
      'Real-time available bank balance validation preventing overdraft limits',
    ],
    tallySync: 'Instant Dual-Ledger Double-Entry Sync',
    hotspot: 'Internal Contra Transfer',
  },
  {
    id: 'journal-adjustment',
    number: '14',
    src: screen14,
    title: 'Double-Entry Journal Adjustment',
    category: 'Vouchers & Tally Sync',
    badge: 'STRICT DOUBLE-ENTRY',
    subtitle: 'Book complex non-cash depreciation, accrued liabilities, and period-end adjustments.',
    bullets: [
      'Multi-line Debit and Credit allocations with real-time balance check',
      'Mandatory audit narration for statutory record keeping',
      'Decimal.js precision ensuring zero floating point rounding errors',
    ],
    tallySync: 'Enforces Pure Double-Entry Accounting Rule',
    hotspot: 'Journal Adjustment Entry',
  },
  {
    id: 'customer-master',
    number: '15',
    src: screen15,
    title: 'Customer Master & GSTIN Registration',
    category: 'Master Ledger Directory',
    badge: 'MASTER REGISTRATION',
    subtitle: 'Create new sundry debtor masters with GSTIN validation, credit limits, and billing terms.',
    bullets: [
      '15-digit GSTIN format validation with state jurisdiction lookup',
      'Configurable credit limits (₹) and payment term day enforcement',
      'Pushes master into Tally "Sundry Debtors" parent group without manual entry',
    ],
    tallySync: 'Master Record Queued & Synced to Tally Prime',
    hotspot: 'Create New Customer Master',
  },
  {
    id: 'expense-master',
    number: '16',
    src: screen16,
    title: 'Expense Ledger & Group Allocation',
    category: 'Master Ledger Directory',
    badge: 'CHART OF ACCOUNTS',
    subtitle: 'Configure indirect expense ledgers with statutory parent group assignments.',
    bullets: [
      'Assign to Indirect Expenses, Administrative Overhead, or Direct Costs',
      'Opening balance allocation with Dr/Cr polarity tracking',
      'Ready for immediate voucher posting across all field and office users',
    ],
    tallySync: 'Propagates to Tally Chart of Accounts',
    hotspot: 'Create New Expense Ledger',
  },
]

const CATEGORIES = [
  'All Views',
  'Executive & Workspace',
  'Receivables & Cash Flow',
  'Vouchers & Tally Sync',
  'Statutory Reports & Audit',
  'Master Ledger Directory',
]

export default function AppShowcase() {
  const [activeCategory, setActiveCategory] = useState('All Views')
  const [selectedIndex, setSelectedIndex] = useState(2) // Start on Executive Dashboard
  const [viewMode, setViewMode] = useState('device') // 'device' | 'grid'
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Filtered screens based on active category tab
  const filteredScreens = activeCategory === 'All Views'
    ? SCREENS
    : SCREENS.filter((s) => s.category === activeCategory)

  // Current selected screen object
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
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-pulse"></span>
            LIVE FLUTTER APPLICATION SCREENS
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
            Authentic Mobile UI Showcase.
          </h2>
          <p className="font-mono-fine text-xs sm:text-sm text-[#5E6F66] mt-2.5 leading-relaxed">
            Direct screenshots captured from the FinixBooks production mobile application. Experience the high-density financial interface engineered for rapid field voucher bookings and live Tally synchronization.
          </p>
        </div>

        {/* View Mode Toggle Button */}
        <div className="flex items-center gap-2 self-start lg:self-end">
          <div className="bg-[#D6E2D8] p-1 rounded-full hairline-border flex items-center gap-1 text-[11px] font-mono-fine">
            <button
              onClick={() => setViewMode('device')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'device'
                  ? 'bg-[#1E3329] text-[#7CF2C2] shadow-xs'
                  : 'text-[#5E6F66] hover:text-[#1E3329]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Interactive Device</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#1E3329] text-[#7CF2C2] shadow-xs'
                  : 'text-[#5E6F66] hover:text-[#1E3329]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All 16 Screens Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono-fine text-xs no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat
          const count = cat === 'All Views' ? SCREENS.length : SCREENS.filter((s) => s.category === cat).length
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                if (cat !== 'All Views') {
                  const firstMatch = SCREENS.findIndex((s) => s.category === cat)
                  if (firstMatch !== -1) setSelectedIndex(firstMatch)
                }
              }}
              className={`px-3.5 py-1.5 rounded-full shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#1E3329] text-[#7CF2C2] font-medium hairline-border shadow-xs'
                  : 'bg-[#D6E2D8] text-[#5E6F66] hover:text-[#1E3329] hairline-border'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono-metric ${
                isActive ? 'bg-[#2B4B3D] text-[#7CF2C2]' : 'bg-[#E4EAE4] text-[#5E6F66]'
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* VIEW 1: Interactive Smartphone Device Frame */}
      {viewMode === 'device' && (
        <div className="bg-[#D6E2D8] hairline-border rounded-xs p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Phone Mockup Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Realistic Titanium Smartphone Frame */}
              <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[9/19.5] bg-[#0E1713] rounded-[44px] p-3 shadow-2xl hairline-border ring-1 ring-white/10 group">
                
                {/* Physical Phone Buttons */}
                <div className="absolute -left-[3px] top-24 w-[3px] h-10 bg-[#253930] rounded-l-xs"></div>
                <div className="absolute -left-[3px] top-38 w-[3px] h-12 bg-[#253930] rounded-l-xs"></div>
                <div className="absolute -right-[3px] top-30 w-[3px] h-14 bg-[#253930] rounded-r-xs"></div>

                {/* Inner Screen Bezel */}
                <div className="relative w-full h-full bg-[#050B08] rounded-[36px] overflow-hidden flex flex-col justify-between border border-[#1E3329]/40">
                  
                  {/* Status Bar / Dynamic Island Area */}
                  <div className="absolute top-0 left-0 right-0 z-20 pt-2.5 px-5 flex items-center justify-between text-[10px] text-white/90 font-mono-metric select-none pointer-events-none">
                    <span className="font-semibold tracking-tight">1:51</span>
                    {/* Punch-hole Camera Notch */}
                    <div className="w-20 h-4.5 bg-black rounded-full flex items-center justify-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#12231C]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7CF2C2]/40"></div>
                    </div>
                    <div className="flex items-center gap-1 text-[9px]">
                      <span>5G</span>
                      <span className="w-3.5 h-2 border border-white/80 rounded-xs relative inline-block p-0.5">
                        <span className="block h-full bg-[#7CF2C2] rounded-xs w-full"></span>
                      </span>
                    </div>
                  </div>

                  {/* Screenshot Image with Smooth Aspect Ratio Container */}
                  <div
                    onClick={() => openLightbox(selectedIndex)}
                    className="relative w-full h-full overflow-hidden cursor-zoom-in"
                    title="Click to view full resolution"
                  >
                    <img
                      key={currentScreen.id}
                      src={currentScreen.src}
                      alt={currentScreen.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />

                    {/* Gradient Overlay for Top Status Bar & Bottom Nav Bar */}
                    <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

                    {/* Quick Expand Button Hover */}
                    <div className="absolute inset-0 bg-[#0B1612]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="px-3 py-1.5 rounded-full bg-[#0B1612]/90 text-[#7CF2C2] text-[11px] font-mono-fine flex items-center gap-1.5 shadow-lg backdrop-blur-xs">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect High-Res</span>
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator Bar */}
                  <div className="absolute bottom-1.5 inset-x-0 flex justify-center pointer-events-none z-20">
                    <div className="w-28 h-1 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Prev / Next Controls under phone */}
              <div className="flex items-center gap-4 mt-6 font-mono-fine text-xs">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] hairline-border transition-all cursor-pointer shadow-xs"
                  aria-label="Previous Screen"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[#5E6F66] font-mono-metric text-[11px]">
                  <strong className="text-[#1E3329]">{String(selectedIndex + 1).padStart(2, '0')}</strong> / {String(SCREENS.length).padStart(2, '0')}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-[#E4EAE4] hover:bg-[#1E3329] hover:text-[#7CF2C2] hairline-border transition-all cursor-pointer shadow-xs"
                  aria-label="Next Screen"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Screen Metadata & Details Column */}
            <div className="lg:col-span-7 flex flex-col justify-between font-mono-fine space-y-6">
              <div>
                {/* Screen Category & Badge */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#5E6F66] font-medium">
                    {currentScreen.category}
                  </span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-[#1E3329] text-[#7CF2C2] font-mono-metric font-medium uppercase">
                    {currentScreen.badge}
                  </span>
                </div>

                {/* Screen Main Title */}
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1E3329] font-normal tracking-tight">
                  {currentScreen.title}
                </h3>

                {/* Subtitle / Purpose */}
                <p className="text-xs sm:text-sm text-[#5E6F66] mt-2.5 leading-relaxed">
                  {currentScreen.subtitle}
                </p>

                {/* Key Technical & Accounting Capabilities */}
                <div className="mt-6 space-y-2.5">
                  <div className="text-[10px] uppercase text-[#1E3329] font-medium tracking-wider mb-2">
                    FIELD AUDIT &amp; CAPABILITIES:
                  </div>
                  {currentScreen.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#1E3329]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="leading-snug">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Tally Synchronization Guarantee Strip */}
                <div className="mt-6 p-3 bg-[#E4EAE4] hairline-border rounded-xs flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 text-[#10B981] animate-spin" style={{ animationDuration: '4s' }} />
                    <span className="text-[10px] uppercase text-[#5E6F66] tracking-wider">SYNC PROTOCOL:</span>
                  </div>
                  <span className="text-[11px] font-mono-metric font-medium text-[#1E3329]">
                    {currentScreen.tallySync}
                  </span>
                </div>
              </div>

              {/* Bottom Quick-Switch Thumbnail Strip */}
              <div className="pt-4 hairline-t">
                <div className="text-[10px] uppercase text-[#5E6F66] tracking-wider mb-2.5 flex items-center justify-between">
                  <span>JUMP TO RELATED SCREENS:</span>
                  <button
                    onClick={() => openLightbox(selectedIndex)}
                    className="text-[#1E3329] hover:underline flex items-center gap-1 cursor-pointer text-[10px]"
                  >
                    <span>Full Lightbox View</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>

                <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                  {SCREENS.map((screen, idx) => {
                    const isSelected = selectedIndex === idx
                    return (
                      <button
                        key={screen.id}
                        onClick={() => setSelectedIndex(idx)}
                        className={`group relative shrink-0 w-12 sm:w-14 aspect-[9/19.5] rounded-xs overflow-hidden transition-all cursor-pointer ${
                          isSelected
                            ? 'ring-2 ring-[#1E3329] scale-105 shadow-md'
                            : 'opacity-60 hover:opacity-100 hairline-border'
                        }`}
                        title={screen.title}
                      >
                        <img
                          src={screen.src}
                          alt={screen.title}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] text-[#7CF2C2] font-mono-metric text-center py-0.5">
                          {screen.number}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* VIEW 2: Complete 16-Screen High-Density Grid */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in font-mono-fine">
          {filteredScreens.map((screen) => {
            const originalIndex = SCREENS.findIndex((s) => s.id === screen.id)
            return (
              <div
                key={screen.id}
                onClick={() => openLightbox(originalIndex)}
                className="bg-[#D6E2D8] hairline-border rounded-xs p-3 hover:bg-[#DCE7DE] transition-all cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between text-[10px] mb-2 pb-1.5 hairline-b text-[#5E6F66]">
                    <span className="font-mono-metric font-medium text-[#1E3329]">
                      #{screen.number}
                    </span>
                    <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#E4EAE4] text-[#1E3329]">
                      {screen.badge}
                    </span>
                  </div>

                  {/* Thumbnail Image Container */}
                  <div className="relative aspect-[9/18] bg-[#0E1713] rounded-xs overflow-hidden hairline-border mb-3">
                    <img
                      src={screen.src}
                      alt={screen.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0B1612]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-1.5 rounded-full bg-[#0B1612]/90 text-[#7CF2C2] shadow-md">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="text-xs font-medium text-[#1E3329] line-clamp-1 group-hover:underline">
                    {screen.title}
                  </div>
                  <div className="text-[10px] text-[#5E6F66] mt-0.5 line-clamp-1">
                    {screen.category}
                  </div>
                </div>

                {/* Inspect Action */}
                <div className="pt-2 mt-2 hairline-t flex items-center justify-between text-[10px] text-[#5E6F66]">
                  <span>Click to expand</span>
                  <ArrowUpRight className="w-3 h-3 text-[#1E3329]" />
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* LIGHTBOX MODAL: Inspect Screenshot in Full Resolution */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-[#0B1612]/90 backdrop-blur-md animate-fade-in font-mono-fine text-xs">
          
          {/* Close Lightbox Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev - 1 + SCREENS.length) % SCREENS.length)}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Previous screen"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev + 1) % SCREENS.length)}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-50"
            aria-label="Next screen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Container */}
          <div className="max-w-4xl w-full max-h-[92vh] flex flex-col lg:flex-row items-center justify-center gap-6 overflow-y-auto no-scrollbar py-4">
            
            {/* Screenshot in Phone Proportion */}
            <div className="shrink-0 w-full max-w-[320px] sm:max-w-[350px] aspect-[9/19.5] bg-[#0E1713] rounded-[36px] p-2.5 shadow-2xl hairline-border ring-1 ring-white/15">
              <div className="w-full h-full rounded-[28px] overflow-hidden bg-black">
                <img
                  src={SCREENS[lightboxIndex].src}
                  alt={SCREENS[lightboxIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Screen Metadata Card */}
            <div className="bg-[#12231C] text-[#E4EAE4] p-6 sm:p-8 rounded-xs hairline-border max-w-md w-full space-y-4">
              <div className="flex items-center justify-between pb-3 hairline-b border-white/10">
                <span className="text-[10px] uppercase text-[#7CF2C2] tracking-widest font-mono-metric">
                  SCREEN #{SCREENS[lightboxIndex].number} · {SCREENS[lightboxIndex].category}
                </span>
                <span className="text-[10px] text-[#89A799] font-mono-metric">
                  {lightboxIndex + 1} of {SCREENS.length}
                </span>
              </div>

              <div>
                <h3 className="font-serif-display text-2xl text-white font-normal">
                  {SCREENS[lightboxIndex].title}
                </h3>
                <p className="text-xs text-[#89A799] mt-2 leading-relaxed">
                  {SCREENS[lightboxIndex].subtitle}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-[10px] uppercase text-[#7CF2C2] tracking-wider font-medium">
                  KEY HIGHLIGHTS:
                </div>
                {SCREENS[lightboxIndex].bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-[#CAD8D0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7CF2C2] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 hairline-t border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-[#89A799]">Tally Sync Status:</span>
                <span className="text-[#7CF2C2] font-mono-metric font-medium">
                  {SCREENS[lightboxIndex].tallySync}
                </span>
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] text-[#5E6F66]">
                <span>Use ← and → keys to navigate</span>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="text-[#7CF2C2] hover:underline cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>
            </div>

          </div>

        </div>
      )}
    </section>
  )
}
