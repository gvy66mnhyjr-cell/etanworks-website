"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: number;
  slug: string;
  name: string;
  coverImage: string;
  location: string;
  status: string;
};

type RelatedProjectsProps = {
  projects: Project[];
};

export default function RelatedProjects({
  projects,
}: RelatedProjectsProps) {
  if (!projects.length) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            More Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Related Projects
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Explore more projects delivered by Etanworks across
            construction, infrastructure and earthmoving operations.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block overflow-hidden rounded-3xl bg-white shadow-md transition-shadow duration-500 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Status */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                      {project.status}
                    </span>
                  </div>

                  {/* Image CTA */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-200">
                        {project.location}
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-white">
                        {project.name}
                      </h3>
                    </div>

                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg sm:block"
                    >
                      View Project →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}