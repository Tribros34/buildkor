"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductData {
    href: string;
    video?: string;
}

const PRODUCT_DATA: ProductData[] = [
    { href: "/calismalar/web-gelistirme", video: "/videos/meshy_ai_video.mp4" },
    { href: "/calismalar/oyun-gelistirme", video: "/videos/meshy_ai_video_2.mp4" },
    { href: "/calismalar/is-akisi-otomasyonu", video: "/videos/meshy_ai_video_3.mp4" },
    { href: "/calismalar/mobil-uygulama", video: "/videos/meshy_ai_video_4.mp4" },
];

export function Products() {
    const { t } = useLanguage();

    return (
        <section id="products" className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 md:mb-24">
                    <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        {t.products.title}
                    </h2>
                    <div className="mt-6 h-px w-full max-w-[100px] bg-accent" />
                </div>

                {/* Öne çıkan kendi ürünümüz: BuildKor ID */}
                <Link href="/id" className="mb-8 block outline-none lg:mb-12">
                    <div className="group relative grid overflow-hidden rounded-2xl border border-accent/30 bg-accent/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 md:grid-cols-2">
                        <div className="flex flex-col justify-center p-8 md:p-12">
                            <span className="inline-flex w-fit items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent">
                                {t.id.home.badge}
                            </span>
                            <h3 className="mt-6 font-heading text-3xl font-semibold text-foreground md:text-4xl">
                                {t.id.home.title}
                            </h3>
                            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                                {t.id.home.desc}
                            </p>
                            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors group-hover:text-foreground">
                                {t.id.home.cta}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </div>
                        <div className="relative min-h-[220px] overflow-hidden border-t border-accent/20 md:border-l md:border-t-0">
                            <video
                                src="/videos/id-hero.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                        </div>
                    </div>
                </Link>

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {t.products.items.map((product, index) => {
                        const data = PRODUCT_DATA[index];
                        return (
                            <Link href={data.href} key={index} className="block outline-none">
                                <div
                                    className="card-premium group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-12 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:bg-surface-2 hover:shadow-2xl hover:shadow-accent/10"
                                >
                                    <div className="mb-8">
                                        <div className="mb-6 flex items-center justify-between">
                                            <h3 className="font-heading text-2xl font-medium text-foreground md:text-3xl">
                                                {product.name}
                                            </h3>
                                            <ArrowUpRight className="h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 text-muted" />
                                        </div>
                                        <p className="max-w-md text-lg leading-relaxed text-muted">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* visual placeholder/media */}
                                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-border group-hover:scale-105 transition-transform duration-500">
                                        {data?.video ? (
                                            <video
                                                src={data.video}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                preload="auto"
                                                className="absolute inset-0 h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-muted">
                                                {t.products.interface_placeholder}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
