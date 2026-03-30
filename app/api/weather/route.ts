import { NextResponse } from 'next/server';
import { fetchWeatherData, reverseGeocode, geocodeCity } from '@/lib/weather';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const city = searchParams.get('city');

  try {
    if (city) {
      const geo = await geocodeCity(city);
      if (!geo) {
        return NextResponse.json({ error: 'City not found' }, { status: 404 });
      }
      const weather = await fetchWeatherData(geo.lat, geo.lon);
      return NextResponse.json({ weather, locationName: geo.name });
    }

    if (lat && lon) {
      const latitude = parseFloat(lat);
      const longitude = parseFloat(lon);
      const [weather, locationName] = await Promise.all([
        fetchWeatherData(latitude, longitude),
        reverseGeocode(latitude, longitude),
      ]);
      return NextResponse.json({ weather, locationName });
    }

    return NextResponse.json({ error: 'Provide lat/lon or city' }, { status: 400 });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 });
  }
}