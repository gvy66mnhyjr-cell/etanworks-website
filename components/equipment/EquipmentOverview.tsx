type EquipmentOverviewProps = {
  name: string;
  overview: string;
};

export default function EquipmentOverview({
  name,
  overview,
}: EquipmentOverviewProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Equipment Overview
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            {name}
          </h2>

          <div className="mt-8 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        {/* Right */}
        <div>
          <p className="text-lg leading-9 text-gray-600">
            {overview}
          </p>
        </div>

      </div>
    </section>
  );
}