"use client";

import { useEffect, useState } from "react";
import { SacredArabicText } from "@/components/sacred-arabic-text";

interface FontDebugInfo {
  activeFont: string;
  computedFontFamily: string;
  cssClass: string;
  isProperlySized: boolean;
}

function FontDebugDisplay({ label, fontFamily, cssClass }: { label: string; fontFamily: string; cssClass: string }) {
  const [debugInfo, setDebugInfo] = useState<FontDebugInfo>({
    activeFont: "Loading...",
    computedFontFamily: "Loading...",
    cssClass,
    isProperlySized: false,
  });

  useEffect(() => {
    // Get computed font-family from DOM element
    const element = document.getElementById(`debug-${cssClass}`);
    if (element) {
      const computed = window.getComputedStyle(element);
      const fontFamily = computed.fontFamily;
      
      // Try to determine which font is actually being used
      let activeFont = "Unknown";
      if (fontFamily.includes("Scheherazade")) {
        activeFont = "Scheherazade New ✓ (PRIMARY)";
      } else if (fontFamily.includes("Amiri Quran")) {
        activeFont = "Amiri Quran (Fallback)";
      } else if (fontFamily.includes("Amiri")) {
        activeFont = "Amiri (Fallback)";
      } else if (fontFamily.includes("Noto Naskh")) {
        activeFont = "Noto Naskh Arabic (Fallback)";
      } else if (fontFamily.includes("serif") || fontFamily.includes("system")) {
        activeFont = "System Font (Failed to load)";
      }

      setDebugInfo({
        activeFont,
        computedFontFamily: fontFamily,
        cssClass,
        isProperlySized: true,
      });
    }
  }, [cssClass]);

  return (
    <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          {label}
        </div>
        <div className="rounded-full bg-[var(--brand-surface)] px-3 py-1 text-xs font-medium text-[var(--brand-ink)]">
          {debugInfo.isProperlySized ? debugInfo.activeFont : "Loading..."}
        </div>
      </div>
      <p
        id={`debug-${cssClass}`}
        dir="rtl"
        lang="ar"
        className={`text-right text-3xl leading-relaxed ${cssClass}`}
        style={{ fontFamily }}
      >
        الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
      </p>
      <div className="mt-4 space-y-1 text-xs text-[var(--muted)]">
        <div>
          <span className="font-medium">CSS Class:</span> {cssClass}
        </div>
        <div>
          <span className="font-medium">CSS Font Family:</span>{" "}
          <code className="rounded bg-[var(--surface-subtle)] px-1 font-mono text-[10px]">
            {fontFamily}
          </code>
        </div>
        <div>
          <span className="font-medium">Computed Font:</span> {debugInfo.computedFontFamily}
        </div>
      </div>
    </div>
  );
}

export default function TypographyTestPage() {
  const [fontFeatureWarning, setFontFeatureWarning] = useState(false);

  useEffect(() => {
    // Check if browser supports CSS font-feature-settings
    const element = document.createElement("div");
    element.style.fontFeatureSettings = '"cv62" 1';
    const supports = element.style.fontFeatureSettings !== "";
    setFontFeatureWarning(!supports);
  }, []);

  return (
    <div className="space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-[var(--foreground)]">
          Arabic Typography Test - Shadda + Kasra Verification
        </h1>
        <p className="text-lg text-[var(--muted)]">
          Testing correct harakat positioning with Scheherazade New font
        </p>
      </div>

      {fontFeatureWarning && (
        <div className="mx-auto max-w-4xl rounded-xl border-2 border-red-500 bg-red-50 p-6 dark:bg-red-950">
          <p className="font-medium text-red-900 dark:text-red-100">
            ⚠️ Warning: Your browser may not support CSS font-feature-settings. Harakat positioning might not work correctly.
          </p>
        </div>
      )}

      {/* SECTION 1: Normal Site Rendering via Component */}
      <section className="mx-auto max-w-4xl space-y-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
            Section 1: Site Rendering (via SacredArabicText Component)
          </h2>
          <p className="mb-6 text-sm text-[var(--muted)]">
            This is how Arabic text renders across the site using the SacredArabicText component.
            The component applies all CSS classes and should use Scheherazade New with cv62=1.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-[var(--brand-border)] bg-[var(--brand-surface)] p-8">
          <SacredArabicText size="lg" variant="quran">
            الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
          </SacredArabicText>
          <p className="mt-4 text-center text-sm text-[var(--muted)]">
            The kasrah (ِ) under ب in رَبِّ should appear BELOW the letter, not above it.
          </p>
        </div>
      </section>

      {/* SECTION 2: Forced Font Rendering (No Fallbacks) */}
      <section className="mx-auto max-w-4xl space-y-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
            Section 2: Forced Rendering (Primary Font Only)
          </h2>
          <p className="mb-6 text-sm text-[var(--muted)]">
            These tests explicitly specify ONLY the target font with no fallbacks to verify it loads and works.
          </p>
        </div>

        <div className="space-y-6">
          {/* Scheherazade New - Forced */}
          <FontDebugDisplay
            label="Scheherazade New (Forced - Should Load) ✓"
            fontFamily="var(--font-scheherazade-new), 'Scheherazade New', serif"
            cssClass="sacred-arabic sacred-arabic-quran sacred-arabic-size-lg"
          />

          {/* Amiri Quran - Forced */}
          <FontDebugDisplay
            label="Amiri Quran (Forced - Fallback)"
            fontFamily="var(--font-amiri-quran), 'Amiri Quran', serif"
            cssClass="sacred-arabic sacred-arabic-size-lg"
          />

          {/* Amiri - Forced */}
          <FontDebugDisplay
            label="Amiri (Forced - Secondary Fallback)"
            fontFamily="var(--font-amiri), 'Amiri', serif"
            cssClass="sacred-arabic sacred-arabic-size-lg"
          />
        </div>
      </section>

      {/* SECTION 3: Font Comparison */}
      <section className="mx-auto max-w-4xl space-y-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
            Section 3: Font Comparison - Harakat Rendering Quality
          </h2>
          <p className="mb-6 text-sm text-[var(--muted)]">
            Comparing the same text across different fonts. Look for proper kasra positioning
            (below the base letter, not above or merged with shadda).
          </p>
        </div>

        <div className="space-y-6">
          {/* Test Strings with Different Harakat Combinations */}
          <div>
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              Test 1: Shadda + Kasra (رَبِّ)
            </h3>
            <div className="space-y-3">
              <div className="rounded-lg border border-[var(--border-soft)] p-4">
                <div className="mb-2 text-xs font-medium text-[var(--muted)]">
                  Scheherazade New + cv62=1
                </div>
                <p
                  dir="rtl"
                  lang="ar"
                  className="text-right text-2xl leading-loose"
                  style={{ fontFamily: "var(--font-scheherazade-new), 'Scheherazade New', serif", fontFeatureSettings: '"cv62" 1' }}
                >
                  رَبِّ الْعَالَمِينَ
                </p>
              </div>

              <div className="rounded-lg border border-[var(--border-soft)] p-4">
                <div className="mb-2 text-xs font-medium text-[var(--muted)]">
                  Amiri Quran (No cv62)
                </div>
                <p
                  dir="rtl"
                  lang="ar"
                  className="text-right text-2xl leading-loose"
                  style={{ fontFamily: "var(--font-amiri-quran), 'Amiri Quran', serif" }}
                >
                  رَبِّ الْعَالَمِينَ
                </p>
              </div>

              <div className="rounded-lg border border-[var(--border-soft)] p-4">
                <div className="mb-2 text-xs font-medium text-[var(--muted)]">
                  Amiri (No cv62)
                </div>
                <p
                  dir="rtl"
                  lang="ar"
                  className="text-right text-2xl leading-loose"
                  style={{ fontFamily: "var(--font-amiri), 'Amiri', serif" }}
                >
                  رَبِّ الْعَالَمِينَ
                </p>
              </div>
            </div>
          </div>

          {/* Test Complex Harakat */}
          <div>
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              Test 2: Multiple Harakat Combinations
            </h3>
            <div className="rounded-lg border border-[var(--border-soft)] p-4">
              <div className="mb-3 text-xs font-medium text-[var(--muted)]">
                Scheherazade New + cv62=1
              </div>
              <p
                dir="rtl"
                lang="ar"
                className="text-right text-xl leading-loose"
                style={{ fontFamily: "var(--font-scheherazade-new), 'Scheherazade New', serif", fontFeatureSettings: '"cv62" 1' }}
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
            </div>
          </div>

          {/* Ayat al-Kursi Full Test */}
          <div>
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              Test 3: Ayat Al-Kursi (Full Harakat)
            </h3>
            <div className="rounded-lg border border-[var(--border-soft)] p-4">
              <div className="mb-3 text-xs font-medium text-[var(--muted)]">
                Scheherazade New + cv62=1
              </div>
              <p
                dir="rtl"
                lang="ar"
                className="text-right text-lg leading-loose"
                style={{ fontFamily: "var(--font-scheherazade-new), 'Scheherazade New', serif", fontFeatureSettings: '"cv62" 1' }}
              >
                اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Info Box */}
      <section className="mx-auto max-w-4xl">
        <div className="rounded-xl border-2 border-[var(--brand-border)] bg-[var(--brand-surface)] p-6">
          <h3 className="mb-4 font-bold text-[var(--brand-ink)]">
            Critical Font Features
          </h3>
          <ul className="space-y-2 text-sm text-[var(--foreground)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--brand)] font-bold">✓</span>
              <span>
                <strong>Primary Font:</strong> Scheherazade New (SIL International, Google Fonts)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--brand)] font-bold">✓</span>
              <span>
                <strong>OpenType Feature:</strong> cv62=1 (Lowered kasra position in Scheherazade New)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--brand)] font-bold">✓</span>
              <span>
                <strong>Expected Result:</strong> Kasra appears BELOW base letter when combined with shadda
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--brand)] font-bold">✓</span>
              <span>
                <strong>Fallback Chain:</strong> Scheherazade New → Amiri Quran → Amiri → Noto Naskh Arabic
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Mobile Testing Instructions */}
      <section className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-subtle)] p-6">
          <h3 className="mb-3 font-bold text-[var(--foreground)]">
            Mobile Testing Checklist
          </h3>
          <ol className="space-y-2 text-sm text-[var(--foreground)]">
            <li>1. Open this page on iPhone Safari and Android Chrome</li>
            <li>2. Look at Section 1 (Site Rendering) - check if kasra is below ب in رَبِّ</li>
            <li>3. Check Section 3 to compare Scheherazade New vs other fonts</li>
            <li>4. Verify the kasra position is consistent across all test cases</li>
            <li>5. If kasra still appears above or inside shadda, the font may not be loading</li>
            <li>6. Check browser DevTools to confirm computed font-family includes "Scheherazade"</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
