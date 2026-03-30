import PestDetector from '@/components/PestDetector';
import Link from 'next/link';

export default function PestDetectionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-slate-400 hover:text-agri-400 transition-colors mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white">📷 Pest & Disease Detection</h1>
        <p className="text-slate-400 mt-2">Upload an image or use your camera to identify crop diseases and get treatment recommendations.</p>
      </div>
      <PestDetector />
    </div>
  );
}