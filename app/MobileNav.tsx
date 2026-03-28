"use client";

import { useState } from "react";
import { NavItem } from "./NavItem";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="relative w-6 h-5 flex flex-col justify-between"
      >
        <span
          className={`block h-px w-full bg-zinc-600 transition-all duration-300 origin-center ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-full bg-zinc-600 transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-px w-full bg-zinc-600 transition-all duration-300 origin-center ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          className="absolute right-5 mt-4 flex flex-col gap-4 bg-white border border-zinc-200 rounded-lg px-6 py-4 z-50 shadow-lg"
          onClick={() => setOpen(false)}
        >
          <NavItem href="/" label="me" />
          <NavItem href="/books" label="books" />
          <NavItem href="/writing" label="writing" />
          <NavItem href="/gallery" label="gallery" />
        </ul>
      )}
    </div>
  );
}
