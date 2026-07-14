import { site } from "@/lib/site";
import PublicRsvpForm from "./PublicRsvpForm";
import { submitPublicRsvp } from "./actions";

export const metadata = {
  title: "RSVP — Kartik & Amen",
  robots: { index: false, follow: false },
};

// Standalone, public RSVP page — no access code, no site nav. Just the form.
// Lives OUTSIDE the (site) route group, so the password guard does not apply.
export default function PublicRsvp() {
  return (
    <main className="rsvp-standalone">
      <div className="container">
        <h1>
          Kartik <span className="amp">&amp;</span> Amen
        </h1>
        <p className="subtitle">
          are getting married · December 2026 · Colombo, Sri Lanka
        </p>
        <p className="lead">
          To help us plan better, please fill this form out. It only takes a
          minute, and there are no wrong answers.
        </p>

        <PublicRsvpForm action={submitPublicRsvp} />

        <p className="muted small" style={{ marginTop: "2rem" }}>
          Questions? Email{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </div>
    </main>
  );
}
