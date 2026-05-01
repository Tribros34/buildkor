"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface WorkItem {
    id: 'web' | 'game' | 'workflow' | 'mobile';
    category: 'digital_platform' | 'interactive_experience' | 'process_engineering' | 'cross_platform';
    tags: string[];
    video?: string;
    featured?: boolean;
    href?: string;
}

const WORKS_DATA: WorkItem[] = [
    {
        id: 'web',
        category: 'digital_platform',
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
        video: "/videos/meshy_ai_video.mp4",
        featured: true,
        href: "/calismalar/web-gelistirme",
    },
    {
        id: 'game',
        category: 'interactive_experience',
        tags: ["Unity", "C#", "Blender", "3D Modeling", "WebGL"],
        video: "/videos/meshy_ai_video_2.mp4",
        featured: true,
        href: "/calismalar/oyun-gelistirme",
    },
    {
        id: 'workflow',
        category: 'process_engineering',
        tags: ["n8n", "REST APIs", "Webhooks", "Make", "Zapier"],
        video: "/videos/meshy_ai_video_3.mp4",
        href: "/calismalar/is-akisi-otomasyonu",
    },
    {
        id: 'mobile',
        category: 'cross_platform',
        tags: ["React Native", "Expo", "Swift", "Kotlin", "Firebase"],
        video: "/videos/meshy_ai_video_4.mp4",
        href: "/calismalar/mobil-uygulama",
    },
];

export default function WorksPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background pt-24 pb-32">
            {/* Header */}
            <section className="relative overflow-hidden border-b border-white/5 bg-white/[0.01] py-24">
                <div
                    className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
                />
                <div className="container relative z-10 mx-auto px-6 md:px-12">
                    <Link
                        href="/"
                        className="group mb-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        {t.works_page.back_to_home}
                    </Link>
                    <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground md:text-7xl">
                        {t.products.title}
                    </h1>
                    <div className="mt-6 h-px w-[100px] bg-accent" />
                    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted">
                        {t.works_page.subtitle}
                    </p>
                </div>
            </section>

            {/* Works Grid */}
            <section className="container mx-auto px-6 md:px-12 mt-24">
                <div className="grid gap-8 md:grid-cols-2 mb-8">
                    {WORKS_DATA.filter((w) => w.featured).map((work, index) => (
                        <WorkCard key={index} work={work} large t={t} />
                    ))}
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    {WORKS_DATA.filter((w) => !w.featured).map((work, index) => (
                        <WorkCard key={index} work={work} t={t} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 md:px-12 mt-32">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-12 md:p-16 text-center">
                    <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                        {t.works_page.cta_title}
                    </h2>
                    <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
                        {t.works_page.cta_desc}
                    </p>
                    <Link
                        href="/#contact"
                        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105"
                    >
                        {t.works_page.cta_btn}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

function WorkCard({ work, large = false, t }: { work: WorkItem; large?: boolean; t: any }) {
    const categoryName = t.works_page.categories[work.category];
    const itemData = t.works_page.items[work.id];

    const CardContent = (
        <div
            className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-accent/10 ${
                large ? "md:p-12" : "md:p-10"
            }`}
        >
            <div className="flex-1">
                <div className="mb-6 inline-flex items-center gap-2">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {categoryName}
                    </span>
                </div>
                <div className="mb-4 flex items-start justify-between">
                    <h2
                        className={`font-heading font-semibold tracking-tight text-foreground ${
                            large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                        }`}
                    >
                        {itemData.title}
                    </h2>
                    {work.href && (
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    )}
                </div>
                <p className="mb-8 text-base leading-relaxed text-muted">{itemData.desc}</p>
            </div>
            <div className="mt-auto">
                <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] transition-transform duration-500 group-hover:scale-[1.02]">
                    {work.video ? (
                        <video
                            src={work.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-sm text-white/20">
                            {t.products.interface_placeholder}
                        </div>
                    )}
                </div>
                <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-white/5 px-3 py-1 text-xs text-muted border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    if (work.href) {
        return (
            <Link href={work.href} className="block h-full outline-none">
                {CardContent}
            </Link>
        );
    }

    return CardContent;
}
