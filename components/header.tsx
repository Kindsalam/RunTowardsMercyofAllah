"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontSizeControl } from "@/components/font-size-control";
import { MobileNav } from "@/components/mobile-nav";
import { SiteLogo } from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { journeyLinks, siteLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();

  function isActive(href: string, aliases?: string[]) {
    return pathname === href || aliases?.includes(pathname) === true;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[var(--background)] backdrop-blur-xl">
      <div className="page-shell relative flex min-h-24 items-center justify-between gap-4 py-4 lg:grid lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)_auto] lg:items-center">
        <Link
          href="/"
          className="min-w-0 flex-1 pr-3 lg:max-w-[21rem] lg:flex-none lg:pr-0"
        >
          <div className="flex items-center gap-3 lg:gap-4">
            <SiteLogo className="h-12 w-12 rounded-[18px] sm:h-14 sm:w-14 sm:rounded-[20px]" />
            <div className="min-w-0">
              <p className="font-display text-lg leading-none text-[var(--foreground)] sm:text-2xl">
                Run Towards Allah&apos;s Mercy
              </p>
              <p className="mt-1 hidden text-xs uppercase tracking-[0.22em] text-[var(--muted)] sm:block">
                Ramadan reflection companion
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden w-full max-w-[38rem] grid-cols-3 gap-2 lg:grid xl:max-w-none xl:grid-cols-6">
          {siteLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex h-12 w-full items-center justify-center rounded-full border px-4 py-2 text-center text-sm leading-tight transition ${
                isActive(link.href, link.aliases)
                  ? "border-[var(--border-strong)] bg-[var(--accent-soft)] text-[var(--foreground)]"
                  : "border-transparent bg-[var(--surface)]/50 text-[var(--muted)] hover:border-[var(--border-soft)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-none flex-col items-end gap-2 lg:flex">
          <ThemeToggle />
          <FontSizeControl />
        </div>

        <MobileNav links={siteLinks} featuredLinks={journeyLinks} />
      </div>
    </header>
  );
}
