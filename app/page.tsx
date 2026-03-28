export default function Home() {
  return (
    <div className="space-y-10 pb-12">
      <section className="space-y-4">
        <p className="text-sm md:text-base leading-relaxed text-zinc-500">
          I&apos;m Nahi Khan, a developer who enjoys building deliberate, quiet
          interfaces that leave just enough room for curiosity. I care about
          small details, clear structure, and interfaces that feel calm even
          when the work they hold is intense.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-zinc-500">
          This space is a snapshot of what I&apos;m interested in right now:
          the books I&apos;m working through, the ideas I&apos;m trying to
          articulate in writing, and visual fragments that don&apos;t yet fit
          anywhere else.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Currently
        </h3>
        <ul className="space-y-2 text-sm md:text-base text-zinc-500">
          <li>Designing small tools that reduce friction in my own workflow.</li>
          <li>Exploring ways to make dense information feel light and readable.</li>
          <li>Collecting visual references that balance structure and softness.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Notes
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-zinc-500">
          I like pages that feel like they were designed for one reader at a
          time. Long margins, clear type, and enough whitespace that your eyes
          can rest between ideas. This layout is intentionally narrow, centered
          in the page, and padded away from the edges so that the content feels
          self-contained.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-zinc-500">
          Scroll a bit and you&apos;ll see how the navigation stays put on the
          left while the content moves on the right. This is meant to make it
          easy to jump between sections without ever losing your sense of where
          you are.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Elsewhere on this site
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-zinc-500">
          Visit{" "}
          <span className="text-zinc-800">books</span> for an evolving list of
          things I&apos;m reading,{" "}
          <span className="text-zinc-800">writing</span> for drafts and essays,
          and <span className="text-zinc-800">gallery</span> for images and
          visual experiments that don&apos;t need too much explanation.
        </p>
      </section>

      {Array.from({ length: 6 }, (_, i) => (
        <section key={i} className="space-y-4">
          <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
            Filler section {i + 1}
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-zinc-500">
            This is placeholder content to test scrolling behavior. The sidebar
            on the left should remain fixed in place while this content area
            scrolls freely using the browser&apos;s native scrollbar.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </section>
      ))}
    </div>
  );
}
