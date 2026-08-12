"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Hafif scroll-reveal — mevcut sitenin IntersectionObserver deseniyle aynı
 * (bkz. LaptopShowcase). reduced-motion'da anında görünür, animasyon yok.
 */
export function Reveal({
    children,
    className,
    delay = 0,
    as: Tag = "div",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    as?: React.ElementType;
}) {
    const ref = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.unobserve(entry.target);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const visible = reduced || inView;

    return (
        <Tag
            ref={ref as React.Ref<HTMLElement>}
            className={cn(
                "transition-all duration-700 ease-out will-change-transform",
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    );
}
