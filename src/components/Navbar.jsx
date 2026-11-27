import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#091410]/85 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5 text-white">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7CF2C2] to-[#10B981] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#091410]" />
          </div>
          <span className="font-serif-display text-xl font-medium tracking-tight">FinixBooks</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-white/75">
          <a href="#product-story" className="hover:text-white transition-colors">
            Product Story
          </a>
          <a href="#app-showcase" className="hover:text-white transition-colors">
            Live Interface
          </a>
          <a href="#capabilities" className="hover:text-white transition-colors">
            Capabilities
          </a>
        </nav>

        <button
          onClick={onOpenDemo}
          className="btn-mint-gradient px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
        >
          <span>Request Demo</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}
