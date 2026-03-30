import type { WeatherData, DailyForecast } from '@/types';

export async function fetchWeatherData(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m,uv_index,weather_code&daily=temperature_2m_max,temperature_2m_min,rain_sum,weather_code&timezone=auto&forecast_days=7`;

  const response = await fetch(url, { next: { revalidate: 1800 } });

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();

  const current = data.current;
  const daily = data.daily;

  const forecast: DailyForecast[] = [];
  if (daily && daily.time) {
    for (let i = 0; i < daily.time.length; i++) {
      forecast.push({
        date: daily.time[i] ?? '',
        tempMax: daily.temperature_2m_max?.[i] ?? 0,
        tempMin: daily.temperature_2m_min?.[i] ?? 0,
        rainfall: daily.rain_sum?.[i] ?? 0,
        condition: getWeatherCondition(daily.weather_code?.[i] ?? 0),
      });
    }
  }

  return {
    temperature: current?.temperature_2m ?? 0,
    humidity: current?.relative_humidity_2m ?? 0,
    rainfall: current?.rain ?? 0,
    windSpeed: current?.wind_speed_10m ?? 0,
    uvIndex: current?.uv_index ?? 0,
    condition: getWeatherCondition(current?.weather_code ?? 0),
    location: '',
    forecast,
  };
}

function getWeatherCondition(code: number): string {
  if (code === 0) return 'Clear Sky';
  if (code <= 3) return 'Partly Cloudy';
  if (code <= 49) return 'Foggy';
  if (code <= 59) return 'Drizzle';
  if (code <= 69) return 'Rain';
  if (code <= 79) return 'Snow';
  if (code <= 84) return 'Rain Showers';
  if (code <= 89) return 'Snow Showers';
  if (code <= 99) return 'Thunderstorm';
  return 'Unknown';
}

export async function reverseGeocode(lat: number, lon: number): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`,
      {
        headers: { 'User-Agent': 'AgriIntelX/1.0' },
      }
    );
    if (!res.ok) return `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
    const data = await res.json();
    const addr = data.address;
    if (!addr) return data.display_name || `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
    const city = addr.city || addr.town || addr.village || addr.county || '';
    const state = addr.state || '';
    return [city, state].filter(Boolean).join(', ') || `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
  } catch {
    return `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
  }
}

export async function geocodeCity(city: string): Promise<{ lat: number; lon: number; name: string } | null> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1&countrycodes=in`,
      {
        headers: { 'User-Agent': 'AgriIntelX/1.0' },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const first = data[0];
    if (!first) return null;
    return {
      lat: parseFloat(first.lat),
      lon: parseFloat(first.lon),
      name: first.display_name?.split(',').slice(0, 2).join(',') || city,
    };
  } catch {
    return null;
  }
}