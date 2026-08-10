import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getEquipmentBySlug } from "@/lib/equipment";

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

  return (
    <main>
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
        applications={equipment.applications}
      />

      <EquipmentGallery
        coverImage={equipment.coverImage}
        gallery={equipment.gallery}
        name={equipment.name}
      />
    </main>
  );
}