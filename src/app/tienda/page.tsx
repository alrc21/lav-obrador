"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilters } from "@/components/CategoryFilters";
import { products } from "@/lib/products";
import type { ProductCategory } from "@/types/product";

type Filter = ProductCategory | "all";

export default function TiendaPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <Nav />
      <CartDrawer />

      <main>
        <header className="px-6 py-16 text-center md:py-24">
          <p
            className="mb-3 text-xs uppercase"
            style={{
              letterSpacing: "0.3em",
              color: "var(--color-muted)",
            }}
          >
            El obrador
          </p>
          <h1
            className="mb-4 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink)",
            }}
          >
            Nuestros productos
          </h1>
          <p className="text-base" style={{ color: "var(--color-muted)" }}>
            Pan, viennoiserie y café de especialidad.
          </p>
        </header>

        <div className="px-6 pb-8">
          <CategoryFilters active={filter} onChange={setFilter} />
        </div>

        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p
                className="py-16 text-center"
                style={{ color: "var(--color-muted)" }}
              >
                No hay productos en esta categoría.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
