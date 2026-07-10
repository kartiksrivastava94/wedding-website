import Link from "next/link";
import { getTrackInfo } from "@/lib/auth";
import Content from "../_components/Content";
import VenuePeek from "../_components/VenuePeek";

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
            home base. Drop by any time for tea, coffee, and snacks — you&rsquo;ll
            always find someone from our families there to chat with, and it&rsquo;s
            a relaxed spot to catch up with friends and family between events.
          </p>
        </div>
        <img src="/images/oyster-bar.jpg" alt="The Oyster Bar, ITC Ratnadipa" />
      </div>

      {cocktail && (
        <div className="day">
          <p className="day-label">Monday · December 1</p>
          <div className="event">
            <p className="time">Evening · 5 pm onwards</p>
            <h3>
              Pool Party and Cocktails <span className="badge">Welcome</span>
            </h3>
            <p>
              A pool party reunion with snacks and drinks, followed by dinner,
              drinks and dancing till the wee hours.
            </p>
            <p className="muted">
              Venue: Infinity Pool and Ahasa Bar, ITC Ratnadipa · Attire: Start
              with swimwear / pool attire, and then transition to party wear.
            </p>
            <VenuePeek
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
          <p className="time">Midday · 11 am - 2 pm</p>
          <h3>
            Welcome Lunch &amp; Mehendi <span className="badge">Daytime</span>
          </h3>
          <p>A relaxed lunch with mehendi (henna) for those who&rsquo;d like it.</p>
          <p className="gloss">
            <strong>New to it?</strong> Mehendi is the tradition of decorating
            hands (and sometimes feet) with intricate, temporary henna designs —
            a natural reddish-brown paste that fades over a week or two. Getting
            a design is completely optional; mostly it&rsquo;s a relaxed
            afternoon of food and company.
          </p>
          <p className="muted">
            Venue: The Islander Bar, ITC Ratnadipa · Attire: Daytime and
            festive — light South Asian wear or breezy summer clothes.
          </p>
          <VenuePeek
            photos={[
              { src: "/images/islander.jpeg", caption: "The Islander Bar, ITC Ratnadipa" },
            ]}
          />
        </div>
        <div className="event">
          <p className="time">Evening · 5 pm onwards</p>
          <h3>
            Sangeet <span className="badge">Evening</span>
          </h3>
          <p>Music, dancing, and performances. The big party night.</p>
          <p className="gloss">
            <strong>New to it?</strong> A sangeet is the big musical celebration
            before the wedding — families put on dance performances and everyone
            ends up on the floor. Nothing to prepare or learn in advance; just
            come ready to celebrate.
          </p>
          <p className="muted">
            Venue: The Bellevue Beach Club, Colombo Port City · Attire: South
            Asian festive or cocktail attire you can dance in; it&rsquo;s an
            outdoor event, so dressy but light is ideal.
          </p>
          <VenuePeek
            photos={[
              { src: "/images/bellevue.jpg", caption: "The Bellevue Beach Club, Colombo Port City" },
            ]}
          />
        </div>
      </div>

      <div className="day">
        <p className="day-label">Wednesday · December 3</p>
        <div className="event">
          <p className="time">Morning · 10 am - 2 pm</p>
          <h3>
            Haldi Lunch <span className="badge">Daytime</span>
          </h3>
          <p>A festive haldi carnival with drinks and lunch.</p>
          <p className="gloss">
            <strong>New to it?</strong> Haldi is a playful pre-wedding ritual
            where turmeric paste — bright yellow, and said to bless and brighten
            the couple — gets smeared around, often on guests too. Expect a bit
            of mess and a lot of laughter, so wear something you don&rsquo;t mind
            staining.
          </p>
          <p className="muted">
            Venue: The Panorama Deck, ITC Ratnadipa · Attire: Wear yellow if you
            can, and something you don&rsquo;t mind getting a little messy.
          </p>
          <VenuePeek
            photos={[
              { src: "/images/panorama-deck.jpg", caption: "The Panorama Deck, ITC Ratnadipa" },
            ]}
          />
        </div>
        <div className="event">
          <p className="time">Late afternoon · 4 pm onwards</p>
          <h3>
            Wedding Procession, Ceremony, Reception &amp; Afterparty{" "}
            <span className="badge">Main event</span>
          </h3>
          <p>
            A short procession and ceremony, followed by dinner, reception, and
            afterparty.
          </p>
          <p className="gloss">
            <strong>New to it?</strong> The wedding party arrives in a procession
            (baraat) — a joyful, music-and-dancing entrance, sometimes with
            drums, before the ceremony begins. Feel free to join in.
          </p>
          <p className="muted">
            Venue: The Chequerboard, Galle Face Hotel · Attire: Our dressiest
            event — formal or traditional South Asian attire.
          </p>
          <VenuePeek
            photos={[
              { src: "/images/chequerboard.jpeg", caption: "The Chequerboard, Galle Face Hotel" },
            ]}
          />
        </div>
      </div>

      <div className="day">
        <p className="day-label">Thursday · December 4</p>
        <div className="event">
          <p className="time">Morning</p>
          <h3>
            Breakfast &amp; Checkout <span className="badge">Farewell</span>
          </h3>
          <p>
            Join us for breakfast before you head off. Checkout is after
            breakfast.
          </p>
          <p className="muted">
            See <Link href="/travel">Travel</Link> for airport transfer
            guidance.
          </p>
        </div>
      </div>

      <Link className="btn" href="/rsvp">
        RSVP
      </Link>
    </Content>
  );
}
