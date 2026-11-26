"use client";

import { type ReactNode, useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    function update() {
      lenis?.destroy();
      lenis = preference.matches ? undefined : new Lenis({ autoRaf: true, anchors: true });
    }

    update();
    preference.addEventListener("change", update);

    return () => {
      preference.removeEventListener("change", update);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
