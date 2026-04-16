"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    id: "drums",
    label: "DRUMS",
    sub: "Kicks, hats, percusión",
    desc: "De los kicks de Tresor a los patrones industriales. Parámetros exactos para cada subgénero.",
    href: "/library?cat=DRUMS",
  },
  {
    id: "sound-design",
    label: "SOUND DESIGN",
    sub: "Synths, basslines, efectos",
    desc: "Acid 303, dub chords, ruido blanco industrial. Construye sonidos que definen géneros.",
    href: "/library?cat=SOUND DESIGN",
  },
  {
    id: "arrangement",
    label: "ARRANGEMENT",
    sub: "Estructura, tensión, drops",
    desc: "Club-ready en 6-8 minutos. Tensión quirúrgica, drops que aplanan floors.",
    href: "/library?cat=ARRANGEMENT",
  },
  {
    id: "dj-styles",
    label: "DJ STYLES",
    sub: "Técnicas de artistas reales",
    desc: "Charlotte, Amelie, Ben Klock, Adam Beyer. Deconstruye su sonido exacto.",
    href: "/library?cat=DJ STYLES",
  },
];

const steps = [
  { n: "01", title: "Browse", desc: "Elige técnica por subgénero techno" },
  { n: "02", title: "Learn", desc: "Parámetros exactos de Ableton, valores numéricos" },
  { n: "03", title: "Ask AI", desc: "Describe tu problema, recibe solución Pro" },
];

export default function LandingPage() {

  return (
    <div style={{ background: "#0a0a0a", color: "#ffffff" }}>
      {/* ── HERO ── */}
      <section
        className="grid-bg"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            background: "radial-gradient(ellipse, rgba(255,77,0,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", position: "relative" }}
        >
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(80px, 16vw, 200px)",
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              marginBottom: "40px",
            }}
          >
            PRODKT
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 19px)",
              color: "#666666",
              marginBottom: "52px",
              letterSpacing: "0.01em",
            }}
          >
            Production techniques for electronic music.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <Link
              href="/library"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                background: "#ff4d00",
                padding: "14px 40px",
                textDecoration: "none",
                transition: "opacity 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.85")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              Browse Techniques →
            </Link>
            <Link
              href="/assistant"
              style={{
                fontSize: "12px",
                color: "#444",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#ff4d00")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#444")
              }
            >
              or ask AI →
            </Link>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          style={{ position: "absolute", bottom: "32px" }}
        >
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #ff4d00, transparent)" }} />
        </motion.div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "100px 24px", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif"
            style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#ff4d00", marginBottom: "16px", textTransform: "uppercase" }}
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: "64px" }}
          >
            Three steps to your sound
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "#1a1a1a" }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: "#0a0a0a", padding: "48px 40px" }}
              >
                <div className="font-serif" style={{ fontSize: "11px", color: "#ff4d00", letterSpacing: "0.2em", marginBottom: "28px" }}>
                  {s.n}
                </div>
                <h3 className="font-serif" style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.7" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: "100px 24px", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif"
            style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#ff4d00", marginBottom: "16px", textTransform: "uppercase" }}
          >
            Explore
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: "64px" }}
          >
            Everything you need
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "#1a1a1a" }}>
            {categories.map((cat, i) => (
              <motion.a
                key={cat.id}
                href={cat.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: "#0a0a0a",
                  padding: "48px 40px",
                  textDecoration: "none",
                  display: "block",
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.2s, background 0.2s",
                  cursor: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#ff4d00";
                  (e.currentTarget as HTMLElement).style.background = "#111";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  (e.currentTarget as HTMLElement).style.background = "#0a0a0a";
                }}
              >
                <div className="font-serif" style={{ fontSize: "11px", color: "#ff4d00", letterSpacing: "0.2em", marginBottom: "16px" }}>
                  {cat.sub}
                </div>
                <h3 className="font-serif" style={{ fontSize: "22px", fontWeight: 700, marginBottom: "16px" }}>
                  {cat.label}
                </h3>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.7" }}>{cat.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "100px 24px", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif"
            style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#ff4d00", marginBottom: "16px", textTransform: "uppercase" }}
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: "64px" }}
          >
            Simple. No bullshit.
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#1a1a1a" }}>
            {/* FREE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ background: "#0a0a0a", padding: "56px 40px" }}
            >
              <div className="font-serif" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#555", marginBottom: "20px" }}>
                FREE
              </div>
              <div className="font-serif" style={{ fontSize: "52px", fontWeight: 700, marginBottom: "6px" }}>
                €0
              </div>
              <div style={{ fontSize: "13px", color: "#444", marginBottom: "40px" }}>forever</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
                {["Biblioteca completa sin límites", "Todas las técnicas y parámetros", "Búsqueda y filtros avanzados", "Sin cuenta necesaria"].map((f) => (
                  <li key={f} style={{ fontSize: "14px", color: "#666", display: "flex", gap: "10px" }}>
                    <span style={{ color: "#ff4d00" }}>—</span>{f}
                  </li>
                ))}
              </ul>
              <Link
                href="/library"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  border: "1px solid #333",
                  padding: "12px 24px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "#ff4d00")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "#333")
                }
              >
                Start Free →
              </Link>
            </motion.div>

            {/* PRO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ background: "#0d0d0d", padding: "56px 40px", borderLeft: "2px solid #ff4d00" }}
            >
              <div className="font-serif" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#ff4d00", marginBottom: "20px" }}>
                PRO
              </div>
              <div className="font-serif" style={{ fontSize: "52px", fontWeight: 700, marginBottom: "6px" }}>
                €14
              </div>
              <div style={{ fontSize: "13px", color: "#444", marginBottom: "40px" }}>per month</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
                {[
                  "Todo lo del plan Free",
                  "Asistente IA ilimitado",
                  "Técnicas estilo DJ famoso",
                  "Historial de conversaciones",
                  "Favoritos y dashboard",
                ].map((f) => (
                  <li key={f} style={{ fontSize: "14px", color: "#999", display: "flex", gap: "10px" }}>
                    <span style={{ color: "#ff4d00" }}>—</span>{f}
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0a0a0a",
                  background: "#ff4d00",
                  padding: "12px 24px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "1")
                }
              >
                Get Pro →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
