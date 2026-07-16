import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-widest text-yellow-500">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Engineering Solutions You Can Trust
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We provide reliable engineering and construction solutions
            tailored to infrastructure, commercial and residential
            developments across Kenya.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}