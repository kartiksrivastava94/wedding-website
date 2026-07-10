"use server";

import { getTrack } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabaseServer";

// Records an RSVP into Supabase. Runs server-side; the guest's track comes from
// their signed cookie, not the form, so it can't be spoofed.
export async function submitRsvp(prevState, formData) {
  const track = await getTrack();
  if (!track) {
    return {
      ok: false,
      error:
        "Your session expired. Please refresh and enter your access code again.",
    };
  }

  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  if (!name || !email) {
    return { ok: false, error: "Name and email are required." };
  }

  const partyRaw = parseInt(formData.get("party"), 10);
  const record = {
    track,
    name,
    email,
    phone: (formData.get("phone") || "").toString().trim(),
    whatsapp_optin: formData.get("whatsapp") === "yes",
    attending: (formData.get("attending") || "").toString(),
    party_size: Number.isFinite(partyRaw) ? partyRaw : null,
    events: formData.getAll("events").map(String),
    dec1_night:
      track === "cocktail" ? (formData.get("dec1night") || "").toString() : null,
    flights_status: (formData.get("flights_status") || "").toString(),
    travel_dates: (formData.get("dates") || "").toString(),
    dietary: (formData.get("notes") || "").toString(),
    message: (formData.get("message") || "").toString(),
  };

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("rsvps").insert(record);
    if (error) throw error;
  } catch (e) {
    console.error("RSVP insert failed:", e);
    return {
      ok: false,
      error:
        "Something went wrong saving your RSVP. Please try again, or email us directly.",
    };
  }

  return { ok: true, error: null };
}
