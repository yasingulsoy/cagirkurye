import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegion, regions } from "@/lib/regions";
import { services } from "@/lib/services";
import { site, telHref, waHref } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  container,
} from "../../components/site-ui";
import {
  ArrowRightIcon,
  CheckIcon,
  MapPinIcon,
  PhoneIcon,
  ServiceGlyph,
  WhatsappIcon,
} from "../../components/icons";

type Params = { ilce: string };

export function generateStaticParams(): Params[] {
  return regions.map((r) => ({ ilce: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { ilce } = await params;
  const region = getRegion(ilce);
  if (!region) return {};
  return {
    title: `${region.name} Kurye — Moto ve Acil Kurye Hizmeti`,
    description: `${region.name} kurye hizmeti: ${region.name} ve çevresinde moto kurye, acil kurye ve aynı gün teslimat. 7/24 hızlı kurye için hemen çağırın.`,
    alternates: { canonical: `/bolgeler/${region.slug}` },
    openGraph: {
      title: `${region.name} Kurye | ${site.name}`,
      description: `${region.name}'de aynı gün moto ve acil kurye hizmeti.`,
      url: `/bolgeler/${region.slug}`,
    },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { ilce } = await params;
  const region = getRegion(ilce);
  if (!region) notFound();

  const nearby = region.nearby
    .map((s) => getRegion(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Kurye Hizmeti",
    name: `${region.name} Kurye`,
    description: region.intro,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${region.name}, ${region.city}`,
    },
    provider: { "@id": `${site.url}/#business` },
    url: `${site.url}/bolgeler/${region.slug}`,
  };

  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs
          items={[
            { name: "Bölgeler", href: "/bolgeler" },
            { name: region.name },
          ]}
        />

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
              <MapPinIcon className="h-3.5 w-3.5" />
              {region.city} · {region.side}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {region.name} Kurye
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              {region.intro}
            </p>

            {/* Hizmetler */}
            <h2 className="mt-12 text-xl font-bold tracking-tight">
              {region.name}&apos;de sunduğumuz kurye hizmetleri
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-foreground"
                >
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-subtle">
                    <ServiceGlyph name={s.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {s.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-5 text-muted">
                      {s.short}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            {/* Semtler */}
            <h2 className="mt-12 text-xl font-bold tracking-tight">
              {region.name}&apos;de hizmet verdiğimiz semtler
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {region.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
                >
                  <CheckIcon className="h-4 w-4 text-muted" />
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Yan çağrı kutusu */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-lg font-bold">{region.name}&apos;de kurye çağır</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {region.name} ve çevresinde dakikalar içinde yola çıkan kurye.
                Fiyatı daha çağırmadan öğren.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-subtle"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  WhatsApp&apos;tan Yaz
                </a>
              </div>
            </div>

            {/* Yakın ilçeler */}
            {nearby.length > 0 && (
              <div className="mt-6 rounded-2xl border border-border p-6">
                <p className="text-sm font-semibold">Yakın bölgeler</p>
                <ul className="mt-4 space-y-1">
                  {nearby.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/bolgeler/${r.slug}`}
                        className="group inline-flex items-center gap-1.5 py-1 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        <MapPinIcon className="h-3.5 w-3.5" />
                        {r.name} Kurye
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/bolgeler"
                      className="group inline-flex items-center gap-1.5 py-1 text-sm font-semibold"
                    >
                      Tüm bölgeler
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <CtaBand title={`${region.name}'de kuryeye mi ihtiyacın var?`} />
    </>
  );
}
