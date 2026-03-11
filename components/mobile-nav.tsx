"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FontSizeControl } from "@/components/font-size-control";
import { ThemeToggle } from "@/components/theme-toggle";
import type { JourneyLink } from "@/lib/types";

type MobileNavProps = {
  links: Array<{ href: string; label: string; aliases?: string[] }>;
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
        className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)]"
        aria-expanded={open}
        aria-label="Open navigation"
      >
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      {open ? (
        <div className="absolute right-0 top-full z-50 mt-3 w-[min(24rem,calc(100vw-2rem))] rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
          <nav className="grid gap-2">
            {links.map((link) => {
              const active =
                pathname === link.href || link.aliases?.includes(pathname) === true;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl border-b border-[var(--border-soft)] px-3 py-3 text-sm transition ${
                    active
                      ? "bg-[var(--accent-green-soft)] text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:bg-[var(--accent-green-soft)] hover:text-[var(--brand)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 grid gap-3 rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-4">
            <p className="eyebrow">Reading controls</p>
            <div className="flex flex-col items-start gap-2">
              <ThemeToggle />
              <FontSizeControl />
            </div>
          </div>

          <div className="mt-4 space-y-3 rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-4">
            <p className="eyebrow">Guided journey</p>
            {featuredLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-3"
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
