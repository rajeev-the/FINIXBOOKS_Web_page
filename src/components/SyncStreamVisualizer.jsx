import React, { useState, useEffect } from 'react'
import { Server, Monitor, Zap } from 'lucide-react'

export default function SyncStreamVisualizer({ onTriggerSync }) {
  const [speed, setSpeed] = useState('normal') // 'normal' | 'burst'
  const [alterId, setAlterId] = useState(104982)
  const [packetsCount, setPacketsCount] = useState(2480)
  const [isSurge, setIsSurge] = useState(false)

  // Subtle real-time increment to make it feel alive
  useEffect(() => {
    const interval = setInterval(() => {
      setPacketsCount((prev) => prev + (speed === 'burst' ? 5 : 1))
      if (Math.random() > 0.6) {
        setAlterId((prev) => prev + 1)
      }
    }, speed === 'burst' ? 500 : 1500)
    return () => clearInterval(interval)
  }, [speed])

  const handleBurstTrigger = () => {
    setIsSurge(true)
    setSpeed('burst')
    if (onTriggerSync) onTriggerSync()
    setTimeout(() => {
      setIsSurge(false)
      setSpeed('normal')
    }, 4000)
  }

  const dashClass = speed === 'burst' ? 'stream-dash-fast' : 'stream-dash'

  return (
    <div className="relative w-full max-w-5xl mx-auto my-6 font-mono-fine">
      {/* Top Header Labels Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-between text-[11px] uppercase tracking-wider text-[#5E6F66] px-2 mb-2">
        {/* Left: Tally Node */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-xs bg-[#D6E2D8] hairline-border flex items-center justify-center text-[#1E3329]">
            <Server className="w-3 h-3" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#1E3329] font-medium">TallyPrime</span>
            <span className="text-[10px] text-[#5E6F66]">
              #{alterId.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Center: Sync Pipe Engine */}
        <div className="flex items-center justify-center gap-2 text-center text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-led"></span>
          <span className="text-[#1E3329] font-medium">Deterministic Pipe</span>
          <span className="text-[#5E6F66]">0.18s · {packetsCount.toLocaleString()} pkts</span>
        </div>

        {/* Right: Remote Surfaces */}
        <div className="flex items-center justify-start md:justify-end gap-2">
          <span className="text-[#1E3329] font-medium text-[11px]">
            Web · Desktop · Mobile
          </span>
          <div className="w-5 h-5 rounded-xs bg-[#D6E2D8] hairline-border flex items-center justify-center text-[#1E3329]">
            <Monitor className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Main Animated Vector Stage Canvas */}
      <div className="w-full relative overflow-hidden hairline-border bg-[#0B1612] text-white rounded-xs shadow-md">
        {/* Micro Grid Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        {/* Corner coordinates */}
        <div className="absolute top-2 left-3 text-[9px] text-[#6B8C7E] tracking-widest pointer-events-none select-none">
          LOC: 127.0.0.1:9000/XML
        </div>
        <div className="absolute top-2 right-3 text-[9px] text-[#6B8C7E] tracking-widest pointer-events-none select-none">
          DEST: HTTPS://CLOUD.FINIXBOOKS.IN
        </div>

        {/* SVG Carrier Waves & Flowing Laser Particles */}
        <svg
          className="w-full h-28 sm:h-32 block"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1000 120"
        >
          <defs>
            {/* Emerald Outbound Gradient */}
            <linearGradient id="outboundGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#7CF2C2" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>

            {/* Cyan Return Inbound Gradient */}
            <linearGradient id="inboundGlow" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#4CD7F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>

            {/* Radial glow for center nexus */}
            <radialGradient id="nexusRadial">
              <stop offset="0%" stopColor="#7CF2C2" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0B1612" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Static Fine Banknote Etched Carrier Lines */}
          <g stroke="#89A799" strokeOpacity="0.12" strokeWidth="1">
            <path d="M0,20 C250,20 350,60 500,60 C650,60 750,20 1000,20" />
            <path d="M0,36 C250,36 350,60 500,60 C650,60 750,36 1000,36" />
            <path d="M0,52 C250,52 350,60 500,60 C650,60 750,52 1000,52" />
            <path d="M0,68 C250,68 350,60 500,60 C650,60 750,68 1000,68" />
            <path d="M0,84 C250,84 350,60 500,60 C650,60 750,84 1000,84" />
            <path d="M0,100 C250,100 350,60 500,60 C650,60 750,100 1000,100" />
          </g>

          {/* Dynamic Oscillating Carrier Waves */}
          <g stroke="#7CF2C2" strokeOpacity="0.25" strokeWidth="1.2">
            <path
              className="drift-line"
              d="M0,24 C250,24 350,60 500,60 C650,60 750,24 1000,24"
            />
            <path
              className="drift-line"
              d="M0,96 C250,96 350,60 500,60 C650,60 750,96 1000,96"
            />
          </g>

          {/* Active Flowing Laser Dashed Streams (Forward: Tally -> Cloud) */}
          <path
            d="M0,40 C250,40 350,60 500,60 C650,60 750,40 1000,40"
            fill="none"
            stroke="url(#outboundGlow)"
            strokeWidth="2"
            className={dashClass}
          />

          <path
            d="M0,60 C250,60 350,60 500,60 C650,60 750,60 1000,60"
            fill="none"
            stroke="#7CF2C2"
            strokeOpacity="0.75"
            strokeWidth="1.5"
            className={dashClass}
          />

          {/* Reverse Flowing Laser Dashed Stream (Inbound: Cloud -> Tally Ack) */}
          <path
            d="M1000,80 C750,80 650,60 500,60 C350,60 250,80 0,80"
            fill="none"
            stroke="url(#inboundGlow)"
            strokeWidth="2"
            className="stream-dash-reverse"
          />

          {/* Floating Data Packet 1: Outbound Voucher Delta (Left to Right) */}
          <g>
            <circle r="4" fill="#7CF2C2">
              <animateMotion
                path="M0,40 C250,40 350,60 500,60 C650,60 750,40 1000,40"
                dur={speed === 'burst' ? '1.5s' : '3.8s'}
                repeatCount="indefinite"
              />
            </circle>
            <circle r="8" stroke="#7CF2C2" strokeOpacity="0.4" strokeWidth="1">
              <animateMotion
                path="M0,40 C250,40 350,60 500,60 C650,60 750,40 1000,40"
                dur={speed === 'burst' ? '1.5s' : '3.8s'}
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Floating Data Packet 2: Staggered Outbound Voucher */}
          <g>
            <circle r="3.5" fill="#10B981">
              <animateMotion
                path="M0,60 C250,60 350,60 500,60 C650,60 750,60 1000,60"
                dur={speed === 'burst' ? '1.8s' : '4.2s'}
                begin="1.2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Floating Data Packet 3: Inbound Master / Approval Sync (Right to Left) */}
          <g>
            <circle r="3.5" fill="#4CD7F6">
              <animateMotion
                path="M1000,80 C750,80 650,60 500,60 C350,60 250,80 0,80"
                dur={speed === 'burst' ? '1.6s' : '4s'}
                repeatCount="indefinite"
              />
            </circle>
            <circle r="7" stroke="#4CD7F6" strokeOpacity="0.4" strokeWidth="1">
              <animateMotion
                path="M1000,80 C750,80 650,60 500,60 C350,60 250,80 0,80"
                dur={speed === 'burst' ? '1.6s' : '4s'}
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Central Convergence Nexus Gateway (X: 500, Y: 60) */}
          <circle cx="500" cy="60" r="44" fill="url(#nexusRadial)" />

          {/* Pulsing Ripple Rings */}
          <circle
            cx="500"
            cy="60"
            r="28"
            stroke="#7CF2C2"
            strokeOpacity="0.25"
            strokeWidth="1"
            className="pulse-glow"
          />
          <circle
            cx="500"
            cy="60"
            r="18"
            stroke="#10B981"
            strokeDasharray="2 3"
            strokeWidth="1.2"
          />
          <circle
            cx="500"
            cy="60"
            r="10"
            fill="#0B1612"
            stroke="#7CF2C2"
            strokeWidth="1.5"
          />

          {/* Center Nexus Core Diamond */}
          <polygon
            points="500,55 505,60 500,65 495,60"
            fill="#7CF2C2"
          />
        </svg>

        {/* Minimal Bottom Telemetry Strip */}
        <div className="px-3 py-1.5 bg-[#12231C]/90 border-t border-[#1A2E26] flex items-center justify-between text-[10px] text-[#89A799]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7CF2C2] pulse-led"></span>
            <span className="text-white">Active</span>
            <span className="text-[#6B8C7E]">·</span>
            <span>AES-256 GCM</span>
          </div>

          <div>
            <button
              onClick={handleBurstTrigger}
              disabled={isSurge}
              className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-mono-fine flex items-center gap-1 transition-all cursor-pointer ${
                isSurge
                  ? 'bg-[#7CF2C2] text-[#0B1612] font-medium'
                  : 'bg-[#1E3329] text-[#7CF2C2] border border-[#2A4235] hover:bg-[#253E32]'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>{isSurge ? 'Surge (5x)' : 'Surge'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
