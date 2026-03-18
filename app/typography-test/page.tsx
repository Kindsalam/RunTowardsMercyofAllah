"use client";

import { useEffect, useState } from "react";
import { SacredArabicText } from "@/components/sacred-arabic-text";

interface FontDebugInfo {
  computed: string;
}

/**
 * IsolatedFontBlock: Forces a specific font by inlining style only.
 * No CSS classes that might apply conflicting font-family values.
 */
function IsolatedFontBlock({
  label,
  fontFamily,
  testText = "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
}: {
  label: string;
  fontFamily: string;
  testText?: string;
}) {
  const [computed, setComputed] = useState<FontDebugInfo>({
    computed: "Loading...",
  });

  useEffect(() => {
    const element = document.getElementById(`isolated-${label}`);
    if (!element) return;

    const style = window.getComputedStyle(element);
    const font = style.fontFamily;
    setComputed({ computed: font });
  }, [label]);

  return (
    <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          {label}
        </div>
        <code className="rounded bg-[var(--surface-subtle)] px-2 py-1 text-xs font-mono text-[var(--muted)]">
          {computed.computed}
        </code>
      </div>

      <p
        id={`isolated-${label}`}
        dir="rtl"
        lang="ar"
        translate="no"
        className="text-right text-3xl leading-relaxed"
        style={{
          fontFamily,
          direction: "rtl",
          textAlign: "right",
        }}
      >
        {testText}
      </p>
    </div>
  );
}

/**
 * SiteRenderingBlock: Shows how the site actually renders using SacredArabicText component
 */
function SiteRenderingBlock() {
  const [computed, setComputed] = useState<string>("Loading...");

  useEffect(() => {
    const element = document.getElementById("site-rendering-block");
    if (!element) return;

    const style = window.getComputedStyle(element);
    const font = style.fontFamily;
    setComputed(font);
  }, []);

  return (
    <div className="rounded-2xl border-2 border-[var(--brand-border)] bg-[var(--brand-surface)] p-8">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-medium uppercase tracking-wide text-[var(--brand-ink)]">
          Production Rendering (via SacredArabicText)
        </div>
        <code className="rounded bg-[var(--brand-surface-strong)] px-2 py-1 text-xs font-mono text-[var(--brand-ink)]">
          {computed}
        </code>
      </div>

      <div id="site-rendering-block">
        <SacredArabicText size="lg" variant="quran">
          الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
        </SacredArabicText>
      </div>

      <p className="mt-4 text-center text-xs text-[var(--brand-ink)]">
        ✓ shaddah above ب, kasrah below ب in رَبِّ
      </p>
    </div>
  );
}

export default function TypographyTestPage() {
  return (
    <div className="space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-[var(--foreground)]">
          Arabic Typography Test - Font Verification
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Testing Amiri Quran for correct shadda + kasra rendering
        </p>
      </div>

      {/* SECTION 1: Site Rendering */}
      <section className="mx-auto max-w-4xl space-y-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
            Section 1: Production Rendering
          </h2>
          <p className="mb-6 text-sm text-[var(--muted)]">
            This is how sacred Arabic text renders across the site using the SacredArabicText component. Should use Amiri Quran.
          </p>
        </div>

        <SiteRenderingBlock />
      </section>

      {/* SECTION 2: Isolated Font Tests */}
      <section className="mx-auto max-w-4xl space-y-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
            Section 2: Forced Font Tests
          </h2>
          <p className="mb-6 text-sm text-[var(--muted)]">
            Each block below forces a specific font via inline style only. Check the computed font displayed to verify what's actually rendering.
          </p>
        </div>

        <div className="space-y-6">
          {/* Amiri Quran - Primary */}
          <IsolatedFontBlock
            label="Amiri Quran (Primary)"
            fontFamily="'Amiri Quran', serif"
          />

          {/* Amiri - Secondary */}
          <IsolatedFontBlock
            label="Amiri (Fallback)"
            fontFamily="'Amiri', serif"
          />

          {/* Noto Naskh Arabic */}
          <IsolatedFontBlock
            label="Noto Naskh Arabic"
            fontFamily="'Noto Naskh Arabic', serif"
          />
        </div>
      </section>

      {/* SECTION 3: Detailed Comparison */}
      <section className="mx-auto max-w-4xl space-y-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
            Section 3: Detailed Harakat Comparison
          </h2>
          <p className="mb-6 text-sm text-[var(--muted)]">
            Same text rendered with different fonts. Look for correct kasra positioning below the base letter.
          </p>
        </div>

        <div className="space-y-4">
          {/* Test 1: Simple shadda+kasra */}
          <div>
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              Test: رَبِّ (shadda + kasra on baa)
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <IsolatedFontBlock
                label="Amiri Quran"
                fontFamily="'Amiri Quran', serif"
                testText="رَبِّ"
              />
              <IsolatedFontBlock
                label="Amiri"
                fontFamily="'Amiri', serif"
                testText="رَبِّ"
              />
            </div>
          </div>

          {/* Test 2: Full phrase */}
          <div>
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              Test: Full Verse
            </h3>
            <div className="space-y-4">
              <IsolatedFontBlock
                label="Amiri Quran"
                fontFamily="'Amiri Quran', serif"
                testText="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
              />
              <IsolatedFontBlock
                label="Amiri"
                fontFamily="'Amiri', serif"
                testText="الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
              />
            </div>
          </div>

          {/* Test 3: Bismillah */}
          <div>
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              Test: Bismillah
            </h3>
            <IsolatedFontBlock
              label="Amiri Quran"
              fontFamily="'Amiri Quran', serif"
              testText="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Testing Instructions */}
      <section className="mx-auto max-w-4xl">
        <div className="rounded-xl border-2 border-[var(--brand-border)] bg-[var(--brand-surface)] p-6">
          <h3 className="mb-4 font-bold text-[var(--brand-ink)]">
            Verification Checklist
          </h3>
          <ul className="space-y-2 text-sm text-[var(--foreground)]">
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>Section 1 computed font should show "Amiri Quran"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>In رَبِّ: shaddah appears ABOVE baa, kasrah appears BELOW baa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>Test on mobile Safari (iOS) and Chrome (Android)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>Section 2 "Amiri Quran (Primary)" block shows correct positioning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[var(--brand)]">✓</span>
              <span>Desktop rendering looks clean and professional</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 5: Font Stack Info */}
      <section className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-subtle)] p-6">
          <h3 className="mb-3 font-bold text-[var(--foreground)]">
            Production Font Stack
          </h3>
          <p className="mb-3 text-sm text-[var(--muted)]">
            For sacred Quranic/dua text:
          </p>
          <code className="block rounded bg-[var(--surface)] px-4 py-3 text-xs font-mono text-[var(--foreground)]">
            var(--font-amiri-quran), "Amiri Quran", var(--font-amiri), "Amiri", var(--font-noto-naskh-arabic), "Noto Naskh Arabic", serif
          </code>
        </div>
      </section>
    </div>
  );
}
