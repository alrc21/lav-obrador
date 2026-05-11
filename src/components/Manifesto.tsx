import { ScrollReveal } from "./ScrollReveal";

export function Manifesto() {
  return (
    <section className="px-6 py-32 md:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2
            className="text-3xl leading-tight md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: "var(--color-ink)",
            }}
          >
            Hojaldre, café
            <br />
            y Mediterráneo.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
