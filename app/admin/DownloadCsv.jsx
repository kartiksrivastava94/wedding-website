"use client";

// Column order for the CSV export (all fields).
const COLS = [
  "created_at",
  "track",
  "name",
  "email",
  "phone",
  "whatsapp_optin",
  "attending",
  "party_size",
  "events",
  "dec1_night",
  "flights_status",
  "arrival_flight",
  "departure_flight",
  "travel_dates",
  "dietary",
  "message",
];

function toCsv(rows) {
  const esc = (v) => {
    if (v == null) return "";
    const s = Array.isArray(v) ? v.join("; ") : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const header = COLS.join(",");
  const lines = rows.map((r) => COLS.map((c) => esc(r[c])).join(","));
  return [header, ...lines].join("\n");
}

export default function DownloadCsv({ rows }) {
  const download = () => {
    const csv = toCsv(rows);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `rsvps-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <button className="btn" type="button" onClick={download}>
      Download CSV
    </button>
  );
}
