"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage engelliyse sessizce geç */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Aydınlık temaya geç" : "Karanlık temaya geç"
      }
      title="Temayı değiştir"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-subtle ${className}`}
    >
      {/* Hydration uyumsuzluğunu önlemek için mount olana kadar nötr ikon */}
      {!mounted ? (
        <SunIcon className="h-5 w-5 opacity-0" />
      ) : theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
