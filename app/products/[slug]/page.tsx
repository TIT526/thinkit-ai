import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Code2, Lock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getProduct, products } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Back */}
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            All Products
          </Link>

          {/* Hero card */}
          <div
            className="rounded-3xl p-8 sm:p-12 text-white mb-8 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10">
              <div className="text-5xl mb-4">{product.icon}</div>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">{product.name}</h1>
                  <p className="text-lg opacity-80">{product.tagline}</p>
                </div>
                <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6">
                <h2 className="font-semibold mb-3">Overview</h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6">
                <h2 className="font-semibold mb-4">Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: product.gradientFrom }}
                      />
                      <span className="text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6">
                <h2 className="font-semibold mb-4 flex items-center gap-2">
                  <Code2 size={16} />
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: product.gradientFrom + "cc" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 sticky top-20">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: product.gradientFrom }}
                >
                  <Lock size={22} />
                </div>
                <h3 className="font-semibold mb-2">Member Access</h3>
                <p className="text-sm text-[var(--muted)] mb-5">
                  Register for free to access full product demos and
                  documentation.
                </p>
                <Link
                  href="/register"
                  className="block w-full text-center rounded-xl py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: product.gradientFrom }}
                >
                  Get Free Access
                </Link>
                <Link
                  href="/login"
                  className="block w-full text-center rounded-xl border border-[var(--border-color)] py-2.5 text-sm font-medium mt-3 hover:bg-[var(--card-bg)] transition-colors"
                >
                  Already a member? Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
