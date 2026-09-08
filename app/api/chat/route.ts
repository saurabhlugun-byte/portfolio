import { NextResponse } from "next/server";
import { PROFILE } from "@/lib/profile";

// Change the model here if you like. Haiku is cheap + fast for a portfolio bot;
// swap to "claude-sonnet-4-5" for richer answers.
const MODEL = "claude-haiku-4-5-20251001";

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing ANTHROPIC_API_KEY. Add it to .env.local (local) or your Vercel project env vars." },
      { status: 500 }
    );
  }

  let messages: Msg[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Keep the conversation short + well-formed.
  const trimmed = messages
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-10);

  if (trimmed.length === 0 || trimmed[trimmed.length - 1].role !== "user") {
    return NextResponse.json({ error: "Send at least one user message." }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 600,
        system: PROFILE,
        messages: trimmed,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return NextResponse.json(
        { error: "Upstream error from Anthropic API.", detail },
        { status: 502 }
      );
    }

    const data = await res.json();
    const text = Array.isArray(data?.content)
      ? data.content.filter((b: any) => b?.type === "text").map((b: any) => b.text).join("\n").trim()
      : "";

    return NextResponse.json({ text: text || "Sorry — I couldn't generate a response. Try rephrasing?" });
  } catch (err: any) {
    return NextResponse.json({ error: "Request failed.", detail: String(err?.message ?? err) }, { status: 500 });
  }
}
