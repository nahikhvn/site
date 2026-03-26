import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavItem } from "./NavItem";
import { MobileNav } from "./MobileNav";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <main className="min-h-screen px-5 sm:px-10 lg:px-24 pt-16 sm:pt-24 pb-10">
          <div className="mx-auto w-full max-w-2xl">
            <nav className="relative mb-10 sm:mb-16 flex items-center justify-between">
              <span className="relative inline-block group text-zinc-100 tracking-wide font-semibold">
                <span className="transition-opacity duration-300 group-hover:opacity-0">
                  nahi khan
                </span>
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  নাহি খান
                </span>
              </span>
              <ul className="hidden sm:flex gap-6">
                <NavItem href="/" label="me" />
                <NavItem href="/books" label="books" />
                <NavItem href="/writing" label="writing" />
                <NavItem href="/gallery" label="gallery" />
              </ul>
              <MobileNav />
            </nav>

            <section className="space-y-12">
              {children}

              <footer className="mt-12 border-t border-zinc-800/60 pt-6 text-sm text-zinc-500">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <a
                    href="https://x.com/nahikhvn"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    x.com/nahikhvn
                  </a>
                  <a
                    href="#"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    codeforces: coming soon
                  </a>
                  <a
                    href="https://github.com/nahikhvn"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-200 transition-colors"
                  >
                    github.com/nahikhvn
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
