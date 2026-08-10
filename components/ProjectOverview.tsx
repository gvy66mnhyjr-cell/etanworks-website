type ProjectOverviewProps = {
  overview: string;
};

export default function ProjectOverview({
  overview,
}: ProjectOverviewProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto">

          <span className="text-orange-600 font-semibold uppercase tracking-widest">
            Project Overview
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">
            Delivering Quality Earthworks with Precision
          </h2>

          <p className="text-lg leading-9 text-gray-600">
            {overview}
          </p>

        </div>

      </div>
    </section>
  );
}