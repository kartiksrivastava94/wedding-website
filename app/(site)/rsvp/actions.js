"use server";

import { getTrack } from "@/lib/auth";
import { insertRsvp } from "@/lib/rsvp";

// Gated RSVP: the guest's track comes from their signed cookie, not the form,
// so it can't be spoofed. Shares insertRsvp() with the public form.
export async function submitRsvp(prevState, formData) {
  const track = await getTrack();
  if (!track) {
    return {
      ok: false,
      error:
        "Your session expired. Please refresh and enter your access code again.",
    };
  }
  return insertRsvp(track, formData);
}
