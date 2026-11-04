"use client";

import { useState } from "react";
import { EXPERIENCE, type Bullet, type Lens } from "@/lib/experience";

const LENSES: { id: Lens; label: string }[] = [
  { id: "startup", label: "Startup lens" },
  { id: "enterprise", label: "Enterprise lens" },
];

function BulletText({ bullet }: { bullet: Bullet }) {
  const i = bullet.key ? bullet.text.indexOf(bullet.key) : -1;
  if (!bullet.key || i < 0) return <>{bullet.text}</>;
  return (
    <>
      {bullet.text.slice(0, i)}
      <strong>{bullet.key}</strong>
      {bullet.text.slice(i + bullet.key.length)}
    </>
  );
}

export default function Experience() {
  const [lens, setLens] = useState<Lens>("startup");

  return (
    <>
      <div className="lens" role="group" aria-label="Choose which bullets to show">
        {LENSES.map((l) => (
          <button
            key={l.id}
            type="button"
            className={lens === l.id ? "chip active" : "chip"}
            aria-pressed={lens === l.id}
            onClick={() => setLens(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>

      <ol className="timeline">
        {EXPERIENCE.map((e) => {
          const bullets = e.bullets.filter((b) => b.lenses.includes(lens)).slice(0, 2);
          return (
            <li key={e.title + e.dates} className={e.education ? "tl-entry edu" : "tl-entry"}>
              <h3>{e.title}</h3>
              <p className="tl-meta">
                {[e.org, e.location].filter(Boolean).join(" · ")}
                <span className="tl-dates">{e.dates}</span>
              </p>
              {bullets.length > 0 && (
                <ul>
                  {bullets.map((b) => (
                    <li key={b.text}>
                      <BulletText bullet={b} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}
