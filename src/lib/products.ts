import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "medialuna",
    name: "Medialuna",
    category: "viennoiserie",
    price: 220,
    weight: "70g",
    description:
      "La medialuna argentina, hojaldrada y dorada. Pintada con almíbar al salir del horno.",
    ingredients: ["Harina de trigo", "Manteca", "Azúcar", "Huevo", "Levadura", "Sal"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Medialuna recién horneada",
    featured: true,
  },
  {
    slug: "croissant",
    name: "Croissant",
    category: "viennoiserie",
    price: 260,
    weight: "80g",
    description:
      "Croissant clásico francés, 27 capas de masa laminada con mantequilla AOP.",
    ingredients: ["Harina de trigo", "Mantequilla AOP", "Leche", "Levadura", "Sal"],
    allergens: ["Gluten", "Lácteos"],
    image:
      "https://images.unsplash.com/photo-1555507036-ab41f1f44cd7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Croissant dorado con capas visibles",
    featured: true,
  },
  {
    slug: "brioche",
    name: "Brioche",
    category: "panes",
    price: 480,
    weight: "400g",
    description:
      "Pan brioche francés, miga dorada y esponjosa. Ideal para tostar o acompañar café.",
    ingredients: ["Harina", "Mantequilla AOP", "Huevos", "Leche", "Azúcar", "Levadura"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pan brioche dorado en molde",
  },
  {
    slug: "cafe-especialidad",
    name: "Café de Especialidad",
    category: "cafe",
    price: 220,
    description:
      "Café single origin de tueste medio. Notas a cacao y caramelo. Para el local o para llevar a casa.",
    ingredients: ["Café arábica 100%"],
    allergens: [],
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Taza de café espresso con crema",
    featured: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"] | "all"): Product[] {
  return category === "all" ? products : products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const product = getProduct(slug);
  if (!product) return [];
  return products
    .filter((p) => p.category === product.category && p.slug !== slug)
    .slice(0, limit);
}
