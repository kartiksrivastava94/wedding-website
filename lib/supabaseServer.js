// Server-only Supabase client, using the service role key.
// Never import this into a client component — the service role key must stay
// on the server. RSVP writes go through here, bypassing row-level security.

import { createClient } from "@supabase/supabase-js";

let client = null;

export function getSupabaseAdmin() {
  if (client) return client;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Supabase env vars missing (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)."
    );
  }
  client = createClient(url, key, { auth: { persistSession: false } });
  return client;
}
