import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, posts } from "@/lib/blog";
import { site } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  PageHero,
  container,
} from "../components/site-ui";
import { ArrowRightIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Blog — Kurye Rehberleri ve İpuçları",
  description:
    "Kurye çağırma, moto kurye ücretleri, acil ve aynı gün teslimat hakkında rehberler. Çağır Kurye blogunda şehir içi kurye dünyasına dair her şey.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Çağır Kurye",
    description: "Kurye rehberleri, ipuçları ve fiyatlandırma yazıları.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Blog`,
    url: `${site.url}/blog`,
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.url}/#business` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.updated ?? p.date,
    })),
  };

  return (
    <>
      <section className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs items={[{ name: "Blog" }]} />

        <div className="mt-6">
          <PageHero
            eyebrow="Blog"
            title="Kurye rehberleri ve ipuçları"
            description="Kurye çağırmaktan fiyatlandırmaya, doğru hizmeti seçmekten şehir içi lojistiğe kadar bilmen gereken her şey."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-muted">
                <span className="rounded-full bg-subtle px-2.5 py-1">
                  {p.category}
                </span>
                <span>{p.readingTime} okuma</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold leading-snug">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                {p.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <time dateTime={p.date} className="text-xs text-muted">
                  {formatDate(p.date)}
                </time>
                <span className="inline-flex items-center gap-1 text-sm font-semibold">
                  Oku
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <CtaBand />
    </>
  );
}
