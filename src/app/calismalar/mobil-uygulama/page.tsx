"use client";

import { ArrowLeft, ArrowUpRight, Smartphone, Code2, AppWindow, Layers } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const TECHNOLOGIES = ["Flutter", "Dart", ".NET MAUI", "C#", "Firebase", "REST APIs", "Cross-Platform"];

export default function MobileDevelopmentPage() {
    const { t } = useLanguage();
    const data = t.mobile_dev;

    const EXPERTISE = [
        {
            icon: <Smartphone className="h-6 w-6 text-accent" />,
            title: data.expertise[0].title,
            description: data.expertise[0].desc,
        },
        {
            icon: <Layers className="h-6 w-6 text-accent" />,
            title: data.expertise[1].title,
            description: data.expertise[1].desc,
        },
        {
            icon: <AppWindow className="h-6 w-6 text-accent" />,
            title: data.expertise[2].title,
            description: data.expertise[2].desc,
        },
        {
            icon: <Code2 className="h-6 w-6 text-accent" />,
            title: data.expertise[3].title,
            description: data.expertise[3].desc,
        },
    ];

    return (
        <main className="min-h-screen bg-background pt-24 pb-32">
            <section className="relative overflow-hidden border-b border-border bg-surface py-24">
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="container relative z-10 mx-auto px-6 md:px-12">
                    <Link
                        href="/calismalar"
                        className="group mb-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        {t.web_dev.back_to_works}
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

            <section className="container mx-auto px-6 md:px-12 mt-24">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {EXPERTISE.map((item, index) => (
                        <div key={index} className="rounded-2xl border border-border bg-surface p-8 hover:bg-surface-2 transition-colors relative overflow-hidden group">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                                {item.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-heading font-semibold text-foreground">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-6 md:px-12 mt-40">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                            {data.showcase_badge}
                        </span>
                    </div>
                    <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                        {data.showcase_title}
                    </h2>
                    <div className="mt-6 h-px w-[100px] bg-accent" />
                </div>

                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-12">
                        <div>
                            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">{data.engine_title}</h3>
                            <p className="text-muted leading-relaxed">
                                {data.engine_desc}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">{data.stack_title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {TECHNOLOGIES.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md border border-border bg-surface-2 px-3 py-1 text-sm text-muted"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="rounded-2xl border border-border bg-surface p-2 overflow-hidden shadow-2xl">
                            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                                <video
                                    src="/videos/meshy_ai_video_4.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                            <p className="text-center text-sm text-muted mt-4 mb-2 font-mono">{data.video_cap}</p>
                        </div>
                    </div>
                </div>
            </section>

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
