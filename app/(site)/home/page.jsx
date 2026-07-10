import Link from "next/link";
import { getTrackInfo } from "@/lib/auth";
import { site } from "@/lib/site";
import Content from "../_components/Content";
import Sprig from "../_components/Sprig";

export default async function Home() {
  const { cocktail, dec1Stay } = await getTrackInfo();

  return (
    <>
      <section className="hero hero-home">
        <div className="container">
          <div className="hero-names">
            <Sprig className="sprig-flank sprig-left" />
            <div className="hero-names-text">
              <p className="subtitle">
                You&rsquo;re invited to celebrate the wedding of
              </p>
              <h1>
                Amen <span className="amp">&amp;</span> Kartik
              </h1>
              <p className="subtitle">
                <strong>
                  {cocktail ? "December 1–4, 2026" : "December 2–4, 2026"} ·{" "}
                  {site.location}
                </strong>
              </p>
            </div>
            <Sprig className="sprig-flank sprig-right" />
          </div>
          <Link className="btn" href="/rsvp">
            RSVP
          </Link>
        </div>
      </section>

      {/* Placeholder photo — swap public/images/couple-hero.jpg for your pick */}
      <figure className="photo-band">
        <img src="/images/couple-hero.jpg" alt="Amen and Kartik" />
      </figure>

      <Content>

        <div className="grid">
          <div className="card">
            <h3>When</h3>
            {cocktail ? (
              <p>
                Events run <strong>Dec 1 through Dec 3</strong>, with checkout
                after breakfast on <strong>Dec 4</strong>. Plan to arrive by Dec
                1.
              </p>
            ) : (
              <p>
                Events run <strong>Dec 2 through Dec 3</strong>, with checkout
                after breakfast on <strong>Dec 4</strong>. Plan to arrive by Dec
                2.
              </p>
            )}
          </div>
          <div className="card">
            <h3>Where</h3>
            <p>
              Colombo, Sri Lanka. All events are at{" "}
              <strong>ITC Ratnadipa</strong> unless noted otherwise.
            </p>
          </div>
          <div className="card">
            <h3>Where you&rsquo;ll stay</h3>
            <p>
              We&rsquo;re hosting guests at <strong>ITC Ratnadipa</strong> for{" "}
              {dec1Stay ? (
                <strong>three nights — Dec 1, 2 &amp; 3</strong>
              ) : (
                <strong>two nights — Dec 2 &amp; Dec 3</strong>
              )}
              . See the <Link href="/stay">Stay</Link> page for details.
            </p>
          </div>
          <div className="card">
            <h3>Next steps</h3>
            <p>
              <Link href="/rsvp">RSVP</Link>, then start looking at{" "}
              <Link href="/travel">flights and visas</Link> early — December is
              peak season.
            </p>
          </div>
        </div>

        <div className="gallery">
          <img src="/images/gallery-1.jpg" alt="Placeholder photo" />
          <img src="/images/gallery-3.jpg" alt="Placeholder photo" />
          <img src="/images/gallery-2.jpg" alt="Placeholder photo" />
        </div>

        <p className="muted" style={{ marginTop: "2.5rem" }}>
          Questions? Reach us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </Content>
    </>
  );
}
