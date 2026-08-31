import type { MetadataRoute } from "next";

const BASE = "https://shearthreads.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/shop", "/about", "/custom"].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
