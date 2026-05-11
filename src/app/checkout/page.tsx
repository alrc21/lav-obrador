import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CheckoutForm } from "@/components/CheckoutForm";

export const metadata = {
  title: "Pago · LAV Obrador",
};

export default function CheckoutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <header className="px-6 pt-16 text-center md:pt-20">
          <p
            className="mb-2 text-xs uppercase"
            style={{
              letterSpacing: "0.3em",
              color: "var(--color-muted)",
            }}
          >
            Checkout
          </p>
          <h1
            className="text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink)",
            }}
          >
            Tu pedido
          </h1>
        </header>
        <CheckoutForm />
      </main>
      <Footer />
    </>
  );
}
