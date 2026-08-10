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
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="mb-12">
          <span className="text-orange-600 font-semibold uppercase tracking-widest">
            Project Details
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Project Information
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Location
            </h3>

            <p className="text-xl font-semibold">
              {location}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Status
            </h3>

            <p className="text-xl font-semibold">
              {status}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Completion
            </h3>

            <p className="text-xl font-semibold">
              {completionDate}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">
              Equipment Used
            </h3>

            <ul className="space-y-2">
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