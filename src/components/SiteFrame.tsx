"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function SiteFrame({
  children,
  header,
  footer,
}: {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {header}
      <main className={pathname === "/" ? "homepage" : undefined}>
        {children}
      </main>
      {footer}
    </>
  );
}
