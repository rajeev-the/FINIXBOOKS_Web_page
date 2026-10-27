import React, { useState } from 'react'
import {
  BarChart3,
  Zap,
  CreditCard,
  PenTool,
  Landmark,
  Package,
  Receipt,
  Target,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Code2,
  Send,
  Eye,
} from 'lucide-react'

const FEATURE_MODULES = [
  {
    id: 'command-center',
    number: '01',
    category: 'Core Financials',
    title: 'Executive Financial Command Center',
    tagline: 'Real-time business pulse without waiting for day-end books.',
    icon: BarChart3,
    highlights: [
      { title: 'Live KPI Dashboard', desc: 'Gross revenue, purchases, net receivables, payables, and liquid cash.' },
      { title: 'Period Comparison', desc: 'Toggle Monthly, Quarterly, and Fiscal YTD performance instantly.' },
      { title: 'Cash-Flow Trends', desc: 'Visual sales vs. collection curves and monthly burn rates.' },
      { title: 'Quick Actions', desc: 'Rapid shortcuts for vouchers, overdue balances, and bank feeds.' },
    ],
    technical: {
      stack: ['Flutter', 'Riverpod', 'FlChart', 'MongoDB Time-Series', 'Node.js'],
      arch: 'Aggregated read-model with Redis cache invalidation on AlterID bumps.',
      endpoint: 'GET /api/v1/dashboard/executive-kpis?period=ytd',
      contract: 'TimeSeriesBucket { revenue, purchases, receivables, cashPosition }',
    },
    demoType: 'command-center',
  },
  {
    id: 'receivables-engine',
    number: '02',
    category: 'Cash Flow',
    title: 'Smart Receivables & Cash Engine',
    tagline: 'Accelerate cash flow and reduce Days Sales Outstanding (DSO).',
    icon: Zap,
    highlights: [
      { title: 'Aging Analysis', desc: 'Automatic 0–30, 31–60, 61–90, and 90+ day overdue buckets.' },
      { title: 'Party Due Tracker', desc: 'Ranked debtor ledger highlighting sums owed and aging duration.' },
      { title: 'Bill Breakdown', desc: 'Drilldown by bill reference numbers, due dates, and pending balance.' },
      { title: '1-Tap WhatsApp & PDF', desc: 'Dispatch payment reminders and statements directly to clients.' },
    ],
    technical: {
      stack: ['Node.js Worker', 'Twilio / WhatsApp Cloud API', 'PDFKit', 'MongoDB'],
      arch: 'Asynchronous BullMQ worker queue for ledger PDF generation and webhook delivery.',
      endpoint: 'POST /api/v1/receivables/dispatch-reminder',
      contract: 'ReceivableLedger { billNo, partyName, dueDate, pendingBalance, agingBucket }',
    },
    demoType: 'receivables',
  },
  {
    id: 'payables-optimizer',
    number: '03',
    category: 'Cash Flow',
    title: 'Accounts Payable & Outflow Optimizer',
    tagline: 'Safeguard creditworthiness and capture vendor early discounts.',
    icon: CreditCard,
    highlights: [
      { title: 'Vendor Schedules', desc: 'Calendar of upcoming vendor liabilities to maintain credit ratings.' },
      { title: 'Outflow Forecast', desc: 'Predictive cash liability curve protecting working capital.' },
      { title: 'Invoice Verification', desc: 'Cross-check supplier invoices against purchase orders and vouchers.' },
    ],
    technical: {
      stack: ['Node.js', 'PostgreSQL / Mongo', 'Fuzzy Matcher', 'Linear Model'],
      arch: 'Levenshtein string matching comparing vendor bills against open Tally purchase orders.',
      endpoint: 'GET /api/v1/payables/outflow-forecast?windowDays=90',
      contract: 'PayableSchedule { vendorId, invoiceRef, poMatchScore, dueDate, liability }',
    },
    demoType: 'payables',
  },
  {
    id: 'voucher-creation',
    number: '04',
    category: 'Field Operations',
    title: 'On-The-Go Voucher Creation & Sync',
    tagline: 'Book sales invoices and payment receipts from any mobile device.',
    icon: PenTool,
    highlights: [
      { title: 'Field Voucher Booking', desc: 'Generate Sales, Purchases, Receipts, Payments, and Contra on mobile.' },
      { title: 'Tax & Multi-Ledger', desc: 'Automatic CGST, SGST, IGST calculations and item tax allocation.' },
      { title: 'Instant Tally Injection', desc: 'Push mobile entries to desktop TallyPrime in seconds via local bridge.' },
      { title: 'Instant PDF Invoices', desc: 'Share branded GST tax invoices on-site via WhatsApp or email.' },
    ],
    technical: {
      stack: ['Flutter', 'Riverpod', 'Electron Bridge', 'Tally XML Port 9000', 'SQLite'],
      arch: 'Offline SQLite spool with deterministic XML envelope synthesis posted to port 9000.',
      endpoint: 'POST http://localhost:9000/ (TDL XML Envelope)',
      contract: '<ENVELOPE><HEADER>Import Data</HEADER><BODY><VOUCHER>...</VOUCHER></BODY></ENVELOPE>',
    },
    demoType: 'voucher',
  },
  {
    id: 'statutory-reports',
    number: '05',
    category: 'Core Financials',
    title: 'Statutory Financial Reports & Audit Trails',
    tagline: 'CA-grade financial statements accessible on demand.',
    icon: Landmark,
    highlights: [
      { title: 'Live Balance Sheet', desc: 'Hierarchical drill-down through Capital, Liabilities, and Assets.' },
      { title: 'Profit & Loss (P&L)', desc: 'Real-time statement detailing Gross Profit, COGS, and Net Margins.' },
      { title: 'Group Trial Balance', desc: 'Deterministic verification of Debit and Credit equality.' },
      { title: 'Digital Day Book', desc: 'Chronological daily journal filterable by voucher type and party.' },
    ],
    technical: {
      stack: ['Recursive CTE', 'MongoDB Graph', 'MCA SHA-256 Audit Trail'],
      arch: 'Pre-computed hierarchical tree rollup with immutable voucher checksum logging.',
      endpoint: 'GET /api/v1/reports/balance-sheet?asOfDate=today',
      contract: 'AccountNode { id, parentId, groupName, debitSum, creditSum, netBalance }',
    },
    demoType: 'reports',
  },
  {
    id: 'inventory-intelligence',
    number: '06',
    category: 'Inventory',
    title: 'Inventory Intelligence & Stock Tracking',
    tagline: 'Real-time inventory valuation across godowns, batches, and SKUs.',
    icon: Package,
    highlights: [
      { title: 'Live Stock Valuation', desc: 'Holding values recalculated with every sale and inward dispatch.' },
      { title: 'Movement Audit Trail', desc: 'Track opening quantities, inwards, dispatches, and closing stocks.' },
      { title: 'Low-Stock Alerts', desc: 'Proactive notifications when items cross minimum reorder thresholds.' },
    ],
    technical: {
      stack: ['Node.js Microservice', 'MongoDB $inc', 'Flutter Barcode Scanner'],
      arch: 'FIFO costing engine with atomic quantity increments and multi-godown batch tracing.',
      endpoint: 'GET /api/v1/inventory/stock-summary?godownId=all',
      contract: 'StockItem { sku, batchNumber, godown, closingQty, valuationRate }',
    },
    demoType: 'inventory',
  },
  {
    id: 'gst-compliance',
    number: '07',
    category: 'Core Financials',
    title: '1-Click GST Dashboard & Compliance',
    tagline: 'Reconcile returns and safeguard Input Tax Credits effortlessly.',
    icon: Receipt,
    highlights: [
      { title: 'GSTR-1 & 3B Dashboards', desc: 'Summary of outward supplies and eligible Input Tax Credit (ITC).' },
      { title: 'Tax Component Splits', desc: 'Clean segregation of CGST, SGST, IGST, and statutory Cess.' },
      { title: 'ITC Offset Calculator', desc: 'Automatic net payable tax calculation to prevent surprise liabilities.' },
    ],
    technical: {
      stack: ['GSTN API Schema v2.0', 'Decimal.js Math', 'Tax Engine'],
      arch: 'Arbitrary-precision arithmetic eliminating floating-point rounding errors during splits.',
      endpoint: 'GET /api/v1/gst/summary?period=current',
      contract: 'GstReturn { taxPeriod, outwardTaxable, eligibleItc, netLiability }',
    },
    demoType: 'gst',
  },
  {
    id: 'multi-bank-recon',
    number: '08',
    category: 'Cash Flow',
    title: 'Multi-Bank Accounts & Reconciliation',
    tagline: 'Unify current, savings, and overdraft accounts with live feeds.',
    icon: Landmark,
    highlights: [
      { title: 'Unified Bank Dashboard', desc: 'Live card balances across all company current and OD accounts.' },
      { title: 'Transaction Feed', desc: 'Filterable logs with UTR, NEFT, RTGS, and cheque references.' },
      { title: 'Reconciliation Status', desc: 'Visual badges identifying reconciled vs. un-reconciled lines.' },
    ],
    technical: {
      stack: ['Open Banking Parser', 'OFX / MT940 / CSV Ingestion', 'Rule Engine'],
      arch: 'Regex UTR matcher pairing bank feed lines to open vouchers with 99.4% precision.',
      endpoint: 'GET /api/v1/banking/reconciliation-status?bankId=hdfc-curr',
      contract: 'BankTransaction { utrNumber, valueDate, amount, status: RECONCILED }',
    },
    demoType: 'banking',
  },
  {
    id: 'financial-crm',
    number: '09',
    category: 'Enterprise & Scale',
    title: 'Financial CRM & Customer Intelligence',
    tagline: 'Bridge CRM sales pipelines with actual audited ledger billing.',
    icon: Target,
    highlights: [
      { title: 'Pipeline Billing Link', desc: 'Link sales deals directly to the client’s real payment history.' },
      { title: 'Revenue Rankings', desc: 'Identify top-tier margin accounts versus chronic slow-paying parties.' },
      { title: 'Activity Logs', desc: 'Log meetings, next steps, and assign team owners with credit limits.' },
    ],
    technical: {
      stack: ['MongoDB Document Core', 'LTV Scoring Model', 'WebSocket Push'],
      arch: 'Payment Reliability Index (PRI) algorithm scoring 12-month payment velocity.',
      endpoint: 'GET /api/v1/crm/customer-intelligence?partyId=sharma-traders',
      contract: 'CustomerProfile { partyId, ltvAmount, avgPaymentDays, priorityTier }',
    },
    demoType: 'crm',
  },
  {
    id: 'multi-company-rbac',
    number: '10',
    category: 'Enterprise & Scale',
    title: 'Multi-Company Switching & RBAC',
    tagline: 'Unified control for multi-branch firms, CAs, and enterprise groups.',
    icon: ShieldCheck,
    highlights: [
      { title: 'Multi-Company Switching', desc: 'Jump between group subsidiaries or client companies in 1 tap.' },
      { title: 'Granular RBAC', desc: 'Role-tailored views for Admins, Sales Reps, Accountants, and Auditors.' },
      { title: 'Enterprise Security', desc: 'JWT token isolation, biometric mobile login, and audit safeguards.' },
    ],
    technical: {
      stack: ['JWT (RSA-256)', 'Flutter local_auth', 'Tenant Partitioning'],
      arch: 'Scoped tenant routing middleware preventing cross-company data leakage.',
      endpoint: 'POST /api/v1/auth/switch-company',
      contract: 'UserSession { userId, tenantId, companyId, role: ADMIN|SALES|ACCOUNTANT }',
    },
    demoType: 'security',
  },
]

export default function FeatureModules() {
  const [selectedModuleId, setSelectedModuleId] = useState(FEATURE_MODULES[0].id)
  const [viewMode, setViewMode] = useState('product') // 'product' | 'technical'
  const [activeCategory, setActiveCategory] = useState('all')

  // Minimal interactive state
  const [periodToggle, setPeriodToggle] = useState('monthly')
  const [activeVoucherType, setActiveVoucherType] = useState('SALES')
  const [selectedRole, setSelectedRole] = useState('SALES')
  const [reportTab, setReportTab] = useState('balance-sheet')
  const [sentAlert, setSentAlert] = useState('')

  const categories = [
    { id: 'all', label: 'All 10 Modules' },
    { id: 'Core Financials', label: 'Financials' },
    { id: 'Cash Flow', label: 'Cash Flow' },
    { id: 'Field Operations', label: 'Field Sync' },
    { id: 'Inventory', label: 'Inventory' },
    { id: 'Enterprise & Scale', label: 'Enterprise' },
  ]

  const filteredModules =
    activeCategory === 'all'
      ? FEATURE_MODULES
      : FEATURE_MODULES.filter((m) => m.category === activeCategory)

  const activeModule =
    FEATURE_MODULES.find((m) => m.id === selectedModuleId) || FEATURE_MODULES[0]
  const ActiveIcon = activeModule.icon

  const handleTriggerAction = (msg) => {
    setSentAlert(msg)
    setTimeout(() => setSentAlert(''), 2500)
  }

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="features">
      {/* Header and Perspective Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"></span>
            COMPREHENSIVE CAPABILITIES
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
            10 Key Feature Modules.
          </h2>
          <p className="font-mono-fine text-xs sm:text-sm text-[#5E6F66] mt-2.5 leading-relaxed">
            From executive command centers and automated aging buckets to on-the-go voucher creation, CA-grade financial statements, and 1-click GST reconciliation. Built for business operators, architected for software engineers.
          </p>
        </div>

        {/* Global View Switcher */}
        <div className="inline-flex hairline-border p-1 bg-[#D6E2D8] rounded-xs self-start md:self-auto shadow-xs">
          <button
            onClick={() => setViewMode('product')}
            className={`px-3 py-1.5 text-[10px] uppercase font-mono-fine transition-all cursor-pointer flex items-center gap-1.5 rounded-xs ${
              viewMode === 'product'
                ? 'bg-[#1E3329] text-white font-medium shadow-xs'
                : 'text-[#5E6F66] hover:text-[#1E3329]'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>Product View</span>
          </button>
          <button
            onClick={() => setViewMode('technical')}
            className={`px-3 py-1.5 text-[10px] uppercase font-mono-fine transition-all cursor-pointer flex items-center gap-1.5 rounded-xs ${
              viewMode === 'technical'
                ? 'bg-[#1E3329] text-white font-medium shadow-xs'
                : 'text-[#5E6F66] hover:text-[#1E3329]'
            }`}
          >
            <Code2 className="w-3 h-3" />
            <span>Tech Specs</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1 text-[10px] uppercase font-mono-fine hairline-border whitespace-nowrap transition-all cursor-pointer rounded-xs ${
              activeCategory === cat.id
                ? 'bg-[#1E3329] text-white font-medium shadow-xs border-[#1E3329]'
                : 'bg-[#E4EAE4] text-[#5E6F66] hover:text-[#1E3329]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List of 10 Modules */}
        <div className="lg:col-span-4 space-y-2">
          {filteredModules.map((item) => {
            const Icon = item.icon
            const isSelected = selectedModuleId === item.id

            return (
              <div
                key={item.id}
                onClick={() => setSelectedModuleId(item.id)}
                className={`p-3.5 hairline-border rounded-xs transition-all cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-[#1E3329] text-white shadow-sm border-[#7CF2C2]'
                    : 'bg-[#D6E2D8] text-[#1E3329] hover:bg-[#DCE7DE]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-xs flex items-center justify-center font-mono-fine text-xs font-semibold ${
                      isSelected
                        ? 'bg-[#7CF2C2]/20 text-[#7CF2C2] border border-[#7CF2C2]/40'
                        : 'bg-[#E4EAE4] text-[#1E3329]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span
                      className={`text-[9px] font-mono-fine uppercase tracking-wider block ${
                        isSelected ? 'text-[#7CF2C2]' : 'text-[#5E6F66]'
                      }`}
                    >
                      #{item.number} · {item.category}
                    </span>
                    <div
                      className={`font-serif-display text-sm font-medium leading-snug ${
                        isSelected ? 'text-white' : 'text-[#1E3329]'
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                    isSelected ? 'text-[#7CF2C2]' : 'text-[#5E6F66]'
                  }`}
                />
              </div>
            )
          })}
        </div>

        {/* Right Column: Active Module Card */}
        <div className="lg:col-span-8 hairline-border bg-[#D6E2D8] p-6 sm:p-8 rounded-xs shadow-xs font-mono-fine text-xs">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 hairline-b">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-[#1E3329] text-[#7CF2C2] flex items-center justify-center">
                <ActiveIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#5E6F66] font-medium tracking-wider">
                  MODULE {activeModule.number} · {activeModule.category}
                </span>
                <h3 className="font-serif-display text-2xl text-[#1E3329] font-normal leading-tight">
                  {activeModule.title}
                </h3>
              </div>
            </div>

            <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-[#E4EAE4] text-[#1E3329] font-medium">
              {viewMode === 'product' ? 'Product View' : 'Technical View'}
            </span>
          </div>

          <p className="text-xs text-[#5E6F66] my-4 leading-relaxed">
            {activeModule.tagline}
          </p>

          {/* VIEW MODE 1: PRODUCT VIEW */}
          {viewMode === 'product' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModule.highlights.map((h, idx) => (
                  <div key={idx} className="p-3.5 hairline-border bg-[#E4EAE4] rounded-xs">
                    <div className="text-xs font-medium text-[#1E3329] flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{h.title}</span>
                    </div>
                    <p className="text-[11px] text-[#5E6F66] leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Minimal Interactive Simulator */}
              <div className="hairline-t pt-4">
                <div className="flex items-center justify-between mb-3 text-[10px] text-[#5E6F66]">
                  <span className="uppercase tracking-wider font-medium">LIVE PREVIEW</span>
                  {sentAlert && <span className="text-[#10B981] font-medium">{sentAlert}</span>}
                </div>

                {/* Module Previews */}
                {activeModule.demoType === 'command-center' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 hairline-b">
                      <span className="text-[10px] text-[#5E6F66]">Filter Period:</span>
                      <div className="flex gap-1">
                        {['monthly', 'quarterly', 'ytd'].map((p) => (
                          <button
                            key={p}
                            onClick={() => setPeriodToggle(p)}
                            className={`px-2 py-0.5 text-[9px] uppercase rounded-xs cursor-pointer ${
                              periodToggle === p
                                ? 'bg-[#1E3329] text-white font-medium'
                                : 'bg-[#D6E2D8] text-[#5E6F66]'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                      <div className="p-2.5 bg-[#D6E2D8] rounded-xs">
                        <div className="text-[9px] uppercase text-[#5E6F66]">Revenue</div>
                        <div className="font-mono-metric text-xs font-semibold text-[#1E3329] mt-0.5">
                          {periodToggle === 'monthly' ? '₹42.8L' : periodToggle === 'quarterly' ? '₹1.28Cr' : '₹4.92Cr'}
                        </div>
                      </div>
                      <div className="p-2.5 bg-[#D6E2D8] rounded-xs">
                        <div className="text-[9px] uppercase text-[#5E6F66]">Purchases</div>
                        <div className="font-mono-metric text-xs font-semibold text-[#1E3329] mt-0.5">
                          {periodToggle === 'monthly' ? '₹28.1L' : periodToggle === 'quarterly' ? '₹84.4L' : '₹3.18Cr'}
                        </div>
                      </div>
                      <div className="p-2.5 bg-[#D6E2D8] rounded-xs">
                        <div className="text-[9px] uppercase text-[#5E6F66]">Receivables</div>
                        <div className="font-mono-metric text-xs font-semibold text-[#10B981] mt-0.5">₹18.4L</div>
                      </div>
                      <div className="p-2.5 bg-[#D6E2D8] rounded-xs">
                        <div className="text-[9px] uppercase text-[#5E6F66]">Bank Liquid</div>
                        <div className="font-mono-metric text-xs font-semibold text-[#1E3329] mt-0.5">₹34.1L</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeModule.demoType === 'receivables' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-2">
                    <div className="flex items-center justify-between p-2.5 bg-[#D6E2D8] rounded-xs">
                      <div>
                        <div className="font-medium text-[#1E3329] text-[11px]">Apex Industrial Hub</div>
                        <div className="text-[9px] text-[#5E6F66]">Inv #SV-2481 · Due 12d ago</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-metric font-medium text-[#1E3329]">₹4,82,000</span>
                        <button
                          onClick={() => handleTriggerAction('WhatsApp statement dispatched.')}
                          className="px-2 py-0.5 text-[9px] bg-[#1E3329] text-white rounded cursor-pointer hover:bg-[#254234] flex items-center gap-1"
                        >
                          <Send className="w-2.5 h-2.5" /> WhatsApp
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-[#D6E2D8] rounded-xs">
                      <div>
                        <div className="font-medium text-[#1E3329] text-[11px]">Balaji Steel Pipes</div>
                        <div className="text-[9px] text-[#5E6F66]">Inv #SV-1920 · Due 94d ago</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-metric font-medium text-[#1E3329]">₹14,50,000</span>
                        <button
                          onClick={() => handleTriggerAction('Reminder sent to Balaji Steel.')}
                          className="px-2 py-0.5 text-[9px] bg-[#1E3329] text-white rounded cursor-pointer hover:bg-[#254234] flex items-center gap-1"
                        >
                          <Send className="w-2.5 h-2.5" /> WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeModule.demoType === 'payables' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-2">
                    <div className="flex items-center justify-between p-2.5 bg-[#D6E2D8] rounded-xs">
                      <div>
                        <div className="font-medium text-[#1E3329] text-[11px]">Bharat Metals Ltd</div>
                        <div className="text-[9px] text-[#5E6F66]">2% Early Discount if cleared in 3 days</div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono-metric font-medium text-[#1E3329]">₹8,40,000</span>
                        <span className="text-[8px] bg-[#10B981]/15 text-[#10B981] px-1 rounded block mt-0.5">PO Matched</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeModule.demoType === 'voucher' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 hairline-b">
                      <span className="text-[10px] text-[#5E6F66]">Voucher Type:</span>
                      <div className="flex gap-1">
                        {['SALES', 'RECEIPT', 'PAYMENT', 'JOURNAL'].map((vt) => (
                          <button
                            key={vt}
                            onClick={() => setActiveVoucherType(vt)}
                            className={`px-2 py-0.5 text-[9px] uppercase rounded-xs cursor-pointer ${
                              activeVoucherType === vt
                                ? 'bg-[#1E3329] text-white font-medium'
                                : 'bg-[#D6E2D8] text-[#5E6F66]'
                            }`}
                          >
                            {vt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#5E6F66]">Sharma Traders · CGST/SGST Auto-Split</span>
                      <button
                        onClick={() => handleTriggerAction('Voucher synced to TallyPrime in 0.8s.')}
                        className="btn-mint px-3 py-1 rounded text-[10px] uppercase font-mono-fine cursor-pointer"
                      >
                        Push to Tally
                      </button>
                    </div>
                  </div>
                )}

                {activeModule.demoType === 'reports' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-2.5">
                    <div className="flex gap-1 pb-2 hairline-b">
                      {['balance-sheet', 'pnl', 'trial-balance'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setReportTab(tab)}
                          className={`px-2 py-0.5 text-[9px] uppercase rounded-xs cursor-pointer ${
                            reportTab === tab
                              ? 'bg-[#1E3329] text-white font-medium'
                              : 'bg-[#D6E2D8] text-[#5E6F66]'
                          }`}
                        >
                          {tab.replace('-', ' ')}
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-[11px] py-1 border-b border-[#1E3329]/10">
                      <span>Total Balance Verification</span>
                      <span className="font-mono-metric font-medium text-[#1E3329]">
                        {reportTab === 'balance-sheet' ? '₹4,82,19,400' : reportTab === 'pnl' ? '₹1,15,12,800 Net' : 'Balanced (₹0 Diff)'}
                      </span>
                    </div>
                  </div>
                )}

                {activeModule.demoType === 'inventory' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-2">
                    <div className="flex items-center justify-between p-2 bg-[#D6E2D8] rounded-xs text-[11px]">
                      <span>SKU-VALVE-402 (Cast Steel 2") · Bhiwandi Godown</span>
                      <span className="font-mono-metric font-medium text-[#1E3329]">450 Nos. (Optimal)</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-[#D6E2D8] rounded-xs text-[11px]">
                      <span>SKU-PIPE-901 · Factory Warehouse</span>
                      <span className="font-mono-metric font-medium text-[#1E3329]">18 Nos. (Reorder Point: 50)</span>
                    </div>
                  </div>
                )}

                {activeModule.demoType === 'gst' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-2">
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="p-2 bg-[#D6E2D8] rounded-xs">
                        <span className="text-[#5E6F66] block">Output Tax</span>
                        <strong className="text-[#1E3329] font-mono-metric">₹8.42L</strong>
                      </div>
                      <div className="p-2 bg-[#D6E2D8] rounded-xs">
                        <span className="text-[#5E6F66] block">Eligible ITC</span>
                        <strong className="text-[#10B981] font-mono-metric">₹6.80L</strong>
                      </div>
                      <div className="p-2 bg-[#D6E2D8] rounded-xs">
                        <span className="text-[#5E6F66] block">Net Payable</span>
                        <strong className="text-[#1E3329] font-mono-metric">₹1.62L</strong>
                      </div>
                    </div>
                  </div>
                )}

                {activeModule.demoType === 'banking' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-2 text-[11px]">
                    <div className="flex items-center justify-between p-2 bg-[#D6E2D8] rounded-xs">
                      <span>HDFC Current (...4891) · UTR: N240188</span>
                      <span className="font-mono-metric font-medium text-[#1E3329]">₹24,19,450 (Reconciled)</span>
                    </div>
                  </div>
                )}

                {activeModule.demoType === 'crm' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-2 text-[11px]">
                    <div className="flex items-center justify-between p-2 bg-[#D6E2D8] rounded-xs">
                      <span>Sharma Traders · Pipeline: ₹18.5L Expansion</span>
                      <span className="font-mono-metric font-medium text-[#10B981]">LTV: ₹1.42 Cr</span>
                    </div>
                  </div>
                )}

                {activeModule.demoType === 'security' && (
                  <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-2 text-[11px]">
                    <div className="flex items-center justify-between pb-1 hairline-b text-[10px]">
                      <span className="text-[#5E6F66]">Select Role View:</span>
                      <div className="flex gap-1">
                        {['SALES', 'ACCOUNTANT', 'ADMIN'].map((r) => (
                          <button
                            key={r}
                            onClick={() => setSelectedRole(r)}
                            className={`px-2 py-0.5 text-[8px] uppercase rounded-xs cursor-pointer ${
                              selectedRole === r ? 'bg-[#1E3329] text-white' : 'bg-[#D6E2D8] text-[#5E6F66]'
                            }`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="text-[10px] text-[#1E3329] pt-1">
                      {selectedRole === 'SALES' && 'Assigned party ledgers only · No cost price visibility.'}
                      {selectedRole === 'ACCOUNTANT' && 'Full voucher write · Bank reconciliation enabled.'}
                      {selectedRole === 'ADMIN' && 'Multi-company administration · Full audit access.'}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW MODE 2: TECHNICAL VIEW */}
          {viewMode === 'technical' && (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase text-[#5E6F66] block mb-1.5">STACK</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeModule.technical.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono-fine bg-[#1E3329] text-[#7CF2C2] rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#E4EAE4] hairline-border rounded-xs space-y-2">
                <span className="text-[9px] uppercase text-[#5E6F66] block font-medium">Architecture</span>
                <p className="text-xs text-[#1E3329] leading-relaxed">
                  {activeModule.technical.arch}
                </p>
              </div>

              <div className="p-4 bg-[#0B1612] text-[#E4EAE4] rounded-xs space-y-2 font-mono-fine text-xs">
                <div>
                  <span className="text-[9px] uppercase text-[#89A799] block mb-1">ENDPOINT</span>
                  <code className="text-[#7CF2C2] text-xs break-all">
                    {activeModule.technical.endpoint}
                  </code>
                </div>
                <div className="pt-2 border-t border-[#2A4235]">
                  <span className="text-[9px] uppercase text-[#89A799] block mb-1">DATA CONTRACT</span>
                  <code className="text-[#D6E2D8] text-[11px] break-all">
                    {activeModule.technical.contract}
                  </code>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
