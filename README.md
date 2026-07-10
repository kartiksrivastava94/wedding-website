# Wedding Website — Amen & Kartik

Colombo, Sri Lanka · December 2026.

A small **Next.js** app. Guests enter an **access code** on the landing page;
the code puts them on one of two tracks and the whole site adapts:

- **cocktail** track → Dec 1–4, includes the Dec 1 cocktail party
- **main** track → Dec 2–4, no cocktail

The **RSVP** form writes to a **Supabase** (Postgres) database you can browse and
export. Built for up to ~200 responses; the free tiers cover this easily.

> Aesthetics are intentionally minimal — this is the structure. Design comes next.

## Requirements

- **Node 18.18+** (Node 20 recommended). Node 16 will **not** work.
  Check with `node -v`; upgrade via nvm (`nvm install 20 && nvm use 20`) or
  <https://nodejs.org>.

## How it fits together

```
Landing "/"  (app/page.jsx)         ← enter access code
     │  code checked server-side → signed httpOnly cookie stores the track
     ▼
app/(site)/*  (guarded by app/(site)/layout.jsx → redirects to "/" if no cookie)
     home schedule travel stay attire colombo faq rsvp
     │  each page reads the track and renders the right variant
     ▼
RSVP  → server action → Supabase table `rsvps`  → you view/export in Supabase
```

Key files:

| Path | What it is |
|------|-----------|
| `lib/site.js` | Names, dates, contact, nav — **edit content config here** |
| `lib/auth.js` | Access-code → track, signed cookie, `getTrack()` |
| `lib/supabaseServer.js` | Server-only Supabase client (service role) |
| `app/page.jsx` + `app/AccessGate.jsx` + `app/actions.js` | The access-code gate |
| `app/(site)/layout.jsx` | Auth guard + header/footer around every page |
| `app/(site)/<name>/page.jsx` | Each content page (plain JSX — edit freely) |
| `app/(site)/rsvp/` | RSVP form (`RsvpForm.jsx`) + insert action (`actions.js`) |
| `supabase/schema.sql` | Run once in Supabase to create the `rsvps` table |
| `app/globals.css` | All styles |

Content that differs by track is a simple conditional in the page, e.g.
`{cocktail ? <A/> : <B/>}` or `{cocktail && <OnlyForCocktailGuests/>}`.

## First-time setup

1. **Install Node 18+** (see Requirements), then install dependencies:
   ```
   npm install
   ```
2. **Create the environment file:**
   ```
   cp .env.example .env.local
   ```
   Fill in `.env.local`:
   - `ACCESS_CODE_COCKTAIL`, `ACCESS_CODE_MAIN` — the two codes you'll hand out.
   - `AUTH_SECRET` — a long random string: `openssl rand -hex 32`.
   - `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` — from step 3.
   (`.env.local` is gitignored — never commit it.)
3. **Set up Supabase:**
   - Create a free project at <https://supabase.com>.
   - Open **SQL Editor → New query**, paste `supabase/schema.sql`, and Run.
   - **Settings → API**: copy the Project URL → `SUPABASE_URL`, and the
     **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`. (Service role is secret
     and server-only; it's never sent to the browser.)
4. **Run it:**
   ```
   npm run dev
   ```
   Open <http://localhost:3000>, enter one of your codes, and submit a test RSVP.
   It should appear in Supabase under **Table editor → rsvps**.

## Viewing / exporting RSVPs

In the Supabase dashboard: **Table editor → rsvps** (or run
`select * from rsvps_recent;` in the SQL editor). Export to CSV from the table
view. Each row records the guest's track, so you can tell the two groups apart.

## Deploying (Vercel)

1. Push this folder to a Git repo (GitHub/GitLab).
2. Import it at <https://vercel.com> (it auto-detects Next.js).
3. In the Vercel project **Settings → Environment Variables**, add the same five
   variables from `.env.local`.
4. Deploy. Give the cocktail code to guests invited to everything, and the main
   code to everyone else.

To change or rotate codes later, just update the env vars (locally in
`.env.local`, and in Vercel) and redeploy — no code changes needed.

## Notes & still-to-do

- The site is set to **noindex** so search engines won't list it.
- Fill in every `[bracketed]` placeholder and the yellow editor-note boxes.
- The access gate is real server-side protection, but a shared code can be
  forwarded. If you later want per-guest codes / "who hasn't RSVP'd" tracking,
  the auth layer can be extended.
