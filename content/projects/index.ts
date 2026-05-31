import type { Locale, ProjectArchiveItem, ProjectItem } from "@/types/site";

const featuredCaseStudySlugs = [
  "zcoderz",
  "syrex-at",
  "syrex-holding",
  "novomed-web",
  "nafsi-health-web",
  "wonder-beauties-app",
] as const;

const englishFeaturedProjects: ProjectItem[] = [
  {
    slug: "zcoderz",
    title: "ZCoderz",
    client: "ZCoderz",
    category: "Technology Website",
    sector: "Software Development & Product Services",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "UI/UX Direction · Information Architecture · Frontend Presentation",
    year: "Live",
    summary:
      "A corporate technology website positioned to communicate product design, SaaS integration, and custom software capabilities with more credibility and structure.",
    story:
      "The main challenge was to present a broad software business as a serious product partner rather than a generic services company. The work focused on clarifying service architecture, trust signals, and the path from discovery to inquiry.",
    contribution:
      "I treated the website like a product-facing business surface: clarifying what the company does, how the services relate, and how the interface should support trust, scanning, and conversion.",
    goals: [
      "Clarify service architecture across product design, SaaS, and software delivery",
      "Raise trust through cleaner hierarchy, stronger proof, and calmer page composition",
      "Make lead capture feel integrated instead of appended at the end of the page",
    ],
    focus: [
      "Service architecture",
      "Conversion hierarchy",
      "Proof and trust layout",
      "Responsive scanning patterns",
    ],
    designStates: [
      "Service landing structure",
      "Case study and proof blocks",
      "Primary CTA and inquiry sections",
      "Responsive navigation behavior",
    ],
    stack: ["UI/UX Design", "UX Writing", "Responsive Frontend", "Design System Thinking"],
    metrics: [
      { label: "Business history", value: "16+ yrs" },
      { label: "Presence", value: "AU + Dubai" },
      { label: "Core themes", value: "SaaS · UX · Dev" },
    ],
    links: {
      live: "https://www.zcoderz.com/",
      caseStudy: "/projects/zcoderz",
    },
    challenge:
      "The content was rich, but the business narrative needed stronger structure. Visitors had to understand technical breadth, design maturity, and why the company was trustworthy within the first few screens.",
    solution:
      "I re-framed the interface around clearer service clusters, stronger page rhythm, and more deliberate proof sections so the company could read as a product-minded partner, not only a development vendor.",
    results: [
      "Sharper separation between service categories and business value",
      "A calmer enterprise tone with clearer scanning paths",
      "A more intentional flow from offer discovery to contact intent",
    ],
    responsibilities: [
      "Clarify information architecture and service taxonomy",
      "Design section systems and visual hierarchy for conversion-led pages",
      "Define responsive behavior for long-form business storytelling",
      "Support frontend-ready structure and polish decisions",
    ],
    process: {
      research: [
        "Reviewed the current service narrative and how quickly it communicated trust",
        "Mapped overlaps between UX, SaaS integration, and software development messaging",
        "Benchmarked enterprise-facing tech sites to identify clarity gaps",
      ],
      flows: [
        "Simplified entry points into service categories and proof",
        "Connected page sections around a more coherent inquiry journey",
        "Reduced visual competition between marketing copy and action areas",
      ],
      wireframes: [
        "Explored page structures that prioritize scanning before detail",
        "Tested different placements for proof, differentiation, and CTAs",
        "Built modular sections suitable for responsive reuse",
      ],
      designSystem: [
        "Applied a calmer typography and spacing rhythm",
        "Defined repeatable patterns for cards, proof modules, and content containers",
        "Aligned page surfaces to feel more product-led and less brochure-like",
      ],
      frontend: [
        "Prepared the layout logic to be implementable as reusable sections",
        "Considered breakpoints and narrative pacing across desktop and mobile",
        "Kept the interface ready for scalable iteration as content grows",
      ],
    },
    accent: "#6ee7b7",
    featured: true,
  },
  {
    slug: "syrex-at",
    title: "Syrex AT",
    client: "Syrex AT",
    category: "Advisory Website",
    sector: "Investment & Business Setup",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Product Messaging UX · Bilingual Interface Design",
    year: "Live",
    summary:
      "A business advisory website structured around investor confidence, setup clarity, and a more guided path through business establishment services.",
    story:
      "This project needed to feel dependable from the first scroll. The product challenge was not visual noise but how to translate administrative, legal, and investment complexity into a more reassuring user experience.",
    contribution:
      "I focused on simplifying the path from curiosity to consultation by making the business-setup journey clearer, calmer, and easier to trust in both Arabic and English.",
    goals: [
      "Make the service journey understandable for new investors",
      "Reduce friction around legal, administrative, and setup content",
      "Create a bilingual interface that feels structured and credible",
    ],
    focus: ["Investor journey", "Bilingual UX", "Trust sections", "Consultation pathways"],
    designStates: [
      "Service explanation modules",
      "Founder and company trust blocks",
      "Consultation CTA sections",
      "Arabic / English responsive layouts",
    ],
    stack: ["UI/UX Design", "Bilingual Layouts", "Content Structuring", "Responsive Design"],
    metrics: [
      { label: "Interface mode", value: "AR / EN" },
      { label: "Offer scope", value: "Legal + Setup" },
      { label: "Primary flow", value: "Discover → Consult" },
    ],
    links: {
      live: "https://syrexat.com/",
      caseStudy: "/projects/syrex-at",
    },
    challenge:
      "Business setup websites often feel dense, repetitive, or too legal-heavy for first-time visitors. The challenge was to preserve seriousness while making the journey easier to understand and act on.",
    solution:
      "I designed a more guided page structure with clearer section sequencing, calmer content blocks, and stronger service framing so users could move from uncertainty to confidence with less friction.",
    results: [
      "A clearer consultation-led path for first-time visitors",
      "More coherent bilingual structure across informational sections",
      "A stronger sense of professionalism without adding interface noise",
    ],
    responsibilities: [
      "Shape the investor-facing information hierarchy",
      "Design bilingual layout behavior and reading rhythm",
      "Clarify service blocks, trust elements, and action areas",
      "Support a more product-like flow across advisory content",
    ],
    process: {
      research: [
        "Reviewed the content complexity around business setup and investment guidance",
        "Identified the reassurance signals missing from the current experience",
        "Studied how advisory brands communicate trust without feeling overwhelming",
      ],
      flows: [
        "Defined a clearer path from understanding services to booking a discussion",
        "Separated strategic, legal, and procedural content into digestible layers",
        "Improved the rhythm between explanatory blocks and action moments",
      ],
      wireframes: [
        "Tested layouts that reduce cognitive load for first-time investors",
        "Balanced founder credibility, service details, and consultation CTAs",
        "Prepared bilingual blocks with stronger rhythm and spacing",
      ],
      designSystem: [
        "Established more dependable content containers and section patterns",
        "Aligned typography and spacing for longer bilingual reading",
        "Created consistent visual behavior for cards, highlights, and CTA blocks",
      ],
      frontend: [
        "Ensured the structure remains clean across Arabic and English layouts",
        "Prepared responsive logic for long-form sections and stacked cards",
        "Optimized for calm reading on mobile without losing the corporate tone",
      ],
    },
    accent: "#93c5fd",
    featured: true,
  },
  {
    slug: "syrex-holding",
    title: "Syrex Holding",
    client: "Syrex Holding",
    category: "Corporate Group Website",
    sector: "Holding Company & Multi-sector Portfolio",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "UX Strategy · Narrative Structure · Corporate Interface Design",
    year: "Live",
    summary:
      "A multi-sector holding company website designed to present healthcare, humanitarian, and business initiatives through one coherent and credible digital narrative.",
    story:
      "The challenge was to unify several business directions under one experience without flattening the identity of each area. The website had to feel corporate, clear, and mature while still giving each sector enough room to breathe.",
    contribution:
      "I worked on turning a broad holding story into an experience with stronger narrative control, clearer sector separation, and a more premium sense of organizational trust.",
    goals: [
      "Translate multiple sectors into one consistent digital system",
      "Improve clarity around what the holding group does and why it matters",
      "Build a more executive-ready tone across pages and navigation",
    ],
    focus: [
      "Multi-sector architecture",
      "Corporate storytelling",
      "Executive trust signals",
      "Cross-brand navigation",
    ],
    designStates: [
      "Sector overview modules",
      "Company structure and mission blocks",
      "Cross-linking between initiatives",
      "Corporate contact and inquiry surfaces",
    ],
    stack: ["Information Architecture", "Corporate UX", "Responsive UI", "Design System Thinking"],
    metrics: [
      { label: "Business sectors", value: "03" },
      { label: "Group narrative", value: "Unified" },
      { label: "Primary tone", value: "Executive" },
    ],
    links: {
      live: "https://syrexholding.com/",
      caseStudy: "/projects/syrex-holding",
    },
    challenge:
      "A holding structure creates a content problem before it creates a visual problem. The interface needed to explain the portfolio clearly, keep the corporate tone high, and avoid feeling fragmented.",
    solution:
      "I organized the experience around distinct sector moments, a more disciplined corporate hierarchy, and stronger connective tissue between the group identity and its initiatives.",
    results: [
      "Clearer separation between sectors without losing group cohesion",
      "A stronger premium tone for executive and partner audiences",
      "Better narrative flow between mission, portfolio, and action sections",
    ],
    responsibilities: [
      "Structure a multi-sector information architecture",
      "Define page rhythm for executive storytelling and trust-building",
      "Create reusable section patterns for portfolio-style corporate pages",
      "Support responsive readability across dense content blocks",
    ],
    process: {
      research: [
        "Mapped the business sectors and the relationships between them",
        "Identified where the holding story felt too broad or too vague",
        "Reviewed corporate group websites to benchmark executive readability",
      ],
      flows: [
        "Separated group identity from sector-specific detail",
        "Connected mission, business areas, and contact intent more clearly",
        "Reduced ambiguity around what each sector contributes",
      ],
      wireframes: [
        "Explored portfolio-style layouts that still feel corporate",
        "Tested how to introduce sectors without overwhelming the user",
        "Built section frameworks that could scale with future company pages",
      ],
      designSystem: [
        "Applied a stricter corporate rhythm for spacing and typography",
        "Created reusable cards, sector blocks, and callout patterns",
        "Balanced visual restraint with enough contrast for decision-making",
      ],
      frontend: [
        "Prepared sections to be reusable across additional corporate pages",
        "Made the long-form structure readable on mobile and tablet",
        "Preserved a calm, polished surface across breakpoint changes",
      ],
    },
    accent: "#f59e0b",
    featured: true,
  },
  {
    slug: "novomed-web",
    title: "NovoMed",
    client: "NovoMed",
    category: "Healthcare Experience",
    sector: "Medical & Wellness",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Healthcare UX · Service Discovery · Patient-facing Interface Strategy",
    year: "Live",
    summary:
      "A healthcare website that needed to balance trust, premium care perception, and practical access to doctors, treatments, locations, and booking journeys.",
    story:
      "Healthcare products carry emotional weight. Visitors need credibility, clarity, and confidence before they are ready to book or explore treatment options. The site needed to feel premium without becoming difficult to navigate.",
    contribution:
      "I focused on making the care journey feel easier to trust by clarifying services, doctor discovery, and the structure around appointments, specialties, and patient reassurance.",
    goals: [
      "Make service discovery and doctor exploration easier to scan",
      "Strengthen trust through calmer structure and clearer patient cues",
      "Connect brand prestige with practical booking-oriented UX",
    ],
    focus: [
      "Healthcare information hierarchy",
      "Doctor and specialty discovery",
      "Booking-oriented navigation",
      "Trust and reassurance surfaces",
    ],
    designStates: [
      "Doctor listing and profile states",
      "Treatment and specialty category pages",
      "Appointment / booking CTA modules",
      "Location and contact support blocks",
    ],
    stack: ["Healthcare UX", "Information Design", "Responsive UI", "Design System"],
    metrics: [
      { label: "Medical centers", value: "10+" },
      { label: "Surgeries", value: "100K+" },
      { label: "App visibility", value: "1K+ installs" },
    ],
    links: {
      live: "https://novomed.com/",
      caseStudy: "/projects/novomed-web",
    },
    challenge:
      "The interface had to carry medical credibility and a premium brand impression while still helping people move quickly through services, locations, and doctor-related decisions.",
    solution:
      "I structured the experience around clearer service entry points, more readable specialist browsing, and more supportive trust surfaces so users could navigate with less hesitation.",
    results: [
      "Improved clarity across specialties, doctors, and treatment pathways",
      "A stronger premium-care tone without hiding practical actions",
      "A more connected experience between brand, services, and booking intent",
    ],
    responsibilities: [
      "Clarify healthcare service architecture and patient-facing hierarchy",
      "Improve treatment discovery and doctor-related browsing patterns",
      "Design calmer reassurance and conversion surfaces for sensitive decisions",
      "Support consistent responsive behavior across service-rich pages",
    ],
    process: {
      research: [
        "Reviewed how care information was structured across services and specialties",
        "Identified trust moments patients need before committing to action",
        "Benchmarked premium healthcare experiences for clarity and reassurance",
      ],
      flows: [
        "Simplified the path from homepage exploration to treatment detail",
        "Strengthened how users move between services, doctors, and locations",
        "Improved the placement of CTAs within a high-trust medical context",
      ],
      wireframes: [
        "Tested different densities for service and doctor listing screens",
        "Balanced visual prestige with quick access to essential information",
        "Prepared layouts that support both browsing and action-taking behaviors",
      ],
      designSystem: [
        "Defined calmer cards, grids, and content containers for medical UX",
        "Used a more measured type and spacing system for longer reading flows",
        "Aligned section patterns for service pages, doctor blocks, and support areas",
      ],
      frontend: [
        "Supported consistent behavior across complex responsive content layouts",
        "Prepared reusable section logic suited to healthcare content scaling",
        "Protected readability and CTA clarity across smaller screens",
      ],
    },
    accent: "#38bdf8",
    featured: true,
  },
  {
    slug: "nafsi-health-web",
    title: "Nafsi Health",
    client: "Nafsi Health",
    category: "Mental Health Platform",
    sector: "Mental Health & Wellbeing",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Sensitive UX Design · Product Structure · Patient Trust Experience",
    year: "Live",
    summary:
      "A mental health platform designed around clarity, confidentiality, and a lower-friction path into therapist discovery, assessment, and care access.",
    story:
      "Mental health interfaces need a different tone. The user is often arriving with hesitation, privacy concerns, or uncertainty. The product needed to feel safe, calm, and practical without becoming overly clinical or emotionally distant.",
    contribution:
      "I treated the experience as a trust-sensitive product: simplifying therapist discovery, clarifying support options, and designing interfaces that feel stable, private, and emotionally considerate.",
    goals: [
      "Lower hesitation before assessment or booking",
      "Make therapist and service discovery easier to trust",
      "Balance mental-health sensitivity with strong product clarity",
    ],
    focus: [
      "Confidentiality-first UX",
      "Therapist discovery",
      "Assessment and booking pathways",
      "Patient reassurance",
    ],
    designStates: [
      "Therapist profile and filter states",
      "Assessment entry and progress states",
      "Booking and session support modules",
      "B2B wellbeing and program information surfaces",
    ],
    stack: ["Product UX", "Sensitive Content Design", "Responsive UI", "Design Systems"],
    metrics: [
      { label: "App visibility", value: "1K+ installs" },
      { label: "Service mode", value: "Online + In-person" },
      { label: "Care model", value: "B2C + B2B" },
    ],
    links: {
      live: "https://nafsihealth.com/",
      caseStudy: "/projects/nafsi-health-web",
    },
    challenge:
      "The main design problem was emotional: how to make the platform feel safe enough to engage with while still keeping the experience structured, clear, and conversion-ready.",
    solution:
      "I designed a calmer information system, simplified key care journeys, and emphasized trust-supporting micro-decisions across content, hierarchy, and booking-related modules.",
    results: [
      "A more reassuring tone across care entry points and therapist discovery",
      "Clearer separation between personal support and organizational wellbeing services",
      "A product surface better suited to high-sensitivity healthcare decisions",
    ],
    responsibilities: [
      "Design for emotional clarity and lower-friction support journeys",
      "Structure therapist discovery, booking, and assessment content",
      "Improve trust through calmer hierarchy and better informational pacing",
      "Support consistent behavior across bilingual and responsive contexts",
    ],
    process: {
      research: [
        "Reviewed the hesitation points users face before starting mental health support",
        "Mapped the difference between personal care flows and corporate wellbeing content",
        "Studied trust signals used by modern therapy and health-tech platforms",
      ],
      flows: [
        "Clarified therapist browsing, assessment entry, and booking intent",
        "Separated informative content from immediate support pathways",
        "Reduced ambiguity around what happens next after initial engagement",
      ],
      wireframes: [
        "Tested calmer layouts with lower perceived pressure",
        "Balanced empathy, credibility, and practical navigation",
        "Prepared sections that can scale across multiple support programs",
      ],
      designSystem: [
        "Applied softer hierarchy decisions while preserving contrast and clarity",
        "Created repeatable patterns for profiles, support cards, and progress blocks",
        "Aligned spacing and type with a more grounded wellbeing tone",
      ],
      frontend: [
        "Prepared responsive behavior for content-heavy care journeys",
        "Protected readability and pacing across smaller touch devices",
        "Supported scalable section patterns for future service growth",
      ],
    },
    accent: "#a78bfa",
    featured: true,
  },
  {
    slug: "wonder-beauties-app",
    title: "Wonder Beauties App",
    client: "Wonder Beauties",
    category: "Mobile Commerce App",
    sector: "Beauty Commerce & Consultations",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Mobile UI/UX · Commerce Flows · Design System Direction",
    year: "Published",
    summary:
      "A beauty commerce application that combines product discovery, authenticity cues, and consultation-oriented trust for a high-frequency mobile shopping experience.",
    story:
      "Beauty commerce on mobile is about more than browsing products. Users need trust, ease, and confidence in authenticity before purchase. The app had to support frequent discovery while also making consultations and product guidance feel seamless.",
    contribution:
      "I focused on the product discovery flow, commerce hierarchy, and the mobile states that turn browsing into purchase confidence, especially around trust, consultation, and repeat use.",
    goals: [
      "Improve product discovery and category navigation on mobile",
      "Support trust through authenticity, consultation, and clearer product surfaces",
      "Reduce checkout hesitation across high-frequency shopping flows",
    ],
    focus: [
      "Mobile commerce hierarchy",
      "Beauty product discovery",
      "Consultation-driven trust",
      "Checkout and repeat-order flows",
    ],
    designStates: [
      "Home and category discovery states",
      "Product detail and consultation modules",
      "Cart, checkout, and order follow-up",
      "Account, saved items, and repeat shopping states",
    ],
    stack: ["Mobile UX", "Commerce Design", "Design System", "High-frequency App Flows"],
    metrics: [
      { label: "Downloads", value: "100K+" },
      { label: "Consultations", value: "95K+" },
      { label: "Orders", value: "370K+" },
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.wonderbeauties.app",
      caseStudy: "/projects/wonder-beauties-app",
    },
    challenge:
      "The app had to support browsing-heavy behavior while still increasing confidence in authenticity, consultation, and checkout. Too much density would slow users down, but too little structure would weaken trust.",
    solution:
      "I designed a clearer mobile commerce language around category discovery, product detail hierarchy, consultation touchpoints, and smoother cart-to-checkout transitions.",
    results: [
      "A more confident browsing experience for beauty-focused shoppers",
      "Stronger alignment between consultation moments and purchase decisions",
      "A clearer mobile system for categories, product cards, and trust states",
    ],
    responsibilities: [
      "Design mobile discovery and category hierarchy for commerce",
      "Improve product detail, trust, and consultation-related interactions",
      "Support smoother cart and checkout states on smaller screens",
      "Define repeatable mobile patterns for cards, lists, and account surfaces",
    ],
    process: {
      research: [
        "Reviewed how beauty shoppers discover, compare, and validate products",
        "Identified trust gaps around authenticity, advice, and product fit",
        "Mapped the key friction points between browsing and checkout",
      ],
      flows: [
        "Simplified movement from home discovery to product detail",
        "Connected consultation touchpoints with product confidence cues",
        "Reduced cart and checkout friction for repeat mobile behavior",
      ],
      wireframes: [
        "Tested product-card density and thumb-friendly hierarchy",
        "Balanced promotional surfaces with cleaner product scanning",
        "Built mobile-first layouts that remain usable during fast browsing",
      ],
      designSystem: [
        "Created reusable mobile patterns for categories, cards, and action bars",
        "Defined states for discount cues, authenticity, and product trust",
        "Applied spacing and typography tuned for high-frequency mobile use",
      ],
      frontend: [
        "Prepared clearer design-to-development behavior for dynamic commerce states",
        "Documented mobile-specific UI logic for carts, sheets, and sticky actions",
        "Supported scalable app patterns suitable for future feature expansion",
      ],
    },
    accent: "#fb7185",
    featured: true,
  },
];

const arabicFeaturedProjects: ProjectItem[] = [
  {
    slug: "zcoderz",
    title: "ZCoderz",
    client: "ZCoderz",
    category: "موقع تقني",
    sector: "تطوير برمجيات وخدمات منتجات",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "توجيه UI/UX · هندسة معلومات · عرض Frontend",
    year: "حي",
    summary:
      "موقع تقني لشركة برمجيات تم تنظيمه ليعرض قدرات تصميم المنتجات، تكامل الـ SaaS، والتطوير المخصص بشكل أوضح وأكثر مصداقية.",
    story:
      "التحدي لم يكن فقط في تجميل الموقع، بل في تقديم شركة خدمات واسعة كجهة تفهم المنتجات بعمق لا كمزود تقني عام. التركيز كان على توضيح المعروض، رفع الثقة، وتحسين الطريق من الاكتشاف إلى التواصل.",
    contribution:
      "تعاملت مع الموقع كواجهة منتج للأعمال: ماذا يفهم الزائر أولًا، كيف تُربط الخدمات ببعضها، وكيف تدعم الواجهة الثقة والمسح السريع والتحويل.",
    goals: [
      "توضيح بنية الخدمات بين تصميم المنتجات، الـ SaaS، والتطوير البرمجي",
      "رفع الثقة عبر تراتبية أنظف وأدلة أقوى وإيقاع بصري أهدأ",
      "جعل طلب التواصل جزءًا طبيعيًا من التجربة لا عنصرًا مضافًا في النهاية",
    ],
    focus: [
      "هندسة الخدمات",
      "تراتبية التحويل",
      "أقسام الثقة والإثبات",
      "أنماط المسح على مختلف الشاشات",
    ],
    designStates: [
      "بنية صفحات الخدمات",
      "بلوكات الأعمال والإثبات",
      "أقسام الـ CTA وطلب التواصل",
      "سلوك التنقل responsive",
    ],
    stack: ["تصميم UI/UX", "UX Writing", "واجهات Responsive", "تفكير Design System"],
    metrics: [
      { label: "التاريخ المهني", value: "16+ سنة" },
      { label: "الحضور", value: "أستراليا + دبي" },
      { label: "المحاور", value: "SaaS · UX · Dev" },
    ],
    links: {
      live: "https://www.zcoderz.com/",
      caseStudy: "/projects/zcoderz",
    },
    challenge:
      "المحتوى كان غنيًا، لكن السرد التجاري احتاج بنية أقوى. كان المطلوب أن يفهم الزائر بسرعة اتساع الخبرة التقنية، ونضج الشركة في التصميم، ولماذا هي جهة موثوقة خلال أول شاشات.",
    solution:
      "أعدت صياغة الواجهة حول عناقيد خدمات أوضح، وإيقاع صفحات أقوى، وأقسام إثبات أكثر نضجًا حتى يقرأ الزائر الشركة كشريك منتجات لا كمزود تطوير فقط.",
    results: [
      "فصل أوضح بين أنواع الخدمات والقيمة التجارية لكل منها",
      "نبرة مؤسسية أهدأ مع مسارات قراءة أفضل",
      "تدفق أكثر قصدًا من فهم العرض إلى نية التواصل",
    ],
    responsibilities: [
      "توضيح هندسة المعلومات وتصنيف الخدمات",
      "تصميم أنظمة sections وتراتبية بصرية لصفحات التحويل",
      "ضبط السلوك responsive في السرد التجاري الطويل",
      "دعم بنية جاهزة للتنفيذ وقرارات polish على الواجهة",
    ],
    process: {
      research: [
        "مراجعة السرد الحالي للخدمات ومدى سرعة بنائه للثقة",
        "تحليل التداخل بين UX وSaaS integration والتطوير البرمجي",
        "مقارنة مواقع تقنية موجهة للأعمال لاكتشاف فجوات الوضوح",
      ],
      flows: [
        "تبسيط الدخول إلى الخدمات والأقسام الداعمة للإثبات",
        "ربط أجزاء الصفحة ضمن رحلة استفسار أكثر تماسكًا",
        "تقليل التنافس البصري بين النصوص التسويقية ومناطق الإجراء",
      ],
      wireframes: [
        "تجريب هياكل صفحات تفضل المسح السريع قبل التفاصيل",
        "اختبار أماكن الإثبات والتميّز والـ CTAs",
        "بناء sections قابلة لإعادة الاستخدام على مختلف الأحجام",
      ],
      designSystem: [
        "اعتماد إيقاع أهدأ للطباعة والمسافات",
        "تعريف أنماط قابلة للتكرار للبطاقات وبلوكات الإثبات والحاويات",
        "جعل الأسطح أقرب لمنطق المنتج وأبعد عن شكل البروشور التقليدي",
      ],
      frontend: [
        "تهيئة البنية لتُنفّذ كسلسلة أقسام قابلة لإعادة الاستخدام",
        "أخذ breakpoints وإيقاع السرد بعين الاعتبار على desktop وmobile",
        "الإبقاء على الواجهة جاهزة للتوسع مع نمو المحتوى",
      ],
    },
    accent: "#6ee7b7",
    featured: true,
  },
  {
    slug: "syrex-at",
    title: "Syrex AT",
    client: "Syrex AT",
    category: "موقع استشاري",
    sector: "استثمار وتأسيس أعمال",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "Product Messaging UX · تصميم واجهة ثنائية اللغة",
    year: "حي",
    summary:
      "موقع استشاري للأعمال تم تنظيمه حول ثقة المستثمر ووضوح خطوات التأسيس وخدمات الأعمال.",
    story:
      "هذا المشروع كان يحتاج أن يبدو موثوقًا من أول لحظة. التحدي لم يكن في كثافة بصرية، بل في ترجمة التعقيد الإداري والقانوني والاستثماري إلى تجربة أكثر طمأنة ووضوحًا.",
    contribution:
      "ركزت على تبسيط الرحلة من الفضول إلى الاستشارة، عبر تجربة تشرح تأسيس الأعمال بشكل أوضح وأكثر هدوءًا وثقة باللغتين العربية والإنجليزية.",
    goals: [
      "جعل رحلة الخدمة مفهومة للمستثمر الجديد",
      "تقليل الاحتكاك حول المحتوى القانوني والإداري والتشغيلي",
      "بناء واجهة ثنائية اللغة تبدو منظمة وموثوقة",
    ],
    focus: ["رحلة المستثمر", "تجربة ثنائية اللغة", "أقسام الثقة", "مسارات الاستشارة"],
    designStates: [
      "Modules شرح الخدمات",
      "بلوكات المؤسس والشركة والثقة",
      "أقسام CTA للاستشارة",
      "سلوك RTL/LTR على مختلف الشاشات",
    ],
    stack: ["تصميم UI/UX", "Bilingual Layouts", "هيكلة محتوى", "Responsive Design"],
    metrics: [
      { label: "وضع الواجهة", value: "AR / EN" },
      { label: "نطاق العرض", value: "قانوني + تأسيس" },
      { label: "المسار الأساسي", value: "اكتشف → استشر" },
    ],
    links: {
      live: "https://syrexat.com/",
      caseStudy: "/projects/syrex-at",
    },
    challenge:
      "مواقع تأسيس الأعمال كثيرًا ما تبدو كثيفة أو مكررة أو ثقيلة قانونيًا للمستخدم الجديد. المطلوب هنا كان الحفاظ على الجدية مع جعل الرحلة أسهل للفهم واتخاذ الخطوة التالية.",
    solution:
      "صممت بنية صفحات أكثر إرشادًا، مع تقسيمات أوضح للمحتوى ونبرة أهدأ ومسارات خدمات أقرب للتسلسل المنطقي، بحيث ينتقل المستخدم من التردد إلى الثقة باحتكاك أقل.",
    results: [
      "مسار استشاري أوضح لزوار المرة الأولى",
      "هيكل ثنائي اللغة أكثر تماسكًا عبر الأقسام",
      "إحساس احترافي أقوى من دون ضجيج بصري زائد",
    ],
    responsibilities: [
      "صياغة هندسة معلومات موجهة للمستثمر",
      "تصميم سلوك الواجهة ثنائية اللغة وإيقاع القراءة",
      "توضيح أقسام الخدمات والثقة ومناطق الإجراء",
      "دعم تدفق أقرب لعقلية المنتج داخل المحتوى الاستشاري",
    ],
    process: {
      research: [
        "مراجعة تعقيد المحتوى المرتبط بتأسيس الأعمال والإرشاد الاستثماري",
        "تحديد إشارات الطمأنة الناقصة في التجربة الحالية",
        "مقارنة كيف تبني العلامات الاستشارية الثقة دون إثقال المستخدم",
      ],
      flows: [
        "تحديد مسار أوضح من فهم الخدمات إلى طلب النقاش",
        "فصل المحتوى الاستراتيجي والقانوني والإجرائي إلى طبقات مفهومة",
        "تحسين الإيقاع بين الشرح ومناطق الإجراء",
      ],
      wireframes: [
        "اختبار هياكل تقلل الحمل المعرفي على المستثمر الجديد",
        "موازنة المصداقية الشخصية والخدمات والـ CTAs",
        "تحضير بلوكات ثنائية اللغة بإيقاع ومسافات أقوى",
      ],
      designSystem: [
        "بناء حاويات وأنماط أكثر ثباتًا للمحتوى المؤسسي",
        "مواءمة الطباعة والمسافات مع القراءة الطويلة باللغتين",
        "إنشاء سلوك موحد للبطاقات والعناصر البارزة وأقسام الـ CTA",
      ],
      frontend: [
        "ضمان نظافة البنية عبر العربية والإنجليزية",
        "تجهيز responsive logic للأقسام الطويلة والبطاقات المتراكبة",
        "تحسين القراءة على الموبايل من دون خسارة النبرة المؤسسية",
      ],
    },
    accent: "#93c5fd",
    featured: true,
  },
  {
    slug: "syrex-holding",
    title: "Syrex Holding",
    client: "Syrex Holding",
    category: "موقع مجموعة أعمال",
    sector: "شركة قابضة ومحفظة متعددة القطاعات",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "استراتيجية UX · بناء السرد · تصميم واجهة مؤسسية",
    year: "حي",
    summary:
      "موقع لمجموعة قابضة متعددة القطاعات صُمم ليعرض مجالات الصحة والعمل الإنساني والأعمال ضمن سرد رقمي موحّد وموثوق.",
    story:
      "التحدي كان في توحيد قطاعات متعددة تحت تجربة واحدة دون أن تضيع هوية كل قطاع. كان على الموقع أن يبدو مؤسسيًا وواضحًا وناضجًا، وفي الوقت نفسه يمنح كل مجال مساحة كافية للتعبير.",
    contribution:
      "عملت على تحويل قصة الـ holding إلى تجربة لها تحكم سردي أقوى، وفصل أوضح بين القطاعات، وإحساس مؤسسي أكثر رقيًا وثقة.",
    goals: [
      "ترجمة تعدد القطاعات إلى نظام رقمي متسق",
      "توضيح ما تقوم به المجموعة ولماذا يهم ذلك",
      "بناء نبرة جاهزة تنفيذيًا عبر الصفحات والتنقل",
    ],
    focus: ["هندسة متعددة القطاعات", "السرد المؤسسي", "إشارات الثقة", "التنقل بين العلامات"],
    designStates: [
      "Modules استعراض القطاعات",
      "بلوكات الهيكل المؤسسي والرؤية",
      "الربط بين المبادرات والجهات التابعة",
      "أسطح التواصل والشراكات المؤسسية",
    ],
    stack: ["هندسة معلومات", "Corporate UX", "Responsive UI", "تفكير Design System"],
    metrics: [
      { label: "القطاعات", value: "03" },
      { label: "السرد", value: "موحّد" },
      { label: "النبرة", value: "تنفيذية" },
    ],
    links: {
      live: "https://syrexholding.com/",
      caseStudy: "/projects/syrex-holding",
    },
    challenge:
      "هيكلية الـ holding تصنع مشكلة محتوى قبل أن تصنع مشكلة بصرية. كان المطلوب شرح المحفظة بوضوح مع الحفاظ على نبرة مؤسسية عالية ومنع الواجهة من التشتت.",
    solution:
      "نظمت التجربة حول لحظات قطاعية واضحة، وتراتبية مؤسسية أكثر انضباطًا، وروابط أقوى بين هوية المجموعة ومبادراتها المختلفة.",
    results: [
      "فصل أوضح بين القطاعات من دون فقدان ترابط المجموعة",
      "نبرة أكثر رقيًا للجمهور التنفيذي والشركاء",
      "تدفق سردي أفضل بين الرؤية والمحفظة ومناطق الإجراء",
    ],
    responsibilities: [
      "بناء هندسة معلومات متعددة القطاعات",
      "تحديد إيقاع صفحات السرد التنفيذي وبناء الثقة",
      "إنشاء أنماط sections قابلة لإعادة الاستخدام للصفحات المؤسسية",
      "تحسين قابلية القراءة responsive في المحتوى الكثيف",
    ],
    process: {
      research: [
        "تحليل القطاعات والعلاقات بينها ضمن المجموعة",
        "تحديد أين كانت القصة المؤسسية واسعة أو ضبابية أكثر من اللازم",
        "مقارنة مواقع المجموعات المؤسسية لقياس وضوح القراءة التنفيذية",
      ],
      flows: [
        "فصل هوية المجموعة عن تفاصيل كل قطاع بشكل أوضح",
        "ربط الرؤية والمجالات التجارية ونية التواصل ضمن منطق واحد",
        "تقليل الغموض حول مساهمة كل قطاع داخل السرد العام",
      ],
      wireframes: [
        "استكشاف layouts تشبه portfolio corporate من دون فقدان الجدية",
        "اختبار كيفية تقديم القطاعات دون إرهاق المستخدم",
        "بناء frameworks قابلة للتوسع مع أي صفحات تابعة مستقبلًا",
      ],
      designSystem: [
        "اعتماد إيقاع مؤسسي أدق للطباعة والمسافات",
        "إنشاء بطاقات وبلوكات قطاعات وأنماط callouts قابلة للتكرار",
        "موازنة restraint بصري مع تباين كافٍ لاتخاذ القرار",
      ],
      frontend: [
        "تهيئة sections لتكون قابلة لإعادة الاستخدام عبر صفحات إضافية",
        "جعل البنية الطويلة قابلة للقراءة على الموبايل والتابلت",
        "الحفاظ على surface هادئة ومصقولة عبر مختلف الأحجام",
      ],
    },
    accent: "#f59e0b",
    featured: true,
  },
  {
    slug: "novomed-web",
    title: "NovoMed",
    client: "NovoMed",
    category: "تجربة رعاية صحية",
    sector: "الطب والعناية الصحية",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "Healthcare UX · اكتشاف الخدمات · استراتيجية واجهة للمريض",
    year: "حي",
    summary:
      "موقع رعاية صحية احتاج إلى موازنة الثقة والانطباع premium مع سهولة الوصول إلى الأطباء والخدمات والمواقع ومسارات الحجز.",
    story:
      "منتجات الرعاية الصحية تحمل وزنًا عاطفيًا. المستخدم يحتاج إلى المصداقية والوضوح والطمأنة قبل الحجز أو استكشاف العلاج. كان على الموقع أن يبدو راقيًا من دون أن يصبح صعب التنقل.",
    contribution:
      "ركزت على جعل رحلة الرعاية أسهل للفهم والثقة، عبر توضيح الخدمات واكتشاف الأطباء وبنية المواعيد والتخصصات والرسائل المطمئنة للمريض.",
    goals: [
      "تسهيل استكشاف الخدمات والأطباء",
      "رفع الثقة عبر تراتبية أهدأ وإشارات أكثر وضوحًا للمريض",
      "ربط prestige العلامة مع UX عملي يدعم الحجز",
    ],
    focus: [
      "هندسة معلومات صحية",
      "اكتشاف الأطباء والتخصصات",
      "تنقل موجه للحجز",
      "أسطح الثقة والطمأنة",
    ],
    designStates: [
      "حالات قوائم الأطباء وملفاتهم",
      "صفحات الخدمات والتخصصات",
      "Modules الحجز والمواعيد",
      "بلوكات المواقع والدعم والتواصل",
    ],
    stack: ["Healthcare UX", "تصميم معلومات", "Responsive UI", "Design System"],
    metrics: [
      { label: "المراكز الطبية", value: "+10" },
      { label: "العمليات", value: "100K+" },
      { label: "ظهور التطبيق", value: "1K+ تثبيت" },
    ],
    links: {
      live: "https://novomed.com/",
      caseStudy: "/projects/novomed-web",
    },
    challenge:
      "كان على الواجهة أن تحمل مصداقية طبية وانطباع رعاية premium، وفي الوقت نفسه تساعد المستخدم على التنقل سريعًا بين الخدمات والمواقع والقرارات المتعلقة بالأطباء.",
    solution:
      "نظمت التجربة حول مداخل أوضح للخدمات، وبحث أكثر قابلية للقراءة عن التخصصات والأطباء، وبلوكات ثقة أدعم تجعل التنقل أقل ترددًا.",
    results: [
      "وضوح أفضل في التخصصات والأطباء ومسارات العلاج",
      "نبرة premium أقوى من دون إخفاء الإجراءات العملية",
      "تجربة أكثر اتصالًا بين العلامة والخدمات ونية الحجز",
    ],
    responsibilities: [
      "توضيح هيكلية الخدمات الصحية وتراتبية المريض",
      "تحسين أنماط استكشاف العلاج والأطباء",
      "تصميم أسطح طمأنة وتحويل ضمن سياق طبي حساس",
      "دعم سلوك responsive متسق لصفحات غنية بالمحتوى",
    ],
    process: {
      research: [
        "مراجعة طريقة تنظيم معلومات الرعاية عبر الخدمات والتخصصات",
        "تحديد لحظات الثقة التي يحتاجها المريض قبل اتخاذ القرار",
        "مقارنة تجارب صحية premium من حيث الوضوح والطمأنة",
      ],
      flows: [
        "تبسيط المسار من الصفحة الرئيسية إلى تفاصيل العلاج",
        "تقوية الربط بين الخدمات والأطباء والمواقع",
        "تحسين أماكن الـ CTAs ضمن سياق صحي عالي الثقة",
      ],
      wireframes: [
        "اختبار كثافات مختلفة لعرض الخدمات والأطباء",
        "موازنة prestige بصري مع وصول سريع للمعلومات الأساسية",
        "تحضير layouts تدعم الاستكشاف واتخاذ الإجراء معًا",
      ],
      designSystem: [
        "تعريف بطاقات grids وحاويات أهدأ لتجربة الرعاية الصحية",
        "اعتماد مقياس طباعة ومسافات أكثر ملاءمة للقراءة الطويلة",
        "مواءمة patterns خاصة بالخدمات والأطباء والدعم",
      ],
      frontend: [
        "دعم سلوك متسق للمحتوى الصحي الكثيف على مختلف الشاشات",
        "تهيئة منطق sections قابل لإعادة الاستخدام مع نمو المحتوى",
        "حماية وضوح القراءة والـ CTA على الشاشات الصغيرة",
      ],
    },
    accent: "#38bdf8",
    featured: true,
  },
  {
    slug: "nafsi-health-web",
    title: "Nafsi Health",
    client: "Nafsi Health",
    category: "منصة صحة نفسية",
    sector: "الصحة النفسية والرفاه",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "تصميم UX حساس · Product Structure · تجربة ثقة للمريض",
    year: "حي",
    summary:
      "منصة صحة نفسية صُممت حول الوضوح والسرية وتقليل الاحتكاك في الوصول إلى المعالج والتقييم والحجز.",
    story:
      "واجهات الصحة النفسية تحتاج نبرة مختلفة. المستخدم غالبًا يصل وهو متردد أو قلق أو حذر من ناحية الخصوصية. لذلك كان على المنتج أن يبدو آمنًا وهادئًا وعمليًا من دون أن يصبح باردًا أو معقدًا.",
    contribution:
      "تعاملت مع التجربة كمنتج عالي الحساسية للثقة: تبسيط اكتشاف المعالج، توضيح خيارات الدعم، وبناء واجهات تبدو مستقرة وخاصة ومراعية شعوريًا.",
    goals: [
      "تقليل التردد قبل التقييم أو الحجز",
      "جعل اكتشاف المعالج والخدمة أسهل للثقة",
      "موازنة حساسية المجال مع وضوح منتجي قوي",
    ],
    focus: [
      "UX قائم على السرية",
      "اكتشاف المعالج",
      "مسارات التقييم والحجز",
      "إشارات الطمأنة للمريض",
    ],
    designStates: [
      "حالات ملفات المعالج والفلاتر",
      "التقييمات وخطوات الدخول إليها",
      "الحجز والدعم والجلسات",
      "محتوى B2B وبرامج الرفاه المؤسسي",
    ],
    stack: ["Product UX", "تصميم محتوى حساس", "Responsive UI", "Design Systems"],
    metrics: [
      { label: "ظهور التطبيق", value: "1K+ تثبيت" },
      { label: "نمط الخدمة", value: "عن بعد + حضوري" },
      { label: "النموذج", value: "B2C + B2B" },
    ],
    links: {
      live: "https://nafsihealth.com/",
      caseStudy: "/projects/nafsi-health-web",
    },
    challenge:
      "المشكلة الأساسية هنا كانت شعورية: كيف نجعل المنصة آمنة بما يكفي للتفاعل معها، وفي الوقت ذاته نحافظ على تجربة منظمة وواضحة وجاهزة للتحويل.",
    solution:
      "صممت نظامًا معلوماتيًا أهدأ، وبسّطت الرحلات الأساسية للرعاية، وشددت على micro-decisions تبني الثقة عبر المحتوى والترتيب والحجز.",
    results: [
      "نبرة أكثر طمأنة في نقاط الدخول واكتشاف المعالج",
      "فصل أوضح بين الدعم الفردي وبرامج الرفاه للمؤسسات",
      "سطح منتج أنسب لقرارات صحية عالية الحساسية",
    ],
    responsibilities: [
      "التصميم من أجل وضوح شعوري ومسارات دعم أقل احتكاكًا",
      "هيكلة اكتشاف المعالج والحجز والتقييم",
      "تحسين الثقة عبر تراتبية أهدأ وإيقاع معلومات أفضل",
      "دعم سلوك متسق عبر العربية والإنجليزية والمختلفات responsive",
    ],
    process: {
      research: [
        "مراجعة نقاط التردد التي يمر بها المستخدم قبل بدء الدعم النفسي",
        "فصل احتياجات الدعم الفردي عن محتوى الرفاه المؤسسي",
        "مقارنة إشارات الثقة في منصات العلاج والصحة الحديثة",
      ],
      flows: [
        "توضيح اكتشاف المعالج ومسار التقييم ونية الحجز",
        "فصل المحتوى المعرفي عن مسارات الدعم الفورية",
        "تقليل الغموض حول ما يحدث بعد أول خطوة",
      ],
      wireframes: [
        "اختبار layouts أكثر هدوءًا وأقل ضغطًا على المستخدم",
        "موازنة التعاطف مع المصداقية والتنقل العملي",
        "تحضير sections قابلة للتوسع مع البرامج المستقبلية",
      ],
      designSystem: [
        "اعتماد قرارات hierarchy أنعم مع الحفاظ على التباين والوضوح",
        "إنشاء patterns قابلة للتكرار للملفات الشخصية وبطاقات الدعم وخطوات التقدم",
        "مواءمة المسافات والطباعة مع tone رفاهية أكثر ثباتًا",
      ],
      frontend: [
        "تجهيز responsive behavior لرحلات رعاية كثيفة المحتوى",
        "حماية قابلية القراءة والإيقاع على الشاشات اللمسية الصغيرة",
        "دعم patterns قابلة للتوسع مع نمو الخدمات",
      ],
    },
    accent: "#a78bfa",
    featured: true,
  },
  {
    slug: "wonder-beauties-app",
    title: "Wonder Beauties App",
    client: "Wonder Beauties",
    category: "تطبيق تجارة موبايل",
    sector: "تجارة منتجات التجميل والاستشارات",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Mobile UI/UX · Commerce Flows · توجيه Design System",
    year: "منشور",
    summary:
      "تطبيق تجارة للجمال يجمع بين اكتشاف المنتجات وبناء الثقة والاستشارات ضمن تجربة شراء عالية التكرار على الموبايل.",
    story:
      "تجارة الجمال على الموبايل ليست مجرد عرض منتجات. المستخدم يحتاج ثقة وسهولة واطمئنان إلى أصالة المنتج قبل الشراء. لذلك كان على التطبيق أن يدعم الاكتشاف السريع وفي الوقت نفسه يجعل الاستشارة والتوجيه جزءًا طبيعيًا من الرحلة.",
    contribution:
      "ركزت على تدفق اكتشاف المنتجات، وتراتبية التجارة، والحالات التي تنقل المستخدم من التصفح إلى الثقة بالشراء، خاصة حول الأصالة والاستشارة والعودة المتكررة للتطبيق.",
    goals: [
      "تحسين اكتشاف المنتجات والتنقل بين الفئات على الموبايل",
      "دعم الثقة عبر الأصالة والاستشارة وأسقف عرض منتجات أوضح",
      "تقليل التردد في checkout داخل سلوك شراء متكرر",
    ],
    focus: [
      "تراتبية تجارة موبايل",
      "اكتشاف منتجات الجمال",
      "الثقة المدعومة بالاستشارة",
      "الدفع والشراء المتكرر",
    ],
    designStates: [
      "حالات الصفحة الرئيسية والفئات",
      "صفحات المنتج والاستشارة",
      "السلة والـ checkout ومتابعة الطلب",
      "الحساب والمحفوظات وإعادة الشراء",
    ],
    stack: ["Mobile UX", "Commerce Design", "Design System", "تدفقات تطبيق عالية التكرار"],
    metrics: [
      { label: "التحميلات", value: "100K+" },
      { label: "الاستشارات", value: "95K+" },
      { label: "الطلبات", value: "370K+" },
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.wonderbeauties.app",
      caseStudy: "/projects/wonder-beauties-app",
    },
    challenge:
      "كان على التطبيق أن يدعم سلوكًا كثيفًا في التصفح، مع بناء الثقة في الأصالة والاستشارة والـ checkout. الكثافة الزائدة كانت ستبطئ المستخدم، والبساطة الزائدة كانت ستضعف الثقة.",
    solution:
      "صممت لغة تجارة موبايل أوضح حول اكتشاف الفئات، وتراتبية صفحة المنتج، ونقاط الاستشارة، وانتقال أكثر سلاسة من السلة إلى الدفع.",
    results: [
      "تجربة تصفح أكثر ثقة لمستخدمات منتجات الجمال",
      "ترابط أقوى بين لحظات الاستشارة وقرار الشراء",
      "نظام أوضح للفئات وبطاقات المنتجات وحالات الثقة على الموبايل",
    ],
    responsibilities: [
      "تصميم هيكلية الاكتشاف والتنقل للفئات على الموبايل",
      "تحسين تفاعل صفحة المنتج والثقة والاستشارة",
      "دعم حالات السلة والـ checkout على الشاشات الصغيرة",
      "تعريف أنماط مكررة للقوائم والبطاقات والأسطح الحسابية",
    ],
    process: {
      research: [
        "تحليل كيف تكتشف المتسوقات المنتجات وتقارن بينها وتبني الثقة",
        "تحديد فجوات الثقة المرتبطة بالأصالة والنصيحة وملاءمة المنتج",
        "مراجعة نقاط الاحتكاك بين التصفح والشراء",
      ],
      flows: [
        "تبسيط الانتقال من الصفحة الرئيسية إلى المنتج",
        "ربط نقاط الاستشارة مع مؤشرات الثقة في القرار الشرائي",
        "تقليل الاحتكاك في السلة والـ checkout ضمن سلوك موبايل متكرر",
      ],
      wireframes: [
        "اختبار كثافات بطاقات المنتجات وتراتبية الإبهام",
        "موازنة العروض الترويجية مع القراءة الأنظف للمنتجات",
        "بناء layouts mobile-first قابلة للاستخدام أثناء التصفح السريع",
      ],
      designSystem: [
        "إنشاء patterns مكررة للفئات والبطاقات وأشرطة الإجراءات",
        "تعريف حالات للخصومات والأصالة والثقة بالمنتج",
        "اعتماد طباعة ومسافات مناسبة لتجربة موبايل عالية التردد",
      ],
      frontend: [
        "تجهيز أوضح لسلوكيات التصميم والتنفيذ في حالات التجارة الديناميكية",
        "توثيق منطق الواجهات الخاصة بالسلة والـ sheets والأزرار اللاصقة",
        "دعم patterns قابلة للتوسع مع نمو التطبيق وميزاته",
      ],
    },
    accent: "#fb7185",
    featured: true,
  },
];

const englishProjectArchive: ProjectArchiveItem[] = [
  {
    slug: "zcoderz",
    title: "ZCoderz",
    client: "ZCoderz",
    category: "Technology Website",
    sector: "Software Development & Product Services",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "UI/UX Direction · Frontend Presentation",
    year: "Live",
    summary:
      "Corporate technology presence designed to communicate product capability, service clarity, and stronger conversion intent.",
    contribution:
      "Focused on service hierarchy, trust-building sections, and a more product-minded interface tone.",
    focus: ["Service hierarchy", "Enterprise trust", "Lead capture", "Responsive UX"],
    designStates: ["Hero and value framing", "Service modules", "Proof blocks", "CTA states"],
    accent: "#6ee7b7",
    links: {
      live: "https://www.zcoderz.com/",
      caseStudy: "/projects/zcoderz",
    },
    featured: true,
  },
  {
    slug: "syrex-at",
    title: "Syrex AT",
    client: "Syrex AT",
    category: "Advisory Website",
    sector: "Investment & Business Setup",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Bilingual UX · Consultation-led Interface",
    year: "Live",
    summary:
      "Advisory website structured around investment guidance, legal clarity, and a calmer path into consultation.",
    contribution:
      "Worked on simplifying a trust-heavy business journey across Arabic and English layouts.",
    focus: ["Investor journey", "Bilingual clarity", "Trust signals", "Consultation flow"],
    designStates: ["Service explanation", "Founder blocks", "CTA sections", "RTL/LTR layouts"],
    accent: "#93c5fd",
    links: {
      live: "https://syrexat.com/",
      caseStudy: "/projects/syrex-at",
    },
    featured: true,
  },
  {
    slug: "syrex-holding",
    title: "Syrex Holding",
    client: "Syrex Holding",
    category: "Corporate Group Website",
    sector: "Holding Company",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Narrative UX · Multi-sector Structure",
    year: "Live",
    summary:
      "A multi-sector holding website designed to present several business areas under one coherent corporate narrative.",
    contribution:
      "Focused on executive clarity, sector separation, and a more premium corporate reading experience.",
    focus: ["Portfolio structure", "Corporate rhythm", "Sector hierarchy", "Trust surfaces"],
    designStates: ["Sector cards", "Group story sections", "Cross-links", "Contact surfaces"],
    accent: "#f59e0b",
    links: {
      live: "https://syrexholding.com/",
      caseStudy: "/projects/syrex-holding",
    },
    featured: true,
  },
  {
    slug: "novomed-web",
    title: "NovoMed",
    client: "NovoMed",
    category: "Healthcare Experience",
    sector: "Medical & Wellness",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Healthcare UX · Service Discovery",
    year: "Live",
    summary:
      "Healthcare web experience balancing premium brand presence with practical access to specialties, doctors, and booking.",
    contribution:
      "Worked on trust, doctor discovery, and the path from browsing treatments to taking action.",
    focus: ["Doctor discovery", "Service hierarchy", "Trust cues", "Booking UX"],
    designStates: ["Doctor profiles", "Specialty pages", "Booking modules", "Support blocks"],
    accent: "#38bdf8",
    links: {
      live: "https://novomed.com/",
      caseStudy: "/projects/novomed-web",
    },
    featured: true,
  },
  {
    slug: "nafsi-health-web",
    title: "Nafsi Health",
    client: "Nafsi Health",
    category: "Mental Health Platform",
    sector: "Mental Health & Wellbeing",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Sensitive UX · Product Structure",
    year: "Live",
    summary:
      "Mental health platform shaped around privacy, therapist discovery, and calmer support journeys.",
    contribution:
      "Focused on reducing hesitation, building emotional trust, and clarifying care-related flows.",
    focus: ["Confidentiality", "Therapist discovery", "Assessment journey", "Booking trust"],
    designStates: ["Profile filters", "Assessment flow", "Booking states", "B2B wellbeing pages"],
    accent: "#a78bfa",
    links: {
      live: "https://nafsihealth.com/",
      caseStudy: "/projects/nafsi-health-web",
    },
    featured: true,
  },
  {
    slug: "wonder-beauties-web",
    title: "Wonder Beauties",
    client: "Wonder Beauties",
    category: "Beauty Commerce Website",
    sector: "Beauty & Original Products",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Commerce UX · Trust-led Interface",
    year: "Live",
    summary:
      "Beauty retail website built to support product discovery, authenticity cues, and stronger commerce confidence.",
    contribution:
      "Focused on category browsing, trust communication, and a more polished shopping narrative.",
    focus: ["Category discovery", "Product trust", "Commerce hierarchy", "Brand tone"],
    designStates: ["Landing promotions", "Product listing", "Product detail", "Commerce CTAs"],
    accent: "#f472b6",
    links: {
      live: "https://www.wonderbeauties.com/",
    },
  },
  {
    slug: "louis-lines",
    title: "Louis Lines",
    client: "Louis Lines",
    category: "Interior Design Website",
    sector: "Design & Build",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Editorial Web Design · Lead-generation UX",
    year: "Live",
    summary:
      "A design-and-build website positioned to communicate craftsmanship, project quality, and consultation intent.",
    contribution:
      "Focused on presenting premium spatial work with stronger visual hierarchy and clearer inquiry opportunities.",
    focus: ["Project storytelling", "Premium tone", "Portfolio sections", "Lead generation"],
    designStates: ["Project galleries", "Capability sections", "About blocks", "Inquiry modules"],
    accent: "#c084fc",
    links: {
      live: "https://louislinesco.com/ar",
    },
  },
  {
    slug: "quarizm-technologies",
    title: "Quarizm Technologies",
    client: "Quarizm Technologies",
    category: "Technology Website",
    sector: "Software & Digital Solutions",
    platformType: "web",
    platformLabel: "Web Experience",
    role: "Product-facing Web UX · Corporate Messaging",
    year: "Live",
    summary:
      "Technology company website designed to frame software capabilities, market experience, and consultation-driven trust.",
    contribution:
      "Focused on business clarity, stronger service framing, and more deliberate proof across the page system.",
    focus: ["Service clarity", "Credibility", "Case framing", "Consultation flow"],
    designStates: ["Homepage hierarchy", "Service sections", "Statistics blocks", "Contact states"],
    accent: "#60a5fa",
    links: {
      live: "https://quarizm.tech/",
    },
  },
  {
    slug: "wonder-beauties-app",
    title: "Wonder Beauties App",
    client: "Wonder Beauties",
    category: "Mobile Commerce App",
    sector: "Beauty Commerce & Consultations",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Mobile UI/UX · Commerce System",
    year: "Published",
    summary:
      "Mobile beauty commerce application combining product discovery, authenticity cues, and consultation-led trust.",
    contribution:
      "Focused on mobile shopping clarity, consultation touchpoints, and better cart-to-checkout confidence.",
    focus: ["Mobile commerce", "Beauty discovery", "Consultation trust", "Checkout UX"],
    designStates: ["Home states", "PDP states", "Cart and checkout", "Account flows"],
    accent: "#fb7185",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.wonderbeauties.app",
      caseStudy: "/projects/wonder-beauties-app",
    },
    featured: true,
  },
  {
    slug: "cari-customer",
    title: "Cari Customer App",
    client: "Cari",
    category: "Food Delivery App",
    sector: "Delivery & Ordering",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Ordering UX · Customer-facing Mobile Flows",
    year: "Published",
    summary:
      "Customer-facing food delivery application centered on restaurant discovery, offers, and order tracking.",
    contribution:
      "Focused on reducing friction across browsing, menu exploration, cart handling, and delivery follow-up.",
    focus: ["Restaurant discovery", "Offer hierarchy", "Cart handling", "Tracking states"],
    designStates: ["Home and search", "Restaurant menus", "Cart and checkout", "Order tracking"],
    accent: "#f59e0b",
    links: {
      live: "https://play.google.com/store/apps/details?id=get.cari.bestfooddelivery.app",
    },
  },
  {
    slug: "novomed-app",
    title: "NovoMed App",
    client: "NovoMed",
    category: "Healthcare App",
    sector: "Medical & Wellness",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Patient UX · Mobile Care Journeys",
    year: "Published",
    summary:
      "Healthcare mobile application designed around appointments, care access, and a more practical patient companion experience.",
    contribution:
      "Focused on appointments, care-related utility, and reducing complexity in mobile patient interactions.",
    focus: ["Appointment UX", "Care access", "Health utility", "Mobile trust"],
    designStates: ["Appointment states", "Doctor and service access", "Profile and records", "Support flows"],
    accent: "#38bdf8",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.novomed.novomed",
    },
  },
  {
    slug: "nafsi-health-app",
    title: "Nafsi Health App",
    client: "Nafsi Health",
    category: "Mental Health App",
    sector: "Mental Health & Wellbeing",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Support UX · Sensitive Mobile Journeys",
    year: "Published",
    summary:
      "Mental health mobile companion focused on therapy access, emotional clarity, and trust-sensitive interaction design.",
    contribution:
      "Focused on therapist discovery, care entry, and calmer mobile flows for support-related decisions.",
    focus: ["Therapy access", "Profile trust", "Assessment UX", "Calm interaction design"],
    designStates: ["Therapist browsing", "Assessment entry", "Session booking", "Support follow-up"],
    accent: "#8b5cf6",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.nafsi.health",
    },
  },
  {
    slug: "cari-store",
    title: "Cari Store App",
    client: "Cari",
    category: "Merchant App",
    sector: "Delivery Operations",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Merchant UX · Operational Flows",
    year: "Published",
    summary:
      "Merchant-side delivery app focused on store operations, incoming orders, and day-to-day fulfillment management.",
    contribution:
      "Worked on operational clarity, faster decision states, and the surfaces used by stores to act on live orders.",
    focus: ["Merchant operations", "Order intake", "Operational status", "Action clarity"],
    designStates: ["Incoming order states", "Store status", "Fulfillment actions", "Operational alerts"],
    accent: "#22c55e",
    links: {
      live: "https://play.google.com/store/apps/details?id=get.cari.store.app",
    },
  },
  {
    slug: "tawseela-customer",
    title: "Tawseela Customer App",
    client: "Tawseela",
    category: "Delivery App",
    sector: "Customer Ordering",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Customer UX · Ordering Flows",
    year: "Published",
    summary:
      "Customer-facing delivery product built around ordering, address selection, and a smoother follow-up experience.",
    contribution:
      "Focused on ordering clarity, customer reassurance, and mobile states that reduce friction during delivery journeys.",
    focus: ["Ordering flow", "Address and location", "Cart confidence", "Delivery follow-up"],
    designStates: ["Browse and search", "Cart states", "Checkout flow", "Tracking states"],
    accent: "#14b8a6",
    links: {
      live: "https://play.google.com/store/apps/details?id=tawseelaq8.client",
    },
  },
  {
    slug: "deliveroo",
    title: "Deliveroo",
    client: "Deliveroo",
    category: "Delivery Product Contribution",
    sector: "Food & Grocery Delivery",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "UI/UX Contribution · High-frequency Consumer Flows",
    year: "Published",
    summary:
      "Contribution work within a high-frequency delivery environment focused on customer ordering and repeat-use mobile states.",
    contribution:
      "Approached the product from a contribution angle across browsing, cart behavior, and post-order follow-up surfaces.",
    focus: ["Discovery UX", "Checkout speed", "Repeat ordering", "Tracking clarity"],
    designStates: ["Discovery states", "Menu and cart", "Checkout", "Live order follow-up"],
    accent: "#06c167",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.deliveroo.orderapp",
    },
  },
  {
    slug: "chefaa",
    title: "Chefaa",
    client: "Chefaa",
    category: "Pharmacy Delivery App",
    sector: "Health Commerce",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Commerce UX · Health-sensitive Flows",
    year: "Published",
    summary:
      "Health commerce application where ordering, medicine discovery, and prescription-related trust require especially careful UX handling.",
    contribution:
      "Focused on making medicine-related ordering and support flows feel clearer, calmer, and easier to act on.",
    focus: ["Health commerce", "Prescription trust", "Category clarity", "Checkout reassurance"],
    designStates: ["Category and search", "Prescription-related entry", "Cart and checkout", "Follow-up states"],
    accent: "#ef4444",
    links: {
      live: "https://play.google.com/store/apps/details?id=app.com.chefaa",
    },
  },
  {
    slug: "taskprove",
    title: "TaskProve",
    client: "TaskProve",
    category: "Workflow App",
    sector: "Task & Proof Operations",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Operational UX · Workflow States",
    year: "Published",
    summary:
      "Operational mobile product centered on tasks, activity progress, and proof-oriented workflow handling.",
    contribution:
      "Focused on action clarity, progress visibility, and making workflow states easier to understand on mobile.",
    focus: ["Task visibility", "Operational progress", "Evidence workflow", "Status clarity"],
    designStates: ["Task lists", "Status states", "Progress handling", "Proof / completion surfaces"],
    accent: "#818cf8",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.zcoderz.taskprove_app",
    },
  },
  {
    slug: "sama-dropshipping",
    title: "Sama Dropshipping",
    client: "Sama Dropshipping",
    category: "Commerce Operations App",
    sector: "Dropshipping",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Commerce UX · Seller-side Product Flows",
    year: "Published",
    summary:
      "Dropshipping mobile application focused on product sourcing, margin visibility, and seller-side operational clarity.",
    contribution:
      "Worked on mobile structures that support catalog navigation, order-related understanding, and better business usability.",
    focus: ["Catalog access", "Seller clarity", "Margin awareness", "Operational flow"],
    designStates: ["Product catalog", "Order handling", "Business actions", "Support states"],
    accent: "#f97316",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.samadropshipping.app",
    },
  },
  {
    slug: "toters",
    title: "Toters",
    client: "Toters",
    category: "Delivery Product Contribution",
    sector: "Food & Lifestyle Delivery",
    platformType: "mobile",
    platformLabel: "Mobile App",
    role: "Consumer UX Contribution · Delivery Experience",
    year: "Published",
    summary:
      "Contribution work in a large-scale delivery experience focused on fast ordering, repeat behavior, and customer convenience.",
    contribution:
      "Approached the product through high-traffic mobile states where speed, clarity, and confidence matter most.",
    focus: ["Fast ordering", "Promotions and discovery", "Repeat use", "Tracking experience"],
    designStates: ["Home and offers", "Menu browsing", "Checkout", "Tracking and reorder"],
    accent: "#f43f5e",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.toters.customer",
    },
  },
];

const arabicProjectArchive: ProjectArchiveItem[] = [
  {
    slug: "zcoderz",
    title: "ZCoderz",
    client: "ZCoderz",
    category: "موقع تقني",
    sector: "تطوير برمجيات وخدمات منتجات",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "توجيه UI/UX · عرض Frontend",
    year: "حي",
    summary:
      "حضور رقمي تقني صُمم لعرض القدرة على بناء المنتجات والخدمات البرمجية ونية التحويل بشكل أوضح.",
    contribution:
      "ركزت على تراتبية الخدمات وأقسام الثقة ونبرة واجهة أقرب لعقلية المنتج.",
    focus: ["تراتبية الخدمات", "الثقة المؤسسية", "التواصل التجاري", "تجربة Responsive"],
    designStates: ["البداية والقيمة", "Modules الخدمات", "أقسام الإثبات", "حالات CTA"],
    accent: "#6ee7b7",
    links: {
      live: "https://www.zcoderz.com/",
      caseStudy: "/projects/zcoderz",
    },
    featured: true,
  },
  {
    slug: "syrex-at",
    title: "Syrex AT",
    client: "Syrex AT",
    category: "موقع استشاري",
    sector: "استثمار وتأسيس أعمال",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "UX ثنائي اللغة · واجهة تقود إلى الاستشارة",
    year: "حي",
    summary:
      "موقع استشاري منظم حول الإرشاد الاستثماري ووضوح التأسيس ومسار أكثر هدوءًا نحو الاستشارة.",
    contribution:
      "عملت على تبسيط رحلة عالية الحساسية للثقة عبر واجهات عربية وإنجليزية أكثر تنظيمًا.",
    focus: ["رحلة المستثمر", "وضوح ثنائي اللغة", "إشارات الثقة", "تدفق الاستشارة"],
    designStates: ["شرح الخدمات", "بلوكات المؤسس", "أقسام CTA", "سلوك RTL/LTR"],
    accent: "#93c5fd",
    links: {
      live: "https://syrexat.com/",
      caseStudy: "/projects/syrex-at",
    },
    featured: true,
  },
  {
    slug: "syrex-holding",
    title: "Syrex Holding",
    client: "Syrex Holding",
    category: "موقع مجموعة أعمال",
    sector: "شركة قابضة",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "Narrative UX · هيكلية متعددة القطاعات",
    year: "حي",
    summary:
      "موقع لمجموعة قابضة متعددة القطاعات صُمم لتقديم أكثر من مجال أعمال ضمن سرد مؤسسي متماسك.",
    contribution:
      "ركزت على الوضوح التنفيذي وفصل القطاعات وبناء قراءة مؤسسية أكثر رقيًا.",
    focus: ["هيكلية المحفظة", "إيقاع مؤسسي", "تراتبية القطاعات", "أسطح الثقة"],
    designStates: ["بطاقات القطاعات", "سرد المجموعة", "الربط بين الأقسام", "أسطح التواصل"],
    accent: "#f59e0b",
    links: {
      live: "https://syrexholding.com/",
      caseStudy: "/projects/syrex-holding",
    },
    featured: true,
  },
  {
    slug: "novomed-web",
    title: "NovoMed",
    client: "NovoMed",
    category: "تجربة رعاية صحية",
    sector: "الطب والعناية الصحية",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "Healthcare UX · اكتشاف الخدمات",
    year: "حي",
    summary:
      "تجربة ويب للرعاية الصحية توازن بين حضور العلامة premium والوصول العملي إلى التخصصات والأطباء والحجز.",
    contribution:
      "عملت على الثقة واكتشاف الطبيب والمسار من استعراض العلاج إلى اتخاذ الإجراء.",
    focus: ["اكتشاف الأطباء", "تراتبية الخدمات", "إشارات الثقة", "UX الحجز"],
    designStates: ["ملفات الأطباء", "صفحات التخصصات", "Modules الحجز", "بلوكات الدعم"],
    accent: "#38bdf8",
    links: {
      live: "https://novomed.com/",
      caseStudy: "/projects/novomed-web",
    },
    featured: true,
  },
  {
    slug: "nafsi-health-web",
    title: "Nafsi Health",
    client: "Nafsi Health",
    category: "منصة صحة نفسية",
    sector: "الصحة النفسية والرفاه",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "UX حساس · هيكلة منتج",
    year: "حي",
    summary:
      "منصة صحة نفسية صيغت حول الخصوصية واكتشاف المعالج ومسارات دعم أكثر هدوءًا.",
    contribution:
      "ركزت على تقليل التردد وبناء الثقة العاطفية وتوضيح مسارات الرعاية.",
    focus: ["السرية", "اكتشاف المعالج", "رحلة التقييم", "ثقة الحجز"],
    designStates: ["فلاتر الملفات", "التقييم", "الحجز", "صفحات B2B"],
    accent: "#a78bfa",
    links: {
      live: "https://nafsihealth.com/",
      caseStudy: "/projects/nafsi-health-web",
    },
    featured: true,
  },
  {
    slug: "wonder-beauties-web",
    title: "Wonder Beauties",
    client: "Wonder Beauties",
    category: "موقع تجارة جمال",
    sector: "منتجات تجميل أصلية",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "Commerce UX · واجهة مبنية على الثقة",
    year: "حي",
    summary:
      "موقع تجارة تجميل صُمم لدعم اكتشاف المنتجات وبناء الثقة وتحسين حضور العلامة التجارية.",
    contribution:
      "ركزت على استعراض الفئات والرسائل الداعمة للثقة وسرد شراء أكثر أناقة.",
    focus: ["اكتشاف الفئات", "ثقة المنتج", "تراتبية التجارة", "نبرة العلامة"],
    designStates: ["العروض الرئيسية", "قوائم المنتجات", "صفحة المنتج", "حالات CTA"],
    accent: "#f472b6",
    links: {
      live: "https://www.wonderbeauties.com/",
    },
  },
  {
    slug: "louis-lines",
    title: "Louis Lines",
    client: "Louis Lines",
    category: "موقع تصميم داخلي",
    sector: "Design & Build",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "تصميم ويب تحريري · UX يجذب العملاء",
    year: "حي",
    summary:
      "موقع لشركة تصميم وتنفيذ داخلي يركّز على الحرفة وجودة المشاريع وتحويل الزيارة إلى استفسار جاد.",
    contribution:
      "عملت على تقديم الأعمال المكانية بنبرة premium وتراتبية أوضح وفرص تواصل أكثر ذكاءً.",
    focus: ["سرد المشاريع", "نبرة راقية", "أقسام portfolio", "توليد العملاء"],
    designStates: ["معارض المشاريع", "أقسام القدرات", "بلوكات التعريف", "الاستفسار"],
    accent: "#c084fc",
    links: {
      live: "https://louislinesco.com/ar",
    },
  },
  {
    slug: "quarizm-technologies",
    title: "Quarizm Technologies",
    client: "Quarizm Technologies",
    category: "موقع تقني",
    sector: "حلول برمجية ورقمية",
    platformType: "web",
    platformLabel: "تجربة ويب",
    role: "Product-facing Web UX · رسائل مؤسسية",
    year: "حي",
    summary:
      "موقع شركة تقنية صيغ لعرض قدراتها البرمجية وخبرتها السوقية ومسار أكثر وضوحًا نحو التواصل.",
    contribution:
      "ركزت على الوضوح التجاري وتأطير الخدمات وأقسام الإثبات عبر نظام صفحات أكثر قصدًا.",
    focus: ["وضوح الخدمات", "المصداقية", "تأطير الأعمال", "تدفق الاستشارة"],
    designStates: ["Hierarchy الرئيسية", "أقسام الخدمات", "إحصاءات", "حالات التواصل"],
    accent: "#60a5fa",
    links: {
      live: "https://quarizm.tech/",
    },
  },
  {
    slug: "wonder-beauties-app",
    title: "Wonder Beauties App",
    client: "Wonder Beauties",
    category: "تطبيق تجارة موبايل",
    sector: "منتجات تجميل واستشارات",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Mobile UI/UX · نظام تجارة",
    year: "منشور",
    summary:
      "تطبيق تجارة تجميل على الموبايل يجمع بين الاكتشاف والثقة والاستشارة ضمن تجربة شراء متكررة.",
    contribution:
      "ركزت على وضوح التسوق من الهاتف ونقاط الاستشارة والثقة الأفضل من السلة إلى الدفع.",
    focus: ["تجارة موبايل", "اكتشاف الجمال", "الثقة عبر الاستشارة", "UX الدفع"],
    designStates: ["الرئيسية", "صفحة المنتج", "السلة والدفع", "الحساب"],
    accent: "#fb7185",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.wonderbeauties.app",
      caseStudy: "/projects/wonder-beauties-app",
    },
    featured: true,
  },
  {
    slug: "cari-customer",
    title: "Cari Customer App",
    client: "Cari",
    category: "تطبيق توصيل طعام",
    sector: "الطلب والتوصيل",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Ordering UX · تدفقات عميل",
    year: "منشور",
    summary:
      "تطبيق توصيل موجّه للعميل يركز على اكتشاف المطاعم والعروض ومتابعة الطلب.",
    contribution:
      "عملت على تقليل الاحتكاك بين التصفح والقائمة والسلة ومتابعة التوصيل.",
    focus: ["اكتشاف المطاعم", "العروض", "السلة", "التتبع"],
    designStates: ["الرئيسية والبحث", "القوائم", "السلة والدفع", "التتبع"],
    accent: "#f59e0b",
    links: {
      live: "https://play.google.com/store/apps/details?id=get.cari.bestfooddelivery.app",
    },
  },
  {
    slug: "novomed-app",
    title: "NovoMed App",
    client: "NovoMed",
    category: "تطبيق رعاية صحية",
    sector: "الطب والعناية الصحية",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Patient UX · رحلات رعاية موبايل",
    year: "منشور",
    summary:
      "تطبيق رعاية صحية للموبايل صُمم حول المواعيد والوصول للرعاية وتجربة مرافق عملي للمريض.",
    contribution:
      "ركزت على المواعيد والوظائف العملية للرعاية وتقليل التعقيد في تفاعل المريض من الهاتف.",
    focus: ["المواعيد", "الوصول للرعاية", "الخدمات الصحية", "الثقة على الموبايل"],
    designStates: ["حالات المواعيد", "الوصول للخدمات", "الملف والسجلات", "الدعم"],
    accent: "#38bdf8",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.novomed.novomed",
    },
  },
  {
    slug: "nafsi-health-app",
    title: "Nafsi Health App",
    client: "Nafsi Health",
    category: "تطبيق صحة نفسية",
    sector: "الصحة النفسية والرفاه",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Support UX · رحلات موبايل حساسة",
    year: "منشور",
    summary:
      "تطبيق للصحة النفسية يركّز على الوصول للعلاج والوضوح العاطفي وتفاعلات مبنية على الثقة.",
    contribution:
      "ركزت على اكتشاف المعالج والدخول للرعاية وبناء تدفقات أكثر هدوءًا للدعم.",
    focus: ["الوصول للعلاج", "الثقة بالملف", "UX التقييم", "تفاعل هادئ"],
    designStates: ["اكتشاف المعالج", "التقييم", "حجز الجلسة", "المتابعة"],
    accent: "#8b5cf6",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.nafsi.health",
    },
  },
  {
    slug: "cari-store",
    title: "Cari Store App",
    client: "Cari",
    category: "تطبيق التاجر",
    sector: "عمليات التوصيل",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Merchant UX · تدفقات تشغيلية",
    year: "منشور",
    summary:
      "تطبيق خاص بالتاجر يركز على الطلبات الواردة وإدارة الحالة والتنفيذ اليومي.",
    contribution:
      "عملت على الوضوح التشغيلي وتسريع اتخاذ القرار في الواجهات التي يستخدمها المتجر مع الطلبات الحية.",
    focus: ["تشغيل التاجر", "استقبال الطلبات", "حالة المتجر", "وضوح الإجراء"],
    designStates: ["الطلبات الواردة", "حالة المتجر", "إجراءات التنفيذ", "تنبيهات"],
    accent: "#22c55e",
    links: {
      live: "https://play.google.com/store/apps/details?id=get.cari.store.app",
    },
  },
  {
    slug: "tawseela-customer",
    title: "Tawseela Customer App",
    client: "Tawseela",
    category: "تطبيق توصيل",
    sector: "طلب العملاء",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Customer UX · تدفقات الطلب",
    year: "منشور",
    summary:
      "منتج توصيل موجه للعميل مبني حول الطلب واختيار الموقع ومتابعة أكثر سلاسة.",
    contribution:
      "ركزت على وضوح الطلب وطمأنة العميل وحالات الموبايل التي تقلل الاحتكاك أثناء رحلة التوصيل.",
    focus: ["تدفق الطلب", "العنوان والموقع", "الثقة في السلة", "متابعة التوصيل"],
    designStates: ["التصفح والبحث", "السلة", "الدفع", "التتبع"],
    accent: "#14b8a6",
    links: {
      live: "https://play.google.com/store/apps/details?id=tawseelaq8.client",
    },
  },
  {
    slug: "deliveroo",
    title: "Deliveroo",
    client: "Deliveroo",
    category: "مساهمة في منتج توصيل",
    sector: "توصيل الطعام والبقالة",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "UI/UX Contribution · تدفقات استهلاكية عالية التكرار",
    year: "منشور",
    summary:
      "مساهمة داخل بيئة توصيل عالية التكرار تركز على الطلب وسلوك العودة وحالات ما بعد الشراء.",
    contribution:
      "تعاملت مع المنتج من زاوية المساهمة في التصفح والسلة ومتابعة الطلب ضمن واجهات كثيفة الاستخدام.",
    focus: ["الاكتشاف", "سرعة الدفع", "إعادة الطلب", "وضوح التتبع"],
    designStates: ["الاكتشاف", "القائمة والسلة", "الدفع", "المتابعة الحية"],
    accent: "#06c167",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.deliveroo.orderapp",
    },
  },
  {
    slug: "chefaa",
    title: "Chefaa",
    client: "Chefaa",
    category: "تطبيق توصيل صيدلية",
    sector: "تجارة صحية",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Commerce UX · تدفقات صحية حساسة",
    year: "منشور",
    summary:
      "تطبيق تجارة صحية يحتاج UX حذرًا في طلب الدواء واكتشافه وبناء الثقة في الوصفة والمتابعة.",
    contribution:
      "ركزت على جعل طلب الدواء والدعم المرتبط به أكثر وضوحًا وهدوءًا وأسهل في التنفيذ.",
    focus: ["تجارة صحية", "الثقة بالوصفة", "وضوح الفئات", "طمأنة الدفع"],
    designStates: ["الفئات والبحث", "الدخول للوصفة", "السلة والدفع", "المتابعة"],
    accent: "#ef4444",
    links: {
      live: "https://play.google.com/store/apps/details?id=app.com.chefaa",
    },
  },
  {
    slug: "taskprove",
    title: "TaskProve",
    client: "TaskProve",
    category: "تطبيق Workflow",
    sector: "عمليات المهام والإثبات",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Operational UX · حالات سير العمل",
    year: "منشور",
    summary:
      "منتج تشغيلي للموبايل يتمحور حول المهام وتقدم النشاط والتعامل مع حالات الإثبات والإنجاز.",
    contribution:
      "ركزت على وضوح الإجراء وإظهار التقدم وجعل حالات سير العمل أسهل للفهم من الهاتف.",
    focus: ["وضوح المهام", "تقدم العمليات", "إثبات التنفيذ", "وضوح الحالة"],
    designStates: ["قوائم المهام", "الحالات", "التقدم", "أسطح الإثبات"],
    accent: "#818cf8",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.zcoderz.taskprove_app",
    },
  },
  {
    slug: "sama-dropshipping",
    title: "Sama Dropshipping",
    client: "Sama Dropshipping",
    category: "تطبيق تجارة تشغيلية",
    sector: "Dropshipping",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Commerce UX · تدفقات البائع",
    year: "منشور",
    summary:
      "تطبيق dropshipping للموبايل يركّز على الوصول للمنتجات وفهم الهوامش ووضوح التشغيل للبائع.",
    contribution:
      "عملت على هياكل موبايل تدعم استعراض الكتالوج وفهم الطلبات وتحسين قابلية استخدام المنتج للأعمال.",
    focus: ["الوصول للكتالوج", "وضوح البائع", "الهوامش", "التدفق التشغيلي"],
    designStates: ["الكتالوج", "الطلبات", "إجراءات العمل", "الدعم"],
    accent: "#f97316",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.samadropshipping.app",
    },
  },
  {
    slug: "toters",
    title: "Toters",
    client: "Toters",
    category: "مساهمة في منتج توصيل",
    sector: "توصيل الطعام ونمط الحياة",
    platformType: "mobile",
    platformLabel: "تطبيق موبايل",
    role: "Consumer UX Contribution · تجربة التوصيل",
    year: "منشور",
    summary:
      "مساهمة داخل تجربة توصيل واسعة النطاق تركز على سرعة الطلب وسلوك العودة وراحة العميل.",
    contribution:
      "تعاملت مع حالات موبايل عالية المرور حيث تكون السرعة والوضوح والثقة عوامل حاسمة.",
    focus: ["الطلب السريع", "العروض والاكتشاف", "الاستخدام المتكرر", "التتبع"],
    designStates: ["الرئيسية والعروض", "القوائم", "الدفع", "التتبع وإعادة الطلب"],
    accent: "#f43f5e",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.toters.customer",
    },
  },
];

export const projectSlugs = englishFeaturedProjects.map((project) => project.slug);

export function getProjects(locale: Locale) {
  return locale === "ar" ? arabicFeaturedProjects : englishFeaturedProjects;
}

export function getProjectArchive(locale: Locale) {
  return locale === "ar" ? arabicProjectArchive : englishProjectArchive;
}

export function getProjectBySlug(slug: string, locale: Locale) {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function isFeaturedProject(slug: string) {
  return featuredCaseStudySlugs.includes(slug as (typeof featuredCaseStudySlugs)[number]);
}
