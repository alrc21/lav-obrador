import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { ScrollReveal } from "./ScrollReveal";

export function Vitrina() {
  const featured = getFeaturedProducts();

  return (
    <section
      className="px-6 py-24 md:py-32"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {featured.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 100}>
              <Link href={`/tienda/${p.slug}`} className="group block">
                <div
                  className="relative aspect-square w-full overflow-hidden"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p
                  className="mt-6 text-center text-xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-ink)",
                  }}
                >
                  {p.name}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/tienda"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest transition"
            style={{ color: "var(--color-accent)" }}
          >
            Ver todos los productos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
