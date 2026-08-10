"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  slug: string;
  location: string;
  category: string;
  role: string;
  status: string;
  coverImage: string;
};

export default function ProjectCard({
  title,
  slug,
  location,
  category,
  role,
  status,
  coverImage,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href={`/portfolio/${slug}`}
        className="group block overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Project Image */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Category */}
          <div className="absolute left-5 top-5">
            <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
              {category}
            </span>
          </div>

          {/* Status */}
          <div className="absolute right-5 top-5">
            <span
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-lg ${
                status === "Completed"
                  ? "bg-green-600"
                  : "bg-orange-500"
              }`}
            >
              {status}
            </span>
          </div>

          {/* Image Content */}
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-sm font-medium text-gray-200">
              {location}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              {title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Project Role
          </p>

          <p className="mt-2 text-gray-600">
            {role}
          </p>

          <span className="mt-6 inline-flex items-center font-semibold text-gray-900 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
            View Project
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}