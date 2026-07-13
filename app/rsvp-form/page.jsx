import { site } from "@/lib/site";
import RsvpForm from "@/app/(site)/rsvp/RsvpForm";
import { submitPublicRsvp } from "./actions";

export const metadata = {
  title: `RSVP — ${site.coupleNames}`,
  robots: { index: false, follow: false },
};

// Standalone, public RSVP page — no access code, no site nav. Just the form.
// Lives OUTSIDE the (site) route group, so the password guard does not apply.
export default function PublicRsvp() {
  return (
    <main className="rsvp-standalone">
      <div className="container">
        <h1>
          Amen <span className="amp">&amp;</span> Kartik
        </h1>
        <p className="subtitle">are getting married · December 2026 · Colombo</p>
        <p className="lead">
          We would be so glad to have you celebrate with us. Please let us know
          if you can join by filling out the form below — it only takes a
          minute, and there are no wrong answers.
        </p>

        <RsvpForm cocktail={false} dec1Stay={false} action={submitPublicRsvp} />

        <p className="muted small" style={{ marginTop: "2rem" }}>
          Questions? Email{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </div>
    </main>
  );
}
