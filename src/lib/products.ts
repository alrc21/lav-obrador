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
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Medialuna recién horneada",
    featured: true,
  },
  {
    slug: "alfajor",
    name: "Alfajor",
    category: "dulce",
    price: 280,
    weight: "60g",
    description:
      "Dos tapas de galleta rellenas de dulce de leche artesanal, bañadas en chocolate o coronadas de azúcar glas.",
    ingredients: ["Harina", "Manteca", "Dulce de leche", "Chocolate", "Azúcar"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Alfajor argentino relleno de dulce de leche",
    featured: true,
  },
  {
    slug: "rolles-de-canela",
    name: "Rolles de Canela",
    category: "panes",
    price: 320,
    weight: "120g",
    description:
      "Bollo enrollado de masa brioche con canela y azúcar moreno. Glaseado de queso crema al salir del horno.",
    ingredients: ["Harina", "Mantequilla", "Canela", "Azúcar moreno", "Queso crema", "Huevo"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rolle de canela glaseado",
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
  // For a small catalog, return any other product, not just same-category
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}
