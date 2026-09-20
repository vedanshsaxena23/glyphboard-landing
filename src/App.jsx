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
  FileCheck2,
  Menu,
  X
} from 'lucide-react';

const REPO_URL = "https://github.com/vedanshsaxena23/Glyphboard";
const PROFILE_GITHUB = "https://github.com/vedanshsaxena23";
const PROFILE_LINKEDIN = "https://www.linkedin.com/in/hey-its-vedansh-saxena/";
const PROFILE_INSTAGRAM = "https://www.instagram.com/_vedansh.saxena_/";
const DOWNLOAD_BASE = `${REPO_URL}/releases/download/1.0.0`;

const DOWNLOADS = {
  windowsExe: `${DOWNLOAD_BASE}/GlyphBoard.Aegis_Setup_1.0.0.exe`,
  windowsPortable: `${DOWNLOAD_BASE}/GlyphBoard.Aegis_Portable_1.0.0.exe`,
  linuxAppImage: `${DOWNLOAD_BASE}/GlyphBoard.Aegis-1.0.0.AppImage`,
  linuxDeb: `${DOWNLOAD_BASE}/glyphboard_1.0.0_amd64.deb`,
  linuxRpm: `${DOWNLOAD_BASE}/glyphboard-1.0.0.x86_64.rpm`,
};

function GithubIcon({ size = 16, className = "" }) {
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

function LinkedInIcon({ size = 16, className = "" }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className = "" }) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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
    <div className="relative min-h-screen bg-[#040c10] text-[#cbe5e9] selection:bg-[#499ea8] selection:text-[#040c10] font-mono overflow-x-hidden">
      {/* Background Starfield Glow & Atmospheric Radial Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d252e0f_1px,transparent_1px),linear-gradient(to_bottom,#0d252e0f_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] bg-gradient-to-b from-[#1b3d45]/20 via-[#0a1e27]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-80 right-0 w-80 h-80 bg-[#16363d]/15 blur-[100px] pointer-events-none" />

      {/* Top Console Navigation Bar */}
      <nav className="relative z-40 w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center border-b border-[#142c35]/80 bg-[#061117]/80 backdrop-blur-md">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('overview')}>
          <div className="w-9 h-9 rounded-lg bg-[#09181f] border border-[#2e5963] p-1 flex items-center justify-center shadow-[0_0_15px_rgba(73,158,168,0.15)]">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerText = '>_';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-widest text-[#e8f5f7] text-sm sm:text-base leading-none">GLYPHBOARD</span>
            <span className="text-[9px] text-[#4d7e87] tracking-widest mt-1">SEC_LEVEL // 0xAEGIS</span>
          </div>
          <span className="hidden md:inline-flex text-[11px] bg-[#091c24] border border-[#1b434e] text-[#64bcc7] px-2 py-0.5 rounded font-mono">
            v1.0.0 Aegis
          </span>
        </div>

        {/* Desktop Screen Switcher */}
        <div className="hidden md:flex items-center gap-1 bg-[#07151c] border border-[#142c35] p-1 rounded-lg text-xs">
          <button
            onClick={() => navigateTo('overview')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'overview' 
                ? 'bg-[#1b434e] text-[#e8f5f7] font-bold shadow-sm' 
                : 'text-[#618a93] hover:text-[#cbe5e9]'
            }`}
          >
            <Layers size={13} />
            <span>Terminal</span>
          </button>
          <button
            onClick={() => navigateTo('readme')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1.5 ${
              currentPage === 'readme' 
                ? 'bg-[#1b434e] text-[#e8f5f7] font-bold shadow-sm' 
                : 'text-[#618a93] hover:text-[#cbe5e9]'
            }`}
          >
            <BookOpen size={13} />
            <span>Docs</span>
          </button>
        </div>

        {/* Right CTA Links (Socials + Mobile Menu) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a 
            href={PROFILE_GITHUB} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1.5 text-xs bg-[#08171f] border border-[#1b3d45] hover:border-[#499ea8] px-2 sm:px-2.5 py-1.5 rounded text-[#9dcad2] transition-colors"
            title="GitHub"
          >
            <GithubIcon size={14} />
            <span className="hidden lg:inline">GitHub</span>
          </a>

          <a 
            href={PROFILE_LINKEDIN} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1.5 text-xs bg-[#08171f] border border-[#1b3d45] hover:border-[#499ea8] px-2 sm:px-2.5 py-1.5 rounded text-[#9dcad2] transition-colors"
            title="LinkedIn"
          >
            <LinkedInIcon size={14} />
            <span className="hidden lg:inline">LinkedIn</span>
          </a>

          <a 
            href={PROFILE_INSTAGRAM} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1.5 text-xs bg-[#08171f] border border-[#1b3d45] hover:border-[#499ea8] px-2 sm:px-2.5 py-1.5 rounded text-[#9dcad2] transition-colors"
            title="Instagram"
          >
            <InstagramIcon size={14} />
            <span className="hidden lg:inline">Instagram</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded bg-[#091921] border border-[#183944] text-[#8cbcc6] ml-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative z-30 bg-[#061117] border-b border-[#142c35] px-6 py-4 flex flex-col gap-3 text-xs"
          >
            <button
              onClick={() => navigateTo('overview')}
              className={`text-left py-2 px-3 rounded flex items-center gap-2 ${
                currentPage === 'overview' ? 'bg-[#14323c] text-white font-bold' : 'text-[#77a5af]'
              }`}
            >
              <Layers size={14} /> Overview Console
            </button>
            <button
              onClick={() => navigateTo('hardware-vault')}
              className="text-left py-2 px-3 rounded text-[#77a5af] hover:bg-[#0d222b] flex items-center gap-2"
            >
              <ShieldCheck size={14} /> Vault Specs
            </button>
            <button
              onClick={() => navigateTo('totp-2fa')}
              className="text-left py-2 px-3 rounded text-[#77a5af] hover:bg-[#0d222b] flex items-center gap-2"
            >
              <Key size={14} /> TOTP Subsystem
            </button>
            <button
              onClick={() => navigateTo('dual-engine')}
              className="text-left py-2 px-3 rounded text-[#77a5af] hover:bg-[#0d222b] flex items-center gap-2"
            >
              <Database size={14} /> Storage Engine
            </button>
            <button
              onClick={() => navigateTo('readme')}
              className={`text-left py-2 px-3 rounded flex items-center gap-2 ${
                currentPage === 'readme' ? 'bg-[#14323c] text-white font-bold' : 'text-[#77a5af]'
              }`}
            >
              <BookOpen size={14} /> README.md
            </button>
            <div className="pt-2 border-t border-[#142c35] grid grid-cols-3 gap-2">
              <a
                href={PROFILE_GITHUB}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-1 rounded bg-[#091b24] border border-[#1d4652] text-[#8bc3ce] flex items-center justify-center gap-1.5"
              >
                <GithubIcon size={13} /> GitHub
              </a>
              <a
                href={PROFILE_LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-1 rounded bg-[#091b24] border border-[#1d4652] text-[#8bc3ce] flex items-center justify-center gap-1.5"
              >
                <LinkedInIcon size={13} /> LinkedIn
              </a>
              <a
                href={PROFILE_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-1 rounded bg-[#091b24] border border-[#1d4652] text-[#8bc3ce] flex items-center justify-center gap-1.5"
              >
                <InstagramIcon size={13} /> Insta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 1. OVERVIEW PAGE                                                          */}
      {/* ========================================================================= */}
      {currentPage === 'overview' && (
        <motion.div
          key="overview"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Hero Section */}
          <section className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-14 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#214a54] bg-[#07161d]/90 text-[11px] text-[#69c0cd] mb-6 shadow-[0_0_20px_rgba(33,74,84,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52b9c7] animate-ping" />
              <span>STATION_ID // OFFLINE_COLD_STORAGE</span>
            </div>

            {/* Requested Hero Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#f0f8f9] mb-6 leading-tight">
              Your Code. Your Machine. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62c0ce] via-[#85dbe7] to-[#408a95]">
                Absolute Sovereignty.
              </span>
            </h1>

            <p className="text-[#7ea9b2] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              An offline code snippet manager engineered to eliminate cloud liability. 
              Protected with hardware-bound <span className="text-[#d8f0f3] font-mono">AES-256-GCM</span>, 
              air-gapped <span className="text-[#d8f0f3] font-mono">TOTP 2FA</span>, 
              and dynamic <span className="text-[#d8f0f3] font-mono">SQLite WAL</span> dual-engine caching.
            </p>

            {/* Direct Action Download Hub */}
            <div className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              <a
                href={DOWNLOADS.windowsExe}
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#2c6e79] to-[#3a8b98] hover:from-[#357f8c] hover:to-[#439eac] text-[#040c10] font-bold px-6 py-3 rounded-lg transition-all shadow-[0_4px_25px_rgba(44,110,121,0.35)] cursor-pointer text-xs"
              >
                <Download size={16} />
                <span>EXECUTE: WINDOWS (.EXE)</span>
              </a>

              {/* Linux Distribution Popover */}
              <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowLinuxDropdown((prev) => !prev)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#091b24] hover:bg-[#0e2733] border border-[#214954] text-[#b3dde4] px-5 py-3 rounded-lg transition-all text-xs cursor-pointer"
                >
                  <Terminal size={16} className="text-[#59b8c6]" />
                  <span>LINUX PACKAGES</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${showLinuxDropdown ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {showLinuxDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.12 }}
                      className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-80 bg-[#07151c] border border-[#285764] rounded-xl p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-50 text-left text-xs"
                    >
                      <div className="px-3 py-1 text-[10px] text-[#4d8692] uppercase tracking-wider flex justify-between">
                        <span>Target: x86_64 Targets</span>
                        <span>OFFLINE</span>
                      </div>
                      
                      <div className="space-y-1 mt-1">
                        <a 
                          href={DOWNLOADS.linuxAppImage} 
                          download
                          onClick={() => setShowLinuxDropdown(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#122e38] text-[#cbe5e9] transition-colors group"
                        >
                          <div>
                            <div className="font-bold text-[#e1f1f3]">Universal AppImage</div>
                            <div className="text-[10px] text-[#6d96a0] font-sans">Self-contained portable binary</div>
                          </div>
                          <Download size={14} className="text-[#52b9c7]" />
                        </a>

                        <a 
                          href={DOWNLOADS.linuxDeb} 
                          download
                          onClick={() => setShowLinuxDropdown(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#122e38] text-[#cbe5e9] transition-colors group"
                        >
                          <div>
                            <div className="font-bold text-[#e1f1f3]">Debian / Ubuntu (.deb)</div>
                            <div className="text-[10px] text-[#6d96a0] font-sans">dpkg distribution package</div>
                          </div>
                          <Download size={14} className="text-[#52b9c7]" />
                        </a>

                        <a 
                          href={DOWNLOADS.linuxRpm} 
                          download
                          onClick={() => setShowLinuxDropdown(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#122e38] text-[#cbe5e9] transition-colors group"
                        >
                          <div>
                            <div className="font-bold text-[#e1f1f3]">Fedora / RHEL (.rpm)</div>
                            <div className="text-[10px] text-[#6d96a0] font-sans">RedHat RPM binary</div>
                          </div>
                          <Download size={14} className="text-[#52b9c7]" />
                        </a>
                      </div>

                      <div className="border-t border-[#183944] my-1.5" />

                      <a 
                        href={DOWNLOADS.windowsPortable} 
                        download
                        onClick={() => setShowLinuxDropdown(false)}
                        className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-[#0f2832] text-[#86b0ba] text-[11px]"
                      >
                        <span>Windows Portable (.zip/.exe)</span>
                        <Download size={13} />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Terminal Clone Widget */}
            <div className="w-full max-w-lg mx-auto inline-flex items-center justify-between gap-3 bg-[#06141c] border border-[#173a46] px-3.5 py-2 rounded-lg text-xs text-[#72a1ab]">
              <div className="flex items-center gap-2 truncate">
                <span className="text-[#4198a4] select-none">$</span>
                <span className="truncate font-mono">git clone {REPO_URL}.git</span>
              </div>
              <button 
                onClick={handleCopyInstall} 
                className="hover:text-white transition-colors cursor-pointer flex-shrink-0"
                title="Copy shell command"
              >
                {copied ? <Check size={14} className="text-[#57d5a5]" /> : <Copy size={14} />}
              </button>
            </div>
          </section>

          {/* Interactive Vault Hardware State */}
          <section className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 mb-10">
            <div className="bg-[#071720]/90 border border-[#1c434f] rounded-xl p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center border flex-shrink-0 transition-all ${
                  isLocked 
                    ? "bg-[#291316]/50 border-[#692128] text-[#e0626e]" 
                    : "bg-[#0c2429]/60 border-[#2b6570] text-[#5ac7d6]"
                }`}>
                  {isLocked ? <Lock size={20} /> : <Unlock size={20} />}
                </div>
                <div className="text-left overflow-hidden">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-wider text-[#eaf7f9] truncate">
                      {isLocked ? "VAULT // ZERO_FILL_QUARANTINE" : "VAULT // ARMED_ACTIVE_MEM"}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isLocked ? "bg-[#e0626e]" : "bg-[#5ac7d6] animate-pulse"}`} />
                  </div>
                  <p className="text-[11px] text-[#719ea8] font-sans mt-0.5 truncate">
                    {isLocked 
                      ? "RAM buffers zeroed out. Re-authentication challenge required." 
                      : "DPAPI system keychain tied. Write-Ahead Logging active."}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsLocked(!isLocked)}
                className="w-full md:w-auto px-3.5 py-2 rounded border border-[#23505c] bg-[#0a1e27] hover:bg-[#12313d] text-[11px] text-[#7fcbd6] transition-colors cursor-pointer flex items-center justify-center gap-2 flex-shrink-0"
              >
                <Sparkles size={13} />
                <span>{isLocked ? "CHALLENGE KEY (UNLOCK)" : "TRIGGER ZERO-FILL"}</span>
              </button>
            </div>
          </section>

          {/* Core Feature Matrix */}
          <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 py-6">
            <div className="mb-4 text-[10px] uppercase tracking-widest text-[#4d8692] flex items-center justify-between">
              <span>SYSTEM ARCHITECTURE // SELECT SUBSYSTEM FOR TELEMETRY</span>
              <span className="hidden sm:inline">3 MODULES COMPILED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <motion.div 
                whileHover={{ y: -4, borderColor: "#4ba4b0" }}
                transition={{ duration: 0.15 }}
                onClick={() => navigateTo('hardware-vault')}
                className="bg-[#07161e]/80 border border-[#193b46] p-5 sm:p-6 rounded-xl cursor-pointer group hover:bg-[#0c222c] transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0e2730] border border-[#255663] flex items-center justify-center text-[#5ac7d6] mb-4 group-hover:scale-105 transition-transform">
                  <ShieldCheck size={18} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#e1f1f3] text-sm sm:text-base">Hardware-Bound Vault</h3>
                  <span className="text-xs text-[#5ac7d6] group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <p className="text-xs text-[#719ca6] font-sans leading-relaxed">
                  Payload keys isolated via DPAPI SafeStorage (Win) & Secret Service (Linux) with PBKDF2 salt derivation.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: "#4ba4b0" }}
                transition={{ duration: 0.15 }}
                onClick={() => navigateTo('totp-2fa')}
                className="bg-[#07161e]/80 border border-[#193b46] p-5 sm:p-6 rounded-xl cursor-pointer group hover:bg-[#0c222c] transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0e2730] border border-[#255663] flex items-center justify-center text-[#5ac7d6] mb-4 group-hover:scale-105 transition-transform">
                  <Key size={18} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#e1f1f3] text-sm sm:text-base">Integrated TOTP 2FA</h3>
                  <span className="text-xs text-[#5ac7d6] group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <p className="text-xs text-[#719ca6] font-sans leading-relaxed">
                  RFC 6238 two-factor authentication, local offline QR generation, and zero-knowledge canary verifiers.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: "#4ba4b0" }}
                transition={{ duration: 0.15 }}
                onClick={() => navigateTo('dual-engine')}
                className="bg-[#07161e]/80 border border-[#193b46] p-5 sm:p-6 rounded-xl cursor-pointer group hover:bg-[#0c222c] transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0e2730] border border-[#255663] flex items-center justify-center text-[#5ac7d6] mb-4 group-hover:scale-105 transition-transform">
                  <Database size={18} />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#e1f1f3] text-sm sm:text-base">Dual Engine Storage</h3>
                  <span className="text-xs text-[#5ac7d6] group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <p className="text-xs text-[#719ca6] font-sans leading-relaxed">
                  Choose between ultra-fast SQLite WAL for massive scale and lightweight client-side IndexedDB.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Monospace System Manifest Terminal */}
          <section className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 py-6">
            <div className="bg-[#051117] border border-[#1a3d48] rounded-xl overflow-hidden shadow-2xl text-xs">
              <div className="bg-[#071720] px-4 py-2.5 border-b border-[#1a3d48] flex items-center justify-between text-[#5f8e97]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#bd4853]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#af9247]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#468f77]"></div>
                  <span className="ml-2 text-[#99c8d1] flex items-center gap-1.5 font-mono text-[11px]">
                    <FileCode2 size={12} className="text-[#59b8c6]" /> system_manifest.json
                  </span>
                </div>
                <span className="text-[10px] text-[#4eaebc] bg-[#0a232c] px-2 py-0.5 rounded border border-[#1e4854]">
                  NET_IO: 0KB/s (AIRGAPPED)
                </span>
              </div>
              <div className="p-4 sm:p-6 text-[#9ac6cf] space-y-1 overflow-x-auto leading-relaxed font-mono">
                <div><span className="text-[#3d656e]">01</span> {"{"}</div>
                <div><span className="text-[#3d656e]">02</span> &nbsp;&nbsp;<span className="text-[#5ac7d6]">"release"</span>: <span className="text-[#7ce2b8]">"v1.0.0-aegis"</span>,</div>
                <div><span className="text-[#3d656e]">03</span> &nbsp;&nbsp;<span className="text-[#5ac7d6]">"cryptography"</span>: <span className="text-[#7ce2b8]">"AES-256-GCM + PBKDF2 (Hardware Salt)"</span>,</div>
                <div><span className="text-[#3d656e]">04</span> &nbsp;&nbsp;<span className="text-[#5ac7d6]">"keyIsolation"</span>: <span className="text-[#7ce2b8]">"DPAPI SafeStorage (Zero Disk Leak)"</span>,</div>
                <div><span className="text-[#3d656e]">05</span> &nbsp;&nbsp;<span className="text-[#5ac7d6]">"databases"</span>: [<span className="text-[#7ce2b8]">"SQLite (WAL Mode)"</span>, <span className="text-[#7ce2b8]">"IndexedDB"</span>],</div>
                <div><span className="text-[#3d656e]">06</span> &nbsp;&nbsp;<span className="text-[#5ac7d6]">"memorySecurity"</span>: <span className="text-[#7ce2b8]">"Zero-fill in-memory wipe on idle/lock"</span>,</div>
                <div><span className="text-[#3d656e]">07</span> &nbsp;&nbsp;<span className="text-[#5ac7d6]">"telemetryPings"</span>: <span className="text-[#eb7480]">0</span>,</div>
                <div><span className="text-[#3d656e]">08</span> &nbsp;&nbsp;<span className="text-[#5ac7d6]">"networkSockets"</span>: <span className="text-[#eb7480]">null</span></div>
                <div><span className="text-[#3d656e]">09</span> {"}"}</div>
              </div>
            </div>
          </section>

          {/* Lore Note */}
          <section className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 py-4">
            <div className="bg-[#06151c]/60 border border-[#15343e] rounded-lg p-4 text-center">
              <p className="text-[11px] text-[#6b99a3] leading-relaxed">
                [NOTICE] Aegis environment confirmed offline. Zero cloud panic, high data privacy, 
                and zero late-night audit anxiety.
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
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 py-12"
        >
          <button 
            onClick={() => navigateTo('overview')}
            className="inline-flex items-center gap-2 text-xs text-[#5ac7d6] hover:text-[#8fe0ec] mb-8 cursor-pointer"
          >
            <ArrowLeft size={14} /> [RETURN_TO_ROOT]
          </button>

          <div className="bg-[#07161f] border border-[#1b434e] rounded-xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex items-center gap-4 border-b border-[#14323b] pb-5">
              <div className="w-12 h-12 rounded-lg bg-[#0a232b] border border-[#2b6571] flex items-center justify-center text-[#5ac7d6]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <span className="text-[10px] text-[#4695a2] uppercase tracking-widest">MODULE: CRYPTO_VAULT</span>
                <h1 className="text-xl sm:text-2xl font-bold text-[#e8f6f8]">Hardware-Bound Encryption & SafeStorage</h1>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#82abb5] font-sans leading-relaxed">
              Standard developer clipboards dump sensitive credentials directly into unencrypted plaintext databases. 
              GlyphBoard wraps snippet payloads inside an authenticated AES-256-GCM envelope, where the key derivation 
              is anchored to the local OS hardware signature through DPAPI SafeStorage (Windows) and libsecret (Linux).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#051117] p-4 rounded-lg border border-[#163842]">
                <div className="text-[#5ac7d6] font-bold mb-1.5 flex items-center gap-2">
                  <Cpu size={15} /> DPAPI Signature Bind
                </div>
                <p className="text-[#6d9aa4] font-sans text-[11px] leading-relaxed">
                  Cryptographic keys cannot be decrypted if the database file is extracted or transferred to another host machine.
                </p>
              </div>
              <div className="bg-[#051117] p-4 rounded-lg border border-[#163842]">
                <div className="text-[#7ae1b8] font-bold mb-1.5 flex items-center gap-2">
                  <FileCheck2 size={15} /> PBKDF2-Derived Salt
                </div>
                <p className="text-[#6d9aa4] font-sans text-[11px] leading-relaxed">
                  Iterative derivation prevents dictionary attacks even in cold-storage scenarios.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#14323b]">
              <span className="text-[11px] text-[#4d7f8a]">STATUS: VERIFIED SECURE</span>
              <button 
                onClick={() => navigateTo('totp-2fa')}
                className="text-xs text-[#5ac7d6] hover:text-[#8fe0ec] flex items-center gap-1.5 cursor-pointer"
              >
                Next: TOTP Gate →
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
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 py-12"
        >
          <button 
            onClick={() => navigateTo('overview')}
            className="inline-flex items-center gap-2 text-xs text-[#5ac7d6] hover:text-[#8fe0ec] mb-8 cursor-pointer"
          >
            <ArrowLeft size={14} /> [RETURN_TO_ROOT]
          </button>

          <div className="bg-[#07161f] border border-[#1b434e] rounded-xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex items-center gap-4 border-b border-[#14323b] pb-5">
              <div className="w-12 h-12 rounded-lg bg-[#0a232b] border border-[#2b6571] flex items-center justify-center text-[#5ac7d6]">
                <Key size={24} />
              </div>
              <div>
                <span className="text-[10px] text-[#4695a2] uppercase tracking-wider">MODULE: AUTHENTICATION</span>
                <h1 className="text-xl sm:text-2xl font-bold text-[#e8f6f8]">Integrated Offline TOTP 2FA</h1>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#82abb5] font-sans leading-relaxed">
              Enforce two-factor authentication on local workstation vaults without calling any cloud servers. 
              The application uses mathematical RFC 6238 key generation rendered locally on canvas, compatible 
              with Google Authenticator, Aegis, Bitwarden, and 1Password.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#051117] p-4 rounded-lg border border-[#163842]">
                <div className="text-[#5ac7d6] font-bold mb-1.5 flex items-center gap-2">
                  <QrCode size={15} /> Zero-Cloud Pairing
                </div>
                <p className="text-[#6d9aa4] font-sans text-[11px] leading-relaxed">
                  QR tokens are generated strictly in-memory without contacting external telemetry or graphic rendering APIs.
                </p>
              </div>
              <div className="bg-[#051117] p-4 rounded-lg border border-[#163842]">
                <div className="text-[#7ae1b8] font-bold mb-1.5 flex items-center gap-2">
                  <KeyRound size={15} /> Canary Verification
                </div>
                <p className="text-[#6d9aa4] font-sans text-[11px] leading-relaxed">
                  Decryption generates verification checkbits to detect database bitrot or tampering immediately.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#14323b]">
              <button 
                onClick={() => navigateTo('hardware-vault')}
                className="text-xs text-[#719ea8] hover:text-white cursor-pointer"
              >
                ← Prev: Hardware Vault
              </button>
              <button 
                onClick={() => navigateTo('dual-engine')}
                className="text-xs text-[#5ac7d6] hover:text-[#8fe0ec] flex items-center gap-1.5 cursor-pointer"
              >
                Next: Storage Engine →
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
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 py-12"
        >
          <button 
            onClick={() => navigateTo('overview')}
            className="inline-flex items-center gap-2 text-xs text-[#5ac7d6] hover:text-[#8fe0ec] mb-8 cursor-pointer"
          >
            <ArrowLeft size={14} /> [RETURN_TO_ROOT]
          </button>

          <div className="bg-[#07161f] border border-[#1b434e] rounded-xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex items-center gap-4 border-b border-[#14323b] pb-5">
              <div className="w-12 h-12 rounded-lg bg-[#0a232b] border border-[#2b6571] flex items-center justify-center text-[#5ac7d6]">
                <Database size={24} />
              </div>
              <div>
                <span className="text-[10px] text-[#4695a2] uppercase tracking-wider">MODULE: STORAGE_PIPELINE</span>
                <h1 className="text-xl sm:text-2xl font-bold text-[#e8f6f8]">Hot-Swappable Dual Storage Engines</h1>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#82abb5] font-sans leading-relaxed">
              Select between SQLite with Write-Ahead Logging for high-throughput snippet repositories, 
              or browser-standard IndexedDB for sandbox deployments without native compiled dependencies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#051117] p-4 rounded-lg border border-[#163842]">
                <div className="text-[#5ac7d6] font-bold mb-1.5 flex items-center gap-2">
                  <HardDrive size={15} /> SQLite WAL Mode
                </div>
                <p className="text-[#6d9aa4] font-sans text-[11px] leading-relaxed">
                  Concurrently write and read thousands of snippets without blocking clipboard capture threads.
                </p>
              </div>
              <div className="bg-[#051117] p-4 rounded-lg border border-[#163842]">
                <div className="text-[#7ae1b8] font-bold mb-1.5 flex items-center gap-2">
                  <Layers size={15} /> IndexedDB Engine
                </div>
                <p className="text-[#6d9aa4] font-sans text-[11px] leading-relaxed">
                  Native client-side persistence ideal for memory-constrained virtual environments.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#14323b]">
              <button 
                onClick={() => navigateTo('totp-2fa')}
                className="text-xs text-[#719ea8] hover:text-white cursor-pointer"
              >
                ← Prev: TOTP Gate
              </button>
              <button 
                onClick={() => navigateTo('readme')}
                className="text-xs text-[#5ac7d6] hover:text-[#8fe0ec] flex items-center gap-1.5 cursor-pointer"
              >
                Next: README.md →
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
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 py-12"
        >
          <div className="bg-[#07161f] border border-[#1b434e] rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#091a24] px-4 sm:px-6 py-3 border-b border-[#14323b] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <FileCode2 className="text-[#5ac7d6]" size={15} />
                <span className="text-[#e2f1f3] font-bold">README.md</span>
                <span className="text-[#517f8a] text-[10px] hidden sm:inline">// REPO_ROOT</span>
              </div>
              <a 
                href={`${REPO_URL}/blob/main/README.md`} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 text-[11px] text-[#5ac7d6] hover:text-[#8de3ee]"
              >
                <span>GitHub Raw</span>
                <ExternalLink size={11} />
              </a>
            </div>

            <div className="p-5 sm:p-10 text-xs sm:text-sm text-[#8ab1bb] space-y-6 leading-relaxed font-sans">
              <div className="border-b border-[#15343d] pb-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#051117] border border-[#25525e] p-1.5 flex-shrink-0">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-[#ebf7f9] font-mono">GlyphBoard (v1.0.0 — Aegis)</h1>
                  <p className="text-xs text-[#5d8d97] font-mono mt-0.5">Air-gapped snippet vault & developer clipboard manager</p>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-[#e1f1f3] font-mono mb-2 flex items-center gap-2">
                  <Terminal size={14} className="text-[#5ac7d6]" />
                  1. QUICKSTART INSTRUCTIONS
                </h2>
                <div className="bg-[#051117] border border-[#153842] rounded-lg p-3 sm:p-4 font-mono text-[11px] text-[#86b5bf] space-y-1.5 overflow-x-auto">
                  <div className="text-[#3c6670]"># Clone repository</div>
                  <div>git clone https://github.com/vedanshsaxena23/Glyphboard.git</div>
                  <div>cd Glyphboard</div>
                  <div className="text-[#3c6670] pt-2"># Install dependencies & run</div>
                  <div>npm install</div>
                  <div className="text-[#3c6670] pt-2"># Build multi-platform packages</div>
                  <div>npm run electron:build</div>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-[#e1f1f3] font-mono mb-2 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#5ac7d6]" />
                  2. SPECIFICATIONS
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#75a0aa]">
                  <li><strong className="text-[#d8f0f3]">Encryption:</strong> AES-256-GCM payload cipher with automated PBKDF2 salt derivation.</li>
                  <li><strong className="text-[#d8f0f3]">Isolation:</strong> DPAPI on Windows and Secret Service on Linux.</li>
                  <li><strong className="text-[#d8f0f3]">Memory Sanitization:</strong> In-memory buffers proactively wiped upon system idle thresholds.</li>
                </ul>
              </div>

              <div className="border-t border-[#15343d] pt-4 flex justify-between items-center text-[10px] text-[#517d87] font-mono">
                <span>LICENSE: GNU GPLv3</span>
                <span>MAINTAINER: Vedansh Saxena</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Global Terminal Footer */}
      <footer className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 border-t border-[#142c35]/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#527d87] mt-16">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-4 h-4 object-contain opacity-60" />
            <span>GLYPHBOARD AEGIS // GNU GENERAL PUBLIC LICENSE v3.0</span>
          </div>
          <span className="hidden sm:inline text-[#244652]">|</span>
          <div className="flex items-center gap-3 text-[11px]">
            <a href={PROFILE_GITHUB} target="_blank" rel="noreferrer" className="hover:text-[#9fdbe4] transition-colors flex items-center gap-1">
              <GithubIcon size={12} /> GitHub
            </a>
            <a href={PROFILE_LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-[#9fdbe4] transition-colors flex items-center gap-1">
              <LinkedInIcon size={12} /> LinkedIn
            </a>
            <a href={PROFILE_INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-[#9fdbe4] transition-colors flex items-center gap-1">
              <InstagramIcon size={12} /> Instagram
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <button onClick={() => navigateTo('overview')} className="hover:text-[#9fdbe4] transition-colors cursor-pointer">Terminal</button>
          <button onClick={() => navigateTo('hardware-vault')} className="hover:text-[#9fdbe4] transition-colors cursor-pointer">Vault</button>
          <button onClick={() => navigateTo('totp-2fa')} className="hover:text-[#9fdbe4] transition-colors cursor-pointer">TOTP</button>
          <button onClick={() => navigateTo('dual-engine')} className="hover:text-[#9fdbe4] transition-colors cursor-pointer">Storage</button>
          <button onClick={() => navigateTo('readme')} className="hover:text-[#9fdbe4] transition-colors cursor-pointer">Docs</button>
        </div>
      </footer>
    </div>
  );
}