import Link from 'next/link';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

export default function FeatureCard({ icon, title, description, href, gradient }: FeatureCardProps) {
  return (
    <Link href={href} className="group">
      <div className="glass-card p-6 h-full hover:border-agri-500/30 transition-all duration-300 hover:-translate-y-1">
        <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-agri-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}