import React from 'react'
import { Shield, Key, FileCheck, RefreshCw, Server, Unlock } from 'lucide-react'

const SECURITY_SPECS = [
  {
    icon: Key,
    category: 'CIPHER',
    title: 'AES-256-GCM',
    desc: 'Encrypted at rest and in transit via TLS 1.3 with key rotation.',
  },
  {
    icon: Shield,
    category: 'ACCESS',
    title: 'Granular RBAC',
    desc: 'Role-based controls across ledgers, rates, and cost centers.',
  },
  {
    icon: FileCheck,
    category: 'COMPLIANCE',
    title: 'MCA Audit Trail',
    desc: 'Immutable append-only log with system timestamps.',
  },
  {
    icon: RefreshCw,
    category: 'RECOVERY',
    title: 'Delta Snapshots',
    desc: 'Hourly incremental backups with 15-minute RPO.',
  },
  {
    icon: Server,
    category: 'RESIDENCY',
    title: 'Mumbai MeitY DC',
    desc: 'Tier-IV sovereign infrastructure in Central India.',
  },
  {
    icon: Unlock,
    category: 'PORTABILITY',
    title: 'Zero Lock-In',
    desc: 'Company files remain 100% native Tally XML.',
  },
]

export default function SecurityMatrix() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="security">
      {/* Header with Eyebrow, Main Heading & Informative Subheading */}
      <div className="max-w-3xl mb-10">
        <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-pulse"></span>
          AIR-GAPPED COMPLIANCE &amp; CIPHERS
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
          Enterprise security specifications.
        </h2>
        <p className="font-mono-fine text-xs sm:text-sm text-[#5E6F66] mt-2.5 leading-relaxed">
          Sovereign on-premise protection with zero open inbound firewall ports, AES-256-GCM encryption at rest, and immutable MCA 2023 tamper-evident audit logs.
        </p>
      </div>

      <div className="hairline-border bg-[#D6E2D8] p-6 sm:p-8 font-mono-fine text-xs rounded-xs shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECURITY_SPECS.map((spec, idx) => {
            const Icon = spec.icon
            return (
              <div
                key={idx}
                style={{ transitionDelay: `${idx * 60}ms` }}
                className="hairline-border bg-[#E4EAE4] p-4 rounded-xs flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 hairline-b">
                    <span className="text-[9px] uppercase font-mono-fine text-[#5E6F66] font-medium tracking-wider">
                      {spec.category}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-[#1E3329]" />
                  </div>
                  <div className="text-[#1E3329] font-medium mt-2 text-xs">
                    {spec.title}
                  </div>
                  <p className="text-[#5E6F66] text-[11px] mt-1 leading-relaxed">{spec.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
