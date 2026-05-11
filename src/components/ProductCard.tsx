"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-store";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const add = useCart((s) => s.add);
  const open = useCart((s) => s.open);

  const onAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    add(product.slug);
    open();
  };

  return (
    <Link
      href={`/tienda/${product.slug}`}
      className="group block transition"
    >
      <div
        className="relative aspect-square w-full overflow-hidden"
        style={{ borderRadius: "var(--radius-md)" }}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-1">
        <h3
          className="text-lg"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-ink)",
          }}
        >
          {product.name}
        </h3>
        <p className="text-sm" style={{ color: "var(--color-muted)" }}>
          {formatPrice(product.price)}
        </p>
      </div>

      <button
        onClick={onAdd}
        className="mt-4 w-full border px-4 py-2 text-xs uppercase tracking-widest transition hover:bg-current hover:text-[var(--color-bg)]"
        style={{
          borderColor: "var(--color-accent)",
          color: "var(--color-accent)",
          borderRadius: "var(--radius-sm)",
        }}
      >
        Añadir al carrito
      </button>
    </Link>
  );
}
