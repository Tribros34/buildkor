"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "905334852386";
const PHONE = "+905334852386";

export function IdCta() {
    const { t } = useLanguage();
    const data = t.id.cta;
    const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsapp.message)}`;

    return (
        <section className="border-t border-white/5 py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <Reveal>
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center md:p-16">
                        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                            {data.title}
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
                            {data.desc}
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all hover:scale-105 hover:bg-foreground/90"
                            >
                                <FaWhatsapp className="h-5 w-5" />
                                {data.btn}
                            </a>
                            <a
                                href={`tel:${PHONE}`}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-8 text-sm font-medium text-foreground transition-all hover:scale-105 hover:bg-white/[0.05]"
                            >
                                <Phone className="h-4 w-4" />
                                {PHONE}
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
