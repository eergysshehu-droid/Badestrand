import { products } from './products';
import { concerns } from './concerns';

export interface SearchEntry {
  title: string;
  category: string;
  href: string;
}

const magazineArticles: SearchEntry[] = [
  { title: 'Warum die Hautbarriere so wichtig ist', category: 'Magazin', href: '/magazin/' },
  { title: 'Hyaluron: mehr als nur Feuchtigkeit', category: 'Magazin', href: '/magazin/' },
  { title: 'Hornhaut sinnvoll pflegen', category: 'Magazin', href: '/magazin/' }
];

const ingredientNames = ['Aloe Vera', 'Hyaluron', 'Ringelblume', 'Arnika', 'Honig', 'Bienenwachs', 'Propolis', 'Urea'];

export const searchIndex: SearchEntry[] = [
  ...products.map((p) => ({ title: p.name, category: 'Produkt', href: `/produkte/${p.slug}/` })),
  ...concerns.map((c) => ({ title: c.title, category: 'Hautbedürfnis', href: c.href })),
  ...ingredientNames.map((name) => ({ title: name, category: 'Inhaltsstoff', href: '/inhaltsstoffe/' })),
  ...magazineArticles
];
