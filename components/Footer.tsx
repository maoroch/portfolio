'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Calendar, Layers, Send } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/maoroch" },
  { label: "Telegram", href: "https://t.me/Ilyas_ones" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/salimovilyass" },
  { label: "Contra", href: "https://contra.com/ilyas_salimov_j7tpcm02" },
  { label: "Email", href: "mailto:contact@ilyas-ones.com" },
];

const rawNavLinks = [
  { key: "home" as const, href: "/" },
  { key: "portfolio" as const, href: "/portfolio" },
  { key: "articles" as const, href: "/articles" },
  { key: "reviews" as const, href: "/testimonials" },
  { key: "about" as const, href: "/about" },
];

export default function Footer() {
  const { lang, t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = rawNavLinks.filter(
    (link) => !(lang === "ru" && link.key === "articles")
  );

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: isMobile ? "40px 16px" : "64px 24px",
        marginTop: isMobile ? 60 : 80,
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: isMobile ? 48 : 24,
        }}
      >
        {/* Column 1: Brand & CTA */}
        <div style={{ flex: isMobile ? "1 1 auto" : "0 0 350px", paddingRight: isMobile ? 0 : 40 }}>
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: isMobile ? 18 : 22,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              fontWeight: 600,
              display: "block",
              marginBottom: 12,
            }}
          >
            Ilyas-<span style={{ color: "var(--accent)" }}>ones</span>
          </span>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 12,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: 12,
              lineHeight: 1.5,
            }}
          >
            {t.footer.subtitle} · 2026
          </p>
          <p
            style={{
              color: "var(--text-subtle)",
              fontSize: 13,
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            {t.about.bio2}
          </p>
          <Link
            href="/hire"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 38,
              padding: "0 18px",
              borderRadius: 3,
              backgroundColor: "var(--accent)",
              color: "#FAF7F2",
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            <Calendar size={14} />
            {lang === "ru" ? "Нанять меня" : "Hire Me"}
          </Link>
        </div>

        {/* Grouped Link Columns */}
        <div style={{ display: "flex", gap: isMobile ? 48 : 100, flexWrap: "wrap", flex: "1", justifyContent: isMobile ? "flex-start" : "flex-end" }}>
          {/* Column 2: Navigation Links */}
          <div style={{ minWidth: 140 }}>
            <h4
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text)",
                marginBottom: 20,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Layers size={13} color="var(--accent)" />
              {lang === "ru" ? "Страницы" : "Pages"}
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {navLinks.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--accent)";
                    (e.target as HTMLElement).style.paddingLeft = "4px";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text-muted)";
                    (e.target as HTMLElement).style.paddingLeft = "0";
                  }}
                >
                  {t.nav[key]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Social Links */}
          <div style={{ minWidth: 140 }}>
            <h4
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text)",
                marginBottom: 20,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Send size={13} color="var(--accent)" />
              {lang === "ru" ? "Связаться" : "Connect"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--accent)";
                    (e.target as HTMLElement).style.paddingLeft = "4px";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text-muted)";
                    (e.target as HTMLElement).style.paddingLeft = "0";
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
