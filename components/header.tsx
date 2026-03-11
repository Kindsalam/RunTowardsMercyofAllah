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
      <div className="page-shell relative flex min-h-18 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="min-w-0 flex-1 pr-3 lg:max-w-[18rem] lg:flex-none lg:pr-0"
        >
          <div className="flex items-center gap-3 lg:gap-4">
            <SiteLogo className="h-11 w-11 rounded-[16px] sm:h-12 sm:w-12 sm:rounded-[18px]" />
            <div className="min-w-0">
              <p className="font-display text-lg leading-none text-[var(--foreground)] sm:text-[1.7rem]">
                Run Towards Allah&apos;s Mercy
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-start gap-2 lg:flex lg:pl-3 xl:gap-3 xl:pl-5">
          {siteLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative inline-flex items-center justify-center rounded-full px-2.5 py-2 text-sm leading-tight whitespace-nowrap transition xl:px-3 ${
                isActive(link.href, link.aliases)
                  ? "bg-[var(--accent-green-soft)] text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:bg-[var(--accent-green-soft)] hover:text-[var(--brand)]"
              }`}
            >
              <span>{link.label}</span>
              <span
                className={`absolute bottom-0 left-0 h-px w-full origin-center bg-[var(--brand)] transition ${
                  isActive(link.href, link.aliases)
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden flex-none items-center gap-2 lg:flex">
          <ThemeToggle />
          <FontSizeControl />
        </div>

        <MobileNav links={siteLinks} featuredLinks={journeyLinks} />
      </div>
      <div className="border-t border-[var(--border-soft)]/80 bg-[color-mix(in_srgb,var(--surface-tint)_70%,transparent)]">
        <div className="page-shell py-2">
          <Link
            href="/adhkar#morning-bukhari-6306"
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full px-3 py-1.5 text-center text-sm text-[var(--muted)] transition hover:bg-[var(--accent-green-soft)] hover:text-[var(--brand)]"
          >
            <span className="text-[var(--foreground)]">
              Featured Dua: Sayyid Al-Istaghfar (Bukhari 6306)
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
