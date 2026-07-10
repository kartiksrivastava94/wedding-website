// Access-code auth + guest "track". Three tracks:
//   main         — Dec 2–4, no cocktail, 2 hosted nights (Dec 2, 3)
//   cocktail     — invited to the Dec 1 cocktail; still 2 hosted nights (Dec 2, 3)
//   cocktailstay — invited to the Dec 1 cocktail AND Dec 1 night hosted (3 nights)
//
// A guest enters an access code on the landing page. The code maps to a track,
// and we store that track in a signed, httpOnly cookie. The signature (HMAC with
// AUTH_SECRET) means the cookie can't be forged to switch tracks or bypass the gate.
//
// This all runs server-side (server components / server actions), so Node's
// crypto is available and the secret never reaches the browser.

import { cookies } from "next/headers";
import crypto from "node:crypto";

const COOKIE = "wedding_track";
const VALID_TRACKS = new Set(["cocktail", "cocktailstay", "main"]);
const MAX_AGE = 60 * 60 * 24 * 180; // ~180 days

function secret() {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET is not set");
  return s;
}

function sign(value) {
  const sig = crypto.createHmac("sha256", secret()).update(value).digest("hex");
  return `${value}.${sig}`;
}

function unsign(signed) {
  if (!signed || !signed.includes(".")) return null;
  const idx = signed.lastIndexOf(".");
  const value = signed.slice(0, idx);
  const sig = signed.slice(idx + 1);
  const expected = crypto
    .createHmac("sha256", secret())
    .update(value)
    .digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  return value;
}

// Map an entered code to a track, or null if it matches nothing.
export function trackForCode(code) {
  const norm = (code || "").toString().trim().toLowerCase();
  if (!norm) return null;
  const map = [
    [process.env.ACCESS_CODE_COCKTAIL, "cocktail"],
    [process.env.ACCESS_CODE_COCKTAIL_STAY, "cocktailstay"],
    [process.env.ACCESS_CODE_MAIN, "main"],
  ];
  for (const [configured, track] of map) {
    if (configured && norm === configured.trim().toLowerCase()) return track;
  }
  return null;
}

export async function setTrackCookie(track) {
  const store = await cookies();
  store.set(COOKIE, sign(track), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearTrackCookie() {
  const store = await cookies();
  store.delete(COOKIE);
}

// Returns "cocktail" | "main" | null (null = not authenticated).
export async function getTrack() {
  const store = await cookies();
  const raw = store.get(COOKIE)?.value;
  const value = unsign(raw);
  return value && VALID_TRACKS.has(value) ? value : null;
}

// Convenience flags derived from the track, so pages don't repeat the logic:
//   cocktail — invited to the Dec 1 cocktail party (cocktail OR cocktailstay)
//   dec1Stay — Dec 1 night of accommodation is also hosted (cocktailstay only)
export async function getTrackInfo() {
  const track = await getTrack();
  return {
    track,
    cocktail: track === "cocktail" || track === "cocktailstay",
    dec1Stay: track === "cocktailstay",
  };
}
