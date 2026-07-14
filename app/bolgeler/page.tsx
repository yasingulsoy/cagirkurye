import type { Metadata } from "next";
import Link from "next/link";
import { regionGroups, regions } from "@/lib/regions";
import { site } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  PageHero,
  container,
} from "../components/site-ui";
import { ArrowRightIcon, MapPinIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri — İstanbul İlçeleri ve Çevre Bölgeler",
  description:
    "Çağır Kurye'nin hizmet verdiği bölgeler: İstanbul'un Adalar hariç tüm ilçeleri ve Gebze, Çayırova, Dilovası, Çorlu, Çerkezköy, Yalova. Moto kurye, acil kurye, aynı gün teslimat.",
  alternates: { canonical: "/bolgeler" },
  openGraph: {
    title: "Hizmet Bölgeleri | Çağır Kurye",
    description:
      "İstanbul'un tüm ilçeleri (Adalar hariç) ve çevre bölgelerde kurye hizmeti.",
    url: "/bolgeler",
  },
};

export default function BolgelerPage() {
  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs items={[{ name: "Bölgeler" }]} />

        <div className="mt-6">
          <PageHero
            eyebrow="Hizmet Bölgeleri"
            title="Geniş bir hizmet ağı"
            description={`${site.name}, ${site.city}'un Adalar hariç tüm ilçelerine ve Gebze, Çayırova, Dilovası, Çorlu, Çerkezköy, Yalova gibi çevre bölgelere kurye gönderir. Bölgeni seç, detayları gör.`}
          />
        </div>

        <div className="mt-12 space-y-12">
          {regionGroups.map((grup) => {
            const list = regions.filter((r) => r.side === grup.key);
            if (list.length === 0) return null;
            return (
              <div key={grup.key}>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                    {grup.label}
                  </h2>
                  <span className="text-xs text-muted">{list.length} bölge</span>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/bolgeler/${r.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-subtle">
                          <MapPinIcon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-semibold">
                            {r.name} Kurye
                          </span>
                          <span className="block text-xs text-muted">
                            {r.city !== site.city
                              ? `${r.city} · ${r.neighborhoods.length}+ semt`
                              : `${r.neighborhoods.length}+ semt`}
                          </span>
                        </span>
                      </span>
                      <ArrowRightIcon className="h-4 w-4 flex-none text-muted transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-sm text-muted">
          Bölgen listede yok mu? {site.name} çevre noktalara da hizmet verir —{" "}
          <Link
            href="/iletisim"
            className="font-medium text-foreground underline underline-offset-4"
          >
            bize ulaş
          </Link>
          , kapsamda olup olmadığını hemen öğren.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
