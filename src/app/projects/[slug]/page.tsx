import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProfile } from "@content/profile";
import { getProjectBySlug, projectSlugs } from "@content/projects";
import { ProjectCaseStudy } from "@/components/site/project-case-study";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfile("en");
  const project = getProjectBySlug(slug, "en");

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | ${profile.shortName}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "en");

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy slug={slug} />;
}
