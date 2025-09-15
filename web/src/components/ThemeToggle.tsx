"use client";

import { useEffect, useState } from "react";

const THEME_KEY = "theme"; // "light" | "dark" | "system"

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as Theme | null) ?? null;
    const initial = saved ?? getSystemTheme();
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      <span aria-hidden>{theme === "dark" ? "🌙" : "☀️"}</span>
    </button>
  );
}
