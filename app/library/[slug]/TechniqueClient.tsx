"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Technique } from "@/lib/techniques";

const levelColor: Record<string, string> = {
  beginner: "#22c55e",
  intermediate: "#f59e0b",
  advanced: "#ef4444",
};

interface Props {
  technique: Technique;
  related: Technique[];
}

export default function TechniqueClient({ technique: t, related }: Props) {
  return (
    <div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", paddingTop: "80px" }}>
      {/* Breadcrumb */}
      <div style={{ padding: "24px 24px 0", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Link
            href="/library"
            className="font-serif"
            style={{ fontSize: "11px", color: "#444", textDecoration: "none", letterSpacing: "0.1em" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ff4d00")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#444")}
          >
            LIBRARY
          </Link>
          <span className="font-serif" style={{ fontSize: "11px", color: "#222" }}>→</span>
          <span className="font-serif" style={{ fontSize: "11px", color: "#ff4d00", letterSpacing: "0.1em" }}>
            {t.category}
          </span>
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px 48px", borderBottom: "1px solid #1a1a1a" }}
      >
        <h1 className="font-serif" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, marginBottom: "24px", lineHeight: "1.1" }}>
          {t.title}
        </h1>

        {t.description && (
          <p style={{ fontSize: "17px", color: "#666", lineHeight: "1.7", marginBottom: "32px", maxWidth: "680px" }}>
            {t.description}
          </p>
        )}

        {/* Meta badges */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "11px",
              color: levelColor[t.level],
              border: `1px solid ${levelColor[t.level]}22`,
              padding: "4px 12px",
              textTransform: "capitalize",
            }}
          >
            {t.level}
          </span>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "11px", color: "#444", border: "1px solid #1a1a1a", padding: "4px 12px" }}>
            {t.subgenre}
          </span>
          {t.bpm && (
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "11px", color: "#444", border: "1px solid #1a1a1a", padding: "4px 12px" }}>
              {t.bpm} BPM
            </span>
          )}
          {t.time && (
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "11px", color: "#444", border: "1px solid #1a1a1a", padding: "4px 12px" }}>
              ⏱ {t.time}
            </span>
          )}
        </div>
      </motion.div>

      {/* Content */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px" }}>
        {/* Steps */}
        {t.steps && t.steps.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: "56px" }}
          >
            <h2 className="font-serif" style={{ fontSize: "13px", letterSpacing: "0.15em", color: "#ff4d00", marginBottom: "28px", textTransform: "uppercase" }}>
              Step by step
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              {t.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "20px 0",
                    borderBottom: "1px solid #111",
                    alignItems: "flex-start",
                  }}
                >
                  <span className="font-serif" style={{ fontSize: "11px", color: "#ff4d00", minWidth: "28px", paddingTop: "2px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "15px", color: "#ccc", lineHeight: "1.7", flex: 1 }}>{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Ableton Params */}
        {t.abletonParams && Object.keys(t.abletonParams).length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              background: "#0d0d0d",
              border: "1px solid #1a1a1a",
              borderLeft: "2px solid #ff4d00",
              padding: "32px",
              marginBottom: "56px",
            }}
          >
            <h2 className="font-serif" style={{ fontSize: "13px", letterSpacing: "0.15em", color: "#ff4d00", marginBottom: "24px", textTransform: "uppercase" }}>
              Ableton parameters
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
              {Object.entries(t.abletonParams).map(([key, val]) => (
                <div key={key}>
                  <div className="font-serif" style={{ fontSize: "10px", color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>
                    {key}
                  </div>
                  <div className="font-serif" style={{ fontSize: "14px", color: "#ffffff" }}>
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="font-serif" style={{ fontSize: "13px", letterSpacing: "0.15em", color: "#ff4d00", marginBottom: "24px", textTransform: "uppercase" }}>
              Related techniques
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "#1a1a1a" }}>
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/library/${r.id}`}
                  style={{
                    background: "#0a0a0a",
                    padding: "24px",
                    textDecoration: "none",
                    display: "block",
                    borderBottom: "2px solid transparent",
                    transition: "border-color 0.2s, background 0.2s",
                    cursor: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#ff4d00";
                    (e.currentTarget as HTMLElement).style.background = "#0f0f0f";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                    (e.currentTarget as HTMLElement).style.background = "#0a0a0a";
                  }}
                >
                  <div className="font-serif" style={{ fontSize: "10px", color: "#ff4d00", letterSpacing: "0.15em", marginBottom: "8px" }}>
                    {r.category}
                  </div>
                  <h4 className="font-serif" style={{ fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                    {r.title}
                  </h4>
                  <p style={{ fontSize: "12px", color: "#444" }}>{r.subgenre}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
