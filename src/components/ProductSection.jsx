import React, { useState } from 'react'
import daybookWeb from '../assets/web_screenshots/04-daybook-register.jpeg'
import gstWeb from '../assets/web_screenshots/12-gst-summary.jpeg'
import ratiosWeb from '../assets/web_screenshots/11-financial-ratios.jpeg'

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
          <div className="max-w-xl">
            <span className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium block mb-1.5">
              DUAL-LEDGER ARTIFACT
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1E3329] font-normal tracking-tight">
              One ledger. Multi-platform. Zero re-entry.
            </h2>
            <p className="font-mono-fine text-xs text-[#5E6F66] mt-2 leading-relaxed">
              Eliminate day-end data entry bottlenecks. Field transactions stream seamlessly into desktop TallyPrime with immutable audit verification.
            </p>
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

        {/* 3 Authentic Web Portal Surface Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Card I */}
          <div className="hairline-border bg-[#E4EAE4] p-4 rounded-xs hover:border-[#1E3329]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/8] bg-black rounded-xs overflow-hidden mb-3 hairline-border">
                <img
                  src={daybookWeb}
                  alt="Digital Day Book Web"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="text-xs uppercase font-mono-fine font-medium text-[#1E3329]">
                Day Book Journal
              </div>
              <p className="text-xs font-mono-fine text-[#5E6F66] mt-1 leading-relaxed">
                Chronological register with MCA tamper-proof AlterID audit logging.
              </p>
            </div>
            <div className="pt-3 mt-3 hairline-t text-[10px] text-[#5E6F66] font-mono-fine flex justify-between">
              <span>Web Interface</span>
              <span className="text-[#1E3329] font-medium">Real-Time Sync</span>
            </div>
          </div>

          {/* Card II */}
          <div className="hairline-border bg-[#E4EAE4] p-4 rounded-xs hover:border-[#1E3329]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/8] bg-black rounded-xs overflow-hidden mb-3 hairline-border">
                <img
                  src={gstWeb}
                  alt="GST Tax Summary Web"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="text-xs uppercase font-mono-fine font-medium text-[#1E3329]">
                GST Compliance
              </div>
              <p className="text-xs font-mono-fine text-[#5E6F66] mt-1 leading-relaxed">
                Automated Output Tax, Input Tax Credit (ITC), and liability offset.
              </p>
            </div>
            <div className="pt-3 mt-3 hairline-t text-[10px] text-[#5E6F66] font-mono-fine flex justify-between">
              <span>Web Interface</span>
              <span className="text-[#1E3329] font-medium">100% Reconciled</span>
            </div>
          </div>

          {/* Card III */}
          <div className="hairline-border bg-[#E4EAE4] p-4 rounded-xs hover:border-[#1E3329]/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/8] bg-black rounded-xs overflow-hidden mb-3 hairline-border">
                <img
                  src={ratiosWeb}
                  alt="Financial Position & Ratios Web"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="text-xs uppercase font-mono-fine font-medium text-[#1E3329]">
                Financial Ratios
              </div>
              <p className="text-xs font-mono-fine text-[#5E6F66] mt-1 leading-relaxed">
                Automated liquidity, working capital, solvency, and profitability ratios.
              </p>
            </div>
            <div className="pt-3 mt-3 hairline-t text-[10px] text-[#5E6F66] font-mono-fine flex justify-between">
              <span>Web Interface</span>
              <span className="text-[#1E3329] font-medium">Dynamic Metrics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
