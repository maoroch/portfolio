'use client'
import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import { useState, useEffect } from "react";


export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: isMobile ? "40px 16px" : "48px 24px",
        marginTop: isMobile ? 60 : 80,
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? 32 : 24,
        }}
      >
        {/* Логотип + текст по центру */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Code2 size={isMobile ? 20 : 24} color="var(--accent)" strokeWidth={1.5} />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: isMobile ? 13 : 14,
              letterSpacing: "0.04em",
              color: "var(--text-muted)",
            }}
          >
            Full Stack Developer · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}