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
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Specifications
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Machine Specifications
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {specs.map((spec) => (
            <div
              key={spec.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {spec.title}
              </p>

              <h3 className="mt-5 text-3xl font-bold text-gray-900">
                {spec.value}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}