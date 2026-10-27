import React, { useState } from 'react'
import { X, CheckCircle2, Terminal, ArrowRight, ShieldCheck } from 'lucide-react'

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [tallyVer, setTallyVer] = useState('TallyPrime 4.x')
  const [testMode, setTestMode] = useState(false)
  const [pingLog, setPingLog] = useState([])

  if (!isOpen) return null

  const handleTestPing = () => {
    setTestMode(true)
    setPingLog(['[INIT] Probing socket http://localhost:9000/xml ...'])
    setTimeout(() => {
      setPingLog((prev) => [
        ...prev,
        '[TALLY_HEADER] Response 200 OK — TALLYPRIME SERVER 4.1.0',
        '[ODBC] Handshake established. 38 Voucher Types detected.',
        '[BENCHMARK] Bidirectional replication latency: 0.28ms',
        '[STATUS] Deterministic Sync Pipeline Ready.',
      ])
    }, 600)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setTestMode(false)
    setPingLog([])
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1612]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="hairline-border bg-[#D6E2D8] w-full max-w-lg p-6 sm:p-8 rounded-xs shadow-2xl relative font-mono-fine text-xs">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-1.5 text-[#5E6F66] hover:text-[#1E3329] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-[#7CF2C2]/30 flex items-center justify-center mx-auto mb-4 text-[#1E3329]">
              <CheckCircle2 className="w-6 h-6 text-[#1E3329]" />
            </div>
            <div className="text-[10px] uppercase tracking-widest text-[#5E6F66] mb-1">
              DEMO RESERVATION CONFIRMED
            </div>
            <h3 className="font-serif-display text-2xl text-[#1E3329] mb-3">
              We will attach your books within 2 hours.
            </h3>
            <p className="text-[#5E6F66] text-xs leading-relaxed max-w-sm mx-auto mb-6">
              A dedicated enterprise CA solution engineer has received your request for{' '}
              <strong className="text-[#1E3329]">{company || 'your enterprise'}</strong>. We'll send
              the 15MB local relay executable to <strong className="text-[#1E3329]">{email}</strong>.
            </p>

            <button
              onClick={handleReset}
              className="btn-mint px-6 py-2.5 rounded-full text-xs font-mono-fine uppercase tracking-wider cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#5E6F66] mb-1 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1E3329]" />
              ENTERPRISE DEMO ATTACHMENT
            </div>
            <h3 className="font-serif-display text-2xl text-[#1E3329] mb-1">
              Test FinixBooks with your data
            </h3>
            <p className="text-[#5E6F66] text-[11px] mb-5 leading-relaxed">
              Safe read-only sandbox or live pilot on your local Tally company file.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase text-[#5E6F66] mb-1">
                  Enterprise / Firm Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Industrial Corporation"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-[#E4EAE4] hairline-border px-3 py-2 text-xs text-[#1E3329] placeholder-[#5E6F66]/60 focus:outline-none focus:border-[#1E3329]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase text-[#5E6F66] mb-1">
                    CFO / Controller Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="cfo@apex.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#E4EAE4] hairline-border px-3 py-2 text-xs text-[#1E3329] placeholder-[#5E6F66]/60 focus:outline-none focus:border-[#1E3329]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase text-[#5E6F66] mb-1">
                    Tally Environment
                  </label>
                  <select
                    value={tallyVer}
                    onChange={(e) => setTallyVer(e.target.value)}
                    className="w-full bg-[#E4EAE4] hairline-border px-3 py-2 text-xs text-[#1E3329] focus:outline-none focus:border-[#1E3329]"
                  >
                    <option>TallyPrime 4.x / 5.x</option>
                    <option>TallyPrime 3.x</option>
                    <option>Tally.ERP 9 (Gold / Multi-user)</option>
                    <option>Tally Cloud Hosted (AWS / Azure)</option>
                  </select>
                </div>
              </div>

              {/* Ping Simulator option */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleTestPing}
                  className="w-full py-2 px-3 bg-[#E4EAE4] hairline-border text-[11px] uppercase font-mono-fine text-[#1E3329] hover:bg-[#D6E2D8] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#5E6F66]" />
                  Simulate Localhost:9000 Handshake Ping
                </button>

                {testMode && pingLog.length > 0 && (
                  <div className="mt-2 p-2.5 bg-[#0B1612] text-[#7CF2C2] text-[10px] font-mono-fine space-y-1 rounded-xs max-h-28 overflow-y-auto">
                    {pingLog.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 hairline-t flex items-center justify-between">
                <span className="text-[10px] text-[#5E6F66]">Zero installation risk.</span>
                <button
                  type="submit"
                  className="btn-mint px-6 py-2.5 rounded-full text-xs uppercase font-mono-fine tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Submit Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
