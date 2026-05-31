"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { getProfile } from "@content/profile";
import { Magnetic } from "@/components/site/magnetic";
import { useLocale } from "@/components/site/locale-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  "home",
  "story",
  "expertise",
  "process",
  "projects",
  "systems",
  "engineering",
  "testimonials",
  "contact",
] as const;

const navLabels = {
  ar: {
    home: "الرئيسية",
    story: "نبذة",
    expertise: "الخبرة",
    process: "المنهجية",
    projects: "المشاريع",
    systems: "الأنظمة",
    engineering: "الهندسة",
    testimonials: "الآراء",
    contact: "التواصل",
  },
  en: {
    home: "Home",
    story: "Story",
    expertise: "Expertise",
    process: "Process",
    projects: "Projects",
    systems: "Systems",
    engineering: "Engineering",
    testimonials: "Testimonials",
    contact: "Contact",
  },
} as const;

export function SiteNavbar() {
  const { locale, toggleLocale } = useLocale();
  const profile = getProfile(locale);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 140], [0.7, 1]);
  const blur = useTransform(scrollY, [0, 140], [8, 16]);
  const background = useTransform(
    scrollY,
    [0, 140],
    ["rgba(11,13,16,0.45)", "rgba(11,13,16,0.88)"],
  );
  const border = useTransform(
    scrollY,
    [0, 140],
    ["rgba(255,255,255,0.04)", "rgba(255,255,255,0.08)"],
  );
  const backdropFilter = useMotionTemplate`blur(${blur}px)`;

  const navLinks = useMemo(
    () =>
      navItems.map((id) => ({
        id,
        label: navLabels[locale][id],
        href: `#${id}`,
      })),
    [locale],
  );

  useEffect(() => {
    const sections = navItems
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.45, 0.72], rootMargin: "-18% 0px -22% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-8 md:pt-4" style={{ opacity }}>
        <motion.div
          className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.2rem] border px-3 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:px-4 sm:py-3 md:rounded-[1.35rem] md:px-5"
          style={{
            backdropFilter,
            backgroundColor: background,
            borderColor: border,
          }}
        >
          <a className="group flex items-center gap-3" href="#home">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-black text-white sm:h-10 sm:w-10">
              IH
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">{profile.shortName}</p>
              <p className="text-xs text-white/42">
                {locale === "ar" ? "تصميم منتجات + تنفيذ واجهات" : "Product design + frontend"}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((item) => (
              <a
                className={cn(
                  "rounded-xl px-3.5 py-2 text-sm transition",
                  active === item.id
                    ? "bg-white/[0.06] text-white"
                    : "text-white/56 hover:text-white",
                )}
                href={item.href}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/70 transition hover:text-white"
              onClick={toggleLocale}
              type="button"
            >
              {locale === "ar" ? "EN" : "AR"}
            </button>

            <Magnetic className="hidden lg:block">
              <Button asChild size="sm">
                <a href="#contact">{locale === "ar" ? "ابدأ تعاونًا" : "Start collaboration"}</a>
              </Button>
            </Magnetic>

            <button
              aria-label="Open navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white xl:hidden"
              onClick={() => setOpen(true)}
              type="button"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[70] bg-[#0b0d10]/92 backdrop-blur-xl xl:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              className="flex h-full flex-col p-5 sm:p-6"
              exit={{ y: 24, opacity: 0 }}
              initial={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.28 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-black text-white">{profile.shortName}</p>
                  <p className="text-sm text-white/45">{profile.title}</p>
                </div>
                <button
                  aria-label="Close navigation"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-1 flex-col gap-3 sm:mt-12">
                {navLinks.map((item) => (
                  <a
                    className="rounded-[1.25rem] border border-white/8 bg-[#111318] px-5 py-4 text-base font-semibold text-white/82 sm:text-lg"
                    href={item.href}
                    key={item.id}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <Button asChild size="lg">
                <a href="#contact" onClick={() => setOpen(false)}>
                  {locale === "ar" ? "لنبنِ شيئًا ذا معنى" : "Let’s build something meaningful"}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
