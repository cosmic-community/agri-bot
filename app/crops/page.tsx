import { getCrops } from '@/lib/cosmic';
import CropCard from '@/components/CropCard';
import Link from 'next/link';

export default async function CropsPage() {
  const crops = await getCrops();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-slate-400 hover:text-agri-400 transition-colors mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white">🌾 Crop Intelligence</h1>
        <p className="text-slate-400 mt-2">Browse all crops with detailed growing information and recommendations.</p>
      </div>

      {crops.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <p className="text-4xl mb-4">🌱</p>
          <p className="text-slate-400">No crops found. Add crops in your Cosmic dashboard.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      )}
    </div>
  );
}