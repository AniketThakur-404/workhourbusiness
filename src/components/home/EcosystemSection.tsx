"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { companyLinkProps } from "@/lib/company-sites";

const businesses = [
  {
    id: "inceptura",
    name: "Inceptura",
    tagline: "Ideation to Global Execution",
    description:
      "A unified 7-pillar growth suite uniting legal, strategy, talent, events, travel, international expansion, and revenue telemetry.",
    color: "#1575D1",
    icon: "◆",
  },
  {
    id: "leaders-pinnacle",
    name: "Leaders Pinnacle",
    tagline: "B2B Events, Summits & Experiences",
    description:
      "Strategic conferences, trade expos, bespoke events, webinars, and executive podcasts across India, Asia, and MEA.",
    color: "#c8a24a",
    icon: "▲",
  },
  {
    id: "employaa",
    name: "Employaa",
    tagline: "Recruitment & Staffing",
    description:
      "Permanent recruitment and outsourced staffing solutions, connecting top talent with the right opportunities globally.",
    color: "#ff6b35",
    icon: "👥",
  },
  {
    id: "elevatrain",
    name: "Elevatrain",
    tagline: "Corporate Training",
    description:
      "Comprehensive corporate training and workshops covering compliance, technology, leadership, and professional development.",
    color: "#a855f7",
    icon: "📚",
  },
  {
    id: "go-travel-global",
    name: "Go Travel Global",
    tagline: "Corporate Travel & Visa",
    description:
      "End-to-end corporate travel management, visa support, and curated travel services for businesses worldwide.",
    color: "#22c55e",
    icon: "✈️",
  },
  {
    id: "remunerax",
    name: "Remunerax",
    tagline: "Payroll & Outsourcing",
    description:
      "Streamlined payroll processing and workforce outsourcing solutions for businesses of all sizes.",
    color: "#f97316",
    icon: "💰",
  },
  {
    id: "thinkrunspace",
    name: "ThinkRunSpace",
    tagline: "Flexible Workspaces",
    description:
      "Modern physical and virtual workspace solutions, from co-working spaces to dedicated offices and meeting rooms.",
    color: "#06b6d4",
    icon: "🏢",
  },
] as const;

export default function EcosystemSection() {
  return (
    <section className="py-24 md:py-32 bg-[#111] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8ff00]/3 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#c8ff00] text-sm font-medium tracking-[0.2em] uppercase mb-4"
            >
              The Ecosystem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              7 Specialist<br />Businesses
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#888] max-w-md mt-6 lg:mt-0 text-base"
          >
            Each brand is purpose-built to deliver exceptional value in its
            domain, together forming a complete business support ecosystem.
          </motion.p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((biz, index) => (
            <motion.div
              key={biz.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`group relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 hover:border-opacity-30 transition-all duration-500 card-hover ${
                index === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={
                {
                  "--hover-color": biz.color,
                } as React.CSSProperties
              }
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${biz.color}08 0%, transparent 50%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-3xl">{biz.icon}</div>
                  <Link
                    {...companyLinkProps(biz.id)}
                    className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-[#555] group-hover:border-current group-hover:text-white transition-all duration-300"
                    style={
                      {
                        "--tw-text-opacity": 1,
                      } as React.CSSProperties
                    }
                  >
                    <svg
                      className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
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
                </div>

                <h3 className="text-xl font-semibold text-white mb-1">
                  {biz.name}
                </h3>
                <p
                  className="text-xs font-medium tracking-wider uppercase mb-4"
                  style={{ color: biz.color }}
                >
                  {biz.tagline}
                </p>
                <p className="text-sm text-[#888] leading-relaxed">
                  {biz.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/businesses/"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#333] text-white rounded-full hover:border-[#c8ff00]/50 hover:bg-[#c8ff00]/5 transition-all duration-300"
          >
            Explore All Businesses
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
        </motion.div>
      </div>
    </section>
  );
}
