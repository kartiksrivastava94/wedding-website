"use client";

import { useRef, useState } from "react";

const PHOTOS = [
  { src: "/images/photo-01.jpg", alt: "Amen and Kartik at Edinburgh Castle" },
  { src: "/images/photo-02.jpg", alt: "Amen and Kartik at the beach" },
  { src: "/images/photo-03.jpg", alt: "Amen and Kartik at the Eiffel Tower" },
  { src: "/images/photo-04.jpg", alt: "Amen and Kartik by a blue wall" },
  { src: "/images/photo-05.jpg", alt: "Amen and Kartik on the water" },
  { src: "/images/photo-06.jpg", alt: "Amen and Kartik on the beach" },
  { src: "/images/photo-07.jpg", alt: "Amen and Kartik at a cafe" },
  { src: "/images/photo-08.jpg?v=2", alt: "Amen and Kartik by a heart sculpture" },
  { src: "/images/photo-10.jpg", alt: "Amen and Kartik on a mountain trek" },
  { src: "/images/photo-11.jpg", alt: "Amen and Kartik at the theatre" },
  { src: "/images/photo-12.jpg", alt: "Amen and Kartik at the beach" },
  { src: "/images/photo-13.jpg", alt: "Amen and Kartik on a pier" },
  { src: "/images/photo-14.jpg", alt: "Amen and Kartik in the snow" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const slideRefs = useRef([]);

  function goTo(i) {
    const clamped = Math.max(0, Math.min(PHOTOS.length - 1, i));
    setIndex(clamped);
  }

  function onDragStart(clientX) {
    dragging.current = true;
    startX.current = clientX;
  }

  function onDragMove(clientX) {
    if (!dragging.current) return;
    setDragOffset(clientX - startX.current);
  }

  function onDragEnd() {
    if (!dragging.current) return;
    dragging.current = false;
    if (Math.abs(dragOffset) > 40) {
      goTo(index + (dragOffset < 0 ? 1 : -1));
    }
    setDragOffset(0);
  }

  // Distance (in px) from the start of the track to the start of `index`'s
  // slide, based on each slide's actual rendered (natural-aspect) width.
  let baseOffset = 0;
  for (let i = 0; i < index; i++) {
    const el = slideRefs.current[i];
    baseOffset += (el?.offsetWidth || 0) + 10; // + gap
  }

  return (
    <div className="hero-carousel">
      <div
        className="hero-carousel-track"
        style={{
          transform: `translateX(${-baseOffset + dragOffset}px)`,
          transition: dragging.current ? "none" : "transform 0.3s ease",
        }}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {PHOTOS.map((photo, i) => (
          <div
            key={photo.src}
            ref={(el) => (slideRefs.current[i] = el)}
            className="hero-carousel-slide"
          >
            <img
              className="hero-carousel-photo"
              src={photo.src}
              alt={photo.alt}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="hero-carousel-dots">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className={`hero-carousel-dot${i === index ? " active" : ""}`}
            aria-label={`Show photo ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
