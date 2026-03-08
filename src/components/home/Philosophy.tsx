"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Philosophy() {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 mb-24">
                    <div>
                        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                            {t.philosophy.title}
                        </h2>
                        <div className="mt-6 h-px w-[100px] bg-accent" />

                        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-video w-full max-w-md">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="h-full w-full object-cover opacity-80"
                            >
                                <source src="/videos/Meshy_AI_video-5.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {t.philosophy.items.map((item, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                                <p className="text-lg leading-relaxed text-muted">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
