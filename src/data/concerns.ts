export interface Concern {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  href: string;
}

export const concerns: Concern[] = [
  {
    slug: 'hornhaut-risse',
    title: 'Hornhaut & raue Haut',
    eyebrow: 'Hände & Füße',
    image: '/images/concerns/hornhaut-risse.webp',
    href: '/problemloesungen/'
  },
  {
    slug: 'pigmentflecken',
    title: 'Pigmentflecken',
    eyebrow: 'Gesicht',
    image: '/images/concerns/pigmentflecken.webp',
    href: '/problemloesungen/'
  },
  {
    slug: 'feuchtigkeitsarme-haut',
    title: 'Feuchtigkeitsarme Haut',
    eyebrow: 'Gesicht & Körper',
    image: '/images/concerns/feuchtigkeitsarme-haut.webp',
    href: '/problemloesungen/'
  },
  {
    slug: 'reife-haut',
    title: 'Reife Haut',
    eyebrow: 'Gesicht',
    image: '/images/concerns/reife-haut.webp',
    href: '/problemloesungen/'
  },
  {
    slug: 'roetungen-couperose',
    title: 'Rötungen & Couperose',
    eyebrow: 'Gesicht',
    image: '/images/concerns/roetungen-couperose.webp',
    href: '/problemloesungen/'
  },
  {
    slug: 'haende-fuesse',
    title: 'Hände & Füße',
    eyebrow: 'Körper',
    image: '/images/concerns/haende-fuesse.webp',
    href: '/problemloesungen/'
  }
];
