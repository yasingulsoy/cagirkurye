// Bölge (ilçe) programatik yerel SEO sayfaları için veri.
// Kapsam: İstanbul'un ADALAR HARİÇ tüm ilçeleri (38) + çevre bölgeler (6) = 44.
// Her bölge ÖZGÜN içerik taşır (açıklama + semtler + komşu bölgeler) —
// ince/kopya içerik riskini azaltır. Yeni bölge = diziye yeni kayıt.

export type Region = {
  slug: string;
  name: string;
  city: string; // İstanbul | Kocaeli | Tekirdağ | Yalova
  side: "Avrupa Yakası" | "Anadolu Yakası" | "Çevre Bölge";
  intro: string;
  neighborhoods: string[];
  nearby: string[]; // komşu bölge slug'ları (iç link)
};

export const regions: Region[] = [
  /* ================= İSTANBUL — AVRUPA YAKASI (25) ================= */
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
    nearby: ["sisli", "sariyer", "beyoglu", "kagithane"],
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
    nearby: ["besiktas", "beyoglu", "kagithane", "sariyer"],
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
    nearby: ["sisli", "besiktas", "fatih", "kagithane"],
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
    nearby: ["beyoglu", "zeytinburnu", "bayrampasa", "eyupsultan"],
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
    nearby: ["zeytinburnu", "bahcelievler", "kucukcekmece"],
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
    nearby: ["besiktas", "sisli", "kagithane", "eyupsultan"],
  },
  {
    slug: "basaksehir",
    name: "Başakşehir",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Planlı yapısı ve yeni yaşam alanlarıyla Başakşehir hızla büyüyor. Kayaşehir'den İkitelli sanayisine kadar geniş bir bölgede kurye hizmeti sunuyoruz.",
    neighborhoods: [
      "Kayaşehir",
      "Güvercintepe",
      "Ziya Gökalp",
      "Başak",
      "İkitelli",
    ],
    nearby: ["bagcilar", "kucukcekmece", "esenyurt", "arnavutkoy"],
  },
  {
    slug: "kagithane",
    name: "Kağıthane",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Eski sanayi dokusu ofis kulelerine dönüşen Kağıthane, hızla büyüyen bir iş merkezi. Seyrantepe ve Çağlayan'daki plazalara günün her saati kurye çıkarıyoruz.",
    neighborhoods: [
      "Seyrantepe",
      "Çağlayan",
      "Gültepe",
      "Sanayi",
      "Hamidiye",
      "Merkez",
    ],
    nearby: ["sisli", "eyupsultan", "besiktas", "sariyer"],
  },
  {
    slug: "eyupsultan",
    name: "Eyüpsultan",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Haliç kıyısından Göktürk ve Kemerburgaz'ın kuzey yerleşimlerine uzanan geniş bir ilçe. Alibeyköy sanayisi dahil her noktaya kurye ulaştırıyoruz.",
    neighborhoods: [
      "Alibeyköy",
      "Göktürk",
      "Kemerburgaz",
      "Rami",
      "Silahtarağa",
      "Nişanca",
    ],
    nearby: ["kagithane", "gaziosmanpasa", "bayrampasa", "sariyer"],
  },
  {
    slug: "zeytinburnu",
    name: "Zeytinburnu",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Tekstil ve deri üretiminin merkezi Zeytinburnu, yoğun ticari gönderi trafiğine sahiptir. Kazlıçeşme ve Merkezefendi'deki atölyelerden hızlı sevkiyat sağlıyoruz.",
    neighborhoods: [
      "Merkezefendi",
      "Kazlıçeşme",
      "Telsiz",
      "Veliefendi",
      "Seyitnizam",
      "Yenidoğan",
    ],
    nearby: ["bakirkoy", "fatih", "gungoren", "bahcelievler"],
  },
  {
    slug: "bahcelievler",
    name: "Bahçelievler",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Yoğun konut dokusu ve Yenibosna iş bölgesiyle Bahçelievler, her gün yüksek gönderi hacmi üretir. Şirinevler'den Kocasinan'a kadar tüm mahallelere kurye gider.",
    neighborhoods: [
      "Yenibosna",
      "Şirinevler",
      "Kocasinan",
      "Siyavuşpaşa",
      "Zafer",
      "Soğanlı",
    ],
    nearby: ["bagcilar", "gungoren", "bakirkoy", "kucukcekmece"],
  },
  {
    slug: "bagcilar",
    name: "Bağcılar",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "İstanbul'un en kalabalık ilçelerinden Bağcılar, matbaa ve küçük sanayi yoğunluğuyla bilinir. Güneşli ve Mahmutbey'deki iş yerlerine düzenli kurye desteği veriyoruz.",
    neighborhoods: [
      "Güneşli",
      "Kirazlı",
      "Mahmutbey",
      "Yenimahalle",
      "Demirkapı",
      "Yıldıztepe",
    ],
    nearby: ["bahcelievler", "esenler", "gungoren", "basaksehir"],
  },
  {
    slug: "gungoren",
    name: "Güngören",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Merter'in tekstil ve konfeksiyon merkezi olduğu Güngören, e-ticaret gönderilerinin yoğun çıktığı bir ilçe. Numune ve koli sevkiyatını aynı gün tamamlıyoruz.",
    neighborhoods: [
      "Merter",
      "Tozkoparan",
      "Haznedar",
      "Güneştepe",
      "Mareşal Çakmak",
    ],
    nearby: ["bahcelievler", "bagcilar", "esenler", "zeytinburnu"],
  },
  {
    slug: "esenler",
    name: "Esenler",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Otogar ve çevresindeki hareketlilikle Esenler, şehir içi gönderilerde önemli bir aktarma noktası. Tüm mahallelerine hızlı moto kurye çıkarıyoruz.",
    neighborhoods: [
      "Menderes",
      "Nine Hatun",
      "Havaalanı",
      "Turgut Reis",
      "Oruçreis",
      "Fevzi Çakmak",
    ],
    nearby: ["bagcilar", "bayrampasa", "gungoren", "sultangazi"],
  },
  {
    slug: "bayrampasa",
    name: "Bayrampaşa",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Toptancı hali ve sanayi siteleriyle Bayrampaşa, ticari gönderilerin yoğun olduğu bir ilçe. Esnaf ve firmalara düzenli kurye çözümleri sunuyoruz.",
    neighborhoods: [
      "Yıldırım",
      "Kartaltepe",
      "Terazidere",
      "Muratpaşa",
      "Vatan",
      "Altıntepsi",
    ],
    nearby: ["eyupsultan", "gaziosmanpasa", "esenler", "fatih"],
  },
  {
    slug: "gaziosmanpasa",
    name: "Gaziosmanpaşa",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Yoğun konut ve esnaf dokusuyla Gaziosmanpaşa, gün boyu canlı bir gönderi trafiğine sahip. Karayolları'ndan Küçükköy'e kadar her noktaya kurye gider.",
    neighborhoods: [
      "Karayolları",
      "Merkez",
      "Yıldıztabya",
      "Sarıgöl",
      "Küçükköy",
      "Hürriyet",
    ],
    nearby: ["bayrampasa", "sultangazi", "eyupsultan"],
  },
  {
    slug: "sultangazi",
    name: "Sultangazi",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Genç nüfusu ve küçük sanayi siteleriyle Sultangazi hızla gelişiyor. Cebeci ve Habibler dahil ilçenin tamamına şehir içi kurye hizmeti veriyoruz.",
    neighborhoods: [
      "Cebeci",
      "Habibler",
      "50. Yıl",
      "Uğur Mumcu",
      "Esentepe",
      "Zübeyde Hanım",
    ],
    nearby: ["gaziosmanpasa", "esenler", "arnavutkoy", "eyupsultan"],
  },
  {
    slug: "kucukcekmece",
    name: "Küçükçekmece",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Halkalı ve Sefaköy'ün lojistik hareketliliğiyle Küçükçekmece, gönderi trafiğinin yüksek olduğu bir ilçe. Göl çevresindeki tüm mahallelere kurye ulaştırıyoruz.",
    neighborhoods: [
      "Halkalı",
      "Sefaköy",
      "Cennet",
      "Atakent",
      "İnönü",
      "Kanarya",
    ],
    nearby: ["bahcelievler", "avcilar", "basaksehir", "bakirkoy"],
  },
  {
    slug: "avcilar",
    name: "Avcılar",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Üniversite ve sahil hattıyla canlı bir ilçe olan Avcılar'da, Ambarlı liman bölgesi dahil her noktaya hızlı kurye çıkarıyoruz.",
    neighborhoods: [
      "Ambarlı",
      "Denizköşkler",
      "Firuzköy",
      "Cihangir",
      "Üniversite",
      "Merkez",
    ],
    nearby: ["kucukcekmece", "beylikduzu", "esenyurt"],
  },
  {
    slug: "esenyurt",
    name: "Esenyurt",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Nüfusuyla İstanbul'un en büyük ilçelerinden Esenyurt, yoğun e-ticaret teslimat talebi üretir. Tüm mahallelerine aynı gün kurye gönderiyoruz.",
    neighborhoods: [
      "Saadetdere",
      "İnönü",
      "Yenikent",
      "Namık Kemal",
      "Pınar",
      "Balıkyolu",
    ],
    nearby: ["beylikduzu", "avcilar", "buyukcekmece", "basaksehir"],
  },
  {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Planlı yapısı ve modern konut projeleriyle Beylikdüzü, batı yakasının yükselen merkezi. Yakuplu ve Gürpınar dahil tüm bölgeye kurye desteği veriyoruz.",
    neighborhoods: [
      "Cumhuriyet",
      "Adnan Kahveci",
      "Barış",
      "Gürpınar",
      "Yakuplu",
      "Marmara",
    ],
    nearby: ["esenyurt", "avcilar", "buyukcekmece"],
  },
  {
    slug: "buyukcekmece",
    name: "Büyükçekmece",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Göl ve sahil hattı boyunca uzanan Büyükçekmece, yazlık ve yerleşik nüfusuyla canlıdır. Mimarsinan'dan Kumburgaz'a kadar kurye gönderiyoruz.",
    neighborhoods: [
      "Mimarsinan",
      "Kumburgaz",
      "Celaliye",
      "Kamiloba",
      "Atatürk",
      "Fatih",
    ],
    nearby: ["beylikduzu", "esenyurt", "silivri", "catalca"],
  },
  {
    slug: "silivri",
    name: "Silivri",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "İstanbul'un batı kapısı Silivri, geniş sahil şeridi ve tarım-sanayi karışımı yapısıyla dikkat çeker. Selimpaşa'dan merkeze kadar kurye ulaştırıyoruz.",
    neighborhoods: [
      "Selimpaşa",
      "Ortaköy",
      "Mimar Sinan",
      "Alibey",
      "Değirmenköy",
      "Piri Mehmet Paşa",
    ],
    nearby: ["buyukcekmece", "catalca", "corlu"],
  },
  {
    slug: "catalca",
    name: "Çatalca",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Doğasıyla öne çıkan Çatalca, İstanbul'un en geniş yüzölçümlü ilçelerinden. Merkez ve köy yerleşimlerine planlı kurye seferleri düzenliyoruz.",
    neighborhoods: [
      "Ferhatpaşa",
      "Kaleiçi",
      "Örencik",
      "Kabakça",
      "Hallaçlı",
      "Ovayenice",
    ],
    nearby: ["buyukcekmece", "silivri", "arnavutkoy"],
  },
  {
    slug: "arnavutkoy",
    name: "Arnavutköy",
    city: "İstanbul",
    side: "Avrupa Yakası",
    intro:
      "Yeni havalimanı ve Hadımköy sanayi bölgesiyle Arnavutköy, lojistik açıdan stratejik bir konumda. Fabrika ve depolara düzenli kurye çıkarıyoruz.",
    neighborhoods: [
      "Hadımköy",
      "Bolluca",
      "Taşoluk",
      "Haraççı",
      "Boğazköy",
      "Deliklikaya",
    ],
    nearby: ["basaksehir", "sultangazi", "catalca", "eyupsultan"],
  },

  /* ================= İSTANBUL — ANADOLU YAKASI (13) ================= */
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
    nearby: ["kadikoy", "atasehir", "umraniye", "beykoz"],
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
    nearby: ["kadikoy", "uskudar", "umraniye", "sancaktepe"],
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
    nearby: ["uskudar", "atasehir", "cekmekoy", "beykoz"],
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
    nearby: ["kadikoy", "kartal", "atasehir"],
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
    nearby: ["maltepe", "pendik", "sultanbeyli"],
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
    nearby: ["kartal", "tuzla", "sultanbeyli"],
  },
  {
    slug: "tuzla",
    name: "Tuzla",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Tersaneler ve organize sanayi bölgeleriyle Tuzla, ağır bir ticari gönderi trafiğine sahip. Fabrikalardan yedek parça ve evrak sevkiyatını hızla yapıyoruz.",
    neighborhoods: [
      "Aydınlı",
      "İçmeler",
      "Postane",
      "Şifa",
      "Anadolu",
      "Orhanlı",
    ],
    nearby: ["pendik", "gebze", "cayirova"],
  },
  {
    slug: "sancaktepe",
    name: "Sancaktepe",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Sarıgazi ve Samandıra çevresinde hızla büyüyen Sancaktepe, yeni konut ve sanayi alanlarıyla dikkat çeker. Tüm mahallelerine moto kurye çıkarıyoruz.",
    neighborhoods: [
      "Sarıgazi",
      "Samandıra",
      "Yenidoğan",
      "Emek",
      "Abdurrahmangazi",
    ],
    nearby: ["cekmekoy", "umraniye", "sultanbeyli", "atasehir"],
  },
  {
    slug: "cekmekoy",
    name: "Çekmeköy",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Ormanla iç içe sakin yerleşimleriyle Çekmeköy, Anadolu Yakası'nın gelişen ilçelerinden. Taşdelen ve Alemdağ dahil her noktaya kurye ulaştırıyoruz.",
    neighborhoods: [
      "Taşdelen",
      "Alemdağ",
      "Ömerli",
      "Mimar Sinan",
      "Cumhuriyet",
      "Soğukpınar",
    ],
    nearby: ["umraniye", "sancaktepe", "beykoz", "sile"],
  },
  {
    slug: "sultanbeyli",
    name: "Sultanbeyli",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Yoğun konut dokusu ve canlı esnaf hayatıyla Sultanbeyli, gün boyu gönderi trafiği üretir. İlçenin tamamına hızlı ve uygun fiyatlı kurye hizmeti veriyoruz.",
    neighborhoods: [
      "Abdurrahmangazi",
      "Mehmet Akif",
      "Battalgazi",
      "Turgut Reis",
      "Fatih",
      "Hasanpaşa",
    ],
    nearby: ["sancaktepe", "pendik", "kartal"],
  },
  {
    slug: "beykoz",
    name: "Beykoz",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Boğaz'ın yeşil kıyısı Beykoz'da, Kavacık iş bölgesi ile sakin sahil köyleri bir arada. Ofislerden yalılara kadar her adrese kurye gönderiyoruz.",
    neighborhoods: [
      "Kavacık",
      "Paşabahçe",
      "Anadolu Hisarı",
      "Çubuklu",
      "Kanlıca",
      "Acarkent",
    ],
    nearby: ["uskudar", "umraniye", "cekmekoy"],
  },
  {
    slug: "sile",
    name: "Şile",
    city: "İstanbul",
    side: "Anadolu Yakası",
    intro:
      "Karadeniz kıyısındaki Şile, İstanbul'un doğa ve yazlık merkezi. Ağva dahil kıyı yerleşimlerine planlı kurye seferleri düzenliyoruz.",
    neighborhoods: ["Merkez", "Ağva", "Çayırbaşı", "Balibey", "Kumbaba"],
    nearby: ["cekmekoy", "beykoz"],
  },

  /* ================= ÇEVRE BÖLGELER (6) ================= */
  {
    slug: "gebze",
    name: "Gebze",
    city: "Kocaeli",
    side: "Çevre Bölge",
    intro:
      "Organize sanayi bölgeleriyle Türkiye'nin üretim üslerinden Gebze, İstanbul'la iç içe çalışır. Fabrika ve depolarınızdan İstanbul'a (veya tersi) aynı gün gönderi taşıyoruz.",
    neighborhoods: [
      "Gebze OSB",
      "Güzeller OSB",
      "Tavşanlı",
      "Sultanorhan",
      "Osman Yılmaz",
      "Mustafa Paşa",
    ],
    nearby: ["tuzla", "cayirova", "dilovasi"],
  },
  {
    slug: "cayirova",
    name: "Çayırova",
    city: "Kocaeli",
    side: "Çevre Bölge",
    intro:
      "Şekerpınar'daki lojistik depoları ve sanayi tesisleriyle Çayırova, e-ticaret sevkiyatının kritik noktalarından. Depo–müşteri hattında hızlı kurye sağlıyoruz.",
    neighborhoods: [
      "Şekerpınar",
      "Akse",
      "Atatürk",
      "Cumhuriyet",
      "Özgürlük",
      "İnönü",
    ],
    nearby: ["gebze", "dilovasi", "tuzla"],
  },
  {
    slug: "dilovasi",
    name: "Dilovası",
    city: "Kocaeli",
    side: "Çevre Bölge",
    intro:
      "Ağır sanayi ve liman tesisleriyle Dilovası, kurumsal gönderi trafiğinin yüksek olduğu bir bölge. Fabrikalara acil evrak ve yedek parça ulaştırıyoruz.",
    neighborhoods: [
      "Diliskelesi",
      "Tavşancıl",
      "Mimar Sinan",
      "Orhangazi",
      "Çerkeşli",
      "Demirciler",
    ],
    nearby: ["gebze", "cayirova"],
  },
  {
    slug: "corlu",
    name: "Çorlu",
    city: "Tekirdağ",
    side: "Çevre Bölge",
    intro:
      "Trakya'nın sanayi ve ticaret merkezi Çorlu, tekstil ve üretim tesisleriyle yoğun sevkiyat üretir. İstanbul–Çorlu hattında düzenli kurye seferleri yapıyoruz.",
    neighborhoods: [
      "Kazimiye",
      "Reşadiye",
      "Hıdırağa",
      "Muhittin",
      "Zafer",
      "Şeyhsinan",
    ],
    nearby: ["cerkezkoy", "silivri"],
  },
  {
    slug: "cerkezkoy",
    name: "Çerkezköy",
    city: "Tekirdağ",
    side: "Çevre Bölge",
    intro:
      "Organize sanayi bölgesiyle Çerkezköy, Trakya üretiminin kalbi. Fabrikalardan İstanbul'a evrak, numune ve paket sevkiyatını hızla tamamlıyoruz.",
    neighborhoods: [
      "Fevzipaşa",
      "Kızılpınar",
      "Bağlık",
      "Veliköy",
      "İstasyon",
      "Gazi Mustafa Kemal Paşa",
    ],
    nearby: ["corlu", "silivri"],
  },
  {
    slug: "yalova",
    name: "Yalova",
    city: "Yalova",
    side: "Çevre Bölge",
    intro:
      "Marmara'nın güney kıyısındaki Yalova, İstanbul'la feribot ve kara yoluyla sıkı bağlantılıdır. Merkez ve çevre ilçelerine planlı gönderi taşıyoruz.",
    neighborhoods: [
      "Merkez",
      "Çiftlikköy",
      "Termal",
      "Altınova",
      "Çınarcık",
      "Armutlu",
    ],
    nearby: ["gebze", "cayirova"],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

// /bolgeler hub'ında gruplama sırası + başlıkları
export const regionGroups = [
  { key: "Avrupa Yakası", label: "İstanbul · Avrupa Yakası" },
  { key: "Anadolu Yakası", label: "İstanbul · Anadolu Yakası" },
  { key: "Çevre Bölge", label: "Çevre Bölgeler (Kocaeli · Tekirdağ · Yalova)" },
] as const;
