import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://etanworks.co.ke/sitemap.xml",

    host: "https://etanworks.co.ke",
  };
}