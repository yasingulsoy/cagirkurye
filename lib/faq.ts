// Sıkça Sorulan Sorular — hem SSS bölümü hem de FAQPage JSON-LD (yapısal veri)
// için tek kaynak. Bu sayede içerik ve schema her zaman uyumlu kalır.

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Çağır Kurye ile kurye ne kadar sürede gelir?",
    answer:
      "Yoğunluğa ve konumunuza göre değişmekle birlikte, acil çağrılarda kurye ortalama 15–30 dakika içinde adresinize ulaşır. Talebinizi oluşturduğunuz anda size tahmini varış süresi bildirilir.",
  },
  {
    question: "Kurye ücretleri nasıl hesaplanıyor?",
    answer:
      "Ücret; alım ve teslim noktaları arasındaki mesafeye, gönderinin boyutuna ve hizmet tipine (standart, aynı gün, acil) göre belirlenir. Kurye çağırmadan önce net fiyatı görür, sürpriz ödeme ile karşılaşmazsınız.",
  },
  {
    question: "Hangi şehir ve bölgelerde hizmet veriyorsunuz?",
    answer:
      "İstanbul'un tüm ilçelerinde şehir içi kurye hizmeti sunuyoruz. Bölgenizin kapsamda olup olmadığını çağrı oluştururken anında öğrenebilirsiniz.",
  },
  {
    question: "Gönderimi nasıl takip ederim?",
    answer:
      "Kurye yola çıktığı andan teslimata kadar gönderinizi canlı olarak takip edebilirsiniz. Teslimat tamamlandığında bildirim ve teslim onayı iletilir.",
  },
  {
    question: "Kurumsal veya düzenli kurye anlaşması yapabilir miyim?",
    answer:
      "Evet. Düzenli gönderimi olan işletmelere özel aylık sözleşme, faturalı ödeme, öncelikli kurye ve özel fiyat avantajları sunuyoruz. Kurumsal teklif için bizimle iletişime geçin.",
  },
  {
    question: "7/24 kurye hizmeti veriyor musunuz?",
    answer:
      "Evet, Çağır Kurye hafta içi, hafta sonu ve resmi tatiller dahil 7 gün 24 saat hizmet verir. Gece geç saatlerde bile acil gönderileriniz için kurye çağırabilirsiniz.",
  },
  {
    question: "Hangi tür gönderileri taşıyorsunuz?",
    answer:
      "Evrak, zarf, paket, koli, yemek, ilaç, yedek parça ve e-ticaret siparişleri dahil şehir içi taşınabilir birçok gönderiyi taşıyoruz. Yasal olmayan ve tehlikeli maddeler taşınmaz.",
  },
];
