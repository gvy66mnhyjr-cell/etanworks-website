type EquipmentOverviewProps = {
  name: string;
  overview: string;
};

export default function EquipmentOverview({
  name,
  overview,
}: EquipmentOverviewProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24">
      {/* Subtle illumination */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-orange-600/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          {/* Heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Equipment Overview
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              {name}
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-orange-600 sm:mt-8 sm:w-20" />
          </div>

          {/* Description */}
          <div className="border-l border-white/10 pl-6 sm:pl-8">
            <p className="text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}