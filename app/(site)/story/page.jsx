import Content from "../_components/Content";
import HeroCarousel from "../_components/HeroCarousel";

export default function Story() {
  return (
    <div className="page-with-side-photos story">
      <div className="page-main">
        <div className="hero-carousel-mobile">
          <HeroCarousel />
        </div>
        <Content>
          <h1>Our Story</h1>

          <p>
            We met during our first year as undergrads at Yale. There aren&rsquo;t many
            international students there, so we found each other almost
            immediately through shared friends, music, and economics
            classes. Before long, we were close friends.
          </p>

          <p>
            By senior year, it was obvious &mdash; to us and to everyone
            around us &mdash; that we liked each other. It was equally
            obvious that doing anything about it made very little sense.
            Kartik is from an Indian Hindu family, Amen from a Pakistani
            Muslim one. After graduation, he&rsquo;d be returning to India
            while she'd be staying in the US. The practical thing to do was to
            ignore our feelings. 
          </p>

          <p>
            As you may have gathered, we are not very
            practical. So while we didn&rsquo;t say anything out loud, we spent nearly all our
            time together &mdash; studying in libraries, working through
            problem sets, and inventing increasingly contrived excuses to see
            each other. Our friends were wiser than us. They did not buy the &ldquo;just
            friends&rdquo; story for a minute, and took to texting one
            another photos of us whenever they spotted us together.
          </p>

          <p>
            As graduation crept closer and the reality of parting ways set
            in, we finally admitted what everyone else had known all along
            &mdash; to ourselves and to each other. Once we did, there
            was no going back. With two months left before graduation, we
            made the thoroughly impractical decision to start dating.
          </p>

          <p>
            What followed was a glorious summer together in New Haven, soaking up our
            last few weeks in a distant place that had become home to us. Then, as planned,
            we said goodbye at graduation &mdash; but immediately realized we weren&rsquo;t
            ready to let go. So began an even more impractical
            US-India long-distance relationship.
          </p>

          <p>
            A year later, we somehow engineered a way for Kartik to move from Delhi to
            Washington DC, where Amen lived and worked. We spent two
            wonderful years in a city we grew to love. And then,
            just to ruin it all, we both applied to PhDs. Cue another
            stretch of long distance, this time between Boston and London.
            We&rsquo;ve since finished our PhDs but sadly, not the long
            distance, which remains between those same two cities.
          </p>

          <p>
            All of this is to say: no part of this has ever been easy. It
            has spanned continents, religions, a pandemic, and more
            flights than we care to count, all in the long shadow of a
            senseless border drawn 79 years ago. And yet, through every bit of
            it, we&rsquo;ve never quite managed to let go of each other.
            After nine years, we&rsquo;ve decided we never will.  
          </p>

          <p>
            Which, all things considered, may be our first practical
            decision after all.
          </p>

          <p>
           We hope to see you in Colombo to celebrate
            this new chapter!
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
