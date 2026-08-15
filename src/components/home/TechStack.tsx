"use client";

import { useLanguage } from "@/context/LanguageContext";

const TECH_STACK = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Unity",
    "C#",
    "Dart/Flutter",
    "Proxmox",
    "Docker",
];

export function TechStack() {
    const { t } = useLanguage();

    return (
        <section className="border-t border-border bg-background py-16">
            <div className="container mx-auto px-6 md:px-12">
                <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted">
                    {t.techStack.title}
                </p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12">
                    {TECH_STACK.map((tech) => (
                        <span
                            key={tech}
                            className="text-lg font-medium text-muted transition-colors hover:text-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
