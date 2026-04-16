"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        color: "#fff",
        minHeight: "100vh",
        paddingTop: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "56px 24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div style={{ marginBottom: "48px" }}>
          <Link href="/" className="font-serif" style={{ fontSize: "20px", fontWeight: 700, color: "#fff", textDecoration: "none" }}>
            PRODKT
          </Link>
        </div>

        <h1 className="font-serif" style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>
          Sign in
        </h1>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "40px" }}>
          Access your dashboard and AI assistant.
        </p>

        {/* Google OAuth button */}
        <button
          style={{
            width: "100%",
            background: "#111",
            border: "1px solid #222",
            color: "#fff",
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "16px",
            cursor: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            transition: "border-color 0.2s",
            marginBottom: "16px",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#ff4d00")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#222")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        {/* Email */}
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "#1a1a1a" }} />
          <span style={{ position: "relative", background: "#0a0a0a", padding: "0 12px", color: "#333", fontSize: "12px", fontFamily: "var(--font-sans), sans-serif", display: "block", textAlign: "center" }}>
            or
          </span>
        </div>

        <input
          type="email"
          placeholder="your@email.com"
          style={{
            width: "100%",
            background: "#111",
            border: "1px solid #222",
            color: "#fff",
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "13px",
            padding: "14px 16px",
            outline: "none",
            marginBottom: "8px",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#ff4d00")}
          onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#222")}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            background: "#111",
            border: "1px solid #222",
            color: "#fff",
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "13px",
            padding: "14px 16px",
            outline: "none",
            marginBottom: "16px",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#ff4d00")}
          onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#222")}
        />

        <button
          style={{
            width: "100%",
            background: "#ff4d00",
            border: "none",
            color: "#0a0a0a",
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "16px",
            cursor: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          Sign In →
        </button>

        <p style={{ textAlign: "center", marginTop: "24px", fontSize: "13px", color: "#444" }}>
          No account?{" "}
          <Link href="/login" style={{ color: "#ff4d00", textDecoration: "none" }}>
            Create one free
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
