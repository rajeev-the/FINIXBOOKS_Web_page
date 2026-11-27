import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[#112019]/10 bg-[#F4F7F4] py-8 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#51635A]">
        <div className="flex items-center gap-2">
          <span className="font-serif-display text-base text-[#112019] font-medium">FinixBooks</span>
          <span>·</span>
          <span>Enterprise Tally Connector ERP</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#product-story" className="hover:text-[#112019] transition-colors">
            Film
          </a>
          <a href="#app-showcase" className="hover:text-[#112019] transition-colors">
            Interface
          </a>
          <a href="#capabilities" className="hover:text-[#112019] transition-colors">
            Capabilities
          </a>
        </div>
      </div>
    </footer>
  );
}
