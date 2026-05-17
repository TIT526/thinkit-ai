"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

export function ProductGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our AI Product Suite
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Purpose-built tools for AutoCount 2.2 that eliminate manual work
            and boost your team's productivity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link href={`/products/${product.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-transparent hover:shadow-xl transition-all duration-300 h-full bg-[var(--card-bg)] hover:scale-[1.02]">
                  {/* Gradient header */}
                  <div
                    className="p-6 bg-gradient-to-br text-white relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
                    }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 bg-white -translate-y-8 translate-x-8" />
                    <div className="flex items-start justify-between relative z-10">
                      <div>
                        <span className="text-3xl mb-2 block">{product.icon}</span>
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-sm opacity-80 mt-0.5">{product.tagline}</p>
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/20 px-2 py-1 rounded-full">
                        {product.status === "available" ? "Live" : product.status}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Features preview */}
                    <ul className="space-y-1.5 mb-5">
                      {product.features.slice(0, 3).map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-xs text-[var(--muted)]"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: product.gradientFrom }}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all"
                      style={{ color: product.gradientFrom }}>
                      Learn more
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
