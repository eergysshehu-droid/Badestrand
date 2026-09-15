export interface ProductEfficacy {
  value: string;
  statement: string;
  context: string;
}

export interface Product {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  size: string;
  image: string;
  price?: string;
  priceVerified: boolean;
  efficacy?: ProductEfficacy;
}

export const products: Product[] = [
  {
    slug: 'hornhaut-balsam',
    name: 'Hornhaut Balsam',
    eyebrow: 'Hände & Füße',
    description: 'Gezielte Pflege für verhornte Hautpartien.',
    size: '30 ml',
    price: '7,25 €',
    priceVerified: true,
    image: '/images/hornhaut.webp',
    efficacy: {
      value: '75 %',
      statement: 'Reduzierung der Hornhaut',
      context: 'nach 28 Tagen bei 2× täglicher Anwendung.'
    }
  },
  {
    slug: 'aloe-hyaluron-booster',
    name: 'Aloe Hyaluron Booster',
    eyebrow: 'Feuchtigkeit',
    description: 'Intensive Feuchtigkeitspflege mit Aloe Vera und Hyaluron.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/aloe.webp'
  },
  {
    slug: 'pigmentflecken-creme',
    name: 'Pigmentflecken Creme',
    eyebrow: 'Problemlösung',
    description: 'Pflege bei Altersflecken und Pigmentstörungen.',
    size: '30 ml',
    priceVerified: false,
    image: '/images/pigment.webp'
  },
  {
    slug: 'langzeit-abdeck-creme',
    name: 'Langzeit Abdeck-Creme',
    eyebrow: 'Abdeckpflege',
    description: 'Stark deckende, wasserfeste Spezialpflege.',
    size: '30 ml',
    priceVerified: false,
    image: '/images/abdeck.webp'
  }
];
