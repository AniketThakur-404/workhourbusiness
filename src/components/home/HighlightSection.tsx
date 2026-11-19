"use client";

import { motion } from "framer-motion";

export default function HighlightSection() {
  return (
    <section className="py-24 md:py-32 bg-[#111] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c8ff00]/5 via-transparent to-[#00d4ff]/5" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-3xl p-8 md:p-16 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8ff00]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00d4ff]/5 rounded-full blur-[80px]" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/20 mb-8"
              >
                <span className="text-[#c8ff00] text-xs font-semibold tracking-wider uppercase">
                  Featured Event
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="gradient-text">IGNITIA</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10"
              >
                Our flagship innovation summit bringing together industry
                leaders, entrepreneurs, and innovators to shape the future of
                business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c8ff00] text-black font-semibold rounded-full hover:bg-[#b8ef00] transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,255,0,0.3)]"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-[#1a1a1a]"
            >
              {[
                { value: "50+", label: "Speakers" },
                { value: "2000+", label: "Attendees" },
                { value: "30+", label: "Sessions" },
                { value: "10+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#c8ff00] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#666] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
