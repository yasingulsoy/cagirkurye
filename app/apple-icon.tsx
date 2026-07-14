import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS ana ekran ikonu.
export default function AppleIcon() {
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
          fontSize: 120,
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
