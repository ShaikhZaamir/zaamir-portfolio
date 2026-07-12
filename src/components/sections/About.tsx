"use client";

import { motion } from "framer-motion";
import { Briefcase, Boxes, Brain, ShoppingCart } from "lucide-react";

const highlights = [
    {
        title: "SaaS Apps",
        description: "Scalable multi-tenant platforms built for real business workflows.",
        icon: Briefcase,
    },
    {
        title: "Full Stack",
        description: "End-to-end ownership - frontend, API, database, and deployment.",
        icon: Boxes,
    },
    {
        title: "AI Systems",
        description: "Intelligent automation and LLM-powered features baked into products.",
        icon: Brain,
    },
    {
        title: "E-Commerce",
        description: "High-converting storefronts and headless commerce architectures.",
        icon: ShoppingCart,
    },
];

const focusAreas = ["SaaS Platforms", "Business Applications", "AI-Powered Systems", "E-Commerce Solutions"];
const exploring = ["System Design", "AI Integration", "Scalable Architectures", "Cloud & Deployment"];

/* Stagger config */
const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};
const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function About() {
    return (
        <section id="about" className="relative py-16 sm:py-20 lg:py-28 bg-background">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        About
                    </p>

                    <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                        Building software that solves
                        <br className="hidden sm:block" />
                        &nbsp;real business problems
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                        I&apos;m a software developer focused on turning complex requirements into
                        reliable, maintainable, and user-focused software from SaaS platforms
                        to AI-powered solutions.
                    </p>
                </motion.div>

                {/* ── Highlight cards ── */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4"
                >
                    {highlights.map(({ title, description, icon: Icon }) => (
                        <motion.div
                            key={title}
                            variants={item}
                            whileHover={{ y: -4 }}
                            className="group flex flex-col gap-3 rounded-2xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/30 hover:bg-muted/50 sm:p-5"
                        >
                            <div className="w-fit rounded-xl border border-border bg-background p-2.5 transition-colors group-hover:border-primary/20 group-hover:bg-primary/10">
                                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary sm:h-6 sm:w-6" />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold text-foreground">
                                    {title}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                    {description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Developer profile card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-6 rounded-2xl border border-border bg-muted/30 p-5 sm:mt-8 sm:p-8"
                >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <span className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            Developer profile
                        </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-2xl lg:text-3xl">
                        Passionate about building impactful software
                    </h3>

                    <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
                        I enjoy building software that creates measurable value for users and
                        businesses. My interests span full-stack development, SaaS platforms,
                        AI-powered solutions, and scalable system design writing clean,
                        maintainable code that solves real problems.
                    </p>

                    <div className="my-6 h-px bg-border sm:my-8" />

                    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                        {/* Focus on */}
                        <div>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Focus on
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {focusAreas.map((f) => (
                                    <span
                                        key={f}
                                        className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-secondary-foreground"
                                    >
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Currently exploring */}
                        <div>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Currently exploring
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exploring.map((e) => (
                                    <span
                                        key={e}
                                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-primary"
                                    >
                                        {e}
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