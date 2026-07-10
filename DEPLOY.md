# Deploying the wedding site (Vercel + Supabase + custom domain)

This site is a Next.js app. Hosting is free on Vercel at this scale. Total time
~30–45 min. You'll do it once, then future updates are a single `git push`.

---

## Step 0 — One-time prerequisites

- A **GitHub** account (free): https://github.com
- Your **Vercel** account (free): https://vercel.com — sign in with GitHub
- Your existing **Supabase** project (already set up)
- `git` installed: run `git --version` (macOS will offer to install it if missing)

---

## Step 1 — Finalize the database (Supabase)

Open **Supabase → SQL Editor → New query**, paste the entire contents of
`supabase/schema.sql`, and click **Run**. This is safe to run on your existing
table — it only adds missing columns and updates the track constraint. It makes
sure the new RSVP fields (phone, WhatsApp opt-in, flights status) and the third
`cocktailstay` track are all accepted.

Verify: **Table Editor → rsvps** should now show the `phone`, `whatsapp_optin`,
and `flights_status` columns.

---

## Step 2 — Put the code on GitHub

From the project folder in Terminal:

```bash
cd /Users/kartiksrivastava/Dropbox/WeddingPrep/Website

# make sure you're on Node 18+ (only matters for local runs, not for git)
nvm use 20

git init
git add .
git commit -m "Wedding site"
```

> Your secrets are safe: `.env.local` is in `.gitignore`, so it is NOT committed.
> Never commit `.env.local`.

Now create an **empty private repo** on GitHub (github.com → New repository →
Private → don't add a README). Then connect and push (replace the URL with yours):

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/wedding-website.git
git push -u origin main
```

---

## Step 3 — Deploy on Vercel

1. Go to https://vercel.com → **Add New… → Project**.
2. **Import** the GitHub repo you just pushed. Vercel auto-detects Next.js — leave
   the build settings as-is.
3. Before clicking Deploy, open **Environment Variables** and add these **six**
   (copy the values from your local `.env.local`):

   | Name | Value |
   |------|-------|
   | `ACCESS_CODE_COCKTAIL` | your cocktail code |
   | `ACCESS_CODE_COCKTAIL_STAY` | your cocktail-with-Dec-1-stay code |
   | `ACCESS_CODE_MAIN` | your main code |
   | `AUTH_SECRET` | the long random string (reuse the local one, or run `openssl rand -hex 32` for a fresh one) |
   | `SUPABASE_URL` | `https://kwynjttnpazmqslaxdvd.supabase.co` |
   | `SUPABASE_SERVICE_ROLE_KEY` | your Supabase service_role key |

4. Click **Deploy**. In ~1–2 minutes you'll get a live URL like
   `wedding-website-xxxx.vercel.app`. Open it and test all three access codes.

> If you add or change env vars later, click **Redeploy** (Deployments → ⋯ →
> Redeploy) so they take effect — env vars are read at build/start.

---

## Step 4 — Connect a custom domain

**Option A — buy the domain through Vercel (simplest):**
1. Vercel → your project → **Settings → Domains → Buy a domain**.
2. Search a name (e.g. `amenandkartik.com`), purchase, and Vercel wires up DNS +
   HTTPS automatically. Done.

**Option B — you already own a domain (e.g. from GoDaddy/Namecheap/Google):**
1. Vercel → project → **Settings → Domains → Add**, type your domain, click Add.
2. Vercel shows the DNS records to create. Typically:
   - Root domain `amenandkartik.com` → an **A record** to `76.76.21.21`
   - `www` → a **CNAME** to `cname.vercel-dns.com`
   (Use exactly what Vercel displays — it's authoritative.)
3. Log in to your domain registrar, open its DNS settings, and add those records.
4. Back in Vercel, it verifies (minutes to a couple of hours) and issues HTTPS
   automatically.

---

## Step 5 — Final checks

- Visit your domain → you should hit the **access-code gate**.
- Test each code: **main** (2 nights, no cocktail), **cocktail** (2 nights + Dec 1,
  "book Dec 1 yourself"), **cocktailstay** (3 nights + Dec 1, no self-book prompt).
- Submit a test RSVP on each → confirm rows appear in **Supabase → Table Editor →
  rsvps** with the phone / WhatsApp / flights fields populated.
- Delete your test rows in Supabase before going live.

---

## Updating the site later

Edit files locally, preview with `npm run dev`, then:

```bash
git add .
git commit -m "what changed"
git push
```

Vercel auto-deploys every push to `main`. Your domain updates in ~1–2 minutes.

---

## Where the RSVPs live

**Supabase → Table Editor → rsvps** (or run `select * from rsvps_recent;` in the
SQL editor for a newest-first view). Export to CSV from the table view. Each row's
`track` column tells you which of the three groups the guest is in.
```
