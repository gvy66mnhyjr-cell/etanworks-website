import { CheckCircle2 } from "lucide-react";

type EquipmentApplicationsProps = {
  name: string;
  applications: string[];
};

export default function EquipmentApplications({
  name,
  applications,
}: EquipmentApplicationsProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24">
      {/* Subtle orange illumination */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-600/6 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-orange-600" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Applications
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Explore {name}
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
            Built to handle demanding projects across construction,
            infrastructure and earthmoving operations.
          </p>
        </div>

        {/* Applications */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {applications.map((application, index) => (
            <div
              key={application}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.055] sm:p-7 md:p-8"
            >
              {/* Orange top accent */}
              <div className="absolute left-0 top-0 h-px w-8 bg-orange-600 transition-all duration-300 group-hover:w-14" />

              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-600 group-hover:text-white">
                  <CheckCircle2 size={22} />
                </div>

                <span className="text-xs font-bold tracking-widest text-gray-700">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
                {application}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
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