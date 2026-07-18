import type { MetadataRoute } from "next";

const siteUrl = "https://sandeepthapamagar.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/experience`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
