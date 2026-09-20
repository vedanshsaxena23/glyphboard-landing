import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Database, 
  KeyRound, 
  Terminal, 
  Download, 
  Check, 
  Copy, 
  Lock, 
  Unlock, 
  ChevronDown, 
  BookOpen, 
  ArrowLeft, 
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

const REPO_URL = "https://github.com/vedanshsaxena23/Glyphboard";
const PROFILE_GITHUB = "https://github.com/vedanshsaxena23";
const PROFILE_LINKEDIN = "https://linkedin.com/in/hey-its-vedansh-saxena";
const PROFILE_INSTAGRAM = "https://instagram.com/_vedansh.saxena_";
const DOWNLOAD_BASE = `${REPO_URL}/releases/download/1.0.0`;

const DOWNLOADS = {
  windowsExe: `${DOWNLOAD_BASE}/GlyphBoard.Aegis_Setup_1.0.0.exe`,
  windowsPortable: `${DOWNLOAD_BASE}/GlyphBoard.Aegis_Portable_1.0.0.exe`,
  linuxAppImage: `${DOWNLOAD_BASE}/GlyphBoard.Aegis-1.0.0.AppImage`,
  linuxDeb: `${DOWNLOAD_BASE}/glyphboard_1.0.0_amd64.deb`,
  linuxRpm: `${DOWNLOAD_BASE}/glyphboard-1.0.0.x86_64.rpm`,
};

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -4 },
  transition: { duration: 0.18, ease: 'easeOut' }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [copied, setCopied] = useState(false);
  const [showLinuxDropdown, setShowLinuxDropdown] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070b0e] text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-200 antialiased overflow-x-hidden">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#070b0e]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('overview')}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center p-1.5 shadow-sm"
            >
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerText = 'GB';
                }}
              />
            </motion.div>
            <span className="font-semibold text-sm tracking-tight text-white">GlyphBoard</span>
            <span className="text-[11px] font-mono text-teal-400 bg-teal-950/60 border border-teal-800/50 px-2 py-0.5 rounded">
              v1.0.0 Aegis
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-slate-400">
            <button
              onClick={() => navigateTo('overview')}
              className={`hover:text-white transition-colors cursor-pointer ${currentPage === 'overview' ? 'text-white font-medium' : ''}`}
            >
              Overview
            </button>
            <button
              onClick={() => navigateTo('readme')}
              className={`hover:text-white transition-colors cursor-pointer ${currentPage === 'readme' ? 'text-white font-medium' : ''}`}
            >
              Documentation
            </button>
          </nav>

          {/* External Social Profiles */}
          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
            <motion.a whileHover={{ y: -1 }} href={PROFILE_GITHUB} target="_blank" rel="noreferrer" className="hover:text-slate-200 transition-colors p-1.5" title="GitHub">
              <GithubIcon />
            </motion.a>
            <motion.a whileHover={{ y: -1 }} href={PROFILE_LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-slate-200 transition-colors p-1.5" title="LinkedIn">
              <LinkedInIcon />
            </motion.a>
            <motion.a whileHover={{ y: -1 }} href={PROFILE_INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-slate-200 transition-colors p-1.5" title="Instagram">
              <InstagramIcon />
            </motion.a>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-slate-400 hover:text-white p-1"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="md:hidden border-t border-slate-800 bg-[#070b0e] px-4 py-3 space-y-2 text-xs overflow-hidden"
            >
              <button onClick={() => navigateTo('overview')} className="block w-full text-left py-1.5 text-slate-300">
                Overview
              </button>
              <button onClick={() => navigateTo('hardware-vault')} className="block w-full text-left py-1.5 text-slate-300">
                Hardware Vault
              </button>
              <button onClick={() => navigateTo('totp-2fa')} className="block w-full text-left py-1.5 text-slate-300">
                TOTP 2FA
              </button>
              <button onClick={() => navigateTo('dual-engine')} className="block w-full text-left py-1.5 text-slate-300">
                Dual Storage Engine
              </button>
              <button onClick={() => navigateTo('readme')} className="block w-full text-left py-1.5 text-slate-300">
                README / Docs
              </button>
              <div className="flex items-center gap-4 pt-2 border-t border-slate-800/80">
                <a href={PROFILE_GITHUB} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1.5">
                  <GithubIcon size={14} /> GitHub
                </a>
                <a href={PROFILE_LINKEDIN} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1.5">
                  <LinkedInIcon size={14} /> LinkedIn
                </a>
                <a href={PROFILE_INSTAGRAM} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1.5">
                  <InstagramIcon size={14} /> Instagram
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {/* ========================================================================= */}
        {/* 1. OVERVIEW PAGE                                                          */}
        {/* ========================================================================= */}
        {currentPage === 'overview' && (
          <motion.main key="overview" {...pageTransition} className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            {/* Hero Section */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-800/40 bg-teal-950/30 text-teal-300 text-xs font-mono mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                A local-first clipboard manager that doesn't sync your secrets to the cloud.
              </motion.div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                Your Code. Your Machine. <br />
                <span className="text-teal-400">Absolute Sovereignty.</span>
              </h1>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                An offline code snippet workspace built for developers who don't want their clipboard syncing to third-party clouds. Encrypted locally with hardware-bound keys and zero network dependencies.
              </p>

              {/* Downloads Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={DOWNLOADS.windowsExe}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-xs transition-colors shadow-sm"
                >
                  <Download size={15} />
                  <span>Download for Windows (.exe)</span>
                </motion.a>

                <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setShowLinuxDropdown(!showLinuxDropdown)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 px-4 py-2.5 rounded-lg text-xs transition-colors"
                  >
                    <Terminal size={15} className="text-teal-400" />
                    <span>Linux Packages</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${showLinuxDropdown ? "rotate-180" : ""}`} />
                  </motion.button>

                  <AnimatePresence>
                    {showLinuxDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.12 }}
                        className="absolute left-0 right-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-64 bg-slate-900 border border-slate-700 rounded-lg p-1.5 shadow-xl z-50 text-left text-xs"
                      >
                        <a href={DOWNLOADS.linuxAppImage} download className="block px-3 py-2 rounded hover:bg-slate-800 text-slate-200">
                          AppImage (Universal)
                        </a>
                        <a href={DOWNLOADS.linuxDeb} download className="block px-3 py-2 rounded hover:bg-slate-800 text-slate-200">
                          Debian / Ubuntu (.deb)
                        </a>
                        <a href={DOWNLOADS.linuxRpm} download className="block px-3 py-2 rounded hover:bg-slate-800 text-slate-200">
                          Fedora / RHEL (.rpm)
                        </a>
                        <div className="border-t border-slate-800 my-1" />
                        <a href={DOWNLOADS.windowsPortable} download className="block px-3 py-1.5 rounded hover:bg-slate-800 text-slate-400 text-[11px]">
                          Windows Portable (.exe)
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Git Clone Bar */}
              <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-md text-xs font-mono text-slate-400 max-w-full">
                <span className="text-teal-400 select-none">$</span>
                <span className="truncate">git clone {REPO_URL}.git</span>
                <button onClick={handleCopyInstall} className="hover:text-white transition-colors cursor-pointer pl-2" title="Copy">
                  {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </button>
              </div>
            </div>

            {/* Interactive Vault Demo */}
            <motion.div 
              layout
              className="border border-slate-800 bg-slate-900/40 rounded-xl p-5 mb-14"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <motion.div 
                    key={isLocked ? "locked" : "unlocked"}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                      isLocked ? "bg-rose-950/40 border-rose-800 text-rose-400" : "bg-teal-950/40 border-teal-800 text-teal-400"
                    }`}
                  >
                    {isLocked ? <Lock size={16} /> : <Unlock size={16} />}
                  </motion.div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {isLocked ? "Vault State: Locked (Zero-Fill Memory)" : "Vault State: Active & Decrypted"}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {isLocked ? "In-memory buffers zeroed out. Re-auth challenge required." : "Payloads authenticated via AES-256-GCM and DPAPI SafeStorage."}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsLocked(!isLocked)}
                  className="text-xs font-mono px-3 py-1.5 rounded border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors w-full sm:w-auto cursor-pointer"
                >
                  {isLocked ? "Simulate Unlock" : "Simulate Auto-Lock"}
                </motion.button>
              </div>
            </motion.div>

            {/* Feature Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              <motion.div 
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                onClick={() => navigateTo('hardware-vault')}
                className="border border-slate-800 hover:border-slate-700 bg-slate-900/20 p-5 rounded-xl cursor-pointer transition-colors"
              >
                <div className="w-8 h-8 rounded bg-teal-950/50 border border-teal-800/40 text-teal-400 flex items-center justify-center mb-3">
                  <Shield size={16} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1.5">Hardware-Bound Vault</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Derives keys with PBKDF2 and ties payload decryption directly to your OS keychain (DPAPI / libsecret).
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                onClick={() => navigateTo('totp-2fa')}
                className="border border-slate-800 hover:border-slate-700 bg-slate-900/20 p-5 rounded-xl cursor-pointer transition-colors"
              >
                <div className="w-8 h-8 rounded bg-teal-950/50 border border-teal-800/40 text-teal-400 flex items-center justify-center mb-3">
                  <KeyRound size={16} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1.5">Integrated TOTP 2FA</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Local RFC 6238 two-factor authentication. Pairing QR code is rendered locally without pinging external APIs.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                onClick={() => navigateTo('dual-engine')}
                className="border border-slate-800 hover:border-slate-700 bg-slate-900/20 p-5 rounded-xl cursor-pointer transition-colors"
              >
                <div className="w-8 h-8 rounded bg-teal-950/50 border border-teal-800/40 text-teal-400 flex items-center justify-center mb-3">
                  <Database size={16} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1.5">Dual-Engine Storage</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Choose between high-throughput SQLite in Write-Ahead Logging (WAL) mode or browser-standard IndexedDB.
                </p>
              </motion.div>
            </div>
          </motion.main>
        )}

        {/* ========================================================================= */}
        {/* 2. DEDICATED PAGE: HARDWARE VAULT                                         */}
        {/* ========================================================================= */}
        {currentPage === 'hardware-vault' && (
          <motion.main key="hardware-vault" {...pageTransition} className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
            <button onClick={() => navigateTo('overview')} className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-6 cursor-pointer">
              <ArrowLeft size={13} /> Back to Overview
            </button>
            
            <div className="border border-slate-800 bg-slate-900/30 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Shield size={20} className="text-teal-400" />
                <h1 className="text-lg font-bold text-white">Hardware-Bound Vault & Key Isolation</h1>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Standard clipboards store copied snippets in cleartext within local SQLite databases. If malware or another user grabs your database file, all API keys are compromised.
              </p>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                GlyphBoard wraps snippets inside authenticated <strong>AES-256-GCM</strong> envelopes. The master encryption key is derived using PBKDF2 and isolated with your operating system's native keychain:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                  <div className="font-semibold text-white mb-1">Windows (DPAPI)</div>
                  <div className="text-slate-400 text-[11px]">Protected using Windows CryptProtectData. The database file cannot be read if copied to another machine.</div>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                  <div className="font-semibold text-white mb-1">Linux (Secret Service)</div>
                  <div className="text-slate-400 text-[11px]">Integrated with GNOME Keyring / KWallet via libsecret for user-session isolation.</div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button onClick={() => navigateTo('totp-2fa')} className="text-xs text-teal-400 hover:text-teal-300 cursor-pointer">
                  Next: Integrated TOTP 2FA →
                </button>
              </div>
            </div>
          </motion.main>
        )}

        {/* ========================================================================= */}
        {/* 3. DEDICATED PAGE: TOTP 2FA                                               */}
        {/* ========================================================================= */}
        {currentPage === 'totp-2fa' && (
          <motion.main key="totp-2fa" {...pageTransition} className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
            <button onClick={() => navigateTo('overview')} className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-6 cursor-pointer">
              <ArrowLeft size={13} /> Back to Overview
            </button>

            <div className="border border-slate-800 bg-slate-900/30 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <KeyRound size={20} className="text-teal-400" />
                <h1 className="text-lg font-bold text-white">Offline Two-Factor Authentication</h1>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                GlyphBoard provides native 2FA support without requiring an internet connection or authentication server.
              </p>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="bg-slate-900/60 p-3.5 rounded-lg border border-slate-800">
                  <span className="font-semibold text-white block mb-1">Local Canvas QR Rendering</span>
                  The setup QR code is calculated mathematically and drawn onto an HTML5 canvas element. Zero HTTP requests are dispatched to generate the image.
                </div>
                <div className="bg-slate-900/60 p-3.5 rounded-lg border border-slate-800">
                  <span className="font-semibold text-white block mb-1">RFC 6238 Compatibility</span>
                  Works with any standard authenticator app including Google Authenticator, Aegis, Bitwarden, and 1Password.
                </div>
              </div>

              <div className="pt-2 flex justify-between">
                <button onClick={() => navigateTo('hardware-vault')} className="text-xs text-slate-400 hover:text-white cursor-pointer">
                  ← Prev: Hardware Vault
                </button>
                <button onClick={() => navigateTo('dual-engine')} className="text-xs text-teal-400 hover:text-teal-300 cursor-pointer">
                  Next: Storage Engine →
                </button>
              </div>
            </div>
          </motion.main>
        )}

        {/* ========================================================================= */}
        {/* 4. DEDICATED PAGE: DUAL ENGINE                                            */}
        {/* ========================================================================= */}
        {currentPage === 'dual-engine' && (
          <motion.main key="dual-engine" {...pageTransition} className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
            <button onClick={() => navigateTo('overview')} className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white mb-6 cursor-pointer">
              <ArrowLeft size={13} /> Back to Overview
            </button>

            <div className="border border-slate-800 bg-slate-900/30 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Database size={20} className="text-teal-400" />
                <h1 className="text-lg font-bold text-white">Dual-Engine Storage Architecture</h1>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Different environments have different requirements. GlyphBoard offers an interchangeable storage layer that can be configured in settings:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                  <div className="font-semibold text-white mb-1">SQLite (WAL Mode)</div>
                  <div className="text-slate-400 text-[11px]">Recommended for power users with tens of thousands of snippets. Uses Write-Ahead Logging for non-blocking concurrent reads and writes.</div>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-lg border border-slate-800">
                  <div className="font-semibold text-white mb-1">IndexedDB</div>
                  <div className="text-slate-400 text-[11px]">Clean browser-standard storage layer with zero external binary compilation dependencies. Ideal for portable or sandboxed environments.</div>
                </div>
              </div>

              <div className="pt-2 flex justify-between">
                <button onClick={() => navigateTo('totp-2fa')} className="text-xs text-slate-400 hover:text-white cursor-pointer">
                  ← Prev: TOTP 2FA
                </button>
                <button onClick={() => navigateTo('readme')} className="text-xs text-teal-400 hover:text-teal-300 cursor-pointer">
                  Next: README →
                </button>
              </div>
            </div>
          </motion.main>
        )}

        {/* ========================================================================= */}
        {/* 5. DEDICATED PAGE: README                                                 */}
        {/* ========================================================================= */}
        {currentPage === 'readme' && (
          <motion.main key="readme" {...pageTransition} className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
            <div className="border border-slate-800 bg-slate-900/30 rounded-xl overflow-hidden">
              <div className="bg-slate-900/80 px-5 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-300">README.md</span>
                <a href={`${REPO_URL}/blob/main/README.md`} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline flex items-center gap-1">
                  View on GitHub <ExternalLink size={12} />
                </a>
              </div>

              <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div>
                  <h1 className="text-lg font-bold text-white mb-1">GlyphBoard: Aegis (v1.0.0)</h1>
                  <p className="text-slate-400 text-xs">Offline developer snippet manager and clipboard vault.</p>
                </div>

                <div>
                  <h2 className="font-semibold text-white text-xs uppercase tracking-wider mb-2">Development Setup</h2>
                  <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-xs space-y-1 text-slate-300 overflow-x-auto">
                    <div className="text-slate-500"># Clone the repository</div>
                    <div>git clone {REPO_URL}.git</div>
                    <div>cd Glyphboard</div>
                    <div className="text-slate-500 pt-2"># Install dependencies & run</div>
                    <div>npm install</div>
                    <div>npm run dev</div>
                    <div className="text-slate-500 pt-2"># Package multi-platform binaries</div>
                    <div>npm run electron:build</div>
                  </div>
                </div>

                <div>
                  <h2 className="font-semibold text-white text-xs uppercase tracking-wider mb-2">Core Specifications</h2>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-400">
                    <li><strong className="text-slate-200">Cryptography:</strong> AES-256-GCM authenticated cipher with PBKDF2 key derivation.</li>
                    <li><strong className="text-slate-200">Key Isolation:</strong> Chromium DPAPI SafeStorage (Windows) and Secret Service (Linux).</li>
                    <li><strong className="text-slate-200">Offline 2FA:</strong> RFC 6238 TOTP verification with local canvas QR generation.</li>
                    <li><strong className="text-slate-200">License:</strong> GNU General Public License v3.0.</li>
                  </ul>
                </div>

                <div className="border-t border-slate-800 pt-4 flex justify-between text-xs text-slate-500 font-mono">
                  <span>License: GNU GPLv3</span>
                  <span>Author: Vedansh Saxena</span>
                </div>
              </div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-4 sm:px-6 mt-16 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>GlyphBoard Aegis • Open source under GNU GPLv3</span>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('overview')} className="hover:text-slate-300 cursor-pointer">Overview</button>
            <button onClick={() => navigateTo('hardware-vault')} className="hover:text-slate-300 cursor-pointer">Vault</button>
            <button onClick={() => navigateTo('totp-2fa')} className="hover:text-slate-300 cursor-pointer">2FA</button>
            <button onClick={() => navigateTo('dual-engine')} className="hover:text-slate-300 cursor-pointer">Storage</button>
            <button onClick={() => navigateTo('readme')} className="hover:text-slate-300 cursor-pointer">Docs</button>
          </div>
        </div>
      </footer>
    </div>
  );
}