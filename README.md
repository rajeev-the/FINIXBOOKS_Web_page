# FINIXBOOKS · Dual-Ledger Financial Runtime

> Production dual-ledger runtime with deterministic bidirectional replication to desktop TallyPrime / ERP 9 over native XML HTTP port 9000.

---

## 🌟 Architecture Overview

```
[ Flutter Mobile App ] (iOS / Android / Web)
        │
        ▼ (HTTPS REST / WSS)
[ Cloud Microservices Gateway ] (Node.js · Express · BullMQ)
   ├── MongoDB Core (Time-Series & Document Storage)
   └── Outbound TLS 1.3 WebSocket Relay
        │
        ▼
[ Electron Local Bridge Daemon ] (15MB Windows Tray .exe)
        │
        ▼ (HTTP POST localhost:9000 - TDL XML <ENVELOPE>)
[ TallyPrime / ERP 9 Engine ] (AlterID Incremental Watermark)
```

---

## 📦 Component Repositories & Release Artifacts

| Component | Stack | Description | Release Artifact |
|---|---|---|---|
| **📱 Mobile Application** | Flutter (Dart), Riverpod 2.0, FlChart | Field voucher booking, 1-tap WhatsApp reminders, offline SQLite spooling. | `FinixBooks-v4.1.0-release.apk` |
| **⚙️ Cloud Backend Core** | Node.js, Express, MongoDB, BullMQ | High-concurrency RESTful APIs, RSA-256 JWT auth, Decimal.js tax splits. | `docker-compose.yml` |
| **🖥️ Desktop Bridge Daemon** | Electron, Node.js, XML Port 9000 | 15MB Windows daemon communicating directly with Tally on localhost:9000. | `FinixBooks-Bridge-Setup-v4.1.0.exe` |
| **🌐 Web Runtime & Portal** | React 19, Vite 8, Tailwind CSS v4 | High-density financial UI ("Ledger Sovereign") with real-time stream visualizer. | Web App / Static Bundle |

---

## 🚀 Quick Start (Web Portal)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

### 4. Code Quality
```bash
npm run lint
```

---

## 🔗 Pushing to Your GitHub Repository

To upload this codebase to your own GitHub account:

```bash
# 1. Stage and commit all files
git add .
git commit -m "feat: complete FinixBooks dual-ledger platform with repositories showcase and scroll animations"

# 2. Add your GitHub remote repository
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git

# 3. Rename branch to main (if needed) and push
git branch -M main
git push -u origin main
```

---

## 📄 License
MIT License © 2025 FinixBooks Technologies Inc.
