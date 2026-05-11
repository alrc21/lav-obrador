"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products } from "@/lib/products";

export type CartItem = { slug: string; quantity: number };

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      add: (slug, qty = 1) =>
        set((state) => {
          const existing = state.items.find((i) => i.slug === slug);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.slug === slug ? { ...i, quantity: i.quantity + qty } : i,
              ),
            };
          }
          return { items: [...state.items, { slug, quantity: qty }] };
        }),
      remove: (slug) =>
        set((state) => ({ items: state.items.filter((i) => i.slug !== slug) })),
      setQty: (slug, qty) =>
        set((state) => ({
          items:
            qty <= 0
              ? state.items.filter((i) => i.slug !== slug)
              : state.items.map((i) => (i.slug === slug ? { ...i, quantity: qty } : i)),
        })),
      clear: () => set({ items: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "lav-cart",
      partialize: (state) => ({ items: state.items }), // don't persist isOpen
    },
  ),
);

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}

export function cartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, i) => {
    const product = products.find((p) => p.slug === i.slug);
    return sum + (product ? product.price * i.quantity : 0);
  }, 0);
}
