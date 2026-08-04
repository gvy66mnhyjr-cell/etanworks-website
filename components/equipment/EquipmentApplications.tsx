import { CheckCircle2 } from "lucide-react";

type EquipmentApplicationsProps = {
  applications: string[];
};

export default function EquipmentApplications({
  applications,
}: EquipmentApplicationsProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Applications
        </p>

        <h2 className="mt-4 text-4xl font-bold text-gray-900">
          Ideal For
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
          Built to handle demanding projects across construction,
          infrastructure and earthmoving operations.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <div
              key={application}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <CheckCircle2 size={24} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {application}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Suitable for {application.toLowerCase()} projects where
                performance, reliability and productivity are essential.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}