"use client";

import { useLanguage } from "@/context/LanguageContext";

export function ProcessVideo() {
    const { t } = useLanguage();

    return (
        <section className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mx-auto max-w-4xl">
                    <div className="card-premium group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-12 transition-all duration-300 hover:border-accent hover:bg-surface-2 hover:shadow-2xl hover:shadow-accent/10">
                        <div className="mb-8 text-center">
                            <h3 className="font-heading text-2xl font-medium text-foreground md:text-3xl mb-4">
                                {t.philosophy.process.title}
                            </h3>
                            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-muted">
                                {t.philosophy.process.description}
                            </p>
                        </div>

                        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-border group-hover:scale-[1.02] transition-transform duration-500">
                            <video
                                src="/videos/Meshy_AI_video-5.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
