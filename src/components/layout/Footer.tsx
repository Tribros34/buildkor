"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-white/5 bg-background py-12">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
                <p className="text-sm text-muted">
                    &copy; {new Date().getFullYear()} BuildKor. {t.footer.rights}
                </p>
                <div className="flex gap-6">
                    {/* Social links could go here */}
                </div>
            </div>
        </footer>
    );
}
