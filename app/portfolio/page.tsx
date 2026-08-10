import { getAllProjects } from "@/lib/portfolio";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our Portfolio
          </h1>

          <p className="text-gray-600 text-lg">
            Explore some of the excavation, earthworks and infrastructure
            projects successfully delivered by Etanworks across Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={project.coverImage}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

              </div>

              <div className="p-6">

                <span className="text-sm text-orange-600 font-semibold">
                  {project.status}
                </span>

                <h2 className="text-2xl font-bold mt-2 mb-3">
                  {project.name}
                </h2>

                <p className="text-gray-600 mb-4">
                  {project.overview}
                </p>

                <div className="flex justify-between text-sm text-gray-500">

                  <span>{project.location}</span>

                  <span>View Project →</span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </main>
  );
}