"use client";

import { Check, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export function IdProblem() {
    const { t } = useLanguage();
    const data = t.id.problem;

    return (
        <section className="border-t border-border py-24 md:py-32">
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

                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
                    {/* Klasik NFC kart */}
                    <Reveal>
                        <div className="h-full rounded-2xl border border-border bg-surface p-8 md:p-10">
                            <h3 className="font-heading text-xl font-medium text-muted">
                                {data.classic_title}
                            </h3>
                            <ul className="mt-6 space-y-4">
                                {data.classic_points.map((p: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-muted">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-surface">
                                            <X className="h-3 w-3" />
                                        </span>
                                        <span className="leading-relaxed">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* BuildKor ID */}
                    <Reveal delay={80}>
                        <div className="h-full rounded-2xl border border-accent/30 bg-accent/[0.04] p-8 md:p-10 shadow-2xl shadow-accent/5">
                            <h3 className="font-heading text-xl font-medium text-foreground">
                                {data.buildkor_title}
                            </h3>
                            <ul className="mt-6 space-y-4">
                                {data.buildkor_points.map((p: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-accent">
                                            <Check className="h-3 w-3" />
                                        </span>
                                        <span className="leading-relaxed">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
