export type Locale = "ar" | "en";

export type SocialPlatform =
  | "email"
  | "phone"
  | "whatsapp"
  | "telegram"
  | "linkedin"
  | "behance"
  | "dribbble"
  | "github"
  | "instagram"
  | "x";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  handle: string;
  href: string;
  stat: string;
  preview: string;
  accent: string;
}

export interface ProfileStat {
  value: string;
  label: string;
}

export interface ProfileTab {
  id: string;
  title: string;
  lead: string;
  body: string;
}

export interface ProfileConfig {
  name: string;
  shortName: string;
  title: string;
  headline: string;
  intro: string;
  education: string[];
  languages: { name: string; level: string }[];
  location: string;
  timezone: string;
  availability: string;
  responseTime: string;
  yearsOfExperience: string;
  downloadCvHref: string;
  heroWords: string[];
  stats: ProfileStat[];
  socialLinks: SocialLink[];
  aboutTabs: ProfileTab[];
  philosophy: string[];
}

export interface AnnouncementConfig {
  id: string;
  active: boolean;
  badge?: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  preview: string;
  details: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectLinkSet {
  live: string;
  caseStudy?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectProcess {
  research: string[];
  flows: string[];
  wireframes: string[];
  designSystem: string[];
  frontend: string[];
}

export type ProjectPlatformType = "web" | "mobile";

export interface ProjectArchiveItem {
  slug: string;
  title: string;
  client: string;
  category: string;
  sector: string;
  platformType: ProjectPlatformType;
  platformLabel: string;
  role: string;
  year: string;
  summary: string;
  contribution: string;
  focus: string[];
  designStates: string[];
  accent: string;
  links: ProjectLinkSet;
  featured?: boolean;
}

export interface ProjectItem extends ProjectArchiveItem {
  summary: string;
  story: string;
  goals: string[];
  stack: string[];
  metrics: ProjectMetric[];
  links: ProjectLinkSet;
  challenge: string;
  solution: string;
  results: string[];
  responsibilities: string[];
  process: ProjectProcess;
}
