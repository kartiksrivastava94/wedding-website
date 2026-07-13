import Link from "next/link";
import { getTrackInfo } from "@/lib/auth";
import Content from "../_components/Content";

function EventPhotos({ photos, stacked = false }) {
  if (!photos || photos.length === 0) return null;
  return (
    <div className={stacked ? "event-photos event-photos-stacked" : "event-photos"}>
      {photos.map((p) => (
        <figure key={p.src}>
          <img src={p.src} alt={p.caption || "Venue photo"} loading="lazy" />
          {p.caption && <figcaption>{p.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export default async function Schedule() {
  const { cocktail } = await getTrackInfo();

  return (
    <Content>
      <h1>Schedule of Events</h1>
      <p className="lead">Three days of celebration in Colombo.</p>

      <div className="homebase">
        <div>
          <h3>Your home base — The Oyster Bar</h3>
          <p>
            Throughout the celebrations, The Oyster Bar at ITC Ratnadipa is our
            home base. Drop by any time for tea, coffee, and a snack. It&rsquo;s
            a relaxed spot to unwind with friends and family between events, or to wait while the hotel staff checks you in.
          </p>
        </div>
        <img src="/images/oyster-bar.png" alt="The Oyster Bar, ITC Ratnadipa" />
      </div>

      {cocktail && (
        <div className="day">
          <p className="day-label">Monday · December 1</p>
          <div className="event">
            <div className="event-text">
              <p className="time">Evening · 5 pm onwards</p>
              <h3>
                Pool Party and Cocktails <span className="badge">Evening</span>
              </h3>
              <p>
                This is for everyone who arrives a day before the main wedding. A pool party with snacks and drinks, followed by dinner,
                drinks and dancing till late.
              </p>
              <p className="muted">
                Venue: Infinity Pool and Ahasa Bar, ITC Ratnadipa 
              </p>
            </div>
            <EventPhotos
              stacked
              photos={[
                { src: "/images/swimming-pool.jpg", caption: "Infinity Pool, ITC Ratnadipa" },
                { src: "/images/ahasa.jpg", caption: "Ahasa Bar, ITC Ratnadipa" },
              ]}
            />
          </div>
        </div>
      )}

      <div className="day">
        <p className="day-label">Tuesday · December 2</p>
        <div className="event">
          <div className="event-text">
            <p className="time">Midday · 11 am - 2 pm</p>
            <h3>
              Welcome Lunch <span className="badge">Daytime</span>
            </h3>
            <p>A casual lunch to welcome you to the festivities. There will be mehendi (henna) artists for those who&rsquo;d like some.</p>
            <p className="gloss">
            </p>
            <p className="muted">
              Venue: The Islander Bar, ITC Ratnadipa 
            </p>
          </div>
          <EventPhotos
            photos={[
              { src: "/images/islander.jpg", caption: "The Islander Bar, ITC Ratnadipa" },
            ]}
          />
        </div>
        <div className="event">
          <div className="event-text">
            <p className="time">Evening · 5 pm onwards</p>
            <h3>
              Sangeet/Mehndi <span className="badge">Evening</span>
            </h3>
            <p>Music, dancing, and performances. This is the big party night.</p>
            <p className="gloss">
              <strong>New to it?</strong> Families and friends put on choreographed group dance performances at the sangeet/mehndi to celebrate the upcoming wedding.
              It usually ends with everyone on the dance floor, dancing well into the night. We'll be on the beach for this one!
            </p>
            <p className="muted">
              Venue: The Bellevue Beach Club, Colombo Port City 
            </p>
          </div>
          <EventPhotos
            stacked
            photos={[
              { src: "/images/bellevue1.jpeg", caption: "The Bellevue Beach Club, Colombo Port City" },
              { src: "/images/bellevue2.jpeg", caption: "The Bellevue Beach Club, Colombo Port City" },
            ]}
          />
        </div>
      </div>

      <div className="day">
        <p className="day-label">Wednesday · December 3</p>
        <div className="event">
          <div className="event-text">
            <p className="time">Morning · 10 am - 2 pm</p>
            <h3>
              Carnival Brunch <span className="badge">Daytime</span>
            </h3>
            <p>A festive carnival with drinks and brunch, games and laughter.</p>
             <p className="muted">
              Venue: The Panorama Deck, ITC Ratnadipa
            </p>
          </div>
          <EventPhotos
            photos={[
              { src: "/images/panorama-deck.jpg", caption: "The Panorama Deck, ITC Ratnadipa" },
            ]}
          />
        </div>
        <div className="event">
          <div className="event-text">
            <p className="time">Late afternoon · 4 pm onwards</p>
            <h3>
              Wedding Procession, Ceremony, Reception &amp; Afterparty{" "}
              <span className="badge">Evening</span>
            </h3>
            <p>
              A short procession and ceremony, followed by dinner, reception, and
              afterparty.
            </p>
            <p className="gloss">
              <strong>New to it?</strong> The groom's wedding party arrives in a procession
              (baraat) — a joyful entrance with
              drums and dancing.
            </p>
            <p className="muted">
              Venue: The Chequerboard, Galle Face Hotel 
            </p>
          </div>
          <EventPhotos
            stacked
            photos={[
              { src: "/images/chequerboard.jpeg", caption: "The Chequerboard, Galle Face Hotel" },
              { src: "/images/chequerboard2.jpeg", caption: "The Chequerboard, Galle Face Hotel" },
            ]}
          />
        </div>
      </div>

      <div className="day">
        <p className="day-label">Thursday · December 4</p>
        <div className="event">
          <div className="event-text">
            <p className="time">Morning</p>
            <h3>
              Breakfast &amp; Checkout <span className="badge">Farewell</span>
            </h3>
            <p>
              Join us for breakfast before you head off. Checkout is after
              breakfast.
            </p>
            <p className="muted">
              Venue: The Indian Ocean Pavillion 
            </p>
            <p className="muted">
              See <Link href="/travel">Travel</Link> for airport transfer
              guidance.
            </p>
          </div>
          <EventPhotos
            photos={[
              { src: "/images/breakfast.jpg", caption: "Indian Ocean Pavillion, ITC Ratnadipa" },
            ]}
          />
        </div>
      </div>

      <Link className="btn" href="/rsvp">
        RSVP
      </Link>
    </Content>
  );
}
