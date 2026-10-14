export const company = {
  legalName: "Yunnan Luoping Dingtai Food Development Co., Ltd.",
  shortName: "Dingtai Food",
  tagline: "Origin ginger from Luoping, Yunnan — sliced, milled, certified.",
  founded: 2008,
  origin: "Luoping County, Yunnan, China",
  email: "sales@dingtaifoods.com",
  phone: "+86 176 0696 7785",
  whatsapp: "85296946564",
  wechat: "",
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
      "/images/dried-ginger-slices.jpg",
    gallery: [
      "/images/dried-ginger-slices.jpg",
      "/images/dried-ginger-slices.jpg",
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
      "/images/ginger-powder.jpg",
    gallery: [
      "/images/ginger-powder.jpg",
      "/images/ginger-powder.jpg",
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
    slug: "dried-chili-star-anise",
    name: "Dried Chili & Star Anise",
    category: "Spices & Seasonings",
    summary:
      "High-quality dried chili and star anise from Yunnan. Rich aroma, consistent color, and strict quality control for global food and seasoning manufacturers.",
    heroImage:
      "/images/dried-chili-star-anise.jpg",
    gallery: [
      "/images/dried-chili-star-anise.jpg",
      "/images/dried-chili-star-anise.jpg",
    ],
    highlights: ["Yunnan origin", "Rich aroma", "Low moisture", "Export grade"],
    specs: [
      ["Origin", "Yunnan, China"],
      ["Product", "Dried Chili & Star Anise"],
      ["Moisture", "≤ 12%"],
      ["Color", "Natural red / brown"],
      ["Packing", "10 kg / 20 kg carton or as buyer request"],
      ["MOQ", "500 kg trial / 1 FCL preferred"],
      ["Shelf life", "18–24 months in cool, dry storage"],
    ],
    applications: [
      "Spice blends and seasoning",
      "Ready-meal and sauce plants",
      "Catering and food service",
      "Retail private-label packs",
    ],
  },
] as const;

export const certificates = [
  {
    code: "FDA",
    name: "FDA Facility",
    scope: "U.S. FDA food facility registration and compliance",
  },
  {
    code: "FSSC",
    name: "FSSC 22000",
    scope: "GFSI-recognized food safety system certification",
  },
  {
    code: "HACCP",
    name: "HACCP",
    scope: "Hazard analysis and critical control points for food safety",
  },
  {
    code: "EUORG",
    name: "EU Organic",
    scope: "Compliant with EU organic standards for ginger products",
  },
  {
    code: "USDA",
    name: "USDA Organic",
    scope: "Meets USDA National Organic Program standards",
  },
  {
    code: "KOFK",
    name: "Kosher (KOF-K)",
    scope: "Kosher-certified production processes for selected SKUs",
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