// Çağır Kurye — merkezi site & işletme bilgileri.
// NOT: Aşağıdaki iletişim bilgileri ve alan adı PLACEHOLDER'dır.
// Gerçek bilgilerle güncelleyin (telefon, e-posta, adres, alan adı, sosyal medya).

export const site = {
  name: "Çağır Kurye",
  shortName: "Çağır Kurye",
  slogan: "Bir çağrıda kapında.",
  url: "https://cagirkurye.com", // gerçek alan adı
  locale: "tr_TR",
  description:
    "Çağır Kurye ile aynı gün moto kurye, acil kurye ve paket teslimat hizmeti. İstanbul'da dakikalar içinde kapında; 7/24 hızlı, güvenli ve uygun fiyatlı kurye çözümü.",

  // İletişim
  phone: "+905458546234",
  phoneDisplay: "0545 854 62 34",
  whatsapp: "905458546234",
  email: "groupcagir@gmail.com",

  // Konum / hizmet alanı
  city: "İstanbul",
  areaServed: ["İstanbul", "Ankara", "İzmir", "Bursa", "Kocaeli", "Antalya"],
  address: {
    streetAddress: "Merkez Mah.",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    postalCode: "34000",
    addressCountry: "TR",
  },
  geo: { latitude: 41.0082, longitude: 28.9784 }, // İstanbul (placeholder)

  priceRange: "₺₺",
  foundingYear: 2024,

  social: {
    instagram: "https://instagram.com/cagirkurye",
    x: "https://x.com/cagirkurye",
    facebook: "https://facebook.com/cagirkurye",
    linkedin: "https://linkedin.com/company/cagirkurye",
  },
} as const;

export const telHref = `tel:${site.phone}`;
export const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Merhaba, kurye çağırmak istiyorum.",
)}`;
export const mailHref = `mailto:${site.email}`;

// Ana menü / gezinme bağlantıları (gerçek sayfa route'ları)
export const navLinks = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/fiyat-hesaplama", label: "Fiyat Hesapla" },
  { href: "/nasil-calisir", label: "Nasıl Çalışır" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
] as const;

// Statik sayfalar — sitemap ve llms.txt için tek kaynak.
// (Hizmet detay sayfaları services.ts'ten türetilir.)
export const staticPages = [
  {
    path: "/",
    title: "Ana Sayfa",
    desc: "Çağır Kurye — aynı gün moto kurye ve acil teslimat. Bir çağrıda kapında.",
  },
  {
    path: "/hizmetler",
    title: "Hizmetler",
    desc: "Tüm kurye hizmetleri: moto kurye, acil kurye, aynı gün teslimat, paket, kurumsal ve e-ticaret.",
  },
  {
    path: "/fiyat-hesaplama",
    title: "Kurye Fiyat Hesaplama",
    desc: "Mesafe ve gönderi tipine göre anında tahmini kurye ücreti hesaplayın.",
  },
  {
    path: "/bolgeler",
    title: "Hizmet Bölgeleri",
    desc: "İstanbul ilçelerinde moto kurye, acil kurye ve aynı gün teslimat.",
  },
  {
    path: "/nasil-calisir",
    title: "Nasıl Çalışır",
    desc: "Üç adımda kurye çağırma: çağrını oluştur, kurye gelsin, teslimatı canlı takip et.",
  },
  {
    path: "/hakkimizda",
    title: "Hakkımızda",
    desc: "Çağır Kurye kimdir, nasıl çalışır ve şehir içi kuryede neyi farklı yapar.",
  },
  {
    path: "/blog",
    title: "Blog",
    desc: "Kurye çağırma, moto kurye ücretleri ve teslimat hakkında rehberler.",
  },
  {
    path: "/sss",
    title: "Sıkça Sorulan Sorular",
    desc: "Kurye süreleri, fiyatlandırma, hizmet bölgeleri, takip ve ödeme hakkında yanıtlar.",
  },
  {
    path: "/iletisim",
    title: "İletişim",
    desc: "Çağır Kurye ile telefon, WhatsApp veya e-posta üzerinden iletişime geçin.",
  },
] as const;
