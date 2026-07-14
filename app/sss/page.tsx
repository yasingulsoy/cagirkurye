import type { Metadata } from "next";
import { faqs } from "@/lib/faq";
import { site, telHref, waHref } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  FaqJsonLd,
  FaqList,
  PageHero,
  container,
} from "../components/site-ui";
import { PhoneIcon, WhatsappIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Kurye süreleri, fiyatlandırma, hizmet bölgeleri, gönderi takibi ve ödeme yöntemleri hakkında en çok sorulan soruların yanıtları.",
  alternates: { canonical: "/sss" },
  openGraph: {
    title: "Sıkça Sorulan Sorular | Çağır Kurye",
    description: "Kurye hizmetleri hakkında merak edilenler.",
    url: "/sss",
  },
};

export default function SssPage() {
  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs items={[{ name: "S.S.S." }]} />

        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <PageHero
              eyebrow="S.S.S."
              title="Sıkça sorulan sorular"
              description="Kurye süreleri, fiyatlar, bölgeler ve ödeme hakkında merak ettiklerin."
            />
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold">Yanıtını bulamadın mı?</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {site.name} ekibi her sorunu memnuniyetle yanıtlar.
              </p>
              <div className="mt-4 flex flex-col gap-3">
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
          </div>

          <div>
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <FaqJsonLd items={faqs} />
      <CtaBand />
    </>
  );
}
