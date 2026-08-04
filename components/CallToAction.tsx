import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CallToActionProps = {
  title?: string;
  description?: string;
};

export default function CallToAction({
  title = "Ready to Get Your Project Moving?",
  description = "Whether you need excavation, earthmoving, site clearance or heavy equipment for your next project, our experienced team is ready to deliver safe, efficient and reliable solutions.",
}: CallToActionProps) {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-95" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
          Let's Build Together
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          {description}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105"
          >
            Request a Quote
            <ArrowRight className="ml-3" size={20} />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-orange-500 hover:bg-white/10"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}