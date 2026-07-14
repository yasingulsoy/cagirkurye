import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  PageHero,
  container,
} from "../components/site-ui";
import {
  ArrowRightIcon,
  BoltIcon,
  RouteIcon,
  ShieldIcon,
  WalletIcon,
} from "../components/icons";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Çağır Kurye; İstanbul'da aynı gün moto kurye ve acil teslimat sunan, hız ve güveni bir araya getiren şehir içi kurye çözümüdür. Bizi yakından tanıyın.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | Çağır Kurye",
    description: "Çağır Kurye kimdir ve şehir içi kuryede neyi farklı yapar.",
    url: "/hakkimizda",
  },
};

const degerler = [
  {
    icon: BoltIcon,
    title: "Hız",
    text: "Her gönderiyi mümkün olan en kısa sürede teslim etmeyi iş yapış biçimimizin merkezine koyarız.",
  },
  {
    icon: ShieldIcon,
    title: "Güven",
    text: "Gönderilerini bize emanet edenlerin içi rahat olsun diye sigortalı ve özenli taşırız.",
  },
  {
    icon: RouteIcon,
    title: "Şeffaflık",
    text: "Fiyatı önceden gösterir, süreci canlı takip ettirir; sürprizsiz bir deneyim sunarız.",
  },
  {
    icon: WalletIcon,
    title: "Adil Fiyat",
    text: "Hızlı hizmeti erişilebilir tutar; gizli ücret olmadan net fiyatlandırma yaparız.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs items={[{ name: "Hakkımızda" }]} />

        <div className="mt-6">
          <PageHero
            eyebrow="Hakkımızda"
            title="Şehir içi kuryede hız ve güven bir arada"
            description={`${site.name}, ${site.city}'da aynı gün moto kurye ve acil teslimat ihtiyacını tek bir çağrıya indirger.`}
          />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5 text-base leading-7 text-muted">
            <p>
              {site.name}, gönderilerin bir yerden bir yere ulaşmasının hızlı,
              güvenli ve zahmetsiz olması gerektiğine inanan bir şehir içi kurye
              hizmetidir. Acil bir evraktan e-ticaret siparişine, numuneden
              kişisel bir pakete kadar her gönderiyi aynı özenle taşırız.
            </p>
            <p>
              Amacımız basit: sen kurye çağır, gerisini biz halledelim. Talebini
              oluşturduğun an sana en yakın motorlu kuryeyi görevlendirir,
              gönderini dakikalar içinde yola çıkarır ve teslimatı baştan sona
              canlı takip ettiririz. Fiyatı önceden gösterir, sürpriz ücretle
              karşılaşmamanı sağlarız.
            </p>
            <p>
              {site.city}&apos;un tüm ilçelerinde 7 gün 24 saat hizmet
              veriyoruz. Bireysel gönderilerin yanı sıra düzenli sevkiyatı olan
              işletmelere özel{" "}
              <Link
                href="/hizmetler/kurumsal-kurye"
                className="font-medium text-foreground underline underline-offset-4"
              >
                kurumsal kurye
              </Link>{" "}
              çözümleri sunuyoruz.
            </p>
          </div>

          {/* Öne çıkanlar kutusu */}
          <aside className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-semibold">Kısaca {site.name}</p>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm text-muted">Hizmet alanı</dt>
                <dd className="text-base font-semibold">
                  {site.city} (tüm ilçeler)
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Çalışma saatleri</dt>
                <dd className="text-base font-semibold">7 gün 24 saat</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Odak</dt>
                <dd className="text-base font-semibold">
                  Aynı gün & acil teslimat
                </dd>
              </div>
            </dl>
            <Link
              href="/hizmetler"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              Tüm hizmetleri gör
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>

        {/* Değerler */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">Değerlerimiz</h2>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {degerler.map((d) => (
              <div key={d.title} className="bg-background p-7">
                <d.icon className="h-7 w-7" />
                <h3 className="mt-4 text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
