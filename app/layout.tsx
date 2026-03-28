import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MobileNav } from "./MobileNav";
import { GlyphBackground } from "./GlyphBackground";
import { SideRail } from "./SideRail";
import { ThemeToggle } from "./ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nahi Khan — Portfolio",
  description: "The personal site and portfolio of Nahi Khan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}
      >
        <GlyphBackground />
        <MobileNav />
        <main className="relative z-10 min-h-screen px-5 sm:px-10 lg:px-24 pt-16 sm:pt-24 pb-10">
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="relative mb-10 sm:mb-16 flex items-center justify-between">
              <a href="/" className="relative inline-block group text-zinc-900 dark:text-zinc-100 tracking-wide font-semibold py-1 rounded-sm">
                <span className="transition-opacity duration-300 group-hover:opacity-0">
                  nahi khan
                </span>
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  নাহি খান
                </span>
              </a>
              <div className="hidden sm:flex items-center"><ThemeToggle /></div>
            </div>

            <section className="relative space-y-12 content-shield">
              <div className="hidden lg:block absolute top-0 left-full bottom-0 ml-12">
                <SideRail />
              </div>
              {children}

              <footer className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-6 text-sm text-zinc-500">
                <div className="flex justify-center sm:justify-start gap-5 py-1">
                  <a
                    href="https://x.com/nahikhvn"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                    aria-label="Codeforces"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2h2v8H6V8zm4 3h2v5h-2v-5zm4-1.5h2v6.5h-2V9.5z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/nahikhvn"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </footer>
            </section>
          </div>
        </main>
      </body>
    </html>
  );
}
