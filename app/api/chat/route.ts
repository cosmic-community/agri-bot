import { NextResponse } from 'next/server';
import type { ChatMessage } from '@/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message: string = body.message || '';
    const history: ChatMessage[] = body.history || [];

    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey) {
      // Use OpenAI API if configured
      const systemPrompt = `You are Agri-Intel X, an AI-powered intelligent farming assistant for Indian farmers. 
You must ALWAYS provide a comprehensive unified response that includes ALL of the following sections:

1. 🌦 **Weather Summary** — Current conditions and forecast relevant to the query
2. 💧 **Irrigation Advice** — Watering recommendations based on conditions
3. 🐛 **Pest/Disease Risk** — Current pest threats and prevention tips
4. 🌱 **Crop Recommendation** — Best crops or crop care advice
5. 💰 **Market Insight** — Relevant market prices and trends

Be specific to Indian agriculture, mention Indian states, local crop varieties, and Indian market conditions.
Use emoji and markdown for readability. Be concise but actionable.
If the user asks about a specific topic, still include brief notes on all 5 sections.`;

      const messages = [
        { role: 'system' as const, content: systemPrompt },
        ...history.slice(-8).map((m) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })),
        { role: 'user' as const, content: message },
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages,
          max_tokens: 1500,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const content = data.choices?.[0]?.message?.content;
        if (content) {
          return NextResponse.json({ response: content });
        }
      }
    }

    // Fallback: Generate intelligent mock response
    const lowerMsg = message.toLowerCase();
    let response = '';

    if (lowerMsg.includes('wheat') || lowerMsg.includes('गेहूं')) {
      response = `# 🌾 Agri-Intel Analysis: Wheat

## 🌦 Weather Summary
Current conditions show moderate temperatures (15-25°C) ideal for wheat cultivation in North India. Expect light rainfall in the coming week across Punjab and Haryana.

## 💧 Irrigation Advice
- **Best Time:** Early morning (6-7 AM)
- **Method:** Border irrigation recommended
- **Frequency:** Every 20-25 days during growth phase
- **Water Saving:** Use laser land leveling to save 25-30% water

## 🐛 Pest/Disease Risk
- **Yellow Rust** — Moderate risk in Punjab & Haryana. Apply Propiconazole 25% EC at 0.1% concentration.
- **Aphids** — Monitor weekly. Use Imidacloprid 17.8 SL if detected.

## 🌱 Crop Recommendation
Wheat varieties HD-3226, PBW-725, and DBW-187 perform well this season. Sowing window: Oct 25 - Nov 25.

## 💰 Market Insight
- **MSP 2024-25:** ₹2,275/quintal
- **Market Price:** ₹2,400-2,600/quintal in UP/Punjab mandis
- **Trend:** Prices expected to rise 5-8% in March-April`;
    } else if (lowerMsg.includes('rice') || lowerMsg.includes('paddy') || lowerMsg.includes('चावल')) {
      response = `# 🌾 Agri-Intel Analysis: Rice/Paddy

## 🌦 Weather Summary
Monsoon patterns indicate good rainfall for Kharif season. Western Ghats regions will see above-normal precipitation.

## 💧 Irrigation Advice
- **Method:** Alternate Wetting and Drying (AWD) saves 30% water
- **Standing Water:** Maintain 2-5 cm during transplanting
- **Critical Phase:** Flowering stage needs continuous water

## 🐛 Pest/Disease Risk
- **Blast Disease** — High risk during humid conditions. Use Tricyclazole 75% WP.
- **Brown Plant Hopper** — Monitor with light traps. Apply Buprofezin if needed.

## 🌱 Crop Recommendation
Pusa Basmati 1509, Samba Mahsuri, and IR 64 are recommended. Direct Seeded Rice (DSR) reduces costs by ₹3,000-4,000/acre.

## 💰 Market Insight
- **MSP:** ₹2,300/quintal (Common grade)
- **Basmati:** ₹3,800-5,500/quintal depending on variety
- **Export Demand:** Strong global demand, prices stable`;
    } else {
      response = `# 🌾 Agri-Intel X — Your Farming Assistant

## 🌦 Weather Summary
Current conditions across India show seasonal patterns. Northern plains experience moderate temperatures while southern regions see warm conditions. Check the Weather module for your specific location.

## 💧 Irrigation Advice
- Water early morning to minimize evaporation
- Use drip irrigation to save 40-60% water
- Monitor soil moisture regularly
- Mulching reduces water needs by 25-30%

## 🐛 Pest/Disease Risk
Season-specific pest pressure varies by region. Use our Pest Detection module with your camera to identify diseases instantly.

## 🌱 Crop Recommendation
Based on the current season and general conditions:
- **Rabi:** Wheat, Mustard, Chickpea, Potato
- **Kharif:** Rice, Cotton, Soybean, Maize
- **Zaid:** Watermelon, Muskmelon, Cucumber

## 💰 Market Insight
Agricultural commodity markets are showing positive trends. Use our Market Intelligence module to check specific crop prices and 30-day predictions.

---
💡 *Ask me about a specific crop, region, or farming challenge for detailed personalized advice!*`;
    }

    return NextResponse.json({ response });
  } catch {
    return NextResponse.json(
      { response: '❌ An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}