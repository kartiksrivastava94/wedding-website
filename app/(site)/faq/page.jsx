import Link from "next/link";
import { getTrackInfo } from "@/lib/auth";
import { site } from "@/lib/site";
import Content from "../_components/Content";

export default async function Faq() {
  const { cocktail, dec1Stay } = await getTrackInfo();

  return (
    <Content>
      <h1>Frequently Asked Questions</h1>

      <details open>
        <summary>What dates should I plan for?</summary>
        {cocktail ? (
          <p>
            Events run Dec 1–3, with checkout after breakfast on Dec 4. We
            recommend arriving by Dec 1 (for the cocktail party) and departing
            Dec 4 or later.
          </p>
        ) : (
          <p>
            Events run Dec 2–3, with checkout after breakfast on Dec 4. We
            recommend arriving by Dec 2 and departing Dec 4 or later.
          </p>
        )}
      </details>

      <details>
        <summary>Is there a particular time I should arrive at the hotel for check-ins?</summary>
        <p>
          We will try very hard to get you to your rooms without 
          having to wait too long. We will keep track of your flights and 
          arrival times, and will minimize how long you wait to get into your rooms 
          no matter what time your flight gets you to Colombo.
        </p>
      </details>      

      <details>
        <summary>Which nights are covered?</summary>
        <p>
          We&rsquo;re hosting your room for the nights of{" "}
          {dec1Stay ? (
            <strong>Dec 1, Dec 2 and Dec 3</strong>
          ) : (
            <strong>Dec 2 and Dec 3</strong>
          )}{" "}
          at ITC Ratnadipa. See the <Link href="/stay">Stay</Link> page for
          details on {cocktail && !dec1Stay ? "the Dec 1 night and " : ""}extra
          stays.
        </p>
      </details>

      <details>
        <summary>Do I need a visa?</summary>
        <p>
          Most visitors need an ETA before arrival. See{" "}
          <Link href="/travel">Travel</Link> for how to apply through the
          official portal. 
        </p>
      </details>

      <details>
        <summary>Can I bring kids?</summary>
        <p>
          Yes! Kids are very welcome. 
        </p>
      </details>

      <details>
        <summary>What should I wear?</summary>
        <p>
          See the <Link href="/attire">Attire</Link> page for a per-event guide.        
        </p>
      </details>

      <details>
        <summary>How do I get around?</summary>
        <p>
          Most events are at ITC Ratnadipa, and we will take care of your airport transfers 
          and getting to and from the venues. See{" "} <Link href="/travel">Travel</Link>.
        </p>
      </details>

      <details>
        <summary>Is there a registry?</summary>
        <p>
          Your presence is the only gift we need!
        </p>
      </details>

      <details>
        <summary>Any dietary or accessibility needs?</summary>
        <p>
          Let us know on the <Link href="/rsvp">RSVP</Link> and we&rsquo;ll make sure to accommodate.
        </p>
      </details>

      <details>
        <summary>Who do I contact with questions?</summary>
        <p>
          Email us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> or reach out to us directly.
        </p>
      </details>

      <Link className="btn" href="/rsvp">
        RSVP
      </Link>
    </Content>
  );
}
