import Link from "next/link";
import AskWidget from "@/components/AskWidget";

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
        <AskWidget />
      </header>

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
              An LLM-powered tool that turns raw bank statements into spending
              insights. I own the product strategy, the prompt and eval design for
              genuinely messy financial data. Built
              solo in six weeks on Next.js, Supabase and Vercel. In closed beta at{' '}
              <a href="https://rupeescope.com" target="_blank" rel="noreferrer">
                rupeescope.com
              </a>
              .
            </p>
            <p className="item-link">
              <Link href="/rupeescope">Read the case study →</Link>
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
              Implemented ML-powered cheque data entry and RPA for banking
              processes, automating reconciliation and credit identification
              across multiple bank accounts.
            </p>
          </article>
          <article className="item">
            <div className="item-head">
              <h3>Omni-channel commerce — Emami Frank Ross</h3>
              <span className="tag">Scale · 1100+ pincodes</span>
            </div>
            <p>
              Built a dark-store fulfilment model and a POS-to-OMS platform that
              lifted order fulfilment from 70% to 94%, plus payment-mode
              integrations that raised AOV 35%.
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
          Longer write-ups on what I&rsquo;m learning are on the way.
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
