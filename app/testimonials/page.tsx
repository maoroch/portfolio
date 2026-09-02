"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Star, ExternalLink, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  testimonials,
  getTestimonialText,
  getTestimonialDate,
  CONTRA_REVIEWS_URL,
} from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          fill={i < rating ? "#C8A96E" : "none"}
          stroke={i < rating ? "#C8A96E" : "var(--border)"}
        />
      ))}
    </div>
  );
}

function ContraLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <rect width="32" height="32" rx="6" fill="#1A1A1A" />
      <path
        d="M8 16C8 11.582 11.582 8 16 8C18.21 8 20.21 8.9 21.657 10.343L19.536 12.464C18.636 11.564 17.382 11 16 11C13.239 11 11 13.239 11 16C11 18.761 13.239 21 16 21C17.382 21 18.636 20.436 19.536 19.536L21.657 21.657C20.21 23.1 18.21 24 16 24C11.582 24 8 20.418 8 16Z"
        fill="white"
      />
    </svg>
  );
}

export default function TestimonialsPage() {
  const { lang, t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div style={{ paddingTop: 80, minHeight: "calc(100vh - 140px)" }}>
      <section
        style={{
          maxWidth: 900,
          width: "100%",
          margin: "0 auto",
          padding: "60px 24px 100px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            {t.testimonials.badge}
          </span>

          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 6vw, 56px)",
              color: "#415B57",
              letterSpacing: "-0.02em",
              marginBottom: 18,
              lineHeight: 1.1,
            }}
          >
            {t.testimonials.title}
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              maxWidth: 540,
              lineHeight: 1.7,
              margin: "0 auto 32px",
            }}
          >
            {t.testimonials.desc}
          </p>

          {/* Contra link — prominent */}
          <a
            href={CONTRA_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 22px",
              backgroundColor: "#1A1A1A",
              color: "#FAF7F2",
              borderRadius: 3,
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textDecoration: "none",
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <ContraLogo />
            {t.testimonials.viewOnContra}
            <ExternalLink size={13} />
          </a>
        </div>

        {/* ── Aggregate badge ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 48,
            padding: "18px 24px",
            backgroundColor: "var(--bg-2)",
            border: "1px solid var(--border)",
            borderRadius: 4,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 36,
                color: "#C8A96E",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              5.0
            </div>
            <StarRating rating={5} />
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-subtle)",
                marginTop: 6,
              }}
            >
              {t.testimonials.verifiedOnContra}
            </p>
          </div>

          <div
            style={{
              width: 1,
              height: 56,
              backgroundColor: "var(--border)",
            }}
          />

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 36,
                color: "#415B57",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {testimonials.length}
            </div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-subtle)",
                marginTop: 6,
              }}
            >
              {t.testimonials.verifiedClient}s
            </p>
          </div>

          <div
            style={{
              width: 1,
              height: 56,
              backgroundColor: "var(--border)",
            }}
          />

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                justifyContent: "center",
                marginBottom: 4,
              }}
            >
              <ContraLogo />
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 20,
                  color: "#415B57",
                }}
              >
                Contra
              </span>
            </div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-subtle)",
              }}
            >
              {t.testimonials.verifiedOnContra}
            </p>
          </div>
        </div>

        {/* ── Review Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: 20,
            marginBottom: 64,
          }}
        >
          {testimonials.map((testimonial) => {
            const isHovered = hoveredId === testimonial.id;
            const reviewText = getTestimonialText(testimonial, lang);
            const reviewDate = getTestimonialDate(testimonial, lang);

            return (
              <div
                key={testimonial.id}
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  backgroundColor: "var(--bg-2)",
                  border: `1px solid ${isHovered ? "var(--accent-dim)" : "var(--border)"}`,
                  borderRadius: 4,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 24,
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  boxShadow: isHovered
                    ? "0 4px 24px rgba(200,169,110,0.10)"
                    : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Accent top strip */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    backgroundColor: "#C8A96E",
                    opacity: isHovered ? 0.9 : 0.4,
                    transition: "opacity 0.2s",
                  }}
                />

                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 64,
                    color: "var(--accent-dim)",
                    lineHeight: 0.6,
                    marginBottom: 8,
                    userSelect: "none",
                  }}
                >
                  "
                </div>

                {/* Star rating */}
                <StarRating rating={testimonial.rating} />

                {/* Review text */}
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 15,
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    flexGrow: 1,
                  }}
                >
                  {reviewText}
                </p>

                {/* Footer: author + contra link */}
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: 18,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: 17,
                        color: "#415B57",
                        marginBottom: 3,
                      }}
                    >
                      {testimonial.authorName}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 11,
                        color: "var(--text-subtle)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {testimonial.company}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        color: "var(--text-subtle)",
                        marginTop: 2,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {testimonial.role} · {reviewDate}
                    </p>
                  </div>

                  <a
                    href={testimonial.contraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-subtle)",
                      textDecoration: "none",
                      padding: "6px 10px",
                      border: "1px solid var(--border)",
                      borderRadius: 2,
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C8A96E";
                      e.currentTarget.style.borderColor = "var(--accent-dim)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-subtle)";
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    <ContraLogo />
                    {t.testimonials.readMore}
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── See All on Contra strip ── */}
        <div
          style={{
            textAlign: "center",
            padding: "36px",
            backgroundColor: "var(--bg-2)",
            border: "1px solid var(--border)",
            borderRadius: 4,
            marginBottom: 64,
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-subtle)",
              marginBottom: 12,
            }}
          >
            {t.testimonials.verifiedOnContra}
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 14,
              marginBottom: 20,
              lineHeight: 1.6,
            }}
          >
            {lang === "ru"
              ? "Все отзывы верифицированы платформой Contra и принадлежат реальным клиентам."
              : "All reviews are verified by Contra and belong to real clients."}
          </p>
          <a
            href={CONTRA_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 22px",
              backgroundColor: "#1A1A1A",
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
            <ContraLogo />
            {t.testimonials.viewOnContra}
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 48,
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
                fontFamily: "'DM Serif Display', serif",
                fontSize: 24,
                color: "#415B57",
                marginBottom: 8,
              }}
            >
              {t.testimonials.ctaTitle}
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: 14, maxWidth: 480 }}>
              {t.testimonials.ctaDesc}
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://t.me/Ilyas_ones"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "11px 20px",
                backgroundColor: "var(--accent)",
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
              <Calendar size={13} />
              {t.testimonials.scheduleCall}
            </a>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "11px 20px",
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
              {lang === "ru" ? "Портфолио" : "View Portfolio"}
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
