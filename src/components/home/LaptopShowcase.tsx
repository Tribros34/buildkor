"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Hooks ---

interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
}

function useInView(options: UseInViewOptions = { threshold: 0.1, rootMargin: "0px" }) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return { ref, isInView };
}

function useTilt() {
    const ref = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let requestAnimationFrameId: number;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Max tilt degrees
            const maxTilt = 8;

            // Calculate rotation based on cursor position relative to center
            // RotateY depends on X position (left/right tilt)
            // RotateX depends on Y position (up/down tilt)
            targetY = ((x - centerX) / centerX) * maxTilt;
            targetX = ((y - centerY) / centerY) * -maxTilt; // Invert X for natural feel
        };

        const handleMouseEnter = () => setIsActive(true);
        const handleMouseLeave = () => {
            setIsActive(false);
            targetX = 0;
            targetY = 0;
        };

        const update = () => {
            // Smooth damping (lerp)
            // Factor 0.1 for smooth, heavy feel
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;

            setRotation({ x: currentX, y: currentY });
            requestAnimationFrameId = requestAnimationFrame(update);
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        // Start animation loop
        update();

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseenter", handleMouseEnter);
            element.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(requestAnimationFrameId);
        };
    }, []);

    return { ref, rotation, isActive };
}

function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return prefersReducedMotion;
}

// --- Component ---

export function LaptopShowcase() {
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.2 });
    const { ref: tiltRef, rotation, isActive } = useTilt();
    const prefersReducedMotion = useReducedMotion();

    // Animation states based on inInView and reduced motion
    const isVisible = prefersReducedMotion ? true : isInView;

    // Transform style for the laptop
    const laptopStyle = prefersReducedMotion
        ? {}
        : {
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
            transition: isActive ? "none" : "transform 0.5s ease-out", // Smooth return on leave
        };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#0B0B0C] py-24 md:py-32"
        >
            {/* Subtle Texture/Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
            </div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">

                    {/* Left Column: Content */}
                    <div className={cn(
                        "flex flex-col gap-8 transition-all duration-700 ease-out",
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}>
                        <div className="space-y-6">
                            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                                BuildKor products, <br />
                                crafted with care.
                            </h2>
                            <p className="max-w-md text-lg leading-relaxed text-muted">
                                We build durable software products—clean architecture, thoughtful UX, and long-term iteration.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button className="btn-premium group flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background hover:bg-foreground/90 transition-all">
                                Explore products
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="btn-premium flex h-12 items-center justify-center rounded-full border border-white/10 bg-transparent px-8 text-sm font-medium text-foreground hover:bg-white/5 transition-all">
                                See how we build
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Interactive Laptop */}
                    <div
                        ref={tiltRef}
                        className={cn(
                            "relative flex items-center justify-center perspective-1000 transition-all duration-1000 ease-out delay-100",
                            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-[0.98]"
                        )}
                    >
                        {/* Tilt Container */}
                        <div
                            className="relative w-full max-w-[600px] origin-center"
                            style={laptopStyle}
                        >
                            {/* Laptop Body Structure */}
                            <div className="relative mx-auto aspect-[16/10] w-[85%] rounded-[1.5rem] bg-[#1a1a1b] shadow-2xl ring-1 ring-white/10 sm:w-[90%] md:w-full">

                                {/* Screen Bezel / Border */}
                                <div className="absolute inset-[2px] rounded-[1.4rem] border border-white/5 bg-[#0a0a0a]">

                                    {/* Inner Screen Content (Mock UI) */}
                                    <div className="absolute inset-[6px] overflow-hidden rounded-[1rem] bg-[#0F0F10] flex flex-col">

                                        {/* Top Bar */}
                                        <div className="flex h-10 items-center justify-between border-b border-white/5 bg-white/[0.02] px-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-accent/80"></div>
                                                <span className="text-[10px] font-medium tracking-wide text-muted/80 uppercase">Nexus Dashboard</span>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="h-1.5 w-12 rounded-full bg-white/10"></div>
                                                <div className="h-1.5 w-8 rounded-full bg-white/10"></div>
                                            </div>
                                        </div>

                                        {/* Dashboard Content */}
                                        <div className="flex-1 p-6 grid grid-cols-3 gap-6">

                                            {/* Left Sidebar/List */}
                                            <div className="col-span-1 space-y-3">
                                                <div className="h-8 w-full rounded-md bg-white/5 animate-pulse delay-[0ms] opacity-50"></div>
                                                <div className="h-24 w-full rounded-md border border-white/5 bg-white/[0.02]"></div>
                                                <div className="h-24 w-full rounded-md border border-white/5 bg-white/[0.02]"></div>
                                            </div>

                                            {/* Main Chart Area */}
                                            <div className="col-span-2 flex flex-col gap-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="h-6 w-32 rounded-md bg-white/5"></div>
                                                    <span className="rounded-full border border-accent/20 bg-accent/5 px-2 py-0.5 text-[9px] font-medium text-accent">Status: Beta</span>
                                                </div>

                                                {/* Mock Chart Bars */}
                                                <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-4 flex items-end justify-between gap-2">
                                                    {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-full rounded-t-sm bg-white/10 hover:bg-white/20 transition-colors duration-300"
                                                            style={{ height: `${h}%` }}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Webcam Dot */}
                                <div className="absolute top-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/20"></div>
                            </div>

                            {/* Laptop Base (Bottom Plate) */}
                            <div className="relative mx-auto -mt-2 h-3.5 w-[100%] rounded-b-xl rounded-t-sm bg-[#222224] shadow-lg">
                                {/* Trackpad Notch */}
                                <div className="absolute top-0 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-b-md bg-[#161617]"></div>
                            </div>

                            {/* Specular Highlight Overlay (Subtle Reflection) */}
                            {!prefersReducedMotion && (
                                <div
                                    className="absolute inset-0 pointer-events-none rounded-[1.5rem] bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    style={{
                                        transform: `translate(${rotation.x * -1.5}px, ${rotation.y * -1.5}px)`
                                    }}
                                ></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
