import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import videoSrc from '../assets/video/finixbooks_story_80s.mp4';
import posterImg from '../assets/web_screenshots/02-receivables-aging.jpeg';

const CHAPTERS = [
  {
    id: 'sync',
    num: '01',
    title: 'Live Tally Sync',
    subtitle: 'Bidirectional replication with zero double-entry.',
    start: 0,
    end: 20,
  },
  {
    id: 'aging',
    num: '02',
    title: 'Receivables & Aging',
    subtitle: '7-bucket overdue tracking & instant reminders.',
    start: 20,
    end: 40,
  },
  {
    id: 'ocr',
    num: '03',
    title: 'OCR Voucher Posting',
    subtitle: 'Scan invoices and post across 8 voucher types.',
    start: 40,
    end: 60,
  },
  {
    id: 'ai',
    num: '04',
    title: 'Finix AI & RBAC',
    subtitle: 'Natural-language answers with role-scoped access.',
    start: 60,
    end: 85,
  },
];

export default function ProductVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(80);

  useEffect(() => {
    const el = sectionRef.current;
    const vid = videoRef.current;
    if (!el || !vid || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        } else {
          vid.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    const next = !isMuted;
    vid.muted = next;
    setIsMuted(next);
  };

  const jumpToChapter = (startSec) => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.currentTime = startSec;
    setCurrentTime(startSec);
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const activeIndex = Math.max(
    0,
    CHAPTERS.findIndex((c) => currentTime >= c.start && currentTime < c.end)
  );

  return (
    <section
      ref={sectionRef}
      className="surface-gradient py-20 sm:py-24 px-6 sm:px-8"
      id="product-story"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-2">
              Synced Walkthrough
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#112019] tracking-tight">
              Every workflow, in motion.
            </h2>
          </div>
          <p className="text-sm text-[#51635A] max-w-sm">
            Select a chapter to jump directly to that part of the live product flow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Chapter-Synced Interactive List */}
          <div className="lg:col-span-4 space-y-2.5 order-2 lg:order-1">
            {CHAPTERS.map((ch, idx) => {
              const isActive = idx === activeIndex;
              const segLen = Math.max(1, (idx === CHAPTERS.length - 1 ? duration : ch.end) - ch.start);
              const segProgress = isActive
                ? Math.min(100, Math.max(0, ((currentTime - ch.start) / segLen) * 100))
                : currentTime >= ch.end
                ? 100
                : 0;

              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => jumpToChapter(ch.start)}
                  className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-[#091410] text-white shadow-lg border border-[#7CF2C2]/25'
                      : 'bg-white/80 hover:bg-white text-[#112019] border border-[#112019]/8'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`text-[11px] font-semibold tracking-wider mt-0.5 tabular-nums ${
                        isActive ? 'text-[#7CF2C2]' : 'text-[#10B981]'
                      }`}
                    >
                      {ch.num}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug">{ch.title}</p>
                      <p
                        className={`text-xs mt-1 leading-relaxed ${
                          isActive ? 'text-white/70' : 'text-[#51635A]'
                        }`}
                      >
                        {ch.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Live Chapter Progress Bar */}
                  <div className="mt-3 h-0.5 w-full rounded-full bg-current/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#7CF2C2] to-[#10B981] transition-all duration-200"
                      style={{ width: `${segProgress}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Seamless Ambient Video Stage (No Bulky Chrome) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl p-1.5 bg-gradient-to-br from-[#162B22] via-[#091410] to-[#1E3F31] shadow-[0_30px_80px_-20px_rgba(9,20,16,0.45)] overflow-hidden group">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#091410] aspect-video">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={posterImg}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  onClick={togglePlay}
                  onTimeUpdate={() => videoRef.current && setCurrentTime(videoRef.current.currentTime)}
                  onLoadedMetadata={() =>
                    videoRef.current?.duration && setDuration(videoRef.current.duration)
                  }
                  className="w-full h-full object-cover cursor-pointer"
                />

                {/* Subtle Edge Blend */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091410]/45 via-transparent to-[#091410]/15" />

                {/* Minimal Corner Pills */}
                <div className="absolute bottom-3.5 right-3.5 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#091410]/75 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium hover:bg-[#091410] cursor-pointer"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                    <span>{isPlaying ? 'Live' : 'Paused'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#091410]/75 backdrop-blur-md border border-white/15 text-white text-[11px] font-medium hover:bg-[#091410] cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-3 h-3 text-[#7CF2C2]" /> : <Volume2 className="w-3 h-3 text-[#7CF2C2]" />}
                    <span>{isMuted ? 'Sound Off' : 'Sound On'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
