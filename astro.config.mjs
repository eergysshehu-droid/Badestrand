import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://www.badestrand-kosmetik.de',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  redirects: {
    '/problemloesungen': '/hautbeduerfnisse/'
  }
});
