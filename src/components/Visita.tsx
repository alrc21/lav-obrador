import { ScrollReveal } from "./ScrollReveal";

export function Visita() {
  return (
    <section id="visita" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <ScrollReveal>
            <div
              className="relative aspect-[4/3] w-full overflow-hidden"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2!2d-3.7038!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjUiTiAzwrA0MicxMy43Ilc!5e0!3m2!1ses!2ses!4v1715000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de LAV Obrador"
              />
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
                  Calle del Obrador, 1
                </p>
                <p className="text-base" style={{ color: "var(--color-muted)" }}>
                  Madrid, 28001
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
                className="text-sm italic"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-muted)",
                }}
              >
                Pan recién horneado desde las 7:30.
              </p>
            </address>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
