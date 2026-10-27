import React, { useState } from 'react'
import { RefreshCw, Copy, Check } from 'lucide-react'
import SyncStreamVisualizer from './SyncStreamVisualizer'

const VOUCHER_DATA = [
  {
    type: 'VOUCHER',
    title: 'Sharma Traders',
    ref: 'SV/24-25/2481',
    tag1: 'GST 18%',
    tag2: 'CREDIT',
    desc: 'Industrial valves & pipe fittings. Consignee: Apex Hub (Bhiwandi).',
    stat1: '₹1,24,500.00',
    stat1Label: 'Amount',
    stat2: 'Sundry Debtors',
    stat2Label: 'Ledger',
    stat3: 'Synced 2s ago',
    stat3Label: 'TallyPrime',
  },
  {
    type: 'LEDGER',
    title: 'Bharat Metals Ltd',
    ref: 'LC/24-25/089',
    tag1: 'SUPPLIER',
    tag2: 'TDS 194Q',
    desc: 'Raw material procurement. Credit 45 days. Reconciled with GSTR-2B.',
    stat1: '₹84,20,000.00',
    stat1Label: 'Turnover',
    stat2: 'Sundry Creditors',
    stat2Label: 'Group',
    stat3: 'Synced 1s ago',
    stat3Label: 'TallyPrime',
  },
  {
    type: 'STOCK ITEM',
    title: 'SKU-VALVE-402',
    ref: 'SKU-VALVE-402',
    tag1: 'HSN 8481',
    tag2: 'BHIWANDI',
    desc: 'Cast steel ball valve 2-inch. Opening qty: 450 Nos.',
    stat1: '₹12,82,500.00',
    stat1Label: 'Value',
    stat2: 'Finished Goods',
    stat2Label: 'Category',
    stat3: 'Synced 4s ago',
    stat3Label: 'TallyPrime',
  },
]

export default function Hero({ onOpenDemo }) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncStatus, setSyncStatus] = useState('Synced 2s ago')
  const [copied, setCopied] = useState(false)

  const activeVoucher = VOUCHER_DATA[selectedIdx]

  const handleManualSync = () => {
    setIsSyncing(true)
    setTimeout(() => {
      setIsSyncing(false)
      setSyncStatus('Just synced (0.2s)')
    }, 750)
  }

  const handleCopyRef = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-20 relative overflow-hidden animate-hero-enter">
      {/* Hero Headline Block */}
      <div className="text-center max-w-3xl mx-auto mb-10 pt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6E2D8] hairline-border text-[10px] uppercase font-mono-fine tracking-[0.16em] text-[#1E3329] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>DUAL-LEDGER RUNTIME · BIDIRECTIONAL TALLY REPLICATION</span>
        </div>

        <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#1E3329] leading-[1.12] mb-4 font-normal tracking-tight">
          Your books, beyond Tally —<br />
          <span className="italic">always in sync with it.</span>
        </h1>

        <p className="font-mono-fine text-xs sm:text-sm text-[#5E6F66] max-w-2xl mx-auto leading-relaxed">
          Mobile-first ERP that syncs live with TallyPrime — zero double-entry.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <a
            href="#features"
            className="btn-mint px-5 py-2.5 rounded-full text-xs font-mono-fine uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Explore 10 Key Modules</span>
          </a>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-full text-xs font-mono-fine uppercase tracking-wider hairline-border bg-[#D6E2D8] text-[#1E3329] hover:bg-[#E4EAE4] hover:border-[#1E3329] transition-all cursor-pointer shadow-xs"
          >
            Request Live Demo
          </button>
        </div>
      </div>

      {/* Enhanced Interactive Sinusoidal Stream Vector Stage */}
      <SyncStreamVisualizer onTriggerSync={handleManualSync} />

      {/* Authentic Printed Sales Voucher Card */}
      <div className="max-w-2xl mx-auto my-6">
        <div
          className="hairline-border bg-[#D6E2D8] p-5 sm:p-6 transition-all duration-300 relative shadow-xs rounded-xs"
          id="hero-voucher-card"
        >
          {/* Card Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 hairline-b">
            <div className="flex items-center gap-3">
              <span className="font-mono-fine text-xs uppercase tracking-wider text-[#1E3329] font-medium">
                {activeVoucher.title}
              </span>
              <span className="text-[#5E6F66] font-mono-fine text-xs">—</span>
              <button
                onClick={() => handleCopyRef(activeVoucher.ref)}
                className="font-mono-fine text-xs text-[#5E6F66] hover:text-[#1E3329] flex items-center gap-1 group cursor-pointer"
                title="Copy reference"
              >
                <span>{activeVoucher.ref}</span>
                {copied ? (
                  <Check className="w-3 h-3 text-[#1E3329]" />
                ) : (
                  <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] uppercase font-mono-fine hairline-border bg-[#E4EAE4] text-[#1E3329]">
                {activeVoucher.tag1}
              </span>
              <span className="px-2 py-0.5 text-[10px] uppercase font-mono-fine hairline-border bg-[#E4EAE4] text-[#1E3329] font-medium">
                {activeVoucher.tag2}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="py-4">
            <div className="text-[10px] uppercase font-mono-fine text-[#5E6F66] tracking-wider mb-1">
              Particulars
            </div>
            <div className="text-sm font-mono-fine text-[#1E3329] leading-relaxed">
              {activeVoucher.desc}
            </div>
          </div>

          {/* Card Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 hairline-t">
            <div className="sm:hairline-r sm:pr-2">
              <div className="text-[10px] uppercase font-mono-fine text-[#5E6F66]">
                {activeVoucher.stat1Label}
              </div>
              <div className="font-mono-metric text-lg text-[#1E3329] font-medium mt-0.5">
                {activeVoucher.stat1}
              </div>
            </div>
            <div className="sm:hairline-r sm:pr-2">
              <div className="text-[10px] uppercase font-mono-fine text-[#5E6F66]">
                {activeVoucher.stat2Label}
              </div>
              <div className="font-mono-fine text-sm text-[#1E3329] mt-0.5 font-medium">
                {activeVoucher.stat2}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono-fine text-[#5E6F66] flex items-center justify-between">
                <span>{activeVoucher.stat3Label}</span>
                <button
                  onClick={handleManualSync}
                  disabled={isSyncing}
                  className="hover:text-[#1E3329] transition-colors cursor-pointer"
                  title="Sync pulse"
                >
                  <RefreshCw
                    className={`w-3 h-3 ${isSyncing ? 'animate-spin text-[#1E3329]' : ''}`}
                  />
                </button>
              </div>
              <div className="font-mono-fine text-sm text-[#1E3329] flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full inline-block bg-[#10B981]"></span>
                <span>{isSyncing ? 'Syncing...' : syncStatus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Outlined Chips */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {VOUCHER_DATA.map((item, idx) => (
            <button
              key={item.type}
              onClick={() => {
                setSelectedIdx(idx)
                setSyncStatus(item.stat3)
              }}
              className={`px-3 py-1 text-[10px] uppercase font-mono-fine hairline-border transition-all cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-[#D6E2D8] text-[#1E3329] font-medium shadow-xs'
                  : 'bg-[#E4EAE4] text-[#5E6F66] hover:text-[#1E3329]'
              }`}
            >
              [{item.type}]
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
