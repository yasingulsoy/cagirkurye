// Çağır Kurye hizmetleri — hem "Hizmetler" bölümü/hub'ı hem de iç içe
// hizmet detay sayfaları (/hizmetler/[slug]) için tek içerik kaynağı.

export type ServiceIcon =
  | "moto"
  | "bolt"
  | "clock"
  | "package"
  | "building"
  | "cart";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: ServiceIcon;
  // Detay sayfası + SEO içeriği
  metaTitle: string;
  metaDescription: string;
  intro: string;
  features: { title: string; text: string }[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "moto-kurye",
    title: "Moto Kurye",
    short: "Şehir içi hızlı motorlu kurye.",
    description:
      "Trafiği delip geçen motorlu kuryelerle evrak, paket ve gönderileriniz en kısa sürede teslim edilir.",
    icon: "moto",
    metaTitle: "Moto Kurye | Hızlı Motorlu Kurye Hizmeti",
    metaDescription:
      "İstanbul'da moto kurye ile evrak ve paketleriniz trafiğe takılmadan dakikalar içinde teslim. 7/24 hızlı motorlu kurye hizmeti — hemen çağırın.",
    intro:
      "Moto kurye, şehir içinde en hızlı teslimat yöntemidir. Motorlu kuryelerimiz trafiğin arasından çevikçe geçerek evrak, paket ve küçük kolilerinizi en kısa sürede alıcısına ulaştırır.",
    features: [
      {
        title: "Trafiğe takılmaz",
        text: "Motosikletin çevikliğiyle kuryeler en yoğun saatlerde bile hızla ilerler.",
      },
      {
        title: "Dakikalar içinde alım",
        text: "Çağrının hemen ardından size en yakın kurye adresinize yönlendirilir.",
      },
      {
        title: "Canlı takip",
        text: "Gönderinizin konumunu ve tahmini varış süresini baştan sona anlık izlersiniz.",
      },
    ],
    useCases: [
      "Acil evrak, sözleşme ve ıslak imzalı belgeler",
      "Numune, yedek parça ve küçük ürünler",
      "Anahtar, kart ve kişisel eşya teslimi",
      "e-ticaret aynı gün gönderileri",
    ],
    faqs: [
      {
        question: "Moto kurye ne kadar sürede gelir?",
        answer:
          "Size en yakın kurye genellikle 15–30 dakika içinde adresinize ulaşır; süre yoğunluğa ve mesafeye göre değişebilir.",
      },
      {
        question: "Moto kurye ile en fazla ne kadar ağırlık gönderebilirim?",
        answer:
          "Motosiklet kapasitesi gereği genellikle 0–15 kg arası paketler taşınır. Daha ağır ve büyük gönderiler için araçlı kurye çözümümüzü öneririz.",
      },
    ],
  },
  {
    slug: "acil-kurye",
    title: "Acil Kurye",
    short: "Dakikalar içinde yola çıkan acil teslimat.",
    description:
      "Bekleyemeyecek gönderiler için öncelikli acil kurye. Çağrınızın hemen ardından kurye kapınızda olur.",
    icon: "bolt",
    metaTitle: "Acil Kurye | Öncelikli Anlık Kurye Hizmeti",
    metaDescription:
      "Acil kurye ile bekleyemeyecek gönderileriniz öncelikli olarak taşınır. İstanbul'da anında kurye çağırın, dakikalar içinde yola çıksın.",
    intro:
      "Acil kurye, zamanla yarıştığınız anlar içindir. Talebiniz öncelik sırasına alınır ve en yakın kurye derhal yola çıkar; gönderiniz bir an bile beklemez.",
    features: [
      {
        title: "Öncelikli atama",
        text: "Acil çağrılar sıranın önüne alınır; kurye anında görevlendirilir.",
      },
      {
        title: "Doğrudan rota",
        text: "Kurye başka durak yapmadan doğrudan teslim adresine gider.",
      },
      {
        title: "7/24 ulaşılabilir",
        text: "Gece geç saatler dahil, günün her anı acil kurye çağırabilirsiniz.",
      },
    ],
    useCases: [
      "Son dakika ihale ve teklif evrakları",
      "Unutulan pasaport, bilet veya belge",
      "Medikal numune ve ilaç teslimi",
      "Üretim/servis için acil yedek parça",
    ],
    faqs: [
      {
        question: "Acil kurye standart kuryeden farkı nedir?",
        answer:
          "Acil kuryede talebiniz öncelik sırasına alınır ve kurye ara durak yapmadan doğrudan teslimata gider; bu nedenle teslim süresi en aza iner.",
      },
      {
        question: "Gece acil kurye çağırabilir miyim?",
        answer:
          "Evet, acil kurye hizmetimiz 7 gün 24 saat aktiftir. Gece geç saatlerdeki acil gönderileriniz için de kurye çağırabilirsiniz.",
      },
    ],
  },
  {
    slug: "ayni-gun-teslimat",
    title: "Aynı Gün Teslimat",
    short: "Bugün gönder, bugün teslim et.",
    description:
      "Aynı gün içinde şehir içi teslimat. Siparişleriniz ertesi güne kalmadan alıcısına ulaşır.",
    icon: "clock",
    metaTitle: "Aynı Gün Teslimat | Aynı Gün Kurye Hizmeti",
    metaDescription:
      "Aynı gün teslimat ile gönderileriniz ertesi güne kalmadan alıcısına ulaşır. İstanbul içi aynı gün kurye — bugün gönder, bugün teslim et.",
    intro:
      "Aynı gün teslimat, şehir içi gönderilerinizin gün içinde alıcısına ulaşmasını sağlar. Sabah verdiğiniz gönderi akşamı beklemeden teslim edilir; müşteri memnuniyeti artar.",
    features: [
      {
        title: "Gün içi teslim garantisi",
        text: "Belirlenen saat aralığında verilen gönderiler aynı gün teslim edilir.",
      },
      {
        title: "Planlı ya da anlık",
        text: "İster hemen gönderin, ister gün içinde bir saate randevu verin.",
      },
      {
        title: "Toplu gönderi",
        text: "Birden fazla adrese aynı gün dağıtımı tek çağrıyla planlayın.",
      },
    ],
    useCases: [
      "e-ticaret ve butik siparişleri",
      "Restoran ve market ürün teslimatı",
      "Mağazadan müşteriye ürün gönderimi",
      "Fatura, kart ve düzenli evrak dağıtımı",
    ],
    faqs: [
      {
        question: "Aynı gün teslimat için son gönderi saati var mı?",
        answer:
          "Gönderinin aynı gün teslim edilebilmesi için belirli bir saate kadar oluşturulması gerekir. Çağrı sırasında bölgeniz için son saati ve teslim aralığını görürsünüz.",
      },
      {
        question: "Aynı gün birden fazla adrese gönderi yapabilir miyim?",
        answer:
          "Evet. Toplu aynı gün dağıtım için birden çok teslim noktasını tek talepte planlayabilir, kurumsal çözümlerimizden yararlanabilirsiniz.",
      },
    ],
  },
  {
    slug: "paket-kurye",
    title: "Paket & Koli Kurye",
    short: "Küçük paketten koliye güvenli taşıma.",
    description:
      "Kırılabilir ve değerli gönderiler dahil, paket ve kolileriniz özenle ve sigortalı şekilde taşınır.",
    icon: "package",
    metaTitle: "Paket & Koli Kurye | Güvenli Paket Gönderimi",
    metaDescription:
      "Paket ve koli kurye ile kırılabilir, değerli gönderileriniz sigortalı ve özenle taşınır. İstanbul içi güvenli paket gönderimi için kurye çağırın.",
    intro:
      "Paket ve koli kurye hizmetiyle küçük paketlerden hacimli kolilere kadar gönderileriniz güvenle taşınır. Kırılabilir ve değerli ürünler için ekstra özen ve sigorta güvencesi sunarız.",
    features: [
      {
        title: "Sigortalı taşıma",
        text: "Değerli gönderileriniz sigorta güvencesiyle yola çıkar.",
      },
      {
        title: "Özenli elleçleme",
        text: "Kırılabilir ürünler uygun şekilde taşınır ve teslim edilir.",
      },
      {
        title: "Araç seçenekleri",
        text: "Boyuta göre moto ya da araçlı kurye ile en uygun taşıma sağlanır.",
      },
    ],
    useCases: [
      "Kırılabilir ve hassas ürünler",
      "Değerli elektronik ve cihazlar",
      "Toplu koli ve mağaza sevkiyatı",
      "Hediye ve kişisel paketler",
    ],
    faqs: [
      {
        question: "Gönderim sigortalı mı?",
        answer:
          "Evet, değerli gönderileriniz için sigortalı taşıma sunuyoruz. Sigorta kapsamı ve limitleri gönderi tipine göre çağrı sırasında belirtilir.",
      },
      {
        question: "Büyük ve ağır kolileri de taşıyor musunuz?",
        answer:
          "Evet. Moto kuryeye sığmayan hacimli ve ağır gönderiler için araçlı kurye ile taşıma yaparız; boyut ve ağırlığa göre en uygun aracı yönlendiririz.",
      },
    ],
  },
  {
    slug: "kurumsal-kurye",
    title: "Kurumsal Kurye",
    short: "İşletmeler için sözleşmeli kurye çözümü.",
    description:
      "Düzenli gönderimi olan firmalara özel aylık anlaşma, faturalı ödeme ve öncelikli hizmet.",
    icon: "building",
    metaTitle: "Kurumsal Kurye | İşletmeler İçin Sözleşmeli Kurye",
    metaDescription:
      "Kurumsal kurye ile firmanıza özel aylık anlaşma, faturalı ödeme ve öncelikli teslimat. Düzenli gönderiminiz için Çağır Kurye kurumsal çözümleri.",
    intro:
      "Kurumsal kurye, düzenli gönderimi olan işletmeler için tasarlandı. Aylık sözleşme, faturalı ödeme, özel fiyat ve öncelikli hizmetle şirketinizin lojistiğini güvenilir bir çözüme bağlayın.",
    features: [
      {
        title: "Aylık sözleşme & fatura",
        text: "Tek tek ödeme yerine aylık faturalı, muhasebeye uygun çalışma düzeni.",
      },
      {
        title: "Özel fiyat & öncelik",
        text: "Hacme göre indirimli tarife ve kurumsal çağrılara öncelik.",
      },
      {
        title: "Tek muhatap",
        text: "İşletmenize atanmış temsilci ile süreçlerinizi tek noktadan yönetin.",
      },
    ],
    useCases: [
      "Düzenli evrak ve fatura dağıtımı olan ofisler",
      "e-ticaret ve perakende sevkiyatı",
      "Eczane, klinik ve medikal firmalar",
      "Hukuk, muhasebe ve finans büroları",
    ],
    faqs: [
      {
        question: "Kurumsal anlaşma için minimum gönderi şartı var mı?",
        answer:
          "Kurumsal tarifeler gönderi hacminize göre şekillenir. İhtiyacınızı iletin; işletmenize en uygun paketi ve fiyatı birlikte belirleyelim.",
      },
      {
        question: "Faturalı ödeme ve cari hesap mümkün mü?",
        answer:
          "Evet. Kurumsal müşterilerimize aylık faturalı ödeme ve cari hesap imkânı sunuyoruz; muhasebe süreçleriniz kolaylaşır.",
      },
    ],
  },
  {
    slug: "e-ticaret-kurye",
    title: "e-Ticaret Teslimat",
    short: "Online mağazanız için hızlı teslimat.",
    description:
      "e-ticaret siparişlerinizi aynı gün müşterinize ulaştırın; iade ve değişim süreçlerini hızlandırın.",
    icon: "cart",
    metaTitle: "e-Ticaret Kurye | Online Mağaza Teslimatı",
    metaDescription:
      "e-ticaret kurye ile online mağazanızın siparişleri aynı gün müşteriye ulaşır. İade ve değişimi hızlandırın, memnuniyeti artırın — hemen başlayın.",
    intro:
      "e-ticaret teslimat hizmetiyle online mağazanızın siparişleri şehir içinde aynı gün müşteriye ulaşır. Hızlı teslimat ve kolay iade süreçleriyle müşteri memnuniyetini ve tekrar satışları artırın.",
    features: [
      {
        title: "Aynı gün teslimat",
        text: "Şehir içi siparişleriniz ertesi güne kalmadan müşterinize ulaşır.",
      },
      {
        title: "Kolay iade & değişim",
        text: "Ters lojistikle iade ve değişim gönderilerini hızlıca toplarız.",
      },
      {
        title: "Entegrasyona hazır",
        text: "Düzenli gönderim akışınız kurumsal çözümlerle sorunsuz yürür.",
      },
    ],
    useCases: [
      "Butik ve online mağazalar",
      "Aynı gün teslimat vaat eden markalar",
      "İade/değişim yoğun kategoriler",
      "Sosyal medya ve pazaryeri satıcıları",
    ],
    faqs: [
      {
        question: "e-ticaret siparişlerinde iade teslimatı yapıyor musunuz?",
        answer:
          "Evet. Ters lojistik kapsamında müşterinizden iade veya değişim ürününü toplayıp mağazanıza geri getiriyoruz; süreç hızlanıyor.",
      },
      {
        question: "Günlük çok sayıda siparişi karşılayabilir misiniz?",
        answer:
          "Evet. Düzenli ve yüksek hacimli gönderimler için kurumsal e-ticaret çözümlerimizle ölçeklenebilir teslimat sağlıyoruz.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
