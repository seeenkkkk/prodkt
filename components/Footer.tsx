"use client";
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1a1a1a",
        padding: "32px 24px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "14px",
            color: "#444",
          }}
        >
          PRODKT © 2025
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "11px",
                color: "#444",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#ff4d00")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#444")
              }
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
