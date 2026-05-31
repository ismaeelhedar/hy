"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BellDot, ChevronDown, Sparkles, X } from "lucide-react";
import { getAnnouncement } from "@content/announcements";
import { useLocale } from "@/components/site/locale-provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AnnouncementLayer() {
  const { locale } = useLocale();
  const announcement = getAnnouncement(locale);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!announcement.active) {
      return;
    }

    const dismissed = window.localStorage.getItem(`announcement:${announcement.id}`);
    const timer = window.setTimeout(() => {
      setExpanded(dismissed !== "dismissed");
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [announcement.active, announcement.id]);

  if (!announcement.active) {
    return null;
  }

  const dismiss = () => {
    window.localStorage.setItem(`announcement:${announcement.id}`, "dismissed");
    setExpanded(false);
  };

  return (
    <div
      className={`pointer-events-none fixed top-20 z-[65] w-[min(92vw,25rem)] md:top-24 ${locale === "ar" ? "right-4 md:right-8" : "left-4 md:left-8"}`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.aside
            key="announcement-expanded"
            initial={{ opacity: 0, y: -24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#111318] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-[#96cbb5]/40" />
            <div className="relative space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-[#0d1014] text-[#96cbb5]">
                    <BellDot className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      {announcement.badge ? (
                        <Badge className="border-[#96cbb5]/20 bg-[#96cbb5]/10 text-[#dcebe4]">
                          {announcement.badge}
                        </Badge>
                      ) : null}
                      <span className="inline-flex items-center gap-1 text-xs text-white/50">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#96cbb5]" />
                        {locale === "ar" ? "إشعار خاص" : "spotlight"}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-white">
                      {announcement.title}
                    </h3>
                  </div>
                </div>

                <button
                  aria-label="Close announcement"
                  className="rounded-xl border border-white/8 bg-[#0d1014] p-2 text-white/60 transition hover:text-white"
                  onClick={dismiss}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="text-sm leading-7 text-white/70">{announcement.body}</p>

              <div className="flex flex-wrap items-center gap-3">
                {announcement.ctaHref && announcement.ctaLabel ? (
                  <Button asChild size="sm">
                    <a href={announcement.ctaHref}>{announcement.ctaLabel}</a>
                  </Button>
                ) : null}

                <button
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 transition hover:text-white"
                  onClick={() => setExpanded(false)}
                  type="button"
                >
                  {locale === "ar" ? "تصغير" : "minimize"}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.aside>
        ) : (
          <motion.button
            key="announcement-collapsed"
            aria-label="Open announcement"
            className="pointer-events-auto inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-[#111318] px-4 py-3 text-start text-sm text-white shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={() => setExpanded(true)}
            type="button"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-[#0d1014] text-[#96cbb5]">
              <Sparkles className="h-4 w-4" />
              <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-[#96cbb5]" />
            </span>
            <span className={locale === "ar" ? "text-right" : "text-left"}>
              <span className="block font-semibold">{announcement.title}</span>
              <span className="block text-xs text-white/50">
                {locale === "ar" ? "فتح الإشعار" : "Open announcement"}
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
