import { ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 border-t border-white/5 bg-white/[0.02]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                            Get in touch
                        </h2>
                        <p className="mt-4 text-lg text-muted">
                            Interested in our products or have a technical inquiry? <br />
                            We're always open to interesting conversations.
                        </p>

                        <div className="mt-8 flex gap-6">
                            <a href="#" className="font-medium text-foreground underline decoration-zinc-700 underline-offset-4 transition-colors hover:decoration-accent">
                                hello@buildkor.com
                            </a>
                        </div>
                    </div>

                    <div className="relative rounded-2xl border border-white/5 bg-background p-8 lg:p-12">
                        <form className="flex flex-col gap-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-muted">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-white/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-muted">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-white/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="resize-none rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-white/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-foreground py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
                            >
                                Send Message
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
