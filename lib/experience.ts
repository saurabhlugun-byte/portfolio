// Experience timeline data. Text comes from resume/resume.html; keep the two
// (and lib/profile.ts) in sync. Each lens shows the first two bullets tagged
// with it, and bolds that bullet's `key` phrase (must be a substring of text).

export type Lens = "startup" | "enterprise";

export type Bullet = {
  text: string;
  lenses: Lens[];
  key?: string;
};

export type Entry = {
  title: string;
  org: string;
  location?: string;
  dates: string;
  education?: boolean;
  bullets: Bullet[];
};

export const EXPERIENCE: Entry[] = [
  {
    title: "Independent AI Product Builder",
    org: "Self-directed",
    location: "Bengaluru",
    dates: "Jun 2026 – Present",
    bullets: [
      {
        text: "Built RupeeScope solo in 6 weeks, from scope to closed beta, with Claude Code as engineering partner; also building Jalsa, a party app approved on Google Play and awaiting its 12-tester closed test before public release.",
        lenses: ["startup"],
        key: "solo in 6 weeks, from scope to closed beta",
      },
      {
        text: "Designed an eval harness before the parser: 14 real statements with hand-transcribed ground truth, regression runs on every parser or prompt change, a 2-statement held-out set never used for tuning, and cost, latency and escalation rate logged per run.",
        lenses: ["startup", "enterprise"],
        key: "eval harness before the parser",
      },
      {
        text: "Shipped privacy-first: statements processed in memory only, one-click deletion, row-level security on every table, separate dev/prod environments and a pre-launch security audit.",
        lenses: ["enterprise"],
        key: "privacy-first",
      },
    ],
  },
  {
    title: "Deputy Vice President, New Product Development & Innovation",
    org: "KFin Technologies",
    location: "Hyderabad",
    dates: "May 2025 – Jun 2026",
    bullets: [
      {
        text: "Initiated a Cash Management System for AMCs and PMS with Axis MF: requirements discovery with their COO and operations team, an interactive prototype in Figma AI, and kickoff of development.",
        lenses: ["startup"],
        key: "Initiated a Cash Management System",
      },
      {
        text: "Owned a new-product and innovation charter for the domestic mutual-fund business, driving discovery-to-prototype on new platform bets (GenAI, ONDC, CDP).",
        lenses: ["startup"],
        key: "discovery-to-prototype",
      },
      {
        text: "Led a team of 2 senior managers on the new-product and innovation charter for the domestic mutual-fund business.",
        lenses: ["enterprise"],
        key: "Led a team of 2 senior managers",
      },
      {
        text: "Led a build-vs-buy evaluation of omnichannel CRM/CDP and AI contact-centre platforms (Salesforce, UNFYD), including data-residency assessment.",
        lenses: ["enterprise"],
        key: "build-vs-buy evaluation",
      },
      {
        text: "Directed early development of an AI/LLM-based compliance tool that parses regulatory circulars into remediation tasks.",
        lenses: ["enterprise"],
        key: "AI/LLM-based compliance tool",
      },
    ],
  },
  {
    title: "Senior Product Manager (E-commerce Head)",
    org: "Emami Frank Ross",
    location: "Kolkata",
    dates: "Mar 2021 – Dec 2024",
    bullets: [
      {
        text: "Launched a dark store with 25K+ SKUs on top of 100+ existing stores, integrating WMS and 3PLs for delivery across 1100+ pincodes.",
        lenses: ["startup"],
        key: "Launched a dark store",
      },
      {
        text: "Led end-to-end mobile app development; payment-mode integrations cut cancellations 27% and raised AOV 35%.",
        lenses: ["startup"],
        key: "cut cancellations 27% and raised AOV 35%",
      },
      {
        text: "Built an omni-channel POS–OMS platform for real-time inventory, lifting fulfilment from 70% to 94% with 91% on-time deliveries.",
        lenses: ["enterprise"],
        key: "lifting fulfilment from 70% to 94%",
      },
      {
        text: "Ran sprint planning and backlog grooming, improved API performance 50% with APM tooling, and set up CleverTap/GA analytics and real-time KPI dashboards.",
        lenses: ["enterprise"],
        key: "improved API performance 50%",
      },
    ],
  },
  {
    title: "Manager, Digital Transformation & Investor Products",
    org: "KFin Technologies",
    location: "Hyderabad",
    dates: "Apr 2018 – Feb 2021",
    bullets: [
      {
        text: "Led development and GTM of a B2B Loan-Against-Securities API for banks and fintechs across 200M+ folios, iterating on integration feedback toward product-market fit.",
        lenses: ["startup"],
        key: "development and GTM",
      },
      {
        text: "Implemented ML-powered cheque data entry and RPA to automate reconciliation and credit identification.",
        lenses: ["startup"],
        key: "ML-powered cheque data entry and RPA",
      },
      {
        text: "Integrated identity and account validation for 1M+ daily transactions; partnered with the COO and business heads on operational efficiency.",
        lenses: ["enterprise"],
        key: "1M+ daily transactions",
      },
      {
        text: "Led investor-portal development unifying onboarding and portfolio view across 26 AMCs.",
        lenses: ["enterprise"],
        key: "across 26 AMCs",
      },
    ],
  },
  {
    title: "MBA",
    org: "Indian Institute of Management Bangalore",
    dates: "Graduated 2018",
    education: true,
    bullets: [],
  },
  {
    title: "Software Engineer",
    org: "Samsung R&D Institute",
    location: "Noida",
    dates: "Jul 2014 – May 2016",
    bullets: [
      {
        text: "Built browser and page-preloading features for Smart TV, cutting rendering time 50%.",
        lenses: ["startup", "enterprise"],
        key: "cutting rendering time 50%",
      },
      {
        text: "Built automated sanity-testing controllers, saving 40+ hours of manual effort a month.",
        lenses: ["startup"],
        key: "saving 40+ hours",
      },
      {
        text: "Contributed to Tizen browser development with teams in Korea and Poland.",
        lenses: ["enterprise"],
        key: "teams in Korea and Poland",
      },
    ],
  },
];
