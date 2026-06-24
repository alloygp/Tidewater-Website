import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // auto-generates /sitemap-index.xml on every build (no manual sitemap.xml)
  integrations: [react(), sitemap()],
  output: 'hybrid',
  adapter: vercel(),
  site: 'https://tidewaterproperty.com',
  trailingSlash: 'never',
  prefetch: { prefetchAll: true },
  build: {
    // embed CSS inline — eliminates the render-blocking stylesheet request
    inlineStylesheets: 'always',
  },
});
