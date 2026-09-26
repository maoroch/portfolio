"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { useState } from "react";

const categoryLabels: Record<string, string> = {
  crm: "CRM",
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI",
  fullstack: "Full Stack",
  uiux: "UI/UX",
};

export default function ProjectCard({ project, isMobile = false }: { project: Project; isMobile?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/portfolio/${project.id}`}
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        style={{
          border: "1px solid var(--border)",
          borderColor: hovered ? "var(--border-light)" : "var(--border)",
          backgroundColor: hovered ? "var(--bg-2)" : "transparent",
          padding: isMobile ? "20px 16px" : "28px 32px",
          transition: "all 0.2s",
          display: isMobile ? "flex" : "grid",
          gridTemplateColumns: isMobile ? undefined : "1fr auto",
          flexDirection: isMobile ? "column" : undefined,
          alignItems: isMobile ? "stretch" : "start",
          gap: isMobile ? 16 : 24,
          marginBottom: -1,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                border: "1px solid var(--accent-dim)",
                backgroundColor: "var(--accent-bg)",
                padding: "2px 8px",
                borderRadius: 2,
              }}
            >
              {categoryLabels[project.category] || project.category}
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--text-subtle)",
              }}
            >
              {project.year}
            </span>
          </div>
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: isMobile ? 18 : 22,
              color: hovered ? "var(--text)" : "var(--text)",
              marginBottom: 8,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <p style={{ 
            color: "var(--text-muted)", 
            fontSize: isMobile ? 13 : 13, 
            lineHeight: 1.6, 
            maxWidth: isMobile ? "100%" : 560,
            marginBottom: 12,
          }}>
            {project.subtitle}
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
            {project.stack.slice(0, isMobile ? 3 : 5).map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                  padding: "2px 8px",
                  borderRadius: 2,
                }}
              >
                {tech}
              </span>
            ))}
            {project.stack.length > (isMobile ? 3 : 5) && (
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--text-subtle)" }}>
                +{project.stack.length - (isMobile ? 3 : 5)}
              </span>
            )}
          </div>
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            border: "1px solid var(--border-light)",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginTop: isMobile ? 8 : 4,
            backgroundColor: hovered ? "var(--accent-bg)" : "transparent",
            borderColor: hovered ? "var(--accent-dim)" : "var(--border-light)",
            transition: "all 0.2s",
            alignSelf: isMobile ? "flex-start" : "auto",
          }}
        >
          <ArrowUpRight size={16} color={hovered ? "var(--accent)" : "var(--text-muted)"} />
        </div>
      </article>
    </Link>
  );
}
