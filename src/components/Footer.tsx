import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--color-accent)", color: "var(--color-bg)" }}
      className="px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/logo.svg"
              alt="LAV Obrador"
              width={120}
              height={80}
              style={{ filter: "brightness(0) invert(1) opacity(0.9)" }}
            />
            <p className="mt-6 max-w-xs text-sm opacity-70">
              Hojaldre y café de especialidad junto al Mediterráneo.
            </p>
          </div>

          <div className="space-y-3">
            <h3
              className="text-xs uppercase tracking-widest opacity-60"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-bg)" }}
            >
              Explorar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tienda" className="hover:opacity-100 opacity-80 transition">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/#visita" className="hover:opacity-100 opacity-80 transition">
                  Visita
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 opacity-80 transition"
                >
                  @lavobrador
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3
              className="text-xs uppercase tracking-widest opacity-60"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-bg)" }}
            >
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-100 opacity-80 transition">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 opacity-80 transition">
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col items-start justify-between gap-4 border-t pt-8 text-xs opacity-60 md:flex-row md:items-center"
          style={{ borderColor: "rgba(247, 241, 232, 0.15)" }}
        >
          <span>© {new Date().getFullYear()} LAV Obrador</span>
          <span>Diseñado por Alia Studio</span>
        </div>
      </div>
    </footer>
  );
}
