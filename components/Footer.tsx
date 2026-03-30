import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-agri-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                AX
              </div>
              <span className="text-lg font-bold gradient-text">Agri-Intel X</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              AI-powered intelligent farming assistant providing weather intelligence, pest detection, crop recommendations, irrigation optimization, and market insights for Indian farmers.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2.5">
              <li><Link href="/crops" className="text-sm text-slate-400 hover:text-agri-400 transition-colors">Crops</Link></li>
              <li><Link href="/pests" className="text-sm text-slate-400 hover:text-agri-400 transition-colors">Pest & Disease</Link></li>
              <li><Link href="/weather" className="text-sm text-slate-400 hover:text-agri-400 transition-colors">Weather</Link></li>
              <li><Link href="/market" className="text-sm text-slate-400 hover:text-agri-400 transition-colors">Market</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Tools</h4>
            <ul className="space-y-2.5">
              <li><Link href="/assistant" className="text-sm text-slate-400 hover:text-agri-400 transition-colors">AI Assistant</Link></li>
              <li><Link href="/irrigation" className="text-sm text-slate-400 hover:text-agri-400 transition-colors">Irrigation</Link></li>
              <li><Link href="/pest-detection" className="text-sm text-slate-400 hover:text-agri-400 transition-colors">Pest Detection</Link></li>
              <li><Link href="/settings" className="text-sm text-slate-400 hover:text-agri-400 transition-colors">Settings</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800/50 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Agri-Intel X. Empowering farmers with AI intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}