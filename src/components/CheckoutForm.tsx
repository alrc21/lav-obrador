"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart, cartSubtotal } from "@/lib/cart-store";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/format";

const SHIPPING_CENTS = 300; // 3€
const FREE_SHIPPING_THRESHOLD = 3000; // 30€

type DeliveryMethod = "pickup" | "delivery";

export function CheckoutForm() {
  const router = useRouter();
  const items = useCart((s) => s.items);
  const clear = useCart((s) => s.clear);

  const [delivery, setDelivery] = useState<DeliveryMethod>("pickup");
  const [submitting, setSubmitting] = useState(false);

  const subtotal = cartSubtotal(items);
  const shipping = delivery === "delivery" && subtotal < FREE_SHIPPING_THRESHOLD ? SHIPPING_CENTS : 0;
  const total = subtotal + shipping;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (items.length === 0) return;
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const orderId = `LAV-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const order = {
      id: orderId,
      createdAt: new Date().toISOString(),
      delivery,
      contact: {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      },
      address:
        delivery === "delivery"
          ? {
              street: formData.get("street"),
              postal: formData.get("postal"),
              city: formData.get("city"),
            }
          : null,
      items: items.map((i) => {
        const p = products.find((pp) => pp.slug === i.slug);
        return { slug: i.slug, name: p?.name, quantity: i.quantity, price: p?.price };
      }),
      subtotal,
      shipping,
      total,
    };

    try {
      const raw = localStorage.getItem("lav-orders");
      const list = raw ? JSON.parse(raw) : [];
      list.push(order);
      localStorage.setItem("lav-orders", JSON.stringify(list));
      localStorage.setItem("lav-last-order", JSON.stringify(order));
    } catch {
      // ignore — page still navigates to success
    }

    clear();

    // Small artificial delay so it feels like a real network roundtrip
    setTimeout(() => router.push(`/checkout/success?order=${orderId}`), 600);
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-md px-6 py-32 text-center">
        <p
          className="mb-6 text-2xl italic"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-muted)",
          }}
        >
          Tu cesta está vacía.
        </p>
        <Link
          href="/tienda"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-70"
          style={{ color: "var(--color-accent)" }}
        >
          Ver productos →
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-12 md:grid-cols-[1fr_400px] md:gap-16 md:py-16"
    >
      {/* LEFT — form sections */}
      <div className="space-y-12">
        <Section eyebrow="01" title="Contacto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nombre" name="name" required autoComplete="name" />
            <Field label="Teléfono" name="phone" type="tel" required autoComplete="tel" />
            <Field
              label="Email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="sm:col-span-2"
            />
          </div>
        </Section>

        <Section eyebrow="02" title="Entrega">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <DeliveryOption
              checked={delivery === "pickup"}
              onChange={() => setDelivery("pickup")}
              label="Recogida en obrador"
              meta="Gratis · Mañana mismo"
            />
            <DeliveryOption
              checked={delivery === "delivery"}
              onChange={() => setDelivery("delivery")}
              label="Envío a domicilio"
              meta="3€ · 24-48h · gratis +30€"
            />
          </div>
          {delivery === "delivery" && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Calle y número" name="street" required autoComplete="street-address" className="sm:col-span-2" />
              <Field label="Código postal" name="postal" required autoComplete="postal-code" />
              <Field label="Ciudad" name="city" required defaultValue="Valencia" autoComplete="address-level2" />
            </div>
          )}
          {delivery === "pickup" && (
            <p className="mt-4 text-sm" style={{ color: "var(--color-muted)" }}>
              Recoge tu pedido en Calle del Mar d&apos;Alboran, 10C — Playa Patacona, Valencia.
            </p>
          )}
        </Section>

        <Section eyebrow="03" title="Pago">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Número de tarjeta"
              name="card"
              required
              inputMode="numeric"
              placeholder="4242 4242 4242 4242"
              autoComplete="cc-number"
              className="sm:col-span-2"
            />
            <Field
              label="Vencimiento (MM/AA)"
              name="expiry"
              required
              inputMode="numeric"
              placeholder="04/29"
              autoComplete="cc-exp"
            />
            <Field
              label="CVC"
              name="cvc"
              required
              inputMode="numeric"
              placeholder="123"
              autoComplete="cc-csc"
            />
            <Field
              label="Nombre en la tarjeta"
              name="cardName"
              required
              autoComplete="cc-name"
              className="sm:col-span-2"
            />
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--color-muted)" }}>
            Pago seguro · No se guarda información de tu tarjeta.
          </p>
        </Section>

        <button
          type="submit"
          disabled={submitting}
          className="block w-full py-5 text-xs uppercase tracking-widest transition hover:opacity-90 disabled:opacity-50"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          {submitting ? "Procesando..." : `Pagar ${formatPrice(total)}`}
        </button>
      </div>

      {/* RIGHT — order summary */}
      <aside className="md:sticky md:top-24 md:self-start">
        <div
          className="space-y-6 p-6 md:p-8"
          style={{
            backgroundColor: "var(--color-surface)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <p
            className="text-xs uppercase"
            style={{
              letterSpacing: "0.3em",
              color: "var(--color-muted)",
            }}
          >
            Tu pedido
          </p>

          <ul className="space-y-4">
            {items.map((item) => {
              const p = products.find((pp) => pp.slug === item.slug);
              if (!p) return null;
              return (
                <li key={item.slug} className="flex gap-3">
                  <div
                    className="relative h-14 w-14 flex-shrink-0 overflow-hidden"
                    style={{ borderRadius: "var(--radius-sm)" }}
                  >
                    <Image src={p.image} alt={p.imageAlt} fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-2 text-sm">
                    <div>
                      <p style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}>
                        {p.name}
                      </p>
                      <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                        × {item.quantity}
                      </p>
                    </div>
                    <span style={{ color: "var(--color-accent)" }}>
                      {formatPrice(p.price * item.quantity)}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div
            className="space-y-2 border-t pt-4 text-sm"
            style={{ borderColor: "var(--color-line)" }}
          >
            <Row label="Subtotal" value={formatPrice(subtotal)} />
            <Row
              label="Envío"
              value={shipping === 0 ? "Gratis" : formatPrice(shipping)}
            />
            <div
              className="mt-3 flex items-baseline justify-between border-t pt-3"
              style={{ borderColor: "var(--color-line)" }}
            >
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)" }}>
                Total
              </span>
              <span
                className="text-xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
              >
                {formatPrice(total)}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </form>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-6 flex items-baseline gap-4">
        <span
          className="text-xs"
          style={{
            letterSpacing: "0.3em",
            color: "var(--color-muted)",
          }}
        >
          {eyebrow}
        </span>
        <h2
          className="text-2xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-ink)",
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
}) {
  return (
    <label className={`block ${className}`}>
      <span
        className="mb-2 block text-xs uppercase"
        style={{
          letterSpacing: "0.15em",
          color: "var(--color-muted)",
        }}
      >
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border bg-transparent px-4 py-3 text-base outline-none transition focus:border-current"
        style={{
          borderColor: "var(--color-line)",
          color: "var(--color-accent)",
          borderRadius: "var(--radius-sm)",
        }}
        {...rest}
      />
    </label>
  );
}

function DeliveryOption({
  checked,
  onChange,
  label,
  meta,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  meta: string;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex flex-col items-start gap-1 border px-4 py-3 text-left transition hover:opacity-100"
      style={{
        borderColor: checked ? "var(--color-accent)" : "var(--color-line)",
        backgroundColor: checked ? "var(--color-surface)" : "transparent",
        opacity: checked ? 1 : 0.8,
        borderRadius: "var(--radius-sm)",
      }}
      aria-pressed={checked}
    >
      <span
        className="text-sm"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
      >
        {label}
      </span>
      <span className="text-xs" style={{ color: "var(--color-muted)" }}>
        {meta}
      </span>
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span style={{ color: "var(--color-muted)" }}>{label}</span>
      <span style={{ color: "var(--color-accent)" }}>{value}</span>
    </div>
  );
}
