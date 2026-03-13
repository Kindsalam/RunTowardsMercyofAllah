"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FontSizeControl } from "@/components/font-size-control";
import { ThemeToggle } from "@/components/theme-toggle";
import type { JourneyLink, NavLink } from "@/lib/types";

type MobileNavProps = {
  links: NavLink[];
  featuredLinks: JourneyLink[];
};

export function MobileNav({ links, featuredLinks }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-2 text-sm text-[var(--brand-ink)]"
        aria-expanded={open}
        aria-label="Open navigation"
      >
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 mt-3 w-[min(24rem,calc(100vw-2rem))] rounded-[28px] border border-[var(--brand-border)] bg-[var(--surface-overlay)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
          <nav className="grid gap-3">
            {links.map((link) => {
              const active =
                (link.href === "/" && pathname === "/") ||
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`) ||
                link.aliases?.includes(pathname) === true;

              return (
                <div
                  key={link.href}
                  className={`rounded-[22px] border border-[var(--border-soft)] px-3 py-3 transition ${
                    active ? "border-[var(--brand-border)] bg-[var(--brand-surface)]" : "bg-[var(--surface)]"
                  }`}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-sm font-medium transition ${
                      active ? "text-[var(--foreground)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`rounded-full border px-3 py-1.5 text-xs transition ${
                            pathname === child.href
                              ? "border-[var(--brand-border-strong)] bg-[var(--brand-surface-strong)] text-[var(--brand-ink)]"
                              : "border-[var(--brand-border)] bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--brand-surface)] hover:text-[var(--brand-ink)]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="mt-4 grid gap-3 rounded-[24px] border border-[var(--brand-border)] bg-[var(--surface)] p-4">
            <p className="eyebrow">Reading controls</p>
            <div className="flex flex-col items-start gap-2">
              <ThemeToggle />
              <FontSizeControl />
            </div>
          </div>

          <div className="mt-4 space-y-3 rounded-[24px] border border-[var(--brand-border)] bg-[var(--surface)] p-4">
            <p className="eyebrow">Guided journey</p>
            {featuredLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-[var(--brand-border)] bg-[var(--surface)] px-4 py-3 transition hover:bg-[var(--brand-surface)]"
              >
                <p className="text-sm font-medium text-[var(--foreground)]">{link.title}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
