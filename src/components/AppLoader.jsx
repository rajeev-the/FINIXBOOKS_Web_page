import React, { useState, useEffect } from 'react'

export default function AppLoader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [stageText, setStageText] = useState('PROBING PORT 9000...')
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // Fast initial progress ticker
    const timer1 = setTimeout(() => {
      setProgress(35)
      setStageText('TDL XML ENVELOPE INITIALIZED')
    }, 180)

    const timer2 = setTimeout(() => {
      setProgress(78)
      setStageText('WATERMARK ALTERID #104,982 VERIFIED')
    }, 420)

    const timer3 = setTimeout(() => {
      setProgress(100)
      setStageText('RUNTIME ONLINE · ALL SURFACES SYNCED')
    }, 680)

    const timer4 = setTimeout(() => {
      setIsFadingOut(true)
    }, 850)

    const timer5 = setTimeout(() => {
      if (onFinish) onFinish()
    }, 1150)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-100 bg-[#0B1612] text-[#E4EAE4] font-mono-fine flex flex-col justify-between p-6 sm:p-10 transition-all duration-300 pointer-events-none select-none ${
        isFadingOut ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-[10px] text-[#89A799] tracking-wider uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7CF2C2] animate-pulse"></span>
          LEDGERFLOW RUNTIME v4.1
        </span>
        <span className="font-mono-metric">PORT 9000 // AES-256</span>
      </div>

      {/* Center Display */}
      <div className="max-w-md mx-auto w-full text-center space-y-4">
        <div className="font-serif-display text-3xl sm:text-4xl text-white font-normal tracking-tight">
          LEDGERFLOW
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full h-1 bg-[#1A2E26] rounded-full overflow-hidden relative">
          <div
            className="h-full bg-[#7CF2C2] transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#89A799] font-mono-metric">
          <span className="text-[#7CF2C2]">{stageText}</span>
          <span className="text-white font-medium">{progress}%</span>
        </div>
      </div>

      {/* Bottom Footer Line */}
      <div className="flex items-center justify-between text-[9px] text-[#5E6F66] tracking-widest uppercase">
        <span>MCA AUDIT TRAIL CERTIFIED</span>
        <span>ZERO DOUBLE-ENTRY RUNTIME</span>
      </div>
    </div>
  )
}

