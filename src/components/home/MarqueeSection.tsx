"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "Inceptura",
  "Leaders Pinnacle",
  "Employaa",
  "Elevatrain",
  "Go Travel Global",
  "Remunerax",
  "ThinkRunSpace",
];

export default function MarqueeSection() {
  return (
    <section className="py-8 bg-[#0a0a0a] border-y border-[#1a1a1a] overflow-hidden">
      <div className="relative">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, index) => (
              <span
                key={index}
                className="text-2xl md:text-4xl font-bold text-[#1a1a1a] hover:text-[#c8ff00]/30 transition-colors duration-500 mx-8 cursor-default select-none"
              >
                {item}
                <span className="text-[#c8ff00]/20 mx-6">•</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
