import FeatureCard from "@/components/FeatureCard";
import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-yellow-500">
            Why Choose Etanworks
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Trusted by Clients Across Kenya
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We combine expertise, modern equipment and a commitment to quality
            to deliver engineering solutions that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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