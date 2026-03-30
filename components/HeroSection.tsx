'use client';

import Link from 'next/link';
import type { TranslationStrings } from '@/lib/translations';

interface HeroSectionProps {
  t: TranslationStrings;
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-agri-950/40 via-slate-950 to-emerald-950/30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-agri-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agri-500/10 border border-agri-500/20 text-agri-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-agri-400 animate-pulse" />
            AI-Powered Agriculture Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t.heroTitle.split(' ').map((word, i) => {
              if (i >= t.heroTitle.split(' ').length - 2) {
                return <span key={i} className="gradient-text">{word} </span>;
              }
              return <span key={i}>{word} </span>;
            })}
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/assistant"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-agri-500 to-emerald-600 text-white font-semibold hover:from-agri-400 hover:to-emerald-500 transition-all shadow-xl shadow-agri-500/25 hover:shadow-agri-500/40"
            >
              🤖 {t.getStarted}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/crops"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-800/60 border border-slate-700/50 text-white font-semibold hover:bg-slate-700/60 hover:border-slate-600/50 transition-all"
            >
              🌾 {t.learnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}