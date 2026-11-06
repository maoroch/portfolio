import { Language } from "@/lib/i18n/dictionaries";

export type ProjectCategory =
  | "AI Agents & Pipelines"
  | "SaaS & Platform Engineering"
  | "GenAI Products"
  | "Headless & Edge Commerce";

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "case-study" | "demo" | "pdf" | "external";
}

export interface Project {
  slug: string;
  id: string;
  category: ProjectCategory;
  tag: string;
  title: string;
  titleRu: string;
  shortDescription: string;
  shortDescriptionRu: string;
  fullDescription: string;
  fullDescriptionRu: string;
  problem: string;
  problemRu: string;
  solution: string;
  solutionRu: string;
  metrics: string;
  metricsRu: string;
  metricsBreakdown: { label: string; labelRu: string; value: string; desc: string; descRu: string }[];
  stack: string[];
  highlights: string[];
  highlightsRu: string[];
  links: ProjectLink[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const CATEGORIES: ProjectCategory[] = [
  "AI Agents & Pipelines",
  "SaaS & Platform Engineering",
  "GenAI Products",
  "Headless & Edge Commerce",
];

export const projects: Project[] = [
  // ─── AI AGENTS & PIPELINES ──────────────────────────────────────────────────

  {
    slug: "autonomous-social-ai",
    id: "01",
    category: "AI Agents & Pipelines",
    tag: "AI Agents & Pipelines",
    title: "Autonomous Social Media AI Pipeline",
    titleRu: "Автономный медиа AI-пайплайн для соцсетей",
    shortDescription:
      "Multi-tenant content generation, design & publishing platform for LinkedIn, Instagram, Threads and Telegram — powered by microservice AI agents, RAG fact-grounding, and Kubernetes scale-to-zero.",
    shortDescriptionRu:
      "Мультиарендная платформа генерации, дизайна и публикации контента для LinkedIn, Telegram, Threads и Instagram на микросервисных AI-агентах с RAG-верификацией и scale-to-zero в Kubernetes.",
    fullDescription:
      "An autonomous, multi-tenant content engineering platform that replaces a full content agency (copywriter, designer, SMM manager) at 10% of the cost. The system generates publish-ready posts with styled carousels in under 20 seconds, enforces brand safety via RAG fact-grounding, and deploys on Azure K3s + KEDA for scale-to-zero cloud economics.",
    fullDescriptionRu:
      "Автономная платформа контент-инженерии, заменяющая агентство (копирайтер, дизайнер, SMM) за 10% стоимости. Генерирует готовые посты со стилизованными каруселями за 20 секунд, исключает галлюцинации через RAG и масштабируется до нуля на Azure K3s + KEDA.",
    problem:
      "Creating verified B2B content for LinkedIn, Telegram, and Instagram traditionally requires a full agency team — copywriter, domain expert, graphic designer, editor, SMM manager — costing $3,000–$10,000+/month with a 2–3 day cycle per post.",
    problemRu:
      "Создание качественного B2B-контента для LinkedIn и Telegram требует команды из 4–5 специалистов стоимостью $3,000–$10,000 в месяц и занимает от 2 до 3 дней на один проверенный материал.",
    solution:
      "A microservice AI graph orchestrated by OpenClaw via BullMQ/Redis: an AI writer produces copy grounded in a RAG fact database, a Puppeteer carousel renderer creates 1080×1350 branded images, a Telegram bot delivers a mobile HITL moderation cockpit, and a self-correction evaluator re-generates posts scoring below 85% alignment.",
    solutionRu:
      "Граф микросервисов под управлением OpenClaw и BullMQ/Redis: AI-райтер пишет фактологический текст по RAG-базе, движок Puppeteer рендерит брендированные карусели 1080x1350, Telegram-бот обеспечивает модерацию, а агент-оценщик автоматически перегенерирует посты при оценке ниже 85%.",
    metrics: "20s Generation · 90% Cost Reduction · Scale-to-Zero",
    metricsRu: "20 сек генерация · Экономия 90% · Scale-to-Zero",
    metricsBreakdown: [
      {
        label: "Content Generation",
        labelRu: "Скорость создания",
        value: "20s",
        desc: "End-to-end from prompt to publish-ready post",
        descRu: "От промпта до готовой публикации с каруселью",
      },
      {
        label: "Cost Reduction",
        labelRu: "Снижение затрат",
        value: "90%",
        desc: "vs. traditional content agency pricing",
        descRu: "По сравнению со стоимостью найма агентства",
      },
      {
        label: "Cloud Infra",
        labelRu: "Облачная архитектура",
        value: "Scale-to-Zero",
        desc: "KEDA event-driven autoscaling on K3s + Azure",
        descRu: "Автомасштабирование до 0 подов через KEDA в Azure",
      },
      {
        label: "Hallucination Rate",
        labelRu: "Фактическая точность",
        value: "~0%",
        desc: "RAG-grounded facts + numeric validation",
        descRu: "RAG-заземление на верифицированные факты",
      },
    ],
    stack: [
      "Node.js 20",
      "TypeScript",
      "Next.js 15",
      "BullMQ / Redis",
      "Kubernetes K3s",
      "KEDA",
      "Puppeteer",
      "Groq LLaMA 3.3",
      "Google Gemini",
      "Azure",
      "Docker",
      "PostgreSQL",
    ],
    highlights: [
      "Multi-tenant architecture with isolated brand style guides, color palettes & knowledge bases per tenant",
      "Puppeteer carousel engine rendering 1080×1350 PNG branded graphics per post",
      "Telegram mobile moderation cockpit — approve, edit, regenerate in 1 tap",
      "Self-correction evaluator agent — auto-regenerates posts scoring <85% against golden datasets",
      "KEDA Redis-triggered scale-to-zero: resource-heavy pods spin down when idle",
      "High-speed LPU inference via Groq (llama-3.3-70b) + Gemini 2.0 Flash",
    ],
    highlightsRu: [
      "Мультиарендная архитектура с изолированными брендбуками, палитрами и базами знаний под каждого клиента",
      "Движок на Puppeteer для рендера фирменных каруселей 1080×1350 PNG с автоподбором графики",
      "Мобильный интерфейс модерации в Telegram: одобрение, правка и перезапуск в 1 касание",
      "Агент самокоррекции: автоматическая перегенерация постов с рейтингом согласованности ниже 85%",
      "Scale-to-Zero на KEDA: тяжелые поды гасятся в ноль при пустой очереди в Redis",
      "Сверхбыстрый LPU-инференс через Groq (LLaMA 3.3 70B) и Google Gemini 2.0 Flash",
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/maoroch/Autonomous_social_intelligence_engine",
        type: "github",
      },
    ],
    seo: {
      title: "Autonomous Social Media AI Pipeline — Multi-Agent Content System | Ilyas Salimov",
      description:
        "Case study: autonomous multi-agent content platform for CTOs and Founders. Replaces a full content agency at 10% cost. Kubernetes K3s, KEDA scale-to-zero, RAG fact-grounding, 20s post generation. Built by Founding Engineer Ilyas Salimov.",
      keywords: [
        "AI content automation",
        "multi-agent AI system",
        "autonomous content pipeline",
        "CTO AI solutions",
        "startup content marketing automation",
        "Kubernetes KEDA autoscaling",
        "RAG fact grounding",
        "multi-tenant SaaS architecture",
      ],
    },
  },

  {
    slug: "fintech-compliance",
    id: "02",
    category: "AI Agents & Pipelines",
    tag: "AI Agents & Pipelines",
    title: "Autonomous Credit Covenant & Compliance Agent",
    titleRu: "AI-агент аудита кредитных ковенантов и комплаенса",
    shortDescription:
      "Enterprise-grade AI agent for automated verification of corporate credit loan agreements — 93.3% exact match accuracy, 1.65ms BM25 retrieval, 86.9% token reduction on 50-page legal contracts.",
    shortDescriptionRu:
      "Детерминированный AI-агент для автоматической проверки кредитных договоров: точность 93.3% цент-в-цент, 1.65 мс BM25-поиск и сокращение токенов на 86.9% на 50-страничных договорах.",
    fullDescription:
      "A deterministic single-process AI agent system that autonomously ingests unstructured credit dossier documents (PDFs, Audit Notes, KYC files) alongside raw multi-currency bank ledgers, extracts contractual covenant definitions, applies auditor period cut-offs, and calculates 100% exact numerical metric compliance down to the cent.",
    fullDescriptionRu:
      "Детерминированная AI-система для анализа кредитных досье (PDF, аудит, KYC) и мультивалютных банковских проводок. Извлекает формулы ковенантов, применяет аудиторские отсечки и вычисляет метрики со 100% математической точностью до цента без галлюцинаций.",
    problem:
      "Financial institutions spend thousands of hours manually auditing loan dossiers to verify covenant compliance (Leverage Ratios, Capex Limits, Related-Party Transaction Caps). Human error rates are high, and each audit cycle takes days.",
    problemRu:
      "Финансовые институты тратят тысячи человеко-часов на ручную проверку кредитных ковенантов (Leverage, Capex, лимиты связанных сторон). Высокий риск человеческой ошибки затягивает аудит на недели.",
    solution:
      "A modular, decoupled pipeline: multithreaded PDF ingestion with OCR fallback → deterministic regex + LLM classifier → Okapi BM25 paragraph ranker → sandboxed Python arithmetic engine (zero LLM math) → multi-currency FX calculation → automated HTML compliance report & executive dashboard.",
    solutionRu:
      "Модульный конвейер: многопоточный парсинг PDF с OCR → детерминированный классификатор → Okapi BM25 ранжирование параграфов → изолированное арифметическое ядро на Python (0% вычислений через LLM) → конвертация валют → автогенерация HTML-отчетов аудита.",
    metrics: "93.3% Accuracy · 1.65ms Retrieval · 86.9% Token Reduction",
    metricsRu: "93.3% точность · 1.65 мс поиск · -86.9% токенов",
    metricsBreakdown: [
      {
        label: "Accuracy",
        labelRu: "Точность сопоставления",
        value: "93.3%",
        desc: "Exact match vs. official ground truth down to the cent",
        descRu: "Полное совпадение с эталоном до копейки/цента",
      },
      {
        label: "BM25 Retrieval",
        labelRu: "Скорость поиска",
        value: "1.65ms",
        desc: "Average search latency per document",
        descRu: "Средняя задержка выборки параграфа на документ",
      },
      {
        label: "Token Reduction",
        labelRu: "Экономия токенов",
        value: "86.9%",
        desc: "Input token savings on 50-page legal contracts",
        descRu: "Снижение контекста на 50-страничных договорах",
      },
      {
        label: "Math Errors",
        labelRu: "Ошибки в расчётах",
        value: "0.00%",
        desc: "Sandboxed Python arithmetic, zero LLM math",
        descRu: "Песочница Python: ноль математики через нейросеть",
      },
    ],
    stack: [
      "Python 3.11",
      "Ollama (Apple Metal GPU)",
      "Okapi BM25",
      "PyMuPDF / pdfplumber",
      "Tesseract OCR",
      "Pydantic v2",
      "Docker",
      "Claude 3.5 Sonnet",
    ],
    highlights: [
      "Zero LLM arithmetic — sandboxed Python float engine handles all calculations",
      "86.9% input token reduction via BM25 paragraph snippet retrieval on dense legal PDFs",
      "Multi-currency FX engine (KZT, EUR, RUB → USD) with dynamic rate extraction",
      "Bi-directional marginal transaction selector — identifies single transactions that flip breach status",
      "100% offline execution capability via Ollama on Apple Silicon",
      "Auto-generated HTML executive dashboard + machine-readable audit trail JSON",
    ],
    highlightsRu: [
      "0% вычислений на LLM — чистая математика на Python гарантирует отсутствие галлюцинаций",
      "Экономия 86.9% токенов за счет точечного извлечения параграфов через Okapi BM25",
      "Мультивалютный FX-движок (KZT, EUR, RUB → USD) с динамическим парсингом курсов",
      "Анализатор маржинальных транзакций: находит единичные операции, влияющие на нарушение ковенанта",
      "Полная конфиденциальность: автономная работа офлайн через Ollama на Apple Metal GPU",
      "Генерация интерактивного HTML-дашборда для руководства и машиночитаемого audit_trail.json",
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/maoroch/fintech-compliance-agent",
        type: "github",
      },
    ],
    seo: {
      title: "AI Credit Covenant Compliance Agent — FinTech AI System | Ilyas Salimov",
      description:
        "Case study: deterministic AI agent for credit covenant verification. 93.3% exact match accuracy, 1.65ms retrieval, zero LLM arithmetic errors. Built for FinTech CTOs and Founders scaling compliance automation. Python 3.11, BM25, Pydantic.",
      keywords: [
        "FinTech AI compliance",
        "credit covenant verification AI",
        "deterministic AI agent",
        "loan audit automation",
        "CTO FinTech solutions",
      ],
    },
  },

  // ─── SAAS & PLATFORM ENGINEERING ────────────────────────────────────────────

  {
    slug: "lms-platform",
    id: "03",
    category: "SaaS & Platform Engineering",
    tag: "SaaS & Platform Engineering",
    title: "EduTech LMS Platform",
    titleRu: "EduTech — полнофункциональная LMS-платформа",
    shortDescription:
      "Production-ready full-stack Learning Management System — multi-role (students, teachers, admins), native Stripe payments, trilingual UI (EN/RU/KZ), MinIO file storage, Redis job queues.",
    shortDescriptionRu:
      "Готовая к продакшну система управления обучением: 3 роли (студенты, преподаватели, админы), оплата через Stripe с вебхуками, 3 языка интерфейса (EN/RU/KZ), хранилище MinIO и очереди Redis.",
    fullDescription:
      "A full-stack e-learning platform where teachers create and publish courses with modules, video lessons, and assignments; students browse, purchase via Stripe Checkout (auto-enrolled on payment), submit homework, and receive certificates; admins manage users and issue refunds auto-triggered in Stripe. Containerized with Docker Compose for zero-config deployment.",
    fullDescriptionRu:
      "Полнофункциональная платформа онлайн-образования: преподаватели создают курсы с модулями, видео и домашними заданиями; студенты оплачивают через Stripe Checkout с автозачислением; админы управляют платформой и возвратами. Развернута через Docker Compose.",
    problem:
      "EdTech startups need a production-grade LMS that handles payments, multi-role access control, file storage at scale, and multilingual audiences — without stitching together five separate SaaS tools.",
    problemRu:
      "Образовательным проектам требуется надежная LMS с приемом платежей, разграничением прав, надежным хранилищем медиафайлов и мультиязычностью — без раздувания затрат на десяток сторонних сервисов.",
    solution:
      "A decoupled Next.js 16 + Express 5 + PostgreSQL 16 stack: JWT auth with refresh tokens, Stripe Checkout + webhook enrollment, MinIO for binary-free PostgreSQL, Redis + BullMQ for background jobs, Nginx reverse proxy with rate limiting, and trilingual UI (EN/RU/KZ) built on a custom i18n hook.",
    solutionRu:
      "Стек Next.js 16 + Express 5 + PostgreSQL 16: JWT-авторизация с refresh-токенами, авторегистрация по вебхукам Stripe, объектное хранилище MinIO (чистая БД без бинарников), фоновые очереди BullMQ, Nginx с рейт-лимитами и 3 языка (EN/RU/KZ).",
    metrics: "Multi-Role SaaS · Stripe Webhooks · 3-Language UI",
    metricsRu: "Мультиролевой SaaS · Вебхуки Stripe · 3 языка",
    metricsBreakdown: [
      {
        label: "User Roles",
        labelRu: "Ролевая модель",
        value: "3",
        desc: "Students, Teachers, Admins with granular permissions",
        descRu: "Студенты, учителя, администраторы с гранулярным RBAC",
      },
      {
        label: "Languages",
        labelRu: "Языки интерфейса",
        value: "3",
        desc: "EN / RU / KZ trilingual UI",
        descRu: "Полная локализация: английский, русский, казахский",
      },
      {
        label: "Payments",
        labelRu: "Платежи",
        value: "Stripe",
        desc: "Checkout Sessions + auto-enrollment webhooks",
        descRu: "Сессии Stripe Checkout и автозачисление по вебхуку",
      },
      {
        label: "Storage",
        labelRu: "Хранилище файлов",
        value: "MinIO",
        desc: "S3-compatible object storage, PostgreSQL stays clean",
        descRu: "S3-совместимое объектное хранилище без нагрузки на БД",
      },
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Node.js 20 (ESM)",
      "Express 5",
      "PostgreSQL 16",
      "Redis 7 + BullMQ",
      "MinIO (S3)",
      "Stripe",
      "Tailwind CSS v4",
      "Docker Compose",
      "Nginx",
    ],
    highlights: [
      "Stripe Checkout + webhook auto-enrollment: students gain access the moment payment is confirmed",
      "MinIO object storage keeps PostgreSQL free of binary blobs at any scale",
      "Redis + BullMQ background queues for async certificate generation and email jobs",
      "Multi-stage non-root Dockerfiles — CI-ready and security-hardened",
      "Swagger API documentation (swagger-jsdoc + swagger-ui-express)",
      "Trilingual UI with custom i18n hook — no third-party i18n library needed",
    ],
    highlightsRu: [
      "Интеграция Stripe Checkout: студент получает доступ к курсу в миллисекунду подтверждения вебхука",
      "MinIO S3 хранит видео и материалы, сохраняя реляционную базу данных быстрой и компактной",
      "Фоновые очереди Redis + BullMQ для генерации сертификатов в PDF и рассылки уведомлений",
      "Многоэтапные non-root Docker-образы — максимальная безопасность и готовность к CI/CD",
      "Интерактивная Swagger API документация для внешних интеграций",
      "Легковесный i18n-хук на 3 языка без оверхеда тяжелых сторонних библиотек",
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/Kodoatorie/lms_platform",
        type: "github",
      },
    ],
    seo: {
      title: "EduTech LMS Platform — Full-Stack SaaS Case Study | Ilyas Salimov",
      description:
        "Case study: production-ready Learning Management System for EdTech startups. Multi-role SaaS, Stripe Checkout auto-enrollment, MinIO storage, Redis queues, trilingual UI. Built by Founding Engineer Ilyas Salimov. Next.js 16, PostgreSQL, Docker.",
      keywords: [
        "EdTech LMS development",
        "SaaS platform engineer",
        "Stripe payments integration",
        "multi-role SaaS architecture",
      ],
    },
  },

  {
    slug: "logistics-erp",
    id: "04",
    category: "SaaS & Platform Engineering",
    tag: "SaaS & Platform Engineering",
    title: "Real-Time Multi-City Logistics ERP & Dispatch Engine",
    titleRu: "Логистическая ERP реального времени и диспетчеризация",
    shortDescription:
      "End-to-end multi-tenant logistics platform featuring live driver telemetry via Redis SSE, 3-tier Row-Level Security (RLS), automated ledger reconciliation, and 4-city dispatch coverage.",
    shortDescriptionRu:
      "Мультиарендная логистическая платформа с живой телеметрией водителей через Redis SSE, 3-уровневой защитой PostgreSQL RLS и автоматической сверкой финансовых балансов по 4 городам.",
    fullDescription:
      "A production logistics ERP and dispatch management system built for a regional logistics operator covering 4 cities. Features a real-time driver tracking dashboard (sub-300ms updates via Redis SSE), multi-tenant data isolation using PostgreSQL Row-Level Security, automated financial ledger reconciliation, and a React Native mobile app for drivers.",
    fullDescriptionRu:
      "ERP-система диспетчеризации автопарка для 4 городов: мониторинг курьеров с частотой обновления до 300 мс через Redis SSE, строгая изоляция данных филиалов через PostgreSQL RLS, автосверка реестров и мобильное приложение на React Native.",
    problem:
      "Regional logistics operators managing multi-city fleets need real-time dispatch visibility, strict multi-tenant data isolation between clients, and automated financial reconciliation — without off-the-shelf enterprise software costing $50k+/year.",
    problemRu:
      "Логистическим операторам требуется оперативный контроль над автопарком в нескольких городах, полная изоляция филиалов друг от друга и ежедневная сверка кассы без покупки тяжелых enterprise-систем за десятки тысяч долларов.",
    solution:
      "A multi-tenant Next.js + Express backend with Redis Server-Sent Events for sub-300ms live telemetry, PostgreSQL RLS enforcing 3-tier RBAC (admin/operator/driver), a React Native driver app synced via the same API, and an automated ledger reconciliation engine that closes books nightly.",
    solutionRu:
      "Мультиарендный бэкенд на Next.js + Express: Server-Sent Events (SSE) через Redis для передачи координат, политики PostgreSQL RLS на уровне строк базы данных, кроссплатформенное приложение водителя и ночное автоматическое закрытие реестра.",
    metrics: "<300ms Live Sync · 3-Tier RBAC · 4-City Coverage",
    metricsRu: "<300 мс синхронизация · 3 уровня RBAC · 4 города",
    metricsBreakdown: [
      {
        label: "Live Telemetry",
        labelRu: "Живая телеметрия",
        value: "<300ms",
        desc: "Redis SSE push to all connected dashboards",
        descRu: "Мгновенный пуш координат через Redis SSE",
      },
      {
        label: "RBAC Tiers",
        labelRu: "Уровни доступа",
        value: "3",
        desc: "Admin / Operator / Driver with PostgreSQL RLS",
        descRu: "Админ / Диспетчер / Водитель с защитой на уровне БД",
      },
      {
        label: "City Coverage",
        labelRu: "Охват филиалов",
        value: "4",
        desc: "Multi-tenant isolation per regional branch",
        descRu: "Полная изоляция данных между 4 городами",
      },
      {
        label: "Reconciliation",
        labelRu: "Сверка балансов",
        value: "Automated",
        desc: "Nightly ledger close with audit trail",
        descRu: "Ежедневный автоматический аудит и сведение счетов",
      },
    ],
    stack: [
      "Next.js",
      "React Native",
      "Express.js",
      "Supabase PostgreSQL",
      "Redis SSE",
      "Row-Level Security (RLS)",
      "TypeScript",
    ],
    highlights: [
      "Sub-300ms live driver telemetry via Redis Server-Sent Events — no polling, no WebSocket overhead",
      "3-tier PostgreSQL RLS: every query is scoped to tenant + role at the database level",
      "React Native driver app sharing the same API contract as the web dashboard",
      "Automated nightly ledger reconciliation with discrepancy alerts",
      "Multi-tenant architecture: each city branch sees only its own fleet and financials",
    ],
    highlightsRu: [
      "Телеметрия быстрее 300 мс через Redis SSE без тяжелого оверхеда WebSockets и поллинга",
      "3-уровневый PostgreSQL RLS: каждый SQL-запрос изолирован на уровне ядра базы данных",
      "Мобильное приложение водителя на React Native с единым API-контрактом",
      "Автоматическая ночная сверка транзакций с уведомлением о любых расхождениях",
      "Каждый региональный филиал видит исключительно свой транспорт и финансовую отчетность",
    ],
    links: [
      {
        label: "Case Study on Contra",
        url: "https://contra.com/ilyas_salimov_j7tpcm02",
        type: "case-study",
      },
    ],
    seo: {
      title: "Real-Time Logistics ERP & Dispatch System — Multi-Tenant SaaS | Ilyas Salimov",
      description:
        "Case study: real-time multi-city logistics ERP with live driver telemetry (<300ms), PostgreSQL RLS 3-tier RBAC, and automated ledger reconciliation. Built for logistics startup CTOs. Next.js, Redis SSE, React Native, Supabase.",
      keywords: [
        "logistics ERP development",
        "real-time dispatch system",
        "multi-tenant SaaS architect",
        "Redis SSE real-time",
      ],
    },
  },

  // ─── GENAI PRODUCTS ─────────────────────────────────────────────────────────

  {
    slug: "ai-interior-designer",
    id: "05",
    category: "GenAI Products",
    tag: "GenAI Products",
    title: "AI Interior Designer — Spatial Design Platform",
    titleRu: "AI Interior Designer — генеративная 3D-платформа интерьеров",
    shortDescription:
      "Upload a floor plan → multi-agent AI performs CV segmentation, builds a wall topology graph, applies a computational math engine (golden ratio, ergonomics, photometry), and generates a 60fps 3D interior.",
    shortDescriptionRu:
      "Загрузка 2D-плана → компьютерное зрение строит топологический граф стен, применяет вычислительную эргономику (золотое сечение, СНиП, фотометрия) и рендерит 3D-сцену в 60fps Three.js.",
    fullDescription:
      "A next-generation web platform where users upload apartment/house blueprints and a multi-agent AI system performs computer vision segmentation, builds a topological wall graph, applies a Computational Math Engine (golden ratio, SMPTE ergonomics, force-directed spring solver, photometric lighting calculation), and renders an interactive 60fps Three.js/React Three Fiber 3D interior with walk-mode camera and drag-and-drop furniture.",
    fullDescriptionRu:
      "Инновационная веб-платформа: пользователь загружает план помещения, мультиагентная система строит топологию стен, выполняет математический расчёт расстановки мебели (золотое сечение Φ ≈ 1.618, эргономика SMPTE, фотометрия Кельвина) и генерирует интерактивную 3D-модель с режимом прогулки от первого лица.",
    problem:
      "Professional interior design costs $5,000–$50,000 per project and takes weeks. Existing AI tools generate aesthetically pretty but spatially incorrect rooms that violate ergonomics, furniture clearances, and building code minimum passages.",
    problemRu:
      "Профессиональный дизайн-проект стоит от $5,000 до $30,000 и занимает недели. Обычные генеративные нейросети создают красивые картинки, но нарушают строительные нормы, физические размеры стен и эргономику проходов.",
    solution:
      "A Bayesian Scale Estimator converts pixels to meters without manual calibration. A Shapely CAD compiler enforces 22cm wall buffers, 55cm ergonomic passages, and door swing radius protection. Three parallel style variants (Modern, Japandi, Luxury) are generated simultaneously with PDF export.",
    solutionRu:
      "Байесовский оценщик масштаба переводит пиксели в метры без ручной калибровки. CAD-компилятор на Shapely гарантирует отступы 22 см от стен, проходы 55 см и радиусы дверей. Параллельно создаются 3 стиля (Modern, Japandi, Luxury) с экспортом в PDF.",
    metrics: "60fps 3D Canvas · 3 Style Variants · PDF Export",
    metricsRu: "60fps 3D-сцена · 3 стиля параллельно · Экспорт в PDF",
    metricsBreakdown: [
      {
        label: "3D Rendering",
        labelRu: "3D-рендер",
        value: "60fps",
        desc: "Three.js / React Three Fiber interactive canvas",
        descRu: "Интерактивная сцена на Three.js / React Three Fiber",
      },
      {
        label: "Style Variants",
        labelRu: "Варианты стилей",
        value: "3",
        desc: "Modern / Japandi / Luxury generated in parallel",
        descRu: "Параллельная генерация Modern, Japandi и Luxury",
      },
      {
        label: "Ergonomics",
        labelRu: "Эргономика",
        value: "SMPTE",
        desc: "TV viewing distance, 55cm furniture passages",
        descRu: "Дистанция ТВ, проходы от 55 см, радиусы дверей",
      },
      {
        label: "Color System",
        labelRu: "Колористика",
        value: "60-30-10",
        desc: "Photometric lux + Kelvin calculation per room",
        descRu: "Расчет светотехники в люксах и кельвинах по СНиП",
      },
    ],
    stack: [
      "Next.js 15",
      "FastAPI",
      "Python",
      "Three.js / React Three Fiber",
      "Taskiq (distributed queues)",
      "Shapely 2.0",
      "OpenCV",
      "Cloudflare R2",
      "Docker",
    ],
    highlights: [
      "Bayesian Scale Estimator — auto-converts pixels to meters, no manual calibration needed",
      "Topological wall graph with probabilistic opening detection (windows / doors)",
      "Computational Math Engine: golden ratio (Φ ≈ 1.618), force-directed spring solver, photometric lux",
      "Shapely CAD compiler: 22cm wall offsets, 55cm ergonomic passages, door swing protection",
      "Walk-mode first-person camera with wall collision + drag-and-drop furniture placement",
      "3 parallel style generation (Modern / Japandi / Luxury) with PDF export",
    ],
    highlightsRu: [
      "Байесовский оценщик масштаба: автоперевод пикселей чертежа в реальные метры",
      "Топологический граф стен с вероятностной классификацией дверных и оконных проемов",
      "Математический движок: расчет золотого сечения (1.618), балансировка света и цвета",
      "Геометрическая верификация через Shapely CAD: защита зон открывания дверей и проходов",
      "Режим прогулки от первого лица с коллизиями о стены и ручной Drag&Drop мебели",
      "Параллельная генерация 3 вариантов оформления с выгрузкой в профессиональный PDF-буклет",
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/maoroch/AI-Interior-Designer",
        type: "github",
      },
    ],
    seo: {
      title: "AI Interior Designer — Spatial GenAI Platform Case Study | Ilyas Salimov",
      description:
        "Case study: AI interior design platform for PropTech and GenAI startups. Computational math engine, 60fps Three.js 3D, Bayesian scale estimation, SMPTE ergonomics. Built by Founding Engineer Ilyas Salimov. FastAPI, Next.js, Python.",
      keywords: [
        "AI interior design startup",
        "GenAI product engineer",
        "spatial AI platform",
        "PropTech AI development",
      ],
    },
  },

  // ─── HEADLESS & EDGE COMMERCE ────────────────────────────────────────────────

  {
    slug: "headless-commerce",
    id: "06",
    category: "Headless & Edge Commerce",
    tag: "Headless & Edge Commerce",
    title: "High-Performance Headless Storefront (Coom Endem)",
    titleRu: "Высокопроизводительный Headless Storefront (Coom Endem)",
    shortDescription:
      "Fully decoupled headless e-commerce: Next.js 16 App Router frontend + WordPress/WooCommerce API backend. Sub-120ms TTFB, 95+ Lighthouse score, zero layout shift, Docker Compose one-command setup.",
    shortDescriptionRu:
      "Полностью разделенная headless-архитектура интернет-магазина: витрина на Next.js 16 App Router + бэкенд на WordPress/WooCommerce API. Отклик TTFB <120 мс, 95+ баллов Lighthouse, Docker Compose запуск.",
    fullDescription:
      "A production-ready, fully decoupled headless e-commerce architecture that separates the Next.js 16 storefront from the WordPress + WooCommerce backend. The frontend uses SSG + ISR for near-perfect Core Web Vitals regardless of backend load. The WordPress admin and database live behind an internal Docker network — the public internet never touches /wp-admin/ or MySQL directly.",
    fullDescriptionRu:
      "Продакшн-архитектура headless e-commerce: витрина на Next.js 16 полностью отделена от панели WooCommerce. Фронтенд использует SSG + ISR для мгновенной отдачи с Edge-сети. База данных и админка спрятаны во внутренней сети Docker и недоступны извне.",
    problem:
      "Traditional WooCommerce stores couple frontend and backend tightly — the same server that holds the database also renders every page. This creates performance ceilings, security exposure, and scaling costs that compound as traffic grows.",
    problemRu:
      "Монолитный WooCommerce объединяет админку и рендеринг страниц на одном сервере, создавая проблемы с безопасностью, медленный TTFB и высокие затраты на серверы при росте трафика.",
    solution:
      "Decoupled architecture: Next.js 16 App Router frontend with SSG + ISR deploys to edge networks (Vercel/Netlify) handling millions of pageviews for free. WordPress serves only API requests from Next.js via WooCommerce REST API. Entire stack containerized with Docker Compose for zero-config local development and VPS deployment.",
    solutionRu:
      "Декомпозиция: витрина на Next.js с ISR выдерживает пиковые нагрузки на Edge-сети с TTFB <120 мс, а WordPress только отдает данные по REST API. Полная изоляция в Docker Compose исключает прямой доступ злоумышленников к базе данных.",
    metrics: "<120ms TTFB · 95+ Lighthouse · Zero Layout Shift",
    metricsRu: "<120 мс TTFB · 95+ Lighthouse · Zero Layout Shift",
    metricsBreakdown: [
      {
        label: "Edge TTFB",
        labelRu: "Отклик Edge TTFB",
        value: "<120ms",
        desc: "Next.js SSG + ISR on Vercel edge network",
        descRu: "Мгновенная отдача страниц из глобальной Edge-сети",
      },
      {
        label: "Lighthouse Score",
        labelRu: "Оценка Lighthouse",
        value: "95+",
        desc: "Performance, Accessibility, Best Practices, SEO",
        descRu: "Зеленая зона: производительность, доступность, SEO",
      },
      {
        label: "CLS",
        labelRu: "Сдвиг макета (CLS)",
        value: "0.000",
        desc: "Zero cumulative layout shift",
        descRu: "Абсолютно стабильный интерфейс без рывков контента",
      },
      {
        label: "Attack Surface",
        labelRu: "Поверхность атаки",
        value: "Minimal",
        desc: "WordPress admin never publicly exposed",
        descRu: "Панель wp-admin и MySQL скрыты от публичной сети",
      },
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "WordPress (Headless CMS)",
      "WooCommerce REST API",
      "Docker Compose",
      "ISR (Incremental Static Regeneration)",
    ],
    highlights: [
      "Complete frontend/backend decoupling — WordPress admin is invisible to the public internet",
      "ISR (Incremental Static Regeneration) updates product pages without full rebuilds",
      "Shop managers keep their familiar WordPress admin — no code changes required",
      "One-command local setup: `docker-compose up` spins the full stack",
      "Edge deployment to Vercel/Netlify handles any traffic spike without backend scaling",
      "WooCommerce REST API + JWT authentication for secure server-side data fetching",
    ],
    highlightsRu: [
      "Полное разделение фронтенда и бэкенда: админка WordPress полностью скрыта от интернета",
      "ISR (Incremental Static Regeneration) обновляет карточки товаров без пересборки всего сайта",
      "Менеджеры работают в привычном интерфейсе WooCommerce без необходимости изучать код",
      "Запуск одной командой `docker-compose up` для локальной разработки и VPS-продакшна",
      "Глобальная сеть Edge CDN без труда справляется с наплывом трафика во время распродаж",
      "Авторизация по JWT для безопасных серверных запросов к WooCommerce REST API",
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/maoroch/headless-commerce-platform",
        type: "github",
      },
      {
        label: "Architecture Spec",
        url: "https://contra.com/ilyas_salimov_j7tpcm02",
        type: "case-study",
      },
    ],
    seo: {
      title: "Headless Commerce Platform — Next.js 16 + WooCommerce Architecture | Ilyas Salimov",
      description:
        "Case study: headless e-commerce architecture for CTOs and e-commerce Founders. Sub-120ms TTFB, 95+ Lighthouse, decoupled Next.js 16 + WordPress/WooCommerce. Built by Founding Engineer Ilyas Salimov. Docker Compose, ISR, edge deployment.",
      keywords: [
        "headless e-commerce development",
        "Next.js WooCommerce architect",
        "headless commerce CTO",
        "e-commerce startup architecture",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectTitle(project: Project, lang: Language): string {
  return lang === "ru" && project.titleRu ? project.titleRu : project.title;
}

export function getProjectShortDesc(project: Project, lang: Language): string {
  return lang === "ru" && project.shortDescriptionRu ? project.shortDescriptionRu : project.shortDescription;
}

export function getProjectMetrics(project: Project, lang: Language): string {
  return lang === "ru" && project.metricsRu ? project.metricsRu : project.metrics;
}

export function getProjectProblem(project: Project, lang: Language): string {
  return lang === "ru" && project.problemRu ? project.problemRu : project.problem;
}

export function getProjectSolution(project: Project, lang: Language): string {
  return lang === "ru" && project.solutionRu ? project.solutionRu : project.solution;
}

export function getProjectHighlights(project: Project, lang: Language): string[] {
  return lang === "ru" && project.highlightsRu ? project.highlightsRu : project.highlights;
}
