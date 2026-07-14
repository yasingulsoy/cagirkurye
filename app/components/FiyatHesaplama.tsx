"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import {
  calcPrice,
  distancePresets,
  pricing,
  serviceOptions,
  sizeOptions,
  type PackageSize,
  type ServiceType,
} from "@/lib/pricing";
import { site, telHref } from "@/lib/site";
import { MoonIcon, PhoneIcon, ShieldIcon, WhatsappIcon } from "./icons";

// Hedef değere yumuşak sayan sayaç (reduced-motion'da anında)
function useCountUp(target: number, enabled: boolean, duration = 450) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);

  useEffect(() => {
    if (!enabled) {
      setValue(target);
      fromRef.current = target;
      return;
    }
    const from = fromRef.current;
    if (from === target) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        fromRef.current = target;
        setValue(target);
      }
    };
    raf = requestAnimationFrame(tick);
    // Güvenlik ağı: rAF duraksarsa (arka plan sekmesi) sayı yine de doğru değere otursun.
    const safety = window.setTimeout(() => {
      fromRef.current = target;
      setValue(target);
    }, duration + 80);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(safety);
    };
  }, [target, enabled, duration]);

  return value;
}

const segBtn =
  "flex-1 rounded-xl border px-3 py-3 text-center transition-colors cursor-pointer";

export function FiyatHesaplama() {
  const reduce = useReducedMotion();
  const [service, setService] = useState<ServiceType>("standart");
  const [km, setKm] = useState(8);
  const [size, setSize] = useState<PackageSize>("zarf");
  const [insurance, setInsurance] = useState(false);
  const [nightWeekend, setNightWeekend] = useState(false);

  const total = calcPrice({ km, service, size, insurance, nightWeekend });
  const shown = useCountUp(total, !reduce);

  const serviceLabel = serviceOptions.find((s) => s.value === service)?.label;
  const sizeLabel = sizeOptions.find((s) => s.value === size)?.label;

  const waText = `Merhaba, kurye çağırmak istiyorum.%0aTahmini ücret: ${pricing.currency}${total}%0aHizmet: ${serviceLabel}%0aMesafe: ~${km} km%0aGönderi: ${sizeLabel}`;
  const waHref = `https://wa.me/${site.whatsapp}?text=${waText}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      {/* Girdiler */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
        {/* Hizmet tipi */}
        <fieldset>
          <legend className="text-sm font-semibold">Hizmet tipi</legend>
          <div className="mt-3 flex gap-2.5">
            {serviceOptions.map((o) => {
              const active = service === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => setService(o.value)}
                  aria-pressed={active}
                  className={`${segBtn} ${
                    active
                      ? "border-accent bg-accent text-accent-fg"
                      : "border-border hover:bg-subtle"
                  }`}
                >
                  <span className="block text-sm font-semibold">{o.label}</span>
                  <span
                    className={`mt-0.5 block text-xs ${active ? "opacity-80" : "text-muted"}`}
                  >
                    {o.note}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Mesafe */}
        <div className="mt-8">
          <div className="flex items-baseline justify-between">
            <label htmlFor="km" className="text-sm font-semibold">
              Tahmini mesafe
            </label>
            <span className="text-sm font-semibold tabular-nums">~{km} km</span>
          </div>
          <input
            id="km"
            type="range"
            min={1}
            max={pricing.maxKm}
            value={km}
            onChange={(e) => setKm(Number(e.target.value))}
            className="mt-3 w-full accent-foreground"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {distancePresets.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setKm(p.km)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  km === p.km
                    ? "border-accent bg-accent text-accent-fg"
                    : "border-border text-muted hover:bg-subtle"
                }`}
              >
                {p.label} · ~{p.km} km
              </button>
            ))}
          </div>
        </div>

        {/* Gönderi boyutu */}
        <fieldset className="mt-8">
          <legend className="text-sm font-semibold">Gönderi boyutu</legend>
          <div className="mt-3 flex gap-2.5">
            {sizeOptions.map((o) => {
              const active = size === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => setSize(o.value)}
                  aria-pressed={active}
                  className={`${segBtn} ${
                    active
                      ? "border-accent bg-accent text-accent-fg"
                      : "border-border hover:bg-subtle"
                  }`}
                >
                  <span className="block text-sm font-semibold">{o.label}</span>
                  <span
                    className={`mt-0.5 block text-xs ${active ? "opacity-80" : "text-muted"}`}
                  >
                    {o.note}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Ekstralar */}
        <div className="mt-8">
          <p className="text-sm font-semibold">Ekstralar</p>
          <div className="mt-3 space-y-2.5">
            <ExtraToggle
              icon={<ShieldIcon className="h-5 w-5" />}
              title="Sigortalı taşıma"
              note={`+%${Math.round(pricing.insuranceRate * 100)} · değerli gönderiler için`}
              checked={insurance}
              onChange={() => setInsurance((v) => !v)}
            />
            <ExtraToggle
              icon={<MoonIcon className="h-5 w-5" />}
              title="Gece / hafta sonu"
              note={`+%${Math.round(pricing.nightWeekendRate * 100)} · 22:00 sonrası ve tatiller`}
              checked={nightWeekend}
              onChange={() => setNightWeekend((v) => !v)}
            />
          </div>
        </div>
      </div>

      {/* Sonuç */}
      <div className="lg:sticky lg:top-24">
        <div className="rounded-3xl border border-border bg-accent p-6 text-accent-fg sm:p-8">
          <p className="text-sm opacity-80">Tahmini ücret</p>
          <p className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-semibold">{pricing.currency}</span>
            <span className="text-5xl font-extrabold tabular-nums tracking-tight">
              {shown.toLocaleString("tr-TR")}
            </span>
          </p>

          <ul className="mt-5 space-y-1.5 text-sm opacity-90">
            <li className="flex justify-between gap-4">
              <span>Hizmet</span>
              <span className="font-medium">{serviceLabel}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Mesafe</span>
              <span className="font-medium">~{km} km</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Gönderi</span>
              <span className="font-medium">{sizeLabel}</span>
            </li>
            {(insurance || nightWeekend) && (
              <li className="flex justify-between gap-4">
                <span>Ekstra</span>
                <span className="font-medium">
                  {[insurance && "Sigorta", nightWeekend && "Gece/HS"]
                    .filter(Boolean)
                    .join(", ")}
                </span>
              </li>
            )}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              <WhatsappIcon className="h-5 w-5" />
              Bu fiyata kurye çağır
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-current px-5 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <p className="mt-4 text-xs leading-5 text-muted">
          Bu bir <strong className="font-semibold text-foreground">tahmini</strong>{" "}
          ücrettir. Kesin fiyat; alım–teslim adresleri, gerçek mesafe ve gönderi
          detayına göre çağrı sırasında netleşir.
        </p>
      </div>
    </div>
  );
}

function ExtraToggle({
  icon,
  title,
  note,
  checked,
  onChange,
}: {
  icon: ReactNode;
  title: string;
  note: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
        checked ? "border-foreground bg-subtle" : "border-border hover:bg-subtle"
      }`}
    >
      <span className="flex-none">{icon}</span>
      <span className="flex-1">
        <span className="block text-sm font-semibold">{title}</span>
        <span className="block text-xs text-muted">{note}</span>
      </span>
      <span
        className={`relative h-6 w-10 flex-none rounded-full transition-colors ${
          checked ? "bg-accent" : "bg-border"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-background transition-all ${
            checked ? "left-[1.125rem]" : "left-0.5"
          }`}
        />
      </span>
    </button>
  );
}
