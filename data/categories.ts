export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "blinds",
    name: "Blinds",
    slug: "blinds",
    description: "Premium window blinds including Roller, Zebra, Roman, and Venetian.",
    image: "/images/categories/blinds.jpg", // Needs valid image later
  },
  {
    id: "curtains",
    name: "Curtains",
    slug: "curtains",
    description: "Elegant sheer, blackout, and custom-layered curtains.",
    image: "/images/categories/curtains.jpg",
  },
  {
    id: "wallpapers",
    name: "Customized Wallpapers",
    slug: "wallpapers",
    description: "Transform your walls with bespoke, high-quality wallpapers.",
    image: "/images/categories/wallpapers.jpg",
  },
  {
    id: "glass-flooring",
    name: "Glass Flooring",
    slug: "glass-flooring",
    description: "Modern, sophisticated glass flooring solutions.",
    image: "/images/categories/glass-flooring.jpg",
  },
  {
    id: "wooden-flooring",
    name: "Wooden Flooring",
    slug: "wooden-flooring",
    description: "Warm, durable, and elegant wooden floors.",
    image: "/images/categories/wooden-flooring.jpg",
  },
  {
    id: "glass-film",
    name: "Glass Film",
    slug: "glass-film",
    description: "Privacy, frosted, and decorative glass films.",
    image: "/images/categories/glass-film.jpg",
  },
  {
    id: "wooden-carpentry",
    name: "Wooden Carpentry",
    slug: "wooden-carpentry",
    description: "Bespoke wooden carpentry tailored to your interior needs.",
    image: "/images/categories/carpentry.jpg",
  }
];
