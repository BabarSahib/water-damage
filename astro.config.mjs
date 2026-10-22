import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://rapidwaterrescuepros.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
