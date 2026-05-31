import type { Locale, ProfileConfig, SkillCategory } from "@/types/site";

const profileByLocale: Record<Locale, ProfileConfig> = {
  ar: {
    name: "المهندس إسماعيل عبد الرحمن حيدر",
    shortName: "إسماعيل حيدر",
    title: "مصمم UI/UX أول + Team Lead Frontend Developer",
    headline: "أصمم وأطوّر منتجات رقمية فاخرة تجمع بين وضوح التجربة وقوة التنفيذ.",
    intro:
      "أنا مصمم UI/UX ومهندس واجهات أمامية بشخصية قيادية وعقلية ريادية، أعمل على بناء منتجات رقمية حديثة تجمع بين التفكير المنتجّي، الهوية البصرية، وسلاسة التنفيذ على الويب والموبايل.",
    education: [
      "بكالوريوس في هندسة المعلوماتية - جامعة قاسيون الخاصة (2019 - 2024)",
    ],
    languages: [
      { name: "العربية", level: "لغة أم - كتابة وتحدثًا" },
      { name: "الإنجليزية", level: "مستوى متوسط قوي للتواصل التقني" },
    ],
    location: "سوريا / الشرق الأوسط",
    timezone: "GMT+3",
    availability: "متاح للعمل الحر والتعاون على المنتجات",
    responseTime: "الرد غالبًا خلال 24 ساعة",
    yearsOfExperience: "4+",
    downloadCvHref: "/ismaeel-2025-cv.pdf",
    heroWords: [
      "تصميم UI/UX",
      "تصميم المنتجات الرقمية",
      "واجهات Next.js",
      "أنظمة التصميم",
      "تجارب تفاعلية حديثة",
    ],
    stats: [
      { value: "06+", label: "خبرات عملية موثقة" },
      { value: "04", label: "أسواق إقليمية ودولية" },
      { value: "08+", label: "مهارات أساسية ومتقدمة" },
      { value: "100%", label: "تركيز على الجودة والدقة" },
    ],
    socialLinks: [
      {
        platform: "email",
        label: "البريد الإلكتروني",
        handle: "ismaeelhedar2@gmail.com",
        href: "mailto:ismaeelhedar2@gmail.com",
        stat: "وسيلة التواصل الأساسية",
        preview: "للتعاونات الاحترافية، المنتجات، والاستشارات التصميمية والتنفيذية.",
        accent: "#8b5cf6",
      },
      {
        platform: "phone",
        label: "الهاتف",
        handle: "متاح عند الطلب",
        href: "#contact",
        stat: "للاجتماعات السريعة",
        preview: "يمكن مشاركة رقم الهاتف مباشرة بعد بدء التواصل الرسمي على البريد.",
        accent: "#0ea5e9",
      },
      {
        platform: "whatsapp",
        label: "واتساب",
        handle: "تنسيق سريع للمشاريع",
        href: "#contact",
        stat: "محادثة سريعة",
        preview: "مناسب للاتفاقات السريعة والتحديثات المختصرة بعد بدء المشروع.",
        accent: "#25D366",
      },
      {
        platform: "telegram",
        label: "تلغرام",
        handle: "تواصل مرن",
        href: "#contact",
        stat: "Async friendly",
        preview: "خيار مناسب للنقاشات المطولة وملاحظات التصميم.",
        accent: "#229ED9",
      },
      {
        platform: "linkedin",
        label: "لينكدإن",
        handle: "الهوية المهنية",
        href: "#contact",
        stat: "ملف قيادي",
        preview: "رحلة مهنية تجمع التصميم، القيادة، والتنفيذ المنتجّي.",
        accent: "#0A66C2",
      },
      {
        platform: "behance",
        label: "بيهانس",
        handle: "معرض الأعمال",
        href: "#projects",
        stat: "واجهة العرض البصري",
        preview: "مكان مناسب لعرض دراسات الحالة، الواجهات، والهوية البصرية للمشاريع.",
        accent: "#1769FF",
      },
      {
        platform: "dribbble",
        label: "دريبل",
        handle: "لقطات بصرية",
        href: "#projects",
        stat: "استكشاف بصري",
        preview: "أفكار واجهات، حالات UI، وتجارب بصرية قصيرة.",
        accent: "#EA4C89",
      },
      {
        platform: "github",
        label: "جيت هب",
        handle: "ismaeelhedar",
        href: "https://github.com/ismaeelhedar",
        stat: "توجّه هندسي",
        preview: "المكان الذي يظهر جانب التنفيذ، الهيكلة، والعمل على الواجهات الحديثة.",
        accent: "#A1A1AA",
      },
      {
        platform: "instagram",
        label: "إنستغرام",
        handle: "هوية بصرية شخصية",
        href: "#contact",
        stat: "محتوى إبداعي",
        preview: "مساحة مرئية جانبية يمكن استخدامها لإظهار الحس الإبداعي والهوية.",
        accent: "#E1306C",
      },
      {
        platform: "x",
        label: "إكس / تويتر",
        handle: "أفكار ومنشورات",
        href: "#contact",
        stat: "ملاحظات مهنية",
        preview: "أفكار عن المنتجات، UX، والواجهات الحديثة إن رغبت بإضافتها لاحقًا.",
        accent: "#f5f5f5",
      },
    ],
    aboutTabs: [
      {
        id: "design",
        title: "عقلية التصميم",
        lead: "أبدأ دائمًا من الوضوح قبل الزخرفة.",
        body:
          "أركز على بناء شاشات واضحة، مرتبة، ومبنية على تسلسل بصري قوي يوجّه المستخدم ويزيد الثقة في المنتج قبل أي تجميل بصري زائد.",
      },
      {
        id: "frontend",
        title: "عقلية الواجهات الأمامية",
        lead: "أحوّل الفكرة إلى واجهات حية وقابلة للتوسع.",
        body:
          "خبرتي في التنفيذ تساعدني على تصميم واجهات واقعية، قابلة للبناء، وسهلة التوسع باستخدام Next.js وTypeScript وأنظمة المكونات الحديثة.",
      },
      {
        id: "leadership",
        title: "العقلية القيادية",
        lead: "أربط بين الرؤية، الفريق، والتنفيذ.",
        body:
          "أملك قدرة جيدة على التعاون وإدارة فرق التصميم، وتحويل التوجيهات العامة إلى نظم عملية واضحة قابلة للتنفيذ ضمن بيئات عمل متعددة التخصصات.",
      },
    ],
    philosophy: [
      "التصميم القوي يجب أن يبدو طبيعيًا لا متكلفًا.",
      "الحركة الناجحة تقود الانتباه ولا تسرقه.",
      "أفضل المنتجات هي التي تتفق فيها الاستراتيجية والواجهة والكود.",
    ],
  },
  en: {
    name: "Ismaeel Abdulrahman Hedar",
    shortName: "Ismaeel Hedar",
    title: "Senior UI/UX Designer + Team Lead Frontend Developer",
    headline:
      "I design and build premium digital products that balance product clarity, visual craft, and frontend execution.",
    intro:
      "I’m a UI/UX designer and frontend engineer with an entrepreneurial mindset, strong collaboration skills, and a deep interest in building high-end digital products across web and mobile.",
    education: [
      "Degree in Informatics Engineering - Qasyoun Private University (2019 - 2024)",
    ],
    languages: [
      { name: "Arabic", level: "Native proficiency in written and spoken communication" },
      { name: "English", level: "Intermediate with strong technical communication ability" },
    ],
    location: "Syria / MENA",
    timezone: "GMT+3",
    availability: "Available for freelance and product collaboration",
    responseTime: "Usually responds within 24 hours",
    yearsOfExperience: "4+",
    downloadCvHref: "/ismaeel-2025-cv.pdf",
    heroWords: [
      "UI/UX Design",
      "Digital Product Design",
      "Next.js Interfaces",
      "Design Systems",
      "Interactive Experiences",
    ],
    stats: [
      { value: "06+", label: "Documented roles" },
      { value: "04", label: "Regional & international markets" },
      { value: "08+", label: "Core and advanced skills" },
      { value: "100%", label: "Precision-focused delivery" },
    ],
    socialLinks: [
      {
        platform: "email",
        label: "Email",
        handle: "ismaeelhedar2@gmail.com",
        href: "mailto:ismaeelhedar2@gmail.com",
        stat: "Primary contact",
        preview: "For collaborations, product work, and premium design/frontend engagements.",
        accent: "#8b5cf6",
      },
      {
        platform: "phone",
        label: "Phone",
        handle: "Available on request",
        href: "#contact",
        stat: "For quick meetings",
        preview: "Phone details can be shared directly once a formal conversation starts.",
        accent: "#0ea5e9",
      },
      {
        platform: "whatsapp",
        label: "WhatsApp",
        handle: "Fast project coordination",
        href: "#contact",
        stat: "Quick chat",
        preview: "Useful for lightweight coordination once a project discussion is active.",
        accent: "#25D366",
      },
      {
        platform: "telegram",
        label: "Telegram",
        handle: "Flexible communication",
        href: "#contact",
        stat: "Async friendly",
        preview: "Great for longer threads and detailed design conversations.",
        accent: "#229ED9",
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        handle: "Professional identity",
        href: "#contact",
        stat: "Leadership profile",
        preview: "A profile that reflects product thinking, design leadership, and team growth.",
        accent: "#0A66C2",
      },
      {
        platform: "behance",
        label: "Behance",
        handle: "Case study gallery",
        href: "#projects",
        stat: "Visual showcase",
        preview: "A strong place for polished case studies and interface storytelling.",
        accent: "#1769FF",
      },
      {
        platform: "dribbble",
        label: "Dribbble",
        handle: "Visual snippets",
        href: "#projects",
        stat: "Creative exploration",
        preview: "Great for interface shots, interaction snippets, and visual explorations.",
        accent: "#EA4C89",
      },
      {
        platform: "github",
        label: "GitHub",
        handle: "ismaeelhedar",
        href: "https://github.com/ismaeelhedar",
        stat: "Engineering layer",
        preview: "The execution side of my work: frontend structure, code craft, and systems thinking.",
        accent: "#A1A1AA",
      },
      {
        platform: "instagram",
        label: "Instagram",
        handle: "Personal visual identity",
        href: "#contact",
        stat: "Creative side",
        preview: "A good place to extend a softer visual side of the personal brand later.",
        accent: "#E1306C",
      },
      {
        platform: "x",
        label: "X / Twitter",
        handle: "Thoughts and notes",
        href: "#contact",
        stat: "Professional notes",
        preview: "A future space for product, UX, and digital craft insights if needed.",
        accent: "#f5f5f5",
      },
    ],
    aboutTabs: [
      {
        id: "design",
        title: "Design Mindset",
        lead: "I begin with clarity before decoration.",
        body:
          "I focus on structure, hierarchy, and user confidence first. A strong interface should guide people naturally before it tries to impress them visually.",
      },
      {
        id: "frontend",
        title: "Frontend Mindset",
        lead: "I translate ideas into scalable interface systems.",
        body:
          "My implementation background helps me design interfaces that are realistic, production-aware, and scalable with modern component-driven frontend architecture.",
      },
      {
        id: "leadership",
        title: "Leadership Mindset",
        lead: "I connect vision, teams, and delivery.",
        body:
          "I’m comfortable leading design direction, collaborating across disciplines, and turning broad product goals into practical, polished deliverables.",
      },
    ],
    philosophy: [
      "Strong design should feel natural, not overworked.",
      "Motion should guide attention, not steal it.",
      "The best products are where strategy, interface, and code agree.",
    ],
  },
};

const skillCategoriesByLocale: Record<Locale, SkillCategory[]> = {
  ar: [
    {
      category: "أدوات ومهارات التصميم",
      skills: [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Illustrator",
        "Prototyping",
        "Wireframing",
        "UI/UX Principles",
      ],
    },
    {
      category: "مهارات الويب والتنفيذ",
      skills: [
        "HTML/CSS",
        "JavaScript",
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
      ],
    },
    {
      category: "المهارات الشخصية والمنتجية",
      skills: [
        "Creative Problem Solving",
        "Collaborative Teamwork",
        "Effective Communication",
        "Strategic Decision Making",
        "Research & Analytical Thinking",
        "Organizational Skills",
      ],
    },
  ],
  en: [
    {
      category: "Design Tools & Craft",
      skills: [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "Illustrator",
        "Prototyping",
        "Wireframing",
        "UI/UX Principles",
      ],
    },
    {
      category: "Web & Implementation",
      skills: [
        "HTML/CSS",
        "JavaScript",
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
      ],
    },
    {
      category: "Leadership & Soft Skills",
      skills: [
        "Creative Problem Solving",
        "Collaborative Teamwork",
        "Effective Communication",
        "Strategic Decision Making",
        "Research & Analytical Thinking",
        "Organizational Skills",
      ],
    },
  ],
};

export function getProfile(locale: Locale) {
  return profileByLocale[locale];
}

export function getSkillCategories(locale: Locale) {
  return skillCategoriesByLocale[locale];
}
