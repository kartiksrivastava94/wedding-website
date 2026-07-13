import Link from "next/link";
import { getTrackInfo } from "@/lib/auth";
import Content from "../_components/Content";

export default async function Attire() {
  const { cocktail } = await getTrackInfo();

  return (
    <Content>
      <h1>What to Wear</h1>
      <p className="lead">
        Colombo is warm and humid, so keep things breathable. Here&rsquo;s a guide for each event.
      </p>

      <div className="callout">
        <p>
          South Asian weddings are very maximalist and bright, so you can never be over-dressed in whatever you choose to wear.  
          We would love for our guests to wear South Asian clothes but you are by no means required to. <strong>Above all, we want you to be comfortable.</strong> Everything
          below is a recommendation, never a requirement — please wear
          whatever makes you feel your best. 
        </p>
      </div>

      <h2>Event by event</h2>
      <div className="cardflow">
        {cocktail && (
          <div className="card">
            <h3>Pool Party &amp; Cocktails · Dec 1</h3>
            <p>
              Swimwear to start — come pool-ready. 
              For the evening we'll move into cocktails, 
              so bring something dressy-casual to change into. Western or east-west fusion is ideal.
              There will be changing rooms / showers / towels there in case you're not staying at the hotel that night.
            </p>
          </div>
        )}
        <div className="card">
          <h3>Welcome Lunch &amp; Mehendi · Dec 2</h3>
          <p>
            Casual, daytime — light South Asian wear or breezy summer clothes. 
            There'll be henna if you'd like it, so sleeves you can push up are handy.
          </p>
        </div>
        <div className="card">
          <h3>Sangeet · Dec 2</h3>
          <p>
            South Asian festive or cocktail attire that you can dance in.
            Our theme is art-deco-meets-disco, so bring glitter, glam, color, and energy. 
            It's outdoors on the beach, so lean toward lighter fabrics you'll stay comfortable in.
            Don't worry about shoes: hardwood floors cover most of the sand, so anything – 
            including heels – will work just fine. For those wearing South Asian, we recommend lehengas for women  and 
            kurtas (optionally with a scarf or Nehru jacket) for men.   
          </p>
        </div>
        <div className="card">
          <h3>Carnival brunch · Dec 3</h3>
          <p>
            Wear the brightest colors you own! Dress for a day-time carnival themed party. People will be wearing a mix of eastern and western attire. 

          </p>
        </div>
        <div className="card">
          <h3>Ceremony, Reception &amp; Afterparty · Dec 3</h3>
          <p>
            Our dressiest event — bring your finest in western formal or traditional South Asian attire. 
            One ask: please steer clear of red, since that’s the bride’s color. 
            Small touches of red are no problem. 
            And be ready to dance in it all at the afterparty! Women opting for South Asian may consider 
            a saree, a dressy kurta-shalwar, an anarkali dress or a lehenga again. Men may wear an Indian jacket (Bandhgala).
            Plenty of people will also be in western attire such as dresses and suits.
          </p>
        </div>
        <div className="card">
          <h3>Breakfast &amp; Checkout · Dec 4</h3>
          <p>
            No need to dress up — casual and whatever you&rsquo;d like to travel in.
          </p>
        </div>
      </div>

      <h2>New to South Asian attire?</h2>
      <p>
        If
        you&rsquo;d like to join us in wearing South Asian attire (which we'd VERY much LOVE but do not require), here are a few
        shops that offer ready-to-wear and made-to-order
        outfits (they ship internationally). Feel free to order from any of
        them. Give us a shout if you'd like our take on what you've selected!
      </p>
      <div className="grid">
        <div className="card">
          <h3>
            <a
              href="https://in.kalkifashion.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kalki Fashion →
            </a>
          </h3>
          <p className="muted">in.kalkifashion.com</p>
        </div>
        <div className="card">
          <h3>
            <a
              href="https://www.andaazfashion.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andaaz Fashion →
            </a>
          </h3>
          <p className="muted">andaazfashion.com</p>
        </div>
        <div className="card">
          <h3>
            <a
              href="https://palkhifashion.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Palkhi Fashion →
            </a>
          </h3>
          <p className="muted">palkhifashion.com</p>
        </div>
        <div className="card">
          <h3>
            <a href="https://odette.in/" target="_blank" rel="noopener noreferrer">
              Odette →
            </a>
          </h3>
          <p className="muted">odette.in</p>
        </div>
      </div>

      <Link className="btn" href="/colombo">
        Explore Colombo →
      </Link>
    </Content>
  );
}
