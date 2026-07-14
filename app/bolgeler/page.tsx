import type { Metadata } from "next";
import Link from "next/link";
import { regions } from "@/lib/regions";
import { site } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  PageHero,
  container,
} from "../components/site-ui";
import { ArrowRightIcon, MapPinIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri — İstanbul İlçeleri",
  description:
    "Çağır Kurye'nin İstanbul'da hizmet verdiği ilçeler. Kadıköy, Beşiktaş, Şişli ve daha fazlasında moto kurye, acil kurye ve aynı gün teslimat.",
  alternates: { canonical: "/bolgeler" },
  openGraph: {
    title: "Hizmet Bölgeleri | Çağır Kurye",
    description: "İstanbul ilçelerinde şehir içi kurye hizmeti.",
    url: "/bolgeler",
  },
};

export default function BolgelerPage() {
  const yakalar = ["Avrupa Yakası", "Anadolu Yakası"];

  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs items={[{ name: "Bölgeler" }]} />

        <div className="mt-6">
          <PageHero
            eyebrow="Hizmet Bölgeleri"
            title="İstanbul'un her ilçesinde yanındayız"
            description={`${site.name}, İstanbul'un iki yakasındaki ilçelere şehir içi moto kurye, acil kurye ve aynı gün teslimat hizmeti sunar. Bölgeni seç, detayları gör.`}
          />
        </div>

        <div className="mt-12 space-y-10">
          {yakalar.map((yaka) => {
            const list = regions.filter((r) => r.side === yaka);
            if (list.length === 0) return null;
            return (
              <div key={yaka}>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                  {yaka}
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/bolgeler/${r.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-subtle">
                          <MapPinIcon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-semibold">
                            {r.name} Kurye
                          </span>
                          <span className="block text-xs text-muted">
                            {r.neighborhoods.length}+ semt
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

        <p className="mt-10 text-sm text-muted">
          Bölgen listede yok mu? {site.name} çevre ilçelere de hizmet verir —{" "}
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
