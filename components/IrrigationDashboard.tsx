'use client';

import { useState, useEffect } from 'react';
import type { IrrigationAdvice } from '@/types';
import StatsCard from '@/components/StatsCard';

export default function IrrigationDashboard() {
  const [advice, setAdvice] = useState<IrrigationAdvice | null>(null);

  useEffect(() => {
    // Simulated irrigation data (would connect to sensor API in production)
    setAdvice({
      bestTime: '6:00 AM - 7:30 AM',
      waterQuantity: '25-30 liters per sq meter',
      method: 'Drip Irrigation',
      soilMoisture: 42,
      nextIrrigationIn: '4 hours',
      tips: [
        'Water early morning to minimize evaporation',
        'Use drip irrigation to save 40-60% water',
        'Check soil moisture before watering',
        'Mulch around plants to retain moisture',
        'Avoid overhead watering during windy conditions',
        'Group plants with similar water needs together',
      ],
    });
  }, []);

  if (!advice) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatsCard icon="⏰" label="Best Time" value={advice.bestTime} color="text-blue-400" />
        <StatsCard icon="💧" label="Water Qty" value={advice.waterQuantity} color="text-cyan-400" />
        <StatsCard icon="🔧" label="Method" value={advice.method} color="text-agri-400" />
        <StatsCard icon="⏱️" label="Next In" value={advice.nextIrrigationIn} color="text-amber-400" />
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Soil Moisture Level</h3>
        <div className="w-full h-6 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-red-500 via-amber-500 to-agri-500"
            style={{ width: `${advice.soilMoisture}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-400 mt-2">
          <span>Dry (0%)</span>
          <span className="font-semibold text-agri-400">{advice.soilMoisture}%</span>
          <span>Saturated (100%)</span>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">💡 Water Saving Tips</h3>
        <ul className="space-y-3">
          {advice.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-agri-500/20 text-agri-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-sm text-slate-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}