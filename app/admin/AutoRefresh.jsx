"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Re-fetches the server-rendered table on an interval, so new RSVPs appear
// without a manual reload.
export default function AutoRefresh({ seconds = 30 }) {
  const router = useRouter();
  const [on, setOn] = useState(true);

  useEffect(() => {
    if (!on) return;
    const id = setInterval(() => router.refresh(), seconds * 1000);
    return () => clearInterval(id);
  }, [router, seconds, on]);

  return (
    <label className="muted small" style={{ display: "inline-flex", gap: "0.4rem", alignItems: "center" }}>
      <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
      Auto-refresh every {seconds}s
    </label>
  );
}
