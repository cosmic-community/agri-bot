// app/crops/[slug]/page.tsx
import { getCropBySlug, getCrops } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const crops = await getCrops();
  return crops.map((c) => ({ slug: c.slug }));
}

export default async function CropDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const crop = await getCropBySlug(slug);

  if (!crop) return notFound();

  const m = crop.metadata;
  const imageUrl = m?.hero_image?.imgix_url;

  const details = [
    { label: 'Season', value: m?.season, icon: '📅' },
    { label: 'Ideal Soil Type', value: m?.ideal_soil_type, icon: '🌍' },
    { label: 'Water Requirement', value: m?.water_requirement, icon: '💧' },
    { label: 'Growth Duration', value: m?.growth_duration_days ? `${m.growth_duration_days} days` : undefined, icon: '⏱️' },
    { label: 'Avg Yield/Hectare', value: m?.average_yield_per_hectare, icon: '📊' },
    { label: 'Ideal Temperature', value: m?.ideal_temperature_range, icon: '🌡️' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/crops" className="text-sm text-slate-400 hover:text-agri-400 transition-colors mb-6 inline-block">
        ← Back to Crops
      </Link>

      {imageUrl && (
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src={`${imageUrl}?w=1600&h=600&fit=crop&auto=format,compress`}
            alt={crop.title}
            className="w-full h-64 sm:h-80 object-cover"
            width={800}
            height={300}
          />
        </div>
      )}

      <h1 className="text-3xl font-bold text-white mb-2">{m?.name || crop.title}</h1>
      {m?.description && <p className="text-slate-400 text-lg leading-relaxed mb-8">{m.description}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {details.map((d) =>
          d.value ? (
            <div key={d.label} className="glass-card p-4">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{d.icon} {d.label}</p>
              <p className="text-sm font-medium text-white">{d.value}</p>
            </div>
          ) : null
        )}
      </div>

      {m?.common_diseases && (
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white mb-3">🦠 Common Diseases</h2>
          <p className="text-sm text-slate-300 leading-relaxed">{m.common_diseases}</p>
        </div>
      )}
    </div>
  );
}