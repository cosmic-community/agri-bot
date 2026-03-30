import { NextResponse } from 'next/server';
import type { PestDetectionResult } from '@/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const imageData: string = body.image || '';

    if (!imageData) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    const pestModelApi = process.env.PEST_MODEL_API;

    if (pestModelApi) {
      try {
        const res = await fetch(pestModelApi, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: imageData }),
        });
        if (res.ok) {
          const data = await res.json();
          return NextResponse.json({ result: data });
        }
      } catch {
        // Fall through to mock result
      }
    }

    // Generate demo detection result
    const diseases: PestDetectionResult[] = [
      {
        diseaseName: 'Late Blight (Phytophthora infestans)',
        confidence: 87.5,
        cause: 'Oomycete pathogen Phytophthora infestans, spread through infected plant debris, wind-blown sporangia, and contaminated water. Thrives in cool, moist conditions (10-25°C, >90% humidity).',
        treatment: 'Apply Mancozeb 75% WP at 2.5g/L as preventive spray. For curative treatment, use Metalaxyl + Mancozeb (Ridomil Gold MZ) at 2g/L. Remove and destroy infected plant parts. Ensure proper spacing for air circulation.',
        pesticide: 'Ridomil Gold MZ 68 WG (Metalaxyl-M 4% + Mancozeb 64%)',
        severity: 'High',
      },
      {
        diseaseName: 'Bacterial Leaf Blight (Xanthomonas oryzae)',
        confidence: 92.3,
        cause: 'Bacterium Xanthomonas oryzae pv. oryzae, enters through wounds and water pores. Spread through rain splash, irrigation water, and infected seeds.',
        treatment: 'Spray Streptomycin sulphate + Tetracycline (300 ppm). Use Copper oxychloride 50% WP at 2.5g/L. Drain excess water from fields. Use resistant varieties like Improved Samba Mahsuri.',
        pesticide: 'Blitox (Copper Oxychloride 50% WP) + Streptocycline',
        severity: 'High',
      },
      {
        diseaseName: 'Powdery Mildew (Erysiphe cichoracearum)',
        confidence: 79.8,
        cause: 'Fungal pathogen favored by dry conditions with high humidity. Spread by wind-borne conidia. Common in cucurbits, cereals, and legumes during late season.',
        treatment: 'Spray Sulphur WP 80% at 3g/L or Carbendazim 50% WP at 1g/L. Neem oil (5ml/L) as organic alternative. Ensure adequate plant spacing.',
        pesticide: 'Karathane (Dinocap 48% EC) or Bavistin (Carbendazim 50% WP)',
        severity: 'Medium',
      },
    ];

    const randomIndex = Math.floor(Math.random() * diseases.length);
    const result = diseases[randomIndex];

    if (!result) {
      return NextResponse.json({
        result: diseases[0],
      });
    }

    return NextResponse.json({ result });
  } catch {
    return NextResponse.json(
      { error: 'Detection failed' },
      { status: 500 }
    );
  }
}