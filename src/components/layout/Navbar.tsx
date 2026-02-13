import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/5 bg-background/80 px-6 backdrop-blur-md transition-all md:px-12">
            <Link href="/" className="text-lg font-heading font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80">
                BuildKor
            </Link>

            <div className="flex items-center gap-6">
                <Link
                    href="#contact"
                    className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
