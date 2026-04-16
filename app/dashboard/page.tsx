"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", paddingTop: "80px", padding: "80px 24px 40px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-serif" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#ff4d00", marginBottom: "12px" }}>
            DASHBOARD
          </p>
          <h1 className="font-serif" style={{ fontSize: "40px", fontWeight: 700, marginBottom: "48px" }}>
            Your workspace
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "#1a1a1a", marginBottom: "48px" }}>
            {[
              { label: "Favorites", count: "0", desc: "Saved techniques" },
              { label: "AI Chats", count: "0", desc: "Conversation history" },
              { label: "Plan", count: "Free", desc: "Upgrade to Pro for AI" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#0a0a0a", padding: "40px 32px" }}>
                <div className="font-serif" style={{ fontSize: "11px", color: "#444", letterSpacing: "0.15em", marginBottom: "16px", textTransform: "uppercase" }}>
                  {s.label}
                </div>
                <div className="font-serif" style={{ fontSize: "40px", fontWeight: 700, marginBottom: "8px" }}>
                  {s.count}
                </div>
                <div style={{ fontSize: "13px", color: "#444" }}>{s.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/library"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fff",
                border: "1px solid #333",
                padding: "12px 24px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#ff4d00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#333")}
            >
              Browse Library →
            </Link>
            <Link
              href="/assistant"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                background: "#ff4d00",
                padding: "12px 24px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Open AI Assistant →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
