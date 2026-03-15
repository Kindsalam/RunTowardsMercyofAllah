import { SacredArabicText } from "@/components/sacred-arabic-text";

export function ReflectionSection() {
  return (
    <section className="rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-6 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:px-7 sm:py-7">
      <div className="space-y-5">
        <div className="max-w-2xl space-y-2.5">
          <p className="eyebrow">Allah is near</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-[2.2rem]">
            Allah is near
          </h2>
          <p className="reading-copy-compact text-[var(--muted)]">
            When you call upon Allah, you are calling on One who is near.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--background)] p-5 sm:p-6">
            <SacredArabicText
              size="quran"
              variant="quran"
              className="text-[var(--foreground)]"
            >
              وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ
            </SacredArabicText>
          </div>
          <div className="grid gap-3">
            <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--background)] p-4">
              <p className="eyebrow mb-2">English meaning</p>
              <p className="reading-copy text-[var(--foreground)]">
                And when My servants ask you about Me, then surely I am near. I
                answer the call of the caller when he calls upon Me.
              </p>
            </div>
            <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--background)] p-4">
              <p className="eyebrow mb-2">Urdu meaning</p>
              <p
                dir="rtl"
                lang="ur"
                className="urdu-text reading-urdu text-right text-[var(--foreground)]"
              >
                اور جب میرے بندے آپ سے میرے بارے میں پوچھیں تو بے شک میں قریب
                ہوں۔ جب کوئی پکارنے والا مجھے پکارتا ہے تو میں اس کی دعا قبول
                کرتا ہوں۔
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-[0.32fr_0.68fr]">
          <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--background)] px-4 py-3 text-sm font-medium leading-7 text-[var(--foreground)]">
            Surah Al-Baqarah 2:186
          </div>
          <div className="reading-copy rounded-[22px] border border-[var(--border-soft)] bg-[var(--background)] px-4 py-3 text-[var(--muted)]">
            You do not need elaborate words. This site simply helps you return
            to the words Allah and His Messenger already taught.
          </div>
        </div>
      </div>
    </section>
  );
}
