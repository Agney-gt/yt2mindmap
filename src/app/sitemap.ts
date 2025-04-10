import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://yt2mindmap.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: "https://yt2mindmap.com/features",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://yt2mindmap.com/pricing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://yt2mindmap.com/docs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];
}