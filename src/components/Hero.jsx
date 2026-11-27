import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import heroWebImg from '../assets/web_screenshots/02-receivables-aging.jpeg';
import heroMobImg from '../assets/screenshots/03-executive-dashboard.jpeg';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="hero-gradient text-white pt-16 sm:pt-24 pb-20 sm:pb-28 px-6 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Minimal Centered Copy */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/8 border border-white/15 text-[11px] font-medium tracking-wide text-[#7CF2C2] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7CF2C2] animate-pulse" />
            <span>Bidirectional TallyPrime Sync</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-tight leading-[1.06] text-white mb-5">
            Tally, <span className="italic text-[#7CF2C2]">everywhere</span> you work.
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed mb-8">
            Live financial statements, receivables aging, AI insights, and voucher posting across Web and Mobile.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onOpenDemo}
              className="btn-mint-gradient px-6 py-3 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Request Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#product-story"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-white/8 border border-white/15 text-white hover:bg-white/15 transition-colors inline-flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#7CF2C2]" />
              <span>Watch 80s Story</span>
            </a>
          </div>
        </div>

        {/* Real Product Media Stage (Desktop + Mobile Layered) */}
        <div className="mt-14 sm:mt-16 relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-white/20 to-white/5 shadow-[0_32px_90px_-20px_rgba(0,0,0,0.65)]">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-[#0B1612] border border-white/10">
              <div className="h-7 bg-[#112019] border-b border-white/10 px-4 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <img
                src={heroWebImg}
                alt="FinixBooks Web Desktop Interface"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

          {/* Floating Mobile Device Preview */}
          <div className="hidden md:block absolute -bottom-8 -right-4 lg:-right-8 w-52 lg:w-60 rounded-[28px] p-1.5 bg-gradient-to-b from-[#7CF2C2]/40 to-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
            <div className="rounded-[22px] overflow-hidden bg-[#0B1612] border border-white/15">
              <img
                src={heroMobImg}
                alt="FinixBooks Mobile Executive Dashboard"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
