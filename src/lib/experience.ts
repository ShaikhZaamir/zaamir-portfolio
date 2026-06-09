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
            "Designed and developed websites, web applications, and custom software solutions for clients across multiple industries, delivering end-to-end projects from concept to deployment.",

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
            "Contributed to Unity-based applications while gaining hands-on experience in software development workflows, version control, and collaborative development practices.",

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
            "Contributed to the maintenance and testing of a production SaaS platform, resolving frontend and backend issues, validating business workflows, performing functional testing, and supporting software solutions used by real clients.",

        highlights: [
            "Production SaaS Platform",
            "Bug Fixing & Maintenance",
            "Software Testing & QA",
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
            "Building and maintaining a production Construction Management SaaS platform, developing full-stack features, optimizing business workflows, resolving production issues, and supporting software used by real businesses.",

        highlights: [
            "Production SaaS Platform",
            "Full Stack Development",
            "Business Workflow Solutions",
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