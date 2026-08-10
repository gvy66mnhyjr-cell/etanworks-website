import portfolioData from "@/data/portfolioData";

export function getAllProjects() {
  return portfolioData;
}

export function getProjectBySlug(slug: string) {
  return portfolioData.find((project) => project.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 3) {
  return portfolioData
    .filter((project) => project.slug !== currentSlug)
    .slice(0, limit);
}