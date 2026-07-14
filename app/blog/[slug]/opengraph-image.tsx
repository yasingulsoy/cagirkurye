import { ImageResponse } from "next/og";
import { getPost, posts } from "@/lib/blog";

export const alt = "Çağır Kurye Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Çağır Kurye Blog";
  const category = post?.category ?? "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#ffffff",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            ÇK
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>Çağır Kurye Blog</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#a1a1aa",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: -1,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#d4d4d8" }}>
          cagirkurye.com
        </div>
      </div>
    ),
    { ...size },
  );
}
