export default function BooksPage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-50">
          Books
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          A loose log of books I&apos;ve read, am reading, or keep returning to.
          This isn&apos;t a complete list or a ranking, just a record of what
          has stayed with me for longer than a moment.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          In progress
        </h3>
        <ul className="space-y-2 text-sm md:text-base text-zinc-400">
          <li>
            <span className="text-zinc-200">The Architecture of Happiness</span>{" "}
            — Alain de Botton
          </li>
          <li>
            <span className="text-zinc-200">The Wager</span>{" "}
            — David Grann
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Recently finished
        </h3>
        <ul className="space-y-2 text-sm md:text-base text-zinc-400">
          <li>
            <span className="text-zinc-200">The Creative Act</span>{" "}
            — Rick Rubin
          </li>
          <li>
            <span className="text-zinc-200">A Ghost in the Throat</span>{" "}
            — Doireann N&iacute; Ghr&iacute;ofa
          </li>
          <li>
            <span className="text-zinc-200">Tomorrow, and Tomorrow, and Tomorrow</span>{" "}
            — Gabrielle Zevin
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Why this list exists
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          I use lists like this to remember what I was thinking about at certain
          points in time. Books tend to mark seasons of my life more clearly
          than anything else—they show up when I&apos;m looking for something,
          even if I don&apos;t know what that something is yet.
        </p>
      </section>
    </div>
  );
}
