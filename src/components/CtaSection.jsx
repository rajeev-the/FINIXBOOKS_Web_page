import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaSection({ onOpenDemo }) {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 bg-[#F4F7F4]">
      <div className="max-w-5xl mx-auto cta-gradient rounded-3xl p-10 sm:p-14 text-center text-white shadow-[0_24px_70px_-20px_rgba(9,20,16,0.5)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7CF2C2] mb-3">
          Get Started
        </p>
        <h2 className="font-serif-display text-3xl sm:text-5xl font-normal tracking-tight mb-4">
          Run your books from anywhere.
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto mb-8">
          Connect TallyPrime in minutes with zero double-entry.
        </p>
        <button
          onClick={onOpenDemo}
          className="btn-mint-gradient px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Request Live Demo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
