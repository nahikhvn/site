"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "me" },
  { href: "/books", label: "books" },
  { href: "/writing", label: "writing" },
  { href: "/gallery", label: "gallery" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="sm:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-5 py-2.5 rounded-full border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg">
      {links.map(({ href, label }) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`text-xs tracking-wide transition-colors ${
              isActive
                ? "text-zinc-900 font-medium"
                : "text-zinc-400"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
