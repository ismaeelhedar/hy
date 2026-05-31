import type { ProjectItem } from "@/types/site";

export const auroraFinance: ProjectItem = {
  slug: "aurora-finance",
  title: "Aurora Finance OS",
  category: "SaaS Platform",
  role: "Product Design + Frontend Architecture",
  year: "2024",
  summary:
    "A finance operations platform rebuilt to feel cinematic, clear, and enterprise-grade without becoming visually heavy.",
  story:
    "Aurora needed a product layer that felt premium enough for modern finance teams while still supporting complex workflows and serious operational trust.",
  accent: "#7c3aed",
  stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Figma"],
  metrics: [
    { label: "Onboarding completion", value: "+37%" },
    { label: "Time to first action", value: "-28%" },
    { label: "User confidence score", value: "4.8/5" },
  ],
  links: {
    live: "#",
    caseStudy: "/projects/aurora-finance",
  },
  challenge:
    "The old dashboard felt dense, outdated, and difficult to trust. Users struggled to find critical actions quickly and the product lacked a premium operational identity.",
  solution:
    "I restructured the product hierarchy, simplified workflows, introduced a richer component system, and implemented the visual layer in Next.js to ensure design and code stayed aligned.",
  results: [
    "Sharper workflow segmentation for finance teams.",
    "Premium dashboard identity with calmer data density.",
    "Reusable frontend foundation ready for future modules.",
  ],
  process: {
    research: [
      "Mapped friction across onboarding, billing, and approvals.",
      "Identified moments where trust and confidence visually dropped.",
      "Reviewed competitor patterns to find gaps in emotional product quality.",
    ],
    flows: [
      "Redesigned the onboarding path into shorter, confidence-building steps.",
      "Split dense data operations into progressive disclosure patterns.",
      "Aligned roles, states, and actions around clearer navigation logic.",
    ],
    wireframes: [
      "Started with structure-first dashboard compositions.",
      "Explored wide-screen density models for operations teams.",
      "Validated card hierarchy and key action placement before visual styling.",
    ],
    designSystem: [
      "Defined tokens, spacing rhythm, and elevated surface behaviors.",
      "Created a consistent system for metrics, states, overlays, and forms.",
      "Established premium motion rules for status change and hierarchy shifts.",
    ],
    frontend: [
      "Implemented in Next.js with reusable typed components.",
      "Protected performance while layering motion and interface polish.",
      "Built a foundation that engineering could scale without visual drift.",
    ],
  },
};
