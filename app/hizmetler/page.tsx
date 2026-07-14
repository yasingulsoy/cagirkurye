import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  PageHero,
  container,
} from "../components/site-ui";
import { ArrowRightIcon, ServiceGlyph } from "../components/icons";

export const metadata: Metadata = {
  title: "Kurye Hizmetleri",
  description:
    "Moto kurye, acil kurye, aynı gün teslimat, paket & koli, kurumsal ve e-ticaret kurye. İhtiyacınıza uygun kurye hizmetini seçin, hemen çağırın.",
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Kurye Hizmetleri | Çağır Kurye",
    description:
      "Moto, acil, aynı gün, paket, kurumsal ve e-ticaret kurye hizmetleri.",
    url: "/hizmetler",
  },
};

export default function HizmetlerPage() {
  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs items={[{ name: "Hizmetler" }]} />

        <div className="mt-6">
          <PageHero
            eyebrow="Hizmetler"
            title="Her gönderi için doğru kurye çözümü"
            description={`Acil evraktan kurumsal sevkiyata kadar ${site.city} içinde ihtiyacın olan kurye hizmetini seç, gerisini ${site.name} halletsin.`}
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-subtle">
                <ServiceGlyph name={s.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                {s.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                Detaylar
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
