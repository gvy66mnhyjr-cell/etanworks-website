import Image from "next/image";
import {
  Building2,
  Compass,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* Left — Company Overview */}
        <div>
          <p className="font-semibold uppercase tracking-[0.25em] text-orange-500">
            Company Overview
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Engineering Capability Built for Kenya's Growth.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
            <p>
              <span className="font-semibold text-gray-900">
                Etanworks Supplies Limited
              </span>{" "}
              is a proudly Kenyan-based engineering and construction company
              established in 2025, specializing in{" "}
              <span className="font-medium text-gray-900">
                Civil & Structural Works, Structural Design & Consultancy,
                Earthworks Services, and the Supply of High-Quality
                Construction Materials.
              </span>
            </p>

            <p>
              Rooted in Kenya and driven by engineering excellence, Etanworks
              combines{" "}
              <span className="font-medium text-gray-900">
                technical expertise, modern technology, and deep market
                knowledge
              </span>{" "}
              to support infrastructure and building development across
              diverse sectors, including residential, commercial, and
              industrial projects.
            </p>

            <p>
              We offer{" "}
              <span className="font-medium text-gray-900">
                end-to-end construction solutions
              </span>{" "}
              that ensure safety, sustainability, and cost-effectiveness.
            </p>
          </div>

          {/* Capability highlights */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <OverviewPoint
              icon={Building2}
              title="Engineering & Construction"
              text="Integrated technical and construction capability."
            />

            <OverviewPoint
              icon={Compass}
              title="Technical Expertise"
              text="Practical engineering solutions for diverse projects."
            />

            <OverviewPoint
              icon={ShieldCheck}
              title="Safety & Quality"
              text="Focused on dependable and compliant project delivery."
            />

            <OverviewPoint
              icon={Truck}
              title="Project Support"
              text="Equipment, materials and execution working together."
            />
          </div>
        </div>

        {/* Right — Company Image */}
        <div className="relative">
          <div className="relative h-[560px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/about/about.jpeg"
              alt="Etanworks engineering and construction project"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Established badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-black/60 px-6 py-5 backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Established
              </p>

              <p className="mt-1 text-3xl font-bold text-white">
                2025
              </p>
            </div>
          </div>

          {/* Decorative orange accent */}
          <div className="absolute -bottom-4 -right-4 -z-0 h-24 w-24 rounded-2xl bg-orange-500" />
        </div>

      </div>
    </section>
  );
}

function OverviewPoint({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-lg">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-800 shadow-sm transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
        <Icon size={21} strokeWidth={1.8} />
      </div>

      <div>
        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          {text}
        </p>
      </div>
    </div>
  );
}