"use client";

import { Layers3, Smartphone } from "lucide-react";
import { useLocale } from "@/components/site/locale-provider";
import { cn } from "@/lib/utils";
import type { ProjectArchiveItem } from "@/types/site";

interface ProjectVisualProps {
  project: Pick<
    ProjectArchiveItem,
    "title" | "client" | "accent" | "platformType" | "platformLabel" | "sector" | "focus" | "designStates"
  >;
  compact?: boolean;
}

interface ProjectVisualLabels {
  navigation: string;
  designFocus: string;
  stateLayer: string;
  interactionFocus: string;
}

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  const { locale } = useLocale();
  const isMobile = project.platformType === "mobile";
  const labels =
    locale === "ar"
      ? {
          navigation: "التنقل",
          designFocus: "محاور التركيز",
          stateLayer: "طبقة الحالات",
          interactionFocus: "تركيز التفاعل",
        }
      : {
          navigation: "Navigation",
          designFocus: "Design focus",
          stateLayer: "State layer",
          interactionFocus: "Interaction focus",
        };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[#0d1014]",
        compact ? "p-4" : "p-4 sm:p-5 md:p-6",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(circle at top right, ${project.accent}33, transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0) 60%)`,
        }}
      />

      <div className="relative space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.18em] text-white/38">{project.platformLabel}</p>
            <p className="mt-2 text-lg font-semibold text-white">{project.title}</p>
            <p className="mt-1 text-sm text-white/46">{project.sector}</p>
          </div>
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8"
            style={{ backgroundColor: `${project.accent}16`, color: project.accent }}
          >
            {isMobile ? <Smartphone className="h-5 w-5" /> : <Layers3 className="h-5 w-5" />}
          </div>
        </div>

        {isMobile ? (
          <MobileSurface compact={compact} labels={labels} project={project} />
        ) : (
          <WebSurface compact={compact} labels={labels} project={project} />
        )}
      </div>
    </div>
  );
}

function WebSurface({
  project,
  compact,
  labels,
}: ProjectVisualProps & { labels: ProjectVisualLabels }) {
  return (
    <div className={cn("grid gap-3", compact ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[1.1fr_0.9fr]")}>
      <div className="overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#111318]">
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/16" />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: project.accent }} />
          </div>
          <span className="text-xs text-white/38">{project.client}</span>
        </div>

        <div className="grid gap-3 p-4 md:grid-cols-[0.34fr_0.66fr]">
          <div className="space-y-2">
            <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-xs text-white/38">
              {labels.navigation}
            </div>
            {project.focus.slice(0, 3).map((item) => (
              <div
                className="rounded-xl border border-white/8 bg-[#0b0d10] px-3 py-3 text-xs leading-6 text-white/56"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] p-4">
              <div className="h-3 w-24 rounded-full bg-white/14" />
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="h-14 rounded-2xl" style={{ backgroundColor: `${project.accent}18` }} />
                  <div className="h-14 rounded-2xl bg-white/[0.05]" />
                </div>
                <div className="h-full min-h-[7.5rem] rounded-2xl bg-[#0b0d10]" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {project.designStates.slice(0, compact ? 2 : 3).map((item) => (
                <div
                  className="rounded-[1rem] border border-white/8 bg-[#0b0d10] px-3 py-3 text-xs leading-6 text-white/56"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <div className="rounded-[1.35rem] border border-white/8 bg-[#111318] p-4">
          <p className="text-xs tracking-[0.18em] text-white/38">{labels.designFocus}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.focus.slice(0, compact ? 3 : 4).map((item) => (
              <span
                className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/62"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[1.35rem] border border-white/8 bg-[#111318] p-4">
          <p className="text-xs tracking-[0.18em] text-white/38">{labels.stateLayer}</p>
          <div className="mt-4 space-y-2">
            {project.designStates.slice(0, compact ? 2 : 3).map((item) => (
              <div
                className="rounded-xl border border-white/8 bg-[#0b0d10] px-3 py-3 text-xs leading-6 text-white/56"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSurface({
  project,
  compact,
  labels,
}: ProjectVisualProps & { labels: ProjectVisualLabels }) {
  return (
    <div className={cn("grid gap-3", compact ? "lg:grid-cols-[0.78fr_1.22fr]" : "lg:grid-cols-[0.82fr_1.18fr]")}>
      <div className="flex items-center justify-center rounded-[1.35rem] border border-white/8 bg-[#111318] px-4 py-5">
        <div className="relative w-[11.5rem] rounded-[2rem] border border-white/8 bg-[#0b0d10] p-2 shadow-[0_24px_40px_rgba(0,0,0,0.28)]">
          <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10" />
          <div className="space-y-3 rounded-[1.55rem] p-3" style={{ backgroundColor: `${project.accent}12` }}>
            <div className="h-20 rounded-[1.2rem]" style={{ backgroundColor: `${project.accent}24` }} />
            <div className="h-3 w-20 rounded-full bg-white/14" />
            <div className="space-y-2">
              <div className="h-12 rounded-2xl bg-white/[0.06]" />
              <div className="h-12 rounded-2xl bg-white/[0.06]" />
            </div>
            <div className="h-10 rounded-full" style={{ backgroundColor: `${project.accent}2c` }} />
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        <div className="rounded-[1.35rem] border border-white/8 bg-[#111318] p-4">
          <p className="text-xs tracking-[0.18em] text-white/38">{labels.interactionFocus}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.focus.slice(0, compact ? 3 : 4).map((item) => (
              <span
                className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/62"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {project.designStates.slice(0, compact ? 2 : 4).map((item) => (
            <div
              className="rounded-[1.1rem] border border-white/8 bg-[#111318] px-4 py-4 text-xs leading-6 text-white/56"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
