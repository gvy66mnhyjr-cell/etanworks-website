import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { getEquipmentBySlug } from "@/lib/equipment";
import equipmentData from "@/data/equipmentData";

import EquipmentHero from "@/components/equipment/EquipmentHero";
import EquipmentOverview from "@/components/equipment/EquipmentOverview";
import EquipmentSpecs from "@/components/equipment/EquipmentSpecs";
import EquipmentApplications from "@/components/equipment/EquipmentApplications";
import EquipmentGallery from "@/components/equipment/EquipmentGallery";

type EquipmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: EquipmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const equipment = getEquipmentBySlug(slug);

  if (!equipment) {
    return {
      title: "Equipment Not Found | Etanworks",
    };
  }

  const description =
    equipment.overview.length > 160
      ? `${equipment.overview.substring(0, 157)}...`
      : equipment.overview;

  return {
    title: `${equipment.name} | Etanworks`,
    description,

    alternates: {
      canonical: `/equipment/${equipment.slug}`,
    },

    openGraph: {
      title: `${equipment.name} | Etanworks`,
      description,
      url: `https://etanworks.co.ke/equipment/${equipment.slug}`,
      siteName: "Etanworks",

      images: [
        {
          url: equipment.heroImage,
          width: 1200,
          height: 630,
          alt: equipment.name,
        },
      ],

      locale: "en_KE",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${equipment.name} | Etanworks`,
      description,
      images: [equipment.heroImage],
    },
  };
}

export default async function EquipmentPage({
  params,
}: EquipmentPageProps) {
  const { slug } = await params;

  const equipment = getEquipmentBySlug(slug);

  if (!equipment) {
    notFound();
  }

  const relatedEquipment = equipmentData
    .filter((item) => item.slug !== equipment.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <EquipmentHero
        name={equipment.name}
        category={equipment.category}
        heroImage={equipment.heroImage}
      />

      <EquipmentOverview
        name={equipment.name}
        overview={equipment.overview}
      />

      <EquipmentSpecs
        specifications={equipment.specifications}
      />

      <EquipmentApplications
        name={equipment.name}
        applications={equipment.applications}
      />

      <EquipmentGallery
        coverImage={equipment.coverImage}
        gallery={equipment.gallery}
        name={equipment.name}
      />

      {/* Related Equipment */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-5 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl sm:mb-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Our Fleet
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Related Equipment
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Explore other machines available for earthmoving, construction
              and infrastructure projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedEquipment.map((item) => (
              <Link
                key={item.id}
                href={`/equipment/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-950 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <Image
                    src={item.coverImage}
                    alt={item.name}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                      {item.category}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 p-5 sm:p-6">
                  <span className="text-sm font-bold text-white">
                    View Equipment
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-gray-300 transition-all duration-300 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-500" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                  Need Equipment?
                </p>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Let&apos;s discuss your project.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                Talk to Etanworks about equipment requirements for your next
                excavation, earthworks or construction project.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex w-fit items-center rounded-full bg-orange-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/20"
            >
              Request a Quote

              <span className="ml-3 text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}