"use client";

import { useLanguage } from "@/context/LanguageContext";

export function About() {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32">
            <div className="container mx-auto max-w-4xl px-6 text-center md:px-12">
                <p className="font-heading text-3xl font-medium leading-tight text-foreground md:text-5xl lg:leading-tight">
                    {t.about.text_start} <span className="text-accent">{t.about.text_core}</span> {t.about.text_end}
                </p>
            </div>
        </section>
    );
}
