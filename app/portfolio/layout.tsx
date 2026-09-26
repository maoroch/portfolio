import type { Metadata } from "next";

const siteUrl = "https://ilyas-ones.com";

export const metadata: Metadata = {
  title: "Portfolio — AI Agents, SaaS Platforms & Headless Commerce | Ilyas Salimov",
  description:
    "Production architecture case studies by Founding Engineer Ilyas Salimov. AI agent pipelines, multi-tenant SaaS platforms, GenAI products, and headless commerce — built for CTOs, Founders, and venture-backed startups.",
  keywords: [
    "Founding Engineer portfolio",
    "AI systems architect portfolio",
    "CTO hire AI engineer",
    "startup technical portfolio",
    "AI agent pipeline case study",
    "SaaS platform engineer",
    "Next.js architect portfolio",
    "Founder engineer for hire",
    "headless commerce architect",
    "GenAI product engineer",
    "deterministic AI pipeline",
    "multi-tenant SaaS",
    "venture-backed startup engineer",
    "fractional CTO portfolio",
  ],
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  openGraph: {
    title: "Portfolio — AI Agents, SaaS & Headless Commerce | Ilyas Salimov",
    description:
      "Production case studies: autonomous AI pipelines, multi-tenant SaaS, GenAI products, and edge commerce. Built for CTOs, Founders, and venture-backed startups.",
    url: `${siteUrl}/portfolio`,
    siteName: "Ilyas Salimov Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — AI Agents, SaaS & Headless Commerce | Ilyas Salimov",
    description:
      "Production case studies: autonomous AI pipelines, multi-tenant SaaS, GenAI products, and edge commerce. Built for CTOs, Founders, and venture-backed startups.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
