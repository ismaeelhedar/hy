import Image from "next/image";

const quickFacts = [
  {
    label: "الاسم",
    value: "المهندس إسماعيل عبد الرحمن حيدر",
  },
  {
    label: "المسمى الوظيفي",
    value: "تيم ليدر فرونت إيند ديفلوبر",
  },
  {
    label: "المناسبة",
    value: "تهنئة خاصة بعيد الأضحى المبارك",
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_right,_rgba(224,193,125,0.18),_transparent_22%),radial-gradient(circle_at_bottom_left,_rgba(18,61,51,0.1),_transparent_26%)]" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#071d19_0%,#103930_42%,#081614_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle,_rgba(255,255,255,0.16),_transparent_70%)] blur-3xl" />
        <div className="absolute right-[6%] top-16 -z-10 h-56 w-56 rounded-full border border-[rgba(228,194,120,0.22)]" />
        <div className="absolute right-[8.5%] top-[5.6rem] -z-10 h-44 w-44 rounded-full bg-[rgba(228,194,120,0.8)] opacity-85 blur-[1px]" />
        <div className="absolute right-[11.5%] top-[6.4rem] -z-10 h-44 w-44 rounded-full bg-[#103930]" />
        <div className="absolute left-[8%] top-[18%] -z-10 h-3 w-3 rounded-full bg-[rgba(228,194,120,0.95)] shadow-[0_0_24px_rgba(228,194,120,0.95)]" />
        <div className="absolute left-[18%] top-[22%] -z-10 h-2 w-2 rounded-full bg-white/80 shadow-[0_0_16px_rgba(255,255,255,0.8)]" />
        <div className="absolute bottom-[20%] right-[20%] -z-10 h-28 w-28 rounded-full bg-[rgba(228,194,120,0.12)] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.28))]" />

        <div className="mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-8 lg:px-10">
          <div className="inline-flex rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold tracking-[0.26em] text-[rgba(246,231,196,0.92)] backdrop-blur">
            معايدة عيد الأضحى 1447
          </div>

          <div className="grid min-h-[calc(100vh-5.5rem)] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div className="order-2 flex flex-col gap-6 lg:order-1">
              <div className="space-y-5 animate-[fade-up_700ms_ease-out_both]">
                <span className="inline-flex w-fit items-center gap-3 rounded-full border border-[rgba(246,231,196,0.16)] bg-white/8 px-5 py-2 text-sm font-semibold text-[rgba(246,231,196,0.95)] backdrop-blur">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)] shadow-[0_0_18px_rgba(228,194,120,0.95)]" />
                  عيد الأضحى المبارك
                </span>

                <p className="font-display text-3xl leading-[1.5] text-[rgba(246,231,196,0.9)] sm:text-4xl">
                  كل عام وأنتم بخير
                </p>

                <h1 className="max-w-3xl text-5xl leading-[0.98] font-black tracking-tight text-white sm:text-6xl lg:text-8xl">
                  عيد أضحى
                  <span className="mt-2 block text-[var(--color-gold)]">
                    مبارك
                  </span>
                </h1>

                <p className="max-w-2xl text-lg leading-9 text-[rgba(238,244,241,0.82)] sm:text-xl">
                  أهنئكم بعيد الأضحى المبارك بكل محبة، أنا
                  <span className="mx-2 font-bold text-white">
                    المهندس إسماعيل عبد الرحمن حيدر
                  </span>
                  وأسأل الله أن يتقبل منكم الطاعات، ويعيد هذا العيد عليكم
                  باليمن والإيمان، والسكينة والرضوان، وبركةٍ تملأ القلوب والبيوت.
                </p>
              </div>

              <div className="animate-[fade-up_900ms_ease-out_both] rounded-[2rem] border border-[rgba(246,231,196,0.14)] bg-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[rgba(228,194,120,0.32)] bg-[rgba(228,194,120,0.14)] px-4 py-2 text-sm font-bold text-[var(--color-sand)]">
                    تيم ليدر فرونت إيند ديفلوبر
                  </span>
                  <span className="rounded-full border border-white/14 bg-black/10 px-4 py-2 text-sm font-semibold text-[rgba(238,244,241,0.84)]">
                    تهنئة خاصة بطابع مهني فاخر
                  </span>
                </div>

                <p className="mt-5 font-display text-2xl leading-[1.8] text-white sm:text-3xl">
                  أبارك لكم عيد الأضحى المبارك، وأسأل الله الكريم أن يتقبل
                  صالح أعمالكم، وأن يرزقكم فرحًا لا ينقطع، وقلبًا مطمئنًا،
                  ودعاءً مستجابًا، وأيامًا عامرةً بذكر الله والخير والقبول.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {quickFacts.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.4rem] border border-white/12 bg-[rgba(255,255,255,0.06)] px-4 py-4"
                    >
                      <p className="text-xs font-bold tracking-[0.22em] text-[rgba(246,231,196,0.66)]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-[33rem] animate-[float_8s_ease-in-out_infinite]">
                <div className="absolute -inset-8 -z-20 rounded-[3rem] bg-[radial-gradient(circle_at_center,_rgba(228,194,120,0.28),_transparent_62%)] blur-2xl" />
                <div className="absolute -right-4 top-16 -z-10 h-24 w-24 rounded-full border border-[rgba(246,231,196,0.24)] bg-white/10 backdrop-blur" />
                <div className="absolute -left-3 bottom-24 -z-10 h-20 w-20 rounded-full bg-[rgba(228,194,120,0.16)] blur-xl" />

                <div className="relative overflow-hidden rounded-[2.6rem] border border-[rgba(246,231,196,0.16)] bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-4 shadow-[0_32px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                  <div className="absolute inset-x-8 top-5 z-20 flex items-center justify-between rounded-full border border-white/14 bg-[rgba(7,29,25,0.55)] px-5 py-3 text-xs font-semibold tracking-[0.3em] text-[rgba(246,231,196,0.9)] backdrop-blur">
                    <span>1447 هـ</span>
                    <span>تهنئة العيد</span>
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-[linear-gradient(180deg,#d7cfbd_0%,#b7ae99_100%)]">
                    <Image
                      src="/ismaeel-profile.jpeg"
                      alt="المهندس إسماعيل عبد الرحمن حيدر"
                      fill
                      priority
                      sizes="(min-width: 1024px) 520px, 92vw"
                      className="object-cover object-[center_20%]"
                    />
                    <div className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(8,22,20,0.42),transparent)]" />
                    <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,transparent,rgba(6,20,17,0.88))]" />

                    <div className="absolute bottom-5 left-5 right-5 rounded-[1.8rem] border border-white/12 bg-[rgba(8,22,20,0.55)] px-5 py-5 backdrop-blur-xl">
                      <p className="font-display text-2xl text-white sm:text-3xl">
                        المهندس إسماعيل عبد الرحمن حيدر
                      </p>
                      <p className="mt-2 text-sm font-semibold tracking-[0.28em] text-[rgba(246,231,196,0.88)]">
                        TEAM LEAD FRONTEND DEVELOPER
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
