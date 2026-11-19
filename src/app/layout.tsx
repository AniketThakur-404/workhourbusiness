import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/providers/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Workhour Business – Together We Thrive",
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
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body>
        <LenisProvider>
          <Navbar />
          <PageTransition>
            <main className="homepage">{children}</main>
          </PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
