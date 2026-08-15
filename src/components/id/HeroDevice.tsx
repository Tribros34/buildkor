"use client";

import { Bell, Signal, Wifi, BatteryFull } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Hero'nun sonunda videonun "bağlandığı" gerçekçi telefon sahnesi:
 * dijital profil ekranlı bir cihaz + telefondan çıkan bildirim.
 * Saf HTML/Tailwind — keskin, temalı. (İçine sonra gerçek ekran görüntüsü de konabilir.)
 */
export function HeroDevice() {
    const { t } = useLanguage();
    const d = t.id.hero;

    return (
        <div className="relative mx-auto w-[218px] sm:w-[234px]">
            {/* Telefondan çıkan bildirim */}
            <div className="absolute -top-7 left-1/2 z-30 w-[300px] max-w-[86vw] -translate-x-1/2">
                <div className="flex items-center gap-3 rounded-2xl border border-accent/40 bg-background px-4 py-3 text-left shadow-2xl shadow-black/50">
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

            {/* Cihaz — titanyum çerçeve */}
            <div className="relative rounded-[2.6rem] bg-gradient-to-b from-[#3a3a3f] via-[#1c1c1f] to-[#0c0c0e] p-[3px] shadow-2xl shadow-black/60 ring-1 ring-white/10">
                {/* Yan tuşlar */}
                <span className="absolute -left-[2px] top-[92px] h-7 w-[2px] rounded-l bg-[#3a3a3f]" />
                <span className="absolute -left-[2px] top-[132px] h-12 w-[2px] rounded-l bg-[#3a3a3f]" />
                <span className="absolute -left-[2px] top-[188px] h-12 w-[2px] rounded-l bg-[#3a3a3f]" />
                <span className="absolute -right-[2px] top-[150px] h-16 w-[2px] rounded-r bg-[#3a3a3f]" />

                {/* Ekran */}
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.35rem] bg-black">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101014] to-[#0b0b0c]" />

                    {/* Dynamic Island */}
                    <div className="absolute left-1/2 top-2.5 z-20 h-[26px] w-[74px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.06]" />

                    <div className="relative flex h-full flex-col px-4 pb-5 pt-3">
                        {/* Durum çubuğu */}
                        <div className="flex items-center justify-between px-1 text-[10px] font-semibold text-white/85">
                            <span className="tracking-tight">9:41</span>
                            <div className="flex items-center gap-1">
                                <Signal className="h-3 w-3" />
                                <Wifi className="h-3 w-3" />
                                <BatteryFull className="h-3.5 w-3.5" />
                            </div>
                        </div>

                        {/* Profil başlığı */}
                        <div className="mt-8 flex flex-col items-center gap-2.5">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-gradient-to-br from-white/[0.08] to-transparent">
                                <div className="h-8 w-8 rounded-full bg-accent/30" />
                            </div>
                            <div className="h-3 w-24 rounded-full bg-white/20" />
                            <div className="h-2 w-16 rounded-full bg-surface-2" />
                        </div>

                        {/* Form alanları */}
                        <div className="mt-6 space-y-2.5">
                            <div className="h-8 rounded-lg border border-border bg-surface" />
                            <div className="h-8 rounded-lg border border-border bg-surface" />
                        </div>

                        {/* Talep butonu */}
                        <div className="mt-3 flex h-9 items-center justify-center rounded-lg bg-accent shadow-lg shadow-accent/20">
                            <div className="h-2 w-20 rounded-full bg-white/75" />
                        </div>

                        {/* Home göstergesi */}
                        <div className="mt-auto flex justify-center">
                            <div className="h-1 w-24 rounded-full bg-white/25" />
                        </div>
                    </div>

                    {/* Cam yansıması */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent" />
                    <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-white/[0.06] to-transparent" />
                </div>
            </div>

            {/* Yumuşak accent parıltısı */}
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl" />
        </div>
    );
}
