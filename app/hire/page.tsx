"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Zap,
  Users,
  Code2,
  Calendar,
} from "lucide-react";

const ENGAGEMENT_MODELS = [
  {
    id: "sprint",
    icon: Zap,
    accentColor: "#ff8d78",
    titleEn: "2-Week Sprint",
    titleRu: "2-недельный спринт",
    tagEn: "Fast Delivery",
    tagRu: "Быстрая поставка",
    descEn:
      "Focused, time-boxed execution. One well-defined problem, one dedicated engineer, shipped and deployed in 2 weeks.",
    descRu:
      "Сфокусированная разработка. Одна чётко ограниченная задача — один инженер. Готово и задеплоено за 2 недели.",
    priceEn: "Fixed scope · Fixed price",
    priceRu: "Фиксированный объём · Фиксированная цена",
    deliverables: [
      { en: "Production-ready feature or MVP", ru: "Готовый к продакшну фичер или MVP" },
      { en: "Architecture spec & documentation", ru: "Архитектурная спецификация и документация" },
      { en: "Deployed with CI/CD pipeline", ru: "Задеплоено с CI/CD пайплайном" },
      { en: "1-week support post-launch", ru: "1 неделя поддержки после запуска" },
    ],
    idealEn: "Best for: Seed-stage startups who need to ship fast and prove a concept.",
    idealRu: "Подходит: стартапам на стадии Seed, которым нужно быстро проверить гипотезу.",
    ctaEn: "Book Intro Call",
    ctaRu: "Записаться на звонок",
  },
  {
    id: "fractional",
    icon: Code2,
    accentColor: "#7a9e8f",
    titleEn: "Fractional Founding Engineer",
    titleRu: "Fractional Founding Engineer",
    tagEn: "Most Popular",
    tagRu: "Самый популярный",
    descEn:
      "Embedded as your first or second engineer. I own the architecture, lead technical decisions, and ship alongside your team on a part-time retainer.",
    descRu:
      "Встраиваюсь как первый или второй инженер. Отвечаю за архитектуру, принимаю технические решения и шиплю вместе с командой на условиях part-time ретейнера.",
    priceEn: "Monthly retainer · 20–30 hrs/week",
    priceRu: "Ежемесячный ретейнер · 20–30 ч/нед",
    deliverables: [
      { en: "Full technical ownership & architecture", ru: "Полная техническая ответственность и архитектура" },
      { en: "Weekly async updates + bi-weekly demos", ru: "Еженедельные апдейты + демо раз в 2 недели" },
      { en: "Direct Slack/Telegram access", ru: "Прямой доступ через Slack/Telegram" },
      { en: "Code reviews & hiring support", ru: "Code review и помощь с наймом команды" },
      { en: "IP ownership transferred to you", ru: "Все права на код переходят к вам" },
    ],
    idealEn: "Best for: Series A startups without a CTO or with an early eng team needing leadership.",
    idealRu: "Подходит: стартапам Series A без CTO или с небольшой командой, которой нужен технический лид.",
    ctaEn: "Book Intro Call",
    ctaRu: "Записаться на звонок",
  },
  {
    id: "founding",
    icon: Users,
    accentColor: "#9b8fce",
    titleEn: "Founding Engineer (Full-Time)",
    titleRu: "Founding Engineer (Full-Time)",
    tagEn: "Equity Possible",
    tagRu: "Возможно equity",
    descEn:
      "I join your startup as a founding engineer — building the core product from 0 to 1, defining the technical vision, and growing alongside the company.",
    descRu:
      "Присоединяюсь к стартапу как founding engineer — строю ядро продукта от 0 до 1, формирую техническое видение и расту вместе с компанией.",
    priceEn: "Salary + equity · Open to discuss",
    priceRu: "Зарплата + equity · Готов обсудить",
    deliverables: [
      { en: "0-to-1 product architecture & build", ru: "Архитектура и разработка продукта с нуля" },
      { en: "Technical co-founder responsibilities", ru: "Обязанности технического сооснователя" },
      { en: "Hiring & scaling the engineering team", ru: "Найм и масштабирование инженерной команды" },
      { en: "Investor technical due diligence support", ru: "Поддержка в техническом due diligence для инвесторов" },
      { en: "Long-term commitment", ru: "Долгосрочное сотрудничество" },
    ],
    idealEn: "Best for: Venture-backed founding teams who need a technical co-founder or first engineer.",
    idealRu: "Подходит: венчурным командам, которым нужен технический сооснователь или первый инженер.",
    ctaEn: "Book Intro Call",
    ctaRu: "Записаться на звонок",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    titleEn: "15-Min Intro Call",
    titleRu: "15-мин вводный звонок",
    descEn: "We align on your problem, timeline, and budget. No pitch, no hard sell — just a technical conversation.",
    descRu: "Определяем задачу, сроки и бюджет. Без питчей и продаж — просто технический разговор.",
    time: "Day 0",
  },
  {
    num: "02",
    titleEn: "Scope & Proposal (24h)",
    titleRu: "Скоп и предложение (24ч)",
    descEn: "I send a written proposal with architecture outline, timeline, and fixed price within 24 hours.",
    descRu: "В течение 24 часов отправляю предложение с архитектурным планом, сроками и фиксированной ценой.",
    time: "Day 1",
  },
  {
    num: "03",
    titleEn: "Week 1: Foundation",
    titleRu: "Неделя 1: Фундамент",
    descEn: "Repo setup, architecture decisions, CI/CD, and first working vertical slice shipped.",
    descRu: "Настройка репозитория, архитектурные решения, CI/CD и первый рабочий вертикальный срез.",
    time: "Week 1",
  },
  {
    num: "04",
    titleEn: "Bi-Weekly Demos",
    titleRu: "Демо раз в 2 недели",
    descEn: "Working software every two weeks. No black-box development — you see progress in real time.",
    descRu: "Рабочий софт каждые две недели. Никакой разработки в черном ящике — прогресс виден в реальном времени.",
    time: "Ongoing",
  },
  {
    num: "05",
    titleEn: "Handoff & Docs",
    titleRu: "Передача и документация",
    descEn: "Clean handoff with full documentation, deployment runbook, and architecture decision records.",
    descRu: "Чистая передача с полной документацией, runbook по деплою и записями архитектурных решений.",
    time: "Final",
  },
];

const FAQS = [
  {
    qEn: "Do you work with pre-seed / very early stage startups?",
    qRu: "Вы работаете с pre-seed / очень ранними стартапами?",
    aEn: "Yes. Early-stage is where I do my best work. I'm used to operating with ambiguity, incomplete specs, and shifting priorities. Sprint contracts are often the best fit.",
    aRu: "Да. Ранние стадии — это то, где я работаю лучше всего. Привык работать с неопределенностью, неполными спецификациями и меняющимися приоритетами. Чаще всего лучше всего подходят sprint-контракты.",
  },
  {
    qEn: "Are you available for US and EU clients?",
    qRu: "Работаете ли с US и EU клиентами?",
    aEn: "Yes — I actively work with clients across the US and Europe. On our intro call, we agree on a working schedule that fits your timezone: mornings, afternoons, or fully async. The schedule adapts to you, not the other way around.",
    aRu: "Да — работаю с клиентами из США и Европы. На вводном звонке договариваемся о рабочем графике, удобном вам: утро, день или полностью асинхронно. Расписание под вас, не наоборот.",
  },
  {
    qEn: "Is an NDA available?",
    qRu: "Доступно ли NDA?",
    aEn: "Yes. I'm comfortable signing NDAs before our first call if needed. All client projects are strictly confidential by default.",
    aRu: "Да. Готов подписать NDA до первого звонка при необходимости. Все клиентские проекты строго конфиденциальны по умолчанию.",
  },
  {
    qEn: "Can you build both the web app and backend?",
    qRu: "Вы можете построить и веб-приложение, и бэкенд?",
    aEn: "Yes — full-stack is my default mode. Next.js frontend, Node/Python backend, PostgreSQL/Redis data layer, Docker/K8s deployment. I also build React Native mobile when needed.",
    aRu: "Да — full-stack это мой стандартный режим. Next.js фронтенд, Node/Python бэкенд, PostgreSQL/Redis, Docker/K8s деплой. При необходимости строю и React Native мобильные приложения.",
  },
  {
    qEn: "How quickly can you start?",
    qRu: "Как быстро вы можете начать?",
    aEn: "For sprint contracts — within 1 week of signed agreement. For retainer/full-time — typically 2 weeks lead time. Current availability: Q3–Q4 2026.",
    aRu: "Sprint-контракты — в течение 1 недели после подписания. Ретейнер/full-time — обычно 2 недели на подготовку. Текущая доступность: Q3–Q4 2026.",
  },
  {
    qEn: "Do you take equity?",
    qRu: "Вы берёте equity?",
    aEn: "For founding engineer roles — yes, equity is part of the conversation. For sprint and retainer contracts — cash only. I'm not interested in purely equity-based arrangements.",
    aRu: "Для founding engineer ролей — да, equity обсуждается. Для sprint и ретейнер контрактов — только денежное вознаграждение. Чисто equity-договорённости не рассматриваю.",
  },
];

export default function HirePage() {
  const { lang } = useLanguage();

  return (
    <div style={{ paddingTop: 80, minHeight: "calc(100vh - 140px)" }}>
      <section
        style={{
          maxWidth: 1040,
          width: "100%",
          margin: "0 auto",
          padding: "60px 24px 100px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ marginBottom: 64 }}>
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
            {lang === "ru" ? "Работа вместе" : "Work With Me"}
          </span>

          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 5.5vw, 58px)",
              color: "var(--header-color)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: 700,
              marginBottom: 20,
            }}
          >
            {lang === "ru"
              ? "Давайте строить вместе"
              : "Let's Build Something Together"}
          </h1>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 17,
              maxWidth: 580,
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            {lang === "ru"
              ? "Founding Engineer и архитектор AI-систем. Доступен для спринтов, ретейнеров и ролей с полной занятостью для венчурных стартапов, которым нужна техническая мощь с первого дня."
              : "Founding Engineer & AI Systems Architect. Available for sprints, retainers, and full-time roles for venture-backed startups that need serious technical horsepower from day one."}
          </p>

          {/* Availability + timezone row */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#5a9e7a",
                border: "1px solid #5a9e7a40",
                backgroundColor: "#5a9e7a10",
                padding: "5px 12px",
                borderRadius: 2,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#5a9e7a",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              {lang === "ru" ? "Доступен: Q3–Q4 2026" : "Available: Q3–Q4 2026"}
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-subtle)",
                border: "1px solid var(--border)",
                padding: "5px 12px",
                borderRadius: 2,
              }}
            >
              <Clock size={11} style={{ display: "inline", marginRight: 5 }} />
              {lang === "ru" ? "Рабочий график под ваш часовой пояс" : "Schedule adapts to your timezone"}
            </span>
          </div>
        </div>

        {/* ── Engagement Models ── */}
        <div style={{ marginBottom: 80 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-subtle)",
              marginBottom: 28,
            }}
          >
            {lang === "ru" ? "Модели сотрудничества" : "Engagement Models"}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: 20,
            }}
          >
            {ENGAGEMENT_MODELS.map((model) => {
              const Icon = model.icon;
              const title = lang === "ru" ? model.titleRu : model.titleEn;
              const tag = lang === "ru" ? model.tagRu : model.tagEn;
              const desc = lang === "ru" ? model.descRu : model.descEn;
              const price = lang === "ru" ? model.priceRu : model.priceEn;
              const ideal = lang === "ru" ? model.idealRu : model.idealEn;
              const cta = lang === "ru" ? model.ctaRu : model.ctaEn;

              return (
                <div
                  key={model.id}
                  style={{
                    backgroundColor: "var(--bg-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${model.accentColor}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {/* Top accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      backgroundColor: model.accentColor,
                    }}
                  />

                  {/* Icon + tag */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 3,
                        backgroundColor: `${model.accentColor}15`,
                        border: `1px solid ${model.accentColor}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={18} color={model.accentColor} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 9,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: model.accentColor,
                        border: `1px solid ${model.accentColor}40`,
                        backgroundColor: `${model.accentColor}10`,
                        padding: "3px 10px",
                        borderRadius: 2,
                      }}
                    >
                      {tag}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div>
                    <h2
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: 21,
                        color: "var(--header-color)",
                        marginBottom: 8,
                        lineHeight: 1.2,
                      }}
                    >
                      {title}
                    </h2>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: 13,
                        lineHeight: 1.65,
                      }}
                    >
                      {desc}
                    </p>
                  </div>

                  {/* Price badge */}
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: model.accentColor,
                      backgroundColor: `${model.accentColor}10`,
                      border: `1px solid ${model.accentColor}25`,
                      padding: "5px 10px",
                      borderRadius: 2,
                      display: "inline-block",
                    }}
                  >
                    {price}
                  </div>

                  {/* Deliverables */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                    {model.deliverables.map((d, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontSize: 12,
                          color: "var(--text-muted)",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2
                          size={13}
                          color={model.accentColor}
                          style={{ flexShrink: 0, marginTop: 1 }}
                        />
                        {lang === "ru" ? d.ru : d.en}
                      </li>
                    ))}
                  </ul>

                  {/* Ideal for */}
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      color: "var(--text-subtle)",
                      letterSpacing: "0.04em",
                      lineHeight: 1.5,
                      borderTop: "1px solid var(--border)",
                      paddingTop: 12,
                    }}
                  >
                    {ideal}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/book"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 7,
                      padding: "11px 18px",
                      backgroundColor: model.accentColor,
                      color: "#FAF7F2",
                      borderRadius: 3,
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      textDecoration: "none",
                      fontWeight: 500,
                      width: "100%",
                      boxSizing: "border-box",
                      marginTop: "auto",
                    }}
                  >
                    <Calendar size={13} />
                    {cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── How We Work ── */}
        <div style={{ marginBottom: 80 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-subtle)",
              marginBottom: 8,
            }}
          >
            {lang === "ru" ? "Как мы работаем" : "The Process"}
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(26px, 4vw, 34px)",
              color: "var(--header-color)",
              marginBottom: 36,
            }}
          >
            {lang === "ru"
              ? "От первого звонка до продакшна"
              : "From First Call to Production"}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 1,
              backgroundColor: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                style={{
                  backgroundColor: "var(--bg-2)",
                  padding: "24px 20px",
                }}
              >
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
                      fontSize: 20,
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 9,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-subtle)",
                      border: "1px solid var(--border)",
                      padding: "2px 7px",
                      borderRadius: 2,
                    }}
                  >
                    {step.time}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 16,
                    color: "var(--header-color)",
                    marginBottom: 8,
                    lineHeight: 1.25,
                  }}
                >
                  {lang === "ru" ? step.titleRu : step.titleEn}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {lang === "ru" ? step.descRu : step.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div style={{ marginBottom: 72 }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-subtle)",
              marginBottom: 8,
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(24px, 4vw, 32px)",
              color: "var(--header-color)",
              marginBottom: 32,
            }}
          >
            {lang === "ru" ? "Вопросы и ответы" : "Common Questions"}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: "var(--border)", border: "1px solid var(--border)", borderRadius: 4, overflow: "hidden" }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "var(--bg-2)",
                  padding: "20px 24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 16,
                    color: "var(--header-color)",
                    marginBottom: 8,
                  }}
                >
                  {lang === "ru" ? faq.qRu : faq.qEn}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {lang === "ru" ? faq.aRu : faq.aEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div
          style={{
            textAlign: "center",
            padding: "48px 32px",
            backgroundColor: "var(--bg-2)",
            border: "1px solid var(--border)",
            borderRadius: 4,
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--text-subtle)",
              marginBottom: 16,
            }}
          >
            {lang === "ru" ? "Готовы начать?" : "Ready to move forward?"}
          </p>
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "var(--header-color)",
              marginBottom: 12,
            }}
          >
            {lang === "ru"
              ? "Запишитесь на 15-мин звонок"
              : "Book a 15-Minute Intro Call"}
          </h3>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: 14,
              maxWidth: 440,
              lineHeight: 1.65,
              margin: "0 auto 28px",
            }}
          >
            {lang === "ru"
              ? "Без обязательств. Просто технический разговор — задачи, сроки, бюджет."
              : "No commitment. Just a technical conversation — scope, timeline, and fit."}
          </p>
          <Link
            href="/book"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              backgroundColor: "var(--accent)",
              color: "#FAF7F2",
              borderRadius: 3,
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            <Calendar size={14} />
            {lang === "ru" ? "Записаться на звонок" : "Book Intro Call"}
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
