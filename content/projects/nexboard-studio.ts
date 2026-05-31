import type { ProjectItem } from "@/types/site";

export const nexboardStudio: ProjectItem = {
  slug: "nexboard-studio",
  title: "NexBoard Studio",
  category: "Creative Workspace",
  role: "Experience Design + Interactive Frontend",
  year: "2023",
  summary:
    "An immersive team workspace that merged creative planning, visual collaboration, and crisp interactive depth in one product surface.",
  story:
    "The product had strong utility but weak emotional presence. It needed to feel like a creative operating system rather than another board tool.",
  accent: "#06b6d4",
  stack: ["Next.js", "GSAP", "Framer Motion", "TailwindCSS", "Design Systems"],
  metrics: [
    { label: "Weekly engagement", value: "+24%" },
    { label: "Session duration", value: "+31%" },
    { label: "Adoption of new feature set", value: "+42%" },
  ],
  links: {
    live: "#",
    caseStudy: "/projects/nexboard-studio",
  },
  challenge:
    "The interface lacked identity and motion quality, making collaboration features feel mechanical rather than fluid and inspiring.",
  solution:
    "I reframed the experience through layered depth, responsive interaction cues, and a cleaner modular system that made creative work feel more alive.",
  results: [
    "The workspace felt more expressive without losing usability.",
    "Interaction feedback became more immediate and understandable.",
    "Design and implementation stayed tightly synchronized through shared components.",
  ],
  process: {
    research: [
      "Studied collaboration behavior, drop-off moments, and creation friction.",
      "Cataloged where motion could reinforce orientation and trust.",
      "Benchmarked creative tools and premium SaaS products for emotional tone.",
    ],
    flows: [
      "Refined canvas entry, navigation shifts, and board creation logic.",
      "Reduced friction across save states and collaborative editing contexts.",
      "Connected sidebar, canvas, and detail panels into a coherent motion system.",
    ],
    wireframes: [
      "Used contrast-based wireframes to test depth hierarchy.",
      "Evaluated transitions between navigation and content workspaces.",
      "Prototyped motion-informed layouts before visual finalization.",
    ],
    designSystem: [
      "Defined glass surfaces, focus layers, and subtle accent lighting rules.",
      "Created primitives for panels, widgets, and collaboration states.",
      "Built a reusable interaction model for hover, drag, and reveal moments.",
    ],
    frontend: [
      "Used GSAP for cinematic emphasis and Framer Motion for systemic transitions.",
      "Separated UI primitives from product-level interaction logic.",
      "Optimized animation paths to preserve smoothness across larger screens.",
    ],
  },
};
