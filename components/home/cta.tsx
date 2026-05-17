"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, UserPlus } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden text-center p-12"
          style={{
            background: "linear-gradient(135deg, #003087, #0047ba, #007A3D)",
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <div className="text-4xl mb-4">🇲🇾</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Automating Today
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
              Register for free and get lifetime access to all ThinkIt AI
              products. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-my-blue hover:bg-my-gold hover:text-white transition-all"
              >
                <UserPlus size={18} />
                Create Free Account
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-all"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
