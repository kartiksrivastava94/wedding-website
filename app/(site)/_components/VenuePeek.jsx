// Collapsible "See the venue" reveal for an event. Uses the native
// <details>/<summary> element — no JavaScript, accessible, keyboard-friendly.
// Pass one or more photos: [{ src, caption }].
export default function VenuePeek({ photos, label = "See the venue" }) {
  if (!photos || photos.length === 0) return null;
  return (
    <details className="venue">
      <summary>{label}</summary>
      <div className="venue-photos">
        {photos.map((p) => (
          <figure key={p.src}>
            <img src={p.src} alt={p.caption || "Venue photo"} loading="lazy" />
            {p.caption && <figcaption>{p.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </details>
  );
}
