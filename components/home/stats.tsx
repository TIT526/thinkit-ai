"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6", label: "AI Products", suffix: "" },
  { value: "14", label: "Banks Supported", suffix: "+" },
  { value: "✓", label: "Affordable Cost", suffix: "" },
  { value: "2.2", label: "AutoCount Compatible", suffix: "+" },
];

export function Stats() {
  return (
    <section className="py-16 border-y border-[var(--border-color)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-my-blue dark:text-my-gold mb-1">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-sm text-[var(--muted)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
