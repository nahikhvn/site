export default function WritingPage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="space-y-4">
        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          Drafts, fragments, and essays. Most of what I write starts as notes to
          myself—this page is where some of those notes eventually surface in a
          more shareable form.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          On building
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          I&apos;m interested in tools that feel like they were made for one
          person at a time. Not in the sense of being exclusive, but in how they
          respond—calmly, predictably, and with a sense that someone thought
          carefully about the edges you might run into.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          Good tools disappear when you&apos;re using them. Great tools make
          you notice the work instead of the interface.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          On learning in public
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          Sharing work-in-progress is uncomfortable but useful. It forces ideas
          out of your head and into a form that has to stand on its own, even if
          only briefly. I think of this page as a place for that kind of work:
          structured enough to read, loose enough to change.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          What&apos;s next
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          Future pieces will probably explore the overlap between engineering,
          interface design, and how people actually experience software in their
          day-to-day lives. For now, this space is intentionally small and
          simple—a quiet place to scroll through ideas.
        </p>
      </section>

      {Array.from({ length: 6 }, (_, i) => (
        <section key={i} className="space-y-4">
          <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
            Filler section {i + 1}
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-zinc-400">
            This is placeholder content to test scrolling behavior. The sidebar
            on the left should remain fixed in place while this content area
            scrolls freely using the browser&apos;s native scrollbar.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </section>
      ))}
    </div>
  );
}
