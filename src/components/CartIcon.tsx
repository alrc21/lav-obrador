"use client";

import { ShoppingBag } from "lucide-react";
import { useCart, cartCount } from "@/lib/cart-store";

export function CartIcon() {
  const items = useCart((s) => s.items);
  const open = useCart((s) => s.open);
  const count = cartCount(items);

  return (
    <button
      onClick={open}
      aria-label={`Abrir cesta, ${count} productos`}
      className="relative p-2 transition hover:opacity-70"
      style={{ color: "var(--color-accent)" }}
    >
      <ShoppingBag size={20} strokeWidth={1.5} />
      {count > 0 && (
        <span
          className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-medium"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg)",
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}
