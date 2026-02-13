const TECHNOLOGIES = [
    "Next.js",
    "React Native",
    "Cloud Infrastructure",
    "DevOps Automation",
    "High-Performance APIs",
    "Distributed Systems",
];

export function TechStack() {
    return (
        <section className="py-24 border-b border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center md:gap-x-12">
                    {TECHNOLOGIES.map((tech) => (
                        <span
                            key={tech}
                            className="text-lg font-medium text-muted transition-colors hover:text-foreground md:text-xl"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
