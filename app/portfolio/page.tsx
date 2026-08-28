"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const portfolioProjects = [
  {
    id: "01",
    tag: "AI Systems & FinTech",
    title: "Autonomous Credit Risk & Covenant Audit Engine",
    description:
      "Deterministic multi-agent pipeline verifying loan covenant compliance against raw multi-currency bank ledgers with 0% calculation drift and coordinate-level PDF citations.",
    metrics: "0.00% Math Errors · 93.3% Precision · 1.65ms Retrieval",
    stack: [
      "Python 3.11",
      "Claude 3.5 Sonnet",
      "Okapi BM25",
      "Pydantic v2",
      "Docker",
    ],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/maoroch/fintech-compliance-agent",
      },
      {
        label: "Case Study PDF",
        url: "/docs/fintech-compliance-case-study.pdf",
      },
    ],
  },
  {
    id: "02",
    tag: "Distributed Web & Mobile",
    title: "Real-Time Multi-City Logistics ERP & Dispatch Engine",
    description:
      "End-to-end multi-tenant logistics platform featuring live driver telemetry, 3-tier Row-Level Security (RLS), and automated ledger reconciliation across 4 cities.",
    metrics: "<300ms Live Sync · 3-Tier RBAC · 4-City Coverage",
    stack: [
      "Next.js",
      "React Native",
      "Express.js",
      "Supabase PostgreSQL",
      "Redis SSE",
    ],
    links: [
      {
        label: "Contra Case Study",
        url: "https://contra.com/ilyas_salimov_j7tpcm02",
      },
    ],
  },
  {
    id: "03",
    tag: "Multimodal GenAI & WebGL",
    title: "Generative AI Interior Staging & Spatial Canvas",
    description:
      "Spatial interior transformation platform with an interactive 60fps Before/After comparison canvas, webhook-driven async queue inference, and edge asset optimization.",
    metrics: "60fps Canvas · Async Webhook Queue · Edge WebP Compression",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudflare R2"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/maoroch/AI-Interior-Designer",
      },
    ],
  },
  {
    id: "04",
    tag: "Headless & Edge Architecture",
    title: "High-Performance Headless Storefront (Coom Endem)",
    description:
      "Modular headless e-commerce architecture engineered for sub-120ms TTFB, decoupled API endpoints, automated Docker deployment, and 95+ Core Web Vitals.",
    metrics: "<120ms TTFB · 95+ Lighthouse · Zero Layout Shift",
    stack: ["Next.js 16", "TypeScript", "Docker Compose", "Redis ISR"],
    links: [
      {
        label: "Architecture Spec",
        url: "https://contra.com/ilyas_salimov_j7tpcm02",
      },
    ],
  },
];

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        paddingTop: 80,
        minHeight: "calc(100vh - 140px)",
        position: "relative",
      }}
    >
      <section
        style={{
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          padding: isMobile ? "40px 20px 80px" : "60px 24px 100px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          {/* Badge */}
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              border: "1px solid var(--accent-dim)",
              backgroundColor: "var(--accent-bg)",
              padding: "5px 16px",
              borderRadius: 2,
              display: "inline-block",
              marginBottom: 24,
            }}
          >
            {t.portfolio.badge}
          </span>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: isMobile
                ? "clamp(34px, 8vw, 48px)"
                : "clamp(42px, 6vw, 58px)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              marginBottom: 18,
              lineHeight: 1.15,
            }}
          >
            {t.portfolio.title}
          </h1>

          {/* Description */}
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: isMobile ? 15 : 17,
              maxWidth: 580,
              lineHeight: 1.7,
              margin: "0 auto",
            }}
          >
            {t.portfolio.desc}
          </p>
        </div>

        {/* Grid of Case Studies */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
          }}
        >
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: "var(--bg-2)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {project.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "var(--text-subtle)",
                    }}
                  >
                    {project.id}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 22,
                    color: "var(--text)",
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h2>

                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 13,
                    lineHeight: 1.65,
                    marginBottom: 20,
                  }}
                >
                  {project.description}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "var(--accent)",
                    backgroundColor: "var(--accent-bg)",
                    border: "1px solid var(--accent-dim)",
                    padding: "6px 12px",
                    borderRadius: 2,
                    marginBottom: 20,
                    display: "inline-block",
                  }}
                >
                  ⚡ {project.metrics}
                </div>

                {/* Stack */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 28,
                  }}
                >
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        color: "var(--text-subtle)",
                        border: "1px solid var(--border)",
                        padding: "2px 8px",
                        borderRadius: 2,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  alignItems: "center",
                  borderTop: "1px solid var(--border)",
                  paddingTop: 16,
                }}
              >
                {project.links.map((link) => {
                  const isExternal = link.url.startsWith("http");
                  const isPdf = link.url.endsWith(".pdf");
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target={isExternal || isPdf ? "_blank" : undefined}
                      rel={isExternal || isPdf ? "noopener noreferrer" : undefined}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--accent)",
                        fontSize: 12,
                        fontFamily: "'DM Mono', monospace",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      {isPdf && <FileText size={13} />}
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
