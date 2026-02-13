export function Philosophy() {
    return (
        <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                            Our Approach
                        </h2>
                        <div className="mt-6 h-px w-[100px] bg-accent" />
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-foreground">Thoughtful Engineering</h3>
                            <p className="text-lg leading-relaxed text-muted">
                                We believe in building software that lasts. We prioritize clean architecture, maintainabilitiy, and performance over shortcuts and trendy frameworks.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-foreground">Long-term Thinking</h3>
                            <p className="text-lg leading-relaxed text-muted">
                                Digital products should evolve with your business. Our solutions are designed to scale, adapt, and remain robust years after launch.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-foreground">Sustainable Software</h3>
                            <p className="text-lg leading-relaxed text-muted">
                                We reject the "move fast and break things" mentality. We move with purpose, ensuring every line of code serves a clear function.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
