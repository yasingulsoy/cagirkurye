import Image from "next/image";
import { site } from "@/lib/site";

// Marka logosu. logo.jpeg açık gri zeminli (şeffaf değil) olduğundan, her iki
// temada da temiz durması için her zaman beyaz bir "chip" içinde gösterilir.
// NOT: En temiz sonuç için şeffaf PNG önerilir (bkz. özet).
export function BrandLogo({
  imgClass = "h-9",
  className = "",
}: {
  imgClass?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden rounded-xl bg-white p-1 ring-1 ring-black/5 ${className}`}
    >
      <Image
        src="/logo.jpeg"
        alt={`${site.name} logo`}
        width={932}
        height={603}
        priority
        className={`${imgClass} w-auto object-contain`}
      />
    </span>
  );
}
