import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ProductGrid } from "@/components/home/product-grid";
import { Features } from "@/components/home/features";
import { Stats } from "@/components/home/stats";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ProductGrid />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
