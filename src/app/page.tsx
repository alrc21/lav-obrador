import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Vitrina } from "@/components/Vitrina";
import { Visita } from "@/components/Visita";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Vitrina />
      <Visita />
      <Newsletter />
      <Footer />
    </main>
  );
}
