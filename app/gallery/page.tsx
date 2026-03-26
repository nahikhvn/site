export default function GalleryPage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-50">
          Gallery
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          A small, rotating gallery of visual references—moments, colors, and
          compositions that feel aligned with the kind of work I want to make.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Imagined tiles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-zinc-800/70 bg-zinc-900/60 p-4">
            <div className="h-24 rounded bg-gradient-to-br from-zinc-700 to-zinc-900 mb-3" />
            <p className="text-xs md:text-sm leading-relaxed text-zinc-400">
              A soft gradient tile—muted, low contrast, designed to sit quietly
              in the background of a dense interface.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-800/70 bg-zinc-900/60 p-4">
            <div className="h-24 rounded bg-gradient-to-br from-slate-800 to-slate-950 mb-3" />
            <p className="text-xs md:text-sm leading-relaxed text-zinc-400">
              A darker block, almost black, for when you want to foreground
              text and let everything else recede.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-800/70 bg-zinc-900/60 p-4">
            <div className="h-24 rounded bg-gradient-to-br from-zinc-800 to-slate-800 mb-3" />
            <p className="text-xs md:text-sm leading-relaxed text-zinc-400">
              A subtle band of light—more suggestion than shape—hinting at
              structure without forcing strict boundaries.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-800/70 bg-zinc-900/60 p-4">
            <div className="h-24 rounded bg-gradient-to-br from-neutral-700 to-neutral-900 mb-3" />
            <p className="text-xs md:text-sm leading-relaxed text-zinc-400">
              A neutral canvas tile, the kind you might use for a dashboard
              card, note, or quick sketch of an idea.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Why visuals matter
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          Even in text-heavy interfaces, a few careful visual decisions can
          change how the whole page feels. The right margins, the right
          contrast, and the right amount of quiet space can make information
          feel less demanding and more approachable.
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
