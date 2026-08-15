"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const subject = `New Message from ${name || "BuildKor Website"}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        window.location.href = `mailto:buildkor.tech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="py-24 md:py-32 border-t border-border bg-surface">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                            {t.contact.title}
                        </h2>
                        <p className="mt-4 text-lg text-muted whitespace-pre-line">
                            {t.contact.description}
                        </p>

                        <div className="mt-8 flex gap-6">
                            <a href="mailto:buildkor.tech@gmail.com" className="font-medium text-foreground underline decoration-zinc-700 underline-offset-4 transition-colors hover:decoration-accent">
                                buildkor.tech@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="relative rounded-2xl border border-border bg-background p-8 lg:p-12">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-muted">{t.contact.name_label}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="rounded-md border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-white/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder={t.contact.name_placeholder}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-muted">{t.contact.email_label}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="rounded-md border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-white/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder={t.contact.email_placeholder}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted">{t.contact.message_label}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="resize-none rounded-md border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-white/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                    placeholder={t.contact.message_placeholder}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-premium group mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-foreground py-3 text-sm font-medium text-background hover:bg-foreground/90"
                            >
                                {t.contact.send_button}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
