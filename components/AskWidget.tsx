"use client";

import { useState, useRef, useEffect } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What has Suman built with LLMs?",
  "Why is he a fit for an AI PM role?",
  "Walk me through his fintech experience.",
];

export default function AskWidget() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(question: string) {
    const q = question.trim();
    if (!q || loading) return;
    setError(null);
    const next = [...messages, { role: "user" as const, content: q }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setMessages((m) => [...m, { role: "assistant", content: data.text }]);
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const started = messages.length > 0;

  return (
    <div className="ask">
      <div className="ask-head">
        <span className="ask-dot" aria-hidden />
        Ask about my work
      </div>

      {started && (
        <div className="ask-thread" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`bubble ${m.role}`}>
              {m.content}
            </div>
          ))}
          {loading && <div className="bubble assistant thinking">Thinking…</div>}
        </div>
      )}

      {!started && (
        <div className="ask-suggests">
          {SUGGESTIONS.map((s) => (
            <button key={s} className="chip" onClick={() => send(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="ask-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="Ask anything about Suman…"
          aria-label="Ask about Suman"
        />
        <button onClick={() => send(input)} disabled={loading || !input.trim()}>
          Ask
        </button>
      </div>

      {error && <p className="ask-error">{error}</p>}
      <p className="ask-note">Answers are generated live from Suman&rsquo;s work history.</p>
    </div>
  );
}
