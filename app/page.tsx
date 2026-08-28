"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Layers,
  Bot,
  Zap,
  Activity,
  FileText,
  Send,
} from "lucide-react";
import { getFeaturedArticles } from "@/lib/data";
import ArticleCardHome from "@/components/ArticleCard";
import HomeAbout from "@/components/HomeAbout";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const featuredProjects = [
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

const focusAreasList = [
  {
    icon: Layers,
    title: "Distributed Systems & Multi-Tenant SaaS",
    desc: "Designing fault-tolerant backends, strict multi-tenant data isolation via PostgreSQL RLS, and event-driven micro-architectures.",
  },
  {
    icon: Bot,
    title: "Deterministic AI Pipelines",
    desc: "Decoupling semantic LLM extraction from sandboxed arithmetic computation to achieve 0% hallucinations in production workflows.",
  },
  {
    icon: Zap,
    title: "High-Velocity Next.js & Edge Performance",
    desc: "Sub-second App Router web applications, Edge ISR caching strategies, bundle optimization, and zero layout shift UI.",
  },
  {
    icon: Activity,
    title: "Real-Time Telemetry & Queue Engines",
    desc: "Sub-300ms push updates using Redis Server-Sent Events (SSE), background BullMQ worker queues, and automated retry mechanisms.",
  },
];

export default function HomePage() {
  const { lang, t } = useLanguage();
  const articles = getFeaturedArticles();

  return (
    <div style={{ paddingTop: 60, position: "relative" }}>
      <div className="hero-grid-bg" />

      {/* Hero */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "100px 24px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="animate-fade-up delay-1">
          <span
            style={{
              display: "inline-block",
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              border: "1px solid var(--accent-dim)",
              backgroundColor: "var(--accent-bg)",
              padding: "6px 14px",
              borderRadius: 2,
              marginBottom: 32,
            }}
          >
            🟢 Available for Founding Engineer & Retainer Roles (Q3–Q4 2026)
          </span>
        </div>
        <h1
          className="animate-fade-up delay-2"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(42px, 7vw, 80px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            maxWidth: 820,
            marginBottom: 28,
          }}
        >
          Founding Full-Stack<br />
          <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
            &amp; AI Systems Architect
          </span>
        </h1>
        <p
          className="animate-fade-up delay-3"
          style={{
            color: "var(--text-muted)",
            fontSize: 17,
            maxWidth: 580,
            lineHeight: 1.7,
            marginBottom: 48,
          }}
        >
          I engineer sub-second Next.js web applications, deterministic AI
          pipelines with 0% calculation hallucinations, and real-time
          distributed platforms for Seed &amp; Series A startups.
        </p>
        <div
          className="animate-fade-up delay-4"
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              backgroundColor: "var(--accent)",
              color: "var(--bg)",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderRadius: 2,
            }}
          >
            <Calendar size={14} /> Schedule 15-Min Call
          </a>
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              border: "1px solid var(--border-light)",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: 13,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderRadius: 2,
            }}
          >
            Explore Architectures ↓
          </a>
        </div>

        {/* Bento Hero Benchmarks */}
        <div
          className="animate-fade-up delay-5 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border mt-16"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 24,
            paddingTop: 40,
            borderTop: "1px solid var(--border)",
            marginTop: 64,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 32,
                fontWeight: 600,
                color: "var(--text)",
              }}
            >
              0.00%
            </div>
            <div
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginTop: 4,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Calculation Drift
            </div>
            <p
              style={{
                fontSize: 11,
                color: "var(--text-subtle)",
                marginTop: 4,
                lineHeight: 1.4,
              }}
            >
              Deterministic Python sandboxes
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 32,
                fontWeight: 600,
                color: "var(--text)",
              }}
            >
              &lt; 300ms
            </div>
            <div
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginTop: 4,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Live Telemetry
            </div>
            <p
              style={{
                fontSize: 11,
                color: "var(--text-subtle)",
                marginTop: 4,
                lineHeight: 1.4,
              }}
            >
              Distributed Redis SSE stream
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 32,
                fontWeight: 600,
                color: "var(--text)",
              }}
            >
              &lt; 120ms
            </div>
            <div
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginTop: 4,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Edge TTFB
            </div>
            <p
              style={{
                fontSize: 11,
                color: "var(--text-subtle)",
                marginTop: 4,
                lineHeight: 1.4,
              }}
            >
              Next.js 16 + Redis Edge ISR
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 32,
                fontWeight: 600,
                color: "var(--text)",
              }}
            >
              1.65ms
            </div>
            <div
              style={{
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginTop: 4,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Lexical Retrieval
            </div>
            <p
              style={{
                fontSize: 11,
                color: "var(--text-subtle)",
                marginTop: 4,
                lineHeight: 1.4,
              }}
            >
              In-memory Okapi BM25 index
            </p>
          </div>
        </div>
      </section>

      {/* About — photo + bio */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          backgroundColor: "var(--bg-1)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <HomeAbout />
      </div>

      {/* Focus Areas */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--bg-2)",
          padding: "80px 24px",
          zIndex: 1,
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 48,
            }}
          >
            {t.focusAreas.tag}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 1,
              backgroundColor: "var(--border)",
              border: "1px solid var(--border)",
            }}
          >
            {focusAreasList.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{ backgroundColor: "var(--bg-2)", padding: "32px 28px" }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    backgroundColor: "var(--accent-bg)",
                    border: "1px solid var(--accent-dim)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={16} color="var(--accent)" />
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 18,
                    color: "var(--text)",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 13,
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects & Case Studies */}
      <section
        id="projects"
        style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 8,
              }}
            >
              {t.featuredWork.tag}
            </p>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(28px, 5vw, 36px)",
                color: "var(--text)",
              }}
            >
              {t.featuredWork.title}
            </h2>
          </div>
          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: 13,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {t.featuredWork.portfolioPage} <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4 Concrete Engineering Case Study Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {featuredProjects.map((project) => (
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
                position: "relative",
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

                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 22,
                    color: "var(--text)",
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>

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

                {/* Tech Stack Badges */}
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

              {/* Action Links */}
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

      {/* Articles - EXCLUDED in Russian mode */}
      {lang !== "ru" && (
        <section
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--bg-2)",
            padding: "80px 24px",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: 48,
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 8,
                  }}
                >
                  {t.articlesHome.tag}
                </p>
                <h2
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 36,
                    color: "var(--text)",
                  }}
                >
                  {t.articlesHome.title}
                </h2>
              </div>
              <Link
                href="/articles"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--accent)",
                  textDecoration: "none",
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {t.articlesHome.allArticles} <ArrowRight size={14} />
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 32,
              }}
            >
              {articles.map((article) => (
                <ArticleCardHome key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section
        id="contact"
        style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}
      >
        <div
          style={{
            border: "1px solid var(--border-light)",
            padding: "60px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "var(--bg-2)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            {t.cta.tag}
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(26px, 4vw, 44px)",
              color: "var(--text)",
              marginBottom: 16,
              letterSpacing: "-0.02em",
              maxWidth: 700,
              margin: "0 auto 16px",
            }}
          >
            {t.cta.title}
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 15,
              maxWidth: 540,
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            {t.cta.desc}
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:contact@ilyas-ones.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                backgroundColor: "var(--accent)",
                color: "var(--bg)",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                borderRadius: 2,
              }}
            >
              <Calendar size={15} /> {t.cta.button1}
            </a>
            <a
              href="https://t.me/Ilyas_ones"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                border: "1px solid var(--border-light)",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                borderRadius: 2,
              }}
            >
              <Send size={15} /> {t.cta.button2}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
