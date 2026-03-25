import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <main className="flex min-h-screen justify-center px-6 sm:px-10 lg:px-24 pt-24 pb-10">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[auto_1px_1fr] gap-6 md:gap-10">
            <nav className="sticky top-10 self-start text-sm">
              <ul className="space-y-3">
                <li>
                  <span className="relative inline-block group text-zinc-100 tracking-wide font-semibold">
                    <span className="transition-opacity duration-300 group-hover:opacity-0">
                      nahi khan
                    </span>
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      নাহি খান
                    </span>
                  </span>
                </li>
                <NavItem href="/" label="me" />
                <NavItem href="/books" label="books" />
                <NavItem href="/writing" label="writing" />
                <NavItem href="/gallery" label="gallery" />
              </ul>
            </nav>

            <div className="hidden md:block bg-zinc-800/60" />

            <section className="min-w-0 space-y-12">
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

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block text-zinc-500 hover:text-zinc-100 transition-colors tracking-wide"
      >
        {label}
      </Link>
    </li>
  );
}
