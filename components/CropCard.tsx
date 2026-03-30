import Link from 'next/link';
import type { Crop } from '@/types';

interface CropCardProps {
  crop: Crop;
}

export default function CropCard({ crop }: CropCardProps) {
  const imageUrl = crop.metadata?.hero_image?.imgix_url;

  return (
    <Link href={`/crops/${crop.slug}`} className="group">
      <div className="glass-card overflow-hidden hover:border-agri-500/30 transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-48 bg-slate-800">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={crop.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={400}
              height={200}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-agri-900/40 to-emerald-900/40">
              🌱
            </div>
          )}
          {crop.metadata?.season && (
            <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-agri-500/90 text-white text-xs font-medium backdrop-blur-sm">
              {crop.metadata.season}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-agri-400 transition-colors">
            {crop.metadata?.name || crop.title}
          </h3>
          {crop.metadata?.description && (
            <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
              {crop.metadata.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-3">
            {crop.metadata?.ideal_soil_type && (
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-xs text-slate-300">
                🌍 {crop.metadata.ideal_soil_type}
              </span>
            )}
            {crop.metadata?.water_requirement && (
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-xs text-slate-300">
                💧 {crop.metadata.water_requirement}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}