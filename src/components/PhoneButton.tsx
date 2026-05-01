"use client";

import { Phone } from "lucide-react";

export function PhoneButton() {
    return (
        <a
            href="tel:+905334852386"
            className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-accent/90"
            aria-label="Call us"
        >
            <Phone className="h-6 w-6" />
        </a>
    );
}
