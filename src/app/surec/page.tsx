"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessPage() {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const { t } = useLanguage();
    const data = t.surec_page;

    return (
        <main className="min-h-screen bg-background pt-24 pb-32">
            {/* Header */}
            <section className="relative overflow-hidden border-b border-border bg-surface py-24">
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="container relative z-10 mx-auto px-6 md:px-12">
                    <Link
                        href="/"
                        className="group mb-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        {data.back_to_home}
                    </Link>
                    <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground md:text-7xl">
                        {data.title}
                    </h1>
                    <div className="mt-6 h-px w-[100px] bg-accent" />
                    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted">
                        {data.subtitle}
                    </p>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="container mx-auto px-6 md:px-12 mt-24">
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-px bg-surface-2 md:left-1/2 md:-translate-x-px hidden md:block" />

                    <div className="space-y-8">
                        {data.steps.map((step: any, index: number) => {
                            const isActive = activeStep === index;
                            const isLeft = index % 2 === 0;
                            const stepNum = `0${index + 1}`;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex gap-8 md:gap-0 ${
                                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Step number bubble — center on md */}
                                    <div className="relative z-10 flex shrink-0 items-start justify-center md:absolute md:left-1/2 md:top-8 md:-translate-x-1/2">
                                        <button
                                            onClick={() =>
                                                setActiveStep(isActive ? null : index)
                                            }
                                            className={`flex h-14 w-14 items-center justify-center rounded-full border text-sm font-bold font-heading transition-all duration-300 ${
                                                isActive
                                                    ? "border-accent bg-accent text-white scale-110"
                                                    : "border-border bg-surface text-muted hover:border-accent/50 hover:text-foreground hover:scale-105"
                                            }`}
                                        >
                                            {stepNum}
                                        </button>
                                    </div>

                                    {/* Content card */}
                                    <div
                                        className={`group flex-1 md:w-[calc(50%-3.5rem)] ${
                                            isLeft
                                                ? "md:mr-auto md:pr-16"
                                                : "md:ml-auto md:pl-16"
                                        }`}
                                    >
                                        <button
                                            onClick={() =>
                                                setActiveStep(isActive ? null : index)
                                            }
                                            className="w-full text-left"
                                        >
                                            <div
                                                className={`rounded-2xl border p-8 transition-all duration-300 ${
                                                    isActive
                                                        ? "border-accent/40 bg-accent/5"
                                                        : "border-border bg-surface hover:border-border hover:bg-surface"
                                                }`}
                                            >
                                                {/* Phase badge */}
                                                <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                                                    {data.phase} {stepNum} · {step.phase}
                                                </span>

                                                <div className="flex items-center justify-between">
                                                    <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                                                        {step.title}
                                                    </h2>
                                                </div>

                                                <p className="mt-3 text-base leading-relaxed text-muted">
                                                    {step.desc}
                                                </p>

                                                {/* Expandable deliverables */}
                                                <div
                                                    className={`overflow-hidden transition-all duration-500 ${
                                                        isActive
                                                            ? "max-h-64 opacity-100 mt-6"
                                                            : "max-h-0 opacity-0"
                                                    }`}
                                                >
                                                    <div className="border-t border-border pt-6">
                                                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                                                            {data.deliverables_title}
                                                        </p>
                                                        <ul className="space-y-2">
                                                            {step.deliverables.map((d: string) => (
                                                                <li
                                                                    key={d}
                                                                    className="flex items-center gap-3 text-sm text-muted"
                                                                >
                                                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                                                    {d}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Principles section */}
            <section className="container mx-auto px-6 md:px-12 mt-32">
                <div className="mb-12">
                    <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        {data.principles_title}
                    </h2>
                    <div className="mt-6 h-px w-[100px] bg-accent" />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {data.principles.map((p: any, i: number) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-border bg-surface p-8 transition-all hover:border-border hover:bg-surface-2"
                        >
                            <div className="mb-4 font-heading text-4xl font-bold text-white/5">
                                0{i + 1}
                            </div>
                            <h3 className="mb-3 text-lg font-medium text-foreground">
                                {p.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 md:px-12 mt-32">
                <div className="rounded-2xl border border-border bg-surface p-12 md:p-16 text-center">
                    <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                        {data.cta_title}
                    </h2>
                    <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
                        {data.cta_desc}
                    </p>
                    <Link
                        href="/#contact"
                        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105"
                    >
                        {data.cta_btn}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
