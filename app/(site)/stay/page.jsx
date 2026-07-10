import Link from "next/link";
import { getTrackInfo } from "@/lib/auth";
import { site } from "@/lib/site";
import Content from "../_components/Content";

export default async function Stay() {
  const { cocktail, dec1Stay } = await getTrackInfo();

  return (
    <Content>
      <h1>Where You&rsquo;ll Stay</h1>
      <p className="lead">
        We&rsquo;re delighted to host our guests at <strong>ITC Ratnadipa</strong>{" "}
        in Colombo.
      </p>

      <h2>What we&rsquo;re covering</h2>
      <div className="grid">
        <div className="card">
          <h3>
            Delighted to host you for {dec1Stay ? "three nights" : "two nights"}
          </h3>
          {dec1Stay ? (
            <p>
              We&rsquo;re covering your room for the nights of{" "}
              <strong>Dec 1, Dec 2 and Dec 3</strong> at ITC Ratnadipa. Check-in
              Dec 1, checkout after breakfast on <strong>Dec 4</strong>.
            </p>
          ) : (
            <p>
              We&rsquo;re covering your room for the nights of{" "}
              <strong>Dec 2 and Dec 3</strong> at ITC Ratnadipa. Check-in Dec 2,
              checkout after breakfast on <strong>Dec 4</strong>.
            </p>
          )}
        </div>
        {cocktail && !dec1Stay && (
          <div className="card">
            <h3>Arriving earlier?</h3>
            <p>
              If you&rsquo;re able to join us for the{" "}
              <strong>Dec 1 cocktail party</strong>, please let us know if you'd like
              to book a room for the night of Dec 1 at the hotel or feel free to
              make bookings elsewhere in the city! Let us know your
              plans on the <Link href="/rsvp">RSVP</Link>.
            </p>
          </div>
        )}
        <div className="card">
          <h3>Staying longer?</h3>
          <p>
            The hotel will hold our block rate for extra nights before and after the 
            wedding. Please reach out to us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. 
          </p>
        </div>
        <div className="card">
          <h3>Not covered</h3>
          <p>
            Incidentals, minibar, spa, and other personal charges. You can settle these when you checkout.
          </p>
        </div>
      </div>

      <h2>The hotel</h2>
      <img
        className="feature-photo"
        src="/images/itc.jpg"
        alt="ITC Ratnadipa, Colombo"
      />
      <p>
        <strong>ITC Ratnadipa</strong>
        <br />
        21 Galle Face Center Rd, Colombo 00100, Sri Lanka
        <br />
        +94 114 999 111 ·{" "}
        <a
          href="https://www.marriott.com/en-us/hotels/cmblc-itc-ratnadipa-a-luxury-collection-hotel-colombo/overview/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hotel website
        </a>
      </p>
      <p>
        <a
          href="https://maps.app.goo.gl/L8duQinjSp4YoVfVA"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps →
        </a>
      </p>

      <h2>How to reserve</h2>
      <p>
        You don&rsquo;t need to do anything —
        we&rsquo;ll book your room once you RSVP!
      </p>

      <Link className="btn" href="/rsvp">
        RSVP &amp; share your dates
      </Link>
    </Content>
  );
}
