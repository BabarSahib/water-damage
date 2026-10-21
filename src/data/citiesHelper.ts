import fs from 'node:fs';
import path from 'node:path';

export interface CitySummary {
  name: string;
  slug: string;
  county: string;
  lat: number;
  lng: number;
}

export interface StateCitiesData {
  stateName: string;
  stateCode: string;
  stateSlug: string;
  cities: CitySummary[];
}

// In-memory cache for state city files
const cache = new Map<string, StateCitiesData>();

const CITIES_DIR = path.resolve(process.cwd(), 'src/data/cities');

export function getStateCities(stateSlug: string): StateCitiesData | null {
  if (cache.has(stateSlug)) {
    return cache.get(stateSlug)!;
  }
  const filePath = path.join(CITIES_DIR, `${stateSlug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data: StateCitiesData = JSON.parse(raw);
    cache.set(stateSlug, data);
    return data;
  } catch (err) {
    console.error(`Error loading state cities for ${stateSlug}:`, err);
    return null;
  }
}

export function getAllStateSlugs(): string[] {
  if (!fs.existsSync(CITIES_DIR)) return [];
  const files = fs.readdirSync(CITIES_DIR);
  return files
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''));
}

export function getCityData(stateSlug: string, citySlug: string): { city: CitySummary; state: StateCitiesData } | null {
  const stateData = getStateCities(stateSlug);
  if (!stateData) return null;
  const city = stateData.cities.find((c) => c.slug === citySlug);
  if (!city) return null;
  return { city, state: stateData };
}

// Calculate distance in miles using Haversine formula
function getDistanceMiles(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3958.8; // Radius of the Earth in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function getNearbyCities(stateSlug: string, citySlug: string, limit = 6): CitySummary[] {
  const stateData = getStateCities(stateSlug);
  if (!stateData || stateData.cities.length <= 1) return [];

  const currentCity = stateData.cities.find((c) => c.slug === citySlug);
  if (!currentCity) return stateData.cities.slice(0, limit);

  // If coordinates available, sort by distance
  if (currentCity.lat && currentCity.lng) {
    const sorted = stateData.cities
      .filter((c) => c.slug !== citySlug && c.lat && c.lng)
      .map((c) => ({
        city: c,
        dist: getDistanceMiles(currentCity.lat, currentCity.lng, c.lat, c.lng)
      }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, limit)
      .map((item) => item.city);

    if (sorted.length > 0) return sorted;
  }

  // Fallback: pick adjacent in alphabetical order
  const index = stateData.cities.findIndex((c) => c.slug === citySlug);
  const start = Math.max(0, index - Math.floor(limit / 2));
  return stateData.cities
    .filter((c) => c.slug !== citySlug)
    .slice(start, start + limit);
}
