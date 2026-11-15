"use client";

import { useSyncExternalStore } from "react";

type Theme = "auto" | "light" | "dark";
const options: Theme[] = ["auto", "light", "dark"];

const subscribe = (cb: () => void) => {
  window.addEventListener("themechange", cb);
  return () => window.removeEventListener("themechange", cb);
};
const getTheme = () =>
  (document.documentElement.getAttribute("data-theme") as Theme | null) ?? "auto";

export default function ThemeSwitcher() {
  // The saved theme is applied to <html> before paint by the script in layout.tsx.
  const theme = useSyncExternalStore<Theme>(subscribe, getTheme, () => "auto");

  const choose = (next: Theme) => {
    const root = document.documentElement;
    if (next === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", next);
    try {
      if (next === "auto") localStorage.removeItem("theme");
      else localStorage.setItem("theme", next);
    } catch {}
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <div role="group" aria-label="Theme" className="inline-flex border border-line">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={theme === o}
          onClick={() => choose(o)}
          className={`mono px-3 py-2 text-xs uppercase transition-colors ${
            theme === o ? "bg-fg text-bg" : "text-muted hover:text-fg"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
