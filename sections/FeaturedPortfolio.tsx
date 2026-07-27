import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedPortfolio() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            slug={project.slug}
            title={project.title}
            location={project.location}
            category={project.category}
            role={project.role}
            status={project.status}
            coverImage={project.coverImage}
          />
        ))}
      </div>
    </section>
  );
}