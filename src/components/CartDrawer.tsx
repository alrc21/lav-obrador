"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart, cartSubtotal } from "@/lib/cart-store";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export function CartDrawer() {
  const isOpen = useCart((s) => s.isOpen);
  const items = useCart((s) => s.items);
  const close = useCart((s) => s.close);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const subtotal = cartSubtotal(items);

  const whatsappMessage = encodeURIComponent(
    `Hola LAV, me gustaría hacer este pedido:\n\n${items
      .map((i) => {
        const p = products.find((pp) => pp.slug === i.slug);
        return p ? `· ${p.name} × ${i.quantity}` : "";
      })
      .filter(Boolean)
      .join("\n")}\n\nTotal: ${formatPrice(subtotal)}`,
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className="fixed inset-0 z-40 transition-opacity"
        style={{
          backgroundColor: "rgba(42, 31, 30, 0.4)",
          backdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Tu cesta"
        className="fixed right-0 top-0 z-50 flex h-full w-full flex-col transition-transform md:w-[420px]"
        style={{
          backgroundColor: "var(--color-bg)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: "-20px 0 40px rgba(42,31,30,0.1)",
        }}
      >
        <header
          className="flex items-center justify-between border-b px-6 py-5"
          style={{ borderColor: "var(--color-line)" }}
        >
          <h2
            className="text-xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink)",
            }}
          >
            Tu pedido
          </h2>
          <button
            onClick={close}
            aria-label="Cerrar cesta"
            className="transition hover:opacity-70"
            style={{ color: "var(--color-accent)" }}
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <p
                className="mb-6 italic"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-muted)",
                }}
              >
                Tu cesta está vacía
              </p>
              <Link
                href="/tienda"
                onClick={close}
                className="text-xs uppercase tracking-widest underline-offset-4 hover:underline"
                style={{ color: "var(--color-accent)" }}
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <ul className="divide-y" style={{ borderColor: "var(--color-line)" }}>
              {items.map((item) => {
                const p = products.find((pp) => pp.slug === item.slug);
                if (!p) return null;
                return (
                  <li key={item.slug} className="flex gap-4 px-6 py-5">
                    <div
                      className="relative h-20 w-20 flex-shrink-0 overflow-hidden"
                      style={{ borderRadius: "var(--radius-sm)" }}
                    >
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between gap-2">
                        <h3
                          className="text-base"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--color-ink)",
                          }}
                        >
                          {p.name}
                        </h3>
                        <button
                          onClick={() => remove(item.slug)}
                          aria-label={`Eliminar ${p.name}`}
                          className="transition hover:opacity-70"
                          style={{ color: "var(--color-muted)" }}
                        >
                          <Trash2 size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div
                          className="inline-flex items-center gap-2 border px-2 py-1"
                          style={{
                            borderColor: "var(--color-line)",
                            borderRadius: "var(--radius-sm)",
                          }}
                        >
                          <button
                            onClick={() => setQty(item.slug, item.quantity - 1)}
                            aria-label="Disminuir"
                            className="transition hover:opacity-70"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="min-w-4 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => setQty(item.slug, item.quantity + 1)}
                            aria-label="Aumentar"
                            className="transition hover:opacity-70"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>
                        <span
                          className="text-sm"
                          style={{ color: "var(--color-accent)" }}
                        >
                          {formatPrice(p.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer
            className="border-t px-6 py-6"
            style={{ borderColor: "var(--color-line)" }}
          >
            <div className="mb-4 flex items-baseline justify-between">
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--color-muted)" }}
              >
                Subtotal
              </span>
              <span
                className="text-xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-ink)",
                }}
              >
                {formatPrice(subtotal)}
              </span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 text-center text-xs uppercase tracking-widest transition hover:opacity-90"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-bg)",
                borderRadius: "var(--radius-sm)",
              }}
            >
              Pedir por WhatsApp
            </a>
            <p
              className="mt-3 text-center text-xs"
              style={{ color: "var(--color-muted)" }}
            >
              Pago online próximamente.
            </p>
          </footer>
        )}
      </aside>
    </>
  );
}
