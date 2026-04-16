import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are an expert techno music producer and sound engineer with deep knowledge of Ableton Live.

When the user describes a sound, problem, or technique they want to achieve:
- Respond with EXACT numerical parameters for Ableton Live
- Be direct and specific: frequencies in Hz, ratios, milliseconds, percentages
- Structure your answer with clear steps if needed
- No music theory fluff — only actionable production advice
- Mix Spanish and English naturally if the user writes in Spanish
- Keep answers focused and practical

You know intimately: dark techno, industrial, dub techno, hard techno, minimal, melodic techno, acid techno. You understand Ableton's devices deeply (Compressor, EQ Eight, Saturator, Operator, Analog, Drum Rack, returns/sends, automation, Groove Pool, etc.)`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const formatted = messages.map((m: { role: string; content: string }) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: formatted,
  });

  const content =
    response.content[0].type === "text" ? response.content[0].text : "";

  return NextResponse.json({ content });
}
