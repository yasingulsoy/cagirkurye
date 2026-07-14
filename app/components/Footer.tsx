import Link from "next/link";
import { mailHref, navLinks, site, telHref, waHref } from "@/lib/site";
import { services } from "@/lib/services";
import { MotoIcon, PhoneIcon, WhatsappIcon } from "./icons";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border bg-subtle">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marka */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-fg">
                <MotoIcon className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              {site.slogan} Aynı gün moto kurye, acil kurye ve paket teslimatta{" "}
              {site.city}&apos;un hızlı çözümü.
            </p>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-sm font-semibold">Hizmetler</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal / menü */}
          <div>
            <h3 className="text-sm font-semibold">Kurumsal</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-sm font-semibold">İletişim</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  WhatsApp Destek
                </a>
              </li>
              <li>
                <a
                  href={mailHref}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-sm text-muted">
                {site.address.addressLocality}, Türkiye
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p>{site.city} · 7/24 Kurye Hizmeti</p>
        </div>
      </div>
    </footer>
  );
}
