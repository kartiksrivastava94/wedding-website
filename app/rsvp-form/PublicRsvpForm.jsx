"use client";

import { useActionState } from "react";

const initialState = { ok: false, error: null };

// Public form-only RSVP. Assumes the guest is attending. Writes to the same
// table via the same insertRsvp() helper as the gated form (see lib/rsvp.js) —
// field names must match those the helper reads.
export default function PublicRsvpForm({ action }) {
  const [state, formAction, pending] = useActionState(action, initialState);

  if (state.ok) {
    return (
      <p className="alert alert-success">
        Thank you — your RSVP has been recorded. If your plans change, you can
        revisit this page and send an updated response.
      </p>
    );
  }

  return (
    <form action={formAction} className="form">
      {state.error && <p className="alert alert-error">{state.error}</p>}
      {/* This link is only for attending guests. */}
      <input type="hidden" name="attending" value="Joyfully accept" />

      <p>
        <label>
          Full name(s)
          <br />
          <input className="input" type="text" name="name" required />
        </label>
      </p>
      <p>
        <label>
          Email
          <br />
          <input className="input" type="email" name="email" required />
        </label>
      </p>
      <p>
        <label>
          Best phone number to reach you (with country code)
          <br />
          <input
            className="input"
            type="tel"
            name="phone"
            placeholder="e.g. +1 555 123 4567"
          />
        </label>
      </p>
      <p className="checks">
        <label>
          <input type="checkbox" name="whatsapp" value="yes" defaultChecked /> You
          can add me to the WhatsApp group(s) for planning updates (we&rsquo;ll
          use the number above).
        </label>
      </p>
      <p>
        <label>
          Number of people attending
          <br />
          <input
            className="input"
            type="number"
            name="party"
            min="1"
            defaultValue="1"
          />
        </label>
      </p>

      <fieldset className="fieldset">
        <legend>Travel</legend>
        <p>
          <label>
            Arrival flight number and arrival time
            <br />
            <input
              className="input"
              type="text"
              name="arrival_flight"
              placeholder="e.g. UL309, arriving Dec 2, 9:40 am"
            />
          </label>
        </p>
        <p style={{ marginBottom: 0 }}>
          <label>
            Departure flight number and departure time
            <br />
            <input
              className="input"
              type="text"
              name="departure_flight"
              placeholder="e.g. UL308, departing Dec 4, 8:00 pm"
            />
          </label>
        </p>
      </fieldset>

      <p>
        <label>
          Dietary restrictions / accessibility needs
          <br />
          <textarea className="textarea" name="notes" rows="3" />
        </label>
      </p>
      <p>
        <label>
          Anything else? (song requests, questions, travel plans)
          <br />
          <textarea className="textarea" name="message" rows="3" />
        </label>
      </p>

      <button className="btn" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send RSVP"}
      </button>
    </form>
  );
}
