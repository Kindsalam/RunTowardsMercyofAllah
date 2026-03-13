import Link from "next/link";

import { legalLinks } from "@/lib/content";

export function Footer() {
  const footerLinks = [
    { href: "/about", label: "About" },
    ...legalLinks,
  ];

  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--surface)]">
      <div className="page-shell flex flex-col gap-5 py-6">
        <div className="space-y-2">
          <p className="text-sm leading-7 text-[var(--muted)]">
            Run towards Mercy of Allah. Please verify and review all sacred
            text carefully before public sharing.
          </p>
          <p className="text-sm leading-7 text-[var(--muted)]">
            Prompt-Engineered by Salam Khan, built using AI, for Sadaqah Jariah.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-1 text-sm text-[var(--muted)] transition hover:bg-[var(--brand-surface)] hover:text-[var(--brand-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
