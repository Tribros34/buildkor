"use client";

import { Bell } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Hero'nun sonunda videonun "bağlandığı" temiz cihaz sahnesi:
 * dijital profil ekranlı bir telefon + telefondan çıkan bildirim.
 * Saf HTML/Tailwind — keskin, temalı, videodaki bozuk yazı sorunundan bağımsız.
 */
export function HeroDevice() {
    const { t } = useLanguage();
    const d = t.id.hero;

    return (
        <div className="relative mx-auto w-[210px] sm:w-[224px]">
            {/* Telefondan çıkan bildirim */}
            <div className="absolute -top-6 left-1/2 z-20 w-[280px] max-w-[86vw] -translate-x-1/2">
                <div className="flex items-center gap-3 rounded-xl border border-accent/40 bg-background px-4 py-3 text-left shadow-2xl shadow-black/50">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                        <Bell className="h-4 w-4" />
                    </span>
                    <div>
                        <p className="text-sm font-medium text-foreground">{d.notification}</p>
                        <p className="text-xs text-muted">
                            {d.profile_name} · {d.profile_role}
                        </p>
                    </div>
                </div>
            </div>

            {/* Telefon */}
            <div className="relative rounded-[2.2rem] border border-white/10 bg-[#101012] p-2 shadow-2xl">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[1.8rem] bg-[#0B0B0C]">
                    {/* çentik */}
                    <div className="absolute left-1/2 top-2.5 h-1 w-14 -translate-x-1/2 rounded-full bg-white/15" />

                    <div className="flex h-full flex-col px-4 pb-6 pt-11">
                        {/* Profil başlığı */}
                        <div className="flex flex-col items-center gap-2.5">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-white/[0.06]">
                                <div className="h-8 w-8 rounded-full bg-accent/25" />
                            </div>
                            <div className="h-3 w-24 rounded-full bg-white/15" />
                            <div className="h-2 w-16 rounded-full bg-white/10" />
                        </div>

                        {/* Form alanları */}
                        <div className="mt-6 space-y-2.5">
                            <div className="h-8 rounded-lg border border-white/10 bg-white/[0.03]" />
                            <div className="h-8 rounded-lg border border-white/10 bg-white/[0.03]" />
                        </div>

                        {/* Talep butonu */}
                        <div className="mt-3 flex h-9 items-center justify-center rounded-lg bg-accent">
                            <div className="h-2 w-20 rounded-full bg-white/70" />
                        </div>

                        {/* Home bar */}
                        <div className="mt-auto flex justify-center">
                            <div className="h-1 w-16 rounded-full bg-white/20" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Yumuşak accent parıltısı */}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl" />
        </div>
    );
}
