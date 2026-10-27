import React, { useState } from 'react'
import { Clock, ArrowRightLeft, TrendingUp, ShieldCheck, Check } from 'lucide-react'

const IMPACT_METRICS = [
  {
    id: 'turnaround',
    icon: Clock,
    metric: '80%',
    label: 'Faster Reporting',
    detail: 'Instant ledger access without waiting on accountants.',
    spec: 'Sub-50ms query cache',
  },
  {
    id: 'double-entry',
    icon: ArrowRightLeft,
    metric: '0',
    label: 'Manual Re-Entry',
    detail: 'Field mobile vouchers sync straight into Tally.',
    spec: 'Direct XML injection :9000',
  },
  {
    id: 'receivables',
    icon: TrendingUp,
    metric: '35%',
    label: 'Faster Collection',
    detail: 'Automated aging buckets with 1-tap WhatsApp reminders.',
    spec: 'Automated DSO reduction',
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    metric: '100%',
    label: 'Air-Gapped Safety',
    detail: 'Books stay local. Only encrypted deltas touch cloud.',
    spec: 'Zero open incoming ports',
  },
]

export default function MeasurableImpact() {
  const [selectedId, setSelectedId] = useState('turnaround')

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 hairline-t" id="impact">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-[10px] uppercase font-mono-fine tracking-widest text-[#5E6F66] font-medium block mb-1.5">
            MEASURABLE IMPACT
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1E3329] font-normal tracking-tight">
            Enterprise ROI. Quantified.
          </h2>
        </div>
        <div className="text-xs font-mono-fine text-[#5E6F66]">
          Production benchmarks across active enterprise ledgers.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {IMPACT_METRICS.map((item, idx) => {
          const Icon = item.icon
          const isSelected = selectedId === item.id

          return (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              style={{ transitionDelay: `${idx * 80}ms` }}
              className={`p-6 rounded-xs hairline-border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#1E3329] text-white shadow-sm'
                  : 'bg-[#D6E2D8] text-[#1E3329] hover:bg-[#DCE7DE]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 hairline-b border-current/15">
                  <div
                    className={`w-8 h-8 rounded-xs flex items-center justify-center ${
                      isSelected ? 'bg-[#7CF2C2]/20 text-[#7CF2C2]' : 'bg-[#E4EAE4] text-[#1E3329]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[9px] uppercase font-mono-fine tracking-wider px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-[#15231C] text-[#7CF2C2] border border-[#2A4235]'
                        : 'bg-[#E4EAE4] text-[#5E6F66]'
                    }`}
                  >
                    Verified
                  </span>
                </div>

                <div className="mt-4">
                  <div
                    className={`font-mono-metric text-4xl font-medium tracking-tight ${
                      isSelected ? 'text-[#7CF2C2]' : 'text-[#1E3329]'
                    }`}
                  >
                    {item.metric}
                  </div>
                  <div className="font-serif-display text-lg font-normal mt-1 leading-snug">
                    {item.label}
                  </div>
                  <p
                    className={`font-mono-fine text-xs mt-2 leading-relaxed ${
                      isSelected ? 'text-[#D6E2D8]/80' : 'text-[#5E6F66]'
                    }`}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3.5 hairline-t border-current/15 flex items-center justify-between text-[10px] font-mono-fine">
                <span className={isSelected ? 'text-[#7CF2C2]' : 'text-[#1E3329] font-medium'}>
                  {item.spec}
                </span>
                <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-[#7CF2C2]' : 'text-[#10B981]'}`} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
