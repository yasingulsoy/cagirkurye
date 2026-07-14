// Telifsiz, kendi çizimimiz düz (flat) kurye illüstrasyonları.
// Her biri kendi renkli yuvarlak zeminini içerir → iki temada da (siyah/beyaz) çalışır.
// viewBox 320x220, kapsayıcı genişliğine göre ölçeklenir.

type Props = { className?: string };

const svgBase = {
  viewBox: "0 0 320 220",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  className: "h-auto w-full",
} as const;

// 1) Çağrını oluştur — kurye gönderini toplar (mavi)
export function IlloOrder({ className }: Props) {
  return (
    <svg {...svgBase} className={`h-auto w-full ${className ?? ""}`}>
      <rect width="320" height="220" rx="24" fill="#dbeafe" />
      <circle cx="46" cy="44" r="18" fill="#bfdbfe" />
      <circle cx="286" cy="180" r="26" fill="#bfdbfe" />
      <circle cx="60" cy="176" r="8" fill="#93c5fd" />
      <image
        href="/kurye-toplama.png"
        x="40"
        y="24"
        width="240"
        height="176"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

// 2) Kurye gelsin — moto kurye (telifsiz flat illüstrasyon, amber zemin)
export function IlloRide({ className }: Props) {
  return (
    <svg {...svgBase} className={`h-auto w-full ${className ?? ""}`}>
      <rect width="320" height="220" rx="24" fill="#fef3c7" />
      <circle cx="48" cy="44" r="20" fill="#fde68a" />
      <circle cx="276" cy="58" r="13" fill="#fde68a" />
      <circle cx="40" cy="176" r="9" fill="#fcd34d" />
      <image
        href="/moto-kurye.png"
        x="34"
        y="24"
        width="252"
        height="176"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

// 3) Teslim et — kurye gönderini teslim eder (yeşil) + onay rozeti
export function IlloDelivered({ className }: Props) {
  return (
    <svg {...svgBase} className={`h-auto w-full ${className ?? ""}`}>
      <rect width="320" height="220" rx="24" fill="#d1fae5" />
      <circle cx="46" cy="48" r="18" fill="#a7f3d0" />
      <circle cx="280" cy="176" r="24" fill="#a7f3d0" />
      <circle cx="270" cy="60" r="8" fill="#6ee7b7" />
      <image
        href="/kurye-teslim.png"
        x="34"
        y="26"
        width="252"
        height="172"
        preserveAspectRatio="xMidYMid meet"
      />
      {/* teslim onay rozeti */}
      <g transform="translate(268,52)">
        <circle cx="0" cy="0" r="20" fill="#ffffff" />
        <circle cx="0" cy="0" r="16" fill="#10b981" />
        <path d="M-7 1l5 5 10-11" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </svg>
  );
}
