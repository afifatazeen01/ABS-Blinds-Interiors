export type Product = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  images: string[];
  features?: string[];
};

export const products: Product[] = [
  // Blinds
  {
    id: "roller-blinds",
    categoryId: "blinds",
    name: "Roller Blinds",
    slug: "roller-blinds",
    description: "Clean lines and effortless elegance for modern spaces.",
    images: ["/images/products/roller-blinds.jpg"],
    features: ["Custom sizes", "Various opacities", "Easy maintenance"],
  },
  {
    id: "zebra-blinds",
    categoryId: "blinds",
    name: "Zebra Blinds",
    slug: "zebra-blinds",
    description: "Control light with stylish alternating sheer and solid stripes.",
    images: ["/images/products/zebra-blinds.jpg"],
    features: ["Light control", "Modern aesthetic"],
  },
  // Curtains
  {
    id: "blackout-curtains",
    categoryId: "curtains",
    name: "Blackout Curtains",
    slug: "blackout-curtains",
    description: "Block out light and reduce noise for a perfect night's sleep.",
    images: ["/images/products/blackout-curtains.jpg"],
    features: ["Noise reduction", "Total privacy", "Thermal insulation"],
  }
];
