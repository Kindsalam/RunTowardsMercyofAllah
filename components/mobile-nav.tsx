"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { FontSizeControl } from "@/components/font-size-control";
import { ThemeToggle } from "@/components/theme-toggle";
import type { NavLink } from "@/lib/types";

type MobileNavProps = {
  links: NavLink[];
};

export function MobileNav({ links }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;

    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [open]);

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
        <div className="fixed inset-x-4 top-[calc(env(safe-area-inset-top)+5rem)] z-50 ml-auto max-h-[calc(100dvh-env(safe-area-inset-top)-5.75rem)] w-auto max-w-sm overflow-y-auto overscroll-contain rounded-[28px] border border-[var(--brand-border)] bg-[var(--surface-overlay)] p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
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
        </div>
      ) : null}
    </div>
  );
}
