import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export const meta: PostMeta = {
  slug: "kurye-nasil-cagirilir",
  title: "Kurye Nasıl Çağırılır? Adım Adım Kurye Çağırma Rehberi",
  description:
    "Kurye nasıl çağırılır? Telefon ve WhatsApp ile adım adım kurye çağırma, doğru hizmet tipini seçme ve fiyatı önceden öğrenme rehberi.",
  excerpt:
    "Kurye çağırmak göründüğünden kolay. Doğru hizmeti seçmek, fiyatı önceden görmek ve gönderiyi takip etmek için adım adım rehber.",
  date: "2026-06-18",
  category: "Rehber",
  tags: ["kurye çağır", "moto kurye", "rehber"],
  keywords: [
    "kurye nasıl çağırılır",
    "kurye çağır",
    "kurye çağırma",
    "moto kurye çağır",
  ],
  readingTime: "5 dk",
};

export default function Body() {
  return (
    <>
      <p>
        Acil bir evrak, unutulan bir belge ya da bugün ulaşması gereken bir
        paket… Şehir içinde bir gönderiyi hızlıca yollamanın en pratik yolu
        kurye çağırmaktır. Peki <strong>kurye nasıl çağırılır</strong> ve süreç
        nasıl işler? Bu rehberde adım adım anlatıyoruz.
      </p>

      <h2>Kurye çağırmak için ne gerekir?</h2>
      <p>
        Kurye çağırmak için karmaşık bir işleme gerek yok. İhtiyacınız olan tek
        şey birkaç bilgi:
      </p>
      <ul>
        <li>
          <strong>Alım adresi:</strong> gönderinin nereden alınacağı
        </li>
        <li>
          <strong>Teslim adresi:</strong> nereye ulaştırılacağı
        </li>
        <li>
          <strong>Gönderi bilgisi:</strong> ne gönderdiğiniz (evrak, paket,
          numune vb.) ve yaklaşık boyutu
        </li>
        <li>
          <strong>Zaman tercihi:</strong> hemen mi, yoksa gün içinde belirli bir
          saate mi
        </li>
      </ul>

      <h2>Adım adım kurye çağırma</h2>
      <ol>
        <li>
          <strong>İletişime geç:</strong> Telefonla arayın veya WhatsApp&apos;tan
          yazın. En hızlı yol doğrudan aramaktır.
        </li>
        <li>
          <strong>Bilgileri ilet:</strong> Alım–teslim adresini ve gönderi
          türünü paylaşın.
        </li>
        <li>
          <strong>Hizmet tipini seç:</strong> Standart, aynı gün ya da acil
          seçenekleri arasından ihtiyacınıza uygun olanı belirleyin.
        </li>
        <li>
          <strong>Fiyatı onayla:</strong> Kurye yola çıkmadan net ücreti görün;
          sürpriz ödeme olmaz.
        </li>
        <li>
          <strong>Takip et:</strong> Kurye atandığı andan teslimata kadar
          gönderinizi canlı izleyin.
        </li>
      </ol>

      <h2>Hangi kurye tipini seçmeliyim?</h2>
      <p>
        Doğru hizmeti seçmek hem sürenizi hem bütçenizi etkiler. Kısaca:
      </p>
      <ul>
        <li>
          <Link href="/hizmetler/moto-kurye">Moto kurye</Link> — şehir içinde en
          hızlı seçenek; evrak ve küçük paketler için idealdir.
        </li>
        <li>
          <Link href="/hizmetler/acil-kurye">Acil kurye</Link> — bekleyemeyecek,
          öncelik gerektiren gönderiler için.
        </li>
        <li>
          <Link href="/hizmetler/ayni-gun-teslimat">Aynı gün teslimat</Link> —
          gün içinde ulaşması yeterli olan siparişler için ekonomik çözüm.
        </li>
      </ul>

      <h2>Kurye çağırırken nelere dikkat etmeli?</h2>
      <p>
        Sürecin sorunsuz ilerlemesi için birkaç küçük ayrıntı işinizi
        kolaylaştırır: alım ve teslim noktasında ulaşılabilir bir telefon
        numarası bırakın, kırılabilir gönderileri önceden belirtin ve değerli
        paketler için <strong>sigortalı taşıma</strong> talep edin. Gönderi
        boyutu motosiklete uygun değilse araçlı kurye yönlendirilir.
      </p>

      <h2>Sık sorulanlar</h2>
      <p>
        <strong>Kurye ne kadar sürede gelir?</strong> Yoğunluğa göre değişse de
        acil çağrılarda kurye genellikle 15–30 dakika içinde adrestedir.
      </p>
      <p>
        <strong>Gece kurye çağırabilir miyim?</strong> Evet, 7/24 hizmet veren
        firmalarda gece de kurye çağırabilirsiniz.
      </p>
      <p>
        Daha fazla soru için{" "}
        <Link href="/sss">sıkça sorulan sorular</Link> sayfamıza göz atabilir ya
        da doğrudan <Link href="/iletisim">bize ulaşabilirsiniz</Link>.
      </p>
    </>
  );
}
