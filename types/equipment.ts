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