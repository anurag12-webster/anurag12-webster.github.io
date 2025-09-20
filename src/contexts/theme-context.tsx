"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  resetToSystemTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check system preference first
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const systemTheme = prefersDark ? "dark" : "light";
    
    // Get theme from localStorage or use system preference
    const savedTheme = localStorage.getItem("theme") as Theme;
    const initialTheme = savedTheme || systemTheme;
    
    setThemeState(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-change if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        setThemeState(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const resetToSystemTheme = () => {
    localStorage.removeItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const systemTheme = prefersDark ? "dark" : "light";
    setThemeState(systemTheme);
    document.documentElement.classList.toggle("dark", systemTheme === "dark");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Always render children, but provide safe defaults when not mounted
  const contextValue = mounted
    ? { theme, toggleTheme, setTheme, resetToSystemTheme }
    : { theme: "light" as Theme, toggleTheme: () => {}, setTheme: () => {}, resetToSystemTheme: () => {} };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
