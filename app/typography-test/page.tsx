"use client";

import { useEffect, useState } from "react";
import { SacredArabicText } from "@/components/sacred-arabic-text";

function ComputedFontDisplay({ id, label }: { id: string; label: string }) {
  const [computed, setComputed] = useState<string>("Loading...");

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;
    const style = window.getComputedStyle(element);
    setComputed(style.fontFamily);
  }, [id]);

  return (
    <div className="mt-2 text-xs text-[var(--muted)]">
      <span className="font-medium">Computed font:</span> {computed}
    </div>
  );
}

export default function TypographyTestPage() {
  return (
    <div className="space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-[var(--foreground)]">
          Arabic Typography Verification
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Sacred Arabic text rendering - Amiri Quran font stack
        </p>
      </div>

      {/* SECTION 1: Production Rendering */}
      <section className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
          Section 1: Production Rendering
        </h2>
        <p className="mb-6 text-sm text-[var(--muted)]">
          Live rendering via SacredArabicText component. This is what users see across the site.
        </p>

        <div className="rounded-2xl border-2 border-[var(--brand-border)] bg-[var(--brand-surface)] p-8">
          <div id="production-text">
            <SacredArabicText size="lg" variant="quran">
              الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
            </SacredArabicText>
          </div>
          <ComputedFontDisplay id="production-text" label="Production rendering" />
          <p className="mt-4 text-center text-xs text-[var(--muted)]">
            Expected: Amiri Quran, then Amiri
          </p>
        </div>
      </section>

      {/* SECTION 2: Amiri Quran (Forced) */}
      <section className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
          Section 2: Amiri Quran (Primary Font - Proven Working)
        </h2>
        <p className="mb-6 text-sm text-[var(--muted)]">
          Forced inline font. This setup is verified to work on web and mobile.
        </p>

        <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
          <p
            id="forced-amiri-quran"
            dir="rtl"
            lang="ar"
            translate="no"
            className="text-right text-3xl leading-relaxed"
            style={{
              fontFamily: "'Amiri Quran', serif",
              direction: "rtl",
              textAlign: "right",
            }}
          >
            الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
          </p>
          <ComputedFontDisplay id="forced-amiri-quran" label="Amiri Quran forced" />
        </div>
      </section>

      {/* SECTION 3: Amiri (Fallback - Proven Working) */}
      <section className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
          Section 3: Amiri (Fallback Font - Proven Working)
        </h2>
        <p className="mb-6 text-sm text-[var(--muted)]">
          Forced inline font. This is the fallback when Amiri Quran is not available.
        </p>

        <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-8">
          <p
            id="forced-amiri"
            dir="rtl"
            lang="ar"
            translate="no"
            className="text-right text-3xl leading-relaxed"
            style={{
              fontFamily: "'Amiri', serif",
              direction: "rtl",
              textAlign: "right",
            }}
          >
            الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
          </p>
          <ComputedFontDisplay id="forced-amiri" label="Amiri forced" />
        </div>
      </section>

      {/* Verification Checklist */}
      <section className="mx-auto max-w-3xl">
        <div className="rounded-xl border-2 border-[var(--brand-border)] bg-[var(--brand-surface)] p-6">
          <h3 className="mb-4 font-bold text-[var(--brand-ink)]">
            Verification Checklist
          </h3>
          <ul className="space-y-2 text-sm text-[var(--foreground)]">
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>
                Section 1 computed font shows "Amiri Quran" or "Amiri"
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>
                In رَبِّ: shaddah appears above baa, kasrah appears below baa
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>
                Section 1 visually matches Section 2 (Amiri Quran)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>
                Rendering is correct on mobile Safari and mobile Chrome
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>
                No Noto fonts appear in computed font-family
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Font Stack Reference */}
      <section className="mx-auto max-w-3xl">
        <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-subtle)] p-6">
          <h3 className="mb-3 font-bold text-[var(--foreground)]">
            Production Font Stack
          </h3>
          <p className="mb-3 text-sm text-[var(--muted)]">
            Used for all sacred Arabic text (Quran, Hadith, Duas):
          </p>
          <code className="block rounded bg-[var(--surface)] px-4 py-3 text-xs font-mono text-[var(--foreground)]">
            --font-arabic-quran: "Amiri Quran", "Amiri", serif
          </code>
        </div>
      </section>
    </div>
  );
}
