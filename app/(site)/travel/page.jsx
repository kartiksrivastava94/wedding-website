import Link from "next/link";
import { getTrackInfo } from "@/lib/auth";
import Content from "../_components/Content";

export default async function Travel() {
  const { cocktail } = await getTrackInfo();

  return (
    <Content>
      <h1>Getting to Colombo</h1>
      <p className="lead">
        December is a busy season in Sri Lanka. Please sort out flights and your
        ETA visa early.
      </p>

      <h2>Flights</h2>
      <p>
        Fly into <strong>Bandaranaike International Airport (CMB)</strong>, about
        30–45 minutes north of central Colombo. We will arrange for your transport from the airport to the hotel, our planners will be in touch with you.
      </p>
      <div className="grid">
        <div className="card">
          <h3>When to arrive</h3>
          {cocktail ? (
            <p>
              Plan to land by afternoon of <strong>Dec 1</strong> for the cocktail party (or
              the morning of Dec 2 at the latest). Depart <strong>Dec 4</strong>{" "}
              or later.
            </p>
          ) : (
            <p>
              Plan to land by the morning of <strong>Dec 2</strong> at the
              latest. Depart <strong>Dec 4</strong> or later.
            </p>
          )}
        </div>
        <div className="card">
          <h3>Common routes</h3>
          <p>
            Frequent connections via the Middle East (Doha, Dubai, Abu Dhabi),
            South/Southeast Asia (Delhi, Mumbai, Chennai, Bangkok, Singapore,
            KL), and other hubs.
          </p>
        </div>
        <div className="card">
          <h3>Book early</h3>
          <p>
            December is a busy season -- book your flights quickly! 
          </p>
        </div>
      </div>

      <h2>Visas &amp; entry (ETA)</h2>
      <p>
        Most visitors need an{" "}
        <strong>Electronic Travel Authorization (ETA)</strong> before arriving in
        Sri Lanka. Key points:
      </p>
      <ul>
        <li>
          Apply through the <strong>official government ETA portal</strong> —{" "}
          <a href="https://eta.gov.lk">[link]</a>. 
        </li>
        <li>
          The tourist ETA typically allows a short stay (commonly up to 30 days)
          — <strong>free of cost</strong>.
        </li>
        <li>
          Have your passport valid for at least <strong>6 months</strong> beyond
          your travel dates.
        </li>
        <li>
          Apply a few weeks in advance to be safe, even though approval typically takes 24-48 hours.
        </li>
      </ul>

      <h2>Getting around Colombo</h2>
      <div className="grid">
        <div className="card">
          <h3>Airport transfer</h3>
          <p>
            We will pick you up from the airport and drop you off. Once you know your 
            flights, please let us know either on the RSVP form or by emailing 
            us and we'll schedule the airport transfers.
          </p>
        </div>
        <div className="card">
          <h3>Ride-hailing</h3>
          <p>
            <strong>Uber</strong> 
            operates in Colombo and is the easiest way to get around.
          </p>
        </div>
        <div className="card">
          <h3>Tuk-tuks</h3>
          <p>
            Everywhere and fun for short hops. Agree the fare first or use a
            metered/app tuk-tuk. Usually need cash to pay for these.
          </p>
        </div>
        <div className="card">
          <h3>During the wedding</h3>
          <p>
            We will transport you to all the venues -- no need to worry about this!
          </p>
        </div>
      </div>

      <h2>Good to know</h2>
      <ul>
        <li>
          <strong>Currency:</strong> Sri Lankan Rupee (LKR). Cards are widely
          accepted in hotels; carry some cash for tuk-tuks and small shops.
        </li>
        <li>
          <strong>Time zone:</strong> Sri Lanka is UTC+5:30.
        </li>
        <li>
          <strong>Weather:</strong> December is warm and humid, [~27–30°C / ~81-86°F], with
          a chance of rain. Pack light, breathable clothing.
        </li>
      </ul>
    </Content>
  );
}
