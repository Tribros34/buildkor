"use client";

import { useEffect, useState } from "react";
import { Home, PawPrint, Building2, Sparkles, Car, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

// Sektör ikonları — çeviri dizisiyle aynı sırada.
const ICONS = [Home, PawPrint, Building2, Sparkles, Car];

// Sektöre özel kullanım senaryosu — kendi içinde loop dönen dikey mini akış şeması.
// `active` tüm sektörlerde ortak → hepsi aynı anda senkron ilerler.
function SectorFlow({ steps, active }: { steps: string[]; active: number }) {
    return (
        <div className="mt-6 border-t border-white/5 pt-6">
            {steps.map((s, i) => {
                const isLast = i === steps.length - 1;
                const done = i < active;
                const current = i === active;
                const on = i <= active;
                return (
                    <div key={i} className="relative flex gap-3 pb-4 last:pb-0">
                        {!isLast && (
                            <span
                                className={cn(
                                    "absolute left-[11px] top-6 h-full w-px transition-colors duration-500",
                                    done ? "bg-accent/50" : "bg-white/10"
                                )}
                            />
                        )}
                        <span
                            className={cn(
                                "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-500",
                                current
                                    ? "scale-110 border-accent bg-accent text-white shadow-lg shadow-accent/20 ring-2 ring-accent/25"
                                    : on
                                        ? "border-accent/40 bg-accent/15 text-accent"
                                        : "border-white/10 bg-white/[0.03] text-muted"
                            )}
                        >
                            {i + 1}
                        </span>
                        <span
                            className={cn(
                                "pt-0.5 text-xs leading-snug transition-colors duration-500",
                                current ? "text-foreground" : "text-muted"
                            )}
                        >
                            {s}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

// PLACEHOLDER — sektör demoları hazır olunca buraya URL girin (null → "Yakında").
const DEMO_URLS: (string | null)[] = [null, null, null, null, null];

export function IdSectors() {
    const { t } = useLanguage();
    const data = t.id.sectors;

    // Tüm sektörlerde ortak, senkron loop — kart adımları aynı anda ilerler.
    const stepCount = data.items[0]?.flow.length ?? 4;
    const [active, setActive] = useState(0);
    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
            setActive(stepCount - 1);
            return;
        }
        const id = window.setInterval(() => {
            setActive((a) => (a + 1) % stepCount);
        }, 1100);
        return () => clearInterval(id);
    }, [stepCount]);

    return (
        <section className="border-t border-white/5 py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <Reveal>
                    <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        {data.title}
                    </h2>
                    <div className="mt-6 h-px w-full max-w-[100px] bg-accent" />
                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
                        {data.lead}
                    </p>
                </Reveal>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.items.map(
                        (item: { name: string; promise: string; flow: string[] }, i: number) => {
                            const Icon = ICONS[i] ?? Home;
                            const demo = DEMO_URLS[i];
                            return (
                                <Reveal key={i} delay={i * 70}>
                                    <div className="group flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.04]">
                                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                                            <Icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <h3 className="font-heading text-xl font-semibold text-foreground">
                                            {item.name}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-muted">
                                            {item.promise}
                                        </p>

                                        <SectorFlow steps={item.flow} active={active} />

                                        <div className="mt-auto pt-6">
                                            {demo ? (
                                                <a
                                                    href={demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-foreground"
                                                >
                                                    {data.demo_label}
                                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                </a>
                                            ) : (
                                                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted">
                                                    {data.demo_soon}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
}
