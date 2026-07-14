"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { navLinks, site, telHref } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { MotoIcon, PhoneIcon } from "./icons";

const easeOut = [0.22, 1, 0.36, 1] as const;

const mobileList: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
};
const mobileItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: easeOut } },
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route değişince mobil menüyü kapat
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menü açıkken arka planı kilitle
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-[3px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: easeOut }}
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <motion.header
        className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md"
        initial={false}
        animate={{
          borderColor: scrolled ? "var(--border)" : "rgba(0,0,0,0)",
          boxShadow: scrolled
            ? "0 12px 40px -20px rgba(0,0,0,0.25)"
            : "0 0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <motion.div
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 26 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label={site.name}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-fg">
                <MotoIcon className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                {site.name}
              </span>
            </Link>
          </motion.div>

          {/* Masaüstü menü */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Ana menü"
          >
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left bg-foreground transition-transform duration-300 ease-out ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Sağ aksiyonlar */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <motion.a
              href={telHref}
              className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg sm:inline-flex"
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              <PhoneIcon className="h-4 w-4" />
              Kurye Çağır
            </motion.a>

            {/* Hamburger */}
            <motion.button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
              whileTap={reduce ? undefined : { scale: 0.92 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <motion.span
                className="flex items-center justify-center"
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
              >
                {open ? (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* Mobil menü */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              id="mobile-nav"
              className="overflow-hidden border-t border-border bg-background/98 backdrop-blur-md lg:hidden"
              initial={reduce ? false : { height: 0, opacity: 0.6 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0.85 }}
              transition={
                reduce
                  ? { duration: 0.15 }
                  : {
                      height: { duration: 0.36, ease: easeOut },
                      opacity: { duration: 0.22 },
                    }
              }
            >
              <motion.nav
                className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6"
                aria-label="Mobil menü"
                variants={reduce ? undefined : mobileList}
                initial="hidden"
                animate="show"
              >
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <motion.div key={link.href} variants={reduce ? undefined : mobileItem}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-subtle ${
                          active ? "text-foreground" : "text-muted"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.a
                  href={telHref}
                  variants={reduce ? undefined : mobileItem}
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-base font-semibold text-accent-fg"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Hemen Kurye Çağır
                </motion.a>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
