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
  { n: "03", title: "Apply", desc: "Aplica en tu DAW y ajusta a tu sonido" },
];

/* ─── Vinyl record SVG ─────────────────────────────────── */
function VinylRecord({ size }: { size: number }) {
  const cx = size / 2;
  const r = size / 2;
  const grooves = [0.92, 0.86, 0.80, 0.74, 0.68, 0.62, 0.56, 0.50, 0.44, 0.38];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {/* Outer rim */}
      <circle cx={cx} cy={cx} r={r - 1} stroke="white" strokeWidth="2" />
      {/* Groove rings */}
      {grooves.map((frac, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cx}
          r={r * frac}
          stroke="white"
          strokeWidth={i === 0 ? "1" : "0.4"}
          opacity={i === 0 ? "0.5" : "0.3"}
        />
      ))}
      {/* Label circle */}
      <circle cx={cx} cy={cx} r={r * 0.26} stroke="white" strokeWidth="1.5" opacity="0.6" />
      <circle cx={cx} cy={cx} r={r * 0.25} fill="rgba(255,255,255,0.04)" />
      {/* Spindle hole */}
      <circle cx={cx} cy={cx} r={r * 0.025} fill="rgba(255,255,255,0.7)" />
    </svg>
  );
}

/* tilt: static 3D perspective wrapper · spin: rotation child */
function Vinyl({
  size,
  tiltX,
  tiltY,
  duration,
  style,
}: {
  size: number;
  tiltX: number;
  tiltY: number;
  duration: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        transform: `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        ...style,
      }}
    >
      <div style={{ animation: `vinyl-spin ${duration}s linear infinite` }}>
        <VinylRecord size={size} />
      </div>
    </div>
  );
}

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
        {/* Radial glow */}
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

        {/* ── 3D Vinyl records ── */}
        {/* Top-left — large, heavy tilt, slow */}
        <Vinyl
          size={520}
          tiltX={62}
          tiltY={-18}
          duration={38}
          style={{ top: "-80px", left: "-140px", opacity: 0.08 }}
        />
        {/* Top-right — medium, different angle */}
        <Vinyl
          size={380}
          tiltX={58}
          tiltY={22}
          duration={52}
          style={{ top: "30px", right: "-100px", opacity: 0.07 }}
        />
        {/* Bottom-left — medium-large */}
        <Vinyl
          size={440}
          tiltX={68}
          tiltY={-8}
          duration={44}
          style={{ bottom: "-60px", left: "-60px", opacity: 0.07 }}
        />
        {/* Bottom-right — small accent */}
        <Vinyl
          size={280}
          tiltX={55}
          tiltY={30}
          duration={30}
          style={{ bottom: "40px", right: "-30px", opacity: 0.09 }}
        />
        {/* Center-left — ghost vinyl, very subtle */}
        <Vinyl
          size={600}
          tiltX={72}
          tiltY={5}
          duration={60}
          style={{ top: "50%", left: "-200px", transform: "translateY(-50%)", opacity: 0.04 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(80px, 16vw, 200px)",
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              marginBottom: "12px",
            }}
          >
            PRODKT
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#333",
              textTransform: "uppercase",
              marginBottom: "36px",
            }}
          >
            by senk
          </p>

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

      {/* ── SOCIAL ── */}
      <section style={{ borderTop: "1px solid #1a1a1a", padding: "48px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", letterSpacing: "0.2em", color: "#333", textTransform: "uppercase" }}>
            by senk
          </p>
          <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            {/* Instagram */}
            <a
              href="https://instagram.com/seeenkkkk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#444", fontFamily: "var(--font-sans), sans-serif", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ff4d00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#444")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              seeenkkkk
            </a>

            <span style={{ color: "#1a1a1a", fontSize: "16px" }}>·</span>

            {/* SoundCloud */}
            <a
              href="https://soundcloud.com/senk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#444", fontFamily: "var(--font-sans), sans-serif", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ff4d00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#444")}
            >
              <svg width="18" height="12" viewBox="0 0 40 20" fill="currentColor">
                <path d="M0 14.5c0 1.9 1.5 3.5 3.4 3.5s3.4-1.6 3.4-3.5c0-.2 0-.4-.1-.6C7 14 7.2 14 7.5 14c1.4 0 2.5-1.1 2.5-2.5 0-.5-.1-1-.4-1.4.1-.3.2-.6.2-.9 0-1.7-1.4-3-3.1-3-.2 0-.5 0-.7.1C5.4 4.6 3.7 3 1.7 3 .8 3 0 3.8 0 4.7v9.8zm10.5.2V9.5c.5-.4 1.1-.5 1.8-.5 1.9 0 3.4 1.5 3.4 3.4 0 .5-.1 1-.3 1.4.2.4.3.8.3 1.3 0 1.4-1.1 2.5-2.5 2.5-.9 0-1.7-.5-2.2-1.2-.2.1-.3.1-.5.1v.2zm6 .5V8c.6-.6 1.4-1 2.3-1 1.9 0 3.4 1.5 3.4 3.4v4.8c-.5.6-1.3 1-2.2 1-.9 0-1.7-.4-2.2-1h-.3v-.5zm6-1V7c.6-.7 1.5-1.2 2.5-1.2 1.9 0 3.5 1.6 3.5 3.5v6c-.6.7-1.5 1.2-2.5 1.2-1.9 0-3.5-1.6-3.5-3.5v-.5zm7 1V6c.6-.8 1.5-1.3 2.6-1.3 1.9 0 3.4 1.5 3.4 3.4v7c-.6.8-1.5 1.3-2.6 1.3-1.9 0-3.4-1.5-3.4-3.4z"/>
              </svg>
              senk
            </a>

            <span style={{ color: "#1a1a1a", fontSize: "16px" }}>·</span>

            {/* Spotify */}
            <a
              href="https://open.spotify.com/artist/senk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#444", fontFamily: "var(--font-sans), sans-serif", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ff4d00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#444")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              senk
            </a>
          </div>
          <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", color: "#222", letterSpacing: "0.1em" }}>
            © 2025 PRODKT
          </p>
        </div>
      </section>
    </div>
  );
}
