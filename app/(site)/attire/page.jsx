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
          South Asian wedding attire is very maximalist and bright, so you can never be over-dressed in whatever you choose to wear.  
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
              Swimwear and pool-friendly clothes to start, then change into
              party wear for the evening. Most people will be wearing western attire or an east-west fusion situation.
            </p>
          </div>
        )}
        <div className="card">
          <h3>Welcome Lunch &amp; Mehendi · Dec 2</h3>
          <p>
            Casual, daytime and festive — light South Asian wear or breezy summer clothes.
          </p>
        </div>
        <div className="card">
          <h3>Sangeet · Dec 2</h3>
          <p>
            South Asian festive or cocktail attire you can dance
            in. Bring color and energy. We're going with an art-deco-meets-disco theme so we welcome glitter and glam in your outfits. This event is outdoors and on the beach so something 
            dressy but also light would be ideal. We'll have hardwood floors covering most of the sand so all types of footwear should work just fine.
          </p>
        </div>
        <div className="card">
          <h3>Haldi Lunch · Dec 3</h3>
          <p>
            Wear yellow or orange if you can! Pick something you don&rsquo;t mind getting a 
            little messy because we&rsquo;ll invite you to (optionally) play with color.
          </p>
        </div>
        <div className="card">
          <h3>Ceremony, Reception &amp; Afterparty · Dec 3</h3>
          <p>
            Our dressiest event — formal or traditional South Asian attire. Ideally you would avoid red.
            Bring your finest! But also be prepared to dance in it at the afterparty!
          </p>
        </div>
      </div>

      <h2>New to South Asian attire?</h2>
      <p>
        If
        you&rsquo;d like to join us in wearing South Asian attire (which we'd VERY much LOVE), here are a few
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
