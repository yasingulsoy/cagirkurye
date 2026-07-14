import type { Metadata } from "next";
import { site } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  PageHero,
  container,
} from "../components/site-ui";
import { CheckIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Nasıl Çalışır?",
  description:
    "Çağır Kurye ile kurye çağırmak üç adımda tamam: çağrını oluştur, kurye kapına gelsin, teslimatı canlı takip et. Detayları buradan öğrenin.",
  alternates: { canonical: "/nasil-calisir" },
  openGraph: {
    title: "Nasıl Çalışır? | Çağır Kurye",
    description: "Üç adımda kurye çağırma süreci.",
    url: "/nasil-calisir",
  },
};

const adimlar = [
  {
    no: "01",
    title: "Çağrını oluştur",
    text: "Telefon ya da WhatsApp ile bize ulaş; alım ve teslim adresini, gönderinin türünü ilet. Hizmet tipini (standart, aynı gün, acil) seç ve fiyatı daha kurye yola çıkmadan net olarak öğren.",
    points: ["Telefon veya WhatsApp", "Adres ve gönderi bilgisi", "Şeffaf, net fiyat"],
  },
  {
    no: "02",
    title: "Kurye kapına gelsin",
    text: "Talebin oluştuğu an sana en yakın kurye görevlendirilir. Kurye dakikalar içinde alım adresine gelir, gönderini teslim alır ve teslim noktasına doğru yola çıkar.",
    points: ["En yakın kurye ataması", "Dakikalar içinde alım", "Doğrudan teslim rotası"],
  },
  {
    no: "03",
    title: "Teslimatı takip et",
    text: "Kurye yola çıktığı andan itibaren gönderini canlı olarak izlersin. Teslimat tamamlandığında anında bildirim ve teslim onayı alırsın; içini rahat tutarsın.",
    points: ["Canlı konum takibi", "Tahmini varış süresi", "Teslim onayı bildirimi"],
  },
];

export default function NasilCalisirPage() {
  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs items={[{ name: "Nasıl Çalışır" }]} />

        <div className="mt-6">
          <PageHero
            eyebrow="Nasıl Çalışır"
            title="Üç adımda kurye kapında"
            description={`Karmaşık form yok, uzun bekleme yok. ${site.name} ile kurye çağırmak bu kadar basit.`}
          />
        </div>

        <div className="mt-14 flex flex-col gap-10">
          {adimlar.map((a, i) => (
            <div
              key={a.no}
              className="grid gap-6 border-t border-border pt-10 md:grid-cols-[auto_1fr] md:gap-10"
            >
              <div className="text-6xl font-extrabold tracking-tight text-border">
                {a.no}
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{a.title}</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  {a.text}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {a.points.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center gap-1.5 text-sm font-medium"
                    >
                      <CheckIcon className="h-4 w-4" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              {i === adimlar.length - 1 && null}
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Hazırsan ilk adımı at." text="Çağrını oluştur, gerisini kuryeye bırak." />
    </>
  );
}
