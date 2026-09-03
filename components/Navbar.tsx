"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Globe, Calendar, ArrowRight, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useTheme } from "@/lib/theme/ThemeContext";

const rawLinks = [
  { href: "/", key: "home" as const },
  { href: "/portfolio", key: "portfolio" as const },
  { href: "/articles", key: "articles" as const },
  { href: "/testimonials", key: "reviews" as const },
  { href: "/about", key: "about" as const },
  { href: "/contacts", key: "contacts" as const },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  const links = rawLinks.filter(
    (link) => !(lang === "ru" && link.key === "articles")
  );

  const headerStyle = {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    borderBottom:
      scrolled || open ? "1px solid var(--border)" : "1px solid transparent",
    backgroundColor:
      scrolled || open ? "var(--nav-bg-scrolled)" : "var(--nav-bg-top)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: scrolled ? "0 4px 16px rgba(0, 0, 0, 0.12)" : "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const isHireActive = pathname === "/hire";

  return (
    <header style={headerStyle}>
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: isMobile ? 22 : 24,
              fontWeight: 600,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              transition: "all 0.3s ease",
            }}
          >
            Ilyas-<span style={{ color: "var(--accent)" }}>ones</span>
          </span>
        </Link>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 8 : 20 }}>
          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: active ? "var(--accent)" : "var(--text-muted)",
                      transition: "all 0.2s ease",
                      position: "relative",
                      paddingBottom: 4,
                    }}
                    onMouseEnter={(e) => {
                      if (!active) (e.target as HTMLElement).style.color = "var(--text)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active) (e.target as HTMLElement).style.color = "var(--text-muted)";
                    }}
                  >
                    {t.nav[link.key]}
                    {active && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "2px",
                          background: "linear-gradient(90deg, var(--accent), transparent)",
                          borderRadius: "2px",
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Separator — desktop only */}
          {!isMobile && (
            <div style={{ width: 1, height: 20, backgroundColor: "var(--border)" }} />
          )}

          {/* Lang toggle — compact icon + text only */}
          <button
            onClick={toggleLang}
            title={lang === "en" ? "Switch to Russian" : "Переключить на английский"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              height: 30,
              padding: "0 8px",
              borderRadius: 3,
              border: "1px solid var(--border-light)",
              backgroundColor: "transparent",
              color: "var(--text-muted)",
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-dim)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
            }}
          >
            <Globe size={11} />
            <span>{lang === "en" ? "EN" : "RU"}</span>
          </button>

          {/* Theme toggle — light / dark */}
          <button
            onClick={toggleTheme}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            aria-label="Toggle theme"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 30,
              height: 30,
              borderRadius: 3,
              border: "1px solid var(--border-light)",
              backgroundColor: "transparent",
              color: "var(--text-muted)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-dim)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
            }}
          >
            {theme === "light" ? <Moon size={12} /> : <Sun size={12} />}
          </button>

          {/* Hire CTA button — desktop only */}
          {!isMobile && (
            <Link
              href="/hire"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 34,
                padding: "0 16px",
                borderRadius: 3,
                backgroundColor: isHireActive ? "var(--accent-bg)" : "var(--accent)",
                border: isHireActive ? "1px solid var(--accent)" : "1px solid var(--accent)",
                color: isHireActive ? "var(--accent)" : "#FAF7F2",
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "opacity 0.2s ease, background-color 0.2s ease",
                opacity: 1,
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                if(!isHireActive) {
                   (e.currentTarget as HTMLElement).style.opacity = "0.85";
                }
              }}
              onMouseLeave={(e) => {
                 if(!isHireActive) {
                   (e.currentTarget as HTMLElement).style.opacity = "1";
                 }
              }}
            >
              <Calendar size={12} />
              {lang === "ru" ? "Нанять" : "Hire Me"}
            </Link>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              style={{
                width: 34,
                height: 34,
                borderRadius: 3,
                border: "1px solid var(--border-light)",
                backgroundColor: open ? "var(--accent-bg)" : "transparent",
                color: open ? "var(--accent)" : "var(--text)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobile && open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--nav-bg-scrolled)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "12px 20px 20px",
            animation: "fadeInDown 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.12)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    padding: "11px 14px",
                    fontSize: 12,
                    fontWeight: active ? 600 : 500,
                    color: active ? "var(--accent)" : "var(--text)",
                    borderRadius: 3,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    backgroundColor: active ? "var(--accent-bg)" : "transparent",
                    borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{t.nav[link.key]}</span>
                  {active && <ArrowRight size={14} color="var(--accent)" />}
                </Link>
              );
            })}

            {/* Hire CTA — full width in mobile menu */}
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--border)" }}>
              <Link
                href="/hire"
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "13px 16px",
                  backgroundColor: isHireActive ? "var(--accent-bg)" : "var(--accent)",
                  border: isHireActive ? "1px solid var(--accent)" : "1px solid var(--accent)",
                  color: isHireActive ? "var(--accent)" : "#FAF7F2",
                  borderRadius: 3,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  width: "100%",
                  boxSizing: "border-box" as const,
                }}
              >
                <Calendar size={13} />
                {lang === "ru" ? "Нанять" : "Hire Me"}
              </Link>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
