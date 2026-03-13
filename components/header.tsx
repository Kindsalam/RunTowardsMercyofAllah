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
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`) ||
      aliases?.includes(pathname) === true
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[var(--surface-overlay)] backdrop-blur-xl">
      <div className="page-shell relative flex min-h-18 items-center justify-between gap-4 py-2.5">
        <Link
          href="/"
          className="min-w-0 flex-1 pr-3 lg:flex-none lg:pr-0"
        >
          <div className="flex items-center gap-3 lg:gap-4">
            <SiteLogo className="-my-4 h-[7rem] w-[10rem] sm:-my-5 sm:h-[8.6rem] sm:w-[12.2rem]" />
            <div className="min-w-0 space-y-0">
              <p className="eyebrow text-[0.72rem] leading-none whitespace-nowrap sm:text-[0.8rem]">
                Run Towards
              </p>
              <p className="font-display text-[1.2rem] leading-[0.95] whitespace-nowrap text-[var(--foreground)] sm:text-[1.58rem]">
                Mercy of Allah
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-start gap-2 lg:flex lg:pl-3 xl:gap-3 xl:pl-5">
          {siteLinks.map((link) => {
            const active = isActive(link.href, link.aliases);
            const alignMenu = link.href === "/about" ? "right-0" : "left-0";

            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`relative inline-flex items-center justify-center gap-1 rounded-full px-2.5 py-2 text-sm leading-tight whitespace-nowrap transition xl:px-3 ${
                    active
                      ? "bg-[var(--brand-surface-strong)] text-[var(--brand-ink)]"
                      : "text-[var(--muted)] hover:bg-[var(--brand-surface)] hover:text-[var(--brand-ink)]"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.children?.length ? (
                    <span className="text-[10px] text-current/70">▾</span>
                  ) : null}
                  <span
                    className={`absolute bottom-0 left-0 h-px w-full origin-center bg-[var(--brand)] transition ${
                      active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />
                </Link>

                {link.children?.length ? (
                  <div
                    className={`pointer-events-none absolute top-full z-50 pt-3 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 ${alignMenu}`}
                  >
                    <div className="w-56 rounded-[24px] border border-[var(--brand-border)] bg-[var(--surface-overlay)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
                      <div className="grid gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`rounded-2xl px-3 py-2 text-sm transition ${
                              pathname === child.href
                                ? "bg-[var(--brand-surface-strong)] text-[var(--brand-ink)]"
                                : "text-[var(--muted)] hover:bg-[var(--brand-surface)] hover:text-[var(--brand-ink)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden flex-none items-center gap-2 lg:flex">
          <ThemeToggle />
          <FontSizeControl />
        </div>

        <MobileNav links={siteLinks} featuredLinks={journeyLinks} />
      </div>
    </header>
  );
}
