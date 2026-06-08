import {
    Briefcase,
    Gamepad2,
    Rocket,
    Star,
} from "lucide-react";

export const experiences = [
    {
        year: "2022",
        duration: "Jan 2022 - Dec 2024",

        badge: "FREELANCE",
        badgeColor: "amber",

        title: "Freelance Developer",
        company: "Fiverr",
        icon: Briefcase,

        current: false,

        description:
            "Delivered websites, web applications, and custom software solutions for clients across various domains.",

        highlights: [
            "10+ Projects Delivered",
            "International Clients",
            "3 Years Freelancing",
        ],

        tech: ["React", "JavaScript", "Node.js"],
    },

    {
        year: "2022",
        duration: "Feb 2022 - May 2022",

        badge: "INTERNSHIP",
        badgeColor: "cyan",

        title: "Unity Developer Intern",
        company: "Vighnesh Inc.",
        icon: Gamepad2,

        current: false,

        description:
            "Worked on Unity-based applications and gained experience in software development workflows.",

        highlights: [
            "Unity Development",
            "Game Mechanics",
            "Version Control with Git",
        ],

        tech: ["Unity", "C#", "Git"],
    },

    {
        year: "2026",
        duration: "Jan 2026 - Jun 2026",

        badge: "INTERNSHIP",
        badgeColor: "cyan",

        title: "Software Developer Intern",
        company: "QuickSO",
        icon: Rocket,

        current: false,

        description:
            "Contributed to SaaS platform development and production software workflows.",

        highlights: [
            "Production SaaS Platform",
            "Frontend Development",
            "Real Business Workflows",
        ],

        tech: ["React", "Next.js", "TypeScript"],
    },

    {
        year: "Present",
        duration: "Jun 2026 - Present",

        badge: "CURRENT ROLE",
        badgeColor: "emerald",

        title: "Junior Software Developer",
        company: "QuickSO",
        icon: Star,

        current: true,

        description:
            "Building and maintaining features for a Construction Management SaaS platform.",

        highlights: [
            "Production SaaS Platform",
            "Full Stack Development",
            "React + Next.js + TypeScript",
        ],

        tech: [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Strapi",
        ],
    },
];