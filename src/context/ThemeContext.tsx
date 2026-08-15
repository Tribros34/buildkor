"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    // Başlangıç değeri, sayfa <head>'indeki senkron script tarafından zaten
    // <html> üzerine uygulanır (FOUC yok). Burada sadece o durumu yansıtırız.
    const [theme, setThemeState] = useState<Theme>("dark");

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setThemeState(isDark ? "dark" : "light");
    }, []);

    const applyTheme = (next: Theme) => {
        setThemeState(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        try {
            localStorage.setItem("theme", next);
        } catch {
            /* localStorage kapalı olabilir */
        }
    };

    const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: applyTheme }}>
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
