interface StatsCardProps {
  icon: string;
  label: string;
  value: string;
  unit?: string;
  color?: string;
}

export default function StatsCard({ icon, label, value, unit, color = 'text-agri-400' }: StatsCardProps) {
  return (
    <div className="glass-card p-4 flex flex-col items-center gap-2 text-center">
      <span className="text-2xl">{icon}</span>
      <p className="text-xs text-slate-400 uppercase tracking-wider">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>
        {value}
        {unit && <span className="text-sm text-slate-400 ml-1">{unit}</span>}
      </p>
    </div>
  );
}