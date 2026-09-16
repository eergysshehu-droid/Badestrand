import { productsEn } from './products.en';
import { concernsEn } from './concerns.en';
import type { SearchEntry } from './searchIndex';

const magazineArticles: SearchEntry[] = [
  { title: 'Why the skin barrier matters so much', category: 'Journal', href: '/en/magazin/' },
  { title: 'Hyaluronic acid: more than just moisture', category: 'Journal', href: '/en/magazin/' },
  { title: 'Caring for calluses the smart way', category: 'Journal', href: '/en/magazin/' }
];

const ingredientNames = ['Aloe Vera', 'Hyaluronic Acid', 'Marigold', 'Arnica', 'Honey', 'Beeswax', 'Propolis', 'Urea'];

const otherPages: SearchEntry[] = [
  { title: 'Results & Studies', category: 'Page', href: '/en/wirkung-studien/' },
  { title: 'Consultation', category: 'Page', href: '/en/beratung/' }
];

export const searchIndexEn: SearchEntry[] = [
  ...productsEn.map((p) => ({ title: p.name, category: 'Product', href: `/en/produkte/${p.slug}/` })),
  ...concernsEn.map((c) => ({ title: c.title, category: 'Skin Concern', href: c.href })),
  ...ingredientNames.map((name) => ({ title: name, category: 'Ingredient', href: '/en/inhaltsstoffe/' })),
  ...magazineArticles,
  ...otherPages
];
