"use server";

import { insertRsvp } from "@/lib/rsvp";

// Public (no-password) RSVP. Records into the SAME table via the SAME helper as
// the gated form, tagged with track 'rsvponly' so these are distinguishable.
export async function submitPublicRsvp(prevState, formData) {
  return insertRsvp("rsvponly", formData);
}
