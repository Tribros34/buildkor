export type Language = 'en' | 'tr';

export const translations = {
    en: {
        nav: {
            contact: "Contact",
            works: "Works",
            process: "Process",
            who_we_are: "Who We Are",
            product: "BuildKor ID",
        },
        hero: {
            title_start: "Build the",
            title_core: "core",
            title_end: "with BuildKor.",
            subtitle: "Software products, automation systems, and scalable platforms.",
            cta_products: "View Products",
            cta_contact: "Contact Us",
        },
        id: {
            hero: {
                badge: "BuildKor ID",
                title: "BuildKor ID",
                subtitle: "We don't design your card — we design what happens after it's tapped.",
                notification: "New customer request received",
                profile_name: "BuildKor ID",
                profile_role: "Digital business profile",
                scroll_hint: "Scroll to explore",
                cta_how: "How it works",
                cta_contact: "Get in touch",
            },
            problem: {
                title: "What happens after the tap?",
                lead: "A classic NFC card shows a link, and that's where it ends. BuildKor ID builds the process that runs after the card is tapped.",
                classic_title: "Classic NFC card",
                classic_points: ["Opens a link page", "Visitor looks, then leaves", "No follow-up, no data"],
                buildkor_title: "BuildKor ID",
                buildkor_points: ["Opens an industry-specific page", "Collects the customer request", "Instant notification + automated follow-up"],
            },
            how: {
                title: "How it works",
                steps: [
                    { title: "The card is tapped", desc: "The visitor holds their phone near your card. No app required." },
                    { title: "An industry-specific page opens", desc: "A digital profile configured for your business opens instantly." },
                    { title: "The visitor leaves a request", desc: "They fill in the form — a quote, an appointment or a contact request." },
                    { title: "You get notified + automated follow-up", desc: "Instant alert via WhatsApp/SMS/email, and automation kicks in." },
                ],
            },
            sectors: {
                title: "Industries",
                lead: "Every industry is a configuration of the same infrastructure.",
                demo_label: "View demo",
                demo_soon: "Coming soon",
                items: [
                    { name: "Real Estate", promise: "Share your portfolio, collect buyer requests instantly.", flow: ["Card is tapped", "Portfolio opens", "Buyer leaves a request", "Agent gets notified"] },
                    { name: "Veterinary", promise: "Take appointments and patient requests in one tap.", flow: ["Card is tapped", "Services are shown", "Appointment request", "Clinic gets notified"] },
                    { name: "Architect", promise: "Present your projects, never miss a potential job.", flow: ["Card is tapped", "Projects open", "Quote request", "Architect gets notified"] },
                    { name: "Beauty & Care", promise: "Automate appointments and customer requests.", flow: ["Card is tapped", "Service menu opens", "Booking is made", "Salon gets notified"] },
                    { name: "Auto Gallery", promise: "Showcase your listings, capture buyers on the spot.", flow: ["Card is tapped", "Listings open", "Test drive / offer request", "Gallery gets notified"] },
                ],
            },
            features: {
                title: "What it offers",
                items: [
                    "NFC card + QR",
                    "Industry-specific digital profile",
                    "Customer collection forms",
                    "Instant notifications (WhatsApp/SMS/email)",
                    "Customer tracking dashboard",
                    "Automation flows",
                    "Analytics",
                ],
            },
            cta: {
                title: "Let's set up BuildKor ID for your business.",
                desc: "Let's build the system that runs after your card is tapped.",
                btn: "Get in touch",
            },
            home: {
                badge: "Our Product",
                title: "BuildKor ID",
                desc: "Our own product: a customer-collection and automated follow-up system that runs after the NFC card is tapped — not just a link page.",
                cta: "Explore BuildKor ID",
            },
        },
        about: {
            text_start: "BuildKor is an independent software company building the",
            text_core: "digital core",
            text_end: ". We engineer depth over speed, crafting products designed to last.",
        },
        products: {
            title: "Selected Products",
            items: [
                {
                    name: "Web Development",
                    description: "Premium Web Experiences. Bespoke, high-performance websites and digital platforms crafted with engineering excellence and modern design principles.",
                },
                {
                    name: "Game Development",
                    description: "Immersive Simulations & Gaming. High-fidelity interactive experiences and simulations powered by Unity, pushing the boundaries of visual storytelling.",
                },
                {
                    name: "Workflow Automation",
                    description: "Intelligent Automation Systems. Leveraging n8n to orchestrate complex business workflows, eliminating manual bottlenecks and accelerating operational efficiency.",
                },
                {
                    name: "Mobile App Development",
                    description: "Cross-Platform Mobile Engineering. We build native-quality iOS and Android applications using modern frameworks, ensuring seamless performance across all devices.",
                },
            ],
            interface_placeholder: "Product Interface",
        },
        philosophy: {
            title: "Our Approach",
            items: [
                {
                    title: "Thoughtful Engineering",
                    description: "We believe in building software that lasts. We prioritize clean architecture, maintainability, and performance over shortcuts and trendy frameworks.",
                },
                {
                    title: "Long-term Thinking",
                    description: "Digital products should evolve with your business. Our solutions are designed to scale, adapt, and remain robust years after launch.",
                },
                {
                    title: "Sustainable Software",
                    description: "We reject the \"move fast and break things\" mentality. We move with purpose, ensuring every line of code serves a clear function.",
                },
            ],
            process: {
                title: "Our Process",
                description: "From concept to deployment, we maintain a transparent and iterative workflow.",
            },
        },
        laptopShowcase: {
            title: "BuildKor products,\ncrafted with care.",
            description: "We build durable software products—clean architecture, thoughtful UX, and long-term iteration.",
            cta_explore: "Explore products",
            cta_how: "See how we build",
            nexus_dashboard: "My Store",
            status_beta: "Status: Beta",
        },
        techStack: {
            title: "Technology Stack",
        },
        footer: {
            rights: "All rights reserved.",
        },
        whatsapp: {
            message: "Hello BuildKor, I would like to discuss a project.",
        },
        contact: {
            title: "Get in touch",
            description: "Whether you have a specific project or just a question,\nwe would be delighted to hear from you.",
            name_label: "Name",
            name_placeholder: "Jane Doe",
            email_label: "Email",
            email_placeholder: "jane@example.com",
            message_label: "Message",
            message_placeholder: "Tell us about your project...",
            send_button: "Send Message",
        },
        works_page: {
            back_to_home: "Back to home",
            subtitle: "Every product we build is engineered with intent — clean architecture, thoughtful UX, and a commitment to long-term quality.",
            cta_title: "Have a project in mind?",
            cta_desc: "Let's build something that lasts. Reach out and tell us about your idea.",
            cta_btn: "Start a conversation",
            categories: {
                digital_platform: "Digital Platform",
                interactive_experience: "Interactive Experience",
                process_engineering: "Process Engineering",
                cross_platform: "Cross-Platform Engineering",
            },
            items: {
                web: {
                    title: "Web Development",
                    desc: "We craft bespoke, high-performance websites and digital platforms built with engineering excellence. From landing pages to full-stack SaaS products, we design and develop with precision—clean code, fast load times, and interfaces that convert."
                },
                game: {
                    title: "Game Development",
                    desc: "We build high-fidelity interactive experiences and simulations powered by Unity. From 3D environments to gamified training platforms, we push the boundaries of visual storytelling and real-time interaction."
                },
                workflow: {
                    title: "Workflow Automation",
                    desc: "We leverage n8n to orchestrate complex business workflows, eliminating manual bottlenecks and accelerating operational efficiency. CRM integrations, automated reporting, multi-platform triggers—we build the invisible engine that runs your business."
                },
                mobile: {
                    title: "Mobile App Development",
                    desc: "We build native-quality iOS and Android applications using modern frameworks, ensuring seamless performance across all devices. From MVP to production-grade apps, we design with users in mind and engineer for scale."
                }
            }
        },
        web_dev: {
            back_to_works: "Back to works",
            badge: "Web Development",
            title: "Web Development",
            subtitle: "We don't just build websites; we engineer digital platforms. By combining Next.js, our own dedicated server infrastructure, and deep SEO expertise, we deliver the fastest, most beautiful web experiences on the internet.",
            expertise: [
                {
                    title: "Next.js & Modern Tech",
                    desc: "We build exclusively with Next.js and React. This allows us to create dynamic, highly interactive, and scalable web applications that feel like native software."
                },
                {
                    title: "Uncompromising Speed",
                    desc: "Speed is a feature. Our websites load in milliseconds. We optimize every asset, leverage Server-Side Rendering (SSR), and write clean code to ensure instant load times."
                },
                {
                    title: "Masterful SEO",
                    desc: "Beautiful websites are useless if nobody finds them. We engineer our platforms with perfect semantic HTML, Schema markup, and technical SEO architectures that dominate search results."
                },
                {
                    title: "Private Server Hosting",
                    desc: "We don't rely on generic shared hosting. We deploy and manage your applications on our own high-performance, secure server infrastructure for maximum reliability and control."
                }
            ],
            case_study_badge: "Featured Case Study",
            case_study_title: "Boya Badana İstanbul",
            project_title: "The Project",
            project_desc: "Local service businesses need platforms that capture search intent and convert it into leads. We built this corporate platform from the ground up to dominate local search results. It is hosted on our private servers and utilizes server-side rendering to achieve perfect Lighthouse scores.",
            highlights_title: "Highlights",
            highlights: [
                "100/100 Google PageSpeed & Lighthouse Score.",
                "Custom local business JSON-LD Schema markup.",
                "Lightning fast navigation without page reloads."
            ],
            stack_title: "Stack Used",
            video_cap: "Platform Overview & Smooth Navigation",
            img1_cap: "High-Conversion Hero Section",
            img2_cap: "Services Component",
            cta_title: "Ready to upgrade your web presence?",
            cta_desc: "Whether you need a corporate site or a complex web application, we have the engineering firepower to build it.",
            cta_btn: "Let's talk"
        },
        game_dev: {
            title: "Game Development",
            subtitle: "Crafting next-generation interactive experiences. Using the power of Unity and C#, we build immersive PC and mobile games that captivate players and push visual limits.",
            expertise: [
                {
                    title: "PC & Mobile Gaming",
                    desc: "We develop high-fidelity games tailored for both PC and Mobile platforms, ensuring seamless performance, stunning graphics, and engaging gameplay mechanics across all devices."
                },
                {
                    title: "Unity & C# Mastery",
                    desc: "Our engineering core is powered by Unity and advanced C# architecture. We build modular, scalable, and highly optimized game logic that performs beautifully under heavy loads."
                },
                {
                    title: "Interactive Online Games",
                    desc: "We are pushing the boundaries of next-generation interactive online games. With advanced multiplayer networking, we create immersive worlds that connect players globally."
                },
                {
                    title: "Surprise Coming Soon!",
                    desc: "We are currently working on a massive, undisclosed interactive online game project. A brand new universe is being built in our studio right now. Get ready for a big surprise!"
                }
            ],
            showcase_badge: "Visual Showcase",
            showcase_title: "Interactive Experiences",
            engine_title: "The Engine",
            engine_desc: "Our development pipeline is heavily optimized around the Unity engine, utilizing custom C# scripts and state-of-the-art rendering techniques.",
            stack_title: "Tech Stack",
            video_cap: "Game Environment Engine Preview",
            cta_title: "Have a game concept?",
            cta_desc: "Whether it's a mobile hit or an immersive PC online game, our team can bring it to life.",
            cta_btn: "Let's talk"
        },
        workflow_auto: {
            title: "Workflow Automation & SaaS",
            subtitle: "Eliminating bottlenecks through engineering. We combine n8n and FastAPI to construct lightning-fast backend workflows, media accelerators, and scalable SaaS platforms.",
            expertise: [
                {
                    title: "n8n & Workflow Architecture",
                    desc: "We orchestrate incredibly complex business logic using n8n. By mapping out repetitive tasks, we build invisible, reliable engines that automate your entire operation."
                },
                {
                    title: "Media Accelerator Workflows",
                    desc: "We specialize in high-intensity video and photo processing pipelines. We build automated workflows that handle rendering, optimization, and media manipulation at scale."
                },
                {
                    title: "SaaS Production & FastAPI",
                    desc: "We don't just automate; we build fully-fledged SaaS platforms. We leverage the raw speed of FastAPI connected to n8n to deliver robust, scalable backend infrastructures for our own products and clients."
                },
                {
                    title: "Surprise Coming Soon!",
                    desc: "Our R&D team is currently finalizing a groundbreaking SaaS workflow tool that will completely change how you manage digital assets. Stay tuned for the big reveal!"
                }
            ],
            showcase_badge: "Visual Showcase",
            showcase_title: "Intelligent Automation",
            engine_title: "The Engine",
            engine_desc: "Our pipelines connect isolated APIs, run complex data transformations, and handle massive parallel processing for video and image workflows without breaking a sweat.",
            stack_title: "Tech Stack",
            video_cap: "n8n Node Execution & API Integration",
            cta_title: "Need to scale your operations?",
            cta_desc: "Stop doing manual work. Let us build a resilient backend that scales with your business.",
            cta_btn: "Let's talk"
        },
        mobile_dev: {
            title: "Mobile App Development",
            subtitle: "Building apps that live in your users' pockets. We engineer high-performance cross-platform mobile applications using Flutter, Dart, and .NET MAUI for modern SaaS ecosystems.",
            expertise: [
                {
                    title: "Dart & Flutter",
                    desc: "We use Flutter and Dart to build highly performant, visually stunning native applications for both iOS and Android from a single codebase, drastically reducing time to market."
                },
                {
                    title: "Mobile SaaS Integrations",
                    desc: "We deeply integrate mobile applications into our broader SaaS ecosystems. Your mobile app isn't just an endpoint; it's a core piece of your interconnected digital product architecture."
                },
                {
                    title: ".NET MAUI & C#",
                    desc: "For enterprise-grade cross-platform needs, we leverage .NET MAUI and C#. This allows us to share business logic across mobile and desktop applications with unparalleled native performance."
                },
                {
                    title: "Native User Experience",
                    desc: "Regardless of the framework, we obsess over the details—smooth animations, gesture-based navigation, and native UI patterns that make users feel right at home."
                }
            ],
            showcase_badge: "Visual Showcase",
            showcase_title: "Cross-Platform Engineering",
            engine_title: "The Architecture",
            engine_desc: "Our mobile applications are built to seamlessly connect with robust backend APIs. We prioritize offline-first capabilities, secure data synchronization, and buttery-smooth UI rendering.",
            stack_title: "Tech Stack",
            video_cap: "Mobile App Interface & Interactions",
            cta_title: "Ready to launch your app?",
            cta_desc: "From iOS to Android, we engineer scalable mobile products that users love.",
            cta_btn: "Start your project"
        },
        surec_page: {
            back_to_home: "Back to home",
            title: "How We Build",
            subtitle: "A transparent, iterative workflow designed to reduce risk, ensure quality, and keep you informed at every stage.",
            phase: "Phase",
            deliverables_title: "Deliverables",
            principles_title: "Our Principles",
            cta_title: "Ready to start a project?",
            cta_desc: "Tell us about your idea. We'll get back to you within 24 hours.",
            cta_btn: "Get in touch",
            steps: [
                {
                    phase: "Discovery",
                    title: "Deep Dive & Alignment",
                    desc: "Every great product starts with understanding. We spend time learning your business, your users, and your goals. We ask the hard questions upfront—so we don't build the wrong thing beautifully.",
                    deliverables: ["Requirements document", "Technical feasibility report", "Project scope definition", "Timeline & milestone plan"]
                },
                {
                    phase: "Design",
                    title: "Architecture & UI/UX",
                    desc: "Before a single line of production code is written, we design the system architecture and user experience. We prototype key flows, validate assumptions, and align on the visual direction—ensuring every decision has intent.",
                    deliverables: ["System architecture diagram", "Wireframes & user flows", "High-fidelity UI prototypes", "Design system tokens"]
                },
                {
                    phase: "Development",
                    title: "Engineering with Precision",
                    desc: "We build iteratively in short cycles, shipping working increments you can see and test. Clean code, meaningful commits, and continuous integration keep the build healthy. You're never waiting for a big-bang reveal.",
                    deliverables: ["Weekly deployable builds", "Code review & documentation", "Unit & integration tests", "Progress reports"]
                },
                {
                    phase: "Quality",
                    title: "Testing & Hardening",
                    desc: "We don't ship until the product is battle-tested. Performance profiling, cross-device testing, security audits, and user acceptance testing happen before any production deployment.",
                    deliverables: ["QA test reports", "Performance audit", "Security checklist", "Browser & device compatibility report"]
                },
                {
                    phase: "Launch",
                    title: "Deployment & Handover",
                    desc: "We handle the full deployment pipeline—CI/CD setup, infrastructure configuration, DNS, and monitoring. We don't just hand over a repo; we ensure you have everything needed to run and evolve the product confidently.",
                    deliverables: ["Production deployment", "CI/CD pipeline setup", "Technical documentation", "Team onboarding session"]
                },
                {
                    phase: "Growth",
                    title: "Iteration & Support",
                    desc: "The launch is the beginning, not the end. We offer ongoing retainer agreements for continued development, monitoring, and scaling—adapting the product as your business grows.",
                    deliverables: ["Monthly development retainer", "Performance monitoring", "Feature roadmap planning", "Priority bug fixes"]
                }
            ],
            principles: [
                { title: "Transparency first", desc: "You always know where we are, what we're building, and why." },
                { title: "No surprises", desc: "We surface blockers early and communicate proactively." },
                { title: "Depth over speed", desc: "We prioritize correctness and longevity over rushing to ship." },
                { title: "You own everything", desc: "All source code, assets, and IP belong entirely to you." }
            ]
        },
        hakkimizda_page: {
            back_to_home: "Back to home",
            title: "Who We Are",
            subtitle: "We are an independent software development company focused on building high-quality digital products, enterprise automation, and complex backend systems.",
            cta_title: "Ready to work together?",
            cta_desc: "We are always looking for challenging problems to solve.",
            cta_btn: "Get in touch",
            mission_title: "Our Mission",
            mission_desc: "To deliver scalable, resilient, and beautifully designed software that acts as the core engine for modern businesses.",
            values_title: "Core Values",
            values: [
                { title: "Engineering Excellence", desc: "We don't cut corners. Clean code and robust architecture are non-negotiable." },
                { title: "Design Driven", desc: "Functionality means nothing if the interface is frustrating. We blend logic with beautiful, intuitive design." },
                { title: "Radical Transparency", desc: "Clear communication, honest timelines, and straightforward technical advice." }
            ],
            founder_title: "The Team",
            founder_desc: "BuildKor is founded and run by engineers who are obsessed with solving complex problems through elegant code.",
            team: []
        }
    },
    tr: {
        nav: {
            contact: "İletişim",
            works: "Çalışmalar",
            process: "Süreç",
            who_we_are: "Biz Kimiz",
            product: "BuildKor ID",
        },
        hero: {
            title_start: "BuildKor ile",
            title_core: "çekirdeği",
            title_end: "inşa edin.",
            subtitle: "Yazılım ürünleri, otomasyon sistemleri ve ölçeklenebilir platformlar.",
            cta_products: "Ürünleri İncele",
            cta_contact: "İletişime Geç",
        },
        id: {
            hero: {
                badge: "BuildKor ID",
                title: "BuildKor ID",
                subtitle: "Kartınızı değil, kartınız okutulduktan sonra olacakları tasarlıyoruz.",
                notification: "Yeni müşteri talebi alındı",
                profile_name: "BuildKor ID",
                profile_role: "Dijital işletme profili",
                scroll_hint: "Keşfetmek için kaydırın",
                cta_how: "Nasıl Çalışır",
                cta_contact: "İletişime Geç",
            },
            problem: {
                title: "Kart okutulduktan sonra ne oluyor?",
                lead: "Klasik NFC kartlar bir link gösterir ve orada biter. BuildKor ID, kart okutulduktan sonra çalışan süreci kurar.",
                classic_title: "Klasik NFC kart",
                classic_points: ["Bir link sayfası açar", "Ziyaretçi bakar ve ayrılır", "Takip yok, veri yok"],
                buildkor_title: "BuildKor ID",
                buildkor_points: ["Sektöre özel sayfa açılır", "Müşteri talebi toplanır", "Anında bildirim + otomatik takip"],
            },
            how: {
                title: "Nasıl Çalışır",
                steps: [
                    { title: "Kart okutulur", desc: "Ziyaretçi telefonunu kartınıza yaklaştırır. Uygulama gerekmez." },
                    { title: "Sektöre özel sayfa açılır", desc: "İşinize göre yapılandırılmış dijital profil anında açılır." },
                    { title: "Ziyaretçi talep bırakır", desc: "Formu doldurur — teklif, randevu veya iletişim talebi oluşturur." },
                    { title: "Size bildirim + otomatik takip", desc: "WhatsApp/SMS/e-posta ile anında haber alırsınız, otomasyon devreye girer." },
                ],
            },
            sectors: {
                title: "Sektörler",
                lead: "Her sektör, aynı altyapının konfigürasyonu.",
                demo_label: "Demoyu gör",
                demo_soon: "Yakında",
                items: [
                    { name: "Emlak", promise: "Portföyünüzü paylaşın, alıcı taleplerini anında toplayın.", flow: ["Kart okutulur", "Portföy açılır", "Alıcı talep bırakır", "Danışmana bildirim"] },
                    { name: "Veteriner", promise: "Randevu ve hasta taleplerini tek dokunuşla alın.", flow: ["Kart okutulur", "Hizmetler görünür", "Randevu talebi gelir", "Kliniğe bildirim"] },
                    { name: "Mimar", promise: "Projelerinizi sunun, potansiyel işleri kaçırmayın.", flow: ["Kart okutulur", "Projeler açılır", "Teklif talebi gelir", "Mimara bildirim"] },
                    { name: "Güzellik & Bakım", promise: "Randevuları ve müşteri talebini otomatikleştirin.", flow: ["Kart okutulur", "Hizmet menüsü açılır", "Randevu alınır", "Salona bildirim"] },
                    { name: "Oto Galeri", promise: "İlanlarınızı gösterin, alıcıyı anında yakalayın.", flow: ["Kart okutulur", "İlanlar açılır", "Test/teklif talebi", "Galeriye bildirim"] },
                ],
            },
            features: {
                title: "Ne Sunuyor",
                items: [
                    "NFC kart + QR",
                    "Sektörel dijital profil",
                    "Müşteri toplama formları",
                    "Anlık bildirim (WhatsApp/SMS/e-posta)",
                    "Müşteri takip paneli",
                    "Otomasyon akışları",
                    "Analitik",
                ],
            },
            cta: {
                title: "İşletmeniz için BuildKor ID kuralım.",
                desc: "Kartınız okutulduktan sonra çalışan sistemi birlikte kuralım.",
                btn: "İletişime Geç",
            },
            home: {
                badge: "Ürünümüz",
                title: "BuildKor ID",
                desc: "Kendi ürünümüz: NFC kart okutulduktan sonra çalışan müşteri toplama ve otomatik takip sistemi — sadece bir link sayfası değil.",
                cta: "BuildKor ID'yi keşfet",
            },
        },
        about: {
            text_start: "BuildKor, dijitalin",
            text_core: "çekirdeğini",
            text_end: "inşa eden bağımsız bir yazılım şirketidir. Hızdan ziyade derinliği mühendislik ediyor, kalıcı olması tasarlanan ürünler üretiyoruz.",
        },
        products: {
            title: "Seçilmiş Ürünler",
            items: [
                {
                    name: "Web Geliştirme",
                    description: "Premium Web Deneyimleri. Mühendislik mükemmelliği ve modern tasarım prensipleriyle hazırlanan, özel, yüksek performanslı web siteleri ve dijital platformlar.",
                },
                {
                    name: "Oyun Geliştirme",
                    description: "Sürükleyici Simülasyonlar & Oyunlar. Unity ile güçlendirilmiş, görsel anlatımın sınırlarını zorlayan yüksek kaliteli interaktif deneyimler ve simülasyonlar.",
                },
                {
                    name: "İş Akışı Otomasyonu",
                    description: "Akıllı Otomasyon Sistemleri. n8n kullanarak karmaşık iş akışlarını yönetiyor, manuel darboğazları ortadan kaldırıyor ve operasyonel verimliliği hızlandırıyoruz.",
                },
                {
                    name: "Mobil Uygulama Geliştirme",
                    description: "Çapraz Platform Mobil Mühendisliği. Modern framework'ler kullanarak, tüm cihazlarda sorunsuz performans sağlayan native kalitesinde iOS ve Android uygulamalar geliştiriyoruz.",
                },
            ],
            interface_placeholder: "Ürün Arayüzü",
        },
        philosophy: {
            title: "Yaklaşımımız",
            items: [
                {
                    title: "Düşünceli Mühendislik",
                    description: "Kalıcı yazılımlar inşa etmeye inanıyoruz. Kestirme yollar ve moda framework'ler yerine temiz mimariyi, sürdürülebilirliği ve performansı önceliklendiriyoruz.",
                },
                {
                    title: "Uzun Vadeli Düşünme",
                    description: "Dijital ürünler işinizle birlikte evrimleşmelidir. Çözümlerimiz ölçeklenebilir, uyarlanabilir ve lansmandan yıllar sonra bile sağlam kalacak şekilde tasarlanmıştır.",
                },
                {
                    title: "Sürdürülebilir Yazılım",
                    description: "\"Hızlı hareket et ve kır\" zihniyetini reddediyoruz. Her satır kodun net bir işlevi olduğundan emin olarak, bir amaç doğrultusunda hareket ediyoruz.",
                },
            ],
            process: {
                title: "Sürecimiz",
                description: "Konseptten yayına kadar, şeffaf ve iteratif bir iş akışı sürdürüyoruz.",
            },
        },
        laptopShowcase: {
            title: "BuildKor ürünleri,\nözenle işlendi.",
            description: "Dayanıklı yazılım ürünleri inşa ediyoruz—temiz mimari, düşünceli UX ve uzun vadeli iterasyon.",
            cta_explore: "Ürünleri keşfet",
            cta_how: "Nasıl inşa ediyoruz",
            nexus_dashboard: "Mağazam",
            status_beta: "Durum: Beta",
        },
        techStack: {
            title: "Teknoloji Yığını",
        },
        footer: {
            rights: "Tüm hakları saklıdır.",
        },
        whatsapp: {
            message: "Merhaba BuildKor, bir proje hakkında görüşmek istiyorum.",
        },
        contact: {
            title: "İletişime Geçin",
            description: "Bir proje fikriniz mi var, yoksa sadece tanışmak mı istiyorsunuz?\nSizi dinlemekten memnuniyet duyarız.",
            name_label: "İsim",
            name_placeholder: "Adınız Soyadınız",
            email_label: "E-posta",
            email_placeholder: "ornek@sirket.com",
            message_label: "Mesaj",
            message_placeholder: "Projenizden bahsedin...",
            send_button: "Mesaj Gönder",
        },
        works_page: {
            back_to_home: "Ana sayfaya dön",
            subtitle: "İnşa ettiğimiz her ürün bilinçli bir niyetle mühendislenir — temiz mimari, özenli UX ve uzun vadeli kalite taahhüdü.",
            cta_title: "Aklınızda bir proje mi var?",
            cta_desc: "Kalıcı bir şeyler inşa edelim. Bize ulaşın ve fikrinizden bahsedin.",
            cta_btn: "Bir sohbet başlatın",
            categories: {
                digital_platform: "Dijital Platform",
                interactive_experience: "İnteraktif Deneyim",
                process_engineering: "Süreç Mühendisliği",
                cross_platform: "Çapraz Platform",
            },
            items: {
                web: {
                    title: "Web Geliştirme",
                    desc: "Mühendislik mükemmelliği ile inşa edilmiş, özel, yüksek performanslı web siteleri ve dijital platformlar üretiyoruz. Açılış sayfalarından full-stack SaaS ürünlerine kadar hassasiyetle tasarlayıp geliştiriyoruz; temiz kod, hızlı yükleme ve dönüşüm sağlayan arayüzler."
                },
                game: {
                    title: "Oyun Geliştirme",
                    desc: "Unity ile güçlendirilmiş, yüksek kaliteli interaktif deneyimler ve simülasyonlar inşa ediyoruz. 3D ortamlardan oyunlaştırılmış eğitim platformlarına kadar görsel hikaye anlatımı ve gerçek zamanlı etkileşimin sınırlarını zorluyoruz."
                },
                workflow: {
                    title: "İş Akışı Otomasyonu",
                    desc: "n8n kullanarak karmaşık iş akışlarını orkestre ediyor, manuel darboğazları ortadan kaldırıyor ve operasyonel verimliliği hızlandırıyoruz. CRM entegrasyonları, otomatik raporlama, çoklu platform tetikleyicileri — işinizi çalıştıran görünmez motoru inşa ediyoruz."
                },
                mobile: {
                    title: "Mobil Uygulama Geliştirme",
                    desc: "Tüm cihazlarda kusursuz performans sağlamak için modern framework'ler kullanarak native kalitesinde iOS ve Android uygulamalar inşa ediyoruz. MVP'den üretime hazır uygulamalara kadar, kullanıcıları göz önünde bulundurarak tasarlıyor ve ölçeklenebilirlik için mühendislik yapıyoruz."
                }
            }
        },
        web_dev: {
            back_to_works: "Çalışmalara dön",
            badge: "Web Geliştirme",
            title: "Web Geliştirme",
            subtitle: "Sadece web sitesi yapmıyoruz; dijital platformlar inşa ediyoruz. Next.js, kendi özel sunucu altyapımız ve derin SEO uzmanlığımızı birleştirerek internetteki en hızlı ve en güzel web deneyimlerini sunuyoruz.",
            expertise: [
                {
                    title: "Next.js & Modern Teknoloji",
                    desc: "Sadece Next.js ve React ile geliştiriyoruz. Bu, native yazılım gibi hissettiren dinamik, son derece interaktif ve ölçeklenebilir web uygulamaları oluşturmamızı sağlıyor."
                },
                {
                    title: "Tavizsiz Hız",
                    desc: "Hız bir özelliktir. Sitelerimiz milisaniyeler içinde yüklenir. Anında yükleme sağlamak için her asset'i optimize eder, Sunucu Tarafı Oluşturma (SSR) kullanır ve temiz kod yazarız."
                },
                {
                    title: "Usta İşi SEO",
                    desc: "Kimse bulamazsa güzel sitelerin bir anlamı yoktur. Platformlarımızı kusursuz semantik HTML, Schema markupları ve arama sonuçlarını domine eden teknik SEO mimarileri ile mühendisleriz."
                },
                {
                    title: "Özel Sunucu Hosting",
                    desc: "Sıradan paylaşımlı hostinglere güvenmeyiz. Maksimum güvenilirlik ve kontrol için uygulamalarınızı kendi yüksek performanslı ve güvenli sunucu altyapımızda barındırır ve yönetiriz."
                }
            ],
            case_study_badge: "Öne Çıkan Vaka Analizi",
            case_study_title: "Boya Badana İstanbul",
            project_title: "Proje",
            project_desc: "Yerel hizmet işletmelerinin arama niyetini yakalayan ve onu müşteri adaylarına dönüştüren platformlara ihtiyacı vardır. Bu kurumsal platformu yerel arama sonuçlarını domine etmesi için sıfırdan kurduk. Özel sunucularımızda barındırılıyor ve kusursuz Lighthouse skorlarına ulaşmak için server-side rendering kullanıyor.",
            highlights_title: "Öne Çıkanlar",
            highlights: [
                "100/100 Google PageSpeed ve Lighthouse Skoru.",
                "Özel yerel işletme JSON-LD Schema işaretlemesi.",
                "Sayfa yenilenmeden ışık hızında navigasyon."
            ],
            stack_title: "Kullanılan Teknolojiler",
            video_cap: "Platform Özeti ve Akıcı Navigasyon",
            img1_cap: "Yüksek Dönüşümlü Hero Bölümü",
            img2_cap: "Hizmetler Bileşeni",
            cta_title: "Web varlığınızı güçlendirmeye hazır mısınız?",
            cta_desc: "İster kurumsal bir site ister karmaşık bir web uygulaması olsun, onu inşa edecek mühendislik gücüne sahibiz.",
            cta_btn: "Hadi konuşalım"
        },
        game_dev: {
            title: "Oyun Geliştirme",
            subtitle: "Yeni nesil interaktif deneyimler üretiyoruz. Unity ve C#'ın gücünü kullanarak, oyuncuları cezbeden ve görsel sınırları zorlayan sürükleyici PC ve mobil oyunlar inşa ediyoruz.",
            expertise: [
                {
                    title: "PC ve Mobil Oyun",
                    desc: "Tüm cihazlarda kesintisiz performans, büyüleyici grafikler ve ilgi çekici oyun mekanikleri sağlayacak şekilde hem PC hem de Mobil platformlara özel, yüksek sadakatli oyunlar geliştiriyoruz."
                },
                {
                    title: "Unity ve C# Ustalığı",
                    desc: "Mühendislik çekirdeğimiz Unity ve gelişmiş C# mimarisiyle destekleniyor. Ağır yükler altında bile harika performans gösteren modüler, ölçeklenebilir ve son derece optimize edilmiş oyun mantığı oluşturuyoruz."
                },
                {
                    title: "İnteraktif Online Oyunlar",
                    desc: "Yeni nesil interaktif online oyunların sınırlarını zorluyoruz. Gelişmiş çok oyunculu ağ iletişimi ile, oyuncuları küresel çapta bağlayan sürükleyici dünyalar yaratıyoruz."
                },
                {
                    title: "Yakında Sürpriz Yapacağız!",
                    desc: "Şu anda devasa, henüz açıklanmayan interaktif bir online oyun projesi üzerinde çalışıyoruz. Tam da şu an stüdyomuzda yepyeni bir evren inşa ediliyor. Büyük bir sürprize hazır olun!"
                }
            ],
            showcase_badge: "Görsel Vitrin",
            showcase_title: "İnteraktif Deneyimler",
            engine_title: "Oyun Motoru",
            engine_desc: "Geliştirme hattımız, özel C# scriptleri ve en modern render tekniklerini kullanarak Unity motoru etrafında yoğun şekilde optimize edilmiştir.",
            stack_title: "Teknoloji Yığını",
            video_cap: "Oyun Ortamı Motor Önizlemesi",
            cta_title: "Aklınızda bir oyun konsepti mi var?",
            cta_desc: "İster mobil bir hit ister sürükleyici bir PC online oyunu olsun, ekibimiz onu hayata geçirebilir.",
            cta_btn: "Hadi konuşalım"
        },
        workflow_auto: {
            title: "İş Akışı Otomasyonu & SaaS",
            subtitle: "Mühendislik aracılığıyla darboğazları ortadan kaldırıyoruz. Işık hızında backend iş akışları, medya hızlandırıcılar ve ölçeklenebilir SaaS platformları kurmak için n8n ve FastAPI'yi birleştiriyoruz.",
            expertise: [
                {
                    title: "n8n ve İş Akışı Mimarisi",
                    desc: "n8n kullanarak inanılmaz derecede karmaşık iş mantığını koordine ediyoruz. Tekrarlayan görevleri haritalayarak, tüm operasyonunuzu otomatikleştiren görünmez, güvenilir motorlar inşa ediyoruz."
                },
                {
                    title: "Medya Hızlandırıcı Akışlar",
                    desc: "Yüksek yoğunluklu video ve fotoğraf işleme hatlarında uzmanız. Render etme, optimizasyon ve medya manipülasyonunu geniş ölçekte yöneten otomatik iş akışları oluşturuyoruz."
                },
                {
                    title: "SaaS Üretimi ve FastAPI",
                    desc: "Sadece otomatize etmiyoruz; tam donanımlı SaaS platformları inşa ediyoruz. Kendi ürünlerimiz ve müşterilerimiz için sağlam, ölçeklenebilir backend altyapıları sunmak üzere n8n'e bağlı FastAPI'nin saf hızını kullanıyoruz."
                },
                {
                    title: "Yakında Sürpriz Yapacağız!",
                    desc: "Ar-Ge ekibimiz şu anda dijital varlıkları nasıl yöneteceğinizi tamamen değiştirecek, çığır açan bir SaaS iş akışı aracını tamamlıyor. Büyük duyuru için takipte kalın!"
                }
            ],
            showcase_badge: "Görsel Vitrin",
            showcase_title: "Akıllı Otomasyon",
            engine_title: "Motor",
            engine_desc: "Veri hatlarımız izole API'leri birbirine bağlar, karmaşık veri dönüşümleri yürütür ve video/görüntü akışları için devasa paralel işlemeleri zorlanmadan halleder.",
            stack_title: "Teknoloji Yığını",
            video_cap: "n8n Node Çalıştırımı ve API Entegrasyonu",
            cta_title: "Operasyonlarınızı ölçeklendirmeniz mi gerekiyor?",
            cta_desc: "Manuel iş yapmayı bırakın. İşletmenizle birlikte ölçeklenecek dirençli bir backend oluşturalım.",
            cta_btn: "Hadi konuşalım"
        },
        mobile_dev: {
            title: "Mobil Uygulama Geliştirme",
            subtitle: "Kullanıcılarınızın cebinde yaşayan uygulamalar geliştiriyoruz. Modern SaaS ekosistemleri için Flutter, Dart ve .NET MAUI kullanarak yüksek performanslı çapraz platform mobil uygulamalar mühendisliyoruz.",
            expertise: [
                {
                    title: "Dart ve Flutter",
                    desc: "Tek bir kod tabanından hem iOS hem de Android için oldukça performanslı, görsel açıdan çarpıcı native uygulamalar geliştirmek amacıyla Flutter ve Dart kullanıyoruz; bu da pazara çıkış süresini büyük ölçüde azaltıyor."
                },
                {
                    title: "Mobil SaaS Entegrasyonları",
                    desc: "Mobil uygulamaları daha geniş SaaS ekosistemlerimize derinlemesine entegre ediyoruz. Mobil uygulamanız sadece bir son nokta değil; birbirine bağlı dijital ürün mimarinizin temel bir parçasıdır."
                },
                {
                    title: ".NET MAUI ve C#",
                    desc: "Kurumsal düzeydeki çapraz platform ihtiyaçları için .NET MAUI ve C# kullanıyoruz. Bu, mobil ve masaüstü uygulamaları genelinde benzersiz native performansıyla iş mantığını paylaşmamızı sağlıyor."
                },
                {
                    title: "Native Kullanıcı Deneyimi",
                    desc: "Hangi framework olursa olsun, kullanıcıların evlerinde hissetmesini sağlayan akıcı animasyonlar, jest tabanlı navigasyon ve native UI desenleri gibi detayları takıntı haline getiriyoruz."
                }
            ],
            showcase_badge: "Görsel Vitrin",
            showcase_title: "Çapraz Platform Mühendisliği",
            engine_title: "Mimari",
            engine_desc: "Mobil uygulamalarımız, güçlü backend API'leriyle sorunsuz bağlantı kuracak şekilde inşa edilmiştir. Offline öncelikli yeteneklere, güvenli veri senkronizasyonuna ve pürüzsüz arayüz işlemesine öncelik veriyoruz.",
            stack_title: "Teknoloji Yığını",
            video_cap: "Mobil Uygulama Arayüzü ve Etkileşimleri",
            cta_title: "Uygulamanızı başlatmaya hazır mısınız?",
            cta_desc: "iOS'ten Android'e, kullanıcıların seveceği ölçeklenebilir mobil ürünler tasarlıyoruz.",
            cta_btn: "Projenizi başlatın"
        },
        surec_page: {
            back_to_home: "Ana sayfaya dön",
            title: "Nasıl İnşa Ediyoruz",
            subtitle: "Riski azaltmak, kaliteyi sağlamak ve sizi her aşamada bilgilendirmek için tasarlanmış şeffaf, iteratif bir iş akışı.",
            phase: "Aşama",
            deliverables_title: "Teslimatlar",
            principles_title: "Prensiplerimiz",
            cta_title: "Projeye başlamaya hazır mısınız?",
            cta_desc: "Bize fikrinizden bahsedin. 24 saat içinde size dönüş yapacağız.",
            cta_btn: "İletişime Geçin",
            steps: [
                {
                    phase: "Keşif",
                    title: "Derinlemesine Analiz & Uyum",
                    desc: "Her harika ürün anlamakla başlar. İşinizi, kullanıcılarınızı ve hedeflerinizi öğrenmek için zaman harcarız. Yanlış şeyi güzel bir şekilde inşa etmemek için zor soruları baştan sorarız.",
                    deliverables: ["Gereksinimler belgesi", "Teknik fizibilite raporu", "Proje kapsam tanımı", "Zaman çizelgesi ve kilometre taşı planı"]
                },
                {
                    phase: "Tasarım",
                    title: "Mimari & UI/UX",
                    desc: "Üretim kodunun tek bir satırı bile yazılmadan önce, sistem mimarisini ve kullanıcı deneyimini tasarlarız. Önemli akışların prototipini çıkarır, varsayımları doğrular ve görsel yönde uyum sağlarız—böylece her kararın bir amacı olur.",
                    deliverables: ["Sistem mimarisi diyagramı", "Wireframe ve kullanıcı akışları", "Yüksek sadakatli UI prototipleri", "Tasarım sistemi tokenları"]
                },
                {
                    phase: "Geliştirme",
                    title: "Hassas Mühendislik",
                    desc: "Görebileceğiniz ve test edebileceğiniz çalışan parçalar sunarak, kısa döngüler halinde iteratif olarak inşa ederiz. Temiz kod, anlamlı commitler ve sürekli entegrasyon projenin sağlığını korur. Hiçbir zaman büyük bir 'sürpriz' beklemezsiniz.",
                    deliverables: ["Haftalık deploy edilebilir sürümler", "Kod incelemesi & dokümantasyon", "Birim ve entegrasyon testleri", "İlerleme raporları"]
                },
                {
                    phase: "Kalite",
                    title: "Test & Güçlendirme",
                    desc: "Ürün savaş testinden geçene kadar yayınlamayız. Herhangi bir üretim dağıtımından önce performans profili oluşturma, cihazlar arası test, güvenlik denetimleri ve kullanıcı kabul testleri gerçekleşir.",
                    deliverables: ["QA test raporları", "Performans denetimi", "Güvenlik kontrol listesi", "Tarayıcı & cihaz uyumluluk raporu"]
                },
                {
                    phase: "Lansman",
                    title: "Dağıtım & Devir",
                    desc: "CI/CD kurulumu, altyapı konfigürasyonu, DNS ve izleme dahil tam dağıtım hattını biz yönetiriz. Sadece bir repo teslim edip gitmeyiz; ürünü güvenle çalıştırmak ve geliştirmek için gereken her şeye sahip olduğunuzdan emin oluruz.",
                    deliverables: ["Production (Canlı) dağıtımı", "CI/CD hattı kurulumu", "Teknik dokümantasyon", "Ekip oryantasyon oturumu"]
                },
                {
                    phase: "Büyüme",
                    title: "İterasyon & Destek",
                    desc: "Lansman bir son değil, başlangıçtır. İşletmeniz büyüdükçe ürünü uyarlamak, izlemek ve ölçeklendirmek için devam eden sürekli geliştirme anlaşmaları sunarız.",
                    deliverables: ["Aylık geliştirme anlaşması", "Performans izleme", "Özellik yol haritası planlaması", "Öncelikli hata düzeltmeleri"]
                }
            ],
            principles: [
                { title: "Önce Şeffaflık", desc: "Nerede olduğumuzu, ne inşa ettiğimizi ve nedenini her zaman bilirsiniz." },
                { title: "Sürpriz Yok", desc: "Engelleri erkenden ortaya çıkarır ve proaktif bir şekilde iletişim kurarız." },
                { title: "Hız Yerine Derinlik", desc: "Aceleyle ürün çıkarmaktansa doğruluğu ve uzun ömürlülüğü önceliklendiririz." },
                { title: "Her Şey Sizin", desc: "Tüm kaynak kodları, varlıklar ve IP (Fikri Mülkiyet) tamamen size aittir." }
            ]
        },
        hakkimizda_page: {
            back_to_home: "Ana sayfaya dön",
            title: "Biz Kimiz",
            subtitle: "Yüksek kaliteli dijital ürünler, kurumsal otomasyon ve karmaşık backend sistemleri inşa etmeye odaklanan bağımsız bir yazılım geliştirme şirketiyiz.",
            cta_title: "Birlikte çalışmaya hazır mısınız?",
            cta_desc: "Çözülecek zorlayıcı problemleri her zaman arıyoruz.",
            cta_btn: "İletişime Geçin",
            mission_title: "Misyonumuz",
            mission_desc: "Modern işletmeler için temel motor görevi gören ölçeklenebilir, dirençli ve güzel tasarımlı yazılımlar sunmak.",
            values_title: "Temel Değerlerimiz",
            values: [
                { title: "Mühendislik Mükemmelliği", desc: "Kestirme yollara sapmayız. Temiz kod ve sağlam mimari tartışılamaz." },
                { title: "Tasarım Odaklı", desc: "Arayüz sinir bozucuysa işlevselliğin hiçbir anlamı yoktur. Mantığı güzel ve sezgisel tasarımla harmanlarız." },
                { title: "Radikal Şeffaflık", desc: "Açık iletişim, dürüst zaman çizelgeleri ve doğrudan teknik tavsiye." }
            ],
            founder_title: "Ekip",
            founder_desc: "BuildKor, karmaşık problemleri zarif kodlarla çözmeye takıntılı mühendisler tarafından kurulmuş ve yönetilmektedir.",
            team: []
        }
    }
};
