import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Database, 
  Key, 
  Terminal, 
  Download, 
  Check, 
  Copy, 
  Lock, 
  Unlock, 
  ChevronDown, 
  FileCode2, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ArrowLeft, 
  HardDrive, 
  Cpu, 
  ExternalLink, 
  QrCode, 
  KeyRound, 
  FileCheck2 
} from 'lucide-react';

const REPO_URL = "https://github.com/vedanshsaxena23/Glyphboard";
const DOWNLOAD_BASE = `${REPO_URL}/releases/download/1.0.0`;

const DOWNLOADS = {
  windowsExe: `${DOWNLOAD_BASE}/GlyphBoard.Aegis_Setup_1.0.0.exe`,
  windowsPortable: `${DOWNLOAD_BASE}/GlyphBoard.Aegis_Portable_1.0.0.exe`,
  linuxAppImage: `${DOWNLOAD_BASE}/GlyphBoard.Aegis-1.0.0.AppImage`,
  linuxDeb: `${DOWNLOAD_BASE}/glyphboard_1.0.0_amd64.deb`,
  linuxRpm: `${DOWNLOAD_BASE}/glyphboard-1.0.0.x86_64.rpm`,
};

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('overview'); // 'overview' | 'hardware-vault' | 'totp-2fa' | 'dual-engine' | 'readme'
  const [copied, setCopied] = useState(false);
  const [showLinuxDropdown, setShowLinuxDropdown] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLinuxDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText(`git clone ${REPO_URL}.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setShowLinuxDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#090d13] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Top Navbar */}
      <nav className="relative z-30 w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-[#21262d]/70 backdrop-blur-md">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('overview')}>
          <div className="w-10 h-10 rounded-xl bg-[#161b22] border border-cyan-500/40 p-1 flex items-center justify-center shadow-md shadow-cyan-500/10">
            <img 
              src="/logo.png" 
              alt="GlyphBoard Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerText = 'GB';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-white text-base leading-none">GLYPHBOARD</span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-1">OFFLINE VAULT</span>
          </div>
          <span className="ml-2 text-xs bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            v1.0.0 "Aegis"
          </span>
        </div>

        {/* Global Page Switcher */}
        <div className="flex items-center gap-1.5 bg-[#161b22] border border-[#30363d] p-1 rounded-xl">
          <button
            onClick={() => navigateTo('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'overview' 
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers size={14} />
            <span className="hidden sm:inline">Overview</span>
          </button>
          <button
            onClick={() => navigateTo('readme')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'readme' 
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">README.md</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a 
            href={REPO_URL} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-xs font-mono bg-[#161b22] border border-[#30363d] px-3.5 py-2 rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all shadow-sm"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. OVERVIEW PAGE                                                          */}
      {/* ========================================================================= */}
      {currentPage === 'overview' && (
        <motion.div
          key="overview"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Hero Section: elevated with relative z-20 */}
          <section className="relative z-20 max-w-4xl mx-auto px-6 pt-20 pb-14 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-xs font-mono text-cyan-300 mb-8 backdrop-blur-md shadow-inner">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>Production Milestone • 100% Offline • Zero Telemetry</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-white">
              Your Code. Your Machine. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Absolute Sovereignty.
              </span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              An offline developer clipboard and snippet workspace. 
              Protected with hardware-bound <span className="text-slate-200 font-medium">AES-256-GCM</span>, 
              integrated <span className="text-slate-200 font-medium">TOTP 2FA</span>, 
              and high-throughput <span className="text-slate-200 font-medium">SQLite WAL</span> storage.
            </p>

            {/* Direct Download Hub */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <a
                href={DOWNLOADS.windowsExe}
                download
                className="flex items-center gap-2.5 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <Download size={18} />
                <span>Download for Windows (.exe)</span>
              </a>

              {/* Linux Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowLinuxDropdown((prev) => !prev)}
                  className="flex items-center gap-2.5 bg-[#161b22] hover:bg-[#1f242c] border border-[#30363d] hover:border-slate-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <Terminal size={18} className="text-cyan-400" />
                  <span>Download for Linux</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${showLinuxDropdown ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {showLinuxDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 sm:left-auto sm:right-0 mt-3 w-72 bg-[#12161f] border border-[#30363d] rounded-2xl p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-50 text-left font-mono text-xs ring-1 ring-cyan-500/30"
                    >
                      <div className="px-3 py-1.5 text-[10px] text-cyan-400 uppercase tracking-widest font-bold flex items-center justify-between">
                        <span>Linux Packages</span>
                        <span className="text-[9px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800">x86_64</span>
                      </div>
                      
                      <div className="space-y-1 mt-1">
                        <a 
                          href={DOWNLOADS.linuxAppImage} 
                          download
                          onClick={() => setShowLinuxDropdown(false)}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-300 text-slate-200 transition-all group"
                        >
                          <div>
                            <div className="font-semibold text-white group-hover:text-cyan-300">AppImage</div>
                            <div className="text-[10px] text-slate-400 font-sans">Universal Linux binary</div>
                          </div>
                          <Download size={15} className="text-slate-500 group-hover:text-cyan-400" />
                        </a>

                        <a 
                          href={DOWNLOADS.linuxDeb} 
                          download
                          onClick={() => setShowLinuxDropdown(false)}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-300 text-slate-200 transition-all group"
                        >
                          <div>
                            <div className="font-semibold text-white group-hover:text-cyan-300">Debian / Ubuntu (.deb)</div>
                            <div className="text-[10px] text-slate-400 font-sans">APT / dpkg package</div>
                          </div>
                          <Download size={15} className="text-slate-500 group-hover:text-cyan-400" />
                        </a>

                        <a 
                          href={DOWNLOADS.linuxRpm} 
                          download
                          onClick={() => setShowLinuxDropdown(false)}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-300 text-slate-200 transition-all group"
                        >
                          <div>
                            <div className="font-semibold text-white group-hover:text-cyan-300">RedHat / Fedora (.rpm)</div>
                            <div className="text-[10px] text-slate-400 font-sans">RPM package</div>
                          </div>
                          <Download size={15} className="text-slate-500 group-hover:text-cyan-400" />
                        </a>
                      </div>

                      <div className="border-t border-[#30363d] my-1.5" />

                      <a 
                        href={DOWNLOADS.windowsPortable} 
                        download
                        onClick={() => setShowLinuxDropdown(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        <div>
                          <div className="font-semibold">Windows Portable (.exe)</div>
                          <div className="text-[10px] text-slate-500 font-sans">Standalone portable executable</div>
                        </div>
                        <Download size={14} />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Clone Bar */}
            <div className="inline-flex items-center gap-3 bg-[#161b22]/90 border border-[#30363d] px-4 py-2 rounded-lg text-xs font-mono text-slate-400 backdrop-blur-md">
              <span className="text-cyan-500">$</span>
              <span>git clone {REPO_URL}.git</span>
              <button 
                onClick={handleCopyInstall} 
                className="ml-2 hover:text-white transition-colors cursor-pointer"
                title="Copy command"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </section>

          {/* Interactive Vault Status Banner: relative z-10 */}
          <section className="relative z-10 max-w-4xl mx-auto px-6 mb-12">
            <div className="bg-gradient-to-b from-[#161b22] to-[#0f1319] border border-[#30363d] rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                  isLocked 
                    ? "bg-rose-500/10 border-rose-500/30 text-rose-400 shadow-rose-500/20 shadow-md" 
                    : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/20 shadow-md"
                }`}>
                  {isLocked ? <Lock size={22} /> : <Unlock size={22} />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white text-sm">
                      {isLocked ? "VAULT STATE: LOCKED (ZERO-FILL)" : "VAULT STATE: ARMED & ACTIVE"}
                    </h4>
                    <span className={`w-2 h-2 rounded-full ${isLocked ? "bg-rose-400" : "bg-emerald-400 animate-ping"}`} />
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {isLocked 
                      ? "In-memory keys zeroed out. TOTP 2FA or Master Passkey required to decrypt." 
                      : "Protected with DPAPI SafeStorage. Local SQLite WAL stream verified."}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsLocked(!isLocked)}
                className="w-full md:w-auto px-4 py-2 rounded-lg border border-[#30363d] bg-[#0d1117] hover:bg-[#1a202c] text-xs font-mono text-cyan-300 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles size={14} />
                <span>{isLocked ? "Simulate Unlock (Passkey)" : "Simulate Zero-Fill Auto-Lock"}</span>
              </button>
            </div>
          </section>

          {/* Core Feature Tiles: Click to open pages */}
          <section className="relative z-10 max-w-5xl mx-auto px-6 py-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
                Architecture Pillars (Click card to read deep-dive)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tile 1 */}
              <motion.div 
                whileHover={{ y: -6, borderColor: "#38bdf8" }}
                transition={{ duration: 0.2 }}
                onClick={() => navigateTo('hardware-vault')}
                className="bg-[#161b22]/70 border border-[#30363d] p-6 rounded-2xl backdrop-blur-sm cursor-pointer group hover:bg-[#1a2029] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={20} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-base">Hardware-Bound Vault</h3>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Payload encryption derived via PBKDF2 and locked to machine-specific credentials through Chromium DPAPI SafeStorage.
                </p>
              </motion.div>

              {/* Tile 2 */}
              <motion.div 
                whileHover={{ y: -6, borderColor: "#38bdf8" }}
                transition={{ duration: 0.2 }}
                onClick={() => navigateTo('totp-2fa')}
                className="bg-[#161b22]/70 border border-[#30363d] p-6 rounded-2xl backdrop-blur-sm cursor-pointer group hover:bg-[#1a2029] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Key size={20} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-base">Integrated TOTP 2FA</h3>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Dynamic QR pairing with standard authenticator apps, bcrypt credential verification, and zero-knowledge canary sentinels.
                </p>
              </motion.div>

              {/* Tile 3 */}
              <motion.div 
                whileHover={{ y: -6, borderColor: "#38bdf8" }}
                transition={{ duration: 0.2 }}
                onClick={() => navigateTo('dual-engine')}
                className="bg-[#161b22]/70 border border-[#30363d] p-6 rounded-2xl backdrop-blur-sm cursor-pointer group hover:bg-[#1a2029] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  <Database size={20} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-base">Dual Engine Storage</h3>
                  <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Switch dynamically between IndexedDB and an encrypted SQLite engine running in high-concurrency Write-Ahead Logging (WAL) mode.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Terminal / Tech Specs Manifest */}
          <section className="relative z-10 max-w-4xl mx-auto px-6 py-8">
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden font-mono text-xs shadow-2xl">
              <div className="bg-[#0f141c] px-4 py-3 border-b border-[#30363d] flex items-center justify-between text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-slate-300 text-xs flex items-center gap-1.5">
                    <FileCode2 size={13} className="text-cyan-400" /> system_manifest.json
                  </span>
                </div>
                <span className="text-cyan-400 text-[11px] bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  100% OFFLINE • NO NETWORK THREADS
                </span>
              </div>
              <div className="p-6 text-slate-300 space-y-1.5 overflow-x-auto leading-relaxed bg-[#0d1117]">
                <div><span className="text-slate-600">01</span> {"{"}</div>
                <div><span className="text-slate-600">02</span> &nbsp;&nbsp;<span className="text-cyan-400">"release"</span>: <span className="text-emerald-300">"v1.0.0-aegis"</span>,</div>
                <div><span className="text-slate-600">03</span> &nbsp;&nbsp;<span className="text-cyan-400">"cryptography"</span>: <span className="text-emerald-300">"AES-256-GCM + PBKDF2 (Hardware Salt)"</span>,</div>
                <div><span className="text-slate-600">04</span> &nbsp;&nbsp;<span className="text-cyan-400">"keyProtection"</span>: <span className="text-emerald-300">"DPAPI SafeStorage (OS Isolated)"</span>,</div>
                <div><span className="text-slate-600">05</span> &nbsp;&nbsp;<span className="text-cyan-400">"databases"</span>: [<span className="text-emerald-300">"SQLite (WAL Mode)"</span>, <span className="text-emerald-300">"IndexedDB"</span>],</div>
                <div><span className="text-slate-600">06</span> &nbsp;&nbsp;<span className="text-cyan-400">"memorySecurity"</span>: <span className="text-emerald-300">"Zero-fill in-memory wipe on idle/lock"</span>,</div>
                <div><span className="text-slate-600">07</span> &nbsp;&nbsp;<span className="text-cyan-400">"telemetry"</span>: <span className="text-rose-400">false</span>,</div>
                <div><span className="text-slate-600">08</span> &nbsp;&nbsp;<span className="text-cyan-400">"networkCalls"</span>: <span className="text-rose-400">0</span></div>
                <div><span className="text-slate-600">09</span> {"}"}</div>
              </div>
            </div>
          </section>

          {/* Easter Egg & Lore Banner */}
          <section className="relative z-10 max-w-4xl mx-auto px-6 py-6">
            <div className="bg-[#161b22]/40 border border-[#30363d]/80 rounded-xl p-5 text-center backdrop-blur-sm">
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                ⚠️ <span className="text-amber-300">WARNING:</span> Side effects of running Aegis include heightened local privacy, 
                zero cloud anxiety, and the sudden urge to binge-watch detective shows on HBO late at night. ☕🛡️
              </p>
            </div>
          </section>
        </motion.div>
      )}

      {/* ========================================================================= */}
      {/* 2. DEDICATED PAGE: HARDWARE-BOUND VAULT                                   */}
      {/* ========================================================================= */}
      {currentPage === 'hardware-vault' && (
        <motion.div
          key="hardware-vault"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 max-w-4xl mx-auto px-6 py-12"
        >
          <button 
            onClick={() => navigateTo('overview')}
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-8 cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Overview
          </button>

          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 sm:p-12 shadow-2xl space-y-8">
            <div className="flex items-center gap-4 border-b border-[#30363d] pb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={28} />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Architecture Deep Dive</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Hardware-Bound Vault & PBKDF2</h1>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Standard clipboard and note tools store secrets in cleartext on disk, exposing API tokens and keys to unauthorized processes or cold-drive extraction. GlyphBoard introduces a multi-tier cryptographic barrier rooted to your operating system's internal keychain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-[#0d1117] p-5 rounded-xl border border-[#30363d]">
                <div className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                  <Cpu size={16} /> DPAPI SafeStorage Isolator
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Cryptographic master keys are encrypted directly using your system's DPAPI on Windows or libsecret on Linux, making raw database files unreadable if copied to another machine.
                </p>
              </div>
              <div className="bg-[#0d1117] p-5 rounded-xl border border-[#30363d]">
                <div className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                  <FileCheck2 size={16} /> PBKDF2-Derived Salt
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Every vault generates a unique, hardware-tied cryptographic salt with thousands of key-derivation iterations before producing AES-256-GCM authenticated payloads.
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-5 font-mono text-xs">
              <div className="text-slate-500 mb-2">// In-memory zero-fill safety lifecycle</div>
              <div className="text-slate-300 leading-relaxed">
                1. Payload decrypted only into private memory buffer upon user challenge.<br/>
                2. Explicit zero-fill memory wiping executed upon screen lock or 5-min idle.<br/>
                3. Raw cryptographic key garbage-collected immediately post-render.
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#30363d]">
              <button 
                onClick={() => navigateTo('totp-2fa')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer ml-auto"
              >
                Next: Integrated TOTP 2FA →
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* ========================================================================= */}
      {/* 3. DEDICATED PAGE: INTEGRATED TOTP 2FA                                    */}
      {/* ========================================================================= */}
      {currentPage === 'totp-2fa' && (
        <motion.div
          key="totp-2fa"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 max-w-4xl mx-auto px-6 py-12"
        >
          <button 
            onClick={() => navigateTo('overview')}
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-8 cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Overview
          </button>

          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 sm:p-12 shadow-2xl space-y-8">
            <div className="flex items-center gap-4 border-b border-[#30363d] pb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Key size={28} />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Authentication Security</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Integrated TOTP 2FA Gate</h1>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              GlyphBoard v1.0.0 integrates native Two-Factor Authentication right inside the desktop client. You can bind any standard authenticator app (Google Authenticator, Aegis, 1Password, Bitwarden) directly to your local database without an internet connection.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-[#0d1117] p-5 rounded-xl border border-[#30363d]">
                <div className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                  <QrCode size={16} /> Zero-Cloud Pairing
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  The pairing QR code is drawn locally on HTML5 Canvas via mathematical RFC 6238 generation. No external image endpoints or tracking pings are ever dispatched.
                </p>
              </div>
              <div className="bg-[#0d1117] p-5 rounded-xl border border-[#30363d]">
                <div className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                  <KeyRound size={16} /> Canary Sentinels
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Canary tokens verify database record consistency upon decryption. If external tampering or disk bitrot is detected, access is immediately quarantined.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#30363d]">
              <button 
                onClick={() => navigateTo('hardware-vault')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                ← Prev: Hardware Vault
              </button>
              <button 
                onClick={() => navigateTo('dual-engine')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
              >
                Next: Dual Engine Storage →
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* ========================================================================= */}
      {/* 4. DEDICATED PAGE: DUAL ENGINE STORAGE                                    */}
      {/* ========================================================================= */}
      {currentPage === 'dual-engine' && (
        <motion.div
          key="dual-engine"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 max-w-4xl mx-auto px-6 py-12"
        >
          <button 
            onClick={() => navigateTo('overview')}
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 mb-8 cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Overview
          </button>

          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 sm:p-12 shadow-2xl space-y-8">
            <div className="flex items-center gap-4 border-b border-[#30363d] pb-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Database size={28} />
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Storage Subsystem</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Pluggable Dual-Database Engine</h1>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Developers require flexibility. Rather than locking you into a single database format, GlyphBoard incorporates a dual-engine abstraction layer allowing instant hot-swapping between SQLite WAL and client-side IndexedDB.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-[#0d1117] p-5 rounded-xl border border-[#30363d]">
                <div className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                  <HardDrive size={16} /> SQLite (WAL Mode)
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Optimized for thousands of code snippets. Write-Ahead Logging allows background index rebuilding without locking clipboard paste read operations.
                </p>
              </div>
              <div className="bg-[#0d1117] p-5 rounded-xl border border-[#30363d]">
                <div className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                  <Layers size={16} /> IndexedDB Engine
                </div>
                <p className="text-slate-400 text-xs font-sans leading-relaxed">
                  Zero native binary dependencies. Pure client-side structured storage ensuring full portability across lightweight environments and test sandboxes.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#30363d]">
              <button 
                onClick={() => navigateTo('totp-2fa')}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                ← Prev: TOTP 2FA
              </button>
              <button 
                onClick={() => navigateTo('readme')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
              >
                Next: Full README.md →
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* ========================================================================= */}
      {/* 5. PAGE: README.MD                                                        */}
      {/* ========================================================================= */}
      {currentPage === 'readme' && (
        <motion.div
          key="readme"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 max-w-4xl mx-auto px-6 py-12"
        >
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-[#0f141c] px-6 py-4 border-b border-[#30363d] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCode2 className="text-cyan-400" size={18} />
                <span className="font-mono text-sm text-slate-200 font-semibold">README.md</span>
                <span className="text-xs text-slate-500 font-mono hidden sm:inline">GlyphBoard / v1.0.0 "Aegis"</span>
              </div>
              <a 
                href={`${REPO_URL}/blob/main/README.md`} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Raw on GitHub</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="p-8 sm:p-12 text-slate-300 font-sans space-y-8 leading-relaxed text-sm">
              <div className="border-b border-[#30363d] pb-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#090d13] border border-cyan-500/30 p-2 flex-shrink-0">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">GlyphBoard (v1.0.0 — Aegis)</h1>
                  <p className="text-slate-400 text-xs sm:text-sm font-mono mt-1">
                    An offline developer clipboard and local snippet workspace manager.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="bg-[#0d1117] border border-cyan-500/40 text-cyan-300 px-2.5 py-1 rounded">Release: v1.0.0 "Aegis"</span>
                <span className="bg-[#0d1117] border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded">License: GNU GPLv3</span>
                <span className="bg-[#0d1117] border border-purple-500/40 text-purple-300 px-2.5 py-1 rounded">Cryptography: AES-256-GCM</span>
                <span className="bg-[#0d1117] border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded">Telemetry: None</span>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="text-cyan-400" size={18} />
                  1. Cryptographic Architecture
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs sm:text-sm">
                  <li><strong className="text-slate-200">Hardware-Bound Derivation:</strong> Key derivation uses PBKDF2 with salt parameters tied directly to machine fingerprints and isolated DPAPI SafeStorage primitives.</li>
                  <li><strong className="text-slate-200">Zero-Fill Memory Wiping:</strong> All decrypted payload buffers in RAM are proactively overwritten with zeroes upon screen-lock or idle threshold events.</li>
                  <li><strong className="text-slate-200">TOTP Two-Factor Authentication:</strong> Integrated QR provisioning and verification using standard TOTP algorithms (RFC 6238) with bcrypt credential checks.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Database className="text-purple-400" size={18} />
                  2. Dual Storage Engine
                </h2>
                <p className="text-slate-400 mb-3 text-xs sm:text-sm">
                  GlyphBoard offers a hot-swappable storage back-end accessible directly through the application preferences:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="bg-[#0d1117] p-4 rounded-xl border border-[#30363d]">
                    <div className="text-cyan-400 font-bold mb-1">SQLite (WAL Engine)</div>
                    <p className="text-slate-400 text-[11px]">Recommended for high-concurrency and large snippet repositories. Employs Write-Ahead Logging for rapid write throughput.</p>
                  </div>
                  <div className="bg-[#0d1117] p-4 rounded-xl border border-[#30363d]">
                    <div className="text-purple-400 font-bold mb-1">IndexedDB Engine</div>
                    <p className="text-slate-400 text-[11px]">Fully browser-compatible client-side structured storage with zero external binary dependency.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Terminal className="text-emerald-400" size={18} />
                  3. Development & Build Setup
                </h2>
                <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-4 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
                  <div className="text-slate-500"># Clone the repository</div>
                  <div>git clone https://github.com/vedanshsaxena23/Glyphboard.git</div>
                  <div>cd Glyphboard</div>
                  <div className="text-slate-500 mt-2"># Install dependencies</div>
                  <div>npm install</div>
                  <div className="text-slate-500 mt-2"># Run desktop application in development mode</div>
                  <div>npm run dev</div>
                  <div className="text-slate-500 mt-2"># Package distributables for Windows & Linux</div>
                  <div>npm run build:all</div>
                </div>
              </div>

              <div className="border-t border-[#30363d] pt-6 flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>Licensed under GNU General Public License v3.0</span>
                <span>Author: Vedansh Saxena</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Global Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 border-t border-[#21262d] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono mt-12">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-4 h-4 object-contain opacity-70" />
          <span>GlyphBoard Aegis • Open Source under GNU GPLv3</span>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigateTo('overview')} 
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Overview
          </button>
          <button 
            onClick={() => navigateTo('hardware-vault')} 
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Vault
          </button>
          <button 
            onClick={() => navigateTo('totp-2fa')} 
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            TOTP 2FA
          </button>
          <button 
            onClick={() => navigateTo('dual-engine')} 
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            Storage
          </button>
          <button 
            onClick={() => navigateTo('readme')} 
            className="hover:text-slate-300 transition-colors cursor-pointer"
          >
            README
          </button>
        </div>
      </footer>
    </div>
  );
}