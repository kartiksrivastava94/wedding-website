import { redirect } from "next/navigation";
import { getTrack } from "@/lib/auth";
import { site } from "@/lib/site";
import AccessGate from "./AccessGate";

// Public landing page: the access-code gate. If already authenticated,
// skip straight to the site.
export default async function Landing() {
  const track = await getTrack();
  if (track) redirect("/home");

  return (
    <main className="gate-page">
      <div className="gate-card">
        <p className="subtitle">You&rsquo;re invited to celebrate</p>
        <h1>{site.coupleNames}</h1>
        <p className="subtitle">{site.location}</p>
        <AccessGate />
        <p className="muted small">
          Your access code is on your invitation. Trouble getting in? Email{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </div>
    </main>
  );
}
