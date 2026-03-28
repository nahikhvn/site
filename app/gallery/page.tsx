const pieces: {
  gradient: string;
  title: string;
  area: string;
}[] = [
  { gradient: "from-amber-200 via-orange-100 to-yellow-50", title: "Morning warmth", area: "1 / 1 / 4 / 5" },
  { gradient: "from-slate-800 via-zinc-700 to-neutral-900", title: "Deep structure", area: "1 / 5 / 5 / 7" },
  { gradient: "from-sky-200 via-blue-100 to-indigo-50", title: "Open field", area: "4 / 1 / 7 / 3" },
  { gradient: "from-emerald-200 via-teal-100 to-cyan-50", title: "Soft focus", area: "4 / 3 / 7 / 5" },
  { gradient: "from-rose-300 via-pink-200 to-fuchsia-100", title: "Quiet bloom", area: "5 / 5 / 7 / 7" },
  { gradient: "from-zinc-300 via-stone-200 to-zinc-100", title: "Neutral ground", area: "7 / 1 / 10 / 4" },
  { gradient: "from-violet-300 via-purple-200 to-indigo-100", title: "Evening haze", area: "7 / 4 / 9 / 7" },
  { gradient: "from-stone-800 via-neutral-700 to-stone-600", title: "Raw material", area: "9 / 4 / 12 / 7" },
  { gradient: "from-orange-200 via-amber-100 to-yellow-100", title: "Worn paper", area: "10 / 1 / 12 / 4" },
  { gradient: "from-cyan-200 via-sky-100 to-blue-50", title: "Cold glass", area: "12 / 1 / 14 / 3" },
  { gradient: "from-zinc-900 via-zinc-800 to-zinc-700", title: "Dark room", area: "12 / 3 / 14 / 5" },
  { gradient: "from-lime-200 via-green-100 to-emerald-50", title: "New leaf", area: "12 / 5 / 14 / 7" },
];

export default function GalleryPage() {
  return (
    <div className="space-y-8 pb-12">
      <p className="text-sm md:text-base leading-relaxed text-zinc-500">
        Visual fragments — colors, textures, and compositions I keep coming
        back to.
      </p>

      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(13, 55px)",
        }}
      >
        {pieces.map((piece) => (
          <div
            key={piece.title}
            className="group relative overflow-hidden rounded-sm"
            style={{ gridArea: piece.area }}
          >
            <div
              className={`bg-gradient-to-br ${piece.gradient} absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]`}
            />
            <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[10px] uppercase tracking-widest px-3 py-2 text-white/80 bg-black/30 backdrop-blur-sm w-full">
                {piece.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
