import Image from "next/image";

type EquipmentHeroProps = {
  name: string;
  category: string;
  heroImage: string;
};

export default function EquipmentHero({
  name,
  category,
  heroImage,
}: EquipmentHeroProps) {
  return (
    <section className="relative h-[65vh] w-full overflow-hidden">
      <Image
        src={heroImage}
        alt={name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-400">
            Equipment Fleet
          </p>

          <h1 className="text-5xl font-bold text-white md:text-6xl">
            {name}
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            {category}
          </p>
        </div>
      </div>
    </section>
  );
}