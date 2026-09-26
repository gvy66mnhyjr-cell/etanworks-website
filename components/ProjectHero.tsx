import Image from "next/image";
import { MapPin } from "lucide-react";

type ProjectHeroProps = {
  name: string;
  location: string;
  status: string;
  heroImage: string;
};

export default function ProjectHero({
  name,
  location,
  status,
  heroImage,
}: ProjectHeroProps) {
  const isCompleted = status.toLowerCase().includes("completed");

  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
      {/* Hero Image */}
      <Image
        src={heroImage}
        alt={`${name} project`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overall image darkening */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Subtle Etanworks gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-orange-950/20" />

      {/* Soft top gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent" />

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Subtle orange glow */}
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto w-full px-6 pb-14 md:pb-20">
          <div className="max-w-5xl text-white">
            {/* Status */}
            <span
              className={`mb-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-lg ${
                isCompleted
                  ? "bg-green-600 shadow-green-950/30"
                  : "bg-orange-600 shadow-orange-950/30"
              }`}
            >
              {status}
            </span>

            {/* Project Name */}
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {name}
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 text-base text-gray-200 md:text-lg">
              <MapPin className="h-5 w-5 shrink-0 text-orange-500" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}