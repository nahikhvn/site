import { createClient } from "@supabase/supabase-js";
import {
  PerspectiveBook,
  BookTitle,
  BookDescription,
} from "@/components/perspective-book";

export const revalidate = 3600;

type Book = {
  hardcover_id: number;
  title: string;
  author: string | null;
  status: "to-read" | "currently-reading" | "read";
  cover_url: string | null;
  rating: number | null;
  date_added: string | null;
};

export default async function BooksPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data } = await supabase
    .from("books")
    .select("*")
    .order("date_added", { ascending: false });

  const books = (data ?? []) as Book[];

  const groups: { label: string; books: Book[] }[] = [
    {
      label: "Currently reading",
      books: books.filter((b) => b.status === "currently-reading"),
    },
    {
      label: "Read",
      books: books.filter((b) => b.status === "read"),
    },
    {
      label: "To read",
      books: books.filter((b) => b.status === "to-read"),
    },
  ];

  return (
    <div className="space-y-12 pb-12">
      <section className="space-y-4">
        <p className="text-sm md:text-base leading-relaxed text-zinc-500">
          A loose log of books I&apos;ve read, am reading, or keep returning to.
          This isn&apos;t a complete list or a ranking, just a record of what
          has stayed with me for longer than a moment.
        </p>
      </section>

      {groups.map(({ label, books }) =>
        books.length === 0 ? null : (
          <section key={label} className="space-y-6">
            <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
              {label}
            </h3>
            <BookGrid books={books} />
          </section>
        )
      )}

      {books.length === 0 && (
        <p className="text-sm md:text-base leading-relaxed text-zinc-500">
          The shelf is empty for now. Run the sync script to populate it.
        </p>
      )}

      <section className="space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Why this list exists
        </h3>
        <p className="text-sm md:text-base leading-relaxed text-zinc-500">
          I use lists like this to remember what I was thinking about at certain
          points in time. Books tend to mark seasons of my life more clearly
          than anything else—they show up when I&apos;m looking for something,
          even if I don&apos;t know what that something is yet.
        </p>
      </section>
    </div>
  );
}

function BookGrid({ books }: { books: Book[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-10 gap-y-10">
      {books.map((b) => (
        <li
          key={b.hardcover_id}
          className="flex flex-col items-center gap-3"
        >
          <PerspectiveBook size="default">
            {b.cover_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={b.cover_url}
                alt={b.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <>
                <BookTitle className="text-sm leading-tight">
                  {b.title}
                </BookTitle>
                {b.author && (
                  <BookDescription>{b.author}</BookDescription>
                )}
              </>
            )}
          </PerspectiveBook>

          <div className="w-full space-y-0.5 text-center">
            <p className="text-sm leading-snug text-zinc-800">{b.title}</p>
            {b.author && (
              <p className="text-xs leading-snug text-zinc-500">{b.author}</p>
            )}
            {b.rating ? (
              <p
                className="text-xs text-zinc-500"
                aria-label={`${b.rating} out of 5`}
              >
                {"★".repeat(b.rating)}
                <span className="text-zinc-300">
                  {"★".repeat(5 - b.rating)}
                </span>
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
