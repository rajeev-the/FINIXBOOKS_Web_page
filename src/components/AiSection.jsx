import React, { useState } from 'react'
import { Plus, Minus, Sparkles, CheckCircle2 } from 'lucide-react'

const ACCORDION_ITEMS = [
  {
    id: 'ask',
    title: 'Ask your books',
    isQnA: true,
    question: 'Q: Net margin for Q3 after factoring unadjusted GST ITC?',
    answer: 'A: ₹38,14,200 (18.4%) · ₹2,10,000 pending in GSTR-2B.',
    reference: 'Vouchers SV/24-25/1900 to 2481.',
  },
  {
    id: 'bill-scan',
    title: 'Bill scan → draft voucher',
    isQnA: false,
    content: 'Extracts GSTIN, invoice date, and tax rates from vendor PDFs in 1.4s. Creates draft Purchase Vouchers for CA sign-off.',
  },
  {
    id: 'anomaly',
    title: 'Anomaly alerts',
    isQnA: false,
    content: 'Detects duplicate vendor bills, altered bank accounts, and out-of-sequence backdated vouchers automatically.',
  },
  {
    id: 'cash-flow',
    title: 'Cash-flow forecast',
    isQnA: false,
    content: '90-day cash projections modeling debtor clearing lags, supplier credit cycles, and statutory tax dates.',
  },
  {
    id: 'gst-2b',
    title: 'GST 2B reconciliation',
    isQnA: false,
    content: 'Line-by-line portal 2B matching against Tally purchase register, flagging unclaimed ITC.',
  },
]

export default function AiSection() {
  const [openIds, setOpenIds] = useState(['ask'])

  const toggleItem = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="ai">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <div className="text-[10px] uppercase font-mono-fine tracking-widest text-[#5E6F66] mb-1.5 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#1E3329]" />
            INTELLIGENCE
          </div>
          <h2 className="font-serif-display text-2xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
            Deterministic inference.
          </h2>
          <p className="font-mono-fine text-xs text-[#5E6F66] mt-2 leading-relaxed">
            Every answer links directly to verified voucher serials and HSN codes.
          </p>

          <div className="mt-5 p-3.5 hairline-border bg-[#D6E2D8] font-mono-fine text-xs text-[#1E3329] rounded-xs">
            <div className="text-[10px] uppercase text-[#5E6F66] mb-1 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#1E3329]" />
              AUDIT VERIFIED
            </div>
            Queries compile directly to relational SQL. Zero model training on your private books.
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 space-y-2">
          {ACCORDION_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id)
            return (
              <div
                key={item.id}
                className="hairline-border bg-[#D6E2D8] overflow-hidden rounded-xs transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-3.5 text-left font-mono-fine text-xs uppercase flex items-center justify-between text-[#1E3329] font-medium hover:bg-[#DCE7DE] transition-colors cursor-pointer"
                >
                  <span>{item.title}</span>
                  <span className="text-[#5E6F66]">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-3.5 hairline-t bg-[#E4EAE4] font-mono-fine text-xs leading-relaxed">
                    {item.isQnA ? (
                      <div>
                        <div className="text-[#5E6F66] text-[11px] mb-1">{item.question}</div>
                        <div className="text-[#1E3329] p-2.5 bg-[#D6E2D8] hairline-border rounded-xs">
                          <div className="font-medium">{item.answer}</div>
                          <div className="text-[10px] text-[#5E6F66] mt-0.5">
                            {item.reference}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-[#5E6F66]">{item.content}</p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
