"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";

/** Site geneli yumuşak kaydırma (Lenis). Sayfa-içi #anchor'ları da yumuşak kaydırır. */
export function SmoothScroll() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let rafId = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // İlk yüklemede hash varsa oraya yumuşak kaydır
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) window.setTimeout(() => lenis.scrollTo(el, { offset: -80 }), 90);
    }

    // Sayfa-içi anchor tıklamaları
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href.includes("#")) return;
      const [path, hash] = href.split("#");
      const samePage = path === "" || path === window.location.pathname;
      if (samePage && hash && document.getElementById(hash)) {
        e.preventDefault();
        lenis.scrollTo(`#${hash}`, { offset: -80 });
        window.history.pushState(null, "", `#${hash}`);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, [reduce]);

  return null;
}
