import { getPlatformSettings, getMetafieldValue } from '@/lib/cosmic';
import Link from 'next/link';

export default async function SettingsPage() {
  const settings = await getPlatformSettings();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-slate-400 hover:text-agri-400 transition-colors mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white">⚙️ Platform Settings</h1>
        <p className="text-slate-400 mt-2">View current platform configuration managed via Cosmic CMS.</p>
      </div>

      {!settings ? (
        <div className="glass-card p-12 text-center">
          <p className="text-4xl mb-4">⚙️</p>
          <p className="text-slate-400">No platform settings found. Add settings in your Cosmic dashboard.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {[
            { label: 'Platform Name', value: settings.metadata?.platform_name, icon: '🏷️' },
            { label: 'Default Language', value: settings.metadata?.default_language, icon: '🌐' },
            { label: 'Supported Languages', value: settings.metadata?.supported_languages, icon: '🗣️' },
            { label: 'Weather API Provider', value: getMetafieldValue(settings.metadata?.weather_api_provider), icon: '🌦' },
            { label: 'AI Model Provider', value: getMetafieldValue(settings.metadata?.ai_model_provider), icon: '🤖' },
            { label: 'Default AI Model', value: settings.metadata?.default_ai_model, icon: '🧠' },
            { label: 'Feature Flags', value: settings.metadata?.feature_flags, icon: '🚩' },
            { label: 'Dark Mode Default', value: settings.metadata?.dark_mode_default ? 'Enabled' : 'Disabled', icon: '🌙' },
          ].map((item) =>
            item.value ? (
              <div key={item.label} className="glass-card p-5 flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm text-white">{String(item.value)}</p>
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}