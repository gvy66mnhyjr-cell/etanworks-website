import {
  Workflow,
  MapPinned,
  BadgeCheck,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const iconMap = {
  Workflow,
  MapPinned,
  BadgeCheck,
  Clock3,
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  const Icon =
    iconMap[icon as keyof typeof iconMap] ?? BadgeCheck;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl">

      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

      {/* Icon */}
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-800 transition-all duration-500 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
        <Icon
          size={28}
          strokeWidth={1.7}
        />
      </div>

      {/* Content */}
      <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h3>

      <p className="min-h-[96px] leading-7 text-gray-600">
        {description}
      </p>

      {/* Bottom action */}
      <div className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500 transition-all duration-300 group-hover:text-orange-500">
        <span>Why It Matters</span>

        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}