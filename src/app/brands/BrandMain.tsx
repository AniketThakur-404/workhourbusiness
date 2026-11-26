"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BrandMain({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      for (const heading of scope.current?.querySelectorAll("section h2") ?? []) {
        gsap.from(heading, {
          y: 14,
          duration: 0.45,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: { trigger: heading, start: "top 92%", once: true },
        });
      }
    });
    return () => media.revert();
  }, { scope });

  return <main ref={scope} id="company-main" tabIndex={-1}>{children}</main>;
}
