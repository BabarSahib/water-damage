import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { SERVICES, ALL_STATES } from '../data/siteData';
import { BLOG_POSTS } from '../data/blogPosts';

export const GET: APIRoute = () => {
  const baseUrl = 'https://rapidwaterrescuepros.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const xmlChunks: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  ];

  function addUrl(loc: string, lastmod: string, changefreq: string, priority: string) {
    xmlChunks.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`);
  }

  // Core Pages
  addUrl(`${baseUrl}/`, currentDate, 'daily', '1.0');
  addUrl(`${baseUrl}/services/`, currentDate, 'weekly', '0.9');
  addUrl(`${baseUrl}/service-areas/`, currentDate, 'weekly', '0.9');
  addUrl(`${baseUrl}/about-us/`, currentDate, 'monthly', '0.7');
  addUrl(`${baseUrl}/contact-us/`, currentDate, 'monthly', '0.8');
  addUrl(`${baseUrl}/blog/`, currentDate, 'daily', '0.8');
  addUrl(`${baseUrl}/privacy-policy/`, currentDate, 'yearly', '0.3');
  addUrl(`${baseUrl}/terms-of-service/`, currentDate, 'yearly', '0.3');

  // Services
  SERVICES.forEach((s) => {
    addUrl(`${baseUrl}/services/${s.slug}/`, currentDate, 'weekly', '0.85');
  });

  // State Pages
  ALL_STATES.forEach((st) => {
    addUrl(`${baseUrl}/water-damage/${st.slug}/`, currentDate, 'weekly', '0.85');
  });

  // Blog Posts
  BLOG_POSTS.forEach((p) => {
    addUrl(`${baseUrl}/blog/${p.slug}/`, p.publishDate, 'monthly', '0.75');
  });

  // All 29,738 Nationwide Cities across all 50 states + DC
  const citiesDir = path.resolve(process.cwd(), 'src/data/cities');
  if (fs.existsSync(citiesDir)) {
    const files = fs.readdirSync(citiesDir).filter((f) => f.endsWith('.json'));
    for (const file of files) {
      try {
        const raw = fs.readFileSync(path.join(citiesDir, file), 'utf8');
        const data = JSON.parse(raw);
        for (const city of data.cities) {
          addUrl(`${baseUrl}/water-damage/${data.stateSlug}/${city.slug}/`, currentDate, 'weekly', '0.8');
        }
      } catch (e) {
        // Continue on error
      }
    }
  }

  xmlChunks.push('</urlset>');

  return new Response(xmlChunks.join(''), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
