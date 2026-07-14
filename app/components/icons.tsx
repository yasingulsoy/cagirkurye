import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/services";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MotoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5.5" cy="17" r="3.5" />
      <circle cx="18.5" cy="17" r="3.5" />
      <path d="M15 17h-6l-2.5-4H3" />
      <path d="M9 13l3-5h4l2 4" />
      <path d="M13 8h4l1.5 3" />
      <path d="M6 8h4" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function PackageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5" />
      <path d="M12 22V12" />
      <path d="M7.5 4.5 16.5 9.5" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h2.5l2.2 12.2a1.5 1.5 0 0 0 1.5 1.3h9.1a1.5 1.5 0 0 0 1.5-1.2L21 7H5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13 11 21 19.4 21A1.5 1.5 0 0 0 21 19.5v-2a1.5 1.5 0 0 0-1.3-1.5l-2.5-.4a1.5 1.5 0 0 0-1.5.7l-.7 1.1a12 12 0 0 1-5.1-5.1l1.1-.7a1.5 1.5 0 0 0 .7-1.5L11 7.8A1.5 1.5 0 0 0 9.5 6.5Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.11.82.83-3.04-.19-.31a8.05 8.05 0 0 1-1.26-4.34c0-4.46 3.63-8.09 8.09-8.09Zm4.55 11.5c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02s-.44.06-.67.31c-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.6c.13.16 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7.5 9 6 9-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function RouteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5" />
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0H5" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2" />
      <circle cx="16.5" cy="13" r="1.25" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z" />
      <path d="M20 13a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2 1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z" />
      <path d="M18 19a4 4 0 0 1-4 3h-2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 5 5L20 6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="m12 2 2.9 6.2 6.6.8-4.9 4.5 1.3 6.5L12 17.8 6.1 20l1.3-6.5L2.5 9l6.6-.8L12 2Z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

// Hizmet ikonu anahtarını bileşene eşler
export function ServiceGlyph({ name, ...props }: { name: ServiceIcon } & IconProps) {
  const map = {
    moto: MotoIcon,
    bolt: BoltIcon,
    clock: ClockIcon,
    package: PackageIcon,
    building: BuildingIcon,
    cart: CartIcon,
  } as const;
  const Cmp = map[name];
  return <Cmp {...props} />;
}
