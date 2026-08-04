import Image from "next/image";
import Link from "next/link";
import equipmentData from "@/data/equipmentData";
import EquipmentCard from "@/components/EquipmentCard";

export default function EquipmentPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/equipment/hero.jpg"
          alt="Etanworks Equipment Fleet"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <h1 className="text-5xl font-bold md:text-7xl">
            Our Equipment Fleet
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-200 md:text-xl">
            Modern, reliable machinery engineered for excavation,
            earthworks, demolition, haulage, and infrastructure
            projects.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#fleet"
              className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
            >
              Explore Fleet
            </Link>

            <Link
              href="/#contact"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Trusted Equipment</h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
          Our fleet is maintained to deliver dependable performance across
          excavation, demolition, trenching, site clearance, roadworks,
          and material haulage projects.
        </p>
      </section>

      {/* Equipment Grid goes here */}
      <section id="fleet" className="mx-auto max-w-7xl px-6 pb-24">
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {equipmentData.map((machine) => (
      <EquipmentCard
        key={machine.id}
        equipment={machine}
      />
    ))}
  </div>
</section>
    </main>
  );
}