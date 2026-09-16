import type { Product } from './products';

export const productsEn: Product[] = [
  {
    slug: 'hornhaut-balsam',
    name: 'Hornhaut Balsam',
    eyebrow: 'Hands & Feet',
    description: 'Targeted care for callused, hardened skin.',
    size: '30 ml',
    price: '7.25 €',
    priceVerified: true,
    image: '/images/hornhaut.webp',
    efficacy: {
      value: '75%',
      statement: 'Reduction in callus',
      context: 'after 28 days with twice-daily application.'
    }
  },
  {
    slug: 'aloe-hyaluron-booster',
    name: 'Aloe Hyaluron Booster',
    eyebrow: 'Hydration',
    description: 'Intensive moisture care with aloe vera and hyaluronic acid.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/aloe.webp'
  },
  {
    slug: 'pigmentflecken-creme',
    name: 'Pigmentflecken Creme',
    eyebrow: 'Targeted Care',
    description: 'Care for age spots and uneven pigmentation.',
    size: '30 ml',
    priceVerified: false,
    image: '/images/pigment.webp'
  },
  {
    slug: 'langzeit-abdeck-creme',
    name: 'Langzeit Abdeck-Creme',
    eyebrow: 'Coverage Care',
    description: 'Strong-coverage, water-resistant specialty care.',
    size: '30 ml',
    priceVerified: false,
    image: '/images/abdeck.webp'
  }
];
