"use client";

import { useState } from "react";
import { EXPERIENCE, HIGHLIGHTS } from "@/lib/experience";

export default function Experience() {
  const [open, setOpen] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <ol className="timeline">
      {EXPERIENCE.map((e) => {
        const id = e.title + e.dates;
        const expanded = open.has(id);
        const extra = e.bullets.length - HIGHLIGHTS;
        const bullets = expanded ? e.bullets : e.bullets.slice(0, HIGHLIGHTS);
        return (
          <li key={id} className={e.education ? "tl-entry edu" : "tl-entry"}>
            <h3>{e.title}</h3>
            <p className="tl-meta">
              {[e.org, e.location].filter(Boolean).join(" · ")}
              <span className="tl-dates">{e.dates}</span>
            </p>
            {bullets.length > 0 && (
              <ul>
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {extra > 0 && (
              <button
                type="button"
                className="tl-more"
                aria-expanded={expanded}
                onClick={() => toggle(id)}
              >
                {expanded ? "Show less ↑" : `Show more ↓`}
              </button>
            )}
          </li>
        );
      })}
    </ol>
  );
}
