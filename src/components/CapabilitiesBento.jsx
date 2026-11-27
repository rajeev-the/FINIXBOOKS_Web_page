import React from 'react';
import imgSync from '../assets/web_screenshots/18-sync-diagnostics.jpeg';
import imgAging from '../assets/web_screenshots/02-receivables-aging.jpeg';
import imgVoucher from '../assets/web_screenshots/07-voucher-entry-ocr.jpeg';
import imgAi from '../assets/web_screenshots/01-ai-insights.jpeg';

const CAPABILITIES = [
  {
    tag: '01 · Sync & Backfill',
    title: 'Bidirectional Tally Sync',
    caption: 'Live AlterID checkpoints and one-click legacy voucher backfilling.',
    img: imgSync,
    dark: false,
  },
  {
    tag: '02 · Cash Flow',
    title: '7-Bucket Aging & Reminders',
    caption: 'Track overdue bills and send WhatsApp or Email reminders in one tap.',
    img: imgAging,
    dark: true,
  },
  {
    tag: '03 · Posting Engine',
    title: '8-Type Vouchers + OCR',
    caption: 'Scan invoices to auto-fill drafts and post directly to TallyPrime.',
    img: imgVoucher,
    dark: false,
  },
  {
    tag: '04 · Intelligence & RBAC',
    title: 'Finix AI & Role Access',
    caption: 'Plain-English financial answers with company and route-level permissions.',
    img: imgAi,
    dark: false,
  },
];

export default function CapabilitiesBento() {
  return (
    <section className="surface-gradient py-20 sm:py-24 px-6 sm:px-8" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-2">
            Capabilities
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#112019] tracking-tight">
            Built for Chartered Accountants and finance teams.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-6 flex flex-col justify-between gap-5 overflow-hidden ${
                c.dark ? 'bento-card-dark text-white' : 'bento-card text-[#112019]'
              }`}
            >
              <div>
                <p
                  className={`text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${
                    c.dark ? 'text-[#7CF2C2]' : 'text-[#10B981]'
                  }`}
                >
                  {c.tag}
                </p>
                <h3 className="font-serif-display text-2xl font-normal mb-1">{c.title}</h3>
                <p className={`text-sm ${c.dark ? 'text-white/70' : 'text-[#51635A]'}`}>
                  {c.caption}
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-black/10 bg-[#091410]">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-56 object-cover object-top block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
