import {
    Briefcase,
    Gamepad2,
    Rocket,
} from "lucide-react";

export const experiences = [
    {
        year: "2026",
        duration: "Jan 2026 - May 2026",

        badge: "INTERNSHIP",
        badgeColor: "cyan",

        title: "Software Developer Intern",
        company: "QuickSO",
        icon: Rocket,

        current: false,

        description:
            "Developed features for a production construction management SaaS platform, transforming Figma designs into responsive interfaces while building business modules, authentication workflows, and backend integrations.",

        highlights: [
            "Production SaaS Development",
            "Thorough Manual Testing",
            "Figma to Responsive UI",
            "RBAC & Auth Systems",
        ],

        tech: ["React", "Next.js", "TypeScript"],
    },

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
            "End-to-End Deployment",
            "100% On-Time Deadlines",
            "Clients Worldwide",
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
            "AR/VR Mobile Applications",
            "C# Scripting & Mechanics",
            "Cross-Platform Optimization",
            "Git Version Control",
        ],

        tech: ["Unity", "C#", "Git"],
    },
];