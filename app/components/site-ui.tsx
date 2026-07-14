import Link from "next/link";
import { site, telHref, waHref } from "@/lib/site";
import { PhoneIcon, WhatsappIcon } from "./icons";
import { Reveal } from "./Reveal";

export const container = "mx-auto max-w-6xl px-4 sm:px-6";

type Crumb = { name: string; href?: string };
type QA = { question: string; answer: string };

// Breadcrumb (gezinme yolu) + BreadcrumbList JSON-LD. Son öğe geçerli sayfadır (href yok).
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Ana Sayfa", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: `${site.url}${it.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {full.map((it, i) => {
          const last = i === full.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {it.href && !last ? (
                <Link
                  href={it.href}
                  className="transition-colors hover:text-foreground"
                >
                  {it.name}
                </Link>
              ) : (
                <span className="text-foreground">{it.name}</span>
              )}
              {!last && <span aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}

// Sayfa başlığı (H1) + kısa açıklama
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-muted">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
      )}
    </Reveal>
  );
}

// Açılır SSS listesi (native <details>, JS gerektirmez)
export function FaqList({ items }: { items: QA[] }) {
  return (
    <div className="divide-y divide-border border-t border-border">
      {items.map((f) => (
        <details key={f.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
            {f.question}
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-border text-lg leading-none transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-muted">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

// FAQPage JSON-LD — yalnızca SSS içeriğini GÖSTEREN sayfalarda kullanılmalı.
export function FaqJsonLd({ items }: { items: QA[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Tüm sayfalarda tekrar kullanılan alt CTA bandı
export function CtaBand({
  title = "Kuryeye mi ihtiyacın var? Hemen çağır.",
  text,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t border-border">
      <div className={`${container} py-16 sm:py-20`}>
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-accent px-6 py-14 text-center text-accent-fg sm:px-12">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-base opacity-80">
            {text ??
              `Gönderin bekleyemez. ${site.name} ile tek dokunuşta moto kurye yola çıksın.`}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-current px-7 py-3.5 text-base font-semibold transition-opacity hover:opacity-80"
            >
              <WhatsappIcon className="h-5 w-5" />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
