import AskWidget from "@/components/AskWidget";

export default function Home() {
  return (
    <main className="wrap">
      {/* Hero */}
      <header className="hero">
        <p className="kicker">AI Product Manager · Bengaluru</p>
        <h1>Suman Saurabh Lugun</h1>
        <p className="lede">
          Nine years shaping products across FinTech and eCommerce — now building
          AI-first products hands-on with LLMs. I ship the unglamorous parts:
          messy real-world data, evals, and the cost and latency tradeoffs that
          decide whether an AI feature is actually usable.
        </p>
        <AskWidget />
      </header>

      {/* Building now */}
      <section className="block">
        <h2>Building now</h2>
        <div className="items">
          <article className="item">
            <div className="item-head">
              <h3>
                <a href="https://rupeescope.com" target="_blank" rel="noreferrer">
                  Personal Finance Analyzer
                </a>
              </h3>
              <span className="tag">Live · rupeescope.com</span>
            </div>
            <p>
              An LLM-powered tool that turns raw bank statements into spending
              insights. I own the product strategy, the prompt and eval design for
              genuinely messy financial data, a freemium go-to-market, and a
              build-in-public loop. Next.js, Supabase, Vercel. Live now at{' '}
              <a href="https://rupeescope.com" target="_blank" rel="noreferrer">
                rupeescope.com
              </a>
              .
            </p>
          </article>
          <article className="item">
            <div className="item-head">
              <h3>Jalsa</h3>
              <span className="tag">Shipping to app stores</span>
            </div>
            <p>
              A pass-the-phone party app for an India-aware audience, being
              packaged for the Play Store and App Store via Capacitor.
            </p>
          </article>
        </div>
      </section>

      {/* Selected work */}
      <section className="block">
        <h2>Selected work</h2>
        <div className="items">
          <article className="item">
            <div className="item-head">
              <h3>Cash Management System — KFin × Axis MF</h3>
              <span className="tag">0-to-1 · 2025–26</span>
            </div>
            <p>
              Initiated a platform to serve AMCs and PMS across India. Ran
              requirements discovery directly with the client&rsquo;s leadership,
              prototyped in Figma AI, and kicked off the build before handoff.
            </p>
          </article>
          <article className="item">
            <div className="item-head">
              <h3>ML document-extraction + RPA — KFin</h3>
              <span className="tag">FinTech automation</span>
            </div>
            <p>
              Owned an ML pipeline for cheque and data capture with RPA to
              automate reconciliation and credit identification across bank
              accounts — improving accuracy and turnaround while cutting errors.
            </p>
          </article>
          <article className="item">
            <div className="item-head">
              <h3>Omni-channel commerce — Emami Frank Ross</h3>
              <span className="tag">Scale · 1100+ pincodes</span>
            </div>
            <p>
              Built a dark-store fulfilment model and a POS-to-OMS platform that
              lifted order fulfilment from 70% to 94%, plus a personalized
              recommendation engine that raised AOV 35%.
            </p>
          </article>
        </div>
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
          A longer set of write-ups is on the way — I write in public as I build.
        </p>
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
