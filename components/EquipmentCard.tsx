import Image from "next/image";
import Link from "next/link";

type EquipmentCardProps = {
  equipment: {
    id: number;
    slug: string;
    name: string;
    category: string;
    heroImage: string;
    coverImage: string;
    gallery: string[];
    overview: string;
    specifications: {
      operatingWeight: string;
      bucketCapacity: string;
      engine: string;
      maxDigDepth: string;
    };
    applications: string[];
  };
};

export default function EquipmentCard({
  equipment,
}: EquipmentCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-black/40">
      {/* Image */}
      <Link
        href={`/equipment/${equipment.slug}`}
        className="block"
        aria-label={`View ${equipment.name} details`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
          <Image
            src={equipment.coverImage || equipment.heroImage}
            alt={`${equipment.name} equipment`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Image treatment */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-950/20" />

          {/* Category */}
          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/15 bg-black/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:text-xs">
              {equipment.category}
            </span>
          </div>

          {/* Bottom machine name */}
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-orange-400">
              Etanworks Fleet
            </p>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {equipment.name}
        </h3>

        <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-gray-400">
          {equipment.overview}
        </p>

        {/* Quick specifications */}
        <div className="mt-6 grid grid-cols-2 gap-x-4 border-t border-white/10 pt-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
              Operating Weight
            </p>

            <p className="mt-1.5 text-sm font-semibold text-gray-200">
              {equipment.specifications.operatingWeight}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
              Engine
            </p>

            <p className="mt-1.5 text-sm font-semibold text-gray-200">
              {equipment.specifications.engine}
            </p>
          </div>
        </div>

        {/* Details */}
        <Link
          href={`/equipment/${equipment.slug}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white transition-all duration-300 group-hover:gap-3"
        >
          View Equipment

          <span
            aria-hidden="true"
            className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}