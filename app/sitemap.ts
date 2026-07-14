import type { MetadataRoute } from "next";
import { site, staticPages } from "@/lib/site";
import { services } from "@/lib/services";
import { posts } from "@/lib/blog";
import { regions } from "@/lib/regions";

// Tüm sayfalar staticPages (lib/site) ve services (lib/services) verisinden
// otomatik türetilir; yeni sayfa eklendiğinde sitemap kendiliğinden güncellenir.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: now,
    changeFrequency: p.path === "/" ? "weekly" : "monthly",
    priority:
      p.path === "/"
        ? 1
        : p.path === "/hizmetler" || p.path === "/fiyat-hesaplama"
          ? 0.9
          : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const regionEntries: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${site.url}/bolgeler/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...blogEntries,
    ...regionEntries,
  ];
}
