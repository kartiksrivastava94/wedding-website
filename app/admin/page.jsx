import { isAdmin } from "@/lib/auth";
import { getSupabaseAdmin } from "@/lib/supabaseServer";
import { adminLogout } from "./actions";
import AdminLogin from "./AdminLogin";
import AutoRefresh from "./AutoRefresh";
import DownloadCsv from "./DownloadCsv";

// Always render fresh (never cached) so refreshes show the latest RSVPs.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "RSVP admin",
  robots: { index: false, follow: false },
};

const TRACK_LABEL = {
  cocktail: "Cocktail",
  cocktailstay: "Cocktail + stay",
  main: "Main",
  rsvponly: "Form-only",
};

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function Admin() {
  if (!(await isAdmin())) {
    return <AdminLogin />;
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("rsvps")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="admin">
        <div className="container">
          <h1>RSVP responses</h1>
          <p className="alert alert-error">
            Couldn&rsquo;t load responses: {error.message}
          </p>
        </div>
      </main>
    );
  }

  const rows = data || [];
  const accepts = rows.filter((r) => r.attending === "Joyfully accept");
  const declines = rows.filter((r) => r.attending === "Regretfully decline");
  const headcount = accepts.reduce((sum, r) => sum + (r.party_size || 0), 0);

  return (
    <main className="admin">
      <div className="container">
        <div className="admin-head">
          <h1>RSVP responses</h1>
          <div className="admin-actions">
            <AutoRefresh seconds={30} />
            <DownloadCsv rows={rows} />
            <form action={adminLogout}>
              <button className="linkbtn" type="submit">
                Sign out
              </button>
            </form>
          </div>
        </div>

        <div className="admin-stats">
          <div className="stat">
            <span className="stat-num">{rows.length}</span>
            <span className="stat-label">Responses</span>
          </div>
          <div className="stat">
            <span className="stat-num">{accepts.length}</span>
            <span className="stat-label">Attending</span>
          </div>
          <div className="stat">
            <span className="stat-num">{headcount}</span>
            <span className="stat-label">Total guests</span>
          </div>
          <div className="stat">
            <span className="stat-num">{declines.length}</span>
            <span className="stat-label">Declined</span>
          </div>
        </div>

        <div className="table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>When</th>
                <th>Name</th>
                <th>Group</th>
                <th>Attending</th>
                <th>Party</th>
                <th>Email</th>
                <th>Phone</th>
                <th>WhatsApp</th>
                <th>Events</th>
                <th>Flights</th>
                <th>Arrival</th>
                <th>Departure</th>
                <th>Dietary</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={14} className="muted">
                    No responses yet.
                  </td>
                </tr>
              )}
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="nowrap">{fmtDate(r.created_at)}</td>
                  <td>{r.name}</td>
                  <td>{TRACK_LABEL[r.track] || r.track}</td>
                  <td>{r.attending}</td>
                  <td>{r.party_size ?? ""}</td>
                  <td>{r.email}</td>
                  <td className="nowrap">{r.phone}</td>
                  <td>{r.whatsapp_optin ? "Yes" : "—"}</td>
                  <td>{(r.events || []).join(", ")}</td>
                  <td>{r.flights_status}</td>
                  <td>{r.arrival_flight}</td>
                  <td>{r.departure_flight}</td>
                  <td>{r.dietary}</td>
                  <td>{r.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
