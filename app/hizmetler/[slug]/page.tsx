import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { site, telHref, waHref } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  FaqJsonLd,
  FaqList,
  container,
} from "../../components/site-ui";
import {
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  ServiceGlyph,
  WhatsappIcon,
} from "../../components/icons";

type Params = { slug: string };

// 6 hizmet sayfasını build sırasında statik üret
export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.metaDescription,
      url: `/hizmetler/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs
          items={[
            { name: "Hizmetler", href: "/hizmetler" },
            { name: service.title },
          ]}
        />

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* Sol: içerik */}
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-fg">
              <ServiceGlyph name={service.icon} className="h-7 w-7" />
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              {service.intro}
            </p>

            {/* Özellikler */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {service.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <h2 className="text-base font-semibold">{f.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{f.text}</p>
                </div>
              ))}
            </div>

            {/* Kullanım alanları */}
            <div className="mt-10">
              <h2 className="text-xl font-bold tracking-tight">
                {service.title} nerelerde kullanılır?
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-2.5 text-sm">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none" />
                    <span className="leading-6">{u}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hizmete özel SSS */}
            <div className="mt-12">
              <h2 className="text-xl font-bold tracking-tight">
                {service.title} hakkında sık sorulanlar
              </h2>
              <div className="mt-4">
                <FaqList items={service.faqs} />
              </div>
            </div>
          </div>

          {/* Sağ: yapışkan çağrı kutusu */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm text-muted">Hızlı & şeffaf</p>
              <p className="mt-1 text-lg font-bold">
                {service.title} için kurye çağır
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {site.city} içinde dakikalar içinde yola çıkan kurye. Fiyatı daha
                çağırmadan öğren.
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

            {/* Diğer hizmetler */}
            <div className="mt-6 rounded-2xl border border-border p-6">
              <p className="text-sm font-semibold">Diğer hizmetler</p>
              <ul className="mt-4 space-y-1">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/hizmetler/${o.slug}`}
                      className="group inline-flex items-center gap-1.5 py-1 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FaqJsonLd items={service.faqs} />
      <CtaBand title={`${service.title} mi lazım? Hemen çağır.`} />
    </>
  );
}
