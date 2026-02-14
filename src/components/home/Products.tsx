import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Product {
    name: string;
    description: string;
    href: string;
    video?: string;
}

const PRODUCTS: Product[] = [
    {
        name: "Web Development",
        description: "Premium Web Experiences. Bespoke, high-performance websites and digital platforms crafted with engineering excellence and modern design principles.",
        href: "#",
        video: "/videos/meshy_ai_video.mp4",
    },
    {
        name: "Game Development",
        description: "Immersive Simulations & Gaming. High-fidelity interactive experiences and simulations powered by Unity, pushing the boundaries of visual storytelling.",
        href: "#",
        video: "/videos/meshy_ai_video_2.mp4",
    },
    {
        name: "Workflow Automation",
        description: "Intelligent Automation Systems. Leveraging n8n to orchestrate complex business workflows, eliminating manual bottlenecks and accelerating operational efficiency.",
        href: "#",
        video: "/videos/meshy_ai_video_3.mp4",
    },
    {
        name: "Mobile App Development",
        description: "Cross-Platform Mobile Engineering. We build native-quality iOS and Android applications using modern frameworks, ensuring seamless performance across all devices.",
        href: "#",
        video: "/videos/meshy_ai_video_4.mp4",
    },
];

export function Products() {
    return (
        <section id="products" className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 md:mb-24">
                    <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        Selected Products
                    </h2>
                    <div className="mt-6 h-px w-full max-w-[100px] bg-accent" />
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.name}
                            className="card-premium group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 md:p-12 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-accent/10"
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
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 group-hover:scale-105 transition-transform duration-500">
                                {product.video ? (
                                    <video
                                        src={product.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white/20">
                                        Product Interface
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
