export interface Concern {
  slug: string;
  title: string;
  eyebrow: string;
  image: string;
  href: string;
  subline: string;
  intro: string;
  productSlugs: string[];
  ingredientNames: string[];
  articleTitle: string;
  showEfficacyFor?: string;
}

export const concerns: Concern[] = [
  {
    slug: 'hornhaut-raue-haut',
    title: 'Hornhaut & raue Haut',
    eyebrow: 'Hände & Füße',
    image: '/images/concerns/hornhaut-risse.webp',
    href: '/hautbeduerfnisse/hornhaut-raue-haut/',
    subline: 'Gezielte Pflege für stark beanspruchte Haut an Füßen, Händen, Ellenbogen und Knien.',
    intro: 'Hornhaut entsteht vor allem dort, wo die Haut regelmäßig Druck und Reibung ausgesetzt ist. Ziel der Pflege ist es, verhornte Haut geschmeidiger zu machen und die Hautbarriere zu unterstützen.',
    productSlugs: ['hornhaut-balsam'],
    ingredientNames: ['Urea'],
    articleTitle: 'Warum entsteht Hornhaut?',
    showEfficacyFor: 'hornhaut-balsam'
  },
  {
    slug: 'pigmentflecken',
    title: 'Pigmentflecken',
    eyebrow: 'Gesicht',
    image: '/images/concerns/pigmentflecken.webp',
    href: '/hautbeduerfnisse/pigmentflecken/',
    subline: 'Gezielte Pflege für ein gleichmäßiger wirkendes Hautbild.',
    intro: 'Pigmentveränderungen können durch Alter, UV-Einwirkung und individuelle Hautprozesse sichtbarer werden. Badestrand kombiniert gezielte Pflegeprodukte mit ausgewählten Wirkstoffen für dieses Hautbedürfnis.',
    productSlugs: ['pigmentflecken-creme', 'langzeit-abdeck-creme'],
    ingredientNames: ['Aloe Vera', 'Hyaluron'],
    articleTitle: 'Pigmentflecken richtig pflegen.'
  },
  {
    slug: 'feuchtigkeitsarme-haut',
    title: 'Feuchtigkeitsarme Haut',
    eyebrow: 'Gesicht & Körper',
    image: '/images/concerns/feuchtigkeitsarme-haut.webp',
    href: '/hautbeduerfnisse/feuchtigkeitsarme-haut/',
    subline: 'Pflege für Haut, die mehr Feuchtigkeit und Schutz benötigt.',
    intro: 'Feuchtigkeitsarme Haut kann sich gespannt, trocken oder rau anfühlen. Eine passende Pflegeroutine unterstützt die Haut dabei, Feuchtigkeit besser zu halten und sich geschmeidiger anzufühlen.',
    productSlugs: ['aloe-hyaluron-booster'],
    ingredientNames: ['Aloe Vera', 'Hyaluron'],
    articleTitle: 'Was Hyaluron in der Hautpflege leistet.'
  },
  {
    slug: 'reife-haut',
    title: 'Reife Haut',
    eyebrow: 'Gesicht',
    image: '/images/concerns/reife-haut.webp',
    href: '/hautbeduerfnisse/reife-haut/',
    subline: 'Pflege für Haut, die mit der Zeit mehr Lipide, Feuchtigkeit und Schutz benötigt.',
    intro: 'Mit zunehmendem Alter verändert sich die Zusammensetzung des natürlichen Hautschutzes. Die Haut kann trockener werden und an Geschmeidigkeit verlieren – eine Pflege mit ausgewählten Lipiden und Feuchthaltefaktoren kann dabei unterstützen.',
    productSlugs: ['aloe-hyaluron-booster'],
    ingredientNames: ['Hyaluron', 'Aloe Vera'],
    articleTitle: 'Was reife Haut braucht.'
  },
  {
    slug: 'roetungen-couperose',
    title: 'Rötungen & Couperose',
    eyebrow: 'Gesicht',
    image: '/images/concerns/roetungen-couperose.webp',
    href: '/hautbeduerfnisse/roetungen-couperose/',
    subline: 'Sanfte Pflege für empfindlich wirkende und zu Rötungen neigende Haut.',
    intro: 'Empfindliche Haut mit sichtbaren Rötungen braucht eine besonders zurückhaltende Pflegeroutine. Ziel ist es, die Haut nicht unnötig zu belasten und sie gezielt zu pflegen.',
    productSlugs: ['langzeit-abdeck-creme'],
    ingredientNames: ['Aloe Vera'],
    articleTitle: 'Was bedeutet Couperose-Pflege?'
  },
  {
    slug: 'haende-fuesse',
    title: 'Hand- & Fußpflege',
    eyebrow: 'Hände & Füße',
    image: '/images/concerns/haende-fuesse.webp',
    href: '/hautbeduerfnisse/haende-fuesse/',
    subline: 'Gezielte Pflege für Hautpartien, die täglich besonders beansprucht werden.',
    intro: 'Hände und Füße sind täglich Reibung, Druck, häufigem Waschen und äußeren Einflüssen ausgesetzt. Die passende Pflege unterstützt Geschmeidigkeit, Komfort und Hautschutz.',
    productSlugs: ['hornhaut-balsam'],
    ingredientNames: ['Urea'],
    articleTitle: 'Wie pflegt man Hände und Nagelhaut richtig?'
  }
];
