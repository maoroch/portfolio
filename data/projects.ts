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
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  metrics: string;
  metricsBreakdown: { label: string; value: string; desc: string }[];
  stack: string[];
  highlights: string[];
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
    shortDescription:
      "Multi-tenant content generation, design & publishing platform for LinkedIn, Instagram, Threads and Telegram — powered by microservice AI agents, RAG fact-grounding, and Kubernetes scale-to-zero.",
    fullDescription:
      "An autonomous, multi-tenant content engineering platform that replaces a full content agency (copywriter, designer, SMM manager) at 10% of the cost. The system generates publish-ready posts with styled carousels in under 20 seconds, enforces brand safety via RAG fact-grounding, and deploys on Azure K3s + KEDA for scale-to-zero cloud economics.",
    problem:
      "Creating verified B2B content for LinkedIn, Telegram, and Instagram traditionally requires a full agency team — copywriter, domain expert, graphic designer, editor, SMM manager — costing $3,000–$10,000+/month with a 2–3 day cycle per post.",
    solution:
      "A microservice AI graph orchestrated by OpenClaw via BullMQ/Redis: an AI writer produces copy grounded in a RAG fact database, a Puppeteer carousel renderer creates 1080×1350 branded images, a Telegram bot delivers a mobile HITL moderation cockpit, and a self-correction evaluator re-generates posts scoring below 85% alignment.",
    metrics: "20s Generation · 90% Cost Reduction · Scale-to-Zero",
    metricsBreakdown: [
      { label: "Content Generation", value: "20s", desc: "End-to-end from prompt to publish-ready post" },
      { label: "Cost Reduction", value: "90%", desc: "vs. traditional content agency pricing" },
      { label: "Cloud Infra", value: "Scale-to-Zero", desc: "KEDA event-driven autoscaling on K3s + Azure" },
      { label: "Hallucination Rate", value: "~0%", desc: "RAG-grounded facts + numeric validation" },
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
      "GitHub Actions",
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
        "LLM pipeline engineer",
        "founding engineer AI",
      ],
    },
  },

  {
    slug: "fintech-compliance",
    id: "02",
    category: "AI Agents & Pipelines",
    tag: "AI Agents & Pipelines",
    title: "Autonomous Credit Covenant & Compliance Agent",
    shortDescription:
      "Enterprise-grade AI agent for automated verification of corporate credit loan agreements — 93.3% exact match accuracy, 1.65ms BM25 retrieval, 86.9% token reduction on 50-page legal contracts.",
    fullDescription:
      "A deterministic single-process AI agent system that autonomously ingests unstructured credit dossier documents (PDFs, Audit Notes, KYC files) alongside raw multi-currency bank ledgers, extracts contractual covenant definitions, applies auditor period cut-offs, and calculates 100% exact numerical metric compliance down to the cent.",
    problem:
      "Financial institutions spend thousands of hours manually auditing loan dossiers to verify covenant compliance (Leverage Ratios, Capex Limits, Related-Party Transaction Caps). Human error rates are high, and each audit cycle takes days.",
    solution:
      "A modular, decoupled pipeline: multithreaded PDF ingestion with OCR fallback → deterministic regex + LLM classifier → Okapi BM25 paragraph ranker → sandboxed Python arithmetic engine (zero LLM math) → multi-currency FX calculation → automated HTML compliance report & executive dashboard.",
    metrics: "93.3% Accuracy · 1.65ms Retrieval · 86.9% Token Reduction",
    metricsBreakdown: [
      { label: "Accuracy", value: "93.3%", desc: "Exact match vs. official ground truth down to the cent" },
      { label: "BM25 Retrieval", value: "1.65ms", desc: "Average search latency per document" },
      { label: "Token Reduction", value: "86.9%", desc: "Input token savings on 50-page legal contracts" },
      { label: "Math Errors", value: "0.00%", desc: "Sandboxed Python arithmetic, zero LLM math" },
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
        "AI compliance startup",
        "Python AI pipeline",
        "BM25 document retrieval",
        "KYC AML automation",
        "founding engineer FinTech",
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
    shortDescription:
      "Production-ready full-stack Learning Management System — multi-role (students, teachers, admins), native Stripe payments, trilingual UI (EN/RU/KZ), MinIO file storage, Redis job queues.",
    fullDescription:
      "A full-stack e-learning platform where teachers create and publish courses with modules, video lessons, and assignments; students browse, purchase via Stripe Checkout (auto-enrolled on payment), submit homework, and receive certificates; admins manage users and issue refunds auto-triggered in Stripe. Containerized with Docker Compose for zero-config deployment.",
    problem:
      "EdTech startups need a production-grade LMS that handles payments, multi-role access control, file storage at scale, and multilingual audiences — without stitching together five separate SaaS tools.",
    solution:
      "A decoupled Next.js 16 + Express 5 + PostgreSQL 16 stack: JWT auth with refresh tokens, Stripe Checkout + webhook enrollment, MinIO for binary-free PostgreSQL, Redis + BullMQ for background jobs, Nginx reverse proxy with rate limiting, and trilingual UI (EN/RU/KZ) built on a custom i18n hook.",
    metrics: "Multi-Role SaaS · Stripe Webhooks · 3-Language UI",
    metricsBreakdown: [
      { label: "User Roles", value: "3", desc: "Students, Teachers, Admins with granular permissions" },
      { label: "Languages", value: "3", desc: "EN / RU / KZ trilingual UI" },
      { label: "Payments", value: "Stripe", desc: "Checkout Sessions + auto-enrollment webhooks" },
      { label: "Storage", value: "MinIO", desc: "S3-compatible object storage, PostgreSQL stays clean" },
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
      "Redux Toolkit",
      "Tailwind CSS v4",
      "Docker Compose",
      "Nginx",
      "PDFKit",
    ],
    highlights: [
      "Stripe Checkout + webhook auto-enrollment: students gain access the moment payment is confirmed",
      "MinIO object storage keeps PostgreSQL free of binary blobs at any scale",
      "Redis + BullMQ background queues for async certificate generation and email jobs",
      "Multi-stage non-root Dockerfiles — CI-ready and security-hardened",
      "Swagger API documentation (swagger-jsdoc + swagger-ui-express)",
      "Trilingual UI with custom i18n hook — no third-party i18n library needed",
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
        "startup LMS development",
        "founding engineer SaaS",
        "Next.js full-stack architect",
        "PostgreSQL SaaS",
        "e-learning platform startup",
        "CTO SaaS solutions",
      ],
    },
  },

  {
    slug: "logistics-erp",
    id: "04",
    category: "SaaS & Platform Engineering",
    tag: "SaaS & Platform Engineering",
    title: "Real-Time Multi-City Logistics ERP & Dispatch Engine",
    shortDescription:
      "End-to-end multi-tenant logistics platform featuring live driver telemetry via Redis SSE, 3-tier Row-Level Security (RLS), automated ledger reconciliation, and 4-city dispatch coverage.",
    fullDescription:
      "A production logistics ERP and dispatch management system built for a regional logistics operator covering 4 cities. Features a real-time driver tracking dashboard (sub-300ms updates via Redis SSE), multi-tenant data isolation using PostgreSQL Row-Level Security, automated financial ledger reconciliation, and a React Native mobile app for drivers.",
    problem:
      "Regional logistics operators managing multi-city fleets need real-time dispatch visibility, strict multi-tenant data isolation between clients, and automated financial reconciliation — without off-the-shelf enterprise software costing $50k+/year.",
    solution:
      "A multi-tenant Next.js + Express backend with Redis Server-Sent Events for sub-300ms live telemetry, PostgreSQL RLS enforcing 3-tier RBAC (admin/operator/driver), a React Native driver app synced via the same API, and an automated ledger reconciliation engine that closes books nightly.",
    metrics: "<300ms Live Sync · 3-Tier RBAC · 4-City Coverage",
    metricsBreakdown: [
      { label: "Live Telemetry", value: "<300ms", desc: "Redis SSE push to all connected dashboards" },
      { label: "RBAC Tiers", value: "3", desc: "Admin / Operator / Driver with PostgreSQL RLS" },
      { label: "City Coverage", value: "4", desc: "Multi-tenant isolation per regional branch" },
      { label: "Reconciliation", value: "Automated", desc: "Nightly ledger close with audit trail" },
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
        "PostgreSQL RLS security",
        "startup logistics platform",
        "CTO logistics solutions",
        "founding engineer ERP",
        "React Native logistics app",
        "live telemetry dashboard",
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
    shortDescription:
      "Upload a floor plan → multi-agent AI performs CV segmentation, builds a wall topology graph, applies a computational math engine (golden ratio, ergonomics, photometry), and generates a 60fps 3D interior.",
    fullDescription:
      "A next-generation web platform where users upload apartment/house blueprints and a multi-agent AI system performs computer vision segmentation, builds a topological wall graph, applies a Computational Math Engine (golden ratio, SMPTE ergonomics, force-directed spring solver, photometric lighting calculation), and renders an interactive 60fps Three.js/React Three Fiber 3D interior with walk-mode camera and drag-and-drop furniture.",
    problem:
      "Professional interior design costs $5,000–$50,000 per project and takes weeks. Existing AI tools generate aesthetically pretty but spatially incorrect rooms that violate ergonomics, furniture clearances, and building code minimum passages.",
    solution:
      "A Bayesian Scale Estimator converts pixels to meters without manual calibration. A Shapely CAD compiler enforces 22cm wall buffers, 55cm ergonomic passages, and door swing radius protection. Three parallel style variants (Modern, Japandi, Luxury) are generated simultaneously with PDF export.",
    metrics: "60fps 3D Canvas · 3 Style Variants · PDF Export",
    metricsBreakdown: [
      { label: "3D Rendering", value: "60fps", desc: "Three.js / React Three Fiber interactive canvas" },
      { label: "Style Variants", value: "3", desc: "Modern / Japandi / Luxury generated in parallel" },
      { label: "Ergonomics", value: "SMPTE", desc: "TV viewing distance, 55cm furniture passages" },
      { label: "Color System", value: "60-30-10", desc: "Photometric lux + Kelvin calculation per room" },
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
        "Three.js 3D product",
        "founding engineer GenAI",
        "computer vision interior design",
        "FastAPI AI platform",
        "CTO GenAI solutions",
        "multimodal AI product",
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
    shortDescription:
      "Fully decoupled headless e-commerce: Next.js 16 App Router frontend + WordPress/WooCommerce API backend. Sub-120ms TTFB, 95+ Lighthouse score, zero layout shift, Docker Compose one-command setup.",
    fullDescription:
      "A production-ready, fully decoupled headless e-commerce architecture that separates the Next.js 16 storefront from the WordPress + WooCommerce backend. The frontend uses SSG + ISR for near-perfect Core Web Vitals regardless of backend load. The WordPress admin and database live behind an internal Docker network — the public internet never touches /wp-admin/ or MySQL directly.",
    problem:
      "Traditional WooCommerce stores couple frontend and backend tightly — the same server that holds the database also renders every page. This creates performance ceilings, security exposure, and scaling costs that compound as traffic grows.",
    solution:
      "Decoupled architecture: Next.js 16 App Router frontend with SSG + ISR deploys to edge networks (Vercel/Netlify) handling millions of pageviews for free. WordPress serves only API requests from Next.js via WooCommerce REST API. Entire stack containerized with Docker Compose for zero-config local development and VPS deployment.",
    metrics: "<120ms TTFB · 95+ Lighthouse · Zero Layout Shift",
    metricsBreakdown: [
      { label: "Edge TTFB", value: "<120ms", desc: "Next.js SSG + ISR on Vercel edge network" },
      { label: "Lighthouse Score", value: "95+", desc: "Performance, Accessibility, Best Practices, SEO" },
      { label: "CLS", value: "0.000", desc: "Zero cumulative layout shift" },
      { label: "Attack Surface", value: "Minimal", desc: "WordPress admin never publicly exposed" },
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
        "headless WordPress Next.js",
        "founding engineer e-commerce",
        "edge commerce performance",
        "ISR Next.js storefront",
        "Docker e-commerce deployment",
        "Core Web Vitals e-commerce",
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
