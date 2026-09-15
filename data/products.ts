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
  // Placeholder data only
  {
    id: "placeholder-1",
    categoryId: "blinds",
    name: "Sample Blind Product [PLACEHOLDER]",
    slug: "sample-blind-placeholder",
    description: "[PLACEHOLDER TEXT: Replace this with an actual product description provided by ABS Blinds.]",
    images: ["/images/products/placeholder.jpg"],
    features: ["[PLACEHOLDER FEATURE 1]", "[PLACEHOLDER FEATURE 2]"],
  },
  {
    id: "placeholder-2",
    categoryId: "curtains",
    name: "Sample Curtain Product [PLACEHOLDER]",
    slug: "sample-curtain-placeholder",
    description: "[PLACEHOLDER TEXT: Replace this with an actual product description.]",
    images: ["/images/products/placeholder.jpg"],
    features: ["[PLACEHOLDER FEATURE 1]"],
  }
];
