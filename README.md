# Badestrand Kosmetik — Astro prototype

A complete responsive German website prototype based on the approved
Modern Luxury + Collector's Edit direction.

## Pages
- `/`
- `/produkte/`
- `/produkte/hornhaut-balsam/`
- `/problemloesungen/`
- `/inhaltsstoffe/`
- `/ueber-uns/`
- `/magazin/`
- `/kontakt/`
- `/warenkorb/`

## Run locally
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
```
The static build is created in `dist/` and is suitable for Cloudflare Pages/Workers Static Assets.

## Important
The generated imagery is for the design prototype. Replace it with approved client packshots
and campaign photography before production.

Prices, claims and legal text must be re-verified against the client's current data before launch.

## Next integration
- Sanity CMS: product/editorial/page content
- Commerce backend: checkout, inventory, customer accounts and orders
- Cloudflare: DNS, CDN, deployment
