import type { Metadata } from "next";

import { SacredArabicText } from "@/components/sacred-arabic-text";

export const metadata: Metadata = {
  title: "Typography Test",
  description: "Test page for Arabic typography and harakat rendering",
  robots: "noindex, nofollow",
};

// Sample Arabic texts with various diacritical marks (harakat)
const sampleTexts = {
  // Bismillah with full harakat
  bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  // Al-Fatiha verse 1-2 with harakat
  fatiha: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ",
  // Ayat al-Kursi opening with shaddah, sukoon, madd
  ayatKursi:
    "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
  // Surah Al-Ikhlas with tanween
  ikhlas:
    "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
  // Hadith sample with harakat
  hadith:
    "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
  // Short dua with dense harakat
  dua: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
  // Complex combination: shaddah + sukoon + tanween
  complex: "مُحَمَّدٌ رَسُولُ اللَّهِ ۚ وَالَّذِينَ مَعَهُ أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ",
};

const sizes = ["sm", "md", "lg", "hero", "quran"] as const;

export default function TypographyTestPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] py-12">
      <div className="page-shell">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-semibold text-[var(--foreground)]">
            Arabic Typography Test
          </h1>
          <p className="text-[var(--muted)]">
            Testing harakat rendering across different sizes and variants.
            <br />
            Check on mobile devices (iPhone Safari, Android Chrome) for
            diacritic placement.
          </p>
        </header>

        {/* Size Comparison - Hadith Variant */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-medium text-[var(--foreground)]">
            Hadith Variant - All Sizes
          </h2>
          <div className="space-y-8">
            {sizes.map((size) => (
              <div
                key={`hadith-${size}`}
                className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6"
              >
                <div className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
                  Size: {size}
                </div>
                <SacredArabicText size={size} variant="hadith">
                  {sampleTexts.bismillah}
                </SacredArabicText>
              </div>
            ))}
          </div>
        </section>

        {/* Size Comparison - Quran Variant */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-medium text-[var(--foreground)]">
            Quran Variant - All Sizes
          </h2>
          <div className="space-y-8">
            {sizes.map((size) => (
              <div
                key={`quran-${size}`}
                className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6"
              >
                <div className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
                  Size: {size}
                </div>
                <SacredArabicText size={size} variant="quran">
                  {sampleTexts.fatiha}
                </SacredArabicText>
              </div>
            ))}
          </div>
        </section>

        {/* Dense Harakat Tests */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-medium text-[var(--foreground)]">
            Dense Harakat Tests
          </h2>
          <div className="space-y-8">
            {/* Ayat al-Kursi - shaddah, sukoon, madd */}
            <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <div className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
                Ayat al-Kursi (shaddah, sukoon, madd)
              </div>
              <SacredArabicText size="lg" variant="quran">
                {sampleTexts.ayatKursi}
              </SacredArabicText>
            </div>

            {/* Al-Ikhlas - tanween */}
            <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <div className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
                Surah Al-Ikhlas (tanween)
              </div>
              <SacredArabicText size="lg" variant="quran">
                {sampleTexts.ikhlas}
              </SacredArabicText>
            </div>

            {/* Complex combination */}
            <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <div className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
                Complex Harakat (shaddah + sukoon + tanween)
              </div>
              <SacredArabicText size="lg" variant="quran">
                {sampleTexts.complex}
              </SacredArabicText>
            </div>
          </div>
        </section>

        {/* Hadith Sample */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-medium text-[var(--foreground)]">
            Hadith Sample
          </h2>
          <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <div className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
              Hadith of Intentions
            </div>
            <SacredArabicText size="lg" variant="hadith">
              {sampleTexts.hadith}
            </SacredArabicText>
          </div>
        </section>

        {/* Dua Sample */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-medium text-[var(--foreground)]">
            Dua Sample
          </h2>
          <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <div className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
              Rabbana Dua (dense harakat)
            </div>
            <SacredArabicText size="lg" variant="hadith">
              {sampleTexts.dua}
            </SacredArabicText>
          </div>
        </section>

        {/* Side by Side Comparison */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-medium text-[var(--foreground)]">
            Variant Comparison (Same Text)
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <div className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
                Hadith Variant
              </div>
              <SacredArabicText size="lg" variant="hadith">
                {sampleTexts.bismillah}
              </SacredArabicText>
            </div>
            <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
              <div className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
                Quran Variant
              </div>
              <SacredArabicText size="lg" variant="quran">
                {sampleTexts.bismillah}
              </SacredArabicText>
            </div>
          </div>
        </section>

        {/* Dark/Light Mode Note */}
        <section className="mb-8">
          <div className="rounded-xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6">
            <h3 className="mb-2 font-medium text-[var(--brand-ink)]">
              Testing Instructions
            </h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>
                1. Check harakat (diacritics) positioning - they should not
                overlap with letters above/below
              </li>
              <li>
                2. Toggle dark mode to verify contrast and readability
              </li>
              <li>
                3. Test on different screen sizes using browser dev tools
              </li>
              <li>
                4. Test on actual mobile devices (iPhone Safari, Android Chrome)
              </li>
              <li>
                5. Verify shaddah, sukoon, tanween, and madd marks render
                correctly
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
