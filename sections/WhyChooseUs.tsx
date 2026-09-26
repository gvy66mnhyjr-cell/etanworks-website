import FeatureCard from "@/components/FeatureCard";
import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-orange-500">
            Why Choose Etanworks
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Built Around Your Project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We bring together engineering expertise, construction capability,
            reliable supply and practical project management to deliver
            dependable solutions from concept to completion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}