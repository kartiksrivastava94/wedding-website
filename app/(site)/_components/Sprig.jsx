// Delicate botanical line-art sprig (olive/laurel style). Pure SVG, no image
// asset. Color comes from `currentColor`, so style it via CSS `color`.
export default function Sprig({ className }) {
  const positions = [
    { y: 84, len: 20, wid: 8 },
    { y: 70, len: 18, wid: 7 },
    { y: 56, len: 16, wid: 6 },
    { y: 43, len: 13, wid: 5 },
    { y: 31, len: 10, wid: 4 },
  ];
  const leaf = (p, angle, key) => (
    <path
      key={key}
      d={`M0 0 Q ${p.wid} ${-p.len / 2} 0 ${-p.len} Q ${-p.wid} ${-p.len / 2} 0 0 Z`}
      transform={`translate(30 ${p.y}) rotate(${angle})`}
    />
  );
  return (
    <svg
      className={className}
      viewBox="0 0 60 95"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M30 92 C 30 68 30 36 30 6" />
      <circle cx="30" cy="5" r="2.2" />
      {positions.map((p, i) => leaf(p, -52, `l${i}`))}
      {positions.map((p, i) => leaf(p, 52, `r${i}`))}
    </svg>
  );
}
