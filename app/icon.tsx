import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Favicon / uygulama ikonu — siyah zemin, beyaz "Ç".
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 340,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        Ç
      </div>
    ),
    { ...size },
  );
}
