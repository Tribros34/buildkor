import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-background px-6 pt-16 text-center md:px-12">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8">
                <h1 className="animate-fade-in font-heading text-6xl font-semibold tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
                    BuildKor
                </h1>

                <p className="animate-fade-in-up max-w-2xl text-xl text-muted delay-100 sm:text-2xl md:text-3xl font-light leading-relaxed">
                    We build digital products used by millions. <br className="hidden sm:block" />
                    Software products, automation systems, and scalable platforms.
                </p>

                <div className="animate-fade-in-up mt-8 flex flex-col gap-4 delay-200 sm:flex-row">
                    <Link
                        href="#products"
                        className="group flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all hover:bg-foreground/90 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
                    >
                        Explore Products
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#contact"
                        className="flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-8 text-sm font-medium text-foreground transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    );
}
