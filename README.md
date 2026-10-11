# Dingtai Food — Astro B2B site

Static export website for **Yunnan Luoping Dingtai Food Development Co., Ltd.**  
English-language pages for overseas buyers: home, products, factory, certificates, contact.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

```bash
npm run build
npm run preview
```

## Customize before going live

Edit `src/data/site.ts`:

- `company.whatsapp` — digits only, country code included (e.g. `86138xxxxxxxx`)
- `company.email`, `company.phone`, `company.address`
- product specs, MOQ, packing

Replace Unsplash photos with your factory and product shots when ready.

Inquiry form opens WhatsApp with the buyer’s fields. To collect submissions in a mailbox, point the form at [Formspree](https://formspree.io) or Netlify Forms.
