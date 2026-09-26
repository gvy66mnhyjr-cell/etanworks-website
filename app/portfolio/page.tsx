import { getAllProjects } from "@/lib/portfolio";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Our Work
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Projects built to
              <span className="block text-orange-500">
                move Kenya forward.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg md:text-xl md:leading-8">
              A selection of excavation, earthworks, construction and
              infrastructure projects delivered with precision, reliability
              and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-orange-600" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Selected Projects
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Work that speaks for itself.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            Explore some of the projects that showcase our capabilities,
            experience and approach to delivering quality work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={project.coverImage}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Status */}
                <div className="absolute left-5 top-5">
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg ${
                      project.status === "Ongoing"
                        ? "bg-orange-600"
                        : "bg-green-600"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project identity */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-sm font-medium text-white/80">
                    {project.location}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold leading-tight tracking-tight text-white">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-600">
                  {project.services[0]}
                </p>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {project.overview}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-sm font-bold text-gray-900">
                    View project
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-lg text-gray-700 transition-all duration-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                  Start a project
                </p>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
                Talk to Etanworks about excavation, earthworks, construction
                or infrastructure requirements for your next project.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex w-fit items-center rounded-full bg-orange-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20"
            >
              Start a conversation
              <span className="ml-3 text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}