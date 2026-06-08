import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiStrapi,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiPrisma,
    SiJsonwebtokens,
    SiPython,
    SiGithub,
    SiPostman,
    SiVercel,
    SiRailway,
} from "react-icons/si";

import { ShieldCheck } from "lucide-react";

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
            name: "Prisma ORM",
            icon: SiPrisma,
            description: "Modern database toolkit.",
            usedIn: ["Runwayy Store"],
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
            icon: ShieldCheck,
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
    ],

    ai: [
        {
            name: "Python",
            icon: SiPython,
            description: "AI integrations and automation.",
            usedIn: ["AI Projects"],
        },
    ],

    tools: [
        {
            name: "GitHub",
            icon: SiGithub,
            description: "Version control and collaboration.",
            usedIn: ["Every Project"],
        },
        {
            name: "Postman",
            icon: SiPostman,
            description: "API testing and development.",
            usedIn: ["Backend Development"],
        },
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
    ],
};