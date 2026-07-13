"use client";

import { useActionState } from "react";

const initialState = { ok: false, error: null };

// Non-cocktail events — shown to every guest (main, cocktail, cocktailstay,
// and the public rsvp-only form). Keep these in sync with the Schedule page.
const EVENTS = [
  { value: "Welcome Lunch (Dec 2)", label: "Welcome Lunch (Dec 2)" },
  { value: "Sangeet/Mehndi (Dec 2)", label: "Sangeet/Mehndi (Dec 2)" },
  { value: "Carnival Brunch (Dec 3)", label: "Carnival Brunch (Dec 3)" },
  {
    value: "Wedding Ceremony, Reception & Afterparty (Dec 3)",
    label: "Wedding Ceremony, Reception & Afterparty (Dec 3)",
  },
];

export default function RsvpForm({ cocktail, dec1Stay, action }) {
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
          Will you attend?
          <br />
          <select className="select" name="attending" defaultValue="Joyfully accept">
            <option>Joyfully accept</option>
            <option>Regretfully decline</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Number in your party
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

      <fieldset className="fieldset checks">
        <legend>Which events will you join?</legend>
        {cocktail && (
          <label>
            <input
              type="checkbox"
              name="events"
              value="Pool Party and Cocktails (Dec 1)"
            />{" "}
            Pool Party and Cocktails (Dec 1)
          </label>
        )}
        {EVENTS.map((e) => (
          <label key={e.value}>
            <input type="checkbox" name="events" value={e.value} /> {e.label}
          </label>
        ))}
      </fieldset>

      {cocktail && !dec1Stay && (
        <p>
          <label>
            Arriving for the Dec 1 pool party &amp; cocktails (need the Dec 1 night)?
            <br />
            <select className="select" name="dec1night" defaultValue="Not sure yet">
              <option>Not sure yet</option>
              <option>Yes, arriving Dec 1</option>
              <option>No, arriving Dec 2</option>
            </select>
          </label>
        </p>
      )}

      <fieldset className="fieldset">
        <legend>Travel</legend>
        <p className="muted small" style={{ marginTop: 0 }}>
          Our planners will reach out closer to the date to confirm the
          specifics — for now, just share whatever you know.
        </p>
        <p>
          <label>
            Have you booked your flights?
            <br />
            <select
              className="select"
              name="flights_status"
              defaultValue="Not yet"
            >
              <option>Not yet</option>
              <option>Booked</option>
              <option>I have rough dates in mind</option>
            </select>
          </label>
        </p>
        <p style={{ marginBottom: 0 }}>
          <label>
            Hotel check-in &amp; check-out times (if known)
            <br />
            <input
              className="input"
              type="text"
              name="dates"
              placeholder={
                cocktail
                  ? "e.g. arrive Dec 1 afternoon, depart Dec 4 evening"
                  : "e.g. arrive Dec 2 morning, depart Dec 4 evening"
              }
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
