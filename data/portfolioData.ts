export type Project = {
  id: number;
  slug: string;
  name: string;
  location: string;
  status: "Completed" | "Ongoing";
  completionDate: string;
  heroImage: string;
  coverImage: string;
  gallery: string[];
  overview: string;
  services: string[];
  equipment: string[];
};

const portfolioData: Project[] = [
  {
    id: 1,
    slug: "imaara-daima-earthworks",
    name: "Imaara Daima Earthworks",
    location: "Nairobi, Kenya",
    status: "Ongoing",
    completionDate: "In Progress",

    heroImage: "/images/portfolio/imaara-daima/hero.jpeg",
    coverImage: "/images/portfolio/imaara-daima/cover.jpeg",

    gallery: [
     "/images/portfolio/imaara-daima/gallery-1.jpeg",
     "/images/portfolio/imaara-daima/gallery-2.jpeg",
     "/images/portfolio/imaara-daima/gallery-3.jpeg",
     "/images/portfolio/imaara-daima/gallery-4.jpeg",
     "/images/portfolio/imaara-daima/gallery-5.jpeg",
     "/images/portfolio/imaara-daima/gallery-6.jpeg",
     "/images/portfolio/imaara-daima/gallery-7.jpeg",
     "/images/portfolio/imaara-daima/gallery-8.jpeg",
     "/images/portfolio/imaara-daima/gallery-9.jpeg",
    ],

    overview:
      "Bulk excavation and site preparation works for a large-scale residential development, including earthmoving, grading, and haulage operations.",

    services: [
      "Bulk Excavation",
      "Site Clearance",
      "Earthmoving",
      "Haulage",
      "Site Grading",
    ],

    equipment: [
      "CAT 320D2",
      "CAT 320D3",
      "Liebherr R920",
      "TATA Tippers",
    ],
  },

  {
    id: 2,
    slug: "sepu-affordable-housing",

    name: "SEPU Affordable Housing Project",

    location: "Konza, Kenya",

    status: "Completed",

    completionDate: "Completed",

    heroImage: "/images/portfolio/sepu/hero.jpeg",
    coverImage: "/images/portfolio/sepu/cover.jpeg",

    gallery: [
     "/images/portfolio/sepu/gallery-1.jpeg",
     "/images/portfolio/sepu/gallery-2.jpeg",
     "/images/portfolio/sepu/gallery-3.jpg",
     "/images/portfolio/sepu/gallery-4.jpeg",
     "/images/portfolio/sepu/gallery-5.jpeg",
     "/images/portfolio/sepu/gallery-6.jpeg",
     "/images/portfolio/sepu/gallery-8.jpeg",
     "/images/portfolio/sepu/gallery-9.jpeg",
     "/images/portfolio/sepu/gallery-10.jpg",
    ],

    overview:
      "Construction support works involving excavation, site preparation, and earthworks for affordable housing infrastructure.",

    services: [
      "Excavation",
      "Foundation Preparation",
      "Material Haulage",
      "Site Leveling",
    ],

    equipment: [
      "CAT 320D2",
      "Hitachi ZX200",
      "Hyundai Excavator",
    ],
  },

  {
    id: 3,

    slug: "private-residential-development",

    name: "Private Residential Development",

    location: "Kenya",

    status: "Completed",

    completionDate: "Completed",

    heroImage: "/images/portfolio/private/hero.jpeg",
    coverImage: "/images/portfolio/private/cover.jpeg",

    gallery: [
    "/images/portfolio/private/gallery-1.JPG",
    "/images/portfolio/private/gallery-2.JPG",
    "/images/portfolio/private/gallery-3.JPG",
    "/images/portfolio/private/gallery-4.jpeg",
    ],

    overview:
      "Excavation and site preparation for a high-end residential home, including foundation excavation and final grading.",

    services: [
      "Foundation Excavation",
      "Site Clearance",
      "Final Grading",
    ],

    equipment: [
      "CAT 320D3",
      "JCB",
    ],
  },
];

export default portfolioData;