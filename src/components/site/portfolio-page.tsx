"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Code2,
  Copy,
  FolderGit2,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Palette,
  PenTool,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { getExperience } from "@content/experience";
import { getProfile } from "@content/profile";
import { getProjectArchive, getProjects } from "@content/projects";
import { getTestimonials } from "@content/testimonials";
import { AnnouncementLayer } from "@/components/site/announcement-layer";
import { Magnetic } from "@/components/site/magnetic";
import { useLocale } from "@/components/site/locale-provider";
import { ProjectVisual } from "@/components/site/project-visual";
import { Reveal } from "@/components/site/reveal";
import { SiteNavbar } from "@/components/site/site-navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProjectArchiveItem, ProjectItem, SocialLink } from "@/types/site";

const socialIcons = {
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
  telegram: Send,
  linkedin: Network,
  behance: Palette,
  dribbble: PenTool,
  github: FolderGit2,
  instagram: PenTool,
  x: Network,
} as const;

export function PortfolioPage() {
  const { locale, direction } = useLocale();
  const profile = useMemo(() => getProfile(locale), [locale]);
  const experience = useMemo(() => getExperience(locale), [locale]);
  const projects = useMemo(() => getProjects(locale), [locale]);
  const projectArchive = useMemo(() => getProjectArchive(locale), [locale]);
  const testimonials = useMemo(() => getTestimonials(locale), [locale]);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copy = useMemo(
    () =>
      locale === "ar"
        ? {
            heroEyebrow: "Senior UI/UX Designer + Next.js Frontend Engineer",
            heroTitle: "أصمم أنظمة منتجات رقمية واضحة للمستخدم، وواقعية في التنفيذ.",
            heroDescription:
              "أعمل من صياغة الفكرة وبناء التجربة إلى تنفيذ واجهات Next.js قابلة للنمو. هذا الموقع يقدّم كيف أفكر كمصمم منتجات، وكيف أبني كمطور واجهات أمامية.",
            heroStatus: "متاح للتعاون على المنتجات وواجهات الويب",
            heroPrimary: "استكشف المشاريع",
            heroSecondary: "تواصل معي",
            heroPillars: [
              "تفكير منتجي يربط UX بالنتيجة التجارية",
              "أنظمة واجهات دقيقة وقابلة للتوسع",
              "تنفيذ Frontend يراعي الأداء والوصول",
            ],
            workbenchTitle: "لوحة عمل حقيقية",
            workbenchSubtitle: "تصميم + نظام + تنفيذ",
            storyEyebrow: "من الفكرة إلى الواقع",
            storyTitle: "تصميم المنتجات من الفكرة إلى الواقع",
            storyDescription:
              "أنا لست مصمم شاشات فقط. أُستدعى عندما يحتاج الفريق إلى شخص يفهم المنتج، ينظّم التجربة، ويستطيع ترجمة القرارات إلى واجهات قابلة للبناء.",
            storyParagraphs: [
              "خبرتي تتقاطع بين تصميم UI/UX، تصميم المنتجات الرقمية، والعمل المباشر مع فرق التطوير. لذلك أتعامل مع كل شاشة كجزء من نظام له منطق وتجربة وسلوك واضح.",
              "الشركات تستفيد من هذا التقاطع لأن القرارات لا تبقى تجميلية فقط. يتم التفكير في التراتب البصري، حالات الواجهة، الوصول، والقيود الهندسية من البداية بدل أن تظهر كمشاكل متأخرة.",
            ],
            whyHireTitle: "لماذا يتم توظيفي",
            whyHire: [
              "لأنني أربط بين وضوح المنتج وجودة الواجهة والواقعية التقنية.",
              "لأنني أبني Design Systems قابلة للتسليم لا مجرد ملفات عرض.",
              "لأنني أعمل بلغة المنتج والفريق، لا بلغة التصميم وحدها.",
            ],
            metricsTitle: "مؤشرات مهنية",
            selectedExperience: "خبرات مختارة",
            experienceNote:
              "المسار المهني يجمع بين أدوار تصميم، قيادة، وتنفيذ ضمن أسواق متنوعة.",
            expertiseEyebrow: "الخبرة الجوهرية",
            expertiseTitle: "أربعة محاور توضّح كيف أفكر في المنتج، التجربة، الواجهة، والتنفيذ.",
            expertiseDescription:
              "بدل سرد مهارات عامة، هذا القسم يوضّح المنهج الذي أعتمده في كل طبقة من طبقات العمل.",
            processEyebrow: "منهجية العمل",
            processTitle: "عملية عمل واضحة تشبه workflow فريق منتج أكثر من كونها خطوات تصميم معزولة.",
            processDescription:
              "أفضّل عملية هادئة ومقصودة، بحيث يكون لكل مرحلة مخرجات مفهومة للفريق كله.",
            projectsEyebrow: "مشاريع مميزة",
            projectsTitle: "هذه المشاريع تُعرض كقصص منتج حقيقية توضّح كيف أفكر، ماذا نظّمت، وأين كان أثر التصميم والتنفيذ.",
            projectsDescription:
              "اخترت هنا المشاريع التي تعبّر عن نوع العمل الذي أقدمه فعليًا: هيكلة أوضح، حالات أكثر نضجًا، وتجربة يمكن ترجمتها بوعي إلى Frontend أو Mobile product.",
            challenge: "التحدي",
            goals: "الأهداف",
            outcome: "النتيجة",
            role: "الدور",
            contribution: "المساهمة",
            responsibilities: "ما تولّيته",
            designStates: "حالات التصميم",
            focusAreas: "محاور التركيز",
            results: "النتائج",
            livePreview: "معاينة مباشرة",
            caseStudy: "تفاصيل المشروع",
            projectDirectoryEyebrow: "المكتبة الكاملة",
            projectDirectoryTitle: "كل المشاريع موزّعة هنا بين web وmobile بشكل يوضح نوع المنتج، مساهمتي، والحالات التي ركزت عليها.",
            projectDirectoryDescription:
              "بدل رصّ الروابط فقط، هذا القسم ينظّم الأعمال بطريقة أقرب لدفتر مشاريع حقيقي يشرح أين كان تركيز الـ UX وما الحالات التي احتاجت عناية خاصة.",
            webPlatforms: "منصات وتجارب ويب",
            mobileApplications: "تطبيقات الموبايل",
            featuredTag: "دراسة حالة مميزة",
            systemsEyebrow: "خبرة الأنظمة",
            systemsTitle: "الـ Design System بالنسبة لي ليس مكتبة مكونات فقط، بل لغة تشغيل كاملة للمنتج.",
            systemsDescription:
              "أبني الأنظمة لتقليل التناقض، تسريع اتخاذ القرار، وجعل التسليم بين التصميم والهندسة أكثر اتساقًا.",
            engineeringEyebrow: "الهندسة الأمامية",
            engineeringTitle: "أتعامل مع الواجهة الأمامية كطبقة جودة، لا كمرحلة تنفيذ لاحقة.",
            engineeringDescription:
              "هذا يشمل هيكلة Next.js، مكونات typed، responsive logic، الحركة الهادفة، والوصول والأداء.",
            testimonialsEyebrow: "شهادات مهنية",
            testimonialsTitle: "انطباعات تصف أسلوب العمل من منظور من عملوا معي فعلًا.",
            testimonialsDescription:
              "بطاقات هادئة ومباشرة تركز على الثقة، الحرفة، والقدرة على تحويل المتطلبات إلى منتج واضح.",
            contactEyebrow: "التعاون",
            contactTitle: "لنبنِ شيئًا ذا معنى",
            contactDescription:
              "إذا كنت تحتاج مصمم منتجات يفهم Frontend، أو مطور واجهات يفكر بعقلية UX، يمكننا بدء نقاش عملي وواضح من هنا.",
            contactNotesTitle: "كيف أفضل أن نبدأ",
            contactNotes: [
              "نبذة عن المنتج أو الفكرة الحالية",
              "ما الذي يحتاج إلى تحسين أو بناء من الصفر",
              "المرحلة الحالية للفريق أو الشركة",
              "الإطار الزمني أو الأولوية الأقرب",
            ],
            contactChannelsTitle: "قنوات التواصل",
            contactAvailability: "الرد غالبًا خلال 24 ساعة",
            contactTimezone: "أعمل بتوقيت GMT+3",
            contactContext: "عرض السياق",
            open: "فتح",
            copied: "تم النسخ",
            downloadCv: "تحميل السيرة الذاتية",
            backToTop: "العودة للأعلى",
            footerStatement:
              "تصميم منتجات رقمية وتنفيذ واجهات حديثة بعقلية نظام، لا بعقلية قالب.",
            builtWith: "Next.js · TypeScript · TailwindCSS · Framer Motion",
            designSystemPanels: {
              type: "مقياس الطباعة",
              tokens: "نظام الـ tokens",
              spacing: "إيقاع المسافات",
              components: "مكوّنات المنتج",
              accessibility: "الوصول والاتساق",
            },
            engineeringPanels: {
              code: "معمارية التنفيذ",
              architecture: "هيكلة React / Next.js",
              performance: "الأداء",
              accessibility: "الوصول",
              motion: "الحركة",
            },
          }
        : {
            heroEyebrow: "Senior UI/UX Designer + Next.js Frontend Engineer",
            heroTitle: "I design product systems that are clear to use and solid to build.",
            heroDescription:
              "My work moves from product framing and experience design to scalable Next.js implementation. This website is intentionally built to show both sides of that craft.",
            heroStatus: "Available for product design and frontend collaboration",
            heroPrimary: "Explore projects",
            heroSecondary: "Get in touch",
            heroPillars: [
              "Product thinking tied to business and user outcomes",
              "Interface systems built for consistency and scale",
              "Frontend delivery with performance and accessibility in mind",
            ],
            workbenchTitle: "Working surface",
            workbenchSubtitle: "Design + system + implementation",
            storyEyebrow: "From idea to reality",
            storyTitle: "Designing Products From Idea To Reality",
            storyDescription:
              "I’m not hired to decorate screens. Teams bring me in when they need someone who can clarify the product, shape the experience, and translate decisions into interfaces that can actually be built.",
            storyParagraphs: [
              "My background spans UI/UX design, digital product thinking, and hands-on frontend collaboration. That changes how I approach every screen: as part of a system with logic, states, and product consequences.",
              "The value for companies is simple. Decisions stop being purely visual. Hierarchy, accessibility, interaction states, and technical feasibility are considered early instead of becoming expensive corrections later.",
            ],
            whyHireTitle: "Why teams hire me",
            whyHire: [
              "Because I connect product clarity, interface quality, and engineering realism.",
              "Because I build design systems that teams can actually ship from.",
              "Because I can communicate in product, design, and frontend language without losing precision.",
            ],
            metricsTitle: "Professional snapshot",
            selectedExperience: "Selected experience",
            experienceNote:
              "The career path blends product design, leadership, and execution across different markets.",
            expertiseEyebrow: "Core expertise",
            expertiseTitle: "Four areas that explain how I think about product, experience, interfaces, and implementation.",
            expertiseDescription:
              "Instead of listing generic skills, this section shows the working methodology behind the outcomes.",
            processEyebrow: "Workflow",
            processTitle: "A product-minded process that keeps design, decisions, and delivery aligned.",
            processDescription:
              "I prefer a calm and structured workflow where every phase produces something useful for the wider team.",
            projectsEyebrow: "Featured work",
            projectsTitle:
              "These projects are presented as real product stories that show how I structure, simplify, and ship digital experiences.",
            projectsDescription:
              "I selected the work that best reflects the way I think in practice: clearer systems, stronger interface states, and design decisions that stay grounded in delivery.",
            challenge: "Challenge",
            goals: "Goals",
            outcome: "Outcome",
            role: "Role",
            contribution: "Contribution",
            responsibilities: "What I owned",
            designStates: "Design states",
            focusAreas: "Focus areas",
            results: "Results",
            livePreview: "Live preview",
            caseStudy: "Project details",
            projectDirectoryEyebrow: "Full portfolio directory",
            projectDirectoryTitle:
              "The full project library is organized here across web and mobile with clearer context, contribution notes, and the key states I worked through.",
            projectDirectoryDescription:
              "Instead of dropping raw links, this section turns the portfolio into a structured project ledger that shows the product type, my role, and the UX states that mattered.",
            webPlatforms: "Web platforms",
            mobileApplications: "Mobile applications",
            featuredTag: "Featured case story",
            systemsEyebrow: "System thinking",
            systemsTitle:
              "For me, a design system is not just a component library. It is the operating language of the product.",
            systemsDescription:
              "I build systems to reduce inconsistency, speed up product decisions, and make the handoff between design and engineering more dependable.",
            engineeringEyebrow: "Frontend engineering",
            engineeringTitle: "I treat frontend as a quality layer, not a final implementation step.",
            engineeringDescription:
              "That includes Next.js structure, typed components, responsive behavior, purposeful motion, and attention to performance and accessibility.",
            testimonialsEyebrow: "Professional testimonials",
            testimonialsTitle: "Words that describe the working experience from the people behind the product.",
            testimonialsDescription:
              "Calm, editorial cards focused on trust, craft, and the ability to turn requirements into a coherent product experience.",
            contactEyebrow: "Collaboration",
            contactTitle: "Let’s Build Something Meaningful",
            contactDescription:
              "If you need a product designer who understands frontend, or a frontend engineer who thinks with UX discipline, this is the right place to start the conversation.",
            contactNotesTitle: "What helps me respond well",
            contactNotes: [
              "A short overview of the product or current idea",
              "What needs to be improved or built from scratch",
              "The current team or company stage",
              "The nearest timeline or priority",
            ],
            contactChannelsTitle: "Contact channels",
            contactAvailability: "Usually replies within 24 hours",
            contactTimezone: "Working in GMT+3",
            contactContext: "View context",
            open: "Open",
            copied: "Copied",
            downloadCv: "Download CV",
            backToTop: "Back to top",
            footerStatement:
              "Product design and modern frontend delivery approached with systems thinking, not template thinking.",
            builtWith: "Next.js · TypeScript · TailwindCSS · Framer Motion",
            designSystemPanels: {
              type: "Typography scale",
              tokens: "Token system",
              spacing: "Spacing rhythm",
              components: "Product components",
              accessibility: "Accessibility & consistency",
            },
            engineeringPanels: {
              code: "Implementation architecture",
              architecture: "React / Next.js structure",
              performance: "Performance",
              accessibility: "Accessibility",
              motion: "Motion",
            },
          },
    [locale],
  );

  const metrics = useMemo(
    () =>
      locale === "ar"
        ? [
            {
              value: profile.yearsOfExperience,
              label: "سنوات خبرة عملية",
              note: "خبرة تجمع بين التصميم، الأنظمة، والتنفيذ.",
            },
            {
              value: `${experience.length}+`,
              label: "أدوار موثقة",
              note: "مسار مهني واضح عبر شركات وفرق مختلفة.",
            },
            {
              value: "04",
              label: "أسواق عمل",
              note: "خبرات عبر سوريا والإمارات والعراق وأستراليا والكويت.",
            },
            {
              value: "02",
              label: "مساران متكاملان",
              note: "تصميم منتجات + Frontend Engineering.",
            },
          ]
        : [
            {
              value: profile.yearsOfExperience,
              label: "Years of experience",
              note: "Across product design, systems, and execution.",
            },
            {
              value: `${experience.length}+`,
              label: "Documented roles",
              note: "A clear path across companies, teams, and product environments.",
            },
            {
              value: "04",
              label: "Markets worked in",
              note: "Experience across Syria, UAE, Iraq, Australia, and Kuwait.",
            },
            {
              value: "02",
              label: "Integrated disciplines",
              note: "Product design + frontend engineering.",
            },
          ],
    [experience.length, locale, profile.yearsOfExperience],
  );

  const expertiseAreas = useMemo(
    () =>
      locale === "ar"
        ? [
            {
              icon: LayoutDashboard,
              title: "Product Thinking",
              description:
                "أبدأ بتحديد ما الذي يجب أن يتحسن في المنتج فعلًا: القرار، السلوك، أو النتيجة. هذا يمنع أن يصبح التصميم مجرد إخراج بصري جيد لمشكلة غير واضحة.",
              methodology: ["Problem framing", "Outcome mapping", "Decision hierarchy"],
              evidence: "السياق > القيد > التأثير المتوقع",
            },
            {
              icon: Sparkles,
              title: "User Experience",
              description:
                "أتعامل مع التجربة كسلسلة قرارات يشعر بها المستخدم من أول لحظة. التركيز هنا على الوضوح، تقليل الاحتكاك، وبناء مسارات مفهومة وقابلة للتعلم.",
              methodology: ["Flows & states", "Usability logic", "Accessibility awareness"],
              evidence: "مسارات أوضح، حالات أدق، ثقة أعلى",
            },
            {
              icon: Palette,
              title: "Interface Design",
              description:
                "الواجهة بالنسبة لي هي نظام إيقاع، تباين، Typography، ومكوّنات متسقة. الهدف ليس أن تبدو جميلة فقط، بل أن تكون مقروءة، ناضجة، وسهلة التوسع.",
              methodology: ["Visual hierarchy", "Type & spacing", "Component language"],
              evidence: "مقياس طباعة واضح + مسافات منضبطة + states محسوبة",
            },
            {
              icon: Code2,
              title: "Frontend Engineering",
              description:
                "خبرتي في Next.js وTypeScript تجعل قراراتي التصميمية أقرب للواقع. أفكر في البنية، reuse، الأداء، والاستجابة منذ بداية العمل، لا بعد اكتمال التصميم.",
              methodology: ["Typed components", "Responsive architecture", "Performance discipline"],
              evidence: "تصميم يمكن شحنه بدون فقدان الجودة",
            },
          ]
        : [
            {
              icon: LayoutDashboard,
              title: "Product Thinking",
              description:
                "I start by clarifying what the product actually needs to improve: a decision, a behavior, or an outcome. That keeps design from becoming polished output for an unclear problem.",
              methodology: ["Problem framing", "Outcome mapping", "Decision hierarchy"],
              evidence: "Context > constraint > expected impact",
            },
            {
              icon: Sparkles,
              title: "User Experience",
              description:
                "I treat experience as a chain of decisions users feel from the first interaction. The focus is clarity, reduced friction, and journeys that are easy to learn and trust.",
              methodology: ["Flows & states", "Usability logic", "Accessibility awareness"],
              evidence: "Clearer paths, sharper states, higher trust",
            },
            {
              icon: Palette,
              title: "Interface Design",
              description:
                "For me, interface design is a system of rhythm, contrast, typography, and reusable components. The aim is not just beauty, but maturity, readability, and scale.",
              methodology: ["Visual hierarchy", "Type & spacing", "Component language"],
              evidence: "Clear type scale + disciplined spacing + deliberate states",
            },
            {
              icon: Code2,
              title: "Frontend Engineering",
              description:
                "My Next.js and TypeScript background makes design decisions more grounded. I think about structure, reuse, performance, and responsiveness from the start, not after the screens are done.",
              methodology: ["Typed components", "Responsive architecture", "Performance discipline"],
              evidence: "Design work that can be shipped without losing quality",
            },
          ],
    [locale],
  );

  const processSteps = useMemo(
    () =>
      locale === "ar"
        ? [
            ["01", "Discover", "فهم المنتج، أصحاب المصلحة، والهدف الذي يجب أن يحرّكه التصميم."],
            ["02", "Research", "جمع الإشارات التي تشرح السلوك الحالي ونقاط الاحتكاك الفعلية."],
            ["03", "Strategy", "ترتيب الأولويات وتحديد ما الذي يجب أن يتغير أولًا ولماذا."],
            ["04", "Design", "بناء هيكلية التجربة والواجهة وفق تسلسل بصري ومنطقي واضح."],
            ["05", "Prototype", "اختبار التدفق، الحالات، والحركة قبل الانتقال للتسليم الكامل."],
            ["06", "Build", "تجهيز التفاصيل التي تجعل التنفيذ متسقًا وقابلًا للتوسع."],
            ["07", "Optimize", "مراجعة الأثر، صقل الحالات، وتحسين ما يظهر بعد الاستخدام الحقيقي."],
          ]
        : [
            ["01", "Discover", "Understand the product, the stakeholders, and the outcome design needs to move."],
            ["02", "Research", "Collect the signals that explain current behavior and real friction."],
            ["03", "Strategy", "Set priorities and decide what needs to change first, and why."],
            ["04", "Design", "Build the structure of the experience and interface with clear hierarchy."],
            ["05", "Prototype", "Test flows, states, and motion before full delivery."],
            ["06", "Build", "Prepare the detail that makes implementation consistent and scalable."],
            ["07", "Optimize", "Review impact, refine states, and improve what appears in real use."],
          ],
    [locale],
  );

  const systemNotes = useMemo(
    () =>
      locale === "ar"
        ? [
            "المكونات مرتبطة بقواعد واضحة وليست مجرد variations مرئية.",
            "المسافات والطباعة والحالات مبنية كـ tokens يمكن توثيقها وتسليمها.",
            "التركيز على contrast، focus states، واتساق السلوك عبر المنتج.",
          ]
        : [
            "Components are tied to clear rules, not just visual variations.",
            "Spacing, type, and states are treated as tokens that can be documented and shipped.",
            "The system accounts for contrast, focus states, and behavioral consistency across the product.",
          ],
    [locale],
  );

  const engineeringNotes = useMemo(
    () =>
      locale === "ar"
        ? [
            {
              title: "هيكلة React / Next.js",
              body: "أفضّل الواجهات المقسمة إلى primitives، sections، ومكوّنات قابلة لإعادة الاستخدام بدل الصفحات المتضخمة.",
            },
            {
              title: "الأداء",
              body: "الحركة، الصور، والـ layout يتم التعامل معها ضمن حدود أداء واضحة حتى لا يتحول polish إلى تكلفة.",
            },
            {
              title: "الوصول",
              body: "الحالات، التباين، التنقل بالكيبورد، والبنية الدلالية ليست تحسينات ثانوية بل جزء من الجودة الأساسية.",
            },
            {
              title: "الحركة",
              body: "أستخدم الحركة لتوجيه الانتباه وتوضيح العلاقة بين العناصر، لا كعرض منفصل عن التجربة.",
            },
          ]
        : [
            {
              title: "React / Next.js structure",
              body: "I prefer interfaces built from primitives, sections, and reusable components rather than oversized one-off pages.",
            },
            {
              title: "Performance",
              body: "Motion, imagery, and layout are handled with clear performance boundaries so polish does not become cost.",
            },
            {
              title: "Accessibility",
              body: "States, contrast, keyboard navigation, and semantic structure are part of the quality baseline, not optional improvements.",
            },
            {
              title: "Motion",
              body: "I use motion to clarify relationships and guide attention, not to compete with the content itself.",
            },
          ],
    [locale],
  );

  const collaborationChannels = useMemo(
    () =>
      profile.socialLinks.filter((item) =>
        ["email", "whatsapp", "linkedin", "telegram", "github", "behance"].includes(
          item.platform,
        ),
      ),
    [profile.socialLinks],
  );

  const webProjects = useMemo(
    () => projectArchive.filter((item) => item.platformType === "web"),
    [projectArchive],
  );

  const mobileProjects = useMemo(
    () => projectArchive.filter((item) => item.platformType === "mobile"),
    [projectArchive],
  );

  const copyText = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedItem(label);
      window.setTimeout(() => setCopiedItem(null), 1800);
    } catch {
      setCopiedItem(null);
    }
  };

  return (
    <div className="relative overflow-x-clip bg-[#0b0d10] text-white" dir={direction}>
      <div className="pointer-events-none fixed inset-0 z-0 noise-mask opacity-30" />
      <AnnouncementLayer />
      <SiteNavbar />

      <main className="relative z-10">
        <section className="px-4 pb-16 pt-24 sm:pb-20 md:px-8 md:pt-32" id="home">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10">
            <Reveal className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-5">
                <Badge className="border-[#96cbb5]/25 bg-[#96cbb5]/8 text-[#dcebe4]">
                  {copy.heroEyebrow}
                </Badge>
                <h1 className="max-w-3xl text-[2.85rem] font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-5xl md:text-7xl">
                  {copy.heroTitle}
                </h1>
                <p className="max-w-2xl text-[0.97rem] leading-7 text-white/62 sm:text-base sm:leading-8 md:text-lg">
                  {copy.heroDescription}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 text-sm text-white/58">
                <Badge>{copy.heroStatus}</Badge>
                <Badge>{profile.location}</Badge>
                <Badge>{profile.responseTime}</Badge>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Magnetic>
                  <Button asChild className="w-full sm:w-auto" size="lg">
                    <a href="#projects">
                      {copy.heroPrimary}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </Magnetic>
                <Button asChild className="w-full sm:w-auto" size="lg" variant="secondary">
                  <a href="#contact">{copy.heroSecondary}</a>
                </Button>
              </div>

              <div className="grid gap-3">
                {copy.heroPillars.map((item) => (
                  <div
                    className="flex items-start gap-3 rounded-[1.2rem] border border-white/8 bg-white/[0.02] px-4 py-3.5 text-sm leading-7 text-white/62"
                    key={item}
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#96cbb5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <HeroWorkbench locale={locale} title={copy.workbenchTitle} subtitle={copy.workbenchSubtitle} />
            </Reveal>
          </div>
        </section>

        <section className="section-shell border-t border-white/8" id="story">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={copy.storyEyebrow}
              title={copy.storyTitle}
              description={copy.storyDescription}
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <Card className="overflow-hidden p-0">
                  <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
                    <div className="relative min-h-[18rem] border-b border-white/8 sm:min-h-[22rem] lg:min-h-[24rem] lg:border-b-0 lg:border-r">
                      <Image
                        alt={profile.name}
                        className="h-full w-full object-cover object-[center_18%]"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        src="/ismaeel-profile.jpeg"
                      />
                    </div>

                    <div className="space-y-5 p-5 sm:p-6 md:space-y-6 md:p-8">
                      {copy.storyParagraphs.map((paragraph) => (
                        <p className="text-base leading-8 text-white/64" key={paragraph}>
                          {paragraph}
                        </p>
                      ))}

                      <div className="rounded-[1.5rem] border border-white/8 bg-[#0d1014] p-4 sm:p-5">
                        <p className="text-sm font-semibold text-white">{copy.whyHireTitle}</p>
                        <div className="mt-4 grid gap-3">
                          {copy.whyHire.map((item) => (
                            <div className="flex items-start gap-3 text-sm leading-7 text-white/60" key={item}>
                              <Check className="mt-1 h-4 w-4 text-[#96cbb5]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>

              <div className="grid gap-6">
                <Reveal delay={0.04}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {metrics.map((metric) => (
                      <Card className="p-5" key={metric.label}>
                        <p className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">{metric.value}</p>
                        <p className="mt-3 text-sm font-semibold text-white">{metric.label}</p>
                        <p className="mt-2 text-sm leading-7 text-white/55">{metric.note}</p>
                      </Card>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <Card className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">{copy.selectedExperience}</p>
                        <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">
                          {copy.experienceNote}
                        </p>
                      </div>
                      <Badge>{copy.metricsTitle}</Badge>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {experience.slice(0, 4).map((item) => (
                        <div
                          className="grid gap-3 rounded-[1.3rem] border border-white/8 bg-[#0d1014] px-4 py-4 md:grid-cols-[1fr_auto]"
                          key={`${item.company}-${item.period}`}
                        >
                          <div>
                            <p className="font-semibold text-white">{item.role}</p>
                            <p className="mt-1 text-sm text-white/56">
                              {item.company} · {item.location}
                            </p>
                          </div>
                          <div className="text-sm text-white/46">{item.period}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-white/8" id="expertise">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={copy.expertiseEyebrow}
              title={copy.expertiseTitle}
              description={copy.expertiseDescription}
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {expertiseAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <Reveal delay={index * 0.04} key={area.title}>
                    <Card className="h-full p-5 sm:p-6 md:p-7">
                      <div className="grid gap-6 lg:grid-cols-[0.64fr_0.36fr]">
                        <div>
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-[#0d1014]">
                              <Icon className="h-5 w-5 text-[#96cbb5]" />
                            </div>
                            <h3 className="text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
                              {area.title}
                            </h3>
                          </div>
                          <p className="mt-5 text-sm leading-8 text-white/62">{area.description}</p>
                        </div>

                        <div className="rounded-[1.5rem] border border-white/8 bg-[#0d1014] p-5">
                          <p className="text-xs tracking-[0.18em] text-white/38">Method</p>
                          <div className="mt-4 grid gap-2">
                            {area.methodology.map((item) => (
                              <div
                                className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-white/64"
                                key={item}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                          <p className="mt-5 text-sm leading-7 text-white/50">{area.evidence}</p>
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-white/8" id="process">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro
                eyebrow={copy.processEyebrow}
                title={copy.processTitle}
                description={copy.processDescription}
                compact
              />
            </Reveal>

            <div className="space-y-6">
              {processSteps.map(([step, title, body], index) => (
                <Reveal delay={index * 0.03} key={step}>
                  <div className="grid gap-3 border-t border-white/8 pt-5 sm:gap-4 sm:pt-6 md:grid-cols-[5.5rem_1fr]">
                    <div className="text-sm font-semibold tracking-[0.18em] text-[#96cbb5]">
                      {step}
                    </div>
                    <div className="grid gap-3 rounded-[1.4rem] border border-white/8 bg-[#111318] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">{title}</h3>
                        <span className="h-2.5 w-2.5 rounded-full bg-[#96cbb5]" />
                      </div>
                      <p className="max-w-2xl text-sm leading-8 text-white/60">{body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-white/8" id="projects">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={copy.projectsEyebrow}
              title={copy.projectsTitle}
              description={copy.projectsDescription}
            />

            <div className="mt-14 space-y-16">
              {projects.map((project, index) => (
                <ProjectNarrative
                  challengeLabel={copy.challenge}
                  caseStudyLabel={copy.caseStudy}
                  contributionLabel={copy.contribution}
                  designStatesLabel={copy.designStates}
                  goalsLabel={copy.goals}
                  index={index}
                  key={project.slug}
                  liveLabel={copy.livePreview}
                  outcomeLabel={copy.outcome}
                  project={project}
                  responsibilitiesLabel={copy.responsibilities}
                  resultsLabel={copy.results}
                  roleLabel={copy.role}
                />
              ))}
            </div>

            <div className="mt-20 border-t border-white/8 pt-14">
              <SectionIntro
                eyebrow={copy.projectDirectoryEyebrow}
                title={copy.projectDirectoryTitle}
                description={copy.projectDirectoryDescription}
              />

              <div className="mt-12 space-y-12">
                <ProjectDirectoryGroup
                  caseStudyLabel={copy.caseStudy}
                  contributionLabel={copy.contribution}
                  designStatesLabel={copy.designStates}
                  featuredTag={copy.featuredTag}
                  focusLabel={copy.focusAreas}
                  items={webProjects}
                  liveLabel={copy.livePreview}
                  title={copy.webPlatforms}
                />
                <ProjectDirectoryGroup
                  caseStudyLabel={copy.caseStudy}
                  contributionLabel={copy.contribution}
                  designStatesLabel={copy.designStates}
                  featuredTag={copy.featuredTag}
                  focusLabel={copy.focusAreas}
                  items={mobileProjects}
                  liveLabel={copy.livePreview}
                  title={copy.mobileApplications}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-white/8" id="systems">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={copy.systemsEyebrow}
              title={copy.systemsTitle}
              description={copy.systemsDescription}
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
              <Reveal>
                <Card className="h-full p-5 sm:p-6 md:p-7">
                  <p className="text-sm leading-8 text-white/62">
                    {locale === "ar"
                      ? "أتعامل مع الـ Design System كأداة تشغيل للفريق كله: تسريع القرار، تقليل التكرار، وتحسين الثقة بين التصميم والهندسة. لذلك أركز على اللغة المشتركة قبل الشكل النهائي."
                      : "I approach the design system as an operating tool for the whole team: faster decisions, less repetition, and more trust between design and engineering. That means shared language before polished output."}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {systemNotes.map((item) => (
                      <div
                        className="rounded-[1.25rem] border border-white/8 bg-[#0d1014] px-4 py-4 text-sm leading-7 text-white/60"
                        key={item}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={0.06}>
                <Card className="overflow-hidden p-5 sm:p-6 md:p-7">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/8 bg-[#0d1014] p-5">
                      <p className="text-xs tracking-[0.18em] text-white/38">{copy.designSystemPanels.type}</p>
                      <div className="mt-5 space-y-3">
                        {[
                          ["Display", locale === "ar" ? "56 / 1.0" : "56 / 1.0"],
                          ["Heading", locale === "ar" ? "32 / 1.15" : "32 / 1.15"],
                          ["Body", locale === "ar" ? "18 / 1.75" : "18 / 1.75"],
                          ["Caption", locale === "ar" ? "13 / 1.5" : "13 / 1.5"],
                        ].map(([label, value]) => (
                          <div className="flex items-end justify-between border-b border-white/6 pb-2" key={label}>
                            <span className="text-white">{label}</span>
                            <span className="text-sm text-white/42">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/8 bg-[#0d1014] p-5">
                      <p className="text-xs tracking-[0.18em] text-white/38">{copy.designSystemPanels.tokens}</p>
                      <div className="mt-5 grid gap-3">
                        {[
                          ["surface/01", "#111318"],
                          ["surface/02", "#15181d"],
                          ["text/strong", "#f3f4f6"],
                          ["accent/subtle", "#96cbb5"],
                        ].map(([token, value]) => (
                          <div className="flex items-center justify-between" key={token}>
                            <span className="text-sm text-white/62">{token}</span>
                            <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-white/42">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/8 bg-[#0d1014] p-5">
                      <p className="text-xs tracking-[0.18em] text-white/38">{copy.designSystemPanels.spacing}</p>
                      <div className="mt-6 grid grid-cols-3 items-end gap-3 sm:grid-cols-6">
                        {[4, 8, 12, 16, 24, 32].map((value) => (
                          <div className="flex flex-col items-center gap-3" key={value}>
                            <div
                              className="w-full rounded-xl bg-[#96cbb5]/20"
                              style={{ height: `${Math.max(value, 10)}px` }}
                            />
                            <span className="text-xs text-white/42">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/8 bg-[#0d1014] p-5">
                      <p className="text-xs tracking-[0.18em] text-white/38">{copy.designSystemPanels.components}</p>
                      <div className="mt-5 space-y-3">
                        <div className="flex flex-wrap gap-3">
                          <Button size="sm">Primary</Button>
                          <Button size="sm" variant="secondary">
                            Secondary
                          </Button>
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-[#111318] px-4 py-3 text-sm text-white/56">
                          {locale === "ar" ? "حالة الإدخال - جاهزة للكتابة" : "Input state - ready for entry"}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Default</Badge>
                          <Badge>{locale === "ar" ? "نشط" : "Active"}</Badge>
                          <Badge>{locale === "ar" ? "تحذير" : "Warning"}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.4rem] border border-white/8 bg-[#0d1014] p-5">
                    <p className="text-xs tracking-[0.18em] text-white/38">
                      {copy.designSystemPanels.accessibility}
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                      {[
                        locale === "ar" ? "Contrast ratios واضحة" : "Clear contrast ratios",
                        locale === "ar" ? "Focus states مرئية" : "Visible focus states",
                        locale === "ar" ? "سلوك متسق للحالات" : "Consistent state behavior",
                      ].map((item) => (
                        <div
                          className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/60"
                          key={item}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-white/8" id="engineering">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={copy.engineeringEyebrow}
              title={copy.engineeringTitle}
              description={copy.engineeringDescription}
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <Card className="overflow-hidden p-0">
                  <div className="border-b border-white/8 px-6 py-4 md:px-7">
                    <p className="text-xs tracking-[0.18em] text-white/38">{copy.engineeringPanels.code}</p>
                  </div>
                  <div className="grid gap-4 p-5 sm:p-6 md:p-7">
                    <div className="rounded-[1.4rem] border border-white/8 bg-[#0d1014] p-4 text-sm leading-7 text-white/62 md:hidden">
                      {locale === "ar"
                        ? "هيكلة الواجهة عندي تبدأ من sections واضحة، مكونات قابلة لإعادة الاستخدام، ومنطق responsive لا يُضاف كتصحيح متأخر."
                        : "My frontend structure starts with clear sections, reusable components, and responsive logic that is planned early rather than patched later."}
                    </div>
                    <pre className="hidden overflow-x-auto rounded-[1.4rem] border border-white/8 bg-[#0d1014] p-5 text-sm leading-7 text-white/70 md:block">
{`type SectionProps = {
  title: string;
  id: string;
  children: React.ReactNode;
};

export function ProductSection({
  title,
  id,
  children,
}: SectionProps) {
  return (
    <section id={id} className="border-t border-white/8 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr]">
        <header>{title}</header>
        <div>{children}</div>
      </div>
    </section>
  );
}`}
                    </pre>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {["Next.js", "TypeScript", "Responsive systems"].map((item) => (
                        <div
                          className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/64"
                          key={item}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>

              <div className="grid gap-4">
                {engineeringNotes.map((item, index) => (
                  <Reveal delay={index * 0.04} key={item.title}>
                    <Card className="p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-[#0d1014]">
                          <Code2 className="h-5 w-5 text-[#96cbb5]" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/60">{item.body}</p>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-white/8" id="testimonials">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow={copy.testimonialsEyebrow}
              title={copy.testimonialsTitle}
              description={copy.testimonialsDescription}
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              {testimonials.map((item, index) => (
                <Reveal
                  className={cn(index === 0 ? "lg:row-span-2" : "")}
                  delay={index * 0.05}
                  key={`${item.name}-${item.company}`}
                >
                  <Card className="h-full p-5 sm:p-6 md:p-7">
                    <p className="text-3xl font-black leading-[0.9] text-[#96cbb5]">“</p>
                    <p className="mt-4 text-base leading-8 text-white/68 md:text-lg">{item.quote}</p>
                    <div className="mt-8 border-t border-white/8 pt-4">
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="mt-1 text-sm text-white/46">
                        {item.role} · {item.company}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell border-t border-white/8 pb-24" id="contact">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <Reveal>
                <div className="space-y-6">
                  <SectionIntro
                    eyebrow={copy.contactEyebrow}
                    title={copy.contactTitle}
                    description={copy.contactDescription}
                    compact
                  />

                  <Card className="p-5 sm:p-6">
                    <p className="text-sm font-semibold text-white">{copy.contactNotesTitle}</p>
                    <div className="mt-4 grid gap-3">
                      {copy.contactNotes.map((item) => (
                        <div className="flex items-start gap-3 text-sm leading-7 text-white/60" key={item}>
                          <Check className="mt-1 h-4 w-4 text-[#96cbb5]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button asChild className="w-full sm:w-auto" size="lg">
                      <a href={profile.downloadCvHref} rel="noreferrer" target="_blank">
                        {copy.downloadCv}
                      </a>
                    </Button>
                    <Button asChild className="w-full sm:w-auto" size="lg" variant="secondary">
                      <a href={profile.socialLinks.find((item) => item.platform === "email")?.href ?? "#contact"}>
                        {copy.heroSecondary}
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-5">
                <Reveal delay={0.04}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {collaborationChannels.map((item) => (
                      <ContactCard
                        contactContextLabel={copy.contactContext}
                        copiedItem={copiedItem}
                        copiedLabel={copy.copied}
                        item={item}
                        key={item.platform}
                        onCopy={copyText}
                        openLabel={copy.open}
                      />
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <Card className="p-5 sm:p-6">
                    <p className="text-sm font-semibold text-white">{copy.contactChannelsTitle}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                      <QuickFact icon={Clock3} label={copy.contactAvailability} />
                      <QuickFact icon={MapPin} label={`${profile.location}`} />
                      <QuickFact icon={CalendarDays} label={copy.contactTimezone} />
                    </div>
                  </Card>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 px-4 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-black text-white">{profile.shortName}</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/46">{copy.footerStatement}</p>
            <p className="mt-3 text-xs tracking-[0.18em] text-white/32">{copy.builtWith}</p>
          </div>

          <button
            className="inline-flex items-center gap-2 text-sm text-white/52 transition hover:text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
          >
            {copy.backToTop}
            <ArrowRight className={cn("h-4 w-4", locale === "ar" ? "rotate-[-90deg]" : "rotate-[-90deg]")} />
          </button>
        </div>
      </footer>
    </div>
  );
}

function HeroWorkbench({
  locale,
  title,
  subtitle,
}: {
  locale: "ar" | "en";
  title: string;
  subtitle: string;
}) {
  const decisionLog =
    locale === "ar"
      ? [
          ["الهدف", "تقليل الاحتكاك مع الحفاظ على الوضوح"],
          ["التركيز", "التراتبية، الحالات، وسلوك المكونات"],
          ["التسليم", "تصميم يمكن تحويله مباشرة إلى نظام frontend"],
        ]
      : [
          ["Goal", "Reduce friction without losing clarity"],
          ["Focus", "Hierarchy, states, and component behavior"],
          ["Delivery", "Design that can move directly into a frontend system"],
        ];

  const tokenItems =
    locale === "ar"
      ? ["Token layers", "State patterns", "Accessibility", "Responsive logic"]
      : ["Token layers", "State patterns", "Accessibility", "Responsive logic"];

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-white/8 px-4 py-4 sm:px-5 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="mt-1 text-sm text-white/46">{subtitle}</p>
          </div>
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#96cbb5]" />
          </div>
        </div>
      </div>

      <div className="grid gap-3 p-3 sm:gap-4 sm:p-5 md:p-6 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="space-y-3 sm:space-y-4">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#0d1014]">
            <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 text-xs text-white/42">
              <span>{locale === "ar" ? "مراجعة واجهة المنتج" : "Product interface review"}</span>
              <span>{locale === "ar" ? "مصدر بصري" : "Visual source"}</span>
            </div>
            <Image
              alt="Product preview"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
              height={900}
              priority
              src="/projects/aurora-finance.svg"
              width={1440}
            />
          </div>

          <div className="rounded-[1.5rem] border border-white/8 bg-[#0d1014] p-4 md:hidden">
            <p className="text-xs tracking-[0.18em] text-white/38">
              {locale === "ar" ? "ملخص التنفيذ" : "Execution summary"}
            </p>
            <div className="mt-4 grid gap-3">
              {decisionLog.slice(0, 2).map(([label, value]) => (
                <div className="border-b border-white/6 pb-3 last:border-b-0 last:pb-0" key={label}>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-1 text-sm leading-7 text-white/56">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tokenItems.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[1.5rem] border border-white/8 bg-[#0d1014] p-5">
              <p className="text-xs tracking-[0.18em] text-white/38">
                {locale === "ar" ? "سجل القرار" : "Decision log"}
              </p>
              <div className="mt-4 grid gap-3">
                {decisionLog.map(([label, value]) => (
                  <div className="border-b border-white/6 pb-3 last:border-b-0 last:pb-0" key={label}>
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="mt-1 text-sm leading-7 text-white/56">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/8 bg-[#0d1014] p-5">
              <p className="text-xs tracking-[0.18em] text-white/38">
                {locale === "ar" ? "طبقة التنفيذ" : "Implementation layer"}
              </p>
              <pre className="mt-4 overflow-x-auto text-sm leading-7 text-white/68">
{`const tokens = {
  space: [4, 8, 12, 16, 24, 32],
  radius: { card: 28, button: 18 },
  states: ["default", "hover", "focus", "disabled"],
};`}
              </pre>
            </div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="rounded-[1.5rem] border border-white/8 bg-[#0d1014] p-4 sm:p-5">
            <p className="text-xs tracking-[0.18em] text-white/38">
              {locale === "ar" ? "مراجعة النظام" : "System review"}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tokenItems.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            <div className="mt-5 grid gap-3">
              {[
                locale === "ar" ? "المكوّن يبدأ من الحاجة لا من الشكل." : "Components start from product need, not decoration.",
                locale === "ar" ? "الحالات موثقة قبل التسليم." : "States are defined before handoff.",
                locale === "ar" ? "التصميم يُراجع بعين التنفيذ." : "Design is reviewed with implementation in mind.",
              ].map((item) => (
                <div
                  className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/60"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#0d1014] sm:block">
            <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 text-xs text-white/42">
              <span>{locale === "ar" ? "عرض موبايل" : "Mobile surface"}</span>
              <span>{locale === "ar" ? "Product preview" : "Product preview"}</span>
            </div>
            <Image
              alt="Mobile work preview"
              className="aspect-[16/11] w-full object-cover"
              height={900}
              src="/projects/souk-mobile.svg"
              width={1440}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <Reveal>
      <p className="text-sm tracking-[0.18em] text-[#96cbb5]">{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 max-w-4xl font-black tracking-[-0.05em] text-white",
          compact
            ? "text-[2rem] leading-[1.04] sm:text-4xl md:text-5xl"
            : "text-[2.15rem] leading-[1.02] sm:text-4xl md:text-6xl",
        )}
      >
        {title}
      </h2>
      <p className="mt-5 max-w-3xl text-base leading-8 text-white/58 md:text-lg">
        {description}
      </p>
    </Reveal>
  );
}

function ProjectNarrative({
  project,
  index,
  roleLabel,
  challengeLabel,
  goalsLabel,
  outcomeLabel,
  resultsLabel,
  liveLabel,
  caseStudyLabel,
  contributionLabel,
  designStatesLabel,
  responsibilitiesLabel,
}: {
  project: ProjectItem;
  index: number;
  roleLabel: string;
  challengeLabel: string;
  goalsLabel: string;
  outcomeLabel: string;
  resultsLabel: string;
  liveLabel: string;
  caseStudyLabel: string;
  contributionLabel: string;
  designStatesLabel: string;
  responsibilitiesLabel: string;
}) {
  const reversed = index % 2 === 1;

  return (
    <article className="border-t border-white/8 pt-10 first:border-t-0 first:pt-0 sm:pt-14">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className={cn(reversed ? "lg:order-2" : "")}>
          <div className="space-y-5 lg:sticky lg:top-28">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{project.category}</Badge>
              <Badge>{project.year}</Badge>
            </div>

            <h3 className="max-w-2xl text-[2rem] font-black tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
              {project.title}
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              {project.story}
            </p>

            <div className="rounded-[1.5rem] border border-white/8 bg-[#111318] p-4 sm:p-5">
              <p className="text-xs tracking-[0.18em] text-white/38">{roleLabel}</p>
              <p className="mt-3 text-lg font-semibold text-white">{project.role}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    className="rounded-[1.1rem] border border-white/8 bg-[#0d1014] px-4 py-4"
                    key={metric.label}
                  >
                    <p className="text-2xl font-black tracking-[-0.04em] text-white">{metric.value}</p>
                    <p className="mt-2 text-sm text-white/48">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="w-full sm:w-auto">
                <a href={project.links.live} rel="noreferrer" target="_blank">
                  {liveLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              {project.links.caseStudy ? (
                <Button asChild className="w-full sm:w-auto" variant="secondary">
                  <Link href={project.links.caseStudy}>{caseStudyLabel}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        <div className={cn("space-y-4", reversed ? "lg:order-1" : "")}>
          <ProjectVisual project={project} />

          <div className="grid gap-4 md:grid-cols-2">
            <NarrativePanel title={challengeLabel}>{project.challenge}</NarrativePanel>
            <NarrativePanel title={goalsLabel}>
              <ul className="grid gap-3">
                {project.goals.map((goal) => (
                  <li
                    className="rounded-[1rem] border border-white/8 bg-[#0d1014] px-4 py-3 text-sm leading-7 text-white/60"
                    key={goal}
                  >
                    {goal}
                  </li>
              ))}
            </ul>
          </NarrativePanel>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <NarrativePanel title={outcomeLabel}>
              <p className="text-sm leading-8 text-white/62">{project.solution}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </NarrativePanel>
            <NarrativePanel title={contributionLabel}>
              <p className="text-sm leading-8 text-white/62">{project.contribution}</p>
            </NarrativePanel>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <NarrativePanel title={designStatesLabel}>
              <div className="grid gap-3">
                {project.designStates.map((item) => (
                  <div
                    className="rounded-[1rem] border border-white/8 bg-[#0d1014] px-4 py-3 text-sm leading-7 text-white/60"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </NarrativePanel>
            <NarrativePanel title={responsibilitiesLabel}>
              <div className="grid gap-3">
                {project.responsibilities.map((item) => (
                  <div
                    className="rounded-[1rem] border border-white/8 bg-[#0d1014] px-4 py-3 text-sm leading-7 text-white/60"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </NarrativePanel>
          </div>

          <NarrativePanel title={resultsLabel}>
            <div className="grid gap-3 md:grid-cols-3">
              {project.results.map((result) => (
                <div
                  className="rounded-[1rem] border border-white/8 bg-[#0d1014] px-4 py-4 text-sm leading-7 text-white/60"
                  key={result}
                >
                  {result}
                </div>
              ))}
            </div>
          </NarrativePanel>
        </div>
      </div>
    </article>
  );
}

function NarrativePanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-4 sm:p-5">
      <p className="text-xs tracking-[0.18em] text-white/38">{title}</p>
      <div className="mt-4">{children}</div>
    </Card>
  );
}

function ProjectDirectoryGroup({
  title,
  items,
  liveLabel,
  caseStudyLabel,
  contributionLabel,
  featuredTag,
  focusLabel,
  designStatesLabel,
}: {
  title: string;
  items: ProjectArchiveItem[];
  liveLabel: string;
  caseStudyLabel: string;
  contributionLabel: string;
  featuredTag: string;
  focusLabel: string;
  designStatesLabel: string;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-4">
        <h3 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">{title}</h3>
        <Badge>{items.length}</Badge>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {items.map((item, index) => (
          <Reveal delay={index * 0.02} key={item.slug}>
            <ProjectDirectoryCard
              caseStudyLabel={caseStudyLabel}
              contributionLabel={contributionLabel}
              designStatesLabel={designStatesLabel}
              featuredTag={featuredTag}
              focusLabel={focusLabel}
              item={item}
              liveLabel={liveLabel}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ProjectDirectoryCard({
  item,
  liveLabel,
  caseStudyLabel,
  contributionLabel,
  featuredTag,
  focusLabel,
  designStatesLabel,
}: {
  item: ProjectArchiveItem;
  liveLabel: string;
  caseStudyLabel: string;
  contributionLabel: string;
  featuredTag: string;
  focusLabel: string;
  designStatesLabel: string;
}) {
  return (
    <Card className="h-full p-4 sm:p-5">
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{item.category}</Badge>
          <Badge>{item.platformLabel}</Badge>
          <Badge>{item.year}</Badge>
          {item.featured ? <Badge>{featuredTag}</Badge> : null}
        </div>

        <ProjectVisual compact project={item} />

        <div>
          <h4 className="text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">{item.title}</h4>
          <p className="mt-3 text-sm leading-7 text-white/60">{item.summary}</p>
        </div>

        <div className="rounded-[1.3rem] border border-white/8 bg-[#0d1014] p-4">
          <p className="text-xs tracking-[0.18em] text-white/38">{contributionLabel}</p>
          <p className="mt-3 text-sm leading-7 text-white/60">{item.contribution}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.2rem] border border-white/8 bg-[#0d1014] p-4">
            <p className="text-xs tracking-[0.18em] text-white/38">{focusLabel}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.focus.map((point) => (
                <span
                  className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/62"
                  key={point}
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.2rem] border border-white/8 bg-[#0d1014] p-4">
            <p className="text-xs tracking-[0.18em] text-white/38">{designStatesLabel}</p>
            <div className="mt-3 grid gap-2">
              {item.designStates.slice(0, 3).map((point) => (
                <div className="text-sm leading-6 text-white/60" key={point}>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild className="w-full sm:w-auto">
            <a href={item.links.live} rel="noreferrer" target="_blank">
              {liveLabel}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          {item.links.caseStudy ? (
            <Button asChild className="w-full sm:w-auto" variant="secondary">
              <Link href={item.links.caseStudy}>{caseStudyLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

function ContactCard({
  item,
  copiedItem,
  copiedLabel,
  openLabel,
  contactContextLabel,
  onCopy,
}: {
  item: SocialLink;
  copiedItem: string | null;
  copiedLabel: string;
  openLabel: string;
  contactContextLabel: string;
  onCopy: (value: string, label: string) => void;
}) {
  const Icon = socialIcons[item.platform];
  const isCopied = copiedItem === item.label;
  const copyValue =
    item.platform === "email"
      ? item.handle
      : item.platform === "phone"
        ? item.handle
        : item.href.startsWith("http") || item.href.startsWith("mailto:")
          ? item.href
          : item.handle;
  const actionLabel =
    item.href.startsWith("http") || item.href.startsWith("mailto:") ? openLabel : contactContextLabel;

  return (
    <Card className="p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8"
          style={{ backgroundColor: `${item.accent}14`, color: item.accent }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <button
          className="rounded-xl border border-white/8 bg-[#0d1014] p-2 text-white/50 transition hover:text-white"
          onClick={() => onCopy(copyValue, item.label)}
          type="button"
        >
          {isCopied ? <Check className="h-4 w-4 text-[#96cbb5]" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold text-white">{item.label}</p>
        <p className="mt-2 text-sm text-white/50">{item.handle}</p>
        <p className="mt-3 text-sm leading-7 text-white/58">{item.preview}</p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <a
          className="inline-flex items-center gap-2 text-sm text-white/68 transition hover:text-white"
          href={item.href}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          target={item.href.startsWith("http") ? "_blank" : undefined}
        >
          {actionLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        {isCopied ? <span className="text-xs text-[#96cbb5]">{copiedLabel}</span> : null}
      </div>
    </Card>
  );
}

function QuickFact({
  icon: Icon,
  label,
}: {
  icon: typeof Clock3;
  label: string;
}) {
  return (
    <div className="rounded-[1.2rem] border border-white/8 bg-[#111318] px-4 py-4">
      <div className="flex items-center gap-3 text-sm text-white/60">
        <Icon className="h-4 w-4 text-[#96cbb5]" />
        <span>{label}</span>
      </div>
    </div>
  );
}
