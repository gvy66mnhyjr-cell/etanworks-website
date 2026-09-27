type EquipmentSpecsProps = {
  specifications: {
    operatingWeight: string;
    bucketCapacity: string;
    engine: string;
    maxDigDepth: string;
  };
};

export default function EquipmentSpecs({
  specifications,
}: EquipmentSpecsProps) {
  const specs = [
    {
      title: "Operating Weight",
      value: specifications.operatingWeight,
    },
    {
      title: "Bucket Capacity",
      value: specifications.bucketCapacity,
    },
    {
      title: "Engine",
      value: specifications.engine,
    },
    {
      title: "Maximum Dig Depth",
      value: specifications.maxDigDepth,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950 px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24">
      {/* Technical glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-600/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-orange-600" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Specifications
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Machine Specifications
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Key specifications and operating capabilities of this machine,
            selected to support demanding earthmoving and construction work.
          </p>
        </div>

        {/* Specification panels */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-14 xl:grid-cols-4">
          {specs.map((spec, index) => (
            <div
              key={spec.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.055] sm:p-7 md:p-8"
            >
              {/* Small technical accent */}
              <div className="absolute left-0 top-0 h-px w-10 bg-orange-600 transition-all duration-300 group-hover:w-16" />

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500">
                0{index + 1} · {spec.title}
              </p>

              <h3 className="mt-5 break-words text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {spec.value}
              </h3>

              <div className="mt-6 h-px w-full bg-white/10" />

              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-gray-600">
                Etanworks Fleet
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}