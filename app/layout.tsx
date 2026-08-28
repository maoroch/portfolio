import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const siteUrl = "https://ilyas-ones.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ilyas Salimov — Founding Full-Stack & AI Systems Architect",
  description:
    "Founding Engineer & Systems Architect building sub-second Next.js platforms, deterministic AI pipelines with 0% calculation hallucinations, and real-time multi-tenant SaaS.",
  keywords: [
    "Founding Engineer",
    "AI Systems Architect",
    "Next.js Architect",
    "Deterministic AI",
    "Multi-Tenant SaaS",
    "TypeScript",
    "Python",
    "FastAPI",
    "Supabase RLS",
    "Redis SSE",
  ],
  authors: [{ name: "Ilyas Salimov", url: "https://ilyas-ones.com" }],
  creator: "Ilyas Salimov",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Ilyas Salimov — Founding Full-Stack & AI Systems Architect",
    description:
      "Sub-second Next.js web applications, deterministic AI pipelines (0% calc drift), and real-time distributed SaaS.",
    url: "https://ilyas-ones.com",
    siteName: "Ilyas Salimov Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilyas Salimov — Founding Full-Stack & AI Systems Architect",
    description:
      "Sub-second Next.js web applications, deterministic AI pipelines (0% calc drift), and real-time distributed SaaS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
