import { createBucketClient } from '@cosmicjs/sdk';
import type { Crop, PestDisease, PlatformSettings } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

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

export async function getCrops(): Promise<Crop[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'crops' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.objects as Crop[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch crops');
  }
}

export async function getCropBySlug(slug: string): Promise<Crop | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'crops', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.object as Crop;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch crop');
  }
}

export async function getPestDiseases(): Promise<PestDisease[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pest-disease-library' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.objects as PestDisease[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch pest diseases');
  }
}

export async function getPestDiseaseBySlug(slug: string): Promise<PestDisease | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pest-disease-library', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.object as PestDisease;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch pest disease');
  }
}

export async function getPlatformSettings(): Promise<PlatformSettings | null> {
  try {
    const response = await cosmic.objects
      .find({ type: 'platform-settings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    const settings = response.objects[0];
    if (!settings) return null;
    return settings as PlatformSettings;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch platform settings');
  }
}