import type { Metadata, Viewport } from "next";
import { display, body } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shearthreads.com"),
  title: {
    default: "Shear Threads | Custom Greek Embroidery & Woven Lanyards",
    template: "%s | Shear Threads",
  },
  description:
    "Custom embroidery and woven lanyards for fraternities, sororities, and co-ed orgs. Born at the University of Delaware. Shipping nationwide.",
  alternates: { canonical: "./" },
  icons: { icon: "/logo-st-purple-s-black-t-v3.png" },
  openGraph: {
    title: "Shear Threads | Custom Greek Embroidery & Woven Lanyards",
    description:
      "Custom embroidery and woven lanyards for fraternities, sororities, and co-ed orgs. Shipping nationwide.",
    siteName: "Shear Threads",
    url: "./",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shear Threads | Custom Greek Embroidery & Woven Lanyards",
    description:
      "Custom embroidery and woven lanyards for fraternities, sororities, and co-ed orgs. Shipping nationwide.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfbf8",
  colorScheme: "light",
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shear Threads",
  url: "https://shearthreads.com",
  logo: "https://shearthreads.com/logo-st-purple-s-black-t-v3.png",
  description:
    "Custom Greek embroidery and woven lanyards for fraternities, sororities, and co-ed orgs. Founded at the University of Delaware; ships nationwide.",
  sameAs: ["https://www.instagram.com/shearthreads_"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="texture-canvas flex min-h-screen flex-col">
        {/* Product images come from the Shopify CDN; hoisted to <head> by React */}
        <link rel="preconnect" href="https://shearthreads.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <a
          href="#main"
          className="focus:bg-brick focus:text-ivory sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:px-5 focus:py-3 focus:text-[0.76rem] focus:font-semibold focus:tracking-[0.2em] focus:uppercase"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
