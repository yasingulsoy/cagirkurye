import { site } from "@/lib/site";
import { services } from "@/lib/services";

// Google için yapısal veri (JSON-LD). Zengin sonuçlar ve yerel SEO'yu güçlendirir.
// LocalBusiness + WebSite site geneli (layout). FAQPage sayfa bazında eklenir (FaqJsonLd).
export function StructuredData() {
  const businessId = `${site.url}/#business`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: site.name,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    foundingDate: String(site.foundingYear),
    slogan: site.slogan,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: Object.values(site.social),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kurye Hizmetleri",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          serviceType: s.title,
          areaServed: site.city,
          provider: { "@id": businessId },
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "tr-TR",
    publisher: { "@id": businessId },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [localBusiness, website],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD güvenli bir şekilde serileştirilir
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
