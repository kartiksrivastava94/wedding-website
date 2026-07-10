// Shared page shell: the centered content column. Home adds a full-width
// hero before this.
export default function Content({ children }) {
  return (
    <main>
      <div className="container">{children}</div>
    </main>
  );
}
