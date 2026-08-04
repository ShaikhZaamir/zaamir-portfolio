import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiStrapi,
    SiPhp,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiFirebase,
    SiPrisma,
    SiJsonwebtokens,
    SiPython,
    SiGithub,
    SiGit,
    SiPostman,
    SiVercel,
    SiRailway,
    SiSupabase,
    SiAuth0,
    SiAndroidstudio,
    SiWordpress,
    SiShopify,
    SiOpenai,
} from "react-icons/si";

import {
    ShieldCheck,
    Database,
    Cloud,
    Workflow,
    Cpu,
    Zap,
    Search,
    Bug,
    TestTube,
    GitBranch,
} from "lucide-react";

export const skillCategories = {
    frontend: [
        {
            name: "React",
            icon: SiReact,
            description: "Building modern interactive user interfaces.",
            usedIn: ["QuickSO", "Runwayy Store", "Vendor Portal"],
        },
        {
            name: "Next.js",
            icon: SiNextdotjs,
            description: "Production-ready React applications.",
            usedIn: ["QuickSO", "Runwayy Store", "Noor Mobiles"],
        },
        {
            name: "TypeScript",
            icon: SiTypescript,
            description: "Type-safe scalable applications.",
            usedIn: ["QuickSO", "Vendor Portal", "Runwayy Store"],
        },
        {
            name: "JavaScript",
            icon: SiJavascript,
            description: "Core language powering web experiences.",
            usedIn: ["All Projects"],
        },
        {
            name: "HTML5",
            icon: SiHtml5,
            description: "Semantic and accessible web structure.",
            usedIn: ["All Projects"],
        },
        {
            name: "CSS3",
            icon: SiCss,
            description: "Modern styling and layouts.",
            usedIn: ["All Projects"],
        },
        {
            name: "Tailwind CSS",
            icon: SiTailwindcss,
            description: "Rapid modern UI development.",
            usedIn: ["QuickSO", "Portfolio", "Runwayy Store"],
        },
        {
            name: "Framer Motion",
            icon: SiFramer,
            description: "Beautiful UI animations.",
            usedIn: ["Portfolio"],
        },
        {
            name: "Responsive Web Design",
            icon: SiCss,
            description: "Building seamless experiences across devices.",
            usedIn: ["All Web Applications"],
        },
        {
            name: "App Router",
            icon: SiNextdotjs,
            description: "Modern Next.js application architecture.",
            usedIn: ["Runwayy Store", "Portfolio"],
        },
        {
            name: "shadcn/ui",
            icon: SiReact,
            description: "Reusable accessible UI components.",
            usedIn: ["Portfolio", "Runwayy Store"],
        },
        {
            name: "State Management",
            icon: Workflow,
            description: "Managing application state and data flow.",
            usedIn: ["React Applications"],
        },
    ],

    backend: [
        {
            name: "Node.js",
            icon: SiNodedotjs,
            description: "Server-side application development.",
            usedIn: ["QuickSO", "Vendor Portal"],
        },
        {
            name: "Express.js",
            icon: SiExpress,
            description: "REST APIs and backend services.",
            usedIn: ["Vendor Portal"],
        },
        {
            name: "Strapi",
            icon: SiStrapi,
            description: "Headless CMS and API management.",
            usedIn: ["QuickSO"],
        },
        {
            name: "REST APIs",
            icon: Workflow,
            description: "Building and integrating scalable APIs.",
            usedIn: ["QuickSO", "Vendor Portal", "Runwayy Store"],
        },
        {
            name: "PHP",
            icon: SiPhp,
            description: "Backend development and integrations.",
            usedIn: ["Client Projects"],
        },
        {
            name: "Razorpay",
            icon: Workflow,
            description: "Payment gateway integration.",
            usedIn: ["Runwayy Store"],
        },
    ],

    database: [
        {
            name: "PostgreSQL",
            icon: SiPostgresql,
            description: "Relational database systems.",
            usedIn: ["QuickSO", "Runwayy Store"],
        },
        {
            name: "MySQL",
            icon: SiMysql,
            description: "Structured business applications.",
            usedIn: ["Client Projects"],
        },
        {
            name: "MongoDB",
            icon: SiMongodb,
            description: "Flexible document databases.",
            usedIn: ["Personal Projects"],
        },
        {
            name: "Firebase",
            icon: SiFirebase,
            description: "Realtime backend services.",
            usedIn: ["Personal Projects"],
        },
        {
            name: "Prisma ORM",
            icon: SiPrisma,
            description: "Modern database toolkit.",
            usedIn: ["Runwayy Store"],
        },
        {
            name: "SQL",
            icon: Database,
            description: "Database querying and optimization.",
            usedIn: ["QuickSO", "Client Projects"],
        },
    ],

    auth: [
        {
            name: "JWT",
            icon: SiJsonwebtokens,
            description: "Authentication and authorization.",
            usedIn: ["Vendor Portal"],
        },
        {
            name: "OAuth",
            icon: SiAuth0,
            description: "Secure third-party authentication.",
            usedIn: ["Modern SaaS Apps"],
        },
        {
            name: "RBAC",
            icon: ShieldCheck,
            description: "Role-based access systems.",
            usedIn: ["QuickSO"],
        },
        {
            name: "Clerk",
            icon: ShieldCheck,
            description: "Authentication infrastructure.",
            usedIn: ["Modern Applications"],
        },
        {
            name: "Supabase Auth",
            icon: SiSupabase,
            description: "Authentication and user management.",
            usedIn: ["Personal Projects"],
        },
        {
            name: "NextAuth.js",
            icon: ShieldCheck,
            description: "Authentication for Next.js applications.",
            usedIn: ["Runwayy Store"],
        },
    ],

    ai: [
        {
            name: "Python",
            icon: SiPython,
            description: "Programming, automation, and AI.",
            usedIn: ["AI Projects"],
        },
        {
            name: "AI Integration",
            icon: SiOpenai,
            description: "Connecting applications with AI services.",
            usedIn: ["AI Applications"]
        },
        {
            name: "Computer Vision",
            icon: Cpu,
            description: "Image processing and recognition systems.",
            usedIn: ["Academic Projects"],
        },
        {
            name: "Machine Learning Fundamentals",
            icon: Zap,
            description: "Fundamentals of machine learning and predictive systems.",
            usedIn: ["AI Projects"],
        },
        {
            name: "Automation Scripts",
            icon: Workflow,
            description: "Automating repetitive workflows.",
            usedIn: ["Personal Projects"],
        },
    ],

    cloud: [
        {
            name: "Vercel",
            icon: SiVercel,
            description: "Frontend deployment platform.",
            usedIn: ["Runwayy Store", "Portfolio"],
        },
        {
            name: "Railway",
            icon: SiRailway,
            description: "Backend and database deployment.",
            usedIn: ["Runwayy Store"],
        },
        {
            name: "AWS",
            icon: Cloud,
            description: "Frontend deployment platform.",
            usedIn: ["Runwayy Store", "Portfolio"],
        },
        {
            name: "Production Deployment",
            icon: Cloud,
            description: "Production application releases.",
            usedIn: ["All Projects"],
        },
        {
            name: "Render",
            icon: Cpu,
            description: "Frontend deployment platform.",
            usedIn: ["Runwayy Store", "Portfolio"],
        },
        {
            name: "Application Configuration",
            icon: Cloud,
            description: "Managing application configurations.",
            usedIn: ["Production Applications"],
        },
    ],

    tools: [
        {
            name: "Git",
            icon: SiGit,
            description: "Version control workflows.",
            usedIn: ["Every Project"],
        },
        {
            name: "GitHub",
            icon: SiGithub,
            description: "Source control and collaboration.",
            usedIn: ["Every Project"],
        },
        {
            name: "Postman",
            icon: SiPostman,
            description: "API testing and development.",
            usedIn: ["Backend Development"],
        },
        {
            name: "Android Studio",
            icon: SiAndroidstudio,
            description: "Mobile application development.",
            usedIn: ["Academic Projects"],
        },
        {
            name: "WordPress",
            icon: SiWordpress,
            description: "CMS and website development.",
            usedIn: ["Client Projects"],
        },
        {
            name: "Shopify",
            icon: SiShopify,
            description: "E-commerce platform development.",
            usedIn: ["Client Projects"],
        },
    ],

    concepts: [
        {
            name: "Full Stack Development",
            icon: Workflow,
            description: "End-to-end application development.",
            usedIn: ["QuickSO", "Runwayy Store"],
        },
        {
            name: "API Integration",
            icon: Workflow,
            description: "Connecting external services and systems.",
            usedIn: ["All Projects"],
        },
        {
            name: "Performance Optimization",
            icon: Zap,
            description: "Improving application speed and efficiency.",
            usedIn: ["Production Applications"],
        },
        {
            name: "SEO",
            icon: Search,
            description: "Search engine optimization practices.",
            usedIn: ["Web Applications"],
        },
        {
            name: "E-Commerce Development",
            icon: SiShopify,
            description: "Building online commerce solutions.",
            usedIn: ["Runwayy Store"],
        },
        {
            name: "Software Testing",
            icon: TestTube,
            description: "Validation and quality assurance.",
            usedIn: ["QuickSO"],
        },
        {
            name: "Bug Fixing & Maintenance",
            icon: Bug,
            description: "Production issue resolution.",
            usedIn: ["QuickSO"],
        },
        {
            name: "Business Workflow Automation",
            icon: Workflow,
            description: "Automating operational processes.",
            usedIn: ["QuickSO"],
        },
        {
            name: "Agile Development",
            icon: GitBranch,
            description: "Collaborative iterative development.",
            usedIn: ["Professional Experience"],
        },
    ],

};
