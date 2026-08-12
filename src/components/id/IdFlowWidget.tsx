"use client";

import React from "react";

// Adım göstergesi düğüm konumları (x)
const NODES = [40, 126.67, 213.33, 300];

function Wave({ r, delay }: { r: number; delay: number }) {
    return (
        <circle
            cx={0}
            cy={0}
            r={r}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={1.5}
            style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: "nfc-ping 2.2s ease-out infinite",
                animationDelay: `${delay}s`,
            }}
        />
    );
}

function Variant({
    show,
    children,
    dy = 6,
}: {
    show: boolean;
    children: React.ReactNode;
    dy?: number;
}) {
    return (
        <g
            style={{
                opacity: show ? 1 : 0,
                transform: `translateY(${show ? 0 : dy}px)`,
                transition: "opacity .45s ease, transform .45s ease",
            }}
        >
            {children}
        </g>
    );
}

/**
 * BuildKor ID akış widget'ı — telefon + kartvizit okutma sahnesi.
 * `step` (0..3) ile ekran içeriği, NFC dalgaları, bildirim ve alt gösterge
 * pürüzsüz (opacity/transform) geçişlerle güncellenir. Saf SVG + CSS, keskin.
 */
export function IdFlowWidget({ step }: { step: number }) {
    // Kart hareketi: 1. adımda telefona gelip okutur (döngü); sonra geri çekilir.
    const cardStyle: React.CSSProperties =
        step === 0
            ? { animation: "nfc-card-tap 2.4s ease-in-out infinite" }
            : {
                  transform: step >= 2 ? "translate(-26px, 20px)" : "translate(0px, 0px)",
                  opacity: step >= 2 ? 0.4 : 0.9,
                  transition: "transform .6s ease, opacity .6s ease",
              };

    return (
        <svg viewBox="0 0 340 420" className="h-auto w-full" role="img" aria-hidden="true">
            {/* Telefon gövdesi */}
            <rect x={120} y={58} width={100} height={214} rx={20} fill="#101012" stroke="rgba(255,255,255,0.14)" strokeWidth={1.5} />
            {/* Ekran okuma parıltısı */}
            <rect
                x={129}
                y={70}
                width={82}
                height={190}
                rx={11}
                fill="var(--accent)"
                style={{ opacity: step <= 0 ? 0.16 : step === 1 ? 0.06 : 0, transition: "opacity .5s ease" }}
            />
            <rect x={129} y={70} width={82} height={190} rx={11} fill="#0B0B0C" fillOpacity={0.9} stroke="rgba(255,255,255,0.08)" />
            <rect x={160} y={64} width={20} height={3} rx={1.5} fill="rgba(255,255,255,0.18)" />
            <rect x={158} y={250} width={24} height={3} rx={1.5} fill="rgba(255,255,255,0.22)" />

            {/* Ekran içeriği (adıma göre) */}
            <clipPath id="bk-screen-clip">
                <rect x={129} y={70} width={82} height={190} rx={11} />
            </clipPath>
            <g clipPath="url(#bk-screen-clip)">
                {/* 0 — kart okutulur */}
                <Variant show={step === 0}>
                    <circle cx={170} cy={150} r={5} fill="var(--accent)" />
                    <circle cx={170} cy={150} r={14} fill="none" stroke="var(--accent)" strokeOpacity={0.5} />
                    <rect x={150} y={178} width={40} height={5} rx={2} fill="rgba(255,255,255,0.12)" />
                </Variant>
                {/* 1 — sektöre özel sayfa açılır */}
                <Variant show={step === 1}>
                    <rect x={137} y={84} width={66} height={9} rx={2} fill="rgba(255,255,255,0.12)" />
                    <rect x={137} y={100} width={66} height={34} rx={4} fill="var(--accent)" fillOpacity={0.15} stroke="var(--accent)" strokeOpacity={0.3} />
                    <rect x={137} y={142} width={66} height={6} rx={2} fill="rgba(255,255,255,0.12)" />
                    <rect x={137} y={152} width={42} height={6} rx={2} fill="rgba(255,255,255,0.10)" />
                    <rect x={137} y={170} width={40} height={13} rx={6} fill="var(--accent)" />
                </Variant>
                {/* 2 — ziyaretçi talep bırakır */}
                <Variant show={step === 2}>
                    <rect x={137} y={92} width={66} height={15} rx={3} fill="none" stroke="rgba(255,255,255,0.15)" />
                    <rect x={137} y={113} width={66} height={15} rx={3} fill="none" stroke="rgba(255,255,255,0.15)" />
                    <rect x={137} y={134} width={66} height={26} rx={3} fill="none" stroke="rgba(255,255,255,0.15)" />
                    <rect x={137} y={168} width={66} height={15} rx={6} fill="var(--accent)" />
                </Variant>
                {/* 3 — bildirim + otomatik takip */}
                <Variant show={step === 3}>
                    <circle cx={170} cy={112} r={14} fill="rgba(255,255,255,0.10)" stroke="var(--accent)" strokeOpacity={0.4} />
                    <rect x={150} y={134} width={40} height={7} rx={3} fill="rgba(255,255,255,0.16)" />
                    <rect x={156} y={146} width={28} height={5} rx={2} fill="rgba(255,255,255,0.10)" />
                    <rect x={145} y={162} width={50} height={13} rx={6} fill="var(--accent)" />
                    <line x1={153} y1={196} x2={187} y2={196} stroke="var(--accent)" strokeOpacity={0.3} />
                    <g fill="var(--accent)" fillOpacity={0.5}>
                        <circle cx={153} cy={196} r={3} />
                        <circle cx={170} cy={196} r={3} />
                        <circle cx={187} cy={196} r={3} />
                    </g>
                </Variant>
            </g>

            {/* Kartvizit — telefona gelip okutuluyor (adıma göre hareket) */}
            <g style={cardStyle}>
                <g transform="translate(58 64) rotate(-16)">
                    <rect x={0} y={0} width={92} height={58} rx={9} fill="#17171A" stroke="rgba(255,255,255,0.12)" />
                    <rect x={12} y={12} width={16} height={12} rx={2} fill="var(--accent)" fillOpacity={0.85} />
                    <rect x={12} y={34} width={56} height={5} rx={2} fill="rgba(255,255,255,0.18)" />
                    <rect x={12} y={44} width={36} height={5} rx={2} fill="rgba(255,255,255,0.10)" />
                </g>
            </g>

            {/* NFC dalgaları — temas noktasında */}
            <g transform="translate(140 96)" style={{ opacity: step <= 1 ? 1 : 0.25, transition: "opacity .5s ease" }}>
                <Wave r={6} delay={0} />
                <Wave r={11} delay={0.4} />
                <Wave r={16} delay={0.8} />
            </g>

            {/* Bildirim balonu (adım 3) */}
            <g
                style={{
                    opacity: step === 3 ? 1 : 0,
                    transform: `translateY(${step === 3 ? 0 : -8}px)`,
                    transition: "opacity .5s ease, transform .5s ease",
                }}
            >
                <rect x={112} y={44} width={116} height={30} rx={9} fill="#0B0B0C" stroke="var(--accent)" strokeOpacity={0.4} />
                <circle cx={128} cy={59} r={8} fill="var(--accent)" fillOpacity={0.18} />
                <circle cx={128} cy={59} r={2.5} fill="var(--accent)" />
                <rect x={142} y={52} width={72} height={5} rx={2} fill="rgba(255,255,255,0.7)" />
                <rect x={142} y={62} width={48} height={4} rx={2} fill="rgba(255,255,255,0.35)" />
            </g>

            {/* Alt akış göstergesi */}
            <rect x={40} y={392} width={260} height={3} rx={1.5} fill="rgba(255,255,255,0.10)" />
            <rect
                x={40}
                y={392}
                height={3}
                rx={1.5}
                fill="var(--accent)"
                style={{ width: `${(Math.min(step, 3) / 3) * 260}px`, transition: "width .5s ease" }}
            />
            {NODES.map((cx, i) => {
                const on = i <= step;
                return (
                    <g key={i}>
                        <circle
                            cx={cx}
                            cy={393.5}
                            r={12}
                            fill={on ? "var(--accent)" : "#0B0B0C"}
                            stroke={on ? "var(--accent)" : "rgba(255,255,255,0.15)"}
                            style={{ transition: "fill .4s ease, stroke .4s ease" }}
                        />
                        <text
                            x={cx}
                            y={393.5}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize={11}
                            fontWeight={600}
                            fill={on ? "#ffffff" : "rgba(161,161,170,0.9)"}
                            style={{ transition: "fill .4s ease" }}
                        >
                            {i + 1}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
}
