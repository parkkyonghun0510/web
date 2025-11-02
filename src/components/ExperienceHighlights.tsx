"use client";

import { motion } from "framer-motion";

export default function ExperienceHighlights() {
  return (
    <section className="py-10">
      <h2 className="font-display text-3xl font-semibold mb-6">Highlight Experience</h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-xl p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-xl font-semibold">Senior Web Developer</h3>
            <p className="opacity-80 text-sm">LC Cash Express • Siem Reap</p>
          </div>
          <span className="text-xs sm:text-sm opacity-70">2025 – Present</span>
        </div>

        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>OPD for Daily Report Consolidated</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>Pawn application form from paper to Digital and Managements.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>Maintenance HR system use Laravel (Employee Mobile)</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>Mobile application development using Flutter (LE Mobile)</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}