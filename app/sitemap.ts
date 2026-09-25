import type { MetadataRoute } from "next";
import { portfolioCategories } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://raresphotographer.com";

  const portfolioPages: MetadataRoute.Sitemap = portfolioCategories.map(
    (category) => ({
      url: `${baseUrl}/portfolio/${category.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...portfolioPages,
  ];
}