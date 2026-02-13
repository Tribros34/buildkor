import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Product {
    name: string;
    description: string;
    href: string;
}

const PRODUCTS: Product[] = [
    {
        name: "Nexus",
        description: "Enterprise-grade real-time data synchronization engine.",
        href: "#",
    },
    {
        name: "Vantage",
        description: "Predictive analytics dashboard for high-volume logistics.",
        href: "#",
    },
    {
        name: "Pulse",
        description: "Automated infrastructure monitoring and healing system.",
        href: "#",
    },
    {
        name: "Flow",
        description: "Developer-first workflow automation platform.",
        href: "#",
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
                            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-white/10 hover:bg-white/[0.04] md:p-12"
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

                            {/* Mockup Placeholder */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5">
                                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white/20">
                                    Product Interface
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link
                                    href={product.href}
                                    className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
