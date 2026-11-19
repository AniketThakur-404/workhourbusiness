"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c8ff00]/3 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c8ff00] text-sm font-medium tracking-[0.2em] uppercase mb-6"
          >
            Ready to Start?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Let&apos;s Build
            <br />
            <span className="gradient-text">Something Great</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#888] max-w-2xl mx-auto mb-12"
          >
            Whether you&apos;re launching a new venture, scaling operations, or
            transforming your digital presence — we&apos;re here to help you succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#c8ff00] text-black text-lg font-semibold rounded-full hover:bg-[#b8ef00] transition-all duration-300 hover:shadow-[0_0_60px_rgba(200,255,0,0.3)]"
            >
              Contact Us Today
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-10 py-5 border border-[#333] text-white rounded-full hover:border-[#c8ff00]/50 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
