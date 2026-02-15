"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export function WhatsAppButton() {
    const { t } = useLanguage();
    const encodedMessage = encodeURIComponent(t.whatsapp.message);

    return (
        <a
            href={`https://wa.me/905334852386?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-[#20bd5a]"
            aria-label="Contact on WhatsApp"
        >
            <FaWhatsapp className="h-8 w-8" />
        </a>
    );
}
