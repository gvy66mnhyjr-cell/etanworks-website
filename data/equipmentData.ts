export type Equipment = {
  id: number;
  slug: string;
  name: string;
  category: string;

  heroImage: string;
  coverImage: string;
  gallery: string[];

  overview: string;

  specifications: {
    operatingWeight: string;
    bucketCapacity: string;
    engine: string;
    maxDigDepth: string;
  };

  applications: string[];
};

const equipmentData: Equipment[] = [
  {
    id: 1,
    slug: "cat-320d2",
    name: "CAT 320D2",
    category: "Hydraulic Excavator",

    heroImage: "/images/equipment/cat-320d2/hero.jpg",
    coverImage: "/images/equipment/cat-320d2/cover.jpg",

    gallery: [
      "/images/equipment/cat-320d2/1.jpg",
      "/images/equipment/cat-320d2/2.jpg",
    ],

    overview:
      "The CAT 320D2 is a dependable hydraulic excavator engineered for heavy-duty excavation, bulk earthworks, trenching and site preparation. It combines fuel efficiency with powerful digging performance, making it an ideal choice for infrastructure and construction projects.",

    specifications: {
      operatingWeight: "22 Ton",
      bucketCapacity: "1.0 m³",
      engine: "CAT C7.1 Diesel",
      maxDigDepth: "6.70 m",
    },

    applications: [
      "Bulk Earthworks",
      "Road Construction",
      "Foundation Excavation",
      "Site Clearance",
      "Utility Trenching",
    ],
  },

  {
    id: 2,
    slug: "cat-320d3",
    name: "CAT 320D3",
    category: "Hydraulic Excavator",

    heroImage: "/images/equipment/cat-320d3/hero.jpeg",
    coverImage: "/images/equipment/cat-320d3/hero.jpeg",

    gallery: [],

    overview:
      "The CAT 320D3 offers exceptional digging performance, durability and fuel efficiency for demanding earthmoving operations. Designed for productivity, it excels on road construction, commercial developments and infrastructure projects.",

    specifications: {
      operatingWeight: "22 Ton",
      bucketCapacity: "1.0 m³",
      engine: "CAT C7.1 Diesel",
      maxDigDepth: "6.70 m",
    },

    applications: [
      "Bulk Earthworks",
      "Road Construction",
      "Foundation Excavation",
      "Pipeline Trenching",
      "Site Preparation",
    ],
  },

  {
  id: 3,
  slug: "hyundai-hx220",
  name: "Hyundai HX220",
  category: "Hydraulic Excavator",

  heroImage: "/images/equipment/hyundai-hx220/hero.jpg",
  coverImage: "/images/equipment/hyundai-hx220/hero.jpg",

  gallery: [],

  overview:
    "The Hyundai HX220 is a high-performance hydraulic excavator built for efficiency, reliability and precision. It delivers excellent fuel economy while handling demanding excavation and earthmoving operations with ease.",

  specifications: {
    operatingWeight: "22.1 Ton",
    bucketCapacity: "1.05 m³",
    engine: "Cummins B6.7",
    maxDigDepth: "6.73 m",
  },

  applications: [
    "Bulk Earthworks",
    "Road Construction",
    "Foundation Excavation",
    "Pipeline Installation",
    "Site Preparation",
  ],
   },

   {
  id: 4,
  slug: "hitachi-zx200",
  name: "Hitachi ZX200",
  category: "Hydraulic Excavator",

  heroImage: "/images/equipment/hitachi-zx200/hero.jpg",
  coverImage: "/images/equipment/hitachi-zx200/hero.jpg",

  gallery: [],

  overview:
    "The Hitachi ZX200 combines exceptional digging force, fuel efficiency and long-term durability, making it a dependable machine for civil engineering, infrastructure and commercial construction projects.",

  specifications: {
    operatingWeight: "20.5 Ton",
    bucketCapacity: "0.91 m³",
    engine: "Isuzu AI-4HK1X",
    maxDigDepth: "6.67 m",
  },

  applications: [
    "Bulk Excavation",
    "Road Construction",
    "Drainage Works",
    "Utility Trenching",
    "Commercial Developments",
  ],
   },

   {
  id: 5,
  slug: "liebherr-r920",
  name: "Liebherr R920",
  category: "Hydraulic Excavator",

  heroImage: "/images/equipment/liebherr-r920/hero.jpg",
  coverImage: "/images/equipment/liebherr-r920/hero.jpg",

  gallery: [],

  overview:
    "The Liebherr R920 is a robust hydraulic excavator engineered for maximum productivity in earthmoving, infrastructure development and commercial construction. Its powerful hydraulic system, fuel-efficient engine and precision controls make it ideal for demanding job sites.",

  specifications: {
    operatingWeight: "21.8 Ton",
    bucketCapacity: "1.0 m³",
    engine: "Liebherr D924",
    maxDigDepth: "6.60 m",
  },

  applications: [
    "Bulk Earthworks",
    "Road Construction",
    "Foundation Excavation",
    "Rock Excavation",
    "Site Preparation",
  ],
  },

  {
  id: 6,
  slug: "tata-tipper",
  name: "Tata Tipper",
  category: "Tipper Truck",

  heroImage: "/images/equipment/tata-tipper/hero.jpg",
  coverImage: "/images/equipment/tata-tipper/hero.jpg",

  gallery: [],

  overview:
    "The Tata Tipper is built for efficient transportation of excavated materials, aggregates, murram and construction debris. Its rugged design, high payload capacity and reliability make it an essential part of large-scale earthworks and infrastructure projects.",

  specifications: {
    operatingWeight: "25 Ton GVW",
    bucketCapacity: "16 m³ Body Capacity",
    engine: "Cummins ISBe 6.7L Diesel",
    maxDigDepth: "N/A",
  },

  applications: [
    "Material Haulage",
    "Bulk Earthworks",
    "Road Construction",
    "Quarry Operations",
    "Construction Logistics",
  ],
   },
];

export default equipmentData;