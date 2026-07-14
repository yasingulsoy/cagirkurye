import Link from "next/link";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faq";
import { regions } from "@/lib/regions";
import { site, telHref, waHref } from "@/lib/site";
import { CtaBand, FaqJsonLd, FaqList } from "./components/site-ui";
import { Reveal, StaggerGroup, StaggerItem } from "./components/Reveal";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  ClockIcon,
  HeadsetIcon,
  MapPinIcon,
  PhoneIcon,
  RouteIcon,
  ServiceGlyph,
  ShieldIcon,
  StarIcon,
  WalletIcon,
  WhatsappIcon,
} from "./components/icons";

const container = "mx-auto max-w-6xl px-4 sm:px-6";

const nedenBiz = [
  {
    icon: BoltIcon,
    title: "Şimşek Hızında",
    text: "Çağrının hemen ardından en yakın moto kurye yola çıkar; gönderin dakikalar içinde teslim edilir.",
  },
  {
    icon: RouteIcon,
    title: "Canlı Takip",
    text: "Kuryenin konumunu ve tahmini varış süresini baştan sona anlık olarak izlersin.",
  },
  {
    icon: ShieldIcon,
    title: "Güvenli & Sigortalı",
    text: "Gönderilerin özenle taşınır; değerli paketlerin sigorta güvencesiyle yola çıkar.",
  },
  {
    icon: ClockIcon,
    title: "7/24 Hizmet",
    text: "Hafta içi, hafta sonu ve tatil fark etmeksizin gece gündüz kurye çağırabilirsin.",
  },
  {
    icon: WalletIcon,
    title: "Şeffaf & Uygun Fiyat",
    text: "Ücreti daha çağırmadan net görürsün; gizli ek ücret ya da sürpriz ödeme olmaz.",
  },
  {
    icon: HeadsetIcon,
    title: "Gerçek Destek",
    text: "İhtiyaç anında sana gerçekten yardımcı olan bir müşteri destek ekibiyle konuşursun.",
  },
];

const adimlar = [
  {
    no: "01",
    title: "Çağrını oluştur",
    text: "Telefon ya da WhatsApp ile bize ulaş, alım ve teslim adresini ilet. Fiyatı anında öğren.",
  },
  {
    no: "02",
    title: "Kurye kapına gelsin",
    text: "En yakın moto kurye dakikalar içinde adresine gelir ve gönderini teslim alır.",
  },
  {
    no: "03",
    title: "Teslimatı takip et",
    text: "Gönderini canlı izle; teslimat tamamlandığında onay bildirimini anında al.",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className={`${container} grid items-center gap-12 pt-6 pb-16 sm:pt-8 sm:pb-20 lg:grid-cols-2 lg:pt-10 lg:pb-28`}
        >
          <Reveal>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Aynı gün moto kurye ve acil teslimat —{" "}
              <span className="text-muted">bir çağrıda kapında.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              {site.name} ile {site.city} içinde evrak, paket ve kolilerini
              dakikalar içinde gönder. Hızlı, güvenli ve uygun fiyatlı şehir içi
              kurye çözümü — istediğin an, istediğin yere.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-fg transition-opacity hover:opacity-90"
              >
                <PhoneIcon className="h-5 w-5" />
                Hemen Kurye Çağır
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-subtle"
              >
                <WhatsappIcon className="h-5 w-5" />
                WhatsApp&apos;tan Yaz
              </a>
            </div>

            <Link
              href="/fiyat-hesaplama"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-foreground"
            >
              Önce fiyat hesapla
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Güven çubuğu */}
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {[
                "Canlı takip",
                "Sigortalı gönderi",
                "Şeffaf fiyat",
                "Dakikalar içinde",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Canlı takip kartı (görsel) */}
          <Reveal className="relative lg:justify-self-end" delay={0.15}>
            <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-foreground" />
                  </span>
                  Kurye yolda
                </span>
                <span className="rounded-full bg-subtle px-3 py-1 text-xs font-semibold">
                  ~18 dk
                </span>
              </div>

              {/* Rota */}
              <div className="mt-6 flex gap-4">
                <div className="flex flex-col items-center pt-1">
                  <span className="h-3 w-3 rounded-full border-2 border-foreground" />
                  <span className="my-1 h-16 w-0.5 border-l-2 border-dashed border-border" />
                  <span className="h-3 w-3 rounded-full bg-foreground" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">
                      Alım
                    </p>
                    <p className="text-sm font-medium">Levent, Beşiktaş</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">
                      Teslim
                    </p>
                    <p className="text-sm font-medium">Kozyatağı, Kadıköy</p>
                  </div>
                </div>
              </div>

              {/* Kurye */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-fg">
                  MK
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Moto Kurye</p>
                  <p className="inline-flex items-center gap-1 text-xs text-muted">
                    <StarIcon className="h-3.5 w-3.5" />
                    4.9 · 1.2k teslimat
                  </p>
                </div>
                <a
                  href={telHref}
                  aria-label="Kuryeyi ara"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-subtle"
                >
                  <PhoneIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= HİZMETLER ================= */}
      <section id="hizmetler" className="py-20 sm:py-24">
        <div className={container}>
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Hizmetler
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Her gönderi için doğru kurye çözümü
            </h2>
            <p className="mt-4 text-lg text-muted">
              Acil evraktan kurumsal sevkiyata kadar; ihtiyacın olan kurye
              hizmetini seç, gerisini {site.name} halletsin.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-subtle">
                    <ServiceGlyph name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    Detaylar
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-8">
            <Link
              href="/hizmetler"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              Tüm hizmetleri gör
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= NASIL ÇALIŞIR ================= */}
      <section
        id="nasil-calisir"
        className="border-y border-border bg-subtle py-20 sm:py-24"
      >
        <div className={container}>
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Nasıl Çalışır
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Üç adımda kurye kapında
            </h2>
            <p className="mt-4 text-lg text-muted">
              Karmaşık form yok, uzun bekleme yok. Kurye çağırmak bu kadar basit.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-3">
            {adimlar.map((a) => (
              <StaggerItem key={a.no} className="relative">
                <span className="text-5xl font-extrabold tracking-tight text-border">
                  {a.no}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{a.text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ================= NEDEN BİZ ================= */}
      <section id="neden-biz" className="py-20 sm:py-24">
        <div className={container}>
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Neden {site.name}?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Hız, güven ve şeffaflık bir arada
            </h2>
            <p className="mt-4 text-lg text-muted">
              Gönderini emanet ederken içinin rahat olması için gereken her şey.
            </p>
          </Reveal>

          <Reveal className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {nedenBiz.map((f) => (
              <div key={f.title} className="bg-background p-7">
                <f.icon className="h-7 w-7" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{f.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ================= BÖLGELER ================= */}
      <section
        id="bolgeler"
        className="border-y border-border bg-subtle py-20 sm:py-24"
      >
        <div className={container}>
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Hizmet Bölgeleri
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {site.city}&apos;un her yerinde yanındayız
            </h2>
            <p className="mt-4 text-lg text-muted">
              {site.city} ilçelerinin tamamına ve çevre illere şehir içi kurye
              hizmeti sunuyoruz. Bölgen listede yoksa bile bir çağrı uzağındayız.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap gap-2.5">
            {regions.map((r) => (
              <Link
                key={r.slug}
                href={`/bolgeler/${r.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-foreground"
              >
                <MapPinIcon className="h-4 w-4 text-muted" />
                {r.name}
              </Link>
            ))}
            <Link
              href="/bolgeler"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              Tüm bölgeler
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-8">
            <p className="text-sm text-muted">
              Ayrıca hizmet verdiğimiz iller:{" "}
              <span className="font-medium text-foreground">
                {site.areaServed.filter((c) => c !== site.city).join(", ")}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ================= SSS ================= */}
      <section id="sss" className="py-20 sm:py-24">
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.4fr]`}>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              S.S.S.
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Sıkça sorulan sorular
            </h2>
            <p className="mt-4 text-lg text-muted">
              Aradığın yanıt burada yoksa bize ulaş; her sorunu memnuniyetle
              yanıtlarız.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 text-sm font-semibold"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <Link
                href="/sss"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-foreground"
              >
                Tüm soruları gör
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ================= CTA + Ana sayfa FAQ schema ================= */}
      <FaqJsonLd items={faqs} />
      <CtaBand />
    </>
  );
}
