import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import videoSrc from '../assets/video/finixbooks_story_80s.mp4';
import posterImg from '../assets/web_screenshots/02-receivables-aging.jpeg';

export default function ProductVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [preloadMode, setPreloadMode] = useState('metadata');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !isMuted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    videoRef.current.currentTime = pos * duration;
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 2400);
    }
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPreloadMode('auto');
          observer.disconnect();
        }
      },
      { rootMargin: '250px' }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      className="surface-gradient py-20 sm:py-24 px-6 sm:px-8"
      id="product-story"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-2">
              Product Film
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#112019] tracking-tight">
              See FinixBooks in 80 seconds.
            </h2>
          </div>
          <p className="text-sm text-[#51635A] max-w-sm">
            Real-time Tally replication, OCR voucher posting, and AI insights in one workflow.
          </p>
        </div>

        <div
          className="relative rounded-2xl sm:rounded-3xl p-1.5 bg-gradient-to-br from-[#162B22] via-[#0B1612] to-[#1E3F31] shadow-[0_30px_80px_-20px_rgba(9,20,16,0.45)] overflow-hidden group"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#091410] aspect-video">
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterImg}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
              onTimeUpdate={() => videoRef.current && setCurrentTime(videoRef.current.currentTime)}
              onLoadedMetadata={() => videoRef.current && setDuration(videoRef.current.duration)}
              onEnded={() => {
                setIsPlaying(false);
                setShowControls(true);
              }}
              playsInline
              preload={preloadMode}
            />

            {!isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Play product video"
                className="absolute inset-0 flex items-center justify-center bg-[#091410]/45 backdrop-blur-[2px] cursor-pointer"
              >
                <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full btn-mint-gradient flex items-center justify-center shadow-2xl">
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </span>
              </button>
            )}

            <div
              className={`absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[#091410]/95 via-[#091410]/65 to-transparent transition-opacity duration-300 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                onClick={handleSeek}
                className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-3 overflow-hidden"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#7CF2C2] to-[#10B981] rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <button
                    onClick={handleRestart}
                    className="p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                    aria-label="Restart"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="tabular-nums text-white/75">
                    {formatTime(currentTime)} / {formatTime(duration || 80)}
                  </span>
                </div>

                <button
                  onClick={handleFullscreen}
                  className="p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
