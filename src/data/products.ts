export interface ProductEfficacy {
  value: string;
  statement: string;
  context: string;
}

export interface ProductStudyMetric {
  value: string;
  label: string;
}

export interface ProductStudy {
  title: string;
  metrics: ProductStudyMetric[];
  context: string;
}

export interface Product {
  slug: string;
  name: string;
  eyebrow: string;
  category: string;
  description: string;
  size?: string;
  image?: string;
  price?: string;
  priceVerified: boolean;
  featured?: boolean;
  application?: string;
  efficacy?: ProductEfficacy;
  study?: ProductStudy;
  dermatologicallyTested?: boolean;
}

export const products: Product[] = [
  // Gesicht & Decolleté
  {
    slug: 'suessholz-gesichtswasser',
    name: 'Süßholz Gesichts- und Reinigungswasser',
    eyebrow: 'Reinigung',
    category: 'Gesicht & Decolleté',
    description: 'Reinigt porentief und wirkt beruhigend. Ideal zur Hautreinigung für empfindliche Haut, bei zu Trockenheit neigender, reiferer Haut sowie zur Pflege bei Couperose und Altersflecken.',
    priceVerified: false
  },
  {
    slug: 'rosenblueten-tagescreme',
    name: 'Rosenblüten Tagescreme',
    eyebrow: 'Tagespflege',
    category: 'Gesicht & Decolleté',
    description: 'Für die trockene, reife Haut. Wirkt spürbar glättend, spendet Feuchtigkeit und enthält einen schützenden Bienenwachsanteil.',
    priceVerified: false
  },
  {
    slug: 'rosenmandel-nachtcreme',
    name: 'Rosenmandel Nachtcreme',
    eyebrow: 'Nachtpflege',
    category: 'Gesicht & Decolleté',
    description: 'Pflegt und verbessert das Hautbild über Nacht, speziell entwickelt für die trockene und reifere Haut.',
    priceVerified: false
  },
  {
    slug: 'wildrosen-hautoel',
    name: 'Wildrosen Hautöl',
    eyebrow: 'Hautöl',
    category: 'Gesicht & Decolleté',
    description: 'Das Schönheitsöl aus den chilenischen Anden mit zusätzlichem ätherischen Rosenöl. Baut Hautfeuchtigkeit auf, glättet, fettet nicht und zieht sofort ein. Ideal bei einem faltigen Decolleté und zur Regeneration der Haut.',
    priceVerified: false
  },
  {
    slug: 'aloe-hyaluron-booster',
    name: 'Aloe Hyaluron Booster',
    eyebrow: 'Feuchtigkeit',
    category: 'Gesicht & Decolleté',
    description: 'Pflege für sehr trockene, feuchtigkeitsarme Haut mit Soforteffekt. Erhöht die Hautfeuchtigkeit spürbar.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/aloe.webp',
    featured: true,
    efficacy: {
      value: '48 %',
      statement: 'Steigerung der Hautfeuchtigkeit',
      context: 'nach 2 Stunden.'
    }
  },
  {
    slug: 'rotalgen-aloe-hyaluron-konzentrat',
    name: 'Rotalgen Aloe Hyaluron Konzentrat',
    eyebrow: 'Ampullen-Serum',
    category: 'Gesicht & Decolleté',
    description: 'Ein Antifaltenserum mit Soforteffekt für faltige Gesichtshaut und Altershaut.',
    size: '7 Ampullen à 2 ml',
    priceVerified: false,
    image: '/images/rotalgen-aloe-hyaluron-konzentrat.webp',
    efficacy: {
      value: '39 %',
      statement: 'weniger Falten',
      context: 'laut Herstellerangaben.'
    }
  },
  {
    slug: 'aqua-plus-creme',
    name: 'Aqua Plus Creme',
    eyebrow: 'Feuchtigkeit',
    category: 'Gesicht & Decolleté',
    description: 'Eine intensive Feuchtigkeitspflege für faltige sowie sehr trockene, sehr feuchtigkeitsarme Gesichtshaut.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/aqua-plus-creme.webp'
  },
  {
    slug: 'sebum-plus-aufbaucreme',
    name: 'Sebum Plus Aufbaucreme',
    eyebrow: 'Altershaut',
    category: 'Gesicht & Decolleté',
    description: 'Verhilft alter, schlaffer Haut zu jugendlichem Hautschutz und Frische. Baut die Hautbarriere durch eine hautstrukturähnliche Formulierung mit Cupuaçu- und Karitébutter wieder auf. Ideal für Altershaut und bei Couperose.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/sebum-plus-aufbaucreme.webp',
    dermatologicallyTested: true,
    study: {
      title: '28-Tage-Anwendungstest',
      metrics: [
        { value: '+31,5 %', label: 'Hautfeuchtigkeit nach 14 Tagen' },
        { value: '+32,6 %', label: 'Hautfeuchtigkeit nach 28 Tagen' },
        { value: '+10,2 %', label: 'Hautglätte nach 14 Tagen' },
        { value: '+14,4 %', label: 'Hautglätte nach 28 Tagen' }
      ],
      context: 'Bei 2× täglicher Anwendung. Hautverträglichkeit zusätzlich über 48 und 72 Stunden an 50 Personen unterschiedlicher Hauttypen geprüft, ohne berichtete Beanstandungen.'
    }
  },
  {
    slug: 'honig-propolis-universalcreme',
    name: 'Honig Propolis Universalcreme',
    eyebrow: 'Allroundpflege',
    category: 'Gesicht & Decolleté',
    description: 'Die Allround-Pflege für das Gesicht und den ganzen Körper. Pflegt, beugt Hautirritationen vor und dient als intensiver Hautschutz für trockene, schuppige Haut bei Wind und Wetter.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/honig-propolis-universalcreme.webp'
  },
  {
    slug: 'karotten-creme',
    name: 'Karotten Creme',
    eyebrow: 'Ausgleichende Pflege',
    category: 'Gesicht & Decolleté',
    description: 'Ausgleichende Pflege, die speziell für trockene, aber auch für fettigere Gesichtshaut sowie bei blasser Haut empfohlen wird.',
    priceVerified: false
  },
  {
    slug: 'pigmentflecken-creme',
    name: 'Pigmentflecken Creme',
    eyebrow: 'Pigmentflecken',
    category: 'Gesicht & Decolleté',
    description: 'Reduziert Alters- und Pigmentflecken, glättet die Haut und aktiviert den Zellschutz.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/pigmentflecken-creme.webp',
    featured: true,
    application: 'Sparsam auftragen, 2× täglich. Direkte Sonneneinstrahlung auf die behandelten Stellen vermeiden. Kombinierbar mit Süßholz Gesichts- und Reinigungswasser und der Aloe Hyaluron Vitamin B3 Gesichtsmaske.',
    dermatologicallyTested: true,
    efficacy: {
      value: '23,2 %',
      statement: 'Aufhellender Effekt',
      context: 'nach 42 Tagen bei 2× täglicher Anwendung.'
    },
    study: {
      title: '42-Tage-Anwendungstest',
      metrics: [
        { value: '23,2 %', label: 'Aufhellender Effekt' },
        { value: '+43,9 %', label: 'Steigerung der Hautfeuchtigkeit' },
        { value: '+25,2 %', label: 'Steigerung der Hautglätte' }
      ],
      context: 'Bei 2× täglicher Anwendung. Hautverträglichkeit zusätzlich über 48 und 72 Stunden an 50 Personen unterschiedlicher Hauttypen geprüft, ohne berichtete Beanstandungen.'
    }
  },
  {
    slug: 'aloe-hyaluron-vitamin-b3-maske',
    name: 'Aloe Hyaluron Vitamin B3 Gesichtsmaske',
    eyebrow: 'Intensivpflege',
    category: 'Gesicht & Decolleté',
    description: 'Ergänzende Intensivpflege, die das Hautbild unterstützt und unter anderem bei Alters- und Pigmentflecken angewendet wird.',
    priceVerified: false
  },
  {
    slug: 'couperose-wirkstoff-serum',
    name: 'Couperose Wirkstoff Serum',
    eyebrow: 'Beruhigend',
    category: 'Gesicht & Decolleté',
    description: 'Mindert Rötungen, wirkt gereizter Haut entgegen und beruhigt bei sichtbaren, roten Äderchen.',
    priceVerified: false
  },
  {
    slug: 'langzeit-abdeck-creme',
    name: 'Langzeit Abdeck-Creme',
    eyebrow: 'Abdeckpflege',
    category: 'Gesicht & Decolleté',
    description: 'Wasserfest und stark abdeckend. Zuverlässig bei Couperose, Tattoos, Narben und Hautanomalien für einen makellosen Auftritt.',
    size: '30 ml',
    priceVerified: false,
    image: '/images/abdeck.webp',
    featured: true
  },
  {
    slug: 'lippen-balsam',
    name: 'Lippen Balsam',
    eyebrow: 'Lippenpflege',
    category: 'Gesicht & Decolleté',
    description: 'Pflegt raue, trockene Lippen und sorgt für langanhaltende Geschmeidigkeit durch natürliche Bienenwachsanteile.',
    size: '15 ml',
    priceVerified: false,
    image: '/images/lippen-balsam.webp'
  },
  // Hände & Füße
  {
    slug: 'hornhaut-balsam',
    name: 'Hornhaut Balsam',
    eyebrow: 'Hände & Füße',
    category: 'Hände & Füße',
    description: 'Reduziert Hornhaut an Füßen, Händen, Ellenbogen und Knien – nur durch Eincremen, ohne manuelles Abraspeln. Verhindert zudem das Einreißen und Aufspleißen von Nagelfalzen und Nagelhäutchen.',
    size: '30 ml',
    price: '7,25 €',
    priceVerified: true,
    image: '/images/hornhaut-balsam.webp',
    featured: true,
    efficacy: {
      value: '75 %',
      statement: 'Reduzierung der Hornhaut',
      context: 'nach 28 Tagen bei 2× täglicher Anwendung.'
    }
  },
  {
    slug: 'menthol-fuss-beinpflege',
    name: 'Menthol Fuß- und Beinpflege',
    eyebrow: 'Kühlend',
    category: 'Hände & Füße',
    description: 'Kühlt und regeneriert bei müden und beanspruchten Beinen. Ideal bei rauer Haut an Schienbeinen und Füßen.',
    priceVerified: false
  },
  {
    slug: 'ringelblumen-handcreme',
    name: 'Ringelblumen Handcreme',
    eyebrow: 'Handpflege',
    category: 'Hände & Füße',
    description: 'Spendet Feuchtigkeit, glättet und schützt trockene, schutzbedürftige Hände.',
    priceVerified: false
  },
  {
    slug: 'nagelhaut-pflegestift',
    name: 'Nagelhaut- und Nagelpflegestift',
    eyebrow: 'Nagelpflege',
    category: 'Hände & Füße',
    description: 'Präzise Pflege für eingerissene Nagelhäutchen, empfindliche Nagelfalze sowie gegen brüchige Finger- und Fußnägel.',
    priceVerified: false,
    image: '/images/nagelhaut-pflegestift.webp'
  },
  // Körper
  {
    slug: 'deo-balsam',
    name: 'Deo Balsam',
    eyebrow: 'Deo',
    category: 'Körper',
    description: 'Ein wasserreduzierter, wirkstoffkonzentrierter Balsam ohne Aluminiumverbindungen. Hilft effektiv gegen Schweiß und unangenehme Geruchsbildung.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/deo-balsam.webp',
    efficacy: {
      value: '24 h',
      statement: 'nachgewiesene Wirkung',
      context: 'gegen Körper- und Fußgeruch.'
    }
  },
  {
    slug: 'oleo-hautglaette-gel',
    name: 'Oleo Hautberuhigungs Gel',
    eyebrow: 'Hautberuhigend',
    category: 'Körper',
    description: 'Entwickelt für irritierte, trockene Haut nach dem Bad oder der Dusche. Besonders wirksam bei rauer Haut an den Schienbeinen.',
    size: '100 ml',
    priceVerified: false,
    image: '/images/oleo-hautglaette-gel.webp'
  },
  // Intimpflege
  {
    slug: 'intimpflege-reinigungsschaum',
    name: 'Intimpflege Reinigungsschaum',
    eyebrow: 'Reinigung',
    category: 'Intimpflege',
    description: 'Für die extrem milde, zarte und schonende Reinigung des empfindlichen Intimbereichs.',
    priceVerified: false
  },
  {
    slug: 'intimpflege-balsam',
    name: 'Intimpflege Balsam',
    eyebrow: 'Pflege',
    category: 'Intimpflege',
    description: 'Konzipiert für den äußeren Intimbereich. Schützt die Haut, beruhigt und desodoriert sanft.',
    priceVerified: false
  }
];
