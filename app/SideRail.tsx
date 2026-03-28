"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "me" },
  { href: "/books", label: "books" },
  { href: "/writing", label: "writing" },
  { href: "/gallery", label: "gallery" },
];

export function SideRail() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-48 flex flex-col gap-6">
      {links.map(({ href, label }) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`group flex items-center transition-colors ${
              isActive
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            <span
              className={`block h-px transition-all duration-300 ${
                isActive
                  ? "w-8 bg-zinc-900 dark:bg-zinc-100"
                  : "w-5 bg-zinc-300 dark:bg-zinc-600 group-hover:w-8 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100"
              }`}
            />
            <span
              className="text-xs tracking-widest uppercase ml-2"
              style={{ transform: "rotate(-20deg)", transformOrigin: "left center" }}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
