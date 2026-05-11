"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { formatPrice } from "@/lib/format";

type Order = {
  id: string;
  delivery: "pickup" | "delivery";
  contact: { name?: string; email?: string };
  total: number;
};

function SuccessContent() {
  const params = useSearchParams();
  const orderId = params.get("order");
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("lav-last-order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center md:py-40">
      <p
        className="mb-4 text-xs uppercase"
        style={{
          letterSpacing: "0.3em",
          color: "var(--color-muted)",
        }}
      >
        Pedido recibido
      </p>
      <h1
        className="mb-8 text-4xl md:text-5xl"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-ink)",
        }}
      >
        Gracias{order?.contact?.name ? `, ${order.contact.name}` : ""}.
      </h1>
      <p
        className="mb-10 text-base leading-relaxed"
        style={{ color: "var(--color-accent)" }}
      >
        {order?.delivery === "pickup"
          ? "Tu pedido estará listo mañana por la mañana en el obrador. Te enviaremos un email cuando esté preparado."
          : "Estamos preparando tu pedido. Recibirás un email con la confirmación y el seguimiento del envío."}
      </p>

      {orderId && (
        <p
          className="mb-12 text-xs uppercase"
          style={{
            letterSpacing: "0.3em",
            color: "var(--color-muted)",
          }}
        >
          Nº de pedido · {orderId}
        </p>
      )}

      {order && (
        <p
          className="mb-12 text-base"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-muted)",
          }}
        >
          Total: {formatPrice(order.total)}
        </p>
      )}

      <Link
        href="/"
        className="inline-flex items-center gap-2 border px-8 py-3 text-xs uppercase tracking-widest transition hover:opacity-70"
        style={{
          borderColor: "var(--color-accent)",
          color: "var(--color-accent)",
          borderRadius: "var(--radius-sm)",
        }}
      >
        Volver al inicio
        <span>→</span>
      </Link>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Suspense fallback={null}>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
