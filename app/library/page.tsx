"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { techniques, Category } from "@/lib/techniques";

const ALL_CATS: (Category | "ALL")[] = ["ALL", "DRUMS", "SOUND DESIGN", "ARRANGEMENT", "DJ STYLES", "MIXING", "PLUGINS"];

const levelColor: Record<string, string> = {
  beginner: "#22c55e",
  intermediate: "#f59e0b",
  advanced: "#ef4444",
};

function LibraryContent() {
  const params = useSearchParams();
  const initialCat = (params.get("cat") as Category) || "ALL";

  const [cat, setCat] = useState<Category | "ALL">(initialCat);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const c = params.get("cat") as Category;
    if (c) setCat(c);
  }, [params]);

  const filtered = useMemo(() => {
    return techniques.filter((t) => {
      const matchCat = cat === "ALL" || t.category === cat;
      const matchQ =
        !query ||
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.subgenre.toLowerCase().includes(query.toLowerCase()) ||
        t.description?.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [cat, query]);

  return (
    <div style={{ background: "#0a0a0a", color: "#ffffff", minHeight: "100vh", paddingTop: "80px" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid #1a1a1a", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p className="font-serif" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#ff4d00", marginBottom: "12px", textTransform: "uppercase" }}>
            Library
          </p>
          <h1 className="font-serif" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, marginBottom: "32px" }}>
            Production techniques
          </h1>

          {/* Search */}
          <input
            type="text"
            placeholder="Search techniques, subgenres..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "480px",
              background: "#111",
              border: "1px solid #222",
              color: "#fff",
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "13px",
              padding: "12px 16px",
              outline: "none",
              marginBottom: "32px",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#ff4d00")}
            onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#222")}
          />

          {/* Filters */}
          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            {ALL_CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "8px 16px",
                  border: "1px solid",
                  borderColor: cat === c ? "#ff4d00" : "#222",
                  background: cat === c ? "#ff4d00" : "transparent",
                  color: cat === c ? "#0a0a0a" : "#555",
                  cursor: "none",
                  transition: "all 0.2s",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
        <p className="font-serif" style={{ fontSize: "11px", color: "#444", letterSpacing: "0.1em", marginBottom: "32px" }}>
          {filtered.length} technique{filtered.length !== 1 ? "s" : ""}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#1a1a1a" }}>
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={`/library/${t.id}`}
                style={{
                  display: "block",
                  background: "#0a0a0a",
                  padding: "32px",
                  textDecoration: "none",
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.2s, background 0.2s",
                  cursor: "none",
                  height: "100%",
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
                {/* Category + Pro badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span className="font-serif" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#ff4d00", textTransform: "uppercase" }}>
                    {t.category}
                  </span>
                  {t.isPro && (
                    <span className="font-serif" style={{ fontSize: "9px", letterSpacing: "0.12em", color: "#0a0a0a", background: "#ff4d00", padding: "3px 8px" }}>
                      PRO
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif" style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "8px", lineHeight: "1.3" }}>
                  {t.title}
                </h3>

                {/* Subgenre */}
                <p style={{ fontSize: "13px", color: "#444", marginBottom: "20px" }}>{t.subgenre}</p>

                {/* Meta */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "11px", color: levelColor[t.level], fontFamily: "var(--font-sans), sans-serif", textTransform: "capitalize" }}>
                    {t.level}
                  </span>
                  {t.bpm && (
                    <span style={{ fontSize: "11px", color: "#333", fontFamily: "var(--font-sans), sans-serif" }}>
                      {t.bpm} BPM
                    </span>
                  )}
                  {t.time && (
                    <span style={{ fontSize: "11px", color: "#333", fontFamily: "var(--font-sans), sans-serif" }}>
                      {t.time}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p className="font-serif" style={{ color: "#333", fontSize: "14px" }}>No techniques found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  return (
    <Suspense fallback={<div style={{ background: "#0a0a0a", minHeight: "100vh" }} />}>
      <LibraryContent />
    </Suspense>
  );
}
