import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import ProjectDetailView from "@/components/ProjectDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const siteUrl = "https://ilyas-ones.com";
  const pageUrl = `${siteUrl}/portfolio/${slug}`;

  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: pageUrl,
      siteName: "Ilyas Salimov Portfolio",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}
