import type { Product } from "@/types/product";

export const products: Product[] = [
  // Viennoiserie
  {
    slug: "medialuna-clasica",
    name: "Medialuna Clásica",
    category: "viennoiserie",
    price: 220,
    weight: "70g",
    description:
      "Medialuna argentina de manteca, hojaldrada y dorada en horno de piedra. Pintada con almíbar al salir del horno.",
    ingredients: [
      "Harina de trigo",
      "Manteca",
      "Azúcar",
      "Huevo",
      "Levadura",
      "Sal",
    ],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Medialuna recién horneada vista desde arriba",
    featured: true,
  },
  {
    slug: "croissant-mantequilla",
    name: "Croissant de Mantequilla",
    category: "viennoiserie",
    price: 260,
    weight: "80g",
    description:
      "Croissant clásico francés, 27 capas de masa laminada con mantequilla AOP. Fermentación de 24h.",
    ingredients: ["Harina de trigo", "Mantequilla AOP", "Leche", "Levadura", "Sal"],
    allergens: ["Gluten", "Lácteos"],
    image:
      "https://images.unsplash.com/photo-1555507036-ab41f1f44cd7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Croissant dorado con capas visibles",
  },
  {
    slug: "pain-au-chocolat",
    name: "Pain au Chocolat",
    category: "viennoiserie",
    price: 290,
    weight: "90g",
    description:
      "Hojaldre de mantequilla con dos barras de chocolate negro 70% origen Madagascar.",
    ingredients: [
      "Harina de trigo",
      "Mantequilla AOP",
      "Chocolate 70%",
      "Leche",
      "Levadura",
    ],
    allergens: ["Gluten", "Lácteos", "Soja"],
    image:
      "https://images.unsplash.com/photo-1592985684811-6c0f98adb014?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pain au chocolat sobre tabla de madera",
  },
  {
    slug: "brioche-feuilletee",
    name: "Brioche Feuilletée",
    category: "viennoiserie",
    price: 340,
    weight: "120g",
    description:
      "Híbrido entre brioche y hojaldre. Miga aireada, corteza crujiente, mucho butter.",
    ingredients: ["Harina de trigo", "Mantequilla AOP", "Huevo", "Azúcar", "Leche"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Brioche hojaldrada con corte transversal",
  },
  // Panes
  {
    slug: "pan-campesino",
    name: "Pan Campesino",
    category: "panes",
    price: 580,
    weight: "800g",
    description:
      "Hogaza de masa madre con 48h de fermentación en frío. Mezcla de harina de trigo T80 y centeno integral.",
    ingredients: ["Harina T80", "Centeno integral", "Masa madre", "Agua", "Sal marina"],
    allergens: ["Gluten"],
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hogaza redonda de pan campesino con corte en cruz",
    featured: true,
  },
  {
    slug: "pan-centeno",
    name: "Pan de Centeno",
    category: "panes",
    price: 620,
    weight: "750g",
    description:
      "Pan oscuro de centeno integral con semillas de girasol y lino. Miga densa, sabor profundo.",
    ingredients: [
      "Centeno integral",
      "Semillas de girasol",
      "Lino",
      "Masa madre",
      "Sal",
    ],
    allergens: ["Gluten"],
    image:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pan de centeno rebanado mostrando miga densa",
  },
  {
    slug: "brioche",
    name: "Brioche Tradicional",
    category: "panes",
    price: 720,
    weight: "500g",
    description:
      "Brioche francés clásico, miga dorada y esponjosa, ideal para tostar o acompañar café.",
    ingredients: ["Harina", "Mantequilla", "Huevos", "Leche", "Azúcar", "Levadura"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Brioche dorado con forma de molde",
  },
  {
    slug: "focaccia-romero",
    name: "Focaccia de Romero",
    category: "panes",
    price: 480,
    weight: "400g",
    description:
      "Focaccia italiana con aceite de oliva virgen extra, romero fresco y sal en escamas.",
    ingredients: ["Harina", "Aceite de oliva", "Romero", "Sal en escamas", "Levadura"],
    allergens: ["Gluten"],
    image:
      "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Focaccia con romero y sal gruesa",
  },
  // Café
  {
    slug: "espresso-origen",
    name: "Espresso de Origen",
    category: "cafe",
    price: 220,
    description:
      "Café de especialidad single origin. Tueste medio, notas a cacao y caramelo. 250g grano entero.",
    ingredients: ["Café arábica 100%"],
    allergens: [],
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Taza de espresso con crema dorada",
    featured: true,
  },
  {
    slug: "filtro-v60",
    name: "Filtro V60",
    category: "cafe",
    price: 280,
    description:
      "Café de filtro preparado con método V60. Tueste claro, notas florales y cítricas.",
    ingredients: ["Café arábica 100%"],
    allergens: [],
    image:
      "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cafetera V60 vertiendo café filtrado",
  },
  {
    slug: "latte",
    name: "Latte",
    category: "cafe",
    price: 320,
    description:
      "Espresso doble con leche entera texturizada. Arte latte en cada taza.",
    ingredients: ["Café arábica", "Leche"],
    allergens: ["Lácteos"],
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Latte con arte latte en taza blanca",
  },
  // Dulce
  {
    slug: "tarta-del-dia",
    name: "Tarta del Día",
    category: "dulce",
    price: 380,
    weight: "120g",
    description:
      "Tarta artesanal elaborada cada mañana según temporada. Pregunta por la variedad del día.",
    ingredients: ["Variable según temporada"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tarta artesanal con frutas frescas",
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
