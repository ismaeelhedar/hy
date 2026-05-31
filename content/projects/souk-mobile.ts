import type { ProjectItem } from "@/types/site";

export const soukMobile: ProjectItem = {
  slug: "souk-mobile",
  title: "Souk Mobile Commerce",
  category: "Mobile Product",
  role: "Lead UI/UX + Design System",
  year: "2022",
  summary:
    "A mobile commerce experience designed to feel warm, fast, and trustworthy while improving product discovery and checkout flow.",
  story:
    "Souk needed a mobile experience that respected regional browsing behavior while elevating the product to a more contemporary visual and UX standard.",
  accent: "#f59e0b",
  stack: ["Figma", "Mobile UX", "Design Systems", "Prototype Strategy"],
  metrics: [
    { label: "Checkout completion", value: "+19%" },
    { label: "Saved items usage", value: "+46%" },
    { label: "Return visits", value: "+22%" },
  ],
  links: {
    live: "#",
    caseStudy: "/projects/souk-mobile",
  },
  challenge:
    "Users experienced decision fatigue in discovery and too much friction during checkout, especially on smaller devices and slower connections.",
  solution:
    "I simplified navigation, improved product storytelling, introduced cleaner visual grouping, and built a modular system for promotional, discovery, and transaction flows.",
  results: [
    "More confident mobile browsing behavior.",
    "Stronger product clarity across search and category journeys.",
    "A reusable mobile UI language for future product releases.",
  ],
  process: {
    research: [
      "Reviewed browsing behavior for categories, search, and cart abandonment.",
      "Focused on cultural trust cues and what users needed before purchasing.",
      "Mapped emotional drop-off across checkout and decision-heavy flows.",
    ],
    flows: [
      "Rebuilt the product listing-to-detail path with better hierarchy.",
      "Simplified checkout into clearer, confidence-building steps.",
      "Used sticky micro-CTAs to reduce friction on smaller viewports.",
    ],
    wireframes: [
      "Prioritized information chunks for thumb-friendly reading.",
      "Tested different product card densities and spacing models.",
      "Validated conversion paths before high-fidelity polish.",
    ],
    designSystem: [
      "Defined mobile tokens for spacing, type rhythm, and emphasis.",
      "Created consistent states for promotions, stock, trust, and delivery cues.",
      "Built a modular pattern library for lists, cards, and checkout surfaces.",
    ],
    frontend: [
      "Prepared implementation-ready component specs and responsive behaviors.",
      "Documented edge states for engineering handoff and QA.",
      "Reduced ambiguity by aligning visuals with real implementation constraints.",
    ],
  },
};
