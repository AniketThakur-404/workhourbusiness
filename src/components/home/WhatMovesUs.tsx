"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🔥",
    title: "Resilience",
    description:
      "Built to adapt and thrive through challenges, ensuring continuity and strength in every business cycle.",
  },
  {
    icon: "🚀",
    title: "Pioneering",
    description:
      "Leading with innovation, we explore new frontiers to create solutions that set industry benchmarks.",
  },
  {
    icon: "🏛️",
    title: "Legacy",
    description:
      "Creating lasting impact through meaningful partnerships, sustainable practices, and enduring value.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    description:
      "Collaborating closely with clients to become an extension of their team, driving mutual success.",
  },
];

export default function WhatMovesUs() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c8ff00] text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            What Moves Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Our Core Pillars
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#111] border border-[#1a1a1a] rounded-2xl p-8 hover:border-[#c8ff00]/20 transition-all duration-500 card-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#c8ff00]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-4xl mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-[#1a1a1a] text-6xl font-bold group-hover:text-[#c8ff00]/10 transition-colors duration-500">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
