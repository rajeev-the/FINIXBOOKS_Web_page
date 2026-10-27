import React, { useState } from 'react'
import {
  Cpu,
  Smartphone,
  Server,
  Database,
  RefreshCw,
  Palette,
  Layers,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Radio,
} from 'lucide-react'

const TECH_PILLARS = [
  {
    id: 'architecture',
    icon: Server,
    title: 'Event-Driven Architecture',
    subtitle: 'Desktop Bridge + Cloud API + Mobile',
    tags: ['Event-Driven', 'WebSocket', 'Delta-Sync'],
    summary: 'Multi-tier topology uniting on-premise Tally with reactive cloud services and mobile apps.',
    stats: '< 45ms P99 Latency',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Flutter Mobile Frontend',
    subtitle: 'Dart & Riverpod 2.0',
    tags: ['Flutter (Dart)', 'Riverpod', 'GoRouter', 'FlChart'],
    summary: 'Reactive client with FlChart vector visualization and offline SQLite voucher spooling.',
    stats: '60 FPS Rendering',
  },
  {
    id: 'backend',
    icon: Cpu,
    title: 'Cloud Microservices',
    subtitle: 'Node.js & Express RESTful Core',
    tags: ['Node.js', 'Express', 'JWT (RSA-256)', 'BullMQ'],
    summary: 'High-throughput microservices handling voucher ingestion, tax math, and PDF generation.',
    stats: '10,000+ Req/Sec',
  },
  {
    id: 'database',
    icon: Database,
    title: 'MongoDB Storage Engine',
    subtitle: 'Time-Series & Document Core',
    tags: ['MongoDB 7.0', 'Time-Series', 'ACID Sessions'],
    summary: 'Document collections optimized for multi-ledger vouchers and sub-50ms financial rollups.',
    stats: 'Sub-50ms Rollup',
  },
  {
    id: 'sync-engine',
    icon: RefreshCw,
    title: 'Local Tally Sync Engine',
    subtitle: 'Electron Bridge on Port 9000',
    tags: ['Electron Daemon', 'XML Port 9000', 'AlterID'],
    summary: '15MB local relay daemon communicating directly with Tally Prime over XML HTTP port 9000.',
    stats: '15MB RAM Footprint',
  },
  {
    id: 'design-system',
    icon: Palette,
    title: 'Design: "Ledger Sovereign"',
    subtitle: 'High-Density Financial UI',
    tags: ['IBM Plex Mono', 'Newsreader', 'Hairline'],
    summary: 'Custom typographical system engineered for fast audits, tabular numbers, and zero visual clutter.',
    stats: 'Tabular Numerals',
  },
]

const ARCHITECTURE_STEPS = [
  {
    id: 'all',
    title: 'End-to-End Bidirectional System Flow',
    badge: 'OVERVIEW',
    description: 'Field mobile clients ⇄ Cloud microservices ⇄ MongoDB Core ⇄ Electron Bridge ⇄ TallyPrime :9000.',
    latency: '< 1.4s Full Round-trip',
    protocol: 'REST + WSS + Tally XML HTTP',
  },
  {
    id: 'step-1',
    title: '1. Field Entry & SQLite Spool',
    badge: 'TIER 1 · MOBILE',
    description: 'Vouchers created on Flutter. Offline entries buffer in SQLite with UUID v4 idempotency.',
    latency: '0ms Instant Optimistic UI',
    protocol: 'Riverpod → SQLite / HTTPS REST',
  },
  {
    id: 'step-2',
    title: '2. Cloud API Gateway & Tax Splits',
    badge: 'TIER 2 · CLOUD',
    description: 'JWT verification, Decimal.js tax splits, BullMQ workers, and MongoDB voucher storage.',
    latency: '< 45ms P99 Gateway',
    protocol: 'Express.js + JSON Schema v2.0',
  },
  {
    id: 'step-3',
    title: '3. Outbound WebSocket Relay',
    badge: 'TIER 3 · STREAM',
    description: 'Cloud pushes voucher events to on-premise daemon over TLS 1.3 with zero inbound firewall ports.',
    latency: '< 120ms Push Latency',
    protocol: 'Bi-directional WSS Stream',
  },
  {
    id: 'step-4',
    title: '4. Electron Bridge & Port 9000 Injection',
    badge: 'TIER 4 · LOCAL',
    description: 'Bridge generates TDL XML <ENVELOPE> and posts to localhost:9000, confirming <CREATED>1</CREATED>.',
    latency: '0.2s Local Tally Write',
    protocol: 'HTTP POST localhost:9000 (XML)',
  },
  {
    id: 'step-5',
    title: '5. Reverse AlterID Delta Pull',
    badge: 'TIER 5 · DELTA',
    description: 'Bridge polls Tally AlterID watermark increments to replicate office accounting edits back to mobile.',
    latency: '1.8s Incremental Sweep',
    protocol: 'AlterID Watermark Polling',
  },
]

export default function TechnicalHighlights() {
  const [activeStepId, setActiveStepId] = useState('all')
  const activeStep =
    ARCHITECTURE_STEPS.find((s) => s.id === activeStepId) || ARCHITECTURE_STEPS[0]

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="technical-highlights">
      {/* Header with Eyebrow, Main Heading & Informative Subheading */}
      <div className="max-w-3xl mb-10">
        <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-pulse"></span>
          ENGINEERING CASE STUDY &amp; SYSTEM ARCHITECTURE
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
          Technical Highlights &amp; Flow Diagram.
        </h2>
        <p className="font-mono-fine text-xs sm:text-sm text-[#5E6F66] mt-2.5 leading-relaxed">
          An event-driven bidirectional desktop bridge communicating over Tally XML HTTP port 9000, combined with cross-platform Flutter clients, high-concurrency Node.js microservices, and MongoDB time-series storage.
        </p>
      </div>

      {/* 6 Core Architecture Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TECH_PILLARS.map((pillar) => {
          const Icon = pillar.icon

          return (
            <div
              key={pillar.id}
              className="p-5 bg-[#D6E2D8] hairline-border rounded-xs shadow-xs flex flex-col justify-between hover:bg-[#DCE7DE] transition-colors font-mono-fine"
            >
              <div>
                <div className="flex items-center justify-between pb-3 hairline-b">
                  <div className="w-8 h-8 rounded-xs bg-[#E4EAE4] flex items-center justify-center text-[#1E3329]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-[#E4EAE4] text-[#1E3329] font-medium font-mono-metric">
                    {pillar.stats}
                  </span>
                </div>

                <div className="mt-3">
                  <span className="text-[9px] uppercase text-[#5E6F66] tracking-wider block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif-display text-lg text-[#1E3329] font-medium mt-0.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#5E6F66] mt-2 leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 hairline-t flex flex-wrap gap-1">
                {pillar.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] px-1.5 py-0.5 bg-[#E4EAE4] rounded-xs text-[#1E3329]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Architecture Flow Diagram */}
      <div className="mt-12 hairline-border bg-[#0B1612] text-[#E4EAE4] rounded-xs overflow-hidden shadow-sm font-mono-fine text-xs">
        {/* Diagram Control Header */}
        <div className="p-4 sm:p-5 bg-[#15231C] border-b border-[#2A4235] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#1E3329] border border-[#7CF2C2]/40 flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-[#7CF2C2]" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-medium tracking-wider text-[#7CF2C2]">
                ARCHITECTURE FLOW DIAGRAM
              </div>
              <div className="text-[11px] text-[#89A799]">
                Bidirectional Pipeline: Mobile ⇄ Cloud Core ⇄ Desktop Tally :9000
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 text-[10px]">
            {ARCHITECTURE_STEPS.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`px-2.5 py-1 uppercase rounded-xs transition-colors cursor-pointer ${
                  activeStepId === step.id
                    ? 'bg-[#1E3329] text-[#7CF2C2] border border-[#7CF2C2]/60 font-medium'
                    : 'bg-[#0B1612] text-[#89A799] hover:text-white'
                }`}
              >
                {step.id === 'all' ? 'All Tiers' : step.id.replace('step-', 'Step ')}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Tier Columns */}
        <div className="p-6 sm:p-8 bg-[#070E0B] overflow-x-auto">
          <div className="min-w-[820px] grid grid-cols-4 gap-4">
            
            {/* TIER 1 */}
            <div
              className={`p-4 rounded-xs border transition-all ${
                activeStepId === 'all' || activeStepId === 'step-1'
                  ? 'bg-[#12231C] border-[#7CF2C2]'
                  : 'bg-[#0E1B15] border-[#2A4235] opacity-50'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#2A4235]">
                <span className="text-[9px] uppercase tracking-wider text-[#7CF2C2]">TIER 1 · CLIENT</span>
                <Smartphone className="w-4 h-4 text-[#7CF2C2]" />
              </div>
              <h4 className="font-serif-display text-base text-white font-medium mt-2">
                Flutter Mobile
              </h4>
              <div className="text-[10px] text-[#89A799] mt-0.5">iOS · Android · Web</div>
              <div className="space-y-1 mt-3 pt-3 border-t border-[#2A4235] text-[10px] text-[#D6E2D8]">
                <div>• Riverpod 2.0 State</div>
                <div>• Offline SQLite Spool</div>
                <div>• FlChart Vector Engine</div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#2A4235] text-[9px] text-[#7CF2C2] flex items-center gap-1">
                <Radio className="w-2.5 h-2.5 animate-pulse" />
                <span>REST / WSS</span>
              </div>
            </div>

            {/* TIER 2 */}
            <div
              className={`p-4 rounded-xs border transition-all ${
                activeStepId === 'all' || activeStepId === 'step-2' || activeStepId === 'step-3'
                  ? 'bg-[#12231C] border-[#7CF2C2]'
                  : 'bg-[#0E1B15] border-[#2A4235] opacity-50'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#2A4235]">
                <span className="text-[9px] uppercase tracking-wider text-[#7CF2C2]">TIER 2 · CLOUD</span>
                <Cpu className="w-4 h-4 text-[#7CF2C2]" />
              </div>
              <h4 className="font-serif-display text-base text-white font-medium mt-2">
                Node.js Gateway
              </h4>
              <div className="text-[10px] text-[#89A799] mt-0.5">Express Microservices</div>
              <div className="space-y-1 mt-3 pt-3 border-t border-[#2A4235] text-[10px] text-[#D6E2D8]">
                <div>• JWT Auth Guard</div>
                <div>• Decimal.js GST Splits</div>
                <div>• BullMQ PDF Workers</div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#2A4235] text-[9px] text-[#7CF2C2] flex items-center gap-1">
                <Activity className="w-2.5 h-2.5" />
                <span>&lt; 45ms P99 Gateway</span>
              </div>
            </div>

            {/* TIER 3 */}
            <div
              className={`p-4 rounded-xs border transition-all ${
                activeStepId === 'all' || activeStepId === 'step-2' || activeStepId === 'step-5'
                  ? 'bg-[#12231C] border-[#7CF2C2]'
                  : 'bg-[#0E1B15] border-[#2A4235] opacity-50'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#2A4235]">
                <span className="text-[9px] uppercase tracking-wider text-[#7CF2C2]">TIER 3 · STORAGE</span>
                <Database className="w-4 h-4 text-[#7CF2C2]" />
              </div>
              <h4 className="font-serif-display text-base text-white font-medium mt-2">
                MongoDB Core
              </h4>
              <div className="text-[10px] text-[#89A799] mt-0.5">Time-Series &amp; Documents</div>
              <div className="space-y-1 mt-3 pt-3 border-t border-[#2A4235] text-[10px] text-[#D6E2D8]">
                <div>• TimeSeries Buckets</div>
                <div>• $facet Aggregation</div>
                <div>• ACID Postings Lock</div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#2A4235] text-[9px] text-[#7CF2C2] flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5" />
                <span>Sub-50ms Indexing</span>
              </div>
            </div>

            {/* TIER 4 */}
            <div
              className={`p-4 rounded-xs border transition-all ${
                activeStepId === 'all' || activeStepId === 'step-3' || activeStepId === 'step-4' || activeStepId === 'step-5'
                  ? 'bg-[#12231C] border-[#7CF2C2]'
                  : 'bg-[#0E1B15] border-[#2A4235] opacity-50'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#2A4235]">
                <span className="text-[9px] uppercase tracking-wider text-[#7CF2C2]">TIER 4 · ON-PREM</span>
                <Server className="w-4 h-4 text-[#7CF2C2]" />
              </div>
              <h4 className="font-serif-display text-base text-white font-medium mt-2">
                Bridge &amp; Tally
              </h4>
              <div className="text-[10px] text-[#89A799] mt-0.5">Port 9000 Local Daemon</div>
              <div className="space-y-1 mt-3 pt-3 border-t border-[#2A4235] text-[10px] text-[#D6E2D8]">
                <div>• 15MB Electron Daemon</div>
                <div>• TDL XML Envelope</div>
                <div>• AlterID Sweep Loop</div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#2A4235] text-[9px] text-[#7CF2C2] flex items-center gap-1">
                <ShieldCheck className="w-2.5 h-2.5" />
                <span>Zero Incoming Ports</span>
              </div>
            </div>

          </div>

          {/* Pipeline connectors */}
          <div className="min-w-[820px] mt-6 pt-5 border-t border-[#2A4235] grid grid-cols-3 gap-4 text-[10px]">
            <div className="p-2.5 bg-[#12231C] border border-[#2A4235] rounded-xs flex items-center justify-between">
              <span className="text-[#D6E2D8]">1. JSON Sync</span>
              <div className="flex items-center gap-1 text-[#7CF2C2]">
                <span>REST / WSS</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
            <div className="p-2.5 bg-[#12231C] border border-[#2A4235] rounded-xs flex items-center justify-between">
              <span className="text-[#D6E2D8]">2. Aggregation &amp; Storage</span>
              <div className="flex items-center gap-1 text-[#7CF2C2]">
                <span>Sub-50ms</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
            <div className="p-2.5 bg-[#12231C] border border-[#2A4235] rounded-xs flex items-center justify-between">
              <span className="text-[#D6E2D8]">3. TDL XML Injection</span>
              <div className="flex items-center gap-1 text-[#7CF2C2]">
                <span>Port 9000</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Step Inspector */}
        <div className="p-4 sm:p-5 bg-[#0E1B15] border-t border-[#2A4235] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#1E3329] text-[#7CF2C2] border border-[#2A4235]">
                {activeStep.badge}
              </span>
              <h5 className="font-serif-display text-sm text-white font-medium">
                {activeStep.title}
              </h5>
            </div>
            <p className="text-xs text-[#89A799] max-w-2xl leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          <div className="flex gap-4 text-[10px] text-right shrink-0">
            <div>
              <span className="text-[#5E6F66] block">Latency</span>
              <span className="text-white font-mono-metric">{activeStep.latency}</span>
            </div>
            <div>
              <span className="text-[#5E6F66] block">Protocol</span>
              <span className="text-[#7CF2C2]">{activeStep.protocol}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
