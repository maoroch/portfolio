"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, GitBranch, FileText, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  Project,
  getProjectTitle,
  getProjectShortDesc,
  getProjectProblem,
  getProjectSolution,
  getProjectHighlights,
} from "@/data/projects";

const CATEGORY_COLORS: Record<string, string> = {
  "AI Agents & Pipelines": "#ff8d78",
  "SaaS & Platform Engineering": "#7a9e8f",
  "GenAI Products": "#9b8fce",
  "Headless & Edge Commerce": "#c4956a",
};

const LINK_ICONS: Record<string, React.ReactNode> = {
  github: <GitBranch size={14} />,
  "case-study": <ExternalLink size={14} />,
  demo: <ExternalLink size={14} />,
  pdf: <FileText size={14} />,
  external: <ExternalLink size={14} />,
};

export default function ProjectDetailView({ project }: { project: Project }) {
  const { lang, t } = useLanguage();

  const accentColor = CATEGORY_COLORS[project.category] ?? "#ff8d78";
  const displayTitle = getProjectTitle(project, lang);
  const displayDesc = getProjectShortDesc(project, lang);
  const displayProblem = getProjectProblem(project, lang);
  const displaySolution = getProjectSolution(project, lang);
  const displayHighlights = getProjectHighlights(project, lang);
  const displayCategory = t.portfolio.categoryNames[project.category] || project.category;

  return (
    <div style={{ paddingTop: 80, minHeight: "calc(100vh - 140px)" }}>
      {/* Breadcrumb */}
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "24px 24px 0",
        }}
      >
        <Link
          href="/portfolio"
          className="hover:text-[var(--accent)]"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-subtle)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          <ArrowLeft size={12} />
          {t.portfolio.backToPortfolio}
        </Link>
      </div>

      <article
        style={{
          maxWidth: 860,
          width: "100%",
          margin: "0 auto",
          padding: "32px 24px 100px",
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          {/* Category badge */}
          <div style={{ marginBottom: 20 }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: accentColor,
                border: `1px solid ${accentColor}40`,
                backgroundColor: `${accentColor}12`,
                padding: "4px 12px",
                borderRadius: 2,
                display: "inline-block",
              }}
            >
              {displayCategory}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(30px, 5vw, 48px)",
              color: "#415B57",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            {displayTitle}
          </h1>

          {/* Short description */}
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 700,
              marginBottom: 28,
            }}
          >
            {displayDesc}
          </p>

          {/* Links */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "10px 18px",
                  borderRadius: 3,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  ...(link.type === "github"
                    ? {
                        backgroundColor: "#415B57",
                        color: "#FAF7F2",
                        border: "1px solid #415B57",
                      }
                    : {
                        backgroundColor: "transparent",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                      }),
                }}
              >
                {LINK_ICONS[link.type]}
                {link.label}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </header>

        {/* Metrics grid */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 1,
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 56,
          }}
        >
          {project.metricsBreakdown.map((m) => {
            const label = lang === "ru" && m.labelRu ? m.labelRu : m.label;
            const desc = lang === "ru" && m.descRu ? m.descRu : m.desc;

            return (
              <div
                key={m.label}
                style={{
                  backgroundColor: "var(--bg-2)",
                  padding: "24px 20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 28,
                    color: accentColor,
                    marginBottom: 6,
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--text)",
                    marginBottom: 4,
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-subtle)", lineHeight: 1.5 }}>
                  {desc}
                </div>
              </div>
            );
          })}
        </section>

        {/* Two column: Problem & Solution */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {/* Problem */}
          <div
            style={{
              backgroundColor: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--text-subtle)",
                marginBottom: 14,
              }}
            >
              ⬛ {t.portfolio.problemTitle}
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>
              {displayProblem}
            </p>
          </div>

          {/* Solution */}
          <div
            style={{
              backgroundColor: "var(--bg-2)",
              border: "1px solid var(--border)",
              borderLeft: `3px solid ${accentColor}`,
              borderRadius: 4,
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: accentColor,
                marginBottom: 14,
              }}
            >
              ▶ {t.portfolio.solutionTitle}
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>
              {displaySolution}
            </p>
          </div>
        </section>

        {/* Architecture highlights */}
        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 24,
              color: "#415B57",
              marginBottom: 20,
            }}
          >
            {t.portfolio.architectureHighlights}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 12,
            }}
          >
            {displayHighlights.map((h, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "16px",
                  backgroundColor: "var(--bg-2)",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: accentColor,
                    flexShrink: 0,
                    marginTop: 2,
                    paddingTop: 2,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{h}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 24,
              color: "#415B57",
              marginBottom: 16,
            }}
          >
            {t.portfolio.techStack}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--bg-2)",
                  padding: "6px 14px",
                  borderRadius: 2,
                  letterSpacing: "0.03em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 40,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--text-subtle)",
                marginBottom: 6,
              }}
            >
              {t.portfolio.wantSimilar}
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
              {t.portfolio.wantSimilarDesc}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a
              href="https://t.me/ilyasalimov"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 20px",
                backgroundColor: accentColor,
                color: "#FAF7F2",
                borderRadius: 3,
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {t.portfolio.discussProject}
              <ArrowUpRight size={13} />
            </a>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 20px",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                borderRadius: 3,
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={12} />
              {t.portfolio.allProjects}
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
