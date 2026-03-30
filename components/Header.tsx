'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { SupportedLanguage } from '@/types';
import { getTranslations, getDefaultLanguage } from '@/lib/translations';
import LanguageSelector from '@/components/LanguageSelector';

export default function Header() {
  const [lang, setLang] = useState<SupportedLanguage>('en');
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = getTranslations(lang);

  useEffect(() => {
    setLang(getDefaultLanguage());
    const handleStorage = () => setLang(getDefaultLanguage());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setLang(newLang);
    window.dispatchEvent(new Event('language-change'));
  };

  const navLinks = [
    { href: '/', label: t.home, icon: '🏠' },
    { href: '/crops', label: t.crops, icon: '🌾' },
    { href: '/pests', label: t.pestLibrary, icon: '🐛' },
    { href: '/weather', label: t.weather, icon: '🌦' },
    { href: '/assistant', label: t.assistant, icon: '🤖' },
    { href: '/market', label: t.market, icon: '💰' },
    { href: '/irrigation', label: t.irrigation, icon: '💧' },
    { href: '/pest-detection', label: t.pestDetection, icon: '📷' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-agri-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-agri-500/25">
              AX
            </div>
            <span className="text-lg font-bold gradient-text hidden sm:block">{t.appName}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector onLanguageChange={handleLanguageChange} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-xl animate-fade-in">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}