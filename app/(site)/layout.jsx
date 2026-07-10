import Link from "next/link";
import { redirect } from "next/navigation";
import { getTrack } from "@/lib/auth";
import { site } from "@/lib/site";
import Nav from "./Nav";

// Guards every page under (site): no valid track cookie → back to the gate.
// Because this layout reads cookies, these routes are always rendered per-request.
export default async function SiteLayout({ children }) {
  const track = await getTrack();
  if (!track) redirect("/");

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link className="brand" href="/home">
            {site.coupleNames}
          </Link>
          <Nav />
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="container">
          <p>
            {site.coupleNames} · December {site.year} · {site.location}
          </p>
        </div>
      </footer>
    </>
  );
}
