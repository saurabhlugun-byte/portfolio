// Experience timeline data. Text comes from the résumé; keep this, the résumé
// and lib/profile.ts in sync. Bullets are in priority order: the first
// HIGHLIGHTS of each role are always shown, the rest sit behind "Show more".

export const HIGHLIGHTS = 2;

export type Entry = {
  title: string;
  org: string;
  location?: string;
  dates: string;
  education?: boolean;
  bullets: string[];
};

export const EXPERIENCE: Entry[] = [
  {
    title: "Independent AI Product Builder",
    org: "Self-directed",
    location: "Bengaluru",
    dates: "Jun 2026 – Present",
    bullets: [
      "Built RupeeScope solo in 6 weeks, from scope to closed beta, with Claude Code as engineering partner; also building Jalsa, a party app approved on Google Play and awaiting its 12-tester closed test before public release.",
      "Designed an eval harness before the parser: 14 real statements with hand-transcribed ground truth, regression runs on every parser or prompt change, a 2-statement held-out set never used for tuning, and cost, latency and escalation rate logged per run.",
      "Shipped privacy-first: statements processed in memory only, one-click deletion, row-level security on every table, separate dev/prod environments and a pre-launch security audit.",
      "Routed models per task (Haiku for classification, Sonnet for structuring and text-to-SQL, Opus only on checksum failure) through one metered gateway with per-user cost caps.",
      "Built a rules-first classification waterfall (user rules → merchant dictionary → LLM only for residual rows) over a 15-category taxonomy, with cross-account transfer matching to remove double-counted spend.",
    ],
  },
  {
    title: "Deputy Vice President, New Product Development & Innovation",
    org: "KFin Technologies",
    location: "Hyderabad",
    dates: "May 2025 – Jun 2026",
    bullets: [
      "Owned the new-product and innovation charter for the domestic mutual-fund business (GenAI, ONDC, CDP), leading a team of 2 senior managers from discovery to prototype.",
      "Initiated a Cash Management System for AMCs and PMS with Axis MF: requirements discovery with their COO and operations team, an interactive prototype in Figma AI, and kickoff of development.",
      "Directed early development of an AI/LLM-based compliance tool that parses regulatory circulars into remediation tasks.",
      "Led a build-vs-buy evaluation of omnichannel CRM/CDP and AI contact-centre platforms (Salesforce, UNFYD), including data-residency assessment.",
    ],
  },
  {
    title: "Senior Product Manager (E-commerce Head)",
    org: "Emami Frank Ross",
    location: "Kolkata",
    dates: "Mar 2021 – Dec 2024",
    bullets: [
      "Launched a dark store with 25K+ SKUs on top of 100+ existing stores, integrating WMS and 3PLs for delivery across 1100+ pincodes; led end-to-end mobile app development.",
      "Built an omni-channel POS–OMS platform for real-time inventory, lifting fulfilment from 70% to 94% with 91% on-time deliveries.",
      "Payment-mode integrations cut cancellations 27% and raised AOV 35%; a recommendation system lifted add-to-cart events 4%.",
      "Ran sprint planning and backlog grooming, and improved API performance 50% with APM tooling.",
      "Set up behavioural analytics (CleverTap, Google Analytics) and real-time KPI dashboards.",
      "Partnered with the digital marketing team on SEO, a promotion engine and cohort-based performance marketing to improve acquisition, engagement and retention.",
      "Collaborated with designers on a website revamp to improve repeat-user experience and discoverability.",
    ],
  },
  {
    title: "Manager, Digital Transformation & Investor Products",
    org: "KFin Technologies",
    location: "Hyderabad",
    dates: "Apr 2018 – Feb 2021",
    bullets: [
      "Led development and GTM of a B2B Loan-Against-Securities API for banks and fintechs across 200M+ folios, iterating on integration feedback toward product-market fit.",
      "Unified onboarding and portfolio view across 26 mutual-fund AMCs in one investor app; integrated identity and account validation for 1M+ daily transactions.",
      "Implemented ML-powered cheque data entry and RPA to automate reconciliation and credit identification.",
      "Partnered with the COO and business heads on operational-efficiency initiatives.",
      "Enhanced in-app communication to improve investor engagement across touchpoints.",
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
      "Built browser and page-preloading features for Smart TV, cutting rendering time 50%.",
      "Built automated sanity-testing controllers, saving 40+ hours of manual effort a month.",
      "Contributed to Tizen browser development with teams in Korea and Poland.",
    ],
  },
];
