"use client";

import { useEffect, useState, type PropsWithChildren } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import { LocaleProvider, useLocale } from "@/components/site/locale-provider";

export function ClientRoot({ children }: PropsWithChildren) {
  return (
    <LocaleProvider>
      <ClientExperienceShell>{children}</ClientExperienceShell>
    </LocaleProvider>
  );
}

function ClientExperienceShell({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const { locale } = useLocale();

  useEffect(() => {
    const isTouchLike =
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;

    if (isTouchLike) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const isTouchLike =
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;

    if (isTouchLike) {
      return;
    }

    try {
      const seen = window.sessionStorage.getItem("portfolio-loader-seen");
      if (seen) {
        return;
      }

      window.sessionStorage.setItem("portfolio-loader-seen", "true");
    } catch {
      // If sessionStorage is blocked, skip the loader rather than risking a blank screen.
      return;
    }

    let tween: gsap.core.Tween | undefined;
    const frame = window.requestAnimationFrame(() => {
      setLoading(true);
      const state = { value: 0 };

      tween = gsap.to(state, {
        value: 100,
        duration: 1.8,
        ease: "power3.out",
        onUpdate: () => setProgress(Math.round(state.value)),
        onComplete: () => {
          window.setTimeout(() => setLoading(false), 220);
        },
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      tween?.kill();
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-[linear-gradient(90deg,#ffffff,#96cbb5)]"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center overflow-hidden bg-[#0b0d10] px-4 py-10"
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(150,203,181,0.14),transparent_28%)]" />
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_56%)]"
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-8 rounded-[1.75rem] border border-white/8 bg-[#111318] px-6 py-7 md:px-8 md:py-9">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/40">
                    {locale === "ar" ? "تهيئة التجربة" : "Initializing experience"}
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-white md:text-5xl">
                    ISMAEEL HYDAR
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/45">
                    {locale === "ar"
                      ? "نظام بورتفوليو سينمائي"
                      : "Cinematic portfolio system"}
                  </p>
                  <p className="mt-2 text-4xl font-black text-white">{progress}%</p>
                </div>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  className="h-full rounded-full bg-[linear-gradient(90deg,#ffffff,#96cbb5)]"
                />
              </div>

              <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                {locale === "ar"
                  ? "جاري تحميل الطبقات البصرية، الحركة، الأجواء التفاعلية، وسرد المنتج."
                  : "Loading premium surfaces, interaction layers, motion atmosphere, and product storytelling."}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {children}
    </>
  );
}
