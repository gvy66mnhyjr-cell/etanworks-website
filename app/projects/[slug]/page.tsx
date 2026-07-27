import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">

  {/* Hero Image */}
  <div className="relative h-[60vh] w-full">
    <Image
      src={project.heroImage}
      alt={project.title}
      fill
      className="object-cover"
      priority
    />

    <div className="absolute inset-0 bg-black/50" />

    <div className="absolute inset-0 flex items-end">
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 text-white">
        <span className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold">
          {project.category}
        </span>

        <h1 className="mt-6 text-4xl font-bold md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          📍 {project.location}
        </p>
      </div>
    </div>
  </div>

  {/* Project Details */}
  <section className="mx-auto max-w-5xl px-6 py-20">

    <div className="mb-8 flex gap-4">
      <span
        className={`rounded-full px-4 py-2 text-white ${
          project.status === "Completed"
            ? "bg-green-600"
            : "bg-orange-500"
        }`}
      >
        {project.status}
      </span>
    </div>

    <h2 className="mb-6 text-3xl font-bold">
      Project Overview
    </h2>

    <p className="leading-8 text-gray-700">
      {project.description}
    </p>

<ProjectGallery
  title={project.title}
  images={project.gallery}
/>
  </section>

</main>
  );
}