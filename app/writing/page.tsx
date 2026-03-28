import Link from "next/link";

type Entry = {
  title: string;
  date: string;
  description: string;
  tag: "essay" | "note" | "external";
  href: string;
  source?: string;
};

const entries: Entry[] = [
  {
    title: "Tools that disappear",
    date: "2026-03-14",
    description:
      "On the difference between software that demands attention and software that gets out of the way. Why the best interfaces feel like nothing at all.",
    tag: "essay",
    href: "/writing/tools-that-disappear",
  },
  {
    title: "Calm software in an anxious world",
    date: "2026-02-28",
    description:
      "A thread on why notification counts, red badges, and urgency cues are design failures — and what the alternative looks like.",
    tag: "external",
    href: "https://x.com/nahikhvn",
    source: "x.com",
  },
];

const tagStyles: Record<Entry["tag"], string> = {
  essay: "text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600",
  note: "text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600",
  external: "text-zinc-500 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600",
};

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function WritingPage() {
  return (
    <div className="space-y-10 pb-12">
      <p className="text-sm md:text-base leading-relaxed text-zinc-500">
        Drafts, fragments, and essays. Some live here, others link out to where
        they were first published.
      </p>

      <div className="space-y-0">
        {entries.map((entry) => {
          const isExternal = entry.tag === "external";
          const className = "group block py-5 border-b border-zinc-100 dark:border-zinc-800 first:border-t";

          const inner = (
            <>
              <div className="flex items-baseline justify-between gap-4 mb-1.5">
                <h3 className="text-sm md:text-base font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                  {entry.title}
                  {isExternal && (
                    <span className="ml-1.5 text-zinc-400 text-xs">↗</span>
                  )}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[10px] uppercase tracking-widest border rounded-full px-2 py-0.5 ${tagStyles[entry.tag]}`}
                  >
                    {entry.tag === "external" ? entry.source : entry.tag}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {formatDate(entry.date)}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {entry.description}
              </p>
            </>
          );

          return isExternal ? (
            <a key={entry.title} href={entry.href} target="_blank" rel="noreferrer" className={className}>
              {inner}
            </a>
          ) : (
            <Link key={entry.title} href={entry.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
