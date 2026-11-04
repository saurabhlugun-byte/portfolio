import Link from "next/link";
import AskWidget from "@/components/AskWidget";
import Experience from "@/components/Experience";

const SKILLS = [
  {
    group: "AI / LLM",
    items: ["LLM application design", "Prompt engineering", "LLM evals", "Structured outputs", "Model selection & cost tradeoffs", "Text-to-SQL", "Claude API", "Claude Code"],
  },
  {
    group: "Product",
    items: ["0-to-1 products", "Roadmaps", "Discovery & requirements", "Agile / Scrum", "GTM"],
  },
  {
    group: "Stack",
    items: ["SQL", "Python", "Next.js", "Supabase / PostgreSQL", "Vercel"],
  },
];

const IMPACT = [
  { value: "70% → 94%", context: "Order fulfilment, omni-channel POS–OMS platform · Emami Frank Ross" },
  { value: "+35%", context: "AOV from payment-mode integrations · Emami Frank Ross" },
  { value: "200M+", context: "Folios covered by a B2B Loan-Against-Securities API · KFin" },
  { value: "26", context: "Mutual-fund AMCs unified in one investor app · KFin" },
  { value: "1M+", context: "Daily transactions with identity & account validation · KFin" },
  { value: "50%", context: "Faster Smart TV page rendering · Samsung R&D" },
];

export default function Home() {
  return (
    <main className="wrap">
      {/* Hero */}
      <header className="hero">
        <p className="kicker">Product Leader · Bengaluru</p>
        <h1>Suman Saurabh Lugun</h1>
        <p className="lede">
          A decade shaping products across FinTech and eCommerce — now building
          AI-first products hands-on with LLMs. I ship the unglamorous parts:
          messy real-world data, evals, and the cost and latency tradeoffs that
          decide whether an AI feature is actually usable.
        </p>
        <div className="hero-meta">
          <p className="open-to">Open to product roles building AI-first products · Bengaluru</p>
          <a className="chip resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">
            Download résumé
          </a>
        </div>
        <AskWidget />
      </header>

      {/* Impact at a glance */}
      <section className="block">
        <h2>Impact at a glance</h2>
        <div className="impact">
          {IMPACT.map((i) => (
            <div className="impact-item" key={i.value}>
              <div className="impact-value">{i.value}</div>
              <div className="impact-context">{i.context}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Building now */}
      <section className="block">
        <h2>Building now</h2>
        <div className="items">
          <article className="item">
            <div className="item-head">
              <div>
                <h3>
                  <a href="https://rupeescope.com" target="_blank" rel="noreferrer">
                    RupeeScope
                  </a>
                </h3>
                <span className="subtitle">Personal Finance Analyzer</span>
              </div>
              <span className="tag">In closed beta · rupeescope.com</span>
            </div>
            <p>
              Turns password-protected Indian bank and card statements into an
              accurate spending view across accounts. The LLM reads messy
              statements; deterministic checks make sure every number balances. I
              owned scope, evals, model and cost tradeoffs, and privacy design, and
              built it solo in six weeks with Claude Code.
            </p>
            <ul className="decisions">
              <li>The model reads; code calculates.</li>
              <li>A statement that doesn&rsquo;t balance never gets imported.</li>
              <li>Rules first, LLM only for what rules miss.</li>
            </ul>
            <p className="item-link">
              <Link href="/rupeescope">Read the case study →</Link>
            </p>
          </article>
          <article className="item">
            <div className="item-head">
              <h3>Jalsa</h3>
              <span className="tag">Pre-launch · Google Play</span>
            </div>
            <p>
              A pass-the-phone party app for an India-aware audience. Approved on
              Google Play; the 12-tester closed test required before public
              release is still pending.
            </p>
          </article>
        </div>
      </section>

      {/* Experience */}
      <section className="block">
        <h2>Experience</h2>
        <Experience />
      </section>

      {/* POV */}
      <section className="block">
        <h2>How I think about AI products</h2>
        <p className="pov">
          Most AI features die in the gap between a slick demo and a reliable
          product. I spend my time in that gap — on evals that catch the failure
          modes real users hit, on the data plumbing nobody screenshots, and on
          the honest cost-per-query math that tells you whether a feature can
          survive contact with production. Domain matters too: I&rsquo;ve worked
          deep in mutual-fund infrastructure and pharmacy eCommerce, and I think
          the health-data-meets-AI intersection is badly underbuilt.
        </p>
        <p className="pov-note">
          Longer write-ups on what I&rsquo;m learning are on the way.
        </p>
      </section>

      {/* Skills & credentials */}
      <section className="block">
        <h2>Skills &amp; credentials</h2>
        {SKILLS.map((g) => (
          <div className="skill-group" key={g.group}>
            <h3>{g.group}</h3>
            <ul className="skill-chips">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <ul className="creds">
          <li>B.Tech, Computer Science &amp; Engineering — IIT Delhi (2014)</li>
          <li>MBA — IIM Bangalore (2018)</li>
          <li>
            Certifications: Machine Learning Foundations for Product Managers ·
            Managing Machine Learning Projects — Duke University
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="foot">
        <a href="mailto:saurabhlugun07@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/suman-saurabh-lugun/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/saurabhlugun-byte" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </main>
  );
}
