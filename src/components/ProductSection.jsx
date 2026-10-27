import React, { useState } from 'react'

export default function ProductSection() {
  const [deployment, setDeployment] = useState('cloud') // 'cloud' | 'onprem'

  const stats =
    deployment === 'cloud'
      ? {
          latency: '4.2s',
          latencyLabel: 'Sync Latency',
          coverage: '38 Vouchers',
          coverageLabel: 'Supported Schemas',
          reports: '6 Reports',
          reportsLabel: 'GST & MCA',
        }
      : {
          latency: '0.4s',
          latencyLabel: 'Sync Latency',
          coverage: '42 Vouchers',
          coverageLabel: 'Native Tally Classes',
          reports: '8 Reports',
          reportsLabel: 'Statutory Direct',
        }

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="product">
      <div className="p-6 sm:p-10 hairline-border bg-[#D6E2D8] rounded-xs shadow-xs">
        {/* Header with Segmented Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 hairline-b">
          <div>
            <span className="text-[10px] uppercase font-mono-fine tracking-widest text-[#5E6F66] font-medium block mb-1">
              DUAL-LEDGER RUNTIME
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1E3329] font-normal tracking-tight">
              One ledger. Multi-platform. Zero re-entry.
            </h2>
          </div>

          {/* Segmented Toggle */}
          <div className="inline-flex hairline-border p-1 bg-[#E4EAE4] rounded-xs self-start md:self-auto">
            <button
              onClick={() => setDeployment('cloud')}
              className={`px-3 py-1 text-[10px] uppercase font-mono-fine transition-all cursor-pointer ${
                deployment === 'cloud'
                  ? 'bg-[#D6E2D8] text-[#1E3329] font-medium shadow-xs'
                  : 'text-[#5E6F66] hover:text-[#1E3329]'
              }`}
            >
              Cloud Mesh
            </button>
            <button
              onClick={() => setDeployment('onprem')}
              className={`px-3 py-1 text-[10px] uppercase font-mono-fine transition-all cursor-pointer ${
                deployment === 'onprem'
                  ? 'bg-[#D6E2D8] text-[#1E3329] font-medium shadow-xs'
                  : 'text-[#5E6F66] hover:text-[#1E3329]'
              }`}
            >
              On-Premises
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-5 hairline-b font-mono-fine text-[#1E3329]">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-[#5E6F66]">{stats.latencyLabel}</span>
            <span className="text-xl sm:text-2xl mt-0.5 font-mono-metric font-medium">
              {stats.latency}
            </span>
          </div>

          <div className="flex flex-col sm:hairline-l sm:pl-6">
            <span className="text-[10px] uppercase text-[#5E6F66]">{stats.coverageLabel}</span>
            <span className="text-xl sm:text-2xl mt-0.5 font-mono-metric font-medium">
              {stats.coverage}
            </span>
          </div>

          <div className="flex flex-col sm:hairline-l sm:pl-6">
            <span className="text-[10px] uppercase text-[#5E6F66]">{stats.reportsLabel}</span>
            <span className="text-xl sm:text-2xl mt-0.5 font-mono-metric font-medium">
              {stats.reports}
            </span>
          </div>
        </div>

        {/* 3 Engraved Hatched Inline SVG Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Plate I */}
          <div className="hairline-border bg-[#E4EAE4] p-5 rounded-xs hover:border-[#1E3329]/40 transition-colors">
            <div className="h-32 flex items-center justify-center hairline-b pb-3 mb-3">
              <svg
                fill="none"
                height="80"
                stroke="#1E3329"
                strokeWidth="1"
                viewBox="0 0 120 100"
                width="96"
              >
                <rect height="70" rx="2" width="80" x="20" y="15" />
                <line x1="28" x2="28" y1="15" y2="85" />
                <line strokeDasharray="1 2" x1="20" x2="100" y1="25" y2="25" />
                <line x1="35" x2="92" y1="35" y2="35" />
                <line x1="35" x2="92" y1="43" y2="43" />
                <line x1="35" x2="80" y1="51" y2="51" />
                <line x1="35" x2="88" y1="59" y2="59" />
                <line x1="35" x2="70" y1="67" y2="67" />
                <path d="M58,15 L58,70 L63,65 L68,70 L68,15" fill="#D6E2D8" />
                <g strokeOpacity="0.35">
                  <line x1="22" x2="26" y1="18" y2="18" />
                  <line x1="22" x2="26" y1="22" y2="22" />
                  <line x1="22" x2="26" y1="26" y2="26" />
                  <line x1="22" x2="26" y1="30" y2="30" />
                  <line x1="22" x2="26" y1="34" y2="34" />
                  <line x1="22" x2="26" y1="38" y2="38" />
                </g>
              </svg>
            </div>
            <div className="text-xs uppercase font-mono-fine font-medium text-[#1E3329]">
              Plate I · The Ledger
            </div>
            <p className="text-xs font-mono-fine text-[#5E6F66] mt-1.5 leading-relaxed">
              Double-entry register with MCA audit logging.
            </p>
          </div>

          {/* Plate II */}
          <div className="hairline-border bg-[#E4EAE4] p-5 rounded-xs hover:border-[#1E3329]/40 transition-colors">
            <div className="h-32 flex items-center justify-center hairline-b pb-3 mb-3">
              <svg
                fill="none"
                height="80"
                stroke="#1E3329"
                strokeWidth="1"
                viewBox="0 0 120 100"
                width="96"
              >
                <circle cx="60" cy="50" r="38" />
                <circle cx="60" cy="50" r="34" strokeDasharray="2 2" />
                <circle cx="60" cy="50" r="28" />
                <path d="M60,22 L60,78 M32,50 L88,50" strokeOpacity="0.2" />
                <path d="M48,36 L48,64 M72,36 L72,64" strokeOpacity="0.2" />
                <text
                  fill="#1E3329"
                  fontFamily="Newsreader, serif"
                  fontSize="28"
                  stroke="none"
                  textAnchor="middle"
                  x="60"
                  y="58"
                >
                  ₹
                </text>
              </svg>
            </div>
            <div className="text-xs uppercase font-mono-fine font-medium text-[#1E3329]">
              Plate II · Rupee Seal
            </div>
            <p className="text-xs font-mono-fine text-[#5E6F66] mt-1.5 leading-relaxed">
              Automated TDS, TCS, IGST, and CGST splits.
            </p>
          </div>

          {/* Plate III */}
          <div className="hairline-border bg-[#E4EAE4] p-5 rounded-xs hover:border-[#1E3329]/40 transition-colors">
            <div className="h-32 flex items-center justify-center hairline-b pb-3 mb-3">
              <svg
                fill="none"
                height="80"
                stroke="#1E3329"
                strokeWidth="1"
                viewBox="0 0 120 100"
                width="96"
              >
                <rect height="70" width="70" x="25" y="15" />
                <rect height="14" width="60" x="30" y="22" />
                <circle cx="82" cy="29" fill="#1E3329" r="2" />
                <circle cx="75" cy="29" fill="#7CF2C2" r="2" />
                <rect height="14" width="60" x="30" y="42" />
                <circle cx="82" cy="49" fill="#1E3329" r="2" />
                <rect height="14" width="60" x="30" y="62" />
                <circle cx="82" cy="69" fill="#1E3329" r="2" />
                <g strokeOpacity="0.3">
                  <line x1="34" x2="60" y1="29" y2="29" />
                  <line x1="34" x2="54" y1="49" y2="49" />
                  <line x1="34" x2="64" y1="69" y2="69" />
                </g>
              </svg>
            </div>
            <div className="text-xs uppercase font-mono-fine font-medium text-[#1E3329]">
              Plate III · Sync Relay
            </div>
            <p className="text-xs font-mono-fine text-[#5E6F66] mt-1.5 leading-relaxed">
              15MB daemon on localhost:9000.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
