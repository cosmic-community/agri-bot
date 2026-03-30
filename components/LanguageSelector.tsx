'use client';

import { useState, useEffect, useRef } from 'react';
import type { SupportedLanguage } from '@/types';
import { languageNames, getDefaultLanguage, setLanguage } from '@/lib/translations';

interface LanguageSelectorProps {
  onLanguageChange: (lang: SupportedLanguage) => void;
}

export default function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState<SupportedLanguage>('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrent(getDefaultLanguage());
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: SupportedLanguage) => {
    setCurrent(lang);
    setLanguage(lang);
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700/50 hover:border-agri-500/50 transition-all text-sm"
      >
        <span>🌐</span>
        <span>{languageNames[current]}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in">
          {(Object.keys(languageNames) as SupportedLanguage[]).map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-700/50 transition-colors ${
                current === lang ? 'bg-agri-500/20 text-agri-400' : 'text-slate-300'
              }`}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}