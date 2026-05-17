"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, Globe, RefreshCw, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Claude AI Powered",
    desc: "Anthropic's Claude AI at the core — intelligent text extraction, matching, and message generation.",
    color: "#7C3AED",
  },
  {
    icon: Zap,
    title: "AutoCount Native",
    desc: "Direct SDK integration with AutoCount 2.2. No workarounds, no manual export/import.",
    color: "#D97706",
  },
  {
    icon: Shield,
    title: "Data Stays Local",
    desc: "Most tools run locally on your server. Your accounting data never leaves your environment.",
    color: "#059669",
  },
  {
    icon: Globe,
    title: "Malaysian Bank Support",
    desc: "14 Malaysian and international banks supported for automated bank reconciliation.",
    color: "#0891B2",
  },
  {
    icon: RefreshCw,
    title: "Free Lifetime Updates",
    desc: "Members get free access. Future patch downloads available with affordable upgrade plans.",
    color: "#CC0001",
  },
  {
    icon: HeadphonesIcon,
    title: "Local Support",
    desc: "Malaysian-based support team. We understand your AutoCount setup and local business needs.",
    color: "#C9A227",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-[var(--sidebar-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why ThinkIt AI?
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Built by an AutoCount developer for AutoCount users. Every feature
            solves a real pain point in Malaysian SME accounting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex gap-4 p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: f.color + "20" }}
              >
                <f.icon size={20} style={{ color: f.color }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
