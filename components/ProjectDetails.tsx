type ProjectDetailsProps = {
  location: string;
  status: string;
  completionDate: string;
  equipment: string[];
};

export default function ProjectDetails({
  location,
  status,
  completionDate,
  equipment,
}: ProjectDetailsProps) {
  const isCompleted = status.toLowerCase().includes("completed");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20 text-white">
      {/* Subtle transition glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />

      <div className="relative container mx-auto px-6">
        <div className="mb-12">
          <span className="font-semibold uppercase tracking-widest text-orange-500">
            Project Details
          </span>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Project Information
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Location */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:border-orange-500/30 hover:bg-white/[0.06]">
            <h3 className="mb-3 text-sm uppercase tracking-wide text-gray-400">
              Location
            </h3>

            <p className="text-xl font-semibold text-white">
              {location}
            </p>
          </div>

          {/* Status */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:border-orange-500/30 hover:bg-white/[0.06]">
            <h3 className="mb-3 text-sm uppercase tracking-wide text-gray-400">
              Status
            </h3>

            <p
              className={`text-xl font-semibold ${
                isCompleted ? "text-green-400" : "text-orange-400"
              }`}
            >
              {status}
            </p>
          </div>

          {/* Completion */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:border-orange-500/30 hover:bg-white/[0.06]">
            <h3 className="mb-3 text-sm uppercase tracking-wide text-gray-400">
              Completion
            </h3>

            <p className="text-xl font-semibold text-white">
              {completionDate}
            </p>
          </div>

          {/* Equipment */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:border-orange-500/30 hover:bg-white/[0.06]">
            <h3 className="mb-3 text-sm uppercase tracking-wide text-gray-400">
              Equipment Used
            </h3>

            <ul className="space-y-2 text-gray-200">
              {equipment.map((item) => (
                <li key={item} className="font-medium">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}