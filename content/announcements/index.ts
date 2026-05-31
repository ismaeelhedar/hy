import type { AnnouncementConfig, Locale } from "@/types/site";

const announcements: Record<Locale, AnnouncementConfig> = {
  ar: {
    id: "eid-1447",
    active: false,
    badge: "جديد",
    title: "عيد أضحى مبارك",
    body:
      "أبارك لكم عيد الأضحى المبارك، وأسأل الله أن يعيده عليكم باليمن والإيمان، والسكينة والقبول، وأن يكتب لكم أفراحًا لا تنقطع.",
    ctaLabel: "تواصل معي",
    ctaHref: "#contact",
  },
  en: {
    id: "eid-1447",
    active: false,
    badge: "NEW",
    title: "Eid Al-Adha Greetings",
    body:
      "Wishing you a blessed Eid Al-Adha. May Allah accept your good deeds and return this season with peace, grace, and lasting joy.",
    ctaLabel: "Get in touch",
    ctaHref: "#contact",
  },
};

export function getAnnouncement(locale: Locale) {
  return announcements[locale];
}
