import type { Metadata } from "next";
import Link from "next/link";
import CaseFigure, { imageExists } from "@/components/CaseFigure";

export const metadata: Metadata = {
  title: "RupeeScope case study — Suman Saurabh Lugun",
  description:
    "How I built RupeeScope solo in six weeks: an LLM pipeline for Indian bank statements, gated by a checksum and measured with evals.",
};

// ---------------------------------------------------------------------------
// Editable facts. Anything left null is simply not shown; the "The numbers"
// section appears once at least one value is filled in.
// Use real, unrounded figures only. Keep lib/profile.ts in sync.
// ---------------------------------------------------------------------------
const DEV_WEEKS = "six";

const NUMBERS: { label: string; value: string | null; note?: string }[] = [
  { label: "Checksum pass rate", value: null, note: "golden set, first attempt" },
  { label: "Classification accuracy", value: null, note: "type / category, labelled set" },
  { label: "Cost per statement", value: null, note: "average, all LLM calls" },
  { label: "Escalation rate", value: null, note: "share of imports escalated to Opus" },
];

// Set to true only if the held-out set was actually run (shows the paragraph).
const HELD_OUT_SET_RUN = false;

// Images: drop files at these paths under public/ and they appear on next build.
// The Screenshots section stays hidden until at least one exists.
const SCREENSHOTS = [
  { src: "rupeescope/upload.png", alt: "RupeeScope statement upload screen", caption: "Upload: password-protected PDF, never stored." },
  { src: "rupeescope/dashboard.png", alt: "RupeeScope spending dashboard in demo mode", caption: "Spending analysis (demo data)." },
  { src: "rupeescope/review.png", alt: "RupeeScope transaction review in demo mode", caption: "Transaction review and categories (demo data)." },
];

function FlowDiagram() {
  const boxes = [
    { y: 10, title: "Positional extraction", sub: "text with x/y, column bands" },
    { y: 100, title: "LLM structuring", sub: "rows → transactions (Sonnet)" },
    { y: 190, title: "Checksum gate", sub: "must match statement summary", gate: true },
    { y: 280, title: "Classification waterfall", sub: "user rules → dictionary → Haiku" },
    { y: 370, title: "Analysis", sub: "every number computed in code" },
  ];
  return (
    <svg className="flow" viewBox="0 0 380 436" role="img" aria-label="RupeeScope pipeline: positional extraction, LLM structuring, checksum gate with escalation from Sonnet to Opus on failure, classification waterfall, analysis.">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="flow-head" />
        </marker>
      </defs>
      {boxes.map((b) => (
        <g key={b.title}>
          <rect x="10" y={b.y} width="220" height="56" rx="10" className={b.gate ? "flow-box gate" : "flow-box"} />
          <text x="120" y={b.y + 24} textAnchor="middle" className="flow-title">{b.title}</text>
          <text x="120" y={b.y + 42} textAnchor="middle" className="flow-sub">{b.sub}</text>
        </g>
      ))}
      {[66, 156, 246, 336].map((y) => (
        <line key={y} x1="120" y1={y} x2="120" y2={y + 32} className="flow-line" markerEnd="url(#arrow)" />
      ))}
      <text x="130" y="268" className="flow-sub">pass</text>
      <path d="M230,218 H262 V128 H234" className="flow-line" fill="none" markerEnd="url(#arrow)" />
      <text x="270" y="160" className="flow-sub">fail →</text>
      <text x="270" y="176" className="flow-sub">escalate</text>
      <text x="270" y="192" className="flow-sub">Sonnet → Opus</text>
    </svg>
  );
}

export default function RupeeScopeCaseStudy() {
  const numbers = NUMBERS.filter((n) => n.value !== null);
  const screenshots = SCREENSHOTS.filter((s) => imageExists(s.src));

  return (
    <main className="wrap case">
      <p className="back">
        <Link href="/">← Suman Saurabh Lugun</Link>
      </p>

      <header className="hero">
        <p className="kicker">Case study · In closed beta</p>
        <h1>RupeeScope</h1>
        <p className="lede">
          Turning password-protected Indian bank statements into spending numbers
          you can trust. Built solo in {DEV_WEEKS} weeks, with Claude Code as my
          engineering partner.{" "}
          <a href="https://rupeescope.com" target="_blank" rel="noreferrer">
            rupeescope.com
          </a>
        </p>
      </header>

      <section className="block">
        <h2>The problem</h2>
        <p>
          Indian bank statements arrive as password-protected PDFs, and no two
          banks lay them out the same way. Columns shift, rows wrap, and
          descriptions are dense UPI strings that hide who was actually paid.
          Money moving between your own accounts looks like spending in one
          statement and income in another. Add it all up naively and the totals
          are wrong &mdash; and a finance tool with wrong totals is worse than no
          tool at all.
        </p>
      </section>

      <section className="block">
        <h2>Constraints I chose</h2>
        <ul>
          <li><strong>Solo.</strong> One person across product, design, engineering and ops.</li>
          <li><strong>About {DEV_WEEKS} weeks</strong> from first commit to closed beta.</li>
          <li><strong>Claude Code as the engineering partner.</strong> I made the product and architecture calls and reviewed every diff.</li>
          <li><strong>Privacy-first.</strong> Statement files are never stored.</li>
        </ul>
        <p>Every decision below was shaped by those four.</p>
      </section>

      <section className="block">
        <h2>Architecture</h2>
        <CaseFigure
          src="rupeescope/architecture.png"
          alt="RupeeScope pipeline architecture"
          caption="Every import passes through the checksum gate before anything is classified or analysed."
        >
          <FlowDiagram />
        </CaseFigure>
      </section>

      <section className="block">
        <h2>Five decisions, and what each cost</h2>

        <h3>1. The LLM transcribes and interprets, but never computes</h3>
        <p>
          Models are good at reading messy rows and bad at arithmetic. So the LLM
          turns statement text into structured transactions, and every number a
          user sees &mdash; balances, totals, category sums &mdash; is computed in
          code from that structure.
        </p>
        <p className="tradeoff">
          <strong>Tradeoff:</strong> more code to write and own. The model
          can&rsquo;t quietly paper over a gap; every derived figure needs explicit
          logic.
        </p>

        <h3>2. A checksum gates every import</h3>
        <p>
          A statement is only accepted if the parsed transactions reconcile with
          the statement&rsquo;s own summary: opening and closing balance, total
          credits and debits, and transaction count. If they don&rsquo;t match,
          the import fails loudly instead of producing a plausible, wrong number.
        </p>
        <p className="tradeoff">
          <strong>Tradeoff:</strong> some statements get rejected that a lenient
          pipeline would have accepted with mostly-right data. I chose a refusal
          over a silent error.
        </p>

        <h3>3. Positional extraction instead of per-bank parsers</h3>
        <p>
          Rather than writing a parser for each bank, extraction reads text with
          its position on the page and detects column bands (date, description,
          debit, credit, balance) from the layout itself.
        </p>
        <p className="tradeoff">
          <strong>Tradeoff:</strong> a harder general problem up front, with messier
          edge cases (see what went wrong). In return, a new bank doesn&rsquo;t
          automatically mean a new parser.
        </p>

        <h3>4. A classification waterfall</h3>
        <p>
          Each transaction goes through tiers in order: the user&rsquo;s own rules
          first, then a deterministic dictionary, and Haiku only for whatever is
          left.
        </p>
        <p className="tradeoff">
          <strong>Tradeoff:</strong> the dictionary is ongoing maintenance. But rows
          that never reach a model are free, instant and repeatable, and the
          user&rsquo;s correction always wins.
        </p>

        <h3>5. A model per task, escalating only on checksum failure</h3>
        <p>
          Each step uses the cheapest model that does the job. When an import fails
          the checksum, structuring is retried with a stronger model, from Sonnet
          to Opus.
        </p>
        <p className="tradeoff">
          <strong>Tradeoff:</strong> more routing logic, and failing statements cost
          more and take longer. But the expensive model only runs when there&rsquo;s
          objective evidence it&rsquo;s needed.
        </p>
      </section>

      <section className="block">
        <h2>Evals: how I used them</h2>
        <p>
          <strong>A golden set as a parsing eval.</strong> 14 real statements, with
          ground truth hand-transcribed from each statement&rsquo;s own summary:
          opening and closing balance, total credits and debits, and transaction
          count. The checksum gave every statement an objective pass or fail. Most
          LLM pipelines don&rsquo;t have that.
        </p>
        <p>
          <strong>Regression on every change.</strong> A fixture runner re-ran the
          whole set after every parser or prompt change, so no change was judged on
          one file.
        </p>
        <p>
          <strong>Guarding against self-grading.</strong> I entered the manifest by
          hand, and the program was never allowed to write to it. I labelled the
          classification eval set myself; Claude Code didn&rsquo;t.
        </p>
        {HELD_OUT_SET_RUN && (
          <p>
            <strong>An overfitting check.</strong> A held-out set that was never
            tuned on, run only at milestones.
          </p>
        )}
        <p>
          <strong>Row-level spot checks.</strong> A statement can balance while
          individual rows are wrong, so I checked rows directly, not just totals.
        </p>
        <p>
          <strong>A classification eval.</strong> Labelled rows measuring type
          accuracy, category accuracy, and which waterfall tier handled each row.
        </p>
        <p>
          <strong>Cost and latency as eval dimensions.</strong> Every LLM call went
          through one wrapper that logged tokens, cost and latency. Each run&rsquo;s
          totals were appended to a metrics file in the repo, so prompt and model
          changes were measured, not guessed.
        </p>
        <p>
          <strong>Evals drove model choice.</strong> Escalation from Sonnet to Opus
          is triggered by checksum failure, an objective signal, not by a
          confidence score the model reports about itself.
        </p>
        <blockquote>
          The checksum turned an open-ended LLM quality problem into a measurable
          pass/fail, and everything else was built around making that measurement
          trustworthy.
        </blockquote>
      </section>

      {numbers.length > 0 && (
        <section className="block">
          <h2>The numbers</h2>
          <div className="stats">
            {numbers.map((n) => (
              <div className="stat" key={n.label}>
                <div className="stat-value">{n.value}</div>
                <div className="stat-label">{n.label}</div>
                {n.note && <div className="stat-note">{n.note}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="block">
        <h2>What I cut, and why</h2>
        <p>
          The promise was narrow: correct numbers from a real statement. Anything
          that didn&rsquo;t serve that promise before launch was cut.
        </p>
        <ul>
          <li><strong>OCR.</strong> Scanned statements bring a whole new class of errors to a pipeline whose point is being right.</li>
          <li><strong>HSBC savings accounts.</strong> One more layout to get reconciling before launch.</li>
          <li><strong>Budgets and splits.</strong> Features that sit on top of correct data; they only matter once the data is right.</li>
          <li><strong>CSV upload.</strong> A second way in that would need its own validation.</li>
        </ul>
        <p>
          Cutting scope is a product decision, not a shortfall. Each of these is a
          better feature later, built on a foundation that already reconciles.
        </p>
      </section>

      <section className="block">
        <h2>What went wrong</h2>
        <p>
          <strong>Multi-column extraction.</strong> Different banks, different
          layouts: wrapped descriptions, shifting columns, and reading order that
          didn&rsquo;t match what you see on the page. This took longer than any
          prompt.
        </p>
        <p>
          <strong>The manifest ended up in git history.</strong> The eval manifest,
          transcribed from real statements, was committed. Deleting a file
          doesn&rsquo;t remove it from history, so what stays private has to be
          decided before the first commit.
        </p>
        <p>
          <strong>The free-tier email template lock.</strong> Auth emails on the free
          tier came with a template I couldn&rsquo;t change, which turned a
          one-line copy fix into an infrastructure task.
        </p>
      </section>

      <section className="block">
        <h2>Other things I learned along the way</h2>
        <ul>
          <li>Being deliberate about AI spend: tracking it, and choosing models on purpose.</li>
          <li>Adding security checks to a live app to stop abuse.</li>
          <li>Setting up infrastructure from scratch.</li>
          <li>Catching steps Claude Code missed, and asking it to include them from then on.</li>
        </ul>
      </section>

      {screenshots.length > 0 && (
        <section className="block">
          <h2>Screenshots</h2>
          <p className="muted">All screenshots use demo mode, never a real account.</p>
          {screenshots.map((s) => (
            <CaseFigure key={s.src} src={s.src} alt={s.alt} caption={s.caption} />
          ))}
        </section>
      )}

      <section className="block">
        <h2>What I did</h2>
        <p>
          I took an idea from a crowded category to a live beta in about{" "}
          {DEV_WEEKS} weeks, solo. I narrowed scope hard, built a test harness
          before the parser, and designed around the LLM&rsquo;s weaknesses instead
          of trusting it. I made a long series of small domain calls: UPI P2P,
          investments, card-bill double-counting, EMIs, cash. I split dev and prod
          infrastructure, ran security audits, and shipped with privacy, deletion
          and cost controls in place before a single outside user arrived.
        </p>
        <p>
          None of the products from my last corporate role went live. This one did.
        </p>
      </section>

      <section className="block">
        <h2>What I learned</h2>
        <ul>
          <li>Most of the work was data, not AI. PDF layout, reading order and format variance took longer than any prompt.</li>
          <li>Give the model the job it&rsquo;s good at: interpretation and messy text, yes; arithmetic and source of truth, never.</li>
          <li>A deterministic gate is what makes an LLM pipeline shippable.</li>
          <li>Evals need ground truth you didn&rsquo;t generate yourself.</li>
          <li>Cheap models aren&rsquo;t always cheaper. Escalation math and latency matter more than list price.</li>
          <li>Infrastructure gotchas are real work: email, SMTP, captcha, RLS, env separation.</li>
          <li>Working with a coding agent needs explicit rules (CLAUDE.md), small tasks, and reviewing every diff.</li>
        </ul>
      </section>

      <footer className="foot">
        <Link href="/">Home</Link>
        <a href="https://rupeescope.com" target="_blank" rel="noreferrer">rupeescope.com</a>
        <a href="mailto:saurabhlugun07@gmail.com">Email</a>
      </footer>
    </main>
  );
}
