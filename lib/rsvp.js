// Shared RSVP insert logic, used by BOTH the gated form and the public
// (no-password) form, so the two always write identical data to the same table.
// Server-only (imported by server actions).
//
// Both forms MUST use these field `name` attributes:
//   name, email, phone, whatsapp, attending, party, events, dec1night,
//   flights_status, arrival_flight, departure_flight, dates, notes, message

import { getSupabaseAdmin } from "@/lib/supabaseServer";

export async function insertRsvp(track, formData) {
  const name = (formData.get("name") || "").toString().trim();
  if (!name) {
    return { ok: false, error: "Name is required." };
  }

  const partyRaw = parseInt(formData.get("party"), 10);
  const record = {
    track,
    name,
    // Email is only collected from attending guests, so it may be blank
    // (e.g. a "Regretfully decline" response).
    email: (formData.get("email") || "").toString().trim(),
    phone: (formData.get("phone") || "").toString().trim(),
    whatsapp_optin: formData.get("whatsapp") === "yes",
    attending: (formData.get("attending") || "").toString(),
    party_size: Number.isFinite(partyRaw) ? partyRaw : null,
    events: formData.getAll("events").map(String),
    // dec1_night is only asked of the middle "cocktail" group.
    dec1_night:
      track === "cocktail" ? (formData.get("dec1night") || "").toString() : null,
    flights_status: (formData.get("flights_status") || "").toString(),
    arrival_flight: (formData.get("arrival_flight") || "").toString().trim(),
    departure_flight: (formData.get("departure_flight") || "").toString().trim(),
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
