import IrrigationDashboard from '@/components/IrrigationDashboard';
import Link from 'next/link';

export default function IrrigationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-slate-400 hover:text-agri-400 transition-colors mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white">💧 Irrigation Intelligence</h1>
        <p className="text-slate-400 mt-2">Smart irrigation schedules based on weather data, soil moisture, and crop requirements.</p>
      </div>
      <IrrigationDashboard />
    </div>
  );
}