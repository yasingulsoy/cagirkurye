import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  FaqJsonLd,
  FaqList,
  PageHero,
  container,
} from "../components/site-ui";
import { Reveal } from "../components/Reveal";
import { FiyatHesaplama } from "../components/FiyatHesaplama";

export const metadata: Metadata = {
  title: "Kurye Fiyat Hesaplama — Anında Tahmini Ücret",
  description:
    "Kurye fiyat hesaplama aracı ile moto, aynı gün ve acil kurye için anında tahmini ücreti öğrenin. Mesafe ve gönderi tipine göre şeffaf fiyat.",
  alternates: { canonical: "/fiyat-hesaplama" },
  openGraph: {
    title: "Kurye Fiyat Hesaplama | Çağır Kurye",
    description: "Anında tahmini kurye ücreti — mesafe ve gönderiye göre.",
    url: "/fiyat-hesaplama",
  },
};

const faktorler = [
  {
    title: "Mesafe",
    text: "Alım ve teslim noktaları arasındaki mesafe arttıkça ücret de artar.",
  },
  {
    title: "Hizmet tipi",
    text: "Standart, aynı gün ve acil teslimat farklı önceliğe ve fiyata sahiptir.",
  },
  {
    title: "Gönderi boyutu",
    text: "Zarftan koliye; boyut ve ağırlık, gereken aracı ve ücreti etkiler.",
  },
  {
    title: "Zamanlama",
    text: "Gece, hafta sonu ve resmi tatiller gibi zaman dilimleri fiyata yansır.",
  },
];

const fiyatFaqs = [
  {
    question: "Kurye fiyat hesaplama aracı kesin fiyat veriyor mu?",
    answer:
      "Araç tahmini bir ücret gösterir. Kesin fiyat; gerçek alım–teslim adresleri, mesafe ve gönderi detayına göre çağrı sırasında netleşir. Kurye yola çıkmadan net tutarı onaylarsınız.",
  },
  {
    question: "Kurye ücreti neye göre belirlenir?",
    answer:
      "Ücret; mesafe, hizmet tipi (standart/aynı gün/acil), gönderinin boyutu ve gece/hafta sonu gibi zamanlama etkenlerinin birleşimiyle belirlenir.",
  },
  {
    question: "Gizli ek ücret var mı?",
    answer:
      "Hayır. Çağır Kurye şeffaf fiyatlandırma uygular; ücreti önceden görür, sürpriz ek ödemeyle karşılaşmazsınız.",
  },
];

export default function FiyatHesaplamaPage() {
  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs items={[{ name: "Fiyat Hesaplama" }]} />

        <div className="mt-6">
          <PageHero
            eyebrow="Fiyat Hesaplama"
            title="Kurye ücretini saniyeler içinde öğren"
            description={`Mesafe ve gönderi tipini seç, ${site.city} içi kurye için anında tahmini ücreti gör. Beğenirsen tek dokunuşla kurye çağır.`}
          />
        </div>

        <div className="mt-10">
          <FiyatHesaplama />
        </div>
      </section>

      {/* Ücret nasıl belirlenir */}
      <section className="border-t border-border bg-subtle py-16 sm:py-20">
        <div className={container}>
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Kurye ücreti neye göre belirlenir?
            </h2>
            <p className="mt-3 text-muted">
              Şeffaf fiyatlandırmayı önemsiyoruz. Ücreti etkileyen dört temel
              faktör:
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {faktorler.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{f.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted">
            Daha ayrıntılı bilgi için{" "}
            <Link
              href="/blog/moto-kurye-ucretleri"
              className="font-medium text-foreground underline underline-offset-4"
            >
              moto kurye ücretleri rehberimize
            </Link>{" "}
            göz atabilirsiniz.
          </p>
        </div>
      </section>

      {/* Fiyat SSS */}
      <section className={`${container} py-16 sm:py-20`}>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Fiyatlandırma hakkında sık sorulanlar
          </h2>
        </Reveal>
        <div className="mt-6">
          <FaqList items={fiyatFaqs} />
        </div>
      </section>

      <FaqJsonLd items={fiyatFaqs} />
      <CtaBand />
    </>
  );
}
