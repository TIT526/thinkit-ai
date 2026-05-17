import type { Metadata } from "next";
import { Brain, Target, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "About",
  description: "ThinkIt AI — Malaysian-built AI solutions for AutoCount accounting software.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex w-16 h-16 rounded-2xl bg-my-blue items-center justify-center mb-6">
              <Brain size={32} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">About ThinkIt AI</h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              We build AI-powered tools that make AutoCount accounting faster,
              smarter, and less painful for Malaysian SMEs.
            </p>
          </div>

          {/* Story */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-sm text-[var(--muted)] leading-relaxed">
              <p>
                ThinkIt AI was born from years of working with AutoCount
                accounting software in Malaysia. We watched businesses spend
                hours every week on repetitive tasks — manually entering
                receipts, reconciling bank statements, chasing overdue invoices
                — and knew AI could do it better.
              </p>
              <p>
                We started with one product, MyAI, which automated receipt OCR
                and purchase invoice creation in AutoCount. The response was
                immediate — businesses saved hours every week. That validated
                our mission: build a comprehensive AI suite for AutoCount users.
              </p>
              <p>
                Today, ThinkIt AI offers 6 products covering purchase
                automation, bank reconciliation, AR collection, document
                delivery, and database management — all built specifically for
                AutoCount 2.2.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Target,
                color: "#003087",
                title: "AutoCount First",
                desc: "Every product is built specifically for AutoCount 2.2. No generic tools adapted poorly.",
              },
              {
                icon: Heart,
                color: "#CC0001",
                title: "Malaysian Made",
                desc: "Built in Malaysia, for Malaysia. We understand local banking, GST/SST, and SME needs.",
              },
              {
                icon: Brain,
                color: "#007A3D",
                title: "AI Driven",
                desc: "We use the best AI models (Claude, GPT) to deliver accuracy and reliability.",
              },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: color + "20" }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-[var(--muted)]">{desc}</p>
              </div>
            ))}
          </div>

          {/* Flag */}
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{ background: "linear-gradient(135deg, #003087, #CC0001)" }}
          >
            <div className="text-5xl mb-4">🇲🇾</div>
            <h2 className="text-2xl font-bold mb-2">Proudly Malaysian</h2>
            <p className="text-white/70">
              Developing world-class AI tools from Malaysia, for Malaysia and beyond.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
