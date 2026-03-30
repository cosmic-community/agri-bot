'use client';

import { useState, useEffect } from 'react';
import type { Crop, PestDisease, SupportedLanguage } from '@/types';
import { getTranslations, getDefaultLanguage } from '@/lib/translations';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import CropCard from '@/components/CropCard';
import PestCard from '@/components/PestCard';
import Link from 'next/link';

interface HomePageClientProps {
  crops: Crop[];
  pests: PestDisease[];
}

export default function HomePageClient({ crops, pests }: HomePageClientProps) {
  const [lang, setLang] = useState<SupportedLanguage>('en');
  const t = getTranslations(lang);

  useEffect(() => {
    setLang(getDefaultLanguage());
    const handler = () => setLang(getDefaultLanguage());
    window.addEventListener('language-change', handler);
    return () => window.removeEventListener('language-change', handler);
  }, []);

  const features = [
    { icon: '🌦', title: t.weather, description: 'Real-time weather data with auto-location detection and 7-day forecasts.', href: '/weather', gradient: 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30' },
    { icon: '🤖', title: t.assistant, description: 'ChatGPT-like assistant combining weather, pest, market and crop intelligence.', href: '/assistant', gradient: 'bg-gradient-to-br from-agri-500/30 to-emerald-500/30' },
    { icon: '🐛', title: t.pestDetection, description: 'Upload images or use camera for AI-powered crop disease identification.', href: '/pest-detection', gradient: 'bg-gradient-to-br from-red-500/30 to-orange-500/30' },
    { icon: '💧', title: t.irrigation, description: 'Smart irrigation schedules based on weather, soil moisture and crop needs.', href: '/irrigation', gradient: 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30' },
    { icon: '💰', title: t.market, description: 'Crop price trends, demand analysis and 30-day market predictions.', href: '/market', gradient: 'bg-gradient-to-br from-amber-500/30 to-yellow-500/30' },
    { icon: '🌾', title: t.cropIntelligence, description: 'Smart crop recommendations based on location, soil, weather and season.', href: '/crops', gradient: 'bg-gradient-to-br from-green-500/30 to-lime-500/30' },
  ];

  return (
    <div>
      <HeroSection t={t} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">{t.features}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Six powerful modules working together to deliver comprehensive farming intelligence.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.href} {...f} />
          ))}
        </div>
      </section>

      {crops.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">🌾 {t.crops}</h2>
            <Link href="/crops" className="text-sm text-agri-400 hover:text-agri-300 transition-colors">
              {t.viewAll} →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {crops.slice(0, 6).map((crop) => (
              <CropCard key={crop.id} crop={crop} />
            ))}
          </div>
        </section>
      )}

      {pests.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">🐛 {t.pestLibrary}</h2>
            <Link href="/pests" className="text-sm text-agri-400 hover:text-agri-300 transition-colors">
              {t.viewAll} →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pests.slice(0, 6).map((pest) => (
              <PestCard key={pest.id} pest={pest} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}