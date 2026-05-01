"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-white/5 bg-background py-12">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
                <p className="text-sm text-muted">
                    &copy; {new Date().getFullYear()} <span className="font-heading font-semibold"><span className="text-red-500">&lt;</span><span className="text-white">Build</span><span className="text-white">K</span><span className="text-white">or</span><span className="text-red-500">/&gt;</span></span>. {t.footer.rights}
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/company/buildkor/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="BuildKor LinkedIn"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:scale-110"
                    >
                        <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                        href="https://www.instagram.com/buildkor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="BuildKor Instagram"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:scale-110"
                    >
                        <Instagram className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
