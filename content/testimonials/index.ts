import type { Locale, Testimonial } from "@/types/site";

const testimonialsByLocale: Record<Locale, Testimonial[]> = {
  ar: [
    {
      name: "Maya Haddad",
      role: "Founder",
      company: "NovaCore",
      quote:
        "إسماعيل يوازن بشكل نادر بين التفكير المنتجّي، الدقة البصرية، وواقعية التنفيذ. النتيجة تبدو احترافية قبل الإطلاق.",
    },
    {
      name: "Omar Salem",
      role: "Head of Product",
      company: "LayerGrid",
      quote:
        "هو لا يجمّل الشاشات فقط، بل يعيد تنظيم التعقيد حتى يصبح المنتج أوضح وأكثر ثقة.",
    },
    {
      name: "Razan K.",
      role: "Marketing Director",
      company: "Velora",
      quote:
        "تجربة الصفحة التعريفية بدت كمنتج فاخر فعلًا، والحركة والسرد والوضوح عملت معًا بانسجام.",
    },
    {
      name: "Ahmad N.",
      role: "Engineering Manager",
      company: "NexBoard",
      quote:
        "قدرته على الانتقال بين Figma والتنفيذ الحقيقي بـ Next.js أعطت الفريق سرعة وجودة أعلى بكثير.",
    },
  ],
  en: [
    {
      name: "Maya Haddad",
      role: "Founder",
      company: "NovaCore",
      quote:
        "Ismaeel brings a rare balance of product thinking, visual discipline, and implementation realism. The result feels premium before launch.",
    },
    {
      name: "Omar Salem",
      role: "Head of Product",
      company: "LayerGrid",
      quote:
        "He doesn’t just beautify screens. He reorganizes complexity until the product feels trustworthy and obvious.",
    },
    {
      name: "Razan K.",
      role: "Marketing Director",
      company: "Velora",
      quote:
        "The landing experience felt like a luxury product, not a generic website. Motion, clarity, and storytelling all worked together.",
    },
    {
      name: "Ahmad N.",
      role: "Engineering Manager",
      company: "NexBoard",
      quote:
        "His ability to move between Figma and production-grade Next.js implementation gave our team a major speed advantage.",
    },
  ],
};

export function getTestimonials(locale: Locale) {
  return testimonialsByLocale[locale];
}
