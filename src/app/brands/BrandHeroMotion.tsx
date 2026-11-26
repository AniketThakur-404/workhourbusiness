"use client";

import dynamic from "next/dynamic";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Component, type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./CompanySite.module.css";

const Scene = dynamic(() => import("./BrandHeroScene"), { ssr: false });

class SceneFallback extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function BrandHeroCopy({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={styles.heroCopy}
      initial={false}
      animate={reduced === false ? { y: [8, 0] } : { y: 0 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function BrandHeroArt() {
  const view = useRef<HTMLDivElement>(null);
  const inView = useInView(view);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1050px) and (prefers-reduced-motion: no-preference) and (pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className={styles.heroArt} ref={view} aria-hidden="true">
      {enabled && inView && <SceneFallback><Scene /></SceneFallback>}
    </div>
  );
}
