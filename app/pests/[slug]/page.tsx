// app/pests/[slug]/page.tsx
import { getPestDiseaseBySlug, getPestDiseases, getMetafieldValue } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const pests = await getPestDiseases();
  return pests.map((p) => ({ slug: p.slug }));
}

export default async function PestDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pest = await getPestDiseaseBySlug(slug);

  if (!pest) return notFound();

  const m = pest.metadata;
  const imageUrl = m?.reference_image?.imgix_url;
  const severity = getMetafieldValue(m?.severity_level);
  const pestType = getMetafieldValue(m?.type);

  const severityColor = (() => {
    const s = severity.toLowerCase();
    if (s.includes('critical') || s.includes('high')) return 'bg-red-500/20 text-red-400 border-red-500/30';
    if (s.includes('medium') || s.includes('moderate')) return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    return 'bg-green-500/20 text-green-400 border-green-500/30';
  })();

  const sections = [
    { label: 'Symptoms', value: m?.symptoms, icon: '🔍' },
    { label: 'Cause', value: m?.cause, icon: '🔬' },
    { label: 'Treatment', value: m?.treatment, icon: '💊' },
    { label: 'Recommended Pesticide', value: m?.recommended_pesticide, icon: '🧪' },
    { label: 'Prevention Tips', value: m?.prevention_tips, icon: '🛡️' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/pests" className="text-sm text-slate-400 hover:text-agri-400 transition-colors mb-6 inline-block">
        ← Back to Pest Library
      </Link>

      {imageUrl && (
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src={`${imageUrl}?w=1600&h=600&fit=crop&auto=format,compress`}
            alt={pest.title}
            className="w-full h-64 sm:h-80 object-cover"
            width={800}
            height={300}
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h1 className="text-3xl font-bold text-white">{m?.name || pest.title}</h1>
        {severity && (
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${severityColor}`}>
            {severity}
          </span>
        )}
        {pestType && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50">
            {pestType}
          </span>
        )}
      </div>

      {m?.affected_crops && (
        <p className="text-slate-400 mb-8">🌾 Affects: {m.affected_crops}</p>
      )}

      <div className="space-y-4">
        {sections.map((s) =>
          s.value ? (
            <div key={s.label} className="glass-card p-6">
              <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
                {s.icon} {s.label}
              </h2>
              <p className="text-slate-200 leading-relaxed">{s.value}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}