import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { products, getProductsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "All ThinkIt AI products for AutoCount 2.2 — 6 AI-powered tools to automate your accounting workflows.",
};

export default function ProductsPage() {
  const byCategory = getProductsByCategory();

  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">All Products</h1>
            <p className="text-[var(--muted)] max-w-xl mx-auto">
              {products.length} AI tools built specifically for AutoCount 2.2 users in Malaysia.
            </p>
          </div>

          {/* By category */}
          {Object.entries(byCategory).map(([category, categoryProducts]) => (
            <div key={category} className="mb-14">
              <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-my-blue inline-block" />
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group flex flex-col rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] overflow-hidden hover:shadow-xl hover:border-transparent hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Color bar */}
                    <div
                      className="h-2"
                      style={{
                        background: `linear-gradient(90deg, ${product.gradientFrom}, ${product.gradientTo})`,
                      }}
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl">{product.icon}</span>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full text-white"
                          style={{ backgroundColor: product.gradientFrom }}
                        >
                          {product.status === "available" ? "Live" : product.status}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                      <p className="text-xs text-[var(--muted)] mb-3">{product.tagline}</p>
                      <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                        {product.description}
                      </p>
                      <div
                        className="flex items-center gap-1.5 mt-4 text-sm font-medium group-hover:gap-2.5 transition-all"
                        style={{ color: product.gradientFrom }}
                      >
                        View details <ArrowRight size={15} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
