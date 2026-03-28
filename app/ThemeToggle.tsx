"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-zinc-400 dark:border-zinc-600 bg-zinc-300 dark:bg-zinc-700 transition-colors cursor-pointer"
    >
      <span
        className={`inline-block h-3.5 w-3.5 rounded-full bg-zinc-600 dark:bg-zinc-200 shadow-sm transition-transform duration-200 ${
          dark ? "translate-x-[18px]" : "translate-x-[2px]"
        }`}
      />
    </button>
  );
}
