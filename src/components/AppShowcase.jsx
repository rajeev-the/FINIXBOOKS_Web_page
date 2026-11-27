import React, { useState, useEffect, useCallback } from 'react';
import { Monitor, Smartphone, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

import web01 from '../assets/web_screenshots/01-ai-insights.jpeg';
import web02 from '../assets/web_screenshots/02-receivables-aging.jpeg';
import web04 from '../assets/web_screenshots/04-daybook-register.jpeg';
import web05 from '../assets/web_screenshots/05-sales-register.jpeg';
import web07 from '../assets/web_screenshots/07-voucher-entry-ocr.jpeg';
import web08 from '../assets/web_screenshots/08-trial-balance.jpeg';
import web10 from '../assets/web_screenshots/10-balance-sheet.jpeg';
import web12 from '../assets/web_screenshots/12-gst-summary.jpeg';
import web13 from '../assets/web_screenshots/13-banking-cash.jpeg';
import web19 from '../assets/web_screenshots/19-rbac-users.jpeg';
import web20 from '../assets/web_screenshots/20-settings-backfill.jpeg';

import mob03 from '../assets/screenshots/03-executive-dashboard.jpeg';
import mob05 from '../assets/screenshots/05-receivables-payables.jpeg';
import mob06 from '../assets/screenshots/06-party-receivables-aging.jpeg';
import mob07 from '../assets/screenshots/07-digital-daybook.jpeg';
import mob08 from '../assets/screenshots/08-balance-sheet.jpeg';
import mob09 from '../assets/screenshots/09-trial-balance.jpeg';
import mob12 from '../assets/screenshots/12-sales-invoice-voucher.jpeg';
import mob13 from '../assets/screenshots/13-contra-bank-transfer.jpeg';

const WEB_SCREENS = [
  { id: 'w1', src: web02, title: 'Receivables & 7-Bucket Aging' },
  { id: 'w2', src: web08, title: 'Trial Balance' },
  { id: 'w3', src: web10, title: 'Balance Sheet' },
  { id: 'w4', src: web07, title: 'Voucher Entry & OCR Scan' },
  { id: 'w5', src: web01, title: 'Finix AI Insights' },
  { id: 'w6', src: web05, title: 'Sales Register' },
  { id: 'w7', src: web04, title: 'Digital Day Book' },
  { id: 'w8', src: web12, title: 'GST Summary & ITC' },
  { id: 'w9', src: web13, title: 'Banking & Cash Liquidity' },
  { id: 'w10', src: web19, title: 'Role-Based Access Control' },
  { id: 'w11', src: web20, title: 'Settings & Data Backfill' },
];

const MOBILE_SCREENS = [
  { id: 'm1', src: mob03, title: 'Executive KPI Dashboard' },
  { id: 'm2', src: mob06, title: 'Aging & WhatsApp Reminders' },
  { id: 'm3', src: mob05, title: 'Receivables & Payables' },
  { id: 'm4', src: mob12, title: 'Sales Invoice Voucher' },
  { id: 'm5', src: mob07, title: 'Digital Day Book' },
  { id: 'm6', src: mob08, title: 'Mobile Balance Sheet' },
  { id: 'm7', src: mob09, title: 'Group Trial Balance' },
  { id: 'm8', src: mob13, title: 'Contra & Bank Transfer' },
];

export default function AppShowcase() {
  const [platform, setPlatform] = useState('web');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const screens = platform === 'web' ? WEB_SCREENS : MOBILE_SCREENS;
  const active = screens[selectedIndex] || screens[0];

  const next = useCallback(() => {
    setSelectedIndex((i) => (i + 1) % screens.length);
  }, [screens.length]);

  const prev = useCallback(() => {
    setSelectedIndex((i) => (i - 1 + screens.length) % screens.length);
  }, [screens.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, next, prev]);

  return (
    <section className="py-20 sm:py-24 px-6 sm:px-8 bg-white border-y border-[#112019]/8" id="app-showcase">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-2">
              Live Interface
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#112019] tracking-tight">
              Web & Mobile in lockstep.
            </h2>
          </div>

          <div className="inline-flex p-1 rounded-full bg-[#EAF0EB] border border-[#112019]/10 self-start sm:self-auto">
            <button
              onClick={() => {
                setPlatform('web');
                setSelectedIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                platform === 'web'
                  ? 'bg-[#091410] text-[#7CF2C2] shadow-xs'
                  : 'text-[#51635A] hover:text-[#112019]'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Web Desktop</span>
            </button>
            <button
              onClick={() => {
                setPlatform('mobile');
                setSelectedIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                platform === 'mobile'
                  ? 'bg-[#091410] text-[#7CF2C2] shadow-xs'
                  : 'text-[#51635A] hover:text-[#112019]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile App</span>
            </button>
          </div>
        </div>

        {/* Main Viewer */}
        <div className="bento-card rounded-3xl p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3 mb-4 px-1">
            <p className="text-sm font-semibold text-[#112019]">{active.title}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-white border border-[#112019]/10 hover:bg-[#EAF0EB] cursor-pointer"
                aria-label="Previous screen"
              >
                <ChevronLeft className="w-4 h-4 text-[#112019]" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-white border border-[#112019]/10 hover:bg-[#EAF0EB] cursor-pointer"
                aria-label="Next screen"
              >
                <ChevronRight className="w-4 h-4 text-[#112019]" />
              </button>
              <button
                onClick={() => setLightboxOpen(true)}
                className="p-2 rounded-full bg-[#091410] text-[#7CF2C2] hover:opacity-90 cursor-pointer"
                aria-label="Expand screen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            onClick={() => setLightboxOpen(true)}
            className="rounded-2xl overflow-hidden bg-[#091410] border border-[#112019]/10 flex items-center justify-center cursor-zoom-in"
          >
            <img
              src={active.src}
              alt={active.title}
              className={
                platform === 'web'
                  ? 'w-full max-h-[540px] object-contain'
                  : 'h-[500px] w-auto object-contain py-4'
              }
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
            {screens.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setSelectedIndex(idx)}
                className={`shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  idx === selectedIndex
                    ? 'border-[#10B981] scale-[1.02]'
                    : 'border-transparent opacity-65 hover:opacity-100'
                }`}
              >
                <img
                  src={s.src}
                  alt={s.title}
                  className={platform === 'web' ? 'w-28 h-16 object-cover' : 'w-14 h-24 object-cover'}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#091410]/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={active.src}
            alt={active.title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
