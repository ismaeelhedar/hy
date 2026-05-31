import type { ExperienceItem, Locale } from "@/types/site";

const experienceByLocale: Record<Locale, ExperienceItem[]> = {
  ar: [
    {
      company: "Novomed Company",
      role: "Team Lead UI/UX",
      period: "يوليو 2025 — حتى الآن",
      location: "الإمارات العربية المتحدة",
      summary:
        "قيادة تصميم واجهات وتجارب الاستخدام مع التركيز على بناء أنظمة تصميم قابلة للتوسع وتوحيد الهوية البصرية عبر المنتجات الرقمية.",
      achievements: [
        "قيادة إنشاء Design Systems قابلة للتوسع وواجهات دقيقة على مستوى البيكسل.",
        "التعاون مع مطوري الواجهات والفرق متعددة التخصصات لتحويل الرؤى إلى واجهات متجاوبة وسهلة الوصول.",
        "رفع اتساق العلامة وتحسين التجربة العامة على الويب والموبايل.",
      ],
    },
    {
      company: "Wonder Beauties Company",
      role: "UI/UX Specialist",
      period: "يوليو 2024 — يوليو 2025",
      location: "بغداد، العراق",
      summary:
        "العمل على تصميم واجهات عالية الدقة وبناء أنظمة تجربة متماسكة تركّز على المستخدم عبر الويب والموبايل.",
      achievements: [
        "قيادة تطوير Design Systems متقدمة وواجهات عالية الدقة.",
        "التعاون مع مطوري الواجهات وفرق المنتج لدمج استراتيجيات UI/UX في المنصات المختلفة.",
      ],
    },
    {
      company: "Zcoderz Company",
      role: "UI/UX Designer",
      period: "يناير 2024 — يوليو 2024",
      location: "بيرث، أستراليا",
      summary:
        "إدارة جانب التصميم وقيادة تنفيذ مشاريع UI/UX مع اهتمام كبير بالتركيز على المستخدم وتحسين الرضا والاندماج.",
      achievements: [
        "قيادة قسم التصميم وإدارة فريق من المصممين.",
        "تصميم حلول تركز على المستخدم وأسهمت في رفع التفاعل والرضا.",
      ],
    },
    {
      company: "S-APPS Company",
      role: "UI/UX Designer",
      period: "أبريل 2024 — يونيو 2024",
      location: "تعاون قصير المدى",
      summary:
        "المشاركة في تصميم iShow لصالح Syriatel بالشراكة مع S-Apps ضمن مدة تنفيذ مركزة.",
      achievements: [
        "العمل على مشروع iShow لصالح Syriatel.",
        "تنفيذ واجهات وتجربة استخدام ضمن شراكة مباشرة مع فريق S-Apps.",
      ],
    },
    {
      company: "Proftech Company",
      role: "UI/UX Designer",
      period: "يوليو 2021 — أبريل 2023",
      location: "الكويت / Remote",
      summary:
        "العمل مع المطورين ومديري المنتجات وأصحاب المصلحة لضمان واقعية التصميم وارتباطه بالأهداف التجارية.",
      achievements: [
        "التعاون الوثيق مع المطورين ومديري المنتجات وأصحاب المصلحة.",
        "تكرار التحسين على التصاميم بناءً على ملاحظات المستخدمين والمتطلبات المتغيرة.",
      ],
    },
    {
      company: "Ammah Voluntary Team",
      role: "Head of Design Department",
      period: "أبريل 2021 — نوفمبر 2024",
      location: "فريق تطوعي",
      summary:
        "قيادة قسم التصميم وإدارة فرق المصممين لتنفيذ مشاريع UI/UX متنوعة لعدة عملاء وجهات.",
      achievements: [
        "إدارة قسم التصميم وقيادة المصممين في تنفيذ مشاريع متعددة.",
        "إنشاء حلول تصميمية تتمحور حول المستخدم وتحسّن التفاعل والرضا.",
      ],
    },
  ],
  en: [
    {
      company: "Novomed Company",
      role: "Team Lead UI/UX",
      period: "July 2025 — Present",
      location: "United Arab Emirates",
      summary:
        "Leading UI/UX direction with a focus on scalable design systems and high-end interfaces across digital products.",
      achievements: [
        "Spearheaded scalable design systems and pixel-perfect interfaces.",
        "Worked closely with frontend engineers and cross-disciplinary teams to ship responsive and accessible interfaces.",
        "Improved brand consistency and the overall user experience across web and mobile surfaces.",
      ],
    },
    {
      company: "Wonder Beauties Company",
      role: "UI/UX Specialist",
      period: "July 2024 — July 2025",
      location: "Baghdad, Iraq",
      summary:
        "Designed advanced interface systems and user-centered digital experiences across web and mobile platforms.",
      achievements: [
        "Led the creation of advanced design systems and high-fidelity interfaces.",
        "Collaborated with frontend developers and product teams to integrate UI/UX strategy seamlessly.",
      ],
    },
    {
      company: "Zcoderz Company",
      role: "UI/UX Designer",
      period: "January 2024 — July 2024",
      location: "Perth, Australia",
      summary:
        "Managed design direction and delivered user-focused UI/UX work aimed at improving engagement and satisfaction.",
      achievements: [
        "Led the design department and managed a team of designers.",
        "Created user-centric designs that improved engagement and satisfaction.",
      ],
    },
    {
      company: "S-APPS Company",
      role: "UI/UX Designer",
      period: "April 2024 — June 2024",
      location: "Short-term collaboration",
      summary:
        "Worked on the iShow design for Syriatel in partnership with the S-Apps team.",
      achievements: [
        "Contributed to the iShow design for Syriatel.",
        "Delivered UI/UX work within a focused collaboration period.",
      ],
    },
    {
      company: "Proftech Company",
      role: "UI/UX Designer",
      period: "July 2021 — April 2023",
      location: "Kuwait / Remote",
      summary:
        "Collaborated with developers, product managers, and stakeholders to keep design feasible and aligned with business direction.",
      achievements: [
        "Worked closely with developers, product managers, and stakeholders.",
        "Continuously iterated on designs based on user feedback and changing requirements.",
      ],
    },
    {
      company: "Ammah Voluntary Team",
      role: "Head of Design Department",
      period: "April 2021 — November 2024",
      location: "Voluntary Team",
      summary:
        "Led the design department and managed designers across multiple UI/UX projects for different clients and initiatives.",
      achievements: [
        "Managed a team of designers executing UI/UX work for different clients.",
        "Created user-centered design outcomes that improved engagement and user satisfaction.",
      ],
    },
  ],
};

export function getExperience(locale: Locale) {
  return experienceByLocale[locale];
}
