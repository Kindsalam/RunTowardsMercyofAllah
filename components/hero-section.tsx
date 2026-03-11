import Link from "next/link";

export function HeroSection() {
  const stars = [
    "left-[9%] top-[18%]",
    "left-[28%] top-[11%]",
    "left-[63%] top-[16%]",
    "left-[85%] top-[24%]",
    "left-[14%] top-[68%]",
    "left-[54%] top-[76%]",
    "left-[78%] top-[62%]",
  ];

  return (
    <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(9,43,33,0.96)_0%,rgba(18,71,53,0.92)_48%,rgba(201,171,103,0.22)_100%)] px-5 py-8 text-white shadow-[0_30px_120px_rgba(6,20,15,0.22)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,246,214,0.2)_0%,_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(201,171,103,0.18)_0%,_transparent_34%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      {stars.map((position) => (
        <span
          key={position}
          className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.65)]`}
        />
      ))}
      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            Based on the Qur’an and authentic Sunnah
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
              Spend these last 10 nights with words that matter
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              A simple and beautiful place to read Qur’anic Rabbana duas,
              authentic morning and evening adhkar, and the most important duas
              for the last ashra and Laylatul Qadr. Arabic is shown with full
              harakat, with English and Urdu translation for easy reading and
              understanding.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/last-ten-nights" className="button-light">
              Start with the Last 10 Nights
            </Link>
            <Link href="/rabbana-duas" className="button-ghost-light">
              Read Rabbana Duas
            </Link>
          </div>
          <div className="space-y-2 text-sm leading-6 text-white/74">
            <p>Only Qur’anic duas and authentic hadith-based adhkar</p>
            <p>
              Made for phone reading, quiet reflection, and easy sharing with
              friends
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,246,214,0.62)_0%,_rgba(255,246,214,0.12)_36%,_transparent_66%)] blur-xl" />
          <div className="relative mx-auto max-w-sm rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              </div>
              <div className="rounded-[22px] border border-white/15 bg-black/10 p-5">
                <div className="mb-4 h-10 w-10 rounded-full border border-white/20 bg-white/10" />
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-text text-right text-3xl leading-[1.9] text-white"
                >
                  اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 rounded-[20px] border border-white/10 bg-white/5" />
                <div className="h-20 rounded-[20px] border border-white/10 bg-white/10" />
                <div className="h-20 rounded-[20px] border border-white/10 bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
