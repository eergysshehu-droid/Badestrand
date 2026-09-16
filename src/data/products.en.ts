import type { Product } from './products';

export const productsEn: Product[] = [
  // Face & Décolleté
  {
    slug: 'suessholz-gesichtswasser',
    name: 'Süßholz Gesichts- und Reinigungswasser',
    eyebrow: 'Cleansing',
    category: 'Face & Décolleté',
    description: 'Cleanses deep into the pores and has a soothing effect. Ideal for cleansing sensitive skin, skin prone to dryness and maturity, and for skin with couperose and age spots.',
    priceVerified: false
  },
  {
    slug: 'rosenblueten-tagescreme',
    name: 'Rosenblüten Tagescreme',
    eyebrow: 'Day Care',
    category: 'Face & Décolleté',
    description: 'For dry, mature skin. Has a noticeably smoothing effect, provides moisture and contains a protective beeswax component.',
    priceVerified: false
  },
  {
    slug: 'rosenmandel-nachtcreme',
    name: 'Rosenmandel Nachtcreme',
    eyebrow: 'Night Care',
    category: 'Face & Décolleté',
    description: 'Nourishes and improves the look of skin overnight, specially developed for dry and more mature skin.',
    priceVerified: false
  },
  {
    slug: 'wildrosen-hautoel',
    name: 'Wildrosen Hautöl',
    eyebrow: 'Skin Oil',
    category: 'Face & Décolleté',
    description: 'The beauty oil from the Chilean Andes with added essential rose oil. Builds up skin moisture, smooths, is non-greasy and absorbs instantly. Ideal for a lined décolleté and for skin regeneration.',
    priceVerified: false
  },
  {
    slug: 'aloe-hyaluron-booster',
    name: 'Aloe Hyaluron Booster',
    eyebrow: 'Hydration',
    category: 'Face & Décolleté',
    description: 'Care for very dry, dehydrated skin with an instant effect. Noticeably increases skin moisture.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/aloe.webp',
    featured: true,
    efficacy: {
      value: '48%',
      statement: 'increase in skin moisture',
      context: 'after 2 hours.'
    }
  },
  {
    slug: 'rotalgen-aloe-hyaluron-konzentrat',
    name: 'Rotalgen Aloe Hyaluron Konzentrat',
    eyebrow: 'Ampoule Serum',
    category: 'Face & Décolleté',
    description: 'An anti-wrinkle serum with an instant effect for lined facial skin and mature skin.',
    size: '7 ampoules of 2 ml',
    priceVerified: false,
    image: '/images/rotalgen-aloe-hyaluron-konzentrat.webp',
    efficacy: {
      value: '39%',
      statement: 'fewer wrinkles',
      context: 'according to manufacturer data.'
    }
  },
  {
    slug: 'aqua-plus-creme',
    name: 'Aqua Plus Creme',
    eyebrow: 'Hydration',
    category: 'Face & Décolleté',
    description: 'An intensive moisture treatment for lined as well as very dry, very dehydrated facial skin.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/aqua-plus-creme.webp'
  },
  {
    slug: 'sebum-plus-aufbaucreme',
    name: 'Sebum Plus Aufbaucreme',
    eyebrow: 'Mature Skin',
    category: 'Face & Décolleté',
    description: 'Helps aged, slack skin regain youthful protection and freshness. Rebuilds the skin barrier with a formula related to the skin’s own structure, using cupuaçu and shea butter. Ideal for mature skin and for couperose.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/sebum-plus-aufbaucreme.webp'
  },
  {
    slug: 'honig-propolis-universalcreme',
    name: 'Honig Propolis Universalcreme',
    eyebrow: 'All-Round Care',
    category: 'Face & Décolleté',
    description: 'The all-round care for the face and the whole body. Nourishes, helps prevent skin irritation and serves as intensive skin protection for dry, flaky skin exposed to wind and weather.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/honig-propolis-universalcreme.webp'
  },
  {
    slug: 'karotten-creme',
    name: 'Karotten Creme',
    eyebrow: 'Balancing Care',
    category: 'Face & Décolleté',
    description: 'Balancing care recommended especially for dry, but also for oilier facial skin, as well as for pale-looking skin.',
    priceVerified: false
  },
  {
    slug: 'pigmentflecken-creme',
    name: 'Pigmentflecken Creme',
    eyebrow: 'Pigmentation',
    category: 'Face & Décolleté',
    description: 'Reduces age and pigmentation spots, smooths the skin and activates cell protection.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/pigmentflecken-creme.webp',
    featured: true,
    efficacy: {
      value: '23%',
      statement: 'reduction of age and pigmentation spots',
      context: 'in 6 weeks.'
    }
  },
  {
    slug: 'aloe-hyaluron-vitamin-b3-maske',
    name: 'Aloe Hyaluron Vitamin B3 Gesichtsmaske',
    eyebrow: 'Intensive Care',
    category: 'Face & Décolleté',
    description: 'A complementary intensive treatment that supports the complexion and is used, among other things, for age and pigmentation spots.',
    priceVerified: false
  },
  {
    slug: 'couperose-wirkstoff-serum',
    name: 'Couperose Wirkstoff Serum',
    eyebrow: 'Soothing',
    category: 'Face & Décolleté',
    description: 'Reduces redness, counteracts irritated skin and soothes visible, red thread veins.',
    priceVerified: false
  },
  {
    slug: 'langzeit-abdeck-creme',
    name: 'Langzeit Abdeck-Creme',
    eyebrow: 'Coverage Care',
    category: 'Face & Décolleté',
    description: 'Water-resistant and strongly covering. Reliable for couperose, tattoos, scars and skin irregularities for a flawless look.',
    size: '30 ml',
    priceVerified: false,
    image: '/images/abdeck.webp',
    featured: true
  },
  {
    slug: 'lippen-balsam',
    name: 'Lippen Balsam',
    eyebrow: 'Lip Care',
    category: 'Face & Décolleté',
    description: 'Cares for rough, dry lips and provides long-lasting suppleness through natural beeswax content.',
    size: '15 ml',
    priceVerified: false,
    image: '/images/lippen-balsam.webp'
  },
  // Hands & Feet
  {
    slug: 'hornhaut-balsam',
    name: 'Hornhaut Balsam',
    eyebrow: 'Hands & Feet',
    category: 'Hands & Feet',
    description: 'Reduces calluses on feet, hands, elbows and knees — simply by applying, with no manual filing. Also helps prevent cracking and splitting of the nail folds and cuticles.',
    size: '30 ml',
    price: '7.25 €',
    priceVerified: true,
    image: '/images/hornhaut-balsam.webp',
    featured: true,
    efficacy: {
      value: '75%',
      statement: 'reduction in callus',
      context: 'after 28 days with twice-daily application.'
    }
  },
  {
    slug: 'menthol-fuss-beinpflege',
    name: 'Menthol Fuß- und Beinpflege',
    eyebrow: 'Cooling',
    category: 'Hands & Feet',
    description: 'Cools and revitalizes tired, stressed legs. Ideal for rough skin on shins and feet.',
    priceVerified: false
  },
  {
    slug: 'ringelblumen-handcreme',
    name: 'Ringelblumen Handcreme',
    eyebrow: 'Hand Care',
    category: 'Hands & Feet',
    description: 'Provides moisture, smooths and protects dry hands in need of care.',
    priceVerified: false
  },
  {
    slug: 'nagelhaut-pflegestift',
    name: 'Nagelhaut- und Nagelpflegestift',
    eyebrow: 'Nail Care',
    category: 'Hands & Feet',
    description: 'Precise care for torn cuticles and sensitive nail folds, as well as for brittle finger and toe nails.',
    priceVerified: false,
    image: '/images/nagelhaut-pflegestift.webp'
  },
  // Body
  {
    slug: 'deo-balsam',
    name: 'Deo Balsam',
    eyebrow: 'Deodorant',
    category: 'Body',
    description: 'A low-water, active-ingredient-concentrated balm without aluminum compounds. Effectively helps against sweat and unpleasant odor.',
    size: '50 ml',
    priceVerified: false,
    image: '/images/deo-balsam.webp',
    efficacy: {
      value: '24 h',
      statement: 'proven effectiveness',
      context: 'against body and foot odor.'
    }
  },
  {
    slug: 'oleo-hautglaette-gel',
    name: 'Oleo Hautberuhigungs Gel',
    eyebrow: 'Skin-Soothing',
    category: 'Body',
    description: 'Developed for irritated, dry skin after bathing or showering. Especially effective for rough skin on the shins.',
    size: '100 ml',
    priceVerified: false,
    image: '/images/oleo-hautglaette-gel.webp'
  },
  // Intimate Care
  {
    slug: 'intimpflege-reinigungsschaum',
    name: 'Intimpflege Reinigungsschaum',
    eyebrow: 'Cleansing',
    category: 'Intimate Care',
    description: 'For extremely mild, gentle and careful cleansing of the sensitive intimate area.',
    priceVerified: false
  },
  {
    slug: 'intimpflege-balsam',
    name: 'Intimpflege Balsam',
    eyebrow: 'Care',
    category: 'Intimate Care',
    description: 'Designed for the outer intimate area. Protects the skin, soothes and gently deodorizes.',
    priceVerified: false
  }
];
