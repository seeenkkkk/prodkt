"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const EXAMPLES = [
  "My kick sounds muddy at 130 BPM, how do I fix it?",
  "Cómo hacer un bassline de dub techno que tenga espacio",
  "What's the exact sidechain ratio for dark techno?",
  "Give me the Charlotte de Witte hi-hat pattern",
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text?: string) => {
    const msg = text ?? input.trim();
    if (!msg || loading) return;
    setInput("");

    const next: Message[] = [...messages, { role: "user", content: msg }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.content }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Error connecting to AI. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#0a0a0a",
        color: "#fff",
        minHeight: "100vh",
        paddingTop: "56px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ borderBottom: "1px solid #1a1a1a", padding: "32px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p className="font-serif" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#ff4d00", marginBottom: "8px" }}>
            AI ASSISTANT — PRO
          </p>
          <h1 className="font-serif" style={{ fontSize: "28px", fontWeight: 700 }}>
            Describe your problem
          </h1>
          <p style={{ fontSize: "14px", color: "#444", marginTop: "8px" }}>
            Exact Ableton parameters. No tutorials. No fluff.
          </p>
        </div>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, maxWidth: "800px", width: "100%", margin: "0 auto", padding: "32px 24px", display: "flex", flexDirection: "column" }}>
        {/* Empty state */}
        {messages.length === 0 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p className="font-serif" style={{ fontSize: "12px", color: "#333", letterSpacing: "0.1em", marginBottom: "20px" }}>
              TRY ASKING
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  onClick={() => send(ex)}
                  style={{
                    background: "#0d0d0d",
                    border: "1px solid #1a1a1a",
                    color: "#555",
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "13px",
                    padding: "14px 16px",
                    textAlign: "left",
                    cursor: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#ff4d00";
                    (e.currentTarget as HTMLElement).style.color = "#ccc";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#1a1a1a";
                    (e.currentTarget as HTMLElement).style.color = "#555";
                  }}
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.length > 0 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px", paddingBottom: "24px" }}>
            <AnimatePresence>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                    maxWidth: "85%",
                  }}
                >
                  {m.role === "assistant" && (
                    <div className="font-serif" style={{ fontSize: "10px", color: "#ff4d00", letterSpacing: "0.12em", marginBottom: "8px" }}>
                      PRODKT AI
                    </div>
                  )}
                  <div
                    style={{
                      background: m.role === "user" ? "#ff4d00" : "#111",
                      color: m.role === "user" ? "#0a0a0a" : "#ccc",
                      padding: "14px 18px",
                      fontFamily: m.role === "user" ? "var(--font-sans), sans-serif" : "'Inter', sans-serif",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      whiteSpace: "pre-wrap",
                      borderLeft: m.role === "assistant" ? "2px solid #ff4d00" : "none",
                    }}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ alignSelf: "flex-start" }}>
                <div className="font-serif" style={{ fontSize: "10px", color: "#ff4d00", letterSpacing: "0.12em", marginBottom: "8px" }}>
                  PRODKT AI
                </div>
                <div style={{ background: "#111", borderLeft: "2px solid #ff4d00", padding: "14px 18px", display: "flex", gap: "6px", alignItems: "center" }}>
                  {[0, 1, 2].map((d) => (
                    <motion.div
                      key={d}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: d * 0.2 }}
                      style={{ width: "6px", height: "6px", background: "#ff4d00", borderRadius: "50%" }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            <div ref={bottomRef} />
          </div>
        )}

        {/* Input */}
        <div
          style={{
            borderTop: messages.length > 0 ? "1px solid #1a1a1a" : "none",
            paddingTop: messages.length > 0 ? "20px" : "0",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Describe your sound or problem..."
              style={{
                flex: 1,
                background: "#111",
                border: "1px solid #222",
                color: "#fff",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "13px",
                padding: "14px 16px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#ff4d00")}
              onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#222")}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              style={{
                background: input.trim() && !loading ? "#ff4d00" : "#1a1a1a",
                border: "none",
                color: input.trim() && !loading ? "#0a0a0a" : "#333",
                padding: "0 20px",
                cursor: "none",
                transition: "background 0.2s, color 0.2s",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
