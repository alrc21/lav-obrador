import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = {
  title: "Tienda · LAV Obrador",
};

export default function TiendaPage() {
  return (
    <>
      <Nav />
      <CartDrawer />

      <main>
        <header className="px-6 py-20 text-center md:py-28">
          <h1
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-ink)",
            }}
          >
            Nuestros productos
          </h1>
        </header>

        <section className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
