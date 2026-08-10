import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/portfolio";

import ProjectHero from "@/components/ProjectHero";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectGallery from "@/components/ProjectGallery";
import RelatedProjects from "@/components/RelatedProjects";

type PortfolioPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description =
    project.overview.length > 160
      ? `${project.overview.substring(0, 157)}...`
      : project.overview;

  return {
    title: project.name,

    description,

    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },

    openGraph: {
      title: project.name,
      description,
      url: `https://etanworks.co.ke/portfolio/${project.slug}`,
      siteName: "Etanworks",
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      locale: "en_KE",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: project.name,
      description,
      images: [project.heroImage],
    },
  };
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug);

  return (
    <main>
      <ProjectHero
        name={project.name}
        location={project.location}
        status={project.status}
        heroImage={project.heroImage}
      />

      <ProjectOverview overview={project.overview} />

      <ProjectDetails
        location={project.location}
        status={project.status}
        completionDate={project.completionDate}
        equipment={project.equipment}
      />

      <section className="container mx-auto px-6 pb-20">
        <ProjectGallery
          title={project.name}
          images={project.gallery}
        />
      </section>

      <RelatedProjects
        projects={relatedProjects}
      />
    </main>
  );
}