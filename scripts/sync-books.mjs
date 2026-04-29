import { createClient } from "@supabase/supabase-js";

const HARDCOVER_API = "https://api.hardcover.app/v1/graphql";
const TOKEN = process.env.HARDCOVER_TOKEN;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const STATUS_MAP = { 1: "to-read", 2: "currently-reading", 3: "read" };

if (!TOKEN || !SUPABASE_URL || !SERVICE_KEY) {
  throw new Error(
    "Missing env vars (HARDCOVER_TOKEN, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)"
  );
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

const payload = JSON.parse(
  Buffer.from(TOKEN.split(".")[1], "base64url").toString()
);
const userId = payload?.user?.id ?? parseInt(payload?.sub, 10);

const query = `
  query MyLibrary($userId: Int!) {
    user_books(
      where: { user_id: { _eq: $userId }, status_id: { _in: [1, 2, 3] } }
      order_by: { date_added: desc }
    ) {
      status_id
      rating
      date_added
      book {
        id
        title
        pages
        image { url }
        contributions { author { name } }
      }
    }
  }
`;

const res = await fetch(HARDCOVER_API, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({ query, variables: { userId } }),
});

const json = await res.json();
if (json.errors) throw new Error(json.errors[0].message);

const syncStart = new Date().toISOString();
const rows = json.data.user_books.map((ub) => ({
  hardcover_id: ub.book.id,
  title: ub.book.title,
  author: ub.book.contributions.map((c) => c.author.name).join(", "),
  status: STATUS_MAP[ub.status_id],
  cover_url: ub.book.image?.url ?? null,
  rating: ub.rating,
  total_pages: ub.book.pages,
  date_added: ub.date_added,
  synced_at: syncStart,
}));

const { error } = await supabase
  .from("books")
  .upsert(rows, { onConflict: "hardcover_id" });
if (error) throw error;

const { error: deleteError } = await supabase
  .from("books")
  .delete()
  .lt("synced_at", syncStart);
if (deleteError) throw deleteError;

console.log(`Synced ${rows.length} books`);
