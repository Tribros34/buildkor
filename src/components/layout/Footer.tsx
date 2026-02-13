export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-background py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
                <p className="text-sm text-muted">
                    © {new Date().getFullYear()} BuildKor. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                        Twitter
                    </a>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                        LinkedIn
                    </a>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
