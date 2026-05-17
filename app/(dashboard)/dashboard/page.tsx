import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, Sparkles } from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
        <p className="text-sm text-[var(--muted)]">
          Welcome back! Access your ThinkIt AI products below.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          {
            label: "Products Available",
            value: products.length.toString(),
            color: "#003087",
            icon: Package,
          },
          {
            label: "Membership",
            value: "Free",
            color: "#007A3D",
            icon: Sparkles,
          },
          {
            label: "Account Status",
            value: "Active",
            color: "#C9A227",
            icon: Sparkles,
          },
        ].map(({ label, value, color, icon: Icon }) => (
          <div
            key={label}
            className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 flex items-center gap-4"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: color + "20" }}
            >
              <Icon size={18} style={{ color }} />
            </div>
            <div>
              <p className="text-xl font-bold">{value}</p>
              <p className="text-xs text-[var(--muted)]">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Products */}
      <h2 className="text-base font-semibold mb-4">Your Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] overflow-hidden hover:shadow-lg hover:border-transparent hover:scale-[1.02] transition-all duration-300"
          >
            <div
              className="h-1.5"
              style={{
                background: `linear-gradient(90deg, ${product.gradientFrom}, ${product.gradientTo})`,
              }}
            />
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{product.icon}</span>
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full text-white"
                  style={{ backgroundColor: product.gradientFrom }}
                >
                  {product.status === "available" ? "Live" : product.status}
                </span>
              </div>
              <h3 className="font-semibold mb-1">{product.name}</h3>
              <p className="text-xs text-[var(--muted)] mb-3 line-clamp-2">
                {product.description}
              </p>
              <div
                className="flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all"
                style={{ color: product.gradientFrom }}
              >
                Open product <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
