// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Served from GitHub Pages at the root of the custom domain (see public/CNAME),
  // so no `base` is needed and root-absolute links like `/privacy` resolve correctly.
  site: 'https://ugood.app',
});
