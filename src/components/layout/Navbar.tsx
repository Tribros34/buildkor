"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/5 bg-background/80 px-6 backdrop-blur-md transition-all md:px-12">
            <Link href="/" className="text-lg font-heading font-semibold tracking-tight transition-opacity hover:opacity-80">
                <span className="text-red-500">&lt;</span>
                <span className="text-white">Build</span>
                <span className="text-white">K</span>
                <span className="text-white">or</span>
                <span className="text-red-500">/&gt;</span>
            </Link>

            <div className="flex items-center gap-6">
                <Link
                    href="#contact"
                    className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                    {t.nav.contact}
                </Link>

                <button
                    onClick={toggleLanguage}
                    className="flex h-8 w-14 items-center rounded-full bg-white/5 px-1 transition-colors hover:bg-white/10"
                    aria-label="Toggle Language"
                >
                    <div
                        className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white transition-transform duration-300",
                            language === "tr" ? "translate-x-6" : "translate-x-0"
                        )}
                    >
                        {language.toUpperCase()}
                    </div>
                </button>
            </div>
        </nav>
    );
}
