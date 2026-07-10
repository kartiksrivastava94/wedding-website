import Link from "next/link";
import { site } from "@/lib/site";
import Content from "../_components/Content";

export default function Colombo() {
  return (
    <Content>
      <h1>Colombo &amp; Beyond</h1>
      <p className="lead">
        Make a trip of it! Here are ideas for before or after the wedding.
      </p>

      <h2>In Colombo</h2>
      <div className="grid">
        <div className="card">
          <h3>See</h3>
          <p>
            Galle Face Green, Gangaramaya Temple, the Red Mosque, 
            the old Dutch Hospital precinct, National Museum, Pettah markets. 
          </p>
        </div>
        <div className="card">
          <h3>Eat &amp; drink</h3>
          <p>
            Sri Lankan rice &amp; curry, hoppers, kottu, fresh seafood, and
            great rooftop bars. Our favorites are <strong>Paradise Road The Gallery Café</strong>, 
            the <strong>Ministry of Crab</strong>, and <strong>Sugar Bistro</strong>.
          </p>
        </div>
        <div className="card">
          <h3>Relax</h3>
          <p>Spas, tea tasting, and seaside strolls.</p>
        </div>
      </div>

      <h2>Worth the trip</h2>
      <div className="grid">
        <div className="card">
          <h3>Galle</h3>
          <p>
            Historic fort town on the south coast, ~2 hours by expressway.
            Beaches and boutique charm.
          </p>
        </div>
        <div className="card">
          <h3>Kandy &amp; the hills</h3>
          <p>
            Temple of the Tooth, tea country, and the scenic hill-country train.
          </p>
        </div>
        <div className="card">
          <h3>Beaches</h3>
          <p>The south and east coasts for surf and sun: Mirissa, Ahangama, Tangalle. </p>
        </div>
        <div className="card">
          <h3>Wildlife &amp; heritage</h3>
          <p>
            Safari at Yala/Udawalawe, and the ancient sites of Sigiriya,
            Anuradhapura, and Polonnaruwa.
          </p>
        </div>
      </div>

      <p className="muted">
        If you&rsquo;d like help planning extra days, reach out —{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>

      <Link className="btn" href="/faq">
        Read the FAQ →
      </Link>
    </Content>
  );
}
