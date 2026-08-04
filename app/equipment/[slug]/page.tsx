import { notFound } from "next/navigation";

import {
  getEquipmentBySlug,
  getRelatedEquipment,
} from "@/lib/equipment";

import EquipmentHero from "@/components/equipment/EquipmentHero";
import EquipmentOverview from "@/components/equipment/EquipmentOverview";
import EquipmentSpecs from "@/components/equipment/EquipmentSpecs";
import EquipmentApplications from "@/components/equipment/EquipmentApplications";
import EquipmentGallery from "@/components/equipment/EquipmentGallery";
import RelatedEquipment from "@/components/equipment/RelatedEquipment";
import CallToAction from "@/components/CallToAction";

import AnimateIn from "@/components/AnimateIn";

type EquipmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EquipmentPage({
  params,
}: EquipmentPageProps) {
  const { slug } = await params;

  const equipment = getEquipmentBySlug(slug);

  if (!equipment) {
    notFound();
  }

  const relatedEquipment = getRelatedEquipment(slug);

  return (
    <main className="min-h-screen bg-white">
      <EquipmentHero
        name={equipment.name}
        category={equipment.category}
        heroImage={equipment.heroImage}
      />

      <AnimateIn>
        <EquipmentOverview
          name={equipment.name}
          overview={equipment.overview}
        />
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <EquipmentSpecs
          specifications={equipment.specifications}
        />
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <EquipmentApplications
          applications={equipment.applications}
        />
      </AnimateIn>

      <AnimateIn delay={0.3}>
        <EquipmentGallery
          coverImage={equipment.coverImage}
          gallery={equipment.gallery}
          name={equipment.name}
        />
      </AnimateIn>

      <AnimateIn delay={0.4}>
        <RelatedEquipment
          equipment={relatedEquipment}
        />
      </AnimateIn>

      <AnimateIn delay={0.5}>
        <CallToAction
          title={`Need the ${equipment.name} for Your Next Project?`}
          description="Our modern equipment fleet and experienced operators are ready to support excavation, earthworks, site clearance and infrastructure projects across Kenya."
        />
      </AnimateIn>
    </main>
  );
}