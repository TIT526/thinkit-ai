import type { Metadata } from "next";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the ThinkIt AI team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-[var(--muted)]">
              Questions about our products? We&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: Mail,
                  color: "#003087",
                  title: "Email",
                  value: "thinkit88@outlook.com",
                  sub: "We reply within 24 hours",
                },
                {
                  icon: MessageCircle,
                  color: "#007A3D",
                  title: "WhatsApp",
                  value: "016-664 2385",
                  sub: "For urgent support",
                },
                {
                  icon: Clock,
                  color: "#C9A227",
                  title: "Support Hours",
                  value: "Mon – Fri, 9am – 6pm",
                  sub: "Malaysia Time (MYT/UTC+8)",
                },
              ].map(({ icon: Icon, color, title, value, sub }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]"
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: color + "20" }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted)] mb-0.5">{title}</p>
                    <p className="text-sm font-medium">{value}</p>
                    <p className="text-xs text-[var(--muted)]">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6">
              <h2 className="font-semibold mb-5">Send a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-3 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-my-blue/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-3 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-my-blue/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Subject</label>
                  <select className="w-full px-3 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-my-blue/30 transition-all">
                    <option value="">Select a topic</option>
                    <option>Product inquiry</option>
                    <option>Technical support</option>
                    <option>Pricing</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your question or issue..."
                    className="w-full px-3 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] text-sm focus:outline-none focus:ring-2 focus:ring-my-blue/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-my-blue text-white text-sm font-semibold hover:bg-my-blue-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
