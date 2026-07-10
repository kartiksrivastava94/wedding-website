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
          <strong>Above all, we want you to be comfortable.</strong> Everything
          below is a lightly-held suggestion, never a requirement — please wear
          whatever makes you feel your best. There&rsquo;s absolutely no need to
          follow a dress code, and no one will look out of place. Come as you
          are and celebrate with us.
        </p>
      </div>

      <h2>Event by event</h2>
      <div className="cardflow">
        {cocktail && (
          <div className="card">
            <h3>Pool Party &amp; Cocktails · Dec 1</h3>
            <p>
              Swimwear and pool-friendly clothes to start, then change into
              relaxed party wear — smart casual or cocktail — for the evening.
            </p>
          </div>
        )}
        <div className="card">
          <h3>Welcome Lunch &amp; Mehendi · Dec 2</h3>
          <p>
            Daytime and festive — light South Asian wear or breezy summer clothes.
          </p>
        </div>
        <div className="card">
          <h3>Sangeet · Dec 2</h3>
          <p>
            Festive and fun — South Asian festive or cocktail attire you can dance
            in. Bring color and energy. This is an outdoors event so something 
            dressy but also light would be ideal.
          </p>
        </div>
        <div className="card">
          <h3>Haldi Lunch · Dec 3</h3>
          <p>
            Wear yellow if you can! Pick something you don&rsquo;t mind getting a 
            little messy because we&rsquo;ll invite you to (optionally) play with color.
          </p>
        </div>
        <div className="card">
          <h3>Ceremony, Reception &amp; Afterparty · Dec 3</h3>
          <p>
            Our dressiest event — formal or traditional South Asian attire.
            Bring your finest!
          </p>
        </div>
      </div>

      <h2>New to South Asian attire?</h2>
      <p>
        Not sure where to start? Truly, anything you&rsquo;re comfortable in is
        perfect — Western formal or festive works wonderfully too. But if
        you&rsquo;d like to join in the South Asian dressing, here are a few
        shops we&rsquo;ve found that offer ready-to-wear and made-to-order
        outfits (many ship internationally). Feel free to order from any of
        them:
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
