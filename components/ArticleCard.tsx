"use client";

import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  image?: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/articles/${article.slug}`} style={{ textDecoration: "none" }}>
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "start",
          gap: "24px 40px",
          padding: "28px 0",
          borderBottom: "1px solid var(--border)",
          cursor: "pointer",
          position: "relative",
          transition: "all 0.2s ease",
        }}
        className="article-card-row"
      >
        {/* Left: content */}
        <div style={{ minWidth: 0 }}>
          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-subtle)",
              }}
            >
              {date}
            </span>
            <span
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                backgroundColor: "var(--border-light)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                color: "var(--text-subtle)",
              }}
            >
              <Clock size={10} />
              {article.readingTime} min
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(17px, 2.2vw, 22px)",
              color: "var(--text)",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              marginBottom: 10,
              transition: "color 0.2s ease",
            }}
            className="article-card-title"
          >
            {article.title}
          </h2>

          {/* Excerpt */}
          <p
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.65,
              marginBottom: 16,
              maxWidth: 560,
            }}
          >
            {article.excerpt}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-subtle)",
                  border: "1px solid var(--border)",
                  padding: "2px 8px",
                  borderRadius: 2,
                  backgroundColor: "var(--bg-2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: arrow */}
        <div
          style={{
            width: 36,
            height: 36,
            border: "1px solid var(--border)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginTop: 28,
            transition: "all 0.2s ease",
            backgroundColor: "transparent",
          }}
          className="article-card-arrow"
        >
          <ArrowUpRight size={14} color="var(--text-muted)" />
        </div>
      </article>

      <style jsx>{`
        .article-card-row:hover .article-card-title {
          color: var(--accent) !important;
        }
        .article-card-row:hover .article-card-arrow {
          background-color: var(--accent-bg) !important;
          border-color: var(--accent-dim) !important;
        }
        .article-card-row:first-of-type {
          border-top: 1px solid var(--border);
        }
      `}</style>
    </Link>
  );
}