import Image from "next/image";

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
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <Image
        src={heroImage}
        alt={`${name} project`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-6 pb-16 text-white">
          <span className="mb-5 inline-block rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold">
            {status}
          </span>

          <h1 className="mb-4 text-5xl font-bold md:text-7xl">
            {name}
          </h1>

          <p className="text-xl text-gray-200">
            {location}
          </p>
        </div>
      </div>
    </section>
  );
}