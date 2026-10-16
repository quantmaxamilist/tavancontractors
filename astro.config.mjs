// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { oldUrls } from './redirects.mjs';

// The live Wix site serves https://www.tavancontractors.co.uk with no trailing slashes.
export default defineConfig({
  site: 'https://www.tavancontractors.co.uk',
  trailingSlash: 'ignore',
  // Vercel serves about.html at /about via cleanUrls (vercel.json).
  build: { format: 'file', inlineStylesheets: 'always' },
  server: { port: 4343 },
  devToolbar: { enabled: false },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  scopedStyleStrategy: 'class',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/wow-') })],
  redirects: oldUrls,
});
