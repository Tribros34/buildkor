"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
    const { t } = useLanguage();

    const footerLinks = [
        { href: "/id", label: t.nav.product, highlight: true },
        { href: "/calismalar", label: t.nav.works },
        { href: "/surec", label: t.nav.process },
        { href: "/hakkimizda", label: t.nav.who_we_are },
        { href: "/#contact", label: t.nav.contact },
    ];

    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="container mx-auto mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 md:px-12">
                {footerLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "text-sm font-medium transition-colors",
                            link.highlight
                                ? "text-accent hover:text-accent/80"
                                : "text-muted hover:text-foreground"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
                <p className="text-sm text-muted">
                    &copy; {new Date().getFullYear()} <span className="font-heading font-semibold"><span className="text-red-500">&lt;</span><span className="text-foreground">Build</span><span className="text-foreground">K</span><span className="text-foreground">or</span><span className="text-red-500">/&gt;</span></span>. {t.footer.rights}
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/company/buildkor/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="BuildKor LinkedIn"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:scale-110"
                    >
                        <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                        href="https://www.instagram.com/buildkor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="BuildKor Instagram"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:scale-110"
                    >
                        <Instagram className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
