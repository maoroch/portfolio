"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, GitBranch, ExternalLink, FileText } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  projects,
  CATEGORIES,
  type ProjectCategory,
  getProjectTitle,
  getProjectShortDesc,
  getProjectMetrics,
} from "@/data/projects";

const CATEGORY_ACCENT: Record<ProjectCategory, string> = {
  "AI Agents & Pipelines": "#ff8d78",
  "SaaS & Platform Engineering": "#7a9e8f",
  "GenAI Products": "#9b8fce",
  "Headless & Edge Commerce": "#c4956a",
};

const LINK_ICONS = {
  github: <GitBranch size={13} />,
  "case-study": <ExternalLink size={13} />,
  demo: <ExternalLink size={13} />,
  pdf: <FileText size={13} />,
  external: <ExternalLink size={13} />,
};

type FilterCategory = "All" | ProjectCategory;

export default function PortfolioPage() {
  const { lang, t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterTabs: FilterCategory[] = ["All", ...CATEGORIES];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getCategoryLabel = (cat: FilterCategory) => {
    if (cat === "All") return t.portfolio.all;
    return t.portfolio.categoryNames[cat] || cat;
  };

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
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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

          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: isMobile
                ? "clamp(34px, 8vw, 48px)"
                : "clamp(42px, 6vw, 58px)",
              color: "#415B57",
              letterSpacing: "-0.02em",
              marginBottom: 18,
              lineHeight: 1.15,
            }}
          >
            {t.portfolio.title}
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: isMobile ? 15 : 17,
              maxWidth: 620,
              lineHeight: 1.7,
              margin: "0 auto",
            }}
          >
            {t.portfolio.desc}
          </p>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {filterTabs.map((cat) => {
            const isActive = activeCategory === cat;
            const accentColor =
              cat === "All" ? "var(--accent)" : CATEGORY_ACCENT[cat as ProjectCategory];

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "8px 16px",
                  borderRadius: 3,
                  border: isActive
                    ? `1px solid ${accentColor}`
                    : "1px solid var(--border)",
                  backgroundColor: isActive ? `${accentColor}18` : "transparent",
                  color: isActive ? accentColor : "var(--text-subtle)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {getCategoryLabel(cat)}
              </button>
            );
          })}
        </div>

        {/* ── Category label (when filtered) ── */}
        {activeCategory !== "All" && (
          <div style={{ marginBottom: 28, textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--text-subtle)",
                letterSpacing: "0.08em",
              }}
            >
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? t.portfolio.singleProjectCount
                : t.portfolio.projectsCount}
            </p>
          </div>
        )}

        {/* ── Projects Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {filteredProjects.map((project) => {
            const accentColor = CATEGORY_ACCENT[project.category];
            const displayTitle = getProjectTitle(project, lang);
            const displayDesc = getProjectShortDesc(project, lang);
            const displayMetrics = getProjectMetrics(project, lang);
            const displayCategory = t.portfolio.categoryNames[project.category] || project.category;

            return (
              <div
                key={project.slug}
                style={{
                  backgroundColor: "var(--bg-2)",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${accentColor}60`;
                  e.currentTarget.style.boxShadow = `0 4px 24px ${accentColor}14`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Category indicator strip */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    backgroundColor: accentColor,
                    opacity: 0.7,
                  }}
                />

                <div>
                  {/* Category + ID */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        color: accentColor,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {displayCategory}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        color: "var(--text-subtle)",
                      }}
                    >
                      {project.id}
                    </span>
                  </div>

                  {/* Title — clickable link to detail page */}
                  <Link href={`/portfolio/${project.slug}`} style={{ textDecoration: "none" }}>
                    <h2
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: 20,
                        color: "#415B57",
                        marginBottom: 10,
                        lineHeight: 1.25,
                        transition: "color 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#415B57")}
                    >
                      {displayTitle}
                    </h2>
                  </Link>

                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: 13,
                      lineHeight: 1.65,
                      marginBottom: 18,
                    }}
                  >
                    {displayDesc}
                  </p>

                  {/* Metrics badge */}
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: accentColor,
                      backgroundColor: `${accentColor}12`,
                      border: `1px solid ${accentColor}30`,
                      padding: "5px 10px",
                      borderRadius: 2,
                      marginBottom: 18,
                      display: "inline-block",
                    }}
                  >
                    ⚡ {displayMetrics}
                  </div>

                  {/* Stack */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 5,
                      marginBottom: 24,
                    }}
                  >
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          color: "var(--text-subtle)",
                          border: "1px solid var(--border)",
                          padding: "2px 7px",
                          borderRadius: 2,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          color: "var(--text-subtle)",
                          padding: "2px 7px",
                        }}
                      >
                        +{project.stack.length - 5} {t.portfolio.moreTech}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    alignItems: "center",
                    borderTop: "1px solid var(--border)",
                    paddingTop: 14,
                  }}
                >
                  {/* Case Study link → detail page */}
                  <Link
                    href={`/portfolio/${project.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      color: accentColor,
                      fontSize: 11,
                      fontFamily: "'DM Mono', monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    {t.portfolio.caseStudy}
                    <ArrowUpRight size={13} />
                  </Link>

                  {/* External links */}
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        color: "var(--text-subtle)",
                        fontSize: 11,
                        fontFamily: "'DM Mono', monospace",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-subtle)")}
                    >
                      {LINK_ICONS[link.type]}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA strip ── */}
        <div
          style={{
            marginTop: 64,
            padding: "32px 28px",
            backgroundColor: "var(--bg-2)",
            border: "1px solid var(--border)",
            borderRadius: 4,
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
              {t.portfolio.ctaSubtitle}
            </p>
            <p
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 20,
                color: "#415B57",
              }}
            >
              {t.portfolio.ctaTitle}
            </p>
          </div>
          <a
            href="https://t.me/ilyasalimov"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "12px 22px",
              backgroundColor: "var(--accent)",
              color: "#FAF7F2",
              borderRadius: 3,
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textDecoration: "none",
              fontWeight: 500,
              flexShrink: 0,
            }}
          >
            {t.portfolio.scheduleCall}
            <ArrowUpRight size={13} />
          </a>
        </div>
      </section>
    </div>
  );
}
