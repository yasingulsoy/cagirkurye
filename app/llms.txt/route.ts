import { services } from "@/lib/services";
import { site, staticPages } from "@/lib/site";
import { posts } from "@/lib/blog";
import { regions } from "@/lib/regions";

// /llms.txt — llmstxt.org standardı. AI/LLM arama motorlarının (ChatGPT,
// Perplexity, Claude, Gemini) siteyi doğru anlaması için özet + bağlantı haritası.
// İçerik lib verilerinden otomatik üretilir; site büyüdükçe güncel kalır.

export const dynamic = "force-static";

function abs(path: string) {
  return `${site.url}${path}`;
}

export function GET() {
  const servicePages = staticPages.filter(
    (p) =>
      p.path !== "/hizmetler" && p.path !== "/blog" && p.path !== "/bolgeler",
  );

  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name}, ${site.city} başta olmak üzere ${site.areaServed
      .filter((c) => c !== site.city)
      .join(", ")} illerinde 7/24 talep üzerine (on-demand) şehir içi kurye hizmeti verir. Ana hizmetler: moto kurye, acil kurye, aynı gün teslimat, paket & koli kurye, kurumsal kurye ve e-ticaret teslimat.`,
    "",
    "## Hizmetler",
    ...services.map((s) => `- [${s.title}](${abs(`/hizmetler/${s.slug}`)}): ${s.short}`),
    "",
    "## Sayfalar",
    ...servicePages.map((p) => `- [${p.title}](${abs(p.path)}): ${p.desc}`),
    "",
    "## Blog",
    ...posts.map(
      (p) => `- [${p.title}](${abs(`/blog/${p.slug}`)}): ${p.excerpt}`,
    ),
    "",
    "## Hizmet Bölgeleri",
    ...regions.map(
      (r) =>
        `- [${r.name} Kurye](${abs(`/bolgeler/${r.slug}`)}): ${r.name} ve çevresinde moto, acil ve aynı gün kurye.`,
    ),
    "",
    "## İletişim",
    `- Telefon: ${site.phoneDisplay}`,
    `- WhatsApp: https://wa.me/${site.whatsapp}`,
    `- E-posta: ${site.email}`,
    `- Hizmet bölgeleri: ${site.areaServed.join(", ")}`,
    `- Çalışma saatleri: 7 gün 24 saat`,
    "",
    "## Notlar",
    "- Tüm hizmetler şehir içi ve talep üzerinedir; fiyat mesafe, gönderi boyutu ve hizmet tipine göre çağrı anında belirlenir.",
    "- Yasa dışı ve tehlikeli maddeler taşınmaz.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
