import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, posts } from "@/lib/blog";
import { site } from "@/lib/site";
import {
  Breadcrumbs,
  CtaBand,
  container,
} from "../../components/site-ui";
import { ArrowRightIcon } from "../../components/icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Body = post.Body;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": `${site.url}/#business` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    image: `${site.url}/blog/${post.slug}/opengraph-image`,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    inLanguage: "tr-TR",
  };

  return (
    <>
      <article className={`${container} py-12 sm:py-16`}>
        <Breadcrumbs
          items={[{ name: "Blog", href: "/blog" }, { name: post.title }]}
        />

        <header className="mx-auto mt-6 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-medium text-muted">
            <span className="rounded-full bg-subtle px-2.5 py-1">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime} okuma</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {post.title}
          </h1>
        </header>

        <div className="prose mx-auto mt-10 max-w-3xl">
          <Body />
        </div>

        {/* Etiketler */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-2 border-t border-border pt-6">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* İlgili yazılar */}
        {related.length > 0 && (
          <div className="mx-auto mt-12 max-w-3xl">
            <h2 className="text-lg font-bold tracking-tight">İlgili yazılar</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground"
                >
                  <p className="text-xs text-muted">{r.category}</p>
                  <p className="mt-1 font-semibold leading-snug">{r.title}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                    Oku
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <CtaBand />
    </>
  );
}
