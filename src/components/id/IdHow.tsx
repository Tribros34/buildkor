"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";
import { IdFlowWidget } from "./IdFlowWidget";

export function IdHow() {
    const { t } = useLanguage();
    const data = t.id.how;
    const steps = data.steps as { title: string; desc: string }[];

    const [step, setStep] = useState(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const desktop = window.matchMedia("(min-width: 1024px)").matches;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduced) {
            setStep(steps.length - 1);
            return;
        }

        if (desktop) {
            // Ortaya en yakın adım kartı aktif olur → widget o adıma geçer.
            const io = new IntersectionObserver(
                (entries) => {
                    let best = -1;
                    let bestRatio = 0;
                    for (const e of entries) {
                        if (e.isIntersecting && e.intersectionRatio >= bestRatio) {
                            bestRatio = e.intersectionRatio;
                            best = Number((e.target as HTMLElement).dataset.index);
                        }
                    }
                    if (best >= 0) setStep(best);
                },
                { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.75, 1] }
            );
            stepRefs.current.forEach((el) => el && io.observe(el));
            return () => io.disconnect();
        }

        // Mobil: sticky/scroll yerine hafif otomatik döngü demo.
        let i = 0;
        const id = window.setInterval(() => {
            i = (i + 1) % steps.length;
            setStep(i);
        }, 1900);
        return () => clearInterval(id);
    }, [steps.length]);

    return (
        <section id="how" className="scroll-mt-24 border-t border-border py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <Reveal>
                    <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        {data.title}
                    </h2>
                    <div className="mt-6 h-px w-full max-w-[100px] bg-accent" />
                </Reveal>

                <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Sticky akış widget'ı */}
                    <div className="lg:sticky lg:top-24 lg:flex lg:h-[calc(100vh-8rem)] lg:items-center">
                        <div className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-surface p-6 md:p-8">
                            <IdFlowWidget step={step} />
                        </div>
                    </div>

                    {/* Adımlar */}
                    <div>
                        {steps.map((s, i) => (
                            <div
                                key={i}
                                ref={(el) => {
                                    stepRefs.current[i] = el;
                                }}
                                data-index={i}
                                className="lg:flex lg:min-h-[64vh] lg:flex-col lg:justify-center"
                            >
                                <div
                                    className={cn(
                                        "rounded-2xl border p-8 transition-all duration-500",
                                        step === i
                                            ? "border-accent/40 bg-accent/[0.04]"
                                            : "border-border bg-surface lg:opacity-50"
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "font-heading text-4xl font-bold transition-colors",
                                            step === i ? "text-accent" : "text-accent/50"
                                        )}
                                    >
                                        {`0${i + 1}`}
                                    </span>
                                    <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                                        {s.title}
                                    </h3>
                                    <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
