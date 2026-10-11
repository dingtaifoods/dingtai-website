export const company = {
  legalName: "Yunnan Luoping Dingtai Food Development Co., Ltd.",
  shortName: "Dingtai Food",
  tagline: "Origin ginger from Luoping, Yunnan — sliced, milled, certified.",
  founded: 2008,
  origin: "Luoping County, Yunnan, China",
  email: "export@dingtaifood.com",
  phone: "+86 871 8888 6688",
  whatsapp: "8613888886688",
  wechat: "DingtaiExport",
  address:
    "Food Industrial Park, Luoping County, Qujing City, Yunnan Province, P.R. China",
  hours: "Mon–Sat, 08:30–18:00 CST (UTC+8)",
  moqNote: "Flexible MOQ for trial orders. Full-container loading available.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/factory", label: "Factory" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact" },
];

export const products = [
  {
    slug: "dried-ginger-slices",
    name: "Dried Ginger Slices",
    category: "Dehydrated ginger",
    summary:
      "Sun-dried and AD-dried slices of Luoping small yellow ginger. Clean aroma, low fiber, stable moisture for tea, seasoning, and extract plants.",
    heroImage:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80",
    ],
    highlights: ["AD / sun-dried", "3–8 mm cut", "Moisture ≤ 12%", "Export cartons"],
    specs: [
      ["Origin", "Luoping, Yunnan, China"],
      ["Variety", "Small yellow ginger (Xiao Huang Jiang)"],
      ["Process", "Washed, sliced, dehydrated, optical sorted"],
      ["Cut size", "3–5 mm / 5–8 mm, or custom"],
      ["Moisture", "≤ 12% (AD) / ≤ 13% (sun-dried)"],
      ["SO2", "Unsulphured or within buyer limit"],
      ["Color", "Light yellow to golden"],
      ["Packing", "10 kg / 20 kg PE liner + carton; 25 kg kraft"],
      ["MOQ", "500 kg trial / 1 FCL preferred"],
      ["Shelf life", "18–24 months in cool, dry storage"],
    ],
    applications: [
      "Herbal tea and ginger tea blends",
      "Seasoning and ready-meal plants",
      "Extract and oleoresin feedstock",
      "Retail private-label packs",
    ],
  },
  {
    slug: "ginger-powder",
    name: "Ginger Powder",
    category: "Milled spice",
    summary:
      "Fine, steam-sterilized powder milled from Luoping small yellow ginger. Consistent mesh, warm pungency, suitable for food, beverage, and nutraceutical use.",
    heroImage:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506368248148-2c5580a57e0b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1606914506374-86834187fbbd?auto=format&fit=crop&w=900&q=80",
    ],
    highlights: ["80–120 mesh", "Steam sterilized", "Low ash", "Metal detected"],
    specs: [
      ["Origin", "Luoping, Yunnan, China"],
      ["Raw material", "Dried small yellow ginger"],
      ["Mesh", "80 / 100 / 120 mesh"],
      ["Moisture", "≤ 10%"],
      ["Ash", "≤ 6.5%"],
      ["Micro", "Steam sterilized; COA with each lot"],
      ["Foreign matter", "Metal detected, sieved"],
      ["Packing", "25 kg kraft bag with inner PE; 1 kg / 5 kg retail option"],
      ["MOQ", "500 kg trial / 1 FCL preferred"],
      ["Shelf life", "24 months"],
    ],
    applications: [
      "Spice blends and sauces",
      "Bakery and beverage powders",
      "Capsules and health foods",
      "Industrial seasoning lines",
    ],
  },
  {
    slug: "organic-ginger",
    name: "Organic Ginger",
    category: "Certified organic",
    summary:
      "Organically grown Luoping ginger from contracted highland plots. Available as fresh, dried slices, or powder, with EU / USDA organic documentation on request.",
    heroImage:
      "https://images.unsplash.com/photo-1638613061776-04e0e0d1b0d4?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
    ],
    highlights: ["EU / USDA organic", "Traceable plots", "No synthetic pesticide", "Lot COA"],
    specs: [
      ["Origin", "Certified organic bases, Luoping, Yunnan"],
      ["Forms", "Fresh / dried slices / powder"],
      ["Certification", "EU Organic, USDA NOP (on request)"],
      ["Residue", "Compliant with destination MRL"],
      ["Traceability", "Plot code to finished lot"],
      ["Harvest", "Main crop Nov–Feb"],
      ["Packing", "Carton / mesh bag / kraft, buyer spec"],
      ["MOQ", "Discuss by form and destination"],
      ["Documents", "Certificate, invoice, packing list, COA, phytosanitary"],
      ["Shelf life", "Fresh: by cold-chain; dried: 18–24 months"],
    ],
    applications: [
      "Organic retail brands",
      "Natural tea houses",
      "Clean-label food manufacturers",
      "Supplement brands requiring organic input",
    ],
  },
] as const;

export const certificates = [
  {
    code: "HACCP",
    name: "HACCP",
    scope: "Hazard analysis for ginger processing and packing",
  },
  {
    code: "ISO",
    name: "ISO 22000",
    scope: "Food safety management system",
  },
  {
    code: "ORG",
    name: "Organic",
    scope: "EU Organic / USDA NOP (product-dependent)",
  },
  {
    code: "HLAL",
    name: "HALAL",
    scope: "Halal-compliant process and ingredients",
  },
  {
    code: "KSHR",
    name: "Kosher",
    scope: "Kosher certification for selected SKUs",
  },
  {
    code: "FDA",
    name: "FDA Facility",
    scope: "U.S. FDA food facility registration",
  },
];

export const factoryStats = [
  { value: "2000+", label: "Mu planting base" },
  { value: "8,000 t", label: "Annual processing" },
  { value: "15+", label: "Years exporting" },
  { value: "40+", label: "Destination markets" },
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hello Dingtai Food, I would like to inquire about Luoping ginger products.",
  );
  return `https://wa.me/${company.whatsapp}?text=${text}`;
}
