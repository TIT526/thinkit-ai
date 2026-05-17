"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-my-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-my-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-my-green/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-my-blue/30 bg-my-blue/10 px-4 py-1.5 text-sm text-my-blue dark:text-my-gold mb-6"
        >
          <Sparkles size={14} />
          AutoCount AI Solutions for Malaysian SMEs
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
        >
          Automate Your{" "}
          <span className="gradient-text">AutoCount</span>
          <br />
          Workflows with AI
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-10"
        >
          6 powerful AI tools built specifically for AutoCount 2.2 — from OCR
          receipt matching to automated bank reconciliation and WhatsApp debt
          collection.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/register"
            className="flex items-center gap-2 rounded-xl bg-my-blue px-6 py-3 text-base font-semibold text-white hover:bg-my-blue-light transition-all shadow-lg shadow-my-blue/25"
          >
            Get Free Access
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-xl border border-[var(--border-color)] px-6 py-3 text-base font-medium text-[var(--foreground)] hover:bg-[var(--card-bg)] transition-all"
          >
            View All Products
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--muted)]"
        >
          {[
            { icon: Shield, text: "Free lifetime membership" },
            { icon: Zap, text: "AutoCount 2.2 compatible" },
            { icon: Sparkles, text: "Powered by Claude AI" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon size={16} className="text-my-green" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
