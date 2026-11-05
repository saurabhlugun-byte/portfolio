// Skills shown on the site. Every item must also be in lib/profile.ts
// (the full record); the one-page résumé shows a smaller subset.
// `where` is shown as a hover hint.

export type Skill = { name: string; where?: string };

export const SKILLS: { group: string; items: Skill[] }[] = [
  {
    group: "AI / ML",
    items: [
      { name: "LLM application design", where: "RupeeScope" },
      { name: "Prompt engineering", where: "RupeeScope" },
      { name: "LLM evals", where: "RupeeScope" },
      { name: "Structured outputs", where: "RupeeScope" },
      { name: "Model routing & cost tradeoffs", where: "RupeeScope" },
      { name: "Text-to-SQL", where: "RupeeScope" },
      { name: "Recommendation systems", where: "Emami Frank Ross" },
      { name: "ML document capture", where: "KFin Technologies" },
      { name: "RPA", where: "KFin Technologies" },
    ],
  },
  {
    group: "Product",
    items: [
      { name: "0-to-1 products" },
      { name: "Strategy & roadmaps" },
      { name: "Discovery & requirements" },
      { name: "Agile / Scrum" },
      { name: "B2B API GTM", where: "KFin Technologies" },
      { name: "Funnel optimization", where: "Emami Frank Ross" },
      { name: "Cohort targeting", where: "Emami Frank Ross" },
      { name: "Product analytics", where: "Emami Frank Ross" },
      { name: "Build-vs-buy evaluation", where: "KFin Technologies" },
    ],
  },
  {
    group: "Commerce & fintech systems",
    items: [
      { name: "POS–OMS", where: "Emami Frank Ross" },
      { name: "WMS & 3PL", where: "Emami Frank Ross" },
      { name: "Payment gateways", where: "Emami Frank Ross" },
      { name: "Identity & account validation", where: "KFin Technologies" },
    ],
  },
  {
    group: "Tools & stack",
    items: [
      { name: "Claude API" },
      { name: "Claude Code" },
      { name: "Next.js" },
      { name: "Supabase / PostgreSQL" },
      { name: "Vercel" },
      { name: "SQL" },
      { name: "Python" },
      { name: "JIRA" },
      { name: "CleverTap" },
      { name: "Google Analytics" },
      { name: "Figma AI" },
    ],
  },
];
