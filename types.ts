// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Crop object type
export interface Crop extends CosmicObject {
  type: 'crops';
  metadata: {
    name?: string;
    description?: string;
    season?: string;
    ideal_soil_type?: string;
    water_requirement?: string;
    growth_duration_days?: number;
    average_yield_per_hectare?: string;
    ideal_temperature_range?: string;
    common_diseases?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Pest & Disease Library object type
export interface PestDisease extends CosmicObject {
  type: 'pest-disease-library';
  metadata: {
    name?: string;
    type?: string;
    affected_crops?: string;
    symptoms?: string;
    cause?: string;
    treatment?: string;
    recommended_pesticide?: string;
    prevention_tips?: string;
    severity_level?: string;
    reference_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Platform Settings object type
export interface PlatformSettings extends CosmicObject {
  type: 'platform-settings';
  metadata: {
    platform_name?: string;
    default_language?: string;
    supported_languages?: string;
    feature_flags?: string;
    weather_api_provider?: string;
    ai_model_provider?: string;
    default_ai_model?: string;
    dark_mode_default?: boolean;
    logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Weather data types
export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  uvIndex: number;
  condition: string;
  location: string;
  forecast: DailyForecast[];
}

export interface DailyForecast {
  date: string;
  tempMax: number;
  tempMin: number;
  rainfall: number;
  condition: string;
}

// Chat types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

// Market types
export interface MarketData {
  crop: string;
  currentPrice: number;
  priceChange: number;
  demand: 'High' | 'Medium' | 'Low';
  volatility: 'High' | 'Medium' | 'Low';
  priceHistory: PricePoint[];
  prediction: PricePoint[];
}

export interface PricePoint {
  date: string;
  price: number;
}

// Irrigation types
export interface IrrigationAdvice {
  bestTime: string;
  waterQuantity: string;
  method: string;
  tips: string[];
  soilMoisture: number;
  nextIrrigationIn: string;
}

// Pest detection types
export interface PestDetectionResult {
  diseaseName: string;
  confidence: number;
  cause: string;
  treatment: string;
  pesticide: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
}

// Cosmic API response
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Language type
export type SupportedLanguage = 'en' | 'hi' | 'kn' | 'ta' | 'te' | 'mr' | 'bn' | 'gu' | 'pa' | 'ml';

// Helper to check error status
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Helper to extract metafield value
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}