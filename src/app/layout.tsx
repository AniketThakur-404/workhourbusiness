import type { Metadata } from "next";
import { activeCompany } from "@/lib/company-site-config";
import "./globals.css";
import { LenisProvider } from "@/providers/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = activeCompany ? {
  icons: { icon: `/company-logos/marks/${activeCompany}.webp` },
} : {
  title: {
    default: "Workhour Business — Together We Thrive",
    template: "%s | Workhour Business",
  },
  description:
    "Business services across planning, people, payroll, travel, learning, workspaces, events, and digital marketing.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {activeCompany ? children : (
          <LenisProvider>
            <SiteFrame header={<Navbar />} footer={<Footer />}>
              {children}
            </SiteFrame>
          </LenisProvider>
        )}
      </body>
    </html>
  );
}
