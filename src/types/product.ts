export type ProductCategory = "panes" | "viennoiserie" | "cafe" | "dulce";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  price: number; // EUR cents
  weight?: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  panes: "Panes",
  viennoiserie: "Viennoiserie",
  cafe: "Café",
  dulce: "Dulce",
};
