// Kurye fiyat hesaplama — TAHMİNİ ücret modeli.
// NOT: Aşağıdaki katsayılar örnek/başlangıç değerleridir. Gerçek tarifenizle
// güncelleyin; araç ve hesap tüm siteye buradan yansır.

export type ServiceType = "standart" | "ayni-gun" | "acil";
export type PackageSize = "zarf" | "paket" | "koli";

export const pricing = {
  currency: "₺",
  base: 149, // taban ücret
  perKm: 19, // km başına ek ücret
  minimum: 199, // en düşük ücret
  service: { standart: 1, "ayni-gun": 1.2, acil: 1.6 } as Record<
    ServiceType,
    number
  >,
  size: { zarf: 0, paket: 55, koli: 120 } as Record<PackageSize, number>,
  nightWeekendRate: 0.25, // gece / hafta sonu: +%25
  maxKm: 40,
};

export type CalcInput = {
  km: number;
  service: ServiceType;
  size: PackageSize;
  nightWeekend: boolean;
};

// Tahmini ücreti hesaplar (5'e yuvarlanmış).
export function calcPrice(i: CalcInput): number {
  let p =
    (pricing.base + pricing.perKm * i.km) * pricing.service[i.service] +
    pricing.size[i.size];
  if (i.nightWeekend) p *= 1 + pricing.nightWeekendRate;
  p = Math.max(p, pricing.minimum);
  return Math.round(p / 5) * 5;
}

export const serviceOptions: {
  value: ServiceType;
  label: string;
  note: string;
}[] = [
  { value: "standart", label: "Standart", note: "Ekonomik" },
  { value: "ayni-gun", label: "Aynı Gün", note: "Gün içinde" },
  { value: "acil", label: "Acil", note: "Öncelikli" },
];

export const sizeOptions: {
  value: PackageSize;
  label: string;
  note: string;
}[] = [
  { value: "zarf", label: "Zarf / Evrak", note: "0–1 kg" },
  { value: "paket", label: "Paket", note: "1–8 kg" },
  { value: "koli", label: "Koli", note: "8–15 kg" },
];

// Mesafe için hızlı seçim ön ayarları (km)
export const distancePresets: { label: string; km: number }[] = [
  { label: "İlçe içi", km: 5 },
  { label: "Yakın ilçe", km: 12 },
  { label: "Şehir geneli", km: 25 },
];
