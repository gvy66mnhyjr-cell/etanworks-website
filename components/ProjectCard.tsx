import Image from "next/image";
import Link from "next/link";

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
    <Link
  href={`/projects/${slug}`}
  className="group block overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
>

      {/* Project Image */}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-yellow-500 px-4 py-1 text-sm font-semibold text-white">
          {category}
        </div>

        <div
          className={`absolute right-4 top-4 rounded-full px-4 py-1 text-sm font-semibold text-white ${
            status === "Completed"
              ? "bg-green-600"
              : "bg-orange-500"
          }`}
        >
          {status}
        </div>
      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-gray-500">
          📍 {location}
        </p>

        <p className="mt-4 text-gray-600">
          {role}
        </p>

        <button className="mt-8 font-semibold text-yellow-500 transition hover:text-black">
          View Project →
        </button>

      </div>

    </Link>
  );
}