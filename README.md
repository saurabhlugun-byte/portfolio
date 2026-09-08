# Suman Saurabh Lugun — portfolio

A one-page Next.js portfolio with a live **"Ask about my work"** chat, powered by the
Anthropic API. The chat answers recruiter questions grounded in your work history.

## Run it locally

```bash
npm install
cp .env.example .env.local     # then paste your real key into .env.local
npm run dev                     # open http://localhost:3000
```

Get an API key at <https://console.anthropic.com/> → **API Keys**. The chat calls the
Anthropic API from a server route, so your key never reaches the browser.

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo.
2. On <https://vercel.com>, **Add New → Project** and import the repo.
3. In **Settings → Environment Variables**, add `ANTHROPIC_API_KEY` with your key.
4. Deploy. Add your custom domain later under **Settings → Domains**.

Every chat message spends a small amount against your Anthropic key. The default model
(`claude-haiku-4-5-20251001`) is cheap; you can add a monthly spend limit in the Anthropic console.

## Make it yours

- **What the chat can say:** edit `lib/profile.ts`. The assistant only uses facts in that file
  and is told not to invent anything — keep it accurate.
- **Page content:** edit `app/page.tsx` (building, selected work, POV, links).
- **Model:** change `MODEL` in `app/api/chat/route.ts` (e.g. to `claude-sonnet-4-5` for richer answers).
- **Look:** all styling is in `app/globals.css` (design tokens at the top).

## Nice next steps

- Add screenshots/GIFs of PFA and Jalsa to the "Building now" items.
- Stream the chat responses for a snappier feel (swap the route to `stream: true` and read the SSE).
- Add a `/resume.pdf` in `public/` and link it from the footer.
- Pin your PFA and Jalsa repos on GitHub so the profile link isn't empty.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · plain CSS · Anthropic Messages API.
