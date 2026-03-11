export function ReflectionSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.08)] sm:px-8 lg:px-10">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(214,179,98,0.18)_0%,_transparent_55%)]" />
      <div className="relative space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Allah is near</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Allah is near
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            When you raise your hands, you are not calling on One who is distant.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--panel-strong)] p-5 sm:p-7">
            <p
              dir="rtl"
              lang="ar"
              className="arabic-text text-right text-[calc(1.95rem*var(--dua-scale))] leading-[1.9] text-[var(--foreground)]"
            >
              وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5">
              <p className="eyebrow mb-3">English meaning</p>
              <p className="text-sm leading-7 text-[var(--foreground)]">
                And when My servants ask you about Me, then surely I am near. I
                answer the call of the caller when he calls upon Me.
              </p>
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5">
              <p className="eyebrow mb-3">Urdu meaning</p>
              <p
                dir="rtl"
                lang="ur"
                className="urdu-text text-right text-base leading-9 text-[var(--foreground)]"
              >
                اور جب میرے بندے آپ سے میرے بارے میں پوچھیں تو بے شک میں قریب
                ہوں۔ جب کوئی پکارنے والا مجھے پکارتا ہے تو میں اس کی دعا قبول
                کرتا ہوں۔
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.28fr_0.72fr]">
          <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-sm font-medium leading-7 text-[var(--foreground)]">
            Surah Al-Baqarah 2:186
          </div>
          <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-sm leading-7 text-[var(--muted)]">
            You do not need fancy words to call upon Allah. But Allah has
            already taught us the best words in the Qur&apos;an, and His
            Messenger taught us the best adhkar and duas in the Sunnah. This
            website is here to help you reach those words quickly, read them
            properly, and keep your heart engaged.
          </div>
        </div>
      </div>
    </section>
  );
}
