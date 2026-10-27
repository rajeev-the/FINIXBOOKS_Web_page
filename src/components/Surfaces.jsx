import React from 'react'

export default function Surfaces() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="platforms">
      {/* Header with Eyebrow, Main Heading & Informative Subheading */}
      <div className="max-w-3xl mb-10">
        <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-pulse"></span>
          MULTI-DEVICE SURFACES
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
          Authentic native interfaces.
        </h2>
        <p className="font-mono-fine text-xs sm:text-sm text-[#5E6F66] mt-2.5 leading-relaxed">
          High-density financial layouts designed for tabular numeral scanning — whether reviewing trial balances in Chrome, daybooks on Windows, or overdue aging on mobile.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Frame 1: Browser Trial Balance */}
        <div className="hairline-border bg-[#D6E2D8] overflow-hidden rounded-xs shadow-xs flex flex-col justify-between">
          <div>
            <div className="hairline-b bg-[#E4EAE4] px-4 py-2 flex items-center justify-between text-[10px] font-mono-fine text-[#5E6F66]">
              <span className="font-medium text-[#1E3329]">CHROME / HTTPS</span>
              <span className="uppercase">TRIAL BALANCE</span>
            </div>
            <div className="p-4 font-mono-fine text-xs">
              <div className="text-sm font-medium text-[#1E3329]">Sharma Engineering Ltd.</div>
              <div className="text-[10px] text-[#5E6F66] mb-3">FY 2024-25 • 31-Oct-2024</div>

              <div className="space-y-2 hairline-t pt-2.5">
                <div className="flex justify-between text-[#5E6F66] text-[9px] uppercase tracking-wider pb-0.5">
                  <span>PARTICULARS</span>
                  <span>DEBIT / CREDIT</span>
                </div>
                <div className="flex justify-between text-[#1E3329]">
                  <span>Capital Account</span>
                  <span className="font-mono-metric font-medium">Cr ₹1,50,00,000</span>
                </div>
                <div className="flex justify-between text-[#1E3329]">
                  <span>Current Assets</span>
                  <span className="font-mono-metric font-medium">Dr ₹3,14,28,400</span>
                </div>
                <div className="flex justify-between text-[#1E3329]">
                  <span>Sundry Debtors</span>
                  <span className="font-mono-metric font-medium">Dr ₹1,24,91,000</span>
                </div>
                <div className="flex justify-between text-[#1E3329]">
                  <span>Duties &amp; Taxes</span>
                  <span className="font-mono-metric font-medium">Dr ₹43,00,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 pt-0">
            <div className="hairline-t pt-2.5 flex justify-between font-medium text-[#1E3329] font-mono-fine text-xs">
              <span className="text-[10px] uppercase">BALANCED</span>
              <span className="font-mono-metric text-sm">₹4,82,19,400</span>
            </div>
          </div>
        </div>

        {/* Frame 2: Windows Day Book */}
        <div className="hairline-border bg-[#D6E2D8] overflow-hidden rounded-xs shadow-xs flex flex-col justify-between">
          <div>
            <div className="hairline-b bg-[#E4EAE4] px-4 py-2 flex items-center justify-between text-[10px] font-mono-fine text-[#5E6F66]">
              <span className="font-medium text-[#1E3329]">WIN32 CLIENT v4.1</span>
              <span className="uppercase">DAY BOOK</span>
            </div>
            <div className="p-4 font-mono-fine text-xs">
              <div className="text-sm font-medium text-[#1E3329]">Apex Hub (Bhiwandi)</div>
              <div className="text-[10px] text-[#5E6F66] mb-3">24-Oct-2024</div>

              <div className="space-y-2.5 hairline-t pt-2.5">
                <div>
                  <div className="flex justify-between text-[#1E3329]">
                    <span className="text-[#5E6F66]">SV/24-25/1102</span>
                    <span className="font-mono-metric font-medium">₹4,82,000.00</span>
                  </div>
                  <div className="text-[10px] text-[#5E6F66]">Sales · Tata Autocomp</div>
                </div>

                <div className="hairline-t pt-1.5">
                  <div className="flex justify-between text-[#1E3329]">
                    <span className="text-[#5E6F66]">PV/24-25/0891</span>
                    <span className="font-mono-metric font-medium">₹1,18,400.00</span>
                  </div>
                  <div className="text-[10px] text-[#5E6F66]">Payment · Indian Oil Fleet</div>
                </div>

                <div className="hairline-t pt-1.5">
                  <div className="flex justify-between text-[#1E3329]">
                    <span className="text-[#5E6F66]">RC/24-25/0421</span>
                    <span className="font-mono-metric font-medium">₹3,40,000.00</span>
                  </div>
                  <div className="text-[10px] text-[#5E6F66]">Receipt · HDFC Current</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 pt-0">
            <div className="hairline-t pt-2.5 flex justify-between text-[10px] text-[#5E6F66] font-mono-fine">
              <span className="uppercase">STATUS</span>
              <span className="text-[#1E3329] font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                18 Vouchers Posted
              </span>
            </div>
          </div>
        </div>

        {/* Frame 3: Mobile Receivables */}
        <div className="hairline-border bg-[#D6E2D8] overflow-hidden rounded-xs shadow-xs flex flex-col justify-between">
          <div>
            <div className="hairline-b bg-[#E4EAE4] px-4 py-2 flex items-center justify-between text-[10px] font-mono-fine text-[#5E6F66]">
              <span className="font-medium text-[#1E3329]">MOBILE (PWA / IOS)</span>
              <span className="uppercase">RECEIVABLES</span>
            </div>
            <div className="p-4 font-mono-fine text-xs">
              <div className="text-sm font-medium text-[#1E3329]">Overdue (&gt;90d)</div>
              <div className="text-[10px] text-[#5E6F66] mb-3">Risk Matrix</div>

              <div className="space-y-2.5 hairline-t pt-2.5">
                <div className="hairline-b pb-1.5">
                  <div className="flex justify-between text-[#1E3329] font-medium">
                    <span>Balaji Steel Pipes</span>
                    <span className="font-mono-metric">₹14,50,000</span>
                  </div>
                  <div className="text-[10px] text-[#5E6F66]">114 days</div>
                </div>

                <div className="hairline-b pb-1.5">
                  <div className="flex justify-between text-[#1E3329] font-medium">
                    <span>Krishna Auto</span>
                    <span className="font-mono-metric">₹8,20,400</span>
                  </div>
                  <div className="text-[10px] text-[#5E6F66]">92 days</div>
                </div>

                <div>
                  <div className="flex justify-between text-[#1E3329] font-medium">
                    <span>Southern Freight</span>
                    <span className="font-mono-metric">₹6,15,000</span>
                  </div>
                  <div className="text-[10px] text-[#5E6F66]">98 days</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 pt-0">
            <div className="hairline-t pt-2.5 flex justify-between text-[10px] text-[#5E6F66] font-mono-fine">
              <span className="uppercase">TOTAL OVERDUE</span>
              <span className="text-[#1E3329] font-medium font-mono-metric text-sm">
                ₹28,85,400
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
