"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { HeroDevice } from "./HeroDevice";

/**
 * PLACEHOLDER — Gerçek çekim hazır olunca bu yolu güncelleyin.
 * Önerilen: /public/videos/id-hero.mp4  (H.264, 16:9, 3–6 sn, sık keyframe: ffmpeg -g 1)
 * Şu an geçici olarak sitedeki mevcut bir video ile gösteriliyor.
 */
const HERO_VIDEO_SRC = "/videos/id-hero.mp4";

const WHATSAPP_NUMBER = "905334852386";

// --- helpers ---
const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const smoothstep = (edge0: number, edge1: number, x: number) => {
    const t = clamp((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
};
// visible in [a,b], fades in over [a-in, a], fades out over [b, b+out]
const band = (p: number, a: number, b: number, fade = 0.08) =>
    smoothstep(a - fade, a, p) * (1 - smoothstep(b, b + fade, p));

// --- hooks ---
function useReducedMotion() {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setReduced(mq.matches);
        onChange();
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);
    return reduced;
}

function useIsMobile() {
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const onChange = () => setMobile(mq.matches);
        onChange();
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);
    return mobile;
}

export function IdHero() {
    const { t, language } = useLanguage();
    const data = t.id.hero;

    const reducedMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    // Default to the simple (non-pinned) layout until mounted so there is no
    // SSR/hydration layout jump; only enable the tall scroll-scrub on capable desktops.
    const simple = !mounted || reducedMotion || isMobile;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const waMessage = encodeURIComponent(t.whatsapp.message);
    const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

    // Scroll-scrub engine (desktop only)
    useEffect(() => {
        if (simple) return;
        const wrapper = wrapperRef.current;
        const stage = stageRef.current;
        const video = videoRef.current;
        if (!wrapper || !stage) return;

        let raf = 0;
        let currentTime = 0;
        const progressRef = { value: 0 };
        let duration = 0;

        const onMeta = () => {
            duration = video?.duration && isFinite(video.duration) ? video.duration : 0;
        };
        if (video) {
            if (video.readyState >= 1) onMeta();
            video.addEventListener("loadedmetadata", onMeta);
        }

        const computeProgress = () => {
            const rect = wrapper.getBoundingClientRect();
            const total = wrapper.offsetHeight - window.innerHeight;
            progressRef.value = total > 0 ? clamp(-rect.top / total) : 0;
        };

        const applyVars = (p: number) => {
            stage.style.setProperty("--hint-o", `${band(p, 0.0, 0.06, 0.05)}`);
            stage.style.setProperty("--title-o", `${1 - smoothstep(0.12, 0.3, p)}`);
            stage.style.setProperty("--sub-o", `${band(p, 0.2, 0.55, 0.1)}`);
            stage.style.setProperty("--wave-o", `${band(p, 0.44, 0.62, 0.06)}`);
            stage.style.setProperty("--wave-s", `${1 + smoothstep(0.44, 0.66, p) * 1.4}`);
            stage.style.setProperty("--result-o", `${smoothstep(0.72, 0.9, p)}`);
            stage.style.setProperty("--result-y", `${(1 - smoothstep(0.72, 0.92, p)) * 24}px`);
        };

        const loop = () => {
            const p = progressRef.value;
            if (video && duration > 0) {
                const target = p * duration;
                currentTime += (target - currentTime) * 0.12;
                if (Math.abs(target - currentTime) < 0.01) currentTime = target;
                try {
                    video.currentTime = currentTime;
                } catch {
                    /* seeking not ready yet */
                }
            }
            applyVars(p);
            raf = requestAnimationFrame(loop);
        };

        const onScroll = () => computeProgress();
        computeProgress();
        raf = requestAnimationFrame(loop);
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (video) video.removeEventListener("loadedmetadata", onMeta);
        };
    }, [simple]);

    // ----- Shared visual layers -----
    const GridBg = (
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)]" />
    );

    // Hero her iki temada da koyu (video üstünde) — CTA'lar açık-koyu üstünde sabit.
    const Ctas = (
        <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
                href="#how"
                className="group inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-[#0b0b0c] transition-all hover:scale-105 hover:bg-white/90"
            >
                {data.cta_how}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-white/10"
            >
                {data.cta_contact}
            </a>
        </div>
    );

    // ----- Simple / static fallback (mobile + reduced-motion + pre-hydration) -----
    if (simple) {
        return (
            <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-[#0b0b0c] px-6 pb-16 pt-24 text-center">
                {GridBg}
                {/* video plays a short muted loop on mobile; static frame under reduced-motion */}
                <div className="pointer-events-none absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        src={HERO_VIDEO_SRC}
                        autoPlay={!reducedMotion}
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="h-full w-full object-cover"
                    />
                    {/* Kenar scrim'i — video solgun görünmesin diye düşük yoğunlukta */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0c]/40 via-transparent to-[#0b0b0c]" />
                    {/* İçeriğin arkasına odaklı vignette — videodaki bozuk yazılar okunurluğu bozmasın */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_55%,rgba(11,11,12,0.88),rgba(11,11,12,0.35)_60%,transparent_80%)]" />
                </div>

                <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent">
                        {data.badge}
                    </span>
                    <h1 className="animate-fade-in font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
                        {data.title}
                    </h1>
                    <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                        {data.subtitle}
                    </p>
                    <div className="mt-8">
                        <HeroDevice />
                    </div>
                    <div className="mt-8">{Ctas}</div>
                </div>
            </section>
        );
    }

    // ----- Desktop scroll-scrub (pinned) -----
    return (
        <section ref={wrapperRef} className="relative h-[300vh] bg-[#0b0b0c]">
            <div
                ref={stageRef}
                className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
                style={
                    {
                        "--hint-o": 1,
                        "--title-o": 1,
                        "--sub-o": 0,
                        "--wave-o": 0,
                        "--wave-s": 1,
                        "--result-o": 0,
                        "--result-y": "24px",
                    } as React.CSSProperties
                }
            >
                {/* Video layer (scrubbed via currentTime) */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        src={HERO_VIDEO_SRC}
                        muted
                        playsInline
                        preload="auto"
                        className="h-full w-full object-cover"
                    />
                    {/* Kenar scrim'i — üst/alt; orta (temas anı) net kalsın */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0c]/50 via-[#0b0b0c]/10 to-[#0b0b0c]/80" />
                    {/* Merkez vignette — başlık/altbaşlık/bildirim videodaki bozuk yazılar üzerinde temiz okunsun */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,rgba(11,11,12,0.72),transparent_72%)]" />
                </div>
                {GridBg}

                {/* NFC contact wave — peaks at the tap moment */}
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ opacity: "var(--wave-o)" as unknown as number }}
                >
                    <div
                        className="h-40 w-40 rounded-full border border-accent/60"
                        style={{ transform: "scale(var(--wave-s))" as unknown as string }}
                    />
                    <div
                        className="absolute inset-0 m-auto h-24 w-24 rounded-full border border-accent/40"
                        style={{ transform: "scale(var(--wave-s))" as unknown as string }}
                    />
                </div>

                {/* Title (stage 0) */}
                <div
                    className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-6 text-center"
                    style={{ opacity: "var(--title-o)" as unknown as number }}
                >
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium tracking-wide text-accent">
                        {data.badge}
                    </span>
                    <h1 className="font-heading text-6xl font-bold tracking-tight text-white md:text-8xl">
                        {data.title}
                    </h1>
                    <span
                        className="mt-4 text-xs uppercase tracking-[0.3em] text-zinc-400"
                        style={{ opacity: "var(--hint-o)" as unknown as number }}
                    >
                        {data.scroll_hint}
                    </span>
                </div>

                {/* Subtitle (stage 1–2) */}
                <div
                    className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
                    style={{ opacity: "var(--sub-o)" as unknown as number }}
                >
                    <p className="max-w-2xl text-center font-heading text-2xl font-medium leading-snug text-white md:text-4xl">
                        {data.subtitle}
                    </p>
                </div>

                {/* Result background — dağınık video, temiz sahneye "bağlanır" */}
                <div
                    className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-b from-[#0b0b0c] via-[#0b0b0c]/95 to-[#0b0b0c]"
                    style={{ opacity: "var(--result-o)" as unknown as number }}
                />

                {/* Result (stage 3): temiz cihaz sahnesi + CTA */}
                <div
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10 px-6 text-center"
                    style={{
                        opacity: "var(--result-o)" as unknown as number,
                        transform: "translateY(var(--result-y))" as unknown as string,
                    }}
                >
                    <HeroDevice />
                    {Ctas}
                </div>
            </div>
        </section>
    );
}
