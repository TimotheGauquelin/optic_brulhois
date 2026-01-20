import { MetadataRoute } from "next";
import siteData from "@/data/site-data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://optic-brulhois.fr";

  const brandPages = siteData.brands.map((brand) => ({
    url: `${baseUrl}/marques/${brand.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/marques`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...brandPages,
  ];
}

