'use client';

import { useState, useEffect, useCallback } from 'react';
import type { WeatherData } from '@/types';
import StatsCard from '@/components/StatsCard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [city, setCity] = useState('');
  const [locationName, setLocationName] = useState('');

  const fetchWeather = useCallback(async (lat: number, lon: number) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
      if (!res.ok) throw new Error('Failed to fetch weather');
      const data = await res.json();
      setWeather(data.weather);
      setLocationName(data.locationName || '');
    } catch {
      setError('Failed to load weather data');
    } finally {
      setLoading(false);
    }
  }, []);

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
      () => setError('Location access denied. Please search manually.')
    );
  };

  const searchCity = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(city.trim())}`);
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data.weather);
      setLocationName(data.locationName || city);
    } catch {
      setError('Could not find weather for that city');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    detectLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && searchCity()}
            placeholder="Search city..."
            className="flex-1 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-agri-500/50 transition-colors text-sm"
          />
          <button
            onClick={searchCity}
            className="px-5 py-3 rounded-xl bg-agri-500 hover:bg-agri-600 text-white font-medium text-sm transition-colors"
          >
            Search
          </button>
        </div>
        <button
          onClick={detectLocation}
          className="px-5 py-3 rounded-xl bg-slate-800/80 border border-slate-700/50 hover:border-agri-500/50 text-white text-sm transition-colors"
        >
          📍 Auto Detect
        </button>
      </div>

      {loading && (
        <div className="py-12"><LoadingSpinner size="lg" /></div>
      )}

      {error && (
        <div className="glass-card p-4 border-red-500/30 text-red-400 text-sm">{error}</div>
      )}

      {weather && !loading && (
        <div className="space-y-6">
          {locationName && (
            <div className="flex items-center gap-2 text-lg">
              <span>📍</span>
              <span className="font-semibold text-white">{locationName}</span>
              <span className="text-slate-400">— {weather.condition}</span>
            </div>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <StatsCard icon="🌡️" label="Temperature" value={String(weather.temperature)} unit="°C" />
            <StatsCard icon="💧" label="Humidity" value={String(weather.humidity)} unit="%" color="text-blue-400" />
            <StatsCard icon="🌧️" label="Rainfall" value={String(weather.rainfall)} unit="mm" color="text-cyan-400" />
            <StatsCard icon="💨" label="Wind" value={String(weather.windSpeed)} unit="km/h" color="text-teal-400" />
            <StatsCard icon="☀️" label="UV Index" value={String(weather.uvIndex)} color="text-amber-400" />
          </div>

          {weather.forecast.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">7-Day Forecast</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {weather.forecast.map((day) => (
                  <div key={day.date} className="glass-card p-3 text-center">
                    <p className="text-xs text-slate-400 mb-1">
                      {new Date(day.date).toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </p>
                    <p className="text-sm font-medium text-white">{day.condition}</p>
                    <p className="text-xs text-agri-400 mt-1">{day.tempMax}° / {day.tempMin}°</p>
                    {day.rainfall > 0 && (
                      <p className="text-xs text-cyan-400 mt-0.5">🌧 {day.rainfall}mm</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}