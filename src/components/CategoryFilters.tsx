"use client";

import type { ProductCategory } from "@/types/product";
import { CATEGORY_LABELS } from "@/types/product";

type Filter = ProductCategory | "all";

type Props = {
  active: Filter;
  onChange: (f: Filter) => void;
};

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "panes", label: CATEGORY_LABELS.panes },
  { value: "viennoiserie", label: CATEGORY_LABELS.viennoiserie },
  { value: "cafe", label: CATEGORY_LABELS.cafe },
  { value: "dulce", label: CATEGORY_LABELS.dulce },
];

export function CategoryFilters({ active, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Filtrar productos por categoría"
      className="flex flex-wrap justify-center gap-3"
    >
      {FILTERS.map((f) => {
        const isActive = active === f.value;
        return (
          <button
            key={f.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(f.value)}
            className="border px-5 py-2 text-xs uppercase tracking-widest transition"
            style={{
              borderColor: "var(--color-accent)",
              backgroundColor: isActive ? "var(--color-accent)" : "transparent",
              color: isActive ? "var(--color-bg)" : "var(--color-accent)",
              borderRadius: "var(--radius-sm)",
            }}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
