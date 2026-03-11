import Link from "next/link";

import { legalLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--surface)]/70">
      <div className="page-shell flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm leading-7 text-[var(--muted)]">
            Run Towards Allah&apos;s Mercy. Please verify and review all sacred
            text carefully before public sharing.
          </p>
          <p className="text-sm leading-7 text-[var(--muted)]">
            Prompt-Engineered by Salam Khan, built using AI, for Sadaqah Jariah.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 lg:items-end">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:justify-end">
            <Link
              href="/about"
              className="rounded-full px-2.5 py-1 text-sm text-[var(--muted)] transition hover:bg-[var(--accent-green-soft)] hover:text-[var(--brand)]"
            >
              About
            </Link>
            <Link
              href="/sources"
              className="rounded-full px-2.5 py-1 text-sm text-[var(--muted)] transition hover:bg-[var(--accent-green-soft)] hover:text-[var(--brand)]"
            >
              Sources
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:justify-end">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-2.5 py-1 text-sm text-[var(--muted)] transition hover:bg-[var(--accent-green-soft)] hover:text-[var(--brand)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
