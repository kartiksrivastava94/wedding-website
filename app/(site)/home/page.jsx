import Link from "next/link";
import { getTrackInfo } from "@/lib/auth";
import { site } from "@/lib/site";
import Content from "../_components/Content";
import HeroCarousel from "../_components/HeroCarousel";

export default async function Home() {
  const { cocktail, dec1Stay } = await getTrackInfo();

  return (
    <div className="page-with-side-photos home">
      <div className="page-main">
        <section className="hero-pill-section">
          <div className="hero-carousel-mobile">
            <HeroCarousel />
          </div>
          <div className="container">
            <div className="hero-pill-text">
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
              <Link className="btn" href="/rsvp">
                RSVP
              </Link>
            </div>
          </div>
        </section>

        <Content>
          <div className="grid">
            <div className="card">
              <h3>When</h3>
              {cocktail ? (
                <p>
                  Events run <strong>Dec 1 (evening) through Dec 3</strong>, with checkout
                  after breakfast on <strong>Dec 4</strong>.  
                </p>
              ) : (
                <p>
                  Events run <strong>Dec 2 through Dec 3</strong>, with checkout
                  after breakfast on <strong>Dec 4</strong>.  
                </p>
              )}
            </div>
            <div className="card">
              <h3>Where</h3>
              <p>
                Colombo, Sri Lanka. All events are at{" "}
                <strong>ITC Ratnadipa</strong> or nearby locations.
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

          <p className="muted" style={{ marginTop: "2.5rem" }}>
            Questions? Reach us at{" "}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          </p>
        </Content>
      </div>

      <div className="side-photo-column">
        <div className="side-photo-sub">
          <img className="framed-photo" src="/images/photo-01.jpg" alt="Amen and Kartik at Edinburgh Castle" />
          <img className="framed-photo" src="/images/photo-04.jpg" alt="Amen and Kartik by a blue wall" />
          <img className="framed-photo" src="/images/photo-07.jpg" alt="Amen and Kartik at a cafe" />
          <img className="framed-photo" src="/images/photo-10.jpg" alt="Amen and Kartik on a mountain trek" />
          <img className="framed-photo" src="/images/photo-13.jpg" alt="Amen and Kartik on a pier" />
        </div>
        <div className="side-photo-sub side-photo-sub-offset">
          <img className="framed-photo" src="/images/photo-02.jpg" alt="Amen and Kartik at the beach" />
          <img className="framed-photo" src="/images/photo-05.jpg" alt="Amen and Kartik on the water" />
          <img className="framed-photo" src="/images/photo-08.jpg?v=2" alt="Amen and Kartik by a heart sculpture" />
          <img className="framed-photo" src="/images/photo-11.jpg" alt="Amen and Kartik at the theatre" />
        </div>
        <div className="side-photo-sub side-photo-sub-offset-2">
          <img className="framed-photo" src="/images/photo-03.jpg" alt="Amen and Kartik at the Eiffel Tower" />
          <img className="framed-photo" src="/images/photo-06.jpg" alt="Amen and Kartik on the beach" />
          <img className="framed-photo" src="/images/photo-09.jpg" alt="Amen and Kartik, an early photo together" />
          <img className="framed-photo" src="/images/photo-12.jpg" alt="Amen and Kartik at the beach" />
          <img className="framed-photo" src="/images/photo-14.jpg" alt="Amen and Kartik in the snow" />
        </div>
      </div>
    </div>
  );
}
