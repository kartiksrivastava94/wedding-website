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
        <p className="subtitle">You&rsquo;re invited to celebrate</p>
        <h1>{site.coupleNames}</h1>
        <p className="lead">
          December 2026 · {site.location}. We&rsquo;d love to know if you can
          join us — please RSVP below.
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
