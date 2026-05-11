import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=2400&q=85"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(42, 31, 30, 0.35)" }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-12 md:py-20">
        <div className="flex-1" />

        <Image
          src="/logo.svg"
          alt="LAV Obrador"
          width={200}
          height={136}
          priority
          style={{
            filter: "brightness(0) invert(1) drop-shadow(0 0 40px rgba(42, 31, 30, 0.5))",
          }}
        />

        <div className="flex flex-1 flex-col items-center justify-end gap-8">
          <p
            className="text-sm uppercase tracking-[0.3em]"
            style={{ color: "var(--color-bg)" }}
          >
            Pan y café · Próximamente
          </p>

          <Link
            href="/tienda"
            className="group inline-flex items-center gap-3 border border-white/40 px-8 py-3 text-sm uppercase tracking-widest backdrop-blur-sm transition hover:bg-white/10"
            style={{ color: "var(--color-bg)" }}
          >
            Ver el obrador
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
