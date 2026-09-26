import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        paddingTop: 60,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 24px",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 80,
            color: "var(--border-light)",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 32,
            color: "var(--text)",
            marginBottom: 12,
          }}
        >
          Page not found
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 36 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "var(--accent)",
            textDecoration: "none",
            fontSize: 13,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <ArrowLeft size={13} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
