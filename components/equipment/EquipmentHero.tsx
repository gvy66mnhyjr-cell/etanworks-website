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
    <section className="relative h-[68vh] min-h-[520px] overflow-hidden">
      <Image
        src={heroImage}
        alt={`${name} equipment`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Image depth */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Machinery showroom gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-orange-950/15" />

      {/* Top depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent" />

      {/* Bottom readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/35 to-transparent" />

      {/* Controlled orange glow */}
      <div className="pointer-events-none absolute -bottom-40 right-[-5rem] h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-6 md:pb-20">
          <div className="max-w-5xl text-white">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-sm sm:tracking-[0.28em]">
                Equipment Profile
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {name}
            </h1>

            <p className="mt-4 text-base font-medium text-gray-200 sm:text-lg">
              {category}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}