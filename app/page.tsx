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
import { IlloDelivered, IlloOrder, IlloRide } from "./components/illustrations";

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
    title: "Çağrını oluştur",
    text: "Telefon ya da WhatsApp ile bize ulaş, alım ve teslim adresini ilet. Fiyatı anında öğren.",
    Illo: IlloOrder,
  },
  {
    title: "Kurye kapına gelsin",
    text: "En yakın moto kurye dakikalar içinde adresine gelir ve gönderini teslim alır.",
    Illo: IlloRide,
  },
  {
    title: "Teslimatı takip et",
    text: "Gönderini canlı izle; teslimat tamamlandığında onay bildirimini anında al.",
    Illo: IlloDelivered,
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Dekor: nokta ızgarası + yumuşak parıltı */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="hero-dots absolute inset-0 opacity-70" />
          <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-foreground/[0.04] blur-3xl" />
        </div>

        <div
          className={`${container} relative grid items-center gap-12 pt-6 pb-16 sm:pt-8 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-10 lg:pb-24`}
        >
          <Reveal>
            {/* Akışkan tipografi: 360px'te ~40px, geniş ekranda 68px'e kadar */}
            <h1 className="text-[clamp(2.5rem,7.2vw,4.25rem)] font-extrabold leading-[1.06] tracking-tight">
              Aynı gün moto kurye ve acil teslimat —{" "}
              <span className="text-muted">bir çağrıda kapında.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {site.name} ile {site.city} içinde evrak, paket ve kolilerini
              dakikalar içinde gönder. Hızlı, güvenli ve uygun fiyatlı şehir içi
              kurye çözümü — istediğin an, istediğin yere.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={telHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-fg transition-opacity hover:opacity-90 sm:w-auto"
              >
                <PhoneIcon className="h-5 w-5" />
                Hemen Kurye Çağır
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-subtle sm:w-auto"
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

            {/* Güven rozetleri — mobilde 2'li ızgara, geniş ekranda satır */}
            <ul className="mt-9 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {[
                { icon: RouteIcon, label: "Canlı takip" },
                { icon: ShieldIcon, label: "Sigortalı gönderi" },
                { icon: WalletIcon, label: "Şeffaf fiyat" },
                { icon: BoltIcon, label: "Dakikalar içinde" },
              ].map((t) => (
                <li key={t.label}>
                  <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-muted sm:w-auto sm:text-sm">
                    <t.icon className="h-4 w-4 flex-none" />
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Canlı takip kartı (görsel) */}
          <Reveal
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
            delay={0.15}
          >
            {/* Arka plaka — hafif dönük, derinlik verir */}
            <div
              aria-hidden
              className="absolute -inset-3 rotate-2 rounded-[2rem] border border-border bg-subtle sm:-inset-4"
            />

            <div className="relative rounded-3xl border border-border bg-card p-5 shadow-[0_32px_80px_-36px_rgba(0,0,0,0.45)] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-semibold sm:text-base">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-foreground" />
                  </span>
                  Kurye yolda
                </span>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-fg">
                  ~18 dk
                </span>
              </div>

              {/* Rota — kesikli çizgi teslim yönünde akar */}
              <div className="mt-6 flex gap-4">
                <div className="flex flex-col items-center pt-1">
                  <span className="h-3 w-3 rounded-full border-2 border-foreground bg-background" />
                  <svg
                    aria-hidden
                    width="2"
                    height="64"
                    viewBox="0 0 2 64"
                    fill="none"
                    className="my-1"
                  >
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="64"
                      stroke="var(--border)"
                      strokeWidth="2"
                      strokeDasharray="4 6"
                      className="route-dash"
                    />
                  </svg>
                  <span className="h-3 w-3 rounded-full bg-foreground" />
                </div>
                <div className="flex flex-1 flex-col justify-between py-0.5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Alım
                    </p>
                    <p className="mt-0.5 text-sm font-semibold sm:text-base">
                      Levent, Beşiktaş
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Teslim
                    </p>
                    <p className="mt-0.5 text-sm font-semibold sm:text-base">
                      Kozyatağı, Kadıköy
                    </p>
                  </div>
                </div>
              </div>

              {/* Kurye */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-fg sm:h-11 sm:w-11">
                  ÇG
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold sm:text-base">
                    Çağır Group
                  </p>
                  <p className="inline-flex items-center gap-1 text-xs text-muted">
                    <StarIcon className="h-3.5 w-3.5" />
                    4.9 · 1.2k teslimat
                  </p>
                </div>
                <a
                  href={telHref}
                  aria-label="Kuryeyi ara"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-subtle sm:h-11 sm:w-11"
                >
                  <PhoneIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Yüzen rozet — yalnızca geniş ekranda */}
            <div className="animate-float absolute -right-6 top-[42%] hidden lg:block">
              <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-background px-3.5 py-2.5 shadow-xl">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-accent text-accent-fg">
                  <ClockIcon className="h-4.5 w-4.5" />
                </span>
                <span className="text-xs font-semibold leading-tight">
                  7/24
                  <br />
                  hizmet
                </span>
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

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {adimlar.map((a, i) => (
              <StaggerItem key={a.title} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-4">
                  <a.Illo />
                  <div className="px-2 pb-2 pt-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-fg">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-semibold">{a.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">{a.text}</p>
                  </div>
                </div>
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
              {site.city} ilçelerinin tamamına şehir içi kurye hizmeti
              sunuyoruz. Bölgen listede yoksa bile bir çağrı uzağındayız.
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
              key="tum-bolgeler"
              href="/bolgeler"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              Tüm bölgeler
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
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
