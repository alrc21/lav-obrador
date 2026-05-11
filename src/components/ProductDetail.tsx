"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Product } from "@/types/product";
import { CATEGORY_LABELS } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-store";
import { ProductCard } from "./ProductCard";

type Props = {
  product: Product;
  related: Product[];
};

export function ProductDetail({ product, related }: Props) {
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const open = useCart((s) => s.open);

  const onAdd = () => {
    add(product.slug, qty);
    open();
  };

  return (
    <main className="px-6 pb-24 pt-8 md:px-12 md:pt-12">
      <nav
        className="mx-auto mb-8 max-w-6xl text-xs"
        style={{ color: "var(--color-muted)" }}
        aria-label="Breadcrumb"
      >
        <Link href="/tienda" className="hover:underline">
          Tienda
        </Link>
        <span className="px-2">/</span>
        <span>{CATEGORY_LABELS[product.category]}</span>
        <span className="px-2">/</span>
        <span style={{ color: "var(--color-accent)" }}>{product.name}</span>
      </nav>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        <div
          className="relative aspect-square w-full overflow-hidden md:sticky md:top-24 md:self-start"
          style={{ borderRadius: "var(--radius-md)" }}
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1
            className="mb-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink)",
            }}
          >
            {product.name}
          </h1>
          <p
            className="mb-8 text-xl"
            style={{ color: "var(--color-accent)" }}
          >
            {formatPrice(product.price)}
          </p>

          <p
            className="mb-10 max-w-prose text-base leading-relaxed"
            style={{ color: "var(--color-accent)" }}
          >
            {product.description}
          </p>

          <dl className="mb-10 space-y-4 text-sm">
            {product.weight && (
              <div className="flex gap-4">
                <dt
                  className="w-32 uppercase tracking-widest text-xs"
                  style={{ color: "var(--color-muted)" }}
                >
                  Peso
                </dt>
                <dd style={{ color: "var(--color-accent)" }}>{product.weight}</dd>
              </div>
            )}
            <div className="flex gap-4">
              <dt
                className="w-32 uppercase tracking-widest text-xs"
                style={{ color: "var(--color-muted)" }}
              >
                Ingredientes
              </dt>
              <dd style={{ color: "var(--color-accent)" }}>
                {product.ingredients.join(", ")}
              </dd>
            </div>
            {product.allergens.length > 0 && (
              <div className="flex gap-4">
                <dt
                  className="w-32 uppercase tracking-widest text-xs"
                  style={{ color: "var(--color-muted)" }}
                >
                  Alérgenos
                </dt>
                <dd style={{ color: "var(--color-accent)" }}>
                  {product.allergens.join(", ")}
                </dd>
              </div>
            )}
          </dl>

          <div className="flex flex-wrap items-center gap-4">
            <div
              className="inline-flex items-center gap-3 border px-3 py-2"
              style={{
                borderColor: "var(--color-line)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Disminuir cantidad"
                style={{ color: "var(--color-accent)" }}
              >
                <Minus size={14} strokeWidth={1.5} />
              </button>
              <span className="min-w-6 text-center text-base">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Aumentar cantidad"
                style={{ color: "var(--color-accent)" }}
              >
                <Plus size={14} strokeWidth={1.5} />
              </button>
            </div>

            <button
              onClick={onAdd}
              className="flex-1 px-8 py-3 text-xs uppercase tracking-widest transition hover:opacity-90"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-bg)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto mt-32 max-w-6xl">
          <h2
            className="mb-10 text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink)",
            }}
          >
            También te puede gustar
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
