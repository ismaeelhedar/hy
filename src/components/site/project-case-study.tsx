"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { getProjectBySlug } from "@content/projects";
import { useLocale } from "@/components/site/locale-provider";
import { Reveal } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const { locale, direction } = useLocale();
  const project = getProjectBySlug(slug, locale) ?? getProjectBySlug(slug, "en");

  if (!project) {
    return null;
  }

  const copy =
    locale === "ar"
      ? {
          back: "العودة إلى المشاريع",
          overview: "نظرة عامة",
          story: "القصة",
          role: "الدور",
          stack: "التقنيات",
          challenge: "التحدي",
          solution: "الاستجابة التصميمية",
          results: "النتائج",
          process: "العملية",
          live: "معاينة مباشرة",
          contact: "ابدأ تعاونًا",
          home: "العودة للرئيسية",
          next: "إذا كان هذا النوع من العمل قريبًا مما تحتاجه، يمكننا الانتقال إلى الخطوة التالية بوضوح.",
        }
      : {
          back: "Back to projects",
          overview: "Overview",
          story: "Story",
          role: "Role",
          stack: "Stack",
          challenge: "Challenge",
          solution: "Design response",
          results: "Results",
          process: "Process",
          live: "Live preview",
          contact: "Start collaboration",
          home: "Back home",
          next: "If this is close to the kind of work you need, the next step can start with a clear conversation.",
        };

  const BackIcon = locale === "ar" ? ArrowRight : ArrowLeft;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0b0d10] px-4 pb-16 pt-24 text-white sm:pb-20 md:px-8 md:pt-28" dir={direction}>
      <div className="pointer-events-none fixed inset-0 noise-mask opacity-30" />
      <main className="relative z-10 mx-auto max-w-7xl space-y-14">
        <Reveal className="space-y-6">
          <Link
            className="inline-flex items-center gap-2 text-sm text-white/56 transition hover:text-white"
            href="/#projects"
          >
            <BackIcon className="h-4 w-4" />
            {copy.back}
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Badge>{project.category}</Badge>
            <Badge>{project.year}</Badge>
            <Badge>{project.role}</Badge>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="space-y-5">
              <h1 className="max-w-4xl text-[2.85rem] font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-5xl md:text-7xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-[0.97rem] leading-7 text-white/60 sm:text-base sm:leading-8 md:text-lg">
                {project.story}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild className="w-full sm:w-auto">
                  <a href={project.links.live}>
                    {copy.live}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild className="w-full sm:w-auto" variant="secondary">
                  <a href="#results">{copy.results}</a>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden p-0">
              <Image
                alt={project.title}
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                height={900}
                priority
                src={`/projects/${slug}.svg`}
                width={1440}
              />
            </Card>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="p-5 sm:p-6">
              <p className="text-xs tracking-[0.18em] text-[#96cbb5]">{copy.overview}</p>
              <p className="mt-4 text-base leading-8 text-white/64">{project.summary}</p>
              <div className="mt-6 grid gap-3">
                <div className="rounded-[1.2rem] border border-white/8 bg-[#0d1014] px-4 py-4">
                  <p className="text-xs tracking-[0.16em] text-white/38">{copy.role}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{project.role}</p>
                </div>
                <div className="rounded-[1.2rem] border border-white/8 bg-[#0d1014] px-4 py-4">
                  <p className="text-xs tracking-[0.16em] text-white/38">{copy.stack}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
              <Card className="p-5" key={metric.label}>
                <p className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">{metric.value}</p>
                <p className="mt-3 text-sm text-white/48">{metric.label}</p>
              </Card>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-[#0d1014]">
                  <Layers3 className="h-5 w-5 text-[#96cbb5]" />
                </div>
                <p className="text-lg font-semibold text-white">{copy.challenge}</p>
              </div>
              <p className="mt-5 text-sm leading-8 text-white/62">{project.challenge}</p>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card className="h-full p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-[#0d1014]">
                  <Code2 className="h-5 w-5 text-[#96cbb5]" />
                </div>
                <p className="text-lg font-semibold text-white">{copy.solution}</p>
              </div>
              <p className="mt-5 text-sm leading-8 text-white/62">{project.solution}</p>
            </Card>
          </Reveal>
        </div>

        <Reveal>
          <Card className="p-5 sm:p-6" id="results">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-[#0d1014]">
                <Sparkles className="h-5 w-5 text-[#96cbb5]" />
              </div>
              <p className="text-lg font-semibold text-white">{copy.results}</p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {project.results.map((result) => (
                <div
                  className="rounded-[1.2rem] border border-white/8 bg-[#0d1014] px-4 py-4 text-sm leading-7 text-white/60"
                  key={result}
                >
                  {result}
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <div className="grid gap-4 xl:grid-cols-5">
            <ProcessColumn
              items={project.process.research}
              title={locale === "ar" ? "Research" : "Research"}
            />
            <ProcessColumn items={project.process.flows} title={locale === "ar" ? "Flows" : "Flows"} />
            <ProcessColumn
              items={project.process.wireframes}
              title={locale === "ar" ? "Wireframes" : "Wireframes"}
            />
            <ProcessColumn
              items={project.process.designSystem}
              title={locale === "ar" ? "Design System" : "Design System"}
            />
            <ProcessColumn items={project.process.frontend} title={locale === "ar" ? "Frontend" : "Frontend"} />
          </div>
        </Reveal>

        <Reveal>
          <Card className="p-5 sm:p-7 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs tracking-[0.18em] text-[#96cbb5]">{copy.process}</p>
                <p className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.04] tracking-[-0.04em] text-white sm:text-3xl md:text-5xl">
                  {copy.next}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/46">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {project.year}
                  </span>
                  <span>{project.role}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/#contact">{copy.contact}</Link>
                </Button>
                <Button asChild className="w-full sm:w-auto" variant="secondary">
                  <Link href="/">{copy.home}</Link>
                </Button>
              </div>
            </div>
          </Card>
        </Reveal>
      </main>
    </div>
  );
}

function ProcessColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card className="h-full p-4 sm:p-5">
      <p className="text-xs tracking-[0.18em] text-[#96cbb5]">{title}</p>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div
            className="rounded-[1rem] border border-white/8 bg-[#0d1014] px-4 py-3 text-sm leading-7 text-white/60"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}
