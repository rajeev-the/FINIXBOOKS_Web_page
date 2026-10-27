import React from 'react'
import { ArrowUpRight, PhoneCall } from 'lucide-react'

export default function CtaSection({ onOpenDemo }) {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="demo">
      <div className="hairline-border bg-[#D6E2D8] p-8 sm:p-12 text-center max-w-xl mx-auto rounded-xs shadow-xs">
        <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1E3329] font-normal mb-2 tracking-tight">
          See your own Tally data in it.
        </h2>
        <p className="font-mono-fine text-xs text-[#5E6F66] max-w-sm mx-auto mb-6">
          Deploy the 15MB local relay agent in 90 seconds. No static IP or firewall changes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenDemo}
            className="btn-mint px-6 py-2.5 rounded-full text-xs font-mono-fine uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-xs group"
          >
            <span>Book Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href="tel:+9118003463569"
            className="text-[11px] font-mono-fine text-[#5E6F66] hover:text-[#1E3329] flex items-center gap-1 transition-colors"
          >
            <PhoneCall className="w-3 h-3" />
            1800-FIN-FLOW
          </a>
        </div>
      </div>
    </section>
  )
}
