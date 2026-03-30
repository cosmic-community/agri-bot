import { NextResponse } from 'next/server';
import type { MarketData, PricePoint } from '@/types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const crop = searchParams.get('crop');

  if (!crop) {
    return NextResponse.json({ error: 'Provide a crop name' }, { status: 400 });
  }

  const marketApi = process.env.MARKET_API;

  if (marketApi) {
    try {
      const res = await fetch(`${marketApi}?crop=${encodeURIComponent(crop)}`);
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({ data });
      }
    } catch {
      // Fall through to mock data
    }
  }

  // Generate realistic mock market data
  const basePrice = getBasePrice(crop.toLowerCase());
  const priceHistory: PricePoint[] = [];
  const prediction: PricePoint[] = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const variation = (Math.random() - 0.5) * basePrice * 0.08;
    priceHistory.push({
      date: date.toISOString().split('T')[0] || '',
      price: Math.round(basePrice + variation),
    });
  }

  for (let i = 1; i <= 30; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const trend = basePrice * 0.002 * i;
    const variation = (Math.random() - 0.5) * basePrice * 0.06;
    prediction.push({
      date: date.toISOString().split('T')[0] || '',
      price: Math.round(basePrice + trend + variation),
    });
  }

  const lastPrice = priceHistory[priceHistory.length - 1]?.price || basePrice;
  const prevPrice = priceHistory[priceHistory.length - 7]?.price || basePrice;
  const change = prevPrice !== 0 ? ((lastPrice - prevPrice) / prevPrice) * 100 : 0;

  const data: MarketData = {
    crop: crop.charAt(0).toUpperCase() + crop.slice(1),
    currentPrice: lastPrice,
    priceChange: Math.round(change * 10) / 10,
    demand: change > 2 ? 'High' : change > 0 ? 'Medium' : 'Low',
    volatility: Math.abs(change) > 5 ? 'High' : Math.abs(change) > 2 ? 'Medium' : 'Low',
    priceHistory,
    prediction,
  };

  return NextResponse.json({ data });
}

function getBasePrice(crop: string): number {
  const prices: Record<string, number> = {
    wheat: 2450,
    rice: 2300,
    cotton: 6800,
    soybean: 4500,
    maize: 2100,
    sugarcane: 350,
    mustard: 5650,
    chickpea: 5400,
    potato: 1200,
    onion: 1800,
    tomato: 2200,
    groundnut: 5900,
    jute: 5050,
    coffee: 8500,
    tea: 22000,
    pepper: 42000,
    turmeric: 11000,
    cardamom: 95000,
  };
  return prices[crop] || 3000;
}