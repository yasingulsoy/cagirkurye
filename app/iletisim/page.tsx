import type { Metadata } from "next";
import { mailHref, site, telHref, waHref } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  PageHero,
  container,
} from "../components/site-ui";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappIcon,
} from "../components/icons";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Çağır Kurye ile telefon, WhatsApp veya e-posta üzerinden 7/24 iletişime geçin. Kurye çağırın, teklif alın, sorularınızı iletin.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | Çağır Kurye",
    description: "7/24 kurye desteği — telefon, WhatsApp, e-posta.",
    url: "/iletisim",
  },
};

export default function IletisimPage() {
  const kanallar = [
    {
      icon: PhoneIcon,
      label: "Telefon",
      value: site.phoneDisplay,
      href: telHref,
      note: "Hemen kurye çağır",
      external: false,
    },
    {
      icon: WhatsappIcon,
      label: "WhatsApp",
      value: "Mesaj gönder",
      href: waHref,
      note: "Yazışarak talep oluştur",
      external: true,
    },
    {
      icon: MailIcon,
      label: "E-posta",
      value: site.email,
      href: mailHref,
      note: "Kurumsal teklif & sorular",
      external: false,
    },
  ];

  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs items={[{ name: "İletişim" }]} />

        <div className="mt-6">
          <PageHero
            eyebrow="İletişim"
            title="Bize ulaş, kurye yola çıksın"
            description={`${site.name} ekibi 7 gün 24 saat yanında. Sana en uygun kanaldan bize ulaş.`}
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {kanallar.map((k) => {
            const Icon = k.icon;
            return (
              <a
                key={k.label}
                href={k.href}
                target={k.external ? "_blank" : undefined}
                rel={k.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-fg">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-sm text-muted">{k.label}</p>
                <p className="mt-1 text-lg font-semibold">{k.value}</p>
                <p className="mt-2 text-sm text-muted">{k.note}</p>
              </a>
            );
          })}
        </div>

        {/* Ek bilgi */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-2xl border border-border p-6">
            <ClockIcon className="mt-0.5 h-6 w-6 flex-none" />
            <div>
              <p className="font-semibold">Çalışma saatleri</p>
              <p className="mt-1 text-sm text-muted">
                Hafta içi, hafta sonu ve resmi tatiller dahil 7 gün 24 saat.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-border p-6">
            <MapPinIcon className="mt-0.5 h-6 w-6 flex-none" />
            <div>
              <p className="font-semibold">Hizmet bölgeleri</p>
              <p className="mt-1 text-sm text-muted">
                {site.areaServed.join(", ")} ve çevresi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
