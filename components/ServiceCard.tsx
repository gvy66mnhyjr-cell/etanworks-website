type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl">
      <div className="mb-6 text-5xl">{icon}</div>

      <h3 className="mb-4 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>

      <button className="mt-6 font-semibold text-yellow-500 transition group-hover:text-black">
        Learn More →
      </button>
    </div>
  );
}