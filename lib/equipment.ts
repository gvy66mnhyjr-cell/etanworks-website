import equipmentData, { Equipment } from "@/data/equipmentData";

export function getAllEquipment(): Equipment[] {
  return equipmentData;
}

export function getEquipmentBySlug(
  slug: string
): Equipment | undefined {
  return equipmentData.find(
    (equipment) => equipment.slug === slug
  );
}

export function getRelatedEquipment(
  currentSlug: string
): Equipment[] {
  return equipmentData.filter(
    (equipment) => equipment.slug !== currentSlug
  );
}