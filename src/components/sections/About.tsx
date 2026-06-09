"use client";

import { motion } from "framer-motion";
import {
    Briefcase,
    Boxes,
    Brain,
    ShoppingCart,
} from "lucide-react";

const highlights = [
    {
        title: "SaaS Apps",
        description: "Building scalable business platforms.",
        icon: Briefcase,
    },
    {
        title: "Full Stack",
        description: "Frontend, backend, databases, and APIs.",
        icon: Boxes,
    },
    {
        title: "AI Systems",
        description: "Integrating intelligent features and automation.",
        icon: Brain,
    },
    {
        title: "E-Commerce",
        description: "Building modern online commerce experiences.",
        icon: ShoppingCart,
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        ABOUT
                    </p>

                    <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
                        Building Software That Solves
                        <br />
                        Real Business Problems
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl leading-7 text-slate-400">
                        I'm a Software Developer focused on building scalable
                        software products that solve real-world challenges.
                        From SaaS platforms and business applications to
                        e-commerce systems and AI-powered solutions, I enjoy
                        turning complex requirements into reliable,
                        maintainable, and user-focused software.
                    </p>
                </motion.div>

                {/* Focus Areas */}
                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.08,
                                }}
                                whileHover={{ y: -6 }}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-primary/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]"
                            >
                                <Icon className="h-8 w-8 text-primary" />

                                <h3 className="mt-4 font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Developer Profile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                    <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        DEVELOPER PROFILE
                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-white">
                        Passionate About Building Impactful Software
                    </h3>

                    <p className="mt-6 leading-7 text-slate-400">
                        I enjoy building software that creates measurable value for users and businesses.
                        My interests span full-stack development, SaaS platforms, business applications, AI-powered
                        solutions, and scalable system design. Through freelance projects, production SaaS development,
                        and continuous learning, I focus on writing clean, maintainable, and impactful software that
                        solves real problems.
                    </p>

                    <div className="mt-10 grid gap-8 md:grid-cols-2">
                        <div>
                            <h4 className="text-lg font-semibold text-white">
                                Focus On
                            </h4>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {[
                                    "SaaS Platforms",
                                    "Business Applications",
                                    "AI-Powered Systems",
                                    "E-Commerce Solutions",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white">
                                Currently Exploring
                            </h4>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {[
                                    "System Design",
                                    "AI Integration",
                                    "Scalable Architectures",
                                    "Cloud & Deployment Practices",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}