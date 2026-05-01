"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const { t, language, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/calismalar", label: t.nav.works },
        { href: "/surec", label: t.nav.process },
        { href: "/hakkimizda", label: t.nav.who_we_are },
        { href: "/#contact", label: t.nav.contact },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md transition-all">
            <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12">
                <Link href="/" className="text-lg font-heading font-semibold tracking-tight transition-opacity hover:opacity-80">
                    <span className="text-red-500">&lt;</span>
                    <span className="text-white">Build</span>
                    <span className="text-white">K</span>
                    <span className="text-white">or</span>
                    <span className="text-red-500">/&gt;</span>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Language toggle - Always visible */}
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

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex ml-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-foreground md:hidden"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Right aligned slide-in */}
            <div
                className={cn(
                    "fixed inset-y-0 right-0 z-40 w-full max-w-[300px] flex flex-col bg-background/95 backdrop-blur-xl border-l border-white/5 transition-all duration-300 ease-in-out md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-6 pt-24 px-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-2xl font-heading font-semibold text-foreground transition-all duration-300 delay-[var(--delay)]",
                                isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                            )}
                            style={{ "--delay": `${index * 50}ms` } as any}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Backdrop for closing when clicking outside */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-30 bg-black/20 md:hidden" 
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
}
