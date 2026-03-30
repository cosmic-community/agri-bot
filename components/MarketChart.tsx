'use client';

import { useState } from 'react';
import type { MarketData } from '@/types';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function MarketChart() {
  const [crop, setCrop] = useState('');
  const [data, setData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMarket = async () => {
    if (!crop.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/market?crop=${encodeURIComponent(crop.trim())}`);
      if (!res.ok) throw new Error('Failed');
      const result = await res.json();
      setData(result.data);
    } catch {
      setError('Could not fetch market data. Ensure MARKET_API is configured.');
    } finally {
      setLoading(false);
    }
  };

  const maxPrice = data ? Math.max(...data.priceHistory.map((p) => p.price), ...data.prediction.map((p) => p.price)) : 0;
  const minPrice = data ? Math.min(...data.priceHistory.map((p) => p.price), ...data.prediction.map((p) => p.price)) : 0;
  const range = maxPrice - minPrice || 1;

  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <input
          type="text"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchMarket()}
          placeholder="Enter crop name (e.g., Wheat, Rice, Cotton)..."
          className="flex-1 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-agri-500/50 transition-colors text-sm"
        />
        <button
          onClick={searchMarket}
          className="px-6 py-3 rounded-xl bg-agri-500 hover:bg-agri-600 text-white font-medium text-sm transition-colors"
        >
          Search
        </button>
      </div>

      {loading && <div className="py-12"><LoadingSpinner size="lg" /></div>}
      {error && <div className="glass-card p-4 border-amber-500/30 text-amber-400 text-sm">{error}</div>}

      {data && !loading && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Current Price</p>
              <p className="text-2xl font-bold text-agri-400">₹{data.currentPrice}</p>
              <p className={`text-xs mt-1 ${data.priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {data.priceChange >= 0 ? '▲' : '▼'} {Math.abs(data.priceChange)}%
              </p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Demand</p>
              <p className={`text-xl font-bold ${data.demand === 'High' ? 'text-green-400' : data.demand === 'Medium' ? 'text-amber-400' : 'text-red-400'}`}>
                {data.demand}
              </p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Volatility</p>
              <p className={`text-xl font-bold ${data.volatility === 'Low' ? 'text-green-400' : data.volatility === 'Medium' ? 'text-amber-400' : 'text-red-400'}`}>
                {data.volatility}
              </p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Crop</p>
              <p className="text-xl font-bold text-white">{data.crop}</p>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Price Trend & 30-Day Prediction</h3>
            <div className="h-48 flex items-end gap-[2px]">
              {data.priceHistory.map((point, i) => (
                <div
                  key={`h-${i}`}
                  className="flex-1 bg-agri-500/60 rounded-t transition-all hover:bg-agri-400/80"
                  style={{ height: `${((point.price - minPrice) / range) * 100}%`, minHeight: '4px' }}
                  title={`${point.date}: ₹${point.price}`}
                />
              ))}
              {data.prediction.map((point, i) => (
                <div
                  key={`p-${i}`}
                  className="flex-1 bg-amber-500/40 rounded-t border-t-2 border-amber-400 border-dashed transition-all hover:bg-amber-400/60"
                  style={{ height: `${((point.price - minPrice) / range) * 100}%`, minHeight: '4px' }}
                  title={`${point.date} (pred): ₹${point.price}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 bg-agri-500/60 rounded" />
                <span className="text-xs text-slate-400">Historical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 bg-amber-500/40 rounded border-t border-amber-400 border-dashed" />
                <span className="text-xs text-slate-400">Prediction</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}