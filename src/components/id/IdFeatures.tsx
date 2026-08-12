"use client";

import {
    CreditCard,
    LayoutDashboard,
    ClipboardList,
    Bell,
    Users,
    Workflow,
    BarChart3,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

// Özellik ikonları — çeviri dizisiyle aynı sırada.
const ICONS = [
    CreditCard,
    LayoutDashboard,
    ClipboardList,
    Bell,
    Users,
    Workflow,
    BarChart3,
];

export function IdFeatures() {
    const { t } = useLanguage();
    const data = t.id.features;

    return (
        <section className="border-t border-white/5 py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <Reveal>
                    <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        {data.title}
                    </h2>
                    <div className="mt-6 h-px w-full max-w-[100px] bg-accent" />
                </Reveal>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data.items.map((label: string, i: number) => {
                        const Icon = ICONS[i] ?? CreditCard;
                        return (
                            <Reveal key={i} delay={i * 60}>
                                <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-white/10 hover:bg-white/[0.04]">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <span className="text-sm font-medium text-foreground">
                                        {label}
                                    </span>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
