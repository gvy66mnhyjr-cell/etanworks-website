import Image from "next/image";
import Link from "next/link";
import equipmentData from "@/data/equipmentData";
import EquipmentCard from "@/components/EquipmentCard";

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/equipment/hero.jpg"
          alt="Etanworks Equipment Fleet"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Layered image treatment */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-orange-950/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-gray-950" />

        {/* Subtle orange glow */}
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 text-center sm:px-6">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-orange-400 sm:text-sm sm:tracking-[0.3em]">
            Machinery • Performance • Reliability
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Our Equipment Fleet
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg md:text-xl">
            Modern, reliable machinery engineered for excavation, earthworks,
            demolition, haulage, and infrastructure projects across Kenya.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="#fleet"
              className="rounded-full bg-orange-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-500 sm:px-8 sm:py-4"
            >
              Explore Fleet
            </Link>

            <Link
              href="/#contact"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10 sm:px-8 sm:py-4"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-5 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-sm sm:tracking-[0.25em]">
            Built for the Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Equipment You Can Depend On
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-orange-600" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
            Our fleet is maintained to deliver dependable performance across
            excavation, demolition, trenching, site clearance, roadworks,
            earthworks, and material haulage projects.
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section
        id="fleet"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950 px-5 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl sm:mb-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Our Fleet
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Machinery for Every Stage of the Job
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
              From heavy excavation and site preparation to material
              transportation, our equipment is selected to support demanding
              construction and infrastructure work.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {equipmentData.map((machine) => (
              <EquipmentCard
                key={machine.id}
                equipment={machine}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}