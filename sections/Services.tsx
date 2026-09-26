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
          <p className="font-semibold uppercase tracking-[0.25em] text-orange-500">
            Our Core Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Engineering Solutions Built to Deliver
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            From structural design and civil works to earthmoving and
            construction materials supply, we provide practical solutions
            tailored to infrastructure, commercial and residential projects
            across Kenya.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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