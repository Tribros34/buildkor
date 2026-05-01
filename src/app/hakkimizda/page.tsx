"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
    const { t } = useLanguage();
    const data = t.hakkimizda_page;

    return (
        <main className="min-h-screen bg-background pt-24 pb-32">
            {/* Header */}
            <section className="relative overflow-hidden border-b border-white/5 bg-white/[0.01] py-24">
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

            {/* Mission & Values */}
            <section className="container mx-auto px-6 md:px-12 mt-24">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Mission */}
                    <div>
                        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                            {data.mission_title}
                        </h2>
                        <div className="mt-4 h-px w-16 bg-accent" />
                        <p className="mt-8 text-xl leading-relaxed text-muted">
                            {data.mission_desc}
                        </p>
                    </div>

                    {/* Core Values */}
                    <div>
                        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                            {data.values_title}
                        </h2>
                        <div className="mt-4 h-px w-16 bg-accent" />
                        <div className="mt-8 space-y-8">
                            {data.values.map((v: any, index: number) => (
                                <div key={index} className="relative pl-8">
                                    <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                                    <h3 className="text-lg font-medium text-foreground">
                                        {v.title}
                                    </h3>
                                    <p className="mt-2 text-muted leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {data.team && data.team.length > 0 && (
                <section className="container mx-auto px-6 md:px-12 mt-32">
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12">
                        <div className="mb-12 max-w-2xl">
                            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                                {data.founder_title}
                            </h2>
                            <div className="mt-4 h-px w-[100px] bg-accent" />
                            <p className="mt-6 text-lg leading-relaxed text-muted">
                                {data.founder_desc}
                            </p>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {data.team.map((member: any, index: number) => (
                                <div key={index} className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] p-6 transition-colors hover:bg-white/[0.03]">
                                    <div className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                                        {member.role}
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground">
                                        {member.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="container mx-auto px-6 md:px-12 mt-32">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-12 md:p-16 text-center">
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
