import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StructuredData } from "./components/StructuredData";
import { SmoothScroll } from "./components/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"], // latin-ext = Türkçe karakter desteği (ç ş ğ ı ö ü)
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Çağır Kurye | Aynı Gün Moto Kurye ve Acil Kurye Hizmeti",
    template: "%s | Çağır Kurye",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "çağır kurye",
    "kurye çağır",
    "moto kurye",
    "acil kurye",
    "aynı gün kurye",
    "hızlı kurye",
    "paket kurye",
    "kurumsal kurye",
    "istanbul kurye",
    "şehir içi kurye",
    "motorlu kurye",
    "aynı gün teslimat",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Çağır Kurye | Aynı Gün Moto Kurye ve Acil Kurye",
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Çağır Kurye — Bir çağrıda kapında",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Çağır Kurye | Aynı Gün Moto Kurye ve Acil Kurye",
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

// Sayfa boyanmadan önce çalışır — tema geçişinde beyaz/siyah "flash" olmasını önler.
const themeInitScript = `
(function(){
  try {
    // Varsayılan KOYU tema; yalnızca kullanıcı açık temayı seçtiyse açık olur.
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <StructuredData />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
