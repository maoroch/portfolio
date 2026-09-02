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
  Send,
  GitBranch,
  ExternalLink,
  Star,
} from "lucide-react";
import { getFeaturedArticles } from "@/lib/data";
import ArticleCardHome from "@/components/ArticleCard";
import HomeAbout from "@/components/HomeAbout";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  projects,
  getProjectTitle,
  getProjectShortDesc,
  getProjectMetrics,
} from "@/data/projects";
import {
  getFeaturedTestimonials,
  getTestimonialText,
  CONTRA_REVIEWS_URL,
} from "@/data/testimonials";

const FOCUS_ICONS = [Layers, Bot, Zap, Activity];

export default function HomePage() {
  const { lang, t } = useLanguage();
  const articles = getFeaturedArticles();

  // Featured 3 projects for the home page
  const featuredProjects = projects.slice(0, 3);

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
            {t.hero.status}
          </span>
        </div>

        <h1
          className="animate-fade-up delay-2"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(38px, 6.5vw, 76px)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            maxWidth: 860,
            marginBottom: 28,
          }}
        >
          {t.hero.titleLine1}
          <br />
          <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
            {t.hero.titleLine2}
          </span>
        </h1>

        <p
          className="animate-fade-up delay-3"
          style={{
            color: "var(--text-muted)",
            fontSize: 17,
            maxWidth: 620,
            lineHeight: 1.7,
            marginBottom: 48,
          }}
        >
          {t.hero.desc}
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
            <Calendar size={14} /> {t.hero.scheduleCall}
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
            {t.hero.exploreArchitectures}
          </a>
        </div>

        {/* Bento Hero Benchmarks */}
        <div
          className="animate-fade-up delay-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 24,
            paddingTop: 40,
            borderTop: "1px solid var(--border)",
            marginTop: 64,
          }}
        >
          {t.hero.stats.benchmarks.map((bench, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 32,
                  fontWeight: 600,
                  color: "var(--text)",
                }}
              >
                {bench.value}
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
                {bench.title}
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: "var(--text-subtle)",
                  marginTop: 4,
                  lineHeight: 1.4,
                }}
              >
                {bench.desc}
              </p>
            </div>
          ))}
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
            {t.focusAreas.items.map((item, idx) => {
              const Icon = FOCUS_ICONS[idx] || Layers;
              return (
                <div
                  key={item.id}
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
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: 13,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
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

        {/* Featured Case Study Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {featuredProjects.map((project) => {
            const displayTitle = getProjectTitle(project, lang);
            const displayDesc = getProjectShortDesc(project, lang);
            const displayMetrics = getProjectMetrics(project, lang);
            const displayCategory =
              t.portfolio.categoryNames[project.category] || project.category;

            return (
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
                      {displayCategory}
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

                  <Link
                    href={`/portfolio/${project.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h3
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: 22,
                        color: "#415B57",
                        marginBottom: 12,
                        lineHeight: 1.2,
                        transition: "color 0.2s",
                        cursor: "pointer",
                      }}
                    >
                      {displayTitle}
                    </h3>
                  </Link>

                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: 13,
                      lineHeight: 1.65,
                      marginBottom: 20,
                    }}
                  >
                    {displayDesc}
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
                    ⚡ {displayMetrics}
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
                    {project.stack.slice(0, 5).map((tech) => (
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
                  <Link
                    href={`/portfolio/${project.slug}`}
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
                    <span>{t.portfolio.caseStudy}</span>
                    <ArrowUpRight size={14} />
                  </Link>

                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--text-subtle)",
                        fontSize: 12,
                        fontFamily: "'DM Mono', monospace",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      {link.type === "github" ? (
                        <GitBranch size={13} />
                      ) : (
                        <ExternalLink size={13} />
                      )}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Featured Testimonials Block ── */}
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
                {t.testimonials.badge}
              </p>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(28px, 5vw, 36px)",
                  color: "var(--text)",
                }}
              >
                {t.testimonials.title}
              </h2>
            </div>
            <Link
              href="/testimonials"
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
              {t.testimonials.allReviews} <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {getFeaturedTestimonials().map((testimonial) => {
              const reviewText = getTestimonialText(testimonial, lang);
              return (
                <div
                  key={testimonial.id}
                  style={{
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Accent strip */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      backgroundColor: "#C8A96E",
                      opacity: 0.5,
                    }}
                  />

                  {/* Stars */}
                  <div style={{ display: "flex", gap: 3 }}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill="#C8A96E"
                        stroke="#C8A96E"
                      />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: 14,
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      flexGrow: 1,
                    }}
                  >
                    &ldquo;{reviewText}&rdquo;
                  </p>

                  {/* Author */}
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      paddingTop: 14,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "'DM Serif Display', serif",
                          fontSize: 15,
                          color: "#415B57",
                          marginBottom: 2,
                        }}
                      >
                        {testimonial.authorName}
                      </p>
                      <p
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          color: "var(--text-subtle)",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        {testimonial.company}
                      </p>
                    </div>
                    <a
                      href={CONTRA_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--text-subtle)",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "4px 8px",
                        border: "1px solid var(--border)",
                        borderRadius: 2,
                      }}
                    >
                      Contra <ExternalLink size={9} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
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
