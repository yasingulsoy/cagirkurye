import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "moto-kurye-ucretleri",
  title: "Moto Kurye Ücretleri Nasıl Hesaplanır? Fiyatı Etkileyen 6 Faktör",
  description:
    "Moto kurye ücretleri nasıl belirlenir? Mesafe, gönderi boyutu, hizmet tipi ve daha fazlası — kurye fiyatını etkileyen 6 faktörü açıklıyoruz.",
  excerpt:
    "Kurye ücreti neye göre değişir? Mesafeden gönderi boyutuna, hizmet tipinden zamanlamaya kadar fiyatı belirleyen 6 temel faktör.",
  date: "2026-06-25",
  category: "Fiyatlandırma",
  tags: ["moto kurye", "kurye ücreti", "fiyat"],
  keywords: [
    "moto kurye ücretleri",
    "moto kurye fiyat",
    "kurye ücreti hesaplama",
    "kurye fiyatları",
  ],
  readingTime: "6 dk",
};

export default function Body() {
  return (
    <>
      <p>
        Kurye çağırmadan önce akla gelen ilk soru genellikle şudur:{" "}
        <strong>bu gönderi bana kaça mal olur?</strong> Moto kurye ücretleri
        sabit bir liste üzerinden değil, birkaç değişkenin birleşimiyle
        belirlenir. Fiyatı anlamak, hem bütçenizi planlamanızı hem de doğru
        hizmeti seçmenizi kolaylaştırır.
      </p>

      <h2>Moto kurye ücretini etkileyen 6 faktör</h2>

      <h3>1. Mesafe</h3>
      <p>
        Fiyatı belirleyen en temel unsur, alım ve teslim noktaları arasındaki
        mesafedir. Mesafe arttıkça ücret de artar; bu yüzden adresleri net
        vermek doğru fiyat için önemlidir.
      </p>

      <h3>2. Gönderi boyutu ve ağırlığı</h3>
      <p>
        <Link href="/hizmetler/moto-kurye">Moto kurye</Link> genellikle 0–15 kg
        arası paketleri taşır. Motosiklete sığmayan hacimli gönderiler araçlı
        kurye gerektirdiğinden fiyatı etkiler.
      </p>

      <h3>3. Hizmet tipi</h3>
      <p>
        Standart, aynı gün ve <Link href="/hizmetler/acil-kurye">acil kurye</Link>{" "}
        aynı fiyatta değildir. Acil ve öncelikli teslimatlar, kurye doğrudan
        görevlendirildiği için standart hizmetten daha yüksek ücretlidir.
      </p>

      <h3>4. Zamanlama</h3>
      <p>
        Gece saatleri, hafta sonu ve resmi tatiller gibi yoğun ya da özel
        zaman dilimleri fiyata yansıyabilir. Aynı gün içinde esnek saat verirseniz
        genellikle daha ekonomik olur.
      </p>

      <h3>5. Bekleme süresi</h3>
      <p>
        Kuryenin alım veya teslim noktasında beklemesi gereken durumlar (imza,
        hazırlık, kat çıkışı vb.) ek süre yaratır ve ücrete eklenebilir.
      </p>

      <h3>6. Sigorta ve özel taşıma</h3>
      <p>
        Değerli veya kırılabilir gönderiler için <strong>sigortalı taşıma</strong>{" "}
        ve özel elleçleme talep ettiğinizde fiyat, sağlanan güvence
        doğrultusunda değişir.
      </p>

      <h2>Kurye ücretinde nelere dikkat etmeli?</h2>
      <p>
        Şeffaf çalışan bir kurye hizmeti, ücreti siz onaylamadan yola çıkmaz.
        Doğru fiyat almak için:
      </p>
      <ul>
        <li>Alım ve teslim adreslerini olabildiğince net verin.</li>
        <li>Gönderinin boyutunu ve içeriğini önceden belirtin.</li>
        <li>Acil mi yoksa aynı gün mü olduğunu baştan söyleyin.</li>
        <li>Gizli ek ücret olup olmadığını sorun; net fiyat isteyin.</li>
      </ul>

      <h2>Örnek senaryo</h2>
      <p>
        Aynı ilçe içinde küçük bir evrağın standart teslimatı, şehrin bir
        ucundan diğerine gönderilen acil bir paketten belirgin şekilde daha
        uygun olur. Yani &quot;kurye ne kadar?&quot; sorusunun cevabı, tamamen
        gönderinizin koşullarına bağlıdır.
      </p>

      <blockquote>
        En doğru fiyatı öğrenmenin yolu, gönderinizin detaylarıyla birlikte
        teklif almaktır — çoğu firmada bu birkaç saniye sürer.
      </blockquote>

      <p>
        Gönderiniz için net fiyatı öğrenmek isterseniz{" "}
        <Link href="/iletisim">bize ulaşın</Link>; mesafe ve hizmet tipine göre
        şeffaf ücreti hemen paylaşalım.
      </p>
    </>
  );
}
