import React, { useState } from 'react'
import { Check } from 'lucide-react'

const CURRENT_YEAR = 2025

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 4000)
      setEmail('')
    }
  }

  return (
    <footer className="relative z-10 w-full bg-[#0B1612] text-[#89A799] font-mono-fine text-xs pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1A2E26]">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-serif-display text-2xl text-[#E4EAE4] tracking-tight font-normal">
              LEDGERFLOW
            </div>
            <p className="text-xs text-[#89A799] max-w-sm leading-relaxed">
              Dual-ledger runtime for Indian enterprise accounting. Bidirectional replication to
              TallyPrime with MCA tamper-proof audit compliance.
            </p>

            {/* Newsletter */}
            <div className="pt-2 max-w-sm">
              <div className="text-[10px] uppercase text-[#6B8C7E] tracking-wider mb-2 font-medium">
                STATUTORY &amp; PRODUCT ADVISORIES
              </div>
              <form onSubmit={handleSubmit} className="flex items-center border-b border-[#2B4B3D] py-1.5">
                <input
                  className="bg-transparent w-full text-xs text-[#E4EAE4] placeholder-[#4B6B5D] focus:outline-none"
                  placeholder="cfo@enterprise.in"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="text-[11px] text-[#7CF2C2] uppercase font-medium pl-2 cursor-pointer hover:underline"
                  type="submit"
                >
                  {subscribed ? (
                    <span className="flex items-center gap-1 text-[#7CF2C2]">
                      <Check className="w-3.5 h-3.5" /> Subscribed
                    </span>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-2 space-y-2">
            <div className="text-[10px] uppercase text-[#E4EAE4] tracking-widest font-medium mb-3">
              PLATFORM
            </div>
            <ul className="space-y-2 text-xs text-[#89A799]">
              <li>
                <a className="hover:text-[#7CF2C2] transition-colors" href="#features">
                  10 Key Modules
                </a>
              </li>
              <li>
                <a className="hover:text-[#7CF2C2] transition-colors" href="#technical-highlights">
                  Case Study (Tech)
                </a>
              </li>
              <li>
                <a className="hover:text-[#7CF2C2] transition-colors" href="#repositories">
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a className="hover:text-[#7CF2C2] transition-colors" href="#platforms">
                  Flutter &amp; Web Surfaces
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-2 space-y-2">
            <div className="text-[10px] uppercase text-[#E4EAE4] tracking-widest font-medium mb-3">
              COMPLIANCE
            </div>
            <ul className="space-y-2 text-xs text-[#89A799]">
              <li>
                <a className="hover:text-[#7CF2C2] transition-colors" href="#security">
                  MCA Audit Trail
                </a>
              </li>
              <li>
                <a className="hover:text-[#7CF2C2] transition-colors" href="#security">
                  GSTR-2B Matching
                </a>
              </li>
              <li>
                <a className="hover:text-[#7CF2C2] transition-colors" href="#security">
                  E-Invoice IRP Direct
                </a>
              </li>
              <li>
                <a className="hover:text-[#7CF2C2] transition-colors" href="#security">
                  AES-256 Storage
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] uppercase text-[#E4EAE4] tracking-widest font-medium mb-3">
              CERTIFICATION
            </div>
            <p className="text-xs text-[#89A799] leading-relaxed">
              SOC-2 Type II Attested. MeitY-empanelled Tier-IV datacenter residency in Mumbai (Central
              India).
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase border border-[#203D32] bg-[#12231C] text-[#7CF2C2] rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7CF2C2] pulse-led"></span>
              Zero Disruption Deployment
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] text-[#6B8C7E]">
          <div>© {CURRENT_YEAR} LedgerFlow Technologies Inc. All rights reserved.</div>
          <div className="max-w-xl text-left md:text-right text-[#577266]">
            Tally and TallyPrime are trademarks of Tally Solutions Pvt. Ltd. LedgerFlow is an
            independent enterprise system and is not affiliated with or endorsed by Tally Solutions.
          </div>
        </div>
      </div>
    </footer>
  )
}
