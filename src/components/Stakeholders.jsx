import React, { useState } from 'react'

const ROLE_CONFIGS = {
  accountant: {
    title: 'Senior Accountant',
    desc: 'Keyboard shortcuts (Alt+G, F2, F8), dot-matrix printing, and offline voucher queueing.',
    mode: 'Keyboard Buffer',
    sync: '1.8s Sync',
    storage: 'SQLite Spool',
  },
  owner: {
    title: 'Business Owner',
    desc: 'Consolidated cash balances, overdue debtor aging, and instant mobile voucher approvals.',
    mode: 'Mobile & Web',
    sync: '2s Push',
    storage: 'Cloud Cache',
  },
  ca: {
    title: 'CA Audit Firm',
    desc: 'Multi-client ledger access, automated GSTR-2B matching, and immutable audit trail exports.',
    mode: 'Multi-Tenant',
    sync: 'Read-Only',
    storage: 'MCA Archival',
  },
}

export default function Stakeholders() {
  const [activeRole, setActiveRole] = useState('accountant')
  const current = ROLE_CONFIGS[activeRole]

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t">
      {/* Header */}
      {/* Header with Eyebrow, Main Heading & Informative Subheading */}
      <div className="max-w-3xl mb-10">
        <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-pulse"></span>
          ROLE-BASED WORKFLOW SPECIALIZATION
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
          Tailored for each financial stakeholder.
        </h2>
        <p className="font-mono-fine text-xs sm:text-sm text-[#5E6F66] mt-2.5 leading-relaxed">
          Dedicated operational views optimized for the keyboard shortcuts of senior accountants, the mobile oversight of business owners, and the compliance requirements of CA firms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Interactive Card */}
        <div className="lg:col-span-5">
          <div className="hairline-border p-6 bg-[#D6E2D8] rounded-xs shadow-xs">
            <span className="text-[10px] uppercase font-mono-fine text-[#5E6F66] tracking-wider block mb-1">
              ROLE VIEW
            </span>
            <h3 className="font-serif-display text-2xl text-[#1E3329] font-normal">
              {current.title}
            </h3>
            <p className="font-mono-fine text-xs text-[#5E6F66] mt-2 leading-relaxed">
              {current.desc}
            </p>

            <div className="mt-5 pt-4 hairline-t space-y-2 font-mono-fine text-xs text-[#1E3329]">
              <div className="flex justify-between items-center">
                <span className="text-[#5E6F66]">Input Mode</span>
                <span className="font-medium">{current.mode}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5E6F66]">Replication</span>
                <span className="font-medium">{current.sync}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5E6F66]">Offline Storage</span>
                <span className="font-medium">{current.storage}</span>
              </div>
            </div>

            {/* Role switchers */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                { id: 'accountant', label: 'Accountant' },
                { id: 'owner', label: 'Founder' },
                { id: 'ca', label: 'CA Firm' },
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActiveRole(r.id)}
                  className={`px-3 py-1 text-[10px] font-mono-fine uppercase hairline-border transition-all cursor-pointer rounded-xs ${
                    activeRole === r.id
                      ? 'bg-[#1E3329] text-white font-medium border-[#1E3329]'
                      : 'bg-[#E4EAE4] text-[#5E6F66] hover:text-[#1E3329]'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right 2x2 Grid Steps */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="hairline-border bg-[#D6E2D8] p-5 rounded-xs">
            <div className="text-[10px] font-mono-fine text-[#5E6F66] font-medium">1. CONNECT</div>
            <h4 className="font-serif-display text-lg text-[#1E3329] mt-1 mb-1 font-normal">
              Local Relay
            </h4>
            <p className="font-mono-fine text-xs text-[#5E6F66] leading-relaxed">
              15MB daemon attached to localhost:9000. Zero inbound open ports.
            </p>
          </div>

          <div className="hairline-border bg-[#D6E2D8] p-5 rounded-xs">
            <div className="text-[10px] font-mono-fine text-[#5E6F66] font-medium">2. RECONCILE</div>
            <h4 className="font-serif-display text-lg text-[#1E3329] mt-1 mb-1 font-normal">
              Hierarchy Sync
            </h4>
            <p className="font-mono-fine text-xs text-[#5E6F66] leading-relaxed">
              Syncs chart of accounts, godowns, and statutory tax rates.
            </p>
          </div>

          <div className="hairline-border bg-[#D6E2D8] p-5 rounded-xs">
            <div className="text-[10px] font-mono-fine text-[#5E6F66] font-medium">3. DISPATCH</div>
            <h4 className="font-serif-display text-lg text-[#1E3329] mt-1 mb-1 font-normal">
              Distributed Entry
            </h4>
            <p className="font-mono-fine text-xs text-[#5E6F66] leading-relaxed">
              Field agents and counter kiosks write vouchers without write locks.
            </p>
          </div>

          <div className="hairline-border bg-[#D6E2D8] p-5 rounded-xs">
            <div className="text-[10px] font-mono-fine text-[#5E6F66] font-medium">4. AUDIT</div>
            <h4 className="font-serif-display text-lg text-[#1E3329] mt-1 mb-1 font-normal">
              Continuous Audit
            </h4>
            <p className="font-mono-fine text-xs text-[#5E6F66] leading-relaxed">
              SHA-256 voucher checksums matching Daybook chronologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
