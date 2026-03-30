import Link from 'next/link';
import type { PestDisease } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

interface PestCardProps {
  pest: PestDisease;
}

export default function PestCard({ pest }: PestCardProps) {
  const imageUrl = pest.metadata?.reference_image?.imgix_url;
  const severity = getMetafieldValue(pest.metadata?.severity_level);

  const severityColor = (() => {
    const sev = severity.toLowerCase();
    if (sev.includes('critical') || sev.includes('high')) return 'bg-red-500/20 text-red-400';
    if (sev.includes('medium') || sev.includes('moderate')) return 'bg-amber-500/20 text-amber-400';
    return 'bg-green-500/20 text-green-400';
  })();

  return (
    <Link href={`/pests/${pest.slug}`} className="group">
      <div className="glass-card overflow-hidden hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-44 bg-slate-800">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={pest.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={400}
              height={200}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-red-900/30 to-orange-900/30">
              🐛
            </div>
          )}
          {severity && (
            <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${severityColor}`}>
              {severity}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
            {pest.metadata?.name || pest.title}
          </h3>
          {pest.metadata?.symptoms && (
            <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
              {pest.metadata.symptoms}
            </p>
          )}
          {pest.metadata?.affected_crops && (
            <p className="text-xs text-slate-500 mt-2">
              🌾 {pest.metadata.affected_crops}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}