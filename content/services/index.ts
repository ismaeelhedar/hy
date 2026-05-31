import type { Locale, Service } from "@/types/site";

const servicesByLocale: Record<Locale, Service[]> = {
  ar: [
    {
      slug: "ui-ux-design",
      title: "تصميم UI/UX",
      eyebrow: "واجهات مدفوعة بالمنتج",
      description:
        "تصميم واجهات وتجارب استخدام عالية الدقة، مبنية على الوضوح، التسلسل البصري، وسهولة الاستخدام.",
      preview: "تدفقات استخدام، wireframes، وشاشات نهائية متقنة.",
      details: ["هيكلة المنتج", "شاشات عالية الدقة", "وضوح تجربة المستخدم"],
    },
    {
      slug: "product-design",
      title: "تصميم المنتجات الرقمية",
      eyebrow: "من الفكرة إلى النظام",
      description:
        "بناء منطق المنتج، وتدفقات الاستخدام، واتجاه التجربة بطريقة تجعل المنتج ناضجًا وواضحًا منذ أول استخدام.",
      preview: "قرارات تصميمية مرتبطة بالمنتج والتوسع.",
      details: ["رسم الرحلات", "تحويل المتطلبات إلى تجربة", "تحسين الاتجاه المنتجّي"],
    },
    {
      slug: "frontend-development",
      title: "تطوير الواجهات الأمامية",
      eyebrow: "تنفيذ production-ready",
      description:
        "تطوير واجهات حديثة باستخدام Next.js وTypeScript مع اهتمام بالأداء، سهولة الصيانة، والجودة البصرية.",
      preview: "واجهة حية متقنة مبنية على نظام مكوّنات.",
      details: ["هيكلة Next.js", "Typed components", "تحسين الأداء"],
    },
    {
      slug: "saas-design",
      title: "تصميم SaaS",
      eyebrow: "تجارب B2B حديثة",
      description:
        "تصميم منتجات SaaS ولوحات تحكم وأنظمة تشغيل رقمية تبدو احترافية، واضحة، وسهلة التوسع.",
      preview: "Onboarding، dashboard، وواجهات العمليات.",
      details: ["لوحات تحكم", "وضوح المعلومات", "بناء الثقة البصرية"],
    },
    {
      slug: "mobile-app-design",
      title: "تصميم تطبيقات الموبايل",
      eyebrow: "تجارب لمس طبيعية",
      description:
        "تصميم تطبيقات موبايل مرنة، سريعة الفهم، ومحسّنة للمس والتصفّح على الشاشات الصغيرة.",
      preview: "تدفقات موبايل بصرية ومنطقية.",
      details: ["سلوك اللمس", "واجهات الموبايل", "التجاوب الذكي"],
    },
    {
      slug: "dashboard-design",
      title: "تصميم لوحات التحكم",
      eyebrow: "وضوح تشغيلي",
      description:
        "تنظيم الواجهات المعقدة والبيانات الكثيفة بطريقة تساعد على اتخاذ القرار بسرعة دون فوضى بصرية.",
      preview: "واجهات تشبه مراكز القيادة الحديثة.",
      details: ["هرمية البيانات", "واجهات تشغيلية", "تصميم قائم على الإجراء"],
    },
    {
      slug: "design-systems",
      title: "أنظمة التصميم",
      eyebrow: "لغة واجهات قابلة للتوسع",
      description:
        "بناء tokens ومكوّنات وقواعد استخدام توحّد بين التصميم والتنفيذ وتسرّع العمل على المنتج.",
      preview: "نظام جاهز للنمو والاتساق.",
      details: ["أنظمة tokens", "مكتبات مكونات", "اتساق عبر الفرق"],
    },
    {
      slug: "landing-pages",
      title: "الصفحات التعريفية",
      eyebrow: "سرد بصري يقنع",
      description:
        "تصميم صفحات هبوط وتعريف بالمنتجات بأسلوب بصري راقٍ وحركة مدروسة تدعم الرسالة والتحويل.",
      preview: "صفحات تبدو كمنتج فاخر لا كقالب عادي.",
      details: ["Positioning", "Motion storytelling", "تحسين التحويل"],
    },
  ],
  en: [
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      eyebrow: "Product-first interfaces",
      description:
        "High-quality interface design shaped around clarity, hierarchy, usability, and polished visual direction.",
      preview: "User flows, wireframes, and refined final screens.",
      details: ["Product architecture", "High-fidelity screens", "UX clarity"],
    },
    {
      slug: "product-design",
      title: "Product Design",
      eyebrow: "From concept to system",
      description:
        "I shape product logic, flows, and user-facing structure so digital products feel coherent from the very first interaction.",
      preview: "Product-aware decisions built for scale.",
      details: ["Journey mapping", "Requirement translation", "Strategic iteration"],
    },
    {
      slug: "frontend-development",
      title: "Frontend Development",
      eyebrow: "Production-grade execution",
      description:
        "Modern frontend implementation in Next.js and TypeScript with a focus on performance, maintainability, and premium feel.",
      preview: "Live interfaces backed by reusable component systems.",
      details: ["Next.js architecture", "Typed systems", "Performance tuning"],
    },
    {
      slug: "saas-design",
      title: "SaaS Design",
      eyebrow: "Modern B2B products",
      description:
        "Designing SaaS experiences, dashboards, and digital operations layers that feel clear, modern, and trustworthy.",
      preview: "Onboarding, dashboard, and operational product layers.",
      details: ["Dashboard UX", "Information density", "Trust-building visuals"],
    },
    {
      slug: "mobile-app-design",
      title: "Mobile App Design",
      eyebrow: "Touch-native journeys",
      description:
        "Mobile experiences built for clarity, gesture comfort, and responsiveness across smaller interfaces.",
      preview: "Mobile flows that feel natural and polished.",
      details: ["Touch behavior", "Mobile systems", "Responsive logic"],
    },
    {
      slug: "dashboard-design",
      title: "Dashboard Design",
      eyebrow: "Operational clarity",
      description:
        "Structuring complex, data-heavy interfaces in a way that supports faster decisions without visual overload.",
      preview: "Interfaces that feel like modern command centers.",
      details: ["Data hierarchy", "Operational UI", "Action-centric layouts"],
    },
    {
      slug: "design-systems",
      title: "Design Systems",
      eyebrow: "Scalable interface language",
      description:
        "Tokens, components, and system rules that align design with implementation and improve long-term product consistency.",
      preview: "Built for growth, consistency, and speed.",
      details: ["Token systems", "Component libraries", "Cross-team consistency"],
    },
    {
      slug: "landing-pages",
      title: "Landing Pages",
      eyebrow: "Narratives that convert",
      description:
        "Product and brand pages with refined motion, strong positioning, and visual storytelling that feels premium.",
      preview: "Not templates. Focused digital first impressions.",
      details: ["Positioning", "Motion storytelling", "Conversion UX"],
    },
  ],
};

export function getServices(locale: Locale) {
  return servicesByLocale[locale];
}
