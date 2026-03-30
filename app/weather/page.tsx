import WeatherWidget from '@/components/WeatherWidget';
import Link from 'next/link';

export default function WeatherPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-slate-400 hover:text-agri-400 transition-colors mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white">🌦 Weather Intelligence</h1>
        <p className="text-slate-400 mt-2">Real-time weather data with auto-location detection and 7-day forecasts for farming decisions.</p>
      </div>
      <WeatherWidget />
    </div>
  );
}