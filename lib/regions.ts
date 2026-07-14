// Şehir/ilçe programatik yerel SEO sayfaları için ilçe verisi.
// Her ilçe ÖZGÜN içerik taşır (açıklama + semtler + komşu ilçeler) — ince/kopya
// içerik riskini azaltır. Yeni ilçe eklemek: diziye yeni kayıt ekle.

export type Region = {
  slug: string;
  name: string;
  city: string;
  side: string; // Anadolu / Avrupa Yakası
  intro: string; // ilçeye özgü açıklama
  neighborhoods: string[]; // hizmet verilen başlıca semtler
  nearby: string[]; // komşu ilçe slug'ları (iç link)
};

export const regions: Region[] = [
  {
    slug: "kadikoy",
    name: "Kadıköy",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Anadolu Yakası'nın en hareketli ticaret ve yaşam merkezlerinden Kadıköy'de yoğun trafik, teslimatı yavaşlatmaz. Moto kuryelerimiz Moda'dan Kozyatağı'na kadar her noktaya hızla ulaşır.",
    neighborhoods: [
      "Moda",
      "Fenerbahçe",
      "Caddebostan",
      "Bostancı",
      "Kozyatağı",
      "Göztepe",
      "Suadiye",
      "Acıbadem",
    ],
    nearby: ["uskudar", "atasehir", "maltepe"],
  },
  {
    slug: "besiktas",
    name: "Beşiktaş",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "İş dünyasının kalbi Beşiktaş'ta zaman kıymetlidir. Levent ve Etiler'deki ofislerden Bebek ve Ortaköy'e kadar acil evrak ve paketleriniz dakikalar içinde teslim edilir.",
    neighborhoods: [
      "Levent",
      "Etiler",
      "Bebek",
      "Ortaköy",
      "Arnavutköy",
      "Gayrettepe",
      "Balmumcu",
    ],
    nearby: ["sisli", "sariyer", "beyoglu"],
  },
  {
    slug: "sisli",
    name: "Şişli",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Plaza ve iş merkezlerinin yoğunlaştığı Şişli, kurumsal kurye trafiğinin en yüksek olduğu ilçelerden biridir. Mecidiyeköy'den Nişantaşı'na kadar kesintisiz teslimat sağlıyoruz.",
    neighborhoods: [
      "Nişantaşı",
      "Mecidiyeköy",
      "Fulya",
      "Bomonti",
      "Teşvikiye",
      "Osmanbey",
    ],
    nearby: ["besiktas", "beyoglu", "sariyer"],
  },
  {
    slug: "bakirkoy",
    name: "Bakırköy",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Sahil boyunca uzanan Bakırköy, havalimanına yakınlığıyla lojistik açıdan stratejik bir ilçe. Ataköy ve Yeşilköy dahil tüm bölgeye aynı gün teslimat yapıyoruz.",
    neighborhoods: [
      "Ataköy",
      "Yeşilköy",
      "Yeşilyurt",
      "Florya",
      "Zeytinlik",
      "Şenlikköy",
    ],
    nearby: ["fatih", "basaksehir"],
  },
  {
    slug: "uskudar",
    name: "Üsküdar",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Boğaz'ın Anadolu kıyısındaki Üsküdar'da tarihi dokular ile modern semtler iç içedir. Çengelköy'den Altunizade'ye tüm noktalara hızlı kurye desteği veriyoruz.",
    neighborhoods: [
      "Kuzguncuk",
      "Çengelköy",
      "Beylerbeyi",
      "Altunizade",
      "Kısıklı",
      "Bulgurlu",
    ],
    nearby: ["kadikoy", "atasehir", "umraniye"],
  },
  {
    slug: "atasehir",
    name: "Ataşehir",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Finans merkezinin yükseldiği Ataşehir, kurumsal gönderilerin yoğun olduğu bir bölge. Batı Ataşehir'deki plazalardan İçerenköy'e kadar öncelikli teslimat sunuyoruz.",
    neighborhoods: [
      "Barbaros",
      "Batı Ataşehir",
      "İçerenköy",
      "Küçükbakkalköy",
      "Ferhatpaşa",
    ],
    nearby: ["kadikoy", "uskudar", "umraniye"],
  },
  {
    slug: "maltepe",
    name: "Maltepe",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Sahil parkı ve gelişen konut bölgeleriyle Maltepe, Anadolu Yakası'nın hızla büyüyen ilçelerinden. Küçükyalı'dan Cevizli'ye kadar tüm mahallelere kurye ulaştırıyoruz.",
    neighborhoods: [
      "Bağlarbaşı",
      "Cevizli",
      "Küçükyalı",
      "İdealtepe",
      "Fındıklı",
      "Altayçeşme",
    ],
    nearby: ["kadikoy", "kartal", "pendik"],
  },
  {
    slug: "beyoglu",
    name: "Beyoğlu",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Dar sokakları ve yoğun yaya trafiğiyle Beyoğlu, moto kuryenin en çok fark yarattığı ilçelerden. Taksim'den Karaköy'e kadar gönderileriniz trafiğe takılmadan ulaşır.",
    neighborhoods: [
      "Taksim",
      "Galata",
      "Cihangir",
      "Karaköy",
      "Şişhane",
      "Cukurcuma",
    ],
    nearby: ["sisli", "besiktas", "fatih"],
  },
  {
    slug: "fatih",
    name: "Fatih",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Tarihi yarımadanın merkezi Fatih, esnaf ve toptan ticaretin kalbidir. Eminönü ve Aksaray'daki iş yerlerinden gelen yoğun gönderi trafiğini hızla karşılıyoruz.",
    neighborhoods: [
      "Sultanahmet",
      "Eminönü",
      "Aksaray",
      "Çapa",
      "Fındıkzade",
      "Balat",
    ],
    nearby: ["beyoglu", "bakirkoy"],
  },
  {
    slug: "sariyer",
    name: "Sarıyer",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Boğaz'ın kuzey ucundaki Sarıyer, Maslak iş bölgesi ile sakin sahil semtlerini bir arada barındırır. İstinye'den Tarabya'ya kadar geniş bir alana kurye desteği veriyoruz.",
    neighborhoods: [
      "Maslak",
      "İstinye",
      "Tarabya",
      "Yeniköy",
      "Emirgan",
      "Baltalimanı",
    ],
    nearby: ["besiktas", "sisli"],
  },
  {
    slug: "umraniye",
    name: "Ümraniye",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Sanayi ve konutun birlikte geliştiği Ümraniye, Anadolu Yakası'nın en kalabalık ilçelerinden. Çakmak'tan Tepeüstü'ne kadar tüm noktalara hızlı teslimat sağlıyoruz.",
    neighborhoods: [
      "Çakmak",
      "Atakent",
      "İnkılap",
      "Site",
      "Namık Kemal",
      "Tepeüstü",
    ],
    nearby: ["uskudar", "atasehir"],
  },
  {
    slug: "pendik",
    name: "Pendik",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Sabiha Gökçen Havalimanı'na komşu Pendik, lojistik açıdan kritik bir ilçe. Kurtköy'deki iş merkezlerinden sahil mahallelerine kadar aynı gün teslimat yapıyoruz.",
    neighborhoods: [
      "Kaynarca",
      "Güzelyalı",
      "Çamçeşme",
      "Velibaba",
      "Kurtköy",
    ],
    nearby: ["kartal", "maltepe"],
  },
  {
    slug: "kartal",
    name: "Kartal",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Yenilenen sahili ve yükselen konut projeleriyle Kartal, Anadolu Yakası'nın çekim merkezlerinden. Soğanlık'tan Yakacık'a kadar tüm mahallelere kurye ulaştırıyoruz.",
    neighborhoods: [
      "Soğanlık",
      "Yakacık",
      "Uğur Mumcu",
      "Cevizli",
      "Orhantepe",
    ],
    nearby: ["maltepe", "pendik"],
  },
  {
    slug: "basaksehir",
    name: "Başakşehir",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Planlı yapısı ve yeni yaşam alanlarıyla Başakşehir, hızla büyüyen bir ilçe. Kayaşehir'den İkitelli sanayisine kadar geniş bir bölgede kurye hizmeti sunuyoruz.",
    neighborhoods: [
      "Kayaşehir",
      "Güvercintepe",
      "Ziya Gökalp",
      "Başak",
      "İkitelli",
    ],
    nearby: ["bakirkoy"],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
