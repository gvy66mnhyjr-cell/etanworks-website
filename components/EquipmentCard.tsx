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
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={equipment.coverImage || equipment.heroImage}
          alt={`${equipment.name} equipment`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
          {equipment.category}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {equipment.name}
        </h3>

        <p className="mt-4 leading-relaxed text-gray-600">
          {equipment.overview}
        </p>

        <Link
          href={`/equipment/${equipment.slug}`}
          className="mt-6 inline-flex items-center font-semibold text-black transition-transform duration-300 group-hover:translate-x-1"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}