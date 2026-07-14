import type { ComponentType } from "react";

// Blog içerik motoru — her yazı content/blog/<slug>.tsx dosyasında `meta` +
// varsayılan gövde bileşeni olarak yaşar; burada tek listede toplanır.
// Yeni yazı eklemek: dosyayı oluştur, aşağıya import edip posts dizisine ekle.

export type PostMeta = {
  slug: string;
  title: string;
  description: string; // SEO meta description
  excerpt: string; // liste kartı özeti
  date: string; // ISO — yayın tarihi, örn "2026-05-12"
  updated?: string; // ISO — güncelleme tarihi
  category: string; // örn "Rehber", "Fiyatlandırma"
  tags: string[];
  keywords: string[];
  readingTime: string; // örn "5 dk"
};

export type Post = PostMeta & { Body: ComponentType };

import * as kuryeNasil from "@/content/blog/kurye-nasil-cagirilir";
import * as motoUcret from "@/content/blog/moto-kurye-ucretleri";
import * as acilAyniGun from "@/content/blog/acil-mi-ayni-gun-mu";

const modules = [kuryeNasil, motoUcret, acilAyniGun];

export const posts: Post[] = modules
  .map((m) => ({ ...m.meta, Body: m.default }))
  // en yeni yazı üstte
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const categories = Array.from(new Set(posts.map((p) => p.category)));

const AYLAR = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

// ISO tarihi ("2026-06-18") -> "18 Haziran 2026" (locale bağımsız)
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${AYLAR[m - 1]} ${y}`;
}
