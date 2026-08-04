"use client";

import Link from "next/link";
import Image from "next/image";

import StaggerContainer from "@/components/StaggerContainer";
import StaggerItem from "@/components/StaggerItem";

type Equipment = {
  slug: string;
  name: string;
  category: string;
  coverImage: string;
};

type RelatedEquipmentProps = {
  equipment: Equipment[];
};

export default function RelatedEquipment({
  equipment,
}: RelatedEquipmentProps) {
  if (equipment.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          More Equipment
        </p>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          You May Also Be Interested In
        </h2>

        <StaggerContainer>
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {equipment.map((machine) => (
              <StaggerItem key={machine.slug}>
                <Link
                  href={`/equipment/${machine.slug}`}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={machine.coverImage}
                      alt={machine.name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8">
                    <p className="text-sm uppercase tracking-[0.2em] text-orange-500">
                      {machine.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-gray-900">
                      {machine.name}
                    </h3>

                    <span className="mt-6 inline-flex items-center font-semibold text-orange-500 transition group-hover:translate-x-2">
                      View Equipment →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}