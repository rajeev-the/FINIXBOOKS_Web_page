import React, { useState } from 'react'
import {
  Smartphone,
  Server,
  Cpu,
  Globe,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  Terminal,
  ExternalLink,
  GitFork,
  Star,
} from 'lucide-react'

const REPOSITORIES = [
  {
    id: 'mobile',
    icon: Smartphone,
    name: 'ledgerflow-mobile',
    title: 'Mobile Application',
    stack: 'Flutter (Dart) · Riverpod 2.0',
    desc: 'Cross-platform iOS and Android client with offline SQLite spooling and FlChart visualizers.',
    stars: 284,
    forks: 46,
    language: 'Dart',
    license: 'MIT',
    cloneUrl: 'https://github.com/ledgerflow/ledgerflow-mobile.git',
    releaseFile: 'LedgerFlow-v4.1.0-release.apk',
    releaseSize: '38.4 MB',
    tags: ['Flutter', 'Riverpod', 'FlChart', 'Offline SQLite'],
  },
  {
    id: 'backend',
    icon: Cpu,
    name: 'ledgerflow-backend-api',
    title: 'Cloud Microservices Core',
    stack: 'Node.js · Express · MongoDB',
    desc: 'RESTful API gateway with RSA-256 JWT auth, Decimal.js GST splits, and BullMQ worker queue.',
    stars: 392,
    forks: 68,
    language: 'JavaScript',
    license: 'MIT',
    cloneUrl: 'https://github.com/ledgerflow/ledgerflow-backend-api.git',
    releaseFile: 'docker-compose.yml',
    releaseSize: '2.4 KB',
    tags: ['Node.js', 'Express', 'MongoDB 7.0', 'WebSocket'],
  },
  {
    id: 'bridge',
    icon: Server,
    name: 'ledgerflow-bridge-daemon',
    title: 'Windows Desktop Bridge .exe',
    stack: 'Electron · Node.js · XML Port 9000',
    desc: '15MB local relay daemon connecting cloud event streams directly to TallyPrime / ERP 9 on localhost:9000.',
    stars: 218,
    forks: 34,
    language: 'C++ / JS',
    license: 'MIT',
    cloneUrl: 'https://github.com/ledgerflow/ledgerflow-bridge-daemon.git',
    releaseFile: 'LedgerFlow-Bridge-Setup-v4.1.0.exe',
    releaseSize: '15.2 MB',
    tags: ['Electron', 'Tally XML', 'Port 9000', 'Win32/x64'],
  },
  {
    id: 'web',
    icon: Globe,
    name: 'ledgerflow-web-portal',
    title: 'Web Runtime & Dashboard',
    stack: 'React 19 · Vite · Tailwind v4',
    desc: 'Ledger Sovereign high-density interface with sub-second stream visualizer and MCA compliance exports.',
    stars: 465,
    forks: 72,
    language: 'TypeScript / React',
    license: 'MIT',
    cloneUrl: 'https://github.com/ledgerflow/ledgerflow-web-portal.git',
    releaseFile: 'npm-package-release.tgz',
    releaseSize: '1.2 MB',
    tags: ['React 19', 'Vite 8', 'Tailwind CSS', 'Tabular UI'],
  },
]

export default function SourceRepositories() {
  const [copiedId, setCopiedId] = useState('')
  const [downloadNotice, setDownloadNotice] = useState('')

  const handleCopyClone = (id, url) => {
    navigator.clipboard.writeText(`git clone ${url}`)
    setCopiedId(id)
    setTimeout(() => setCopiedId(''), 2000)
  }

  const handleMockDownload = (filename) => {
    setDownloadNotice(`Initiating download for ${filename} ...`)
    setTimeout(() => setDownloadNotice(''), 3000)
  }

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 hairline-t" id="repositories">
      {/* Header with Eyebrow, Main Heading & Informative Subheading */}
      <div className="max-w-3xl mb-10">
        <div className="text-[10px] uppercase font-mono-fine tracking-[0.2em] text-[#5E6F66] font-medium flex items-center gap-1.5 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-pulse"></span>
          OPEN-SOURCE CODEBASES &amp; RELEASE PACKAGES
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1E3329] font-normal tracking-tight">
          GitHub Repositories &amp; Binaries.
        </h2>
        <p className="font-mono-fine text-xs sm:text-sm text-[#5E6F66] mt-2.5 leading-relaxed">
          Inspect, clone, or deploy the complete source code across the Flutter mobile app, cloud backend microservices, Windows desktop bridge daemon, and web runtime portal.
        </p>
      </div>

      {downloadNotice && (
        <div className="mb-6 p-3 bg-[#1E3329] text-[#7CF2C2] text-xs font-mono-fine rounded-xs flex items-center justify-between animate-fade-in">
          <span>{downloadNotice}</span>
          <span className="text-[10px] text-[#89A799]">Official Release Mirror</span>
        </div>
      )}

      {/* 4 Repository Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REPOSITORIES.map((repo) => {
          const Icon = repo.icon
          const isCopied = copiedId === repo.id

          return (
            <div
              key={repo.id}
              className="p-6 bg-[#D6E2D8] hairline-border rounded-xs shadow-xs flex flex-col justify-between hover:bg-[#DCE7DE] transition-colors font-mono-fine text-xs"
            >
              <div>
                {/* Card Top Strip */}
                <div className="flex items-center justify-between pb-3 hairline-b">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xs bg-[#E4EAE4] flex items-center justify-center text-[#1E3329]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#5E6F66] tracking-wider block">
                        {repo.title}
                      </span>
                      <a
                        href={repo.cloneUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-[#1E3329] hover:underline flex items-center gap-1"
                      >
                        <span>{repo.name}</span>
                        <ExternalLink className="w-3 h-3 text-[#5E6F66]" />
                      </a>
                    </div>
                  </div>

                  {/* GitHub Meta Badges */}
                  <div className="flex items-center gap-2 text-[10px] text-[#5E6F66]">
                    <span className="flex items-center gap-1 bg-[#E4EAE4] px-2 py-0.5 rounded">
                      <Star className="w-3 h-3 text-[#D97706]" />
                      <span className="font-mono-metric font-medium text-[#1E3329]">{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-1 bg-[#E4EAE4] px-2 py-0.5 rounded">
                      <GitFork className="w-3 h-3 text-[#5E6F66]" />
                      <span className="font-mono-metric font-medium text-[#1E3329]">{repo.forks}</span>
                    </span>
                  </div>
                </div>

                {/* Subtitle & Description */}
                <div className="mt-3.5">
                  <div className="text-[10px] text-[#1E3329] font-medium mb-1">
                    {repo.stack}
                  </div>
                  <p className="text-xs text-[#5E6F66] leading-relaxed">
                    {repo.desc}
                  </p>
                </div>

                {/* Git Clone Snippet Box */}
                <div className="mt-4 p-2.5 bg-[#0B1612] text-[#E4EAE4] rounded-xs font-mono-fine text-[11px] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden truncate">
                    <Terminal className="w-3.5 h-3.5 text-[#7CF2C2] shrink-0" />
                    <span className="text-[#89A799] shrink-0">$</span>
                    <span className="text-[#7CF2C2] truncate">git clone {repo.cloneUrl}</span>
                  </div>
                  <button
                    onClick={() => handleCopyClone(repo.id, repo.cloneUrl)}
                    className="p-1 hover:text-[#7CF2C2] text-[#89A799] transition-colors cursor-pointer shrink-0"
                    title="Copy git clone"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-[#7CF2C2]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Bottom Actions & Release File */}
              <div className="pt-4 mt-4 hairline-t flex flex-wrap items-center justify-between gap-3 text-[10px]">
                <div className="flex items-center gap-1.5 text-[#5E6F66]">
                  <span>Package:</span>
                  <span className="text-[#1E3329] font-medium">{repo.releaseFile}</span>
                  <span className="text-[9px] bg-[#E4EAE4] px-1.5 py-0.2 rounded font-mono-metric">
                    {repo.releaseSize}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleMockDownload(repo.releaseFile)}
                    className="px-3 py-1 bg-[#E4EAE4] hover:bg-[#D6E2D8] text-[#1E3329] rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer hairline-border"
                  >
                    <Download className="w-3 h-3 text-[#5E6F66]" />
                    <span>Download</span>
                  </button>

                  <a
                    href={repo.cloneUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-[#1E3329] hover:bg-[#254234] text-[#7CF2C2] rounded-xs transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Repo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

