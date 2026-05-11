import { ScrollReveal } from "./ScrollReveal";

export function Visita() {
  return (
    <section id="visita" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <ScrollReveal>
            <div className="space-y-4">
              <div
                className="relative aspect-[4/3] w-full overflow-hidden"
                style={{
                  borderRadius: "var(--radius-md)",
                  filter: "grayscale(85%) contrast(1.05) saturate(0.4) opacity(0.95)",
                }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=Calle+del+Mar+d%27Alboran+10c+Playa+Patacona+Valencia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de LAV Obrador en Playa Patacona"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/7YchgGxdwQcQeuHn6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 py-2 text-xs uppercase tracking-widest transition hover:opacity-70"
                style={{ color: "var(--color-muted)" }}
              >
                Abrir en Maps
                <span>→</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p
              className="mb-3 text-xs uppercase"
              style={{
                letterSpacing: "0.3em",
                color: "var(--color-muted)",
              }}
            >
              Visita
            </p>
            <h2
              className="mb-8 text-3xl md:text-4xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-ink)",
              }}
            >
              Encuéntranos
            </h2>

            <address className="space-y-6 not-italic">
              <div>
                <p className="text-base" style={{ color: "var(--color-accent)" }}>
                  Calle del Mar d'Alboran, 10C
                </p>
                <p className="text-base" style={{ color: "var(--color-muted)" }}>
                  Playa Patacona, Valencia
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-muted)" }}>Lunes – Viernes</span>
                  <span style={{ color: "var(--color-accent)" }}>7:30 – 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-muted)" }}>Sábado</span>
                  <span style={{ color: "var(--color-accent)" }}>8:00 – 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--color-muted)" }}>Domingo</span>
                  <span style={{ color: "var(--color-accent)" }}>8:00 – 14:00</span>
                </div>
              </div>

              <p
                className="text-sm"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-muted)",
                }}
              >
                Café y hojaldre, junto al mar.
              </p>
            </address>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
