import { DuaSources } from "@/components/dua-sources";
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
          <DuaSources
            sourceType="quran"
            authenticity="quran"
            sourceReference="Surah Al-Baqarah 2:186"
            sourceUrl="https://quran.com/2/186"
          />
        </div>
        <div className="grid gap-5">
          <div className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-6 sm:p-7">
            <SacredArabicText
              size="quran"
              variant="quran"
              className="text-[var(--foreground)]"
            >
              وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ
            </SacredArabicText>
          </div>
          <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
            <p className="eyebrow mb-3">Transliteration</p>
            <p className="reading-copy text-[var(--foreground)]">
              Wa idha sa'alaka 'ibadi 'anni fa'inni qaribun ujibu da'wata
              ad-da'i idha da'ani
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <p className="eyebrow mb-3">English</p>
              <p className="reading-copy text-[var(--foreground)]">
                And when My servants ask you about Me, then surely I am near. I
                answer the call of the caller when he calls upon Me.
              </p>
            </div>
            <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <p className="eyebrow mb-3">Urdu</p>
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
          <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--surface)] p-5">
            <p className="eyebrow mb-3">Why keep this close</p>
            <p className="reading-copy text-[var(--foreground)]">
              This verse reminds you that Allah is close and answers when you
              call. Keep it close whenever you feel distant or in need of a
              response to your dua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
