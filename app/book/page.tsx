"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  MessageCircle,
  Mail,
} from "lucide-react";

// ─── Replace this with your actual Calendly link ───────────────────────
const CALENDLY_URL = "https://calendly.com/YOUR_USERNAME/15min";
// ──────────────────────────────────────────────────────────────────────

const WHAT_TO_EXPECT = [
  {
    icon: Clock,
    titleEn: "15 minutes, async-friendly",
    titleRu: "15 минут, без воды",
    descEn: "Quick intro call. I'll ask about your stack, stage, and the problem you're trying to solve.",
    descRu: "Короткий вводный звонок. Спрошу про стек, стадию и задачу, которую нужно решить.",
  },
  {
    icon: CheckCircle2,
    titleEn: "Proposal within 24h",
    titleRu: "Предложение в течение 24ч",
    descEn: "If there's a fit, I'll send a written scope, timeline, and price within one business day.",
    descRu: "Если видим совместимость — отправляю письменный скоп, сроки и цену в течение рабочего дня.",
  },
  {
    icon: MessageCircle,
    titleEn: "No obligation",
    titleRu: "Без обязательств",
    descEn: "The call is exploratory. No hard sell, no pitch deck — just a technical conversation.",
    descRu: "Звонок исследовательский. Без продаж и питч-деков — просто технический разговор.",
  },
];

export default function BookPage() {
  const { lang } = useLanguage();

  // Load Calendly widget script
  useEffect(() => {
    const existing = document.getElementById("calendly-widget-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "calendly-widget-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ paddingTop: 80, minHeight: "calc(100vh - 140px)" }}>
      <section
        style={{
          maxWidth: 900,
          width: "100%",
          margin: "0 auto",
          padding: "40px 24px 100px",
        }}
      >
        {/* Breadcrumb */}
        <div style={{ marginBottom: 36 }}>
          <Link
            href="/hire"
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
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-subtle)")}
          >
            <ArrowLeft size={12} />
            {lang === "ru" ? "Назад к условиям сотрудничества" : "Back to Work With Me"}
          </Link>
        </div>

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
              marginBottom: 20,
            }}
          >
            {lang === "ru" ? "Записаться на звонок" : "Schedule a Call"}
          </span>

          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 50px)",
              color: "var(--header-color)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {lang === "ru"
              ? "15-мин вводный звонок"
              : "15-Minute Intro Call"}
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 16,
              maxWidth: 500,
              lineHeight: 1.7,
              margin: "0 auto",
            }}
          >
            {lang === "ru"
              ? "Выберите удобное время. Обсудим вашу задачу, стек и как я могу помочь."
              : "Pick a time that works for you. We'll discuss your problem, stack, and how I can help."}
          </p>
        </div>

        {/* ── What to expect ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 1,
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 40,
          }}
        >
          {WHAT_TO_EXPECT.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.titleEn}
                style={{
                  backgroundColor: "var(--bg-2)",
                  padding: "20px 20px",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 3,
                    backgroundColor: "var(--accent-bg)",
                    border: "1px solid var(--accent-dim)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} color="var(--accent)" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: 15,
                      color: "var(--header-color)",
                      marginBottom: 4,
                    }}
                  >
                    {lang === "ru" ? item.titleRu : item.titleEn}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {lang === "ru" ? item.descRu : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Calendly Embed ── */}
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 40,
            backgroundColor: "var(--bg-2)",
          }}
        >
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=C8A96E&background_color=faf7f2&text_color=415B57`}
            style={{ minWidth: 320, height: 700 }}
          />
        </div>

        {/* ── Alt contact ── */}
        <div
          style={{
            textAlign: "center",
            padding: "28px",
            border: "1px solid var(--border)",
            borderRadius: 4,
            backgroundColor: "var(--bg-2)",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-subtle)",
              marginBottom: 12,
            }}
          >
            {lang === "ru" ? "Предпочитаете написать?" : "Prefer to reach out async?"}
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://t.me/Ilyas_ones"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 18px",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                borderRadius: 3,
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent-dim)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <MessageCircle size={13} />
              Telegram
            </a>
            <a
              href="mailto:contact@ilyas-ones.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 18px",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                borderRadius: 3,
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent-dim)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <Mail size={13} />
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
