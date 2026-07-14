import { ImageResponse } from "next/og";

export const alt = "Çağır Kurye — Aynı Gün Moto Kurye ve Acil Kurye";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Sosyal paylaşımlarda görünen kapak görseli (siyah-beyaz tema).
export default function OpengraphImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#ffffff",
              color: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            ÇK
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>Çağır Kurye</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Aynı gün moto kurye ve acil teslimat
          </div>
          <div style={{ fontSize: 34, color: "#a1a1aa" }}>
            Bir çağrıda kapında · 7/24 İstanbul
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#d4d4d8" }}>
          <span>Moto Kurye</span>
          <span>·</span>
          <span>Acil Kurye</span>
          <span>·</span>
          <span>Aynı Gün Teslimat</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
