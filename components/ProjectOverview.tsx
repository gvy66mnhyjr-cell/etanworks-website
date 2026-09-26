type ProjectOverviewProps = {
  overview: string;
};

export default function ProjectOverview({
  overview,
}: ProjectOverviewProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900 py-20 text-white">
      {/* Subtle orange glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <span className="font-semibold uppercase tracking-widest text-orange-500">
            Project Overview
          </span>

          <h2 className="mt-3 mb-8 text-4xl font-bold leading-tight md:text-5xl">
            Delivering Quality Earthworks with Precision
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            {overview}
          </p>
        </div>
      </div>
    </section>
  );
}