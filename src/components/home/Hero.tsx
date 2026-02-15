"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { t } = useLanguage();
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { width, height } = hero.getBoundingClientRect();
            const x = (clientX / width - 0.5) * 20; // Move up to 10px
            const y = (clientY / height - 0.5) * 20;

            hero.style.setProperty("--mouse-x", `${x}px`);
            hero.style.setProperty("--mouse-y", `${y}px`);
        };

        hero.addEventListener("mousemove", handleMouseMove);
        return () => hero.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-background px-6 pt-16 text-center md:px-12"
        >
            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] transition-transform duration-200 ease-out will-change-transform"
                style={{ transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))" }}
            />

            <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8">
                <h1 className="animate-fade-in font-heading text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
                    {t.hero.title_start} <span className="text-accent">{t.hero.title_core}</span> {t.hero.title_end}
                </h1>

                <p className="animate-fade-in max-w-2xl text-xl text-muted delay-100 sm:text-2xl md:text-3xl font-light leading-relaxed">
                    {t.hero.subtitle}
                </p>

                <div className="animate-fade-in mt-2 flex flex-col gap-4 delay-200 sm:flex-row">
                    <Link
                        href="#products"
                        className="group inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105"
                    >
                        {t.hero.cta_products}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-8 text-sm font-medium text-foreground transition-all hover:bg-white/[0.05] hover:scale-105"
                    >
                        {t.hero.cta_contact}
                    </Link>
                </div>
            </div>
        </section>
    );
}
