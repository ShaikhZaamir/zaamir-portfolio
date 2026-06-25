import { MetadataRoute } from "next";

const BASE_URL = "https://zaamir.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}