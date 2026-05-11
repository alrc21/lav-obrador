"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";

const STORAGE_KEY = "lav-newsletter-emails";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Email no válido");
      return;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list: string[] = raw ? JSON.parse(raw) : [];
      if (!list.includes(trimmed)) list.push(trimmed);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // localStorage unavailable — still show the thank-you state
    }
    setSubmitted(true);
    setError(null);
  };

  return (
    <section
      className="px-6 py-24 md:py-32"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <ScrollReveal>
        <div className="mx-auto max-w-xl text-center">
          <p
            className="mb-3 text-xs uppercase"
            style={{
              letterSpacing: "0.3em",
              color: "var(--color-muted)",
            }}
          >
            Novedades
          </p>
          <h2
            className="mb-10 text-2xl md:text-3xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink)",
            }}
          >
            Recibe noticias del obrador
          </h2>

          {submitted ? (
            <p
              className="italic"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-accent)",
              }}
            >
              Gracias. Pronto sabrás de nosotros.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col items-center gap-6">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                aria-label="Email"
                className="w-full max-w-sm border-0 border-b bg-transparent pb-2 text-center text-base outline-none transition focus:border-current"
                style={{
                  borderBottomWidth: "1px",
                  borderColor: "var(--color-line)",
                  color: "var(--color-accent)",
                }}
              />
              {error && (
                <p className="text-xs" style={{ color: "#b91c1c" }}>
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="border px-8 py-3 text-xs uppercase tracking-widest transition hover:bg-current hover:text-[var(--color-bg)]"
                style={{
                  borderColor: "var(--color-accent)",
                  color: "var(--color-accent)",
                }}
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
