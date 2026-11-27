import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles } from 'lucide-react'
import videoSrc from '../assets/video/finixbooks_story_80s.mp4'

export default function ProductVideo() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const controlsTimeoutRef = useRef(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    const newMuted = !isMuted
    videoRef.current.muted = newMuted
    setIsMuted(newMuted)
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e) => {
    if (!videoRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    videoRef.current.currentTime = pos * duration
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen()
    }
  }

  const handleRestart = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    videoRef.current.play()
    setIsPlaying(true)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current)
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 2500)
    }
  }

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current)
    }
  }, [])

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-18 hairline-t" id="product-story">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>PRODUCT OVERVIEW</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1E3329] font-normal tracking-tight">
            See FinixBooks in 80 Seconds.
          </h2>
        </div>

        <div className="text-[11px] font-mono-fine text-[#5E6F66] self-start sm:self-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>Audio & Video Walkthrough</span>
        </div>
      </div>

      {/* Video Container Chassis */}
      <div className="bg-[#D6E2D8] hairline-border rounded-xs p-4 sm:p-7 shadow-sm">
        {/* Cinema Browser / Studio Chassis */}
        <div
          className="relative bg-[#080E0B] rounded-xs overflow-hidden shadow-2xl hairline-border ring-1 ring-white/10 group cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          {/* Top Bar */}
          <div className="px-4 py-2 bg-[#12231C] hairline-b flex items-center justify-between font-mono-fine text-[11px] text-[#89A799] select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E55353]/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5B553]/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#53E58D]/80"></span>
            </div>

            <div className="px-4 py-0.5 rounded-full bg-[#050B08] text-[#7CF2C2] text-[10px] font-mono-metric flex items-center gap-1.5">
              <span className="text-[#5E6F66]">finixbooks://</span>
              <span>product-story.mp4</span>
            </div>

            <div className="text-[10px] text-[#5E6F66] font-mono-metric">
              {formatTime(currentTime)} / {formatTime(duration || 80)}
            </div>
          </div>

          {/* HTML5 Video Element */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-contain"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
              playsInline
              preload="metadata"
            />

            {/* Big Play Overlay (when paused) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-[#0B1612]/45 backdrop-blur-[2px] flex items-center justify-center transition-opacity"
              >
                <div className="relative group/btn cursor-pointer">
                  <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#1E3329]/90 hairline-border text-[#7CF2C2] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-[#1E3329]">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono-fine text-white/90 bg-[#0B1612]/90 px-3 py-1 rounded-full hairline-border">
                    Watch Product Story (1m 20s)
                  </div>
                </div>
              </div>
            )}

            {/* Custom Control Bar (visible on hover or when paused) */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 transition-opacity duration-300 font-mono-fine ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Scrubbable Progress Bar */}
              <div
                onClick={handleSeek}
                className="relative w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer transition-all mb-3 group/bar"
              >
                <div
                  className="h-full bg-[#7CF2C2] rounded-full relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover/bar:opacity-100 transition-opacity"></span>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-3">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-[#7CF2C2]"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  {/* Restart */}
                  <button
                    onClick={handleRestart}
                    className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white/80 hover:text-white"
                    title="Restart"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  {/* Mute/Unmute */}
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white/80 hover:text-white"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-[#E55353]" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  {/* Time */}
                  <span className="text-[11px] font-mono-metric text-white/80 pl-1">
                    {formatTime(currentTime)} / {formatTime(duration || 80)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#7CF2C2]/80 bg-[#1E3329]/80 px-2.5 py-0.5 rounded-full hidden sm:inline-block">
                    FinixBooks Runtime
                  </span>
                  {/* Fullscreen */}
                  <button
                    onClick={handleFullscreen}
                    className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white/80 hover:text-white"
                    title="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
