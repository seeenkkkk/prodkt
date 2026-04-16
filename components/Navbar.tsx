"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/library", label: "Library" },
  { href: "/assistant", label: "Assistant" },
  { href: "/#pricing", label: "Pricing" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: "1px solid #1a1a1a",
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-serif"
          style={{
            fontSize: "20px",
            color: "#ffffff",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          PRODKT
        </Link>

        {/* Links */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: path === href ? "#ff4d00" : "#888888",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#ff4d00")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  path === href ? "#ff4d00" : "#888888")
              }
            >
              {label}
            </Link>
          ))}

          <Link
            href="/login"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              background: "#ff4d00",
              padding: "8px 16px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
